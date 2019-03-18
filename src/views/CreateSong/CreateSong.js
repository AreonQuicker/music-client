import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import useMutationAPI from '../../hooks/useMutationAPI';
import { CREATE_SONG } from '../../gqlTags/songsQueries';
import useFireBaseStorage from '../../hooks/useFireBaseStorage';
import { addSong } from '../../actions/songsActions';
import SongsContext from '../../context/SongsContext';

const LayoutStyle = styled.div`
  display: grid;
`;

function CreateSong() {
  const [values, setValues] = useState({ name: null, desc: null });
  const [file, setFile] = useState(null);

  const context = useContext(SongsContext);

  const {
    upload: uploadFile,
    loading: uploadFileLoading,
  } = useFireBaseStorage();

  const { action: createSong, createSongLoading } = useMutationAPI(CREATE_SONG);

  useEffect(() => {}, []);

  const loading = uploadFileLoading || createSongLoading;

  const handleValueChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelect = e => {
    const selectedfile = e.target.files[0];
    setFile(selectedfile);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }
    if (!values.name) {
      alert('Please fill in the name of the song');
      return;
    }
    if (!values.desc) {
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
      if (song) context.dispatch(addSong(song));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutStyle>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input id="name" type="text" name="name" onChange={handleValueChange} />
        <label htmlFor="desc"> Description</label>
        <input id="desc" type="text" name="desc" onChange={handleValueChange} />
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value={loading ? 'Saving' : 'Save'} />
      </form>
    </LayoutStyle>
  );
}

export default CreateSong;
