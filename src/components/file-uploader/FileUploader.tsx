import React, {ChangeEvent, DragEvent, useEffect, useRef, useState} from "react";
import Zoom from "@material-ui/core/Zoom";
import './FileUploader.css';
import {transformFileListToArray} from "../../utils/UploaderUtils";
import {FileUploaderProps} from "../../interfaces/FileUploaderInterfaces";


export const FileUploader = React.forwardRef((props: FileUploaderProps, ref) => {
  // Local State Only
  const [inDropZone, setInDropZone] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(props.disabled);
  }, [props.disabled]);

  const emitAction = (eventObject: any) => {
    if (!!props.onAction) {
      props.onAction.call(null, eventObject);
    }
  };

  const fileInputRef = useRef(null);
  const openFileDialog = () => {
    if (!disabled) {
      if (!!fileInputRef && !!fileInputRef.current) {
        // @ts-ignore
        fileInputRef.current.click();
      }
    }
  };

  React.useImperativeHandle(ref, () => ({
    click: openFileDialog
  }))

  const onDragEnter = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (!disabled) {
      event.dataTransfer.dropEffect = 'copy';
      setInDropZone(true);
    }
  }

  const onDragOver = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!disabled) {
      event.dataTransfer.dropEffect = 'copy';
    }
  };

  const onDragLeave = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!disabled) {
      setInDropZone(false);
    }
  };

  const onDrop = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (!disabled) {
      setInDropZone(false);
      emitAction({
        action: 'FILES_DROPPED',
        data: transformFileListToArray(event.dataTransfer.files)
      });
    }
  };

  const onFileAddition = (event: ChangeEvent) => {
    if (disabled) {
      return;
    }
    const element = event.target as HTMLInputElement;
    emitAction({
      action: 'FILES_DROPPED',
      data: transformFileListToArray(element.files)
    })
  };


  return (<div className="FileUploaderRoot">
    <input
        ref={fileInputRef}
        className="FileUploaderFileInput"
        onChange={onFileAddition}
        type="file"
        multiple
    />
    <div className="FileUploaderOverlay"
         onDragOver={onDragOver}
         onDragEnter={onDragEnter}>
      <Zoom in={inDropZone}>
        <div className="FileUploaderHighlighted" onDrop={onDrop} onDragLeave={onDragLeave}>
          {!!props.dropPlaceholder ? props.dropPlaceholder : null}
        </div>
      </Zoom>
      <div className="FileUploaderPlaceholder">
        List Renderer
      </div>
    </div>
  </div>);
});
