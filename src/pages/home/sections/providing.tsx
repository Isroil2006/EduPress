import { Button } from "@/components/ui/button";

export default function Providing() {
  return (
    <div className="myContainer">
      <div className=" bg-[url('/home-images/providing-img/providing-background.png')] bg-cover h-[300px] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center ">
          <p className="font-semibold font-exo">PROVIDING AMAZING</p>
          <h1 className="text-[32px] font-semibold font-exo">
            Education Wordpress Theme
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-[18px] font-just">
            The next level of LMS WordPress Theme. Learn anytime and anywhere.
          </p>
          <Button className="bg-[#FF782D] duration-300 rounded-[30px] text-[18px] py-[24px] font-jost">
            Explorer course
          </Button>
        </div>
      </div>
    </div>
  );
}
