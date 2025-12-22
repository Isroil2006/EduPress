import { Link, useNavigate } from "react-router-dom";

type CardProps = {
    img: string;
    id: number;
};

export const cardId = 0;

export default function Latest() {
    const navigate = useNavigate();

    function Card({ img, id }: CardProps) {
        return (
            <div onClick={() => navigate(`/blog/${id}`, { state: { img } })} className={`flex flex-col w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-400 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg`}>
                <div className="p-[20px] w-[480px] h-[250px] flex items-start bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
                    <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">Photography</span>
                </div>
                <div className="flex flex-col gap-4 p-[20px] ">
                    <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                    <h3 className="duration-300 font-exo font-[600] text-[20px] m-0 hover:text-[#FF782D]">Best LearnPress WordPress Theme Collection for 2023</h3>

                    <div className="flex items-center gap-[24px] transition-all duration-400">
                        <div className="flex items-center gap-[10px] ">
                            <img src="/blog-images/blog-svg1.svg" alt="" />
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">Jan 24, 22023</span>
                        </div>
                    </div>

                    <p className="font-jost font-[400px] text-[18px] text-[#555555]">Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
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

                <Link to="/blog" className="bg-white text-black border-[1px] border-[#9D9D9D] px-[20px] py-[10px] rounded-[24px] cursor-pointer hover:bg-indigo-100 duration-300 active:scale-[0.95]">
                    All categories
                </Link>
            </div>

            <div className="flex flex-col mt-[50px] gap-[30px]  ">
                <div className="flex items-center justify-between ">
                    {/* card  */}
                    <Card img="/blog-images/blog-img1.png" id={1} />

                    {/* card  */}
                    <Card img="/blog-images/blog-img2.png" id={2} />

                    {/* card  */}
                    <Card img="/blog-images/blog-img3.png" id={3} />
                </div>
            </div>
        </div>
    );
}
