import { Link, useNavigate } from "react-router-dom";

type CardProps = {
    img: string;
    id: number;
};

export const cardId = 0;

export default function Courses() {
    const navigate = useNavigate();

    function Card({ img, id }: CardProps) {
        return (
            <div onClick={() => navigate(`/courses/${id}`, { state: { img } })} className={`flex flex-col w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-400 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg`}>
                <div className="p-[20px] w-[480px] h-[250px] flex items-start bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
                    <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">Photography</span>
                </div>
                <div className="flex flex-col gap-4 p-[20px] ">
                    <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                    <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">Create an LMS Website with LearnPress</h3>

                    <div className="flex items-center gap-[24px] transition-all duration-400">
                        <div className="flex items-center gap-[10px] ">
                            <img src="/courses-images/courses-svg-1.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                        </div>

                        <div className="flex items-center gap-[10px] ">
                            <img src="/courses-images/courses-svg-2.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">156 Students</span>
                        </div>
                    </div>

                    {/* kulrang-chiziq  */}
                    <span className={`w-full h-[1px] bg-[#EAEAEA]`}></span>

                    {/* narx-box  */}
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">$29.0</span>
                            <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                        </div>

                        <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                            View more
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="myContainer">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h2 className="font-exo font-[600] text-[32px]">Featured courses</h2>
                    <p className="font-jost font-[400] text-[18px] text-[#555555]">Explore our Popular Courses</p>
                </div>

                <Link to="/courses" className="bg-white text-black border-[1px] border-[#9D9D9D] px-[20px] py-[10px] rounded-[24px] cursor-pointer hover:bg-indigo-100 duration-300 active:scale-[0.95]">
                    All categories
                </Link>
            </div>

            <div className="flex flex-col mt-[50px] gap-[30px]  ">
                <div className="flex items-center justify-between ">
                    {/* card  */}
                    <Card img="/home-images/courses-images/courses-1.png" id={1} />

                    {/* card  */}
                    <Card img="/home-images/courses-images/courses-2.png" id={2} />

                    {/* card  */}
                    <Card img="/home-images/courses-images/courses-3.png" id={3} />
                </div>

                <div className="flex items-center justify-between ">
                    {/* card  */}
                    <Card img="/home-images/courses-images/courses-4.png" id={4} />

                    {/* card  */}
                    <Card img="/home-images/courses-images/courses-5.png" id={5} />

                    {/* card  */}
                    <Card img="/home-images/courses-images/courses-6.png" id={6} />
                </div>
            </div>
        </div>
    );
}
