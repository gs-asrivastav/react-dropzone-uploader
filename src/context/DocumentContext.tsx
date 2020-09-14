import React, {createContext, useEffect, useState} from "react";

export interface DocumentContextInterface {
  limits: {
    maximumFileSizeInBytes: number,
    allowedExtensions: string[]
    maxConcurrentUploads: number,
    maxFilesPerPage: number
  } | null;
  states: string[]
}

export const DocumentContext = createContext<DocumentContextInterface>({
  limits: null,
  states: []
});

export const DocumentContextProvider = (props: any) => {
  const [data, setData] = useState(null as any);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setData({
      "limits": {
        "maximumFileSizeInBytes": 50000000,
        "allowedExtensions": [
          "pdf",
          "xlsx",
          "xls",
          "pptx",
          "ppt",
          "doc",
          "docx",
          "txt",
          "rtf"
        ],
        "maxConcurrentUploads": 5,
        "maxFilesPerPage": 20
      },
      "states": [
        "processing",
        "failed",
        "success",
        "queued"
      ]
    });
    setLoaded(true)
  }, []);
  return (
      !loaded ? <div>Loading..</div>
          : (!!data ? <DocumentContext.Provider value={data} {...props} /> : <div>Not Allowed</div>)
  )

};
