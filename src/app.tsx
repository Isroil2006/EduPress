import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import "./index.css";

export default function App() {
    const location = useLocation();
    return (
        <div className="">
            <Navbar />
            <Routes location={location}>
                <Route path="/" element={Home()} />
            </Routes>
        </div>
    );
}
