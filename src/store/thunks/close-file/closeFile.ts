import { AppDispatch, RootState } from '../../../types/Store';
import { removeActiveFile, setEditorActiveFile } from '../../slices/files/files';

export const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const {
    files: { activeFilesIds, editorActiveFileId },
  } = getState();
  const activeFilesLength = activeFilesIds.length;

  if (activeFilesLength === 1) {
    dispatch(setEditorActiveFile(null));
  } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveFileId) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);
    dispatch(setEditorActiveFile(newActiveFileId));
  }

  dispatch(removeActiveFile(fileToCloseId));
};

const getNewActiveFileId = (activeFilesIds: string[], activeFilesLength: number, fileToCloseId: string) => {
    const fileToBeRemovedIndex = activeFilesIds.indexOf(fileToCloseId);

    // this happens when the active file is the rightnost tab
    if (fileToBeRemovedIndex + 1 === activeFilesLength) {
        return activeFilesIds[fileToBeRemovedIndex - 1];
    }

    return activeFilesIds[fileToBeRemovedIndex + 1];
}