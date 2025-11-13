import Hero from "./sections/hero";
import Categories from "./sections/categories";
import Courses from "./sections/courses";
import LearnPress from "./sections/learnPress";
import HomeInfo from "./sections/home-info";
import Grow from "./sections/grow";
import Providing from "./sections/providing";
import Student from "./sections/student";
import Academy from "./sections/academy";
import Latest from "./sections/latest";

export default function Home() {
  return (
    <div className="flex flex-col gap-[90px] pb-[90px]">
      <Hero />
      <Categories />
      <Courses />
      <LearnPress />
      <HomeInfo />
      <Grow />
      <Providing />
      <Student />
      <Academy />
      <Latest />
    </div>
  );
}
