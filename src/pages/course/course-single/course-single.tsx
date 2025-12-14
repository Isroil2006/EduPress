import SingleCourse from "./sections/single-course-hero";
import Navigation from "./sections/navigation";
import SingleCourseTabs from "./sections/single-course-tabs";
import SingleCourseCommet from "./sections/single-course-commet";

export default function CourseSingle() {
    return (
        <div>
            <Navigation />
            <SingleCourse />
            <SingleCourseTabs />
            <SingleCourseCommet />
        </div>
    );
}
