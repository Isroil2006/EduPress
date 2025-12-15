import { Button } from "@/components/ui/button";

export default function Academy() {
    return (
        <div className="myContainer">
            <div className=" bg-[url('home-images/academy-images/academy-bg.png')] bg-cover h-[250px] flex  items-center justify-between p-13 gap-4 rounded-[30px]">
                <div className="flex  items-center justify-center gap-5">
                    <img src="home-images/academy-images/academy-icon.png" alt="" />
                    <p className="font-semibold text-[20px] font-exo">Let's Start With Academy LMS</p>
                </div>
                <div className="flex  items-center justify-center gap-6 font-jost">
                    <Button className="bg-transparent hover:bg-transparent border-2 border-[#FF782D] text-[#FF782D] rounded-[50px]">I'm a student</Button>
                    <Button className="myPrimary rounded-[50px] bg-[#FF782D] ">Become an Instructor</Button>
                </div>
            </div>
        </div>
    );
}
