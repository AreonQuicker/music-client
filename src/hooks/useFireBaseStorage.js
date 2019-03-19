import { useEffect, useRef, useState } from 'react';
import { firebaseStorage, firebase } from '../fireBase/fireBase';

const storageRef = firebaseStorage.ref();

function UseFireBaseStorage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgess] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState(0);

  useEffect(() => {}, []);

  const upload = useRef(async file => {
    const childRef = storageRef.child(file.name);
    setLoading(true);
    const uploadTask = childRef.put(file);
    return new Promise((res, error) => {
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
          const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgess(p);
        },
        function(error) {
          setLoading(false);
          setError(error);
          error(error);
        },
        async function() {
          const d = await uploadTask.snapshot.ref.getDownloadURL();
          setLoading(false);
          setDownloadUrl(d);
          res(d);
        }
      );
    });
  }, []);

  return { upload: upload.current, error, loading, progress, downloadUrl };
}

export default UseFireBaseStorage;
