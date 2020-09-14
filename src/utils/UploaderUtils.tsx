export const transformFileListToArray = (fileList: FileList | null): File[] => {
  const array: File[] = [];
  if (!!fileList) {
    for (let i = 0; i < fileList.length; i++) {
      array.push(fileList.item(i) as File);
    }
  }
  return array;
};
