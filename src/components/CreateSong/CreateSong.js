import React, { useState, useEffect, useContext, useRef } from 'react';

import useMutationAPI from '../../hooks/useMutationAPI';
import { CREATE_SONG } from '../../gqlTags/songsQueries';
import useFireBaseStorage from '../../hooks/useFireBaseStorage';
import { addSong } from '../../actions/songsActions';
import SongsContext from '../../context/SongsContext';
import CButton from '../Inputs/CButton';
import CText from '../Inputs/CText';
import { FormStyle } from '../styles';

function CreateSong() {
  const [values, setValues] = useState({ name: '', desc: '' });
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);
  const context = useContext(SongsContext);
  const {
    upload: uploadFile,
    loading: uploadFileLoading,
  } = useFireBaseStorage();
  const { action: createSong, createSongLoading } = useMutationAPI(CREATE_SONG);

  useEffect(() => {}, []);

  const loading = uploadFileLoading || createSongLoading;

  function clearFields() {
    setValues({ name: '', desc: '' });
    setFile(null);
  }

  function handleValueChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileSelect(e) {
    const selectedfile = e.target.files[0];
    setFile(selectedfile);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }
    if (values.name === '') {
      alert('Please fill in the name of the song');
      return;
    }
    if (values.desc === '') {
      alert('Please fill in the description of the song');
      return;
    }
    try {
      const downloadUrl = await uploadFile(file);
      const createSongResult = await createSong({
        ...values,
        downloadPath: downloadUrl,
      });
      const {
        data: { createSong: song = null },
      } = createSongResult || {};
      if (song) context.songsDispatch(addSong(song));
      clearFields();
    } catch (error) {
      console.log(error);
      clearFields();
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div className="top">
        <div className="top__left">Create Song</div>
        <div className="top__right" />
      </div>
      <div className="middle">
        <div className="middle__inner">
          <div className="field">
            <label htmlFor="name">Name:</label>
            <CText
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleValueChange}
              disabled={loading}
            />
          </div>
          <div className="field">
            <label htmlFor="desc">Description:</label>
            <CText
              id="desc"
              type="text"
              name="desc"
              value={values.desc}
              onChange={handleValueChange}
              disabled={loading}
            />
          </div>
          <div className="field">
            <label htmlFor="file">Song:</label>
            <div className="iAndText">
              <i
                className="material-icons"
                onClick={() => {
                  fileInput.current.click();
                }}
              >
                attach_file
              </i>
              {file && file.name}
              <input
                ref={fileInput}
                style={{ display: 'none' }}
                name="file"
                id="file"
                type="file"
                onChange={handleFileSelect}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom__left" />
        <div className="bottom__right">
          <CButton type="submit" value={loading ? 'Saving...' : 'Save'} />
        </div>
      </div>
    </FormStyle>
  );
}

export default CreateSong;
