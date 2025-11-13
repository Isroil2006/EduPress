import Navigation from "./sections/navigation";
import AllCourses from "./sections/all-courses";

export default function Course() {
    return (
        <div className="w-full">
            <Navigation />
            <AllCourses />
        </div>
    );
}
