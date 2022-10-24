import { Switch } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { toggleDarkMode } from "../../../store/slices/dark-mode/darkMode";
import DarkModeIcon from "@mui/icons-material/Brightness2";

const DarkModeSwitch = () => {
    const isDarkModeEnabled = useAppSelector((state) => state.darkMode);
    const dispatch = useAppDispatch();

    const onChangeDarkMode = () => {
        dispatch(toggleDarkMode());
    };

  return (
    <>
        <DarkModeIcon />
        <Switch color="default" checked={isDarkModeEnabled} onChange={onChangeDarkMode} />
    </>
  )
}

export default DarkModeSwitch