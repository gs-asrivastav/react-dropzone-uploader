import {FileUploaderBootstrap} from "../interfaces/FileUploaderInterfaces";

export class UploaderConstants {
  public static UPLOADER_BOOTSTRAP: FileUploaderBootstrap = {
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
  };
}
