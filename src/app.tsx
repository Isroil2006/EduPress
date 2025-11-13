import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import Course from "./pages/course/course";
import "./index.css";

export default function App() {
    const location = useLocation();
    return (
        <div className="">
            <Navbar />
            <Routes location={location}>
                <Route path="/" element={Home()} />
                <Route path="/courses" element={Course()} />
            </Routes>
            <Footer/>
        </div>
    );
}
