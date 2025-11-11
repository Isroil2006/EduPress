import Hero from "./sections/hero";
import Categories from "./sections/categories";
import Courses from "./sections/courses";
export default function Home() {
    return (
        <div className="flex flex-col gap-[90px]">
            <Hero />
            <Categories />
            <Courses />
        </div>
    );
}
