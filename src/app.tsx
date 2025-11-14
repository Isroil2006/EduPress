import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import Course from "./pages/course/course";
import Blog from "./pages/blog/blog";
import Contact from "./pages/page/contact";
import "./index.css";

export default function App() {
    const location = useLocation();
    return (
        <div className="">
            <Navbar />
            <Routes location={location}>
                <Route path="/" element={Home()} />
                <Route path="/courses" element={Course()} />
                <Route path="/blog" element={Blog()} />
                <Route path="/page">
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}
