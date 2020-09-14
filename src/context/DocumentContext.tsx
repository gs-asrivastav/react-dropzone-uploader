import React, {createContext, useEffect, useState} from "react";
import {FileUploaderBootstrap} from "../interfaces/FileUploaderInterfaces";
import {UploaderConstants} from "../utils/UploaderConstants";

export const DocumentContext = createContext<FileUploaderBootstrap>({
  limits: null,
  states: []
});

export const DocumentContextProvider = (props: any) => {
  const [data, setData] = useState(null as FileUploaderBootstrap | null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setData(UploaderConstants.UPLOADER_BOOTSTRAP)
    setLoaded(true)
  }, []);
  return (
      !loaded ? <div>Loading..</div>
          : (!!data ? <DocumentContext.Provider value={data} {...props} /> : <div>Not Allowed</div>)
  )

};
