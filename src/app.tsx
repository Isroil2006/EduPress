import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import Course from "./pages/course/course";
import CourseSingle from "./pages/course/course-single/course-single";
import Blog from "./pages/blog/blog";
import Contact from "./pages/page/contact";
import FAQS from "./pages/page/faqs";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import "./index.css";
import { ProtectedRoute } from "./protectedRoute";

export default function App() {
    const location = useLocation();

    const hideLayout = location.pathname === "/login" || location.pathname === "/register";
    return (
        <div>
            {!hideLayout && <Navbar />}

            <Routes>
                {/* PROTECTED ROUTES */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Course />} />
                    <Route path="/courses/:id" element={<CourseSingle />} />
                    <Route path="/blog" element={<Blog />} />

                    <Route path="/page">
                        <Route path="contact" element={<Contact />} />
                        <Route path="faqs" element={<FAQS />} />
                    </Route>
                </Route>

                {/* PUBLIC ROUTES */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            {!hideLayout && <Footer />}
        </div>
    );
}
