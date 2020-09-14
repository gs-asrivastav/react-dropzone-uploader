import React, {useState} from 'react';
import {FileUploader} from './components/file-uploader/FileUploader';
import {FileUploaderEventObject} from "./interfaces/FileUploaderInterfaces";
import {FileUploaderPlaceholder} from "./components/placeholder/FileUploaderPlaceholder";

function App() {
  const [files, setFiles] = useState([] as any[]);

  const onAction = (action: FileUploaderEventObject) => {
    setFiles([...files, ...action.data]);
  };

  return (
      <div className="App" style={{height: '100%'}}>
        <FileUploader disabled={false} dropPlaceholder={<FileUploaderPlaceholder/>} onAction={onAction}>
          <div>Files Added = {files.length}</div>
          {files.map((file: File, index) => (<div key={index}>{file.name}</div>))}
        </FileUploader>
      </div>
  );
}

export default App;
