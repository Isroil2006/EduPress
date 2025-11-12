import Hero from "./sections/hero";
import Categories from "./sections/categories";
import Courses from "./sections/courses";
import LearnPress from "./sections/learnPress";
import HomeInfo from "./sections/home-info";
export default function Home() {
    return (
        <div className="flex flex-col gap-[90px]">
            <Hero />
            <Categories />
            <Courses />
            <LearnPress />
            <HomeInfo />
        </div>
    );
}
