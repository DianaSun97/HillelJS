import '../style/toggler.css';

import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";

const Main = () => {
    const themeCtx = useContext(ThemeContext);

    const handleThemeChange = () => {
        themeCtx.changeTheme();
    }
    return (
        <div>
            <header>Click me</header>
            <input onClick={handleThemeChange} type="checkbox"></input>
        </div>
    )
}

export default Main;