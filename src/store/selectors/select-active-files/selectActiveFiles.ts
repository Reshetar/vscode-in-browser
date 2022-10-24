import { createSelector } from "reselect";
import { UserFile } from "../../../types/Files";
import { RootState } from "../../../types/Store";
import { FilesState } from "../../slices/files/files";

type UserFilesMap = { [key: string]: UserFile };

const selectActiveFiles = (files: FilesState) => {
    const { userFiles, activeFilesIds } = files;
    const UserFilesMap = userFiles.reduce((result, activeFile) => {
        result[activeFile.id] = activeFile;
        return result;
    }, {} as UserFilesMap);
    return activeFilesIds.map((activeFileId) => UserFilesMap[activeFileId]);
};

export default createSelector((state: RootState) => state.files, selectActiveFiles);