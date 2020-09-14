import React, {useState} from 'react';
import {FileUploader} from './components/file-uploader/FileUploader';
import {FileUploaderEventObject} from "./interfaces/FileUploaderInterfaces";
import {DocumentContextProvider} from "./context/DocumentContext";

function App() {
  const [files, setFiles] = useState([] as any[]);

  const onAction = (action: FileUploaderEventObject) => {
    setFiles([...files, ...action.data]);
  };

  return (
      <div className="App" style={{height: '100%'}}>
        <div>Files Added = {files.length}</div>
        <DocumentContextProvider>
          <FileUploader disabled={false} onAction={onAction}/>
        </DocumentContextProvider>
      </div>
  );
}

export default App;
