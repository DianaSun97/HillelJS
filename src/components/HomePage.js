import { useContext } from "react";
import Main from './Main';
import Lists from './Lists';
import { ThemeContext } from "../providers/ThemeContext";
import Pagination from "./Pagination";

const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? 'Theme-Light' : 'Theme-Dark'}>
            <Main />
            <Pagination className={theme ? 'Theme-Light' : 'Theme-Dark'} theme={theme}/>
            <Lists />
        </div>
    )
}

export default HomePage;

