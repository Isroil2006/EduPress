import { useLocation, useParams } from "react-router-dom";

export default function SingleCourse() {
    const { id } = useParams();
    const location = useLocation();
    const { img } = location.state || {};

    return (
        <div>
            <h1>Course ID: {id}</h1>
            {img && <img src={img} alt="Course" />}
        </div>
    );
}
