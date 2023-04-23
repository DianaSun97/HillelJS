import {CardsRickyMorty} from './components/Lists'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
    useParams,
    Navigate,
} from "react-router-dom";
import {Loader} from "./components/Loading";
import {Heroes} from "./pages/Heroes";
import {Episodes} from "./pages/Episodes";
import {HomePage} from "./pages/HomePage";
import {Hero} from "./pages/Hero";


const Navigation = () => (
    <nav>
        <Link style={{padding: 10}} to="/">
            Home
        </Link>
        <Link style={{padding: 10}} to="/heroes">
            Heroes
        </Link>
        <Link style={{padding: 10}} to="/episodes">
            Episodes
        </Link>
    </nav>
);
const App = () => {
    return <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/heroes" element={<Heroes/>}>
                <Route path="hero/:id" element={<Hero/>}/>
            </Route>
            <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
    </BrowserRouter>
}

export default App