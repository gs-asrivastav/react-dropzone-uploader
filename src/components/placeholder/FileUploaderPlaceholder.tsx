import 'react';
import Placeholder from "../../assets/file-svgrepo-com.svg";
import React from "react";
import "./FileUploaderPlaceholder.css"

export const FileUploaderPlaceholder = () => {
  return (
      <div className="UploaderPlaceholderWrapper">
        <div className="UploaderPlaceholder">
          <img className="UploaderPlaceholderImage" alt={"Drop files to upload"} src={Placeholder}/>
          <div className="UploaderPlaceholderText">Drop files to upload</div>
        </div>
      </div>
  )
};
