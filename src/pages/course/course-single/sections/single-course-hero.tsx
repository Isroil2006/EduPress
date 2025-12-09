import { useLocation } from "react-router-dom";

export default function SingleCourse() {
    const location = useLocation();
    const { img } = location.state || {};

    return (
        <div className="w-full bg-black py-[50px]">
            <div className="myContainer relative">
                <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center  gap-5">
                        <span className="py-2 px-3 rounded-[8px] bg-[#555555] text-white font-jost text-[16px] font-[500]">Photography</span>
                        <p className="text-white text-[18px] font-[400] font-jost">
                            <span className="text-[#9d9d9d]">by</span> Determined-Poitras
                        </p>
                    </div>
                    <h1 className="font-exo font-[600] text-[36px] text-white w-[850px]">The Ultimate Guide to the best WordPress LMS Plugin</h1>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <img src="/courses-images/courses-svg-1.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/courses-images/courses-svg-2.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">156 Students</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/courses-images/courses-svg-3.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">All levels</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/courses-images/courses-svg-4.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">20 Lessons</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/courses-images/courses-svg-5.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">3 Quizzes</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[410px] rounded-[20px] overflow-hidden  bg-white  right-0 top-0 z-50 absolute shadow-lg ">
                    <img className="w-[410px] h-[250px]" src={img} alt="" />
                    <div className="flex items-center justify-center gap-[30px] py-[30px]">
                        <div className="flex items-center gap-2">
                            <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">$29.0</span>
                            <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                        </div>
                        <button className="py-[10px] px-[24px] bg-[#FF782D] rounded-[24px] text-white font-jost font-[500] text-[18px] hover:bg-[#c76028] active:scale-95 duration-300">Start now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
