import React from "react";
import {StandardProps} from "@material-ui/core";

export interface FileUploaderBootstrap {
  limits: {
    maximumFileSizeInBytes: number,
    allowedExtensions: string[]
    maxConcurrentUploads: number,
    maxFilesPerPage: number
  } | null;
  states: string[]
}
export interface FileUploaderEventObject {
  action: string;
  data: any;
}

export interface FileUploaderProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'root'>{
  disabled: boolean;
  onAction: (arg: FileUploaderEventObject) => void;
  dropPlaceholder?: React.ReactNode;
}
