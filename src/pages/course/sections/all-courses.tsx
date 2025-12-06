import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
    img: string;
    id: number;
};

export const cardId = 0;

export default function AllCourses() {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState("grid");

    function Card({ img, id }: CardProps) {
        return (
            <div onClick={() => navigate(`/courses/${id}`, { state: { img } })} className={`flex w-[480px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-400 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg ${activeView === "list" ? "flex-row w-full" : "flex-col"}`}>
                <div className="p-[20px] w-[480px] h-[250px] flex items-start bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img})` }}>
                    <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">Photography</span>
                </div>
                <div className="flex flex-col gap-4 p-[20px] ">
                    <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                    <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">Create an LMS Website with LearnPress</h3>

                    <div className="flex items-center gap-[24px] transition-all duration-400">
                        <div className="flex items-center gap-[10px] ">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z" fill="#FF782D" />
                            </svg>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                        </div>

                        <div className="flex items-center gap-[10px] ">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z" fill="#FF782D" />
                            </svg>

                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">156 Students</span>
                        </div>

                        <div className={`flex items-center gap-[10px] ${activeView === "list" ? "" : "hidden"}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3554_686)">
                                    <path d="M13 -1H17V17H13V-1ZM-1 9H3V17H-1V9ZM6 4H10V17H6V4Z" fill="#FF782D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3554_686">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">All levels</span>
                        </div>

                        <div className={`flex items-center gap-[10px] ${activeView === "list" ? "" : "hidden"}`}>
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33333 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667H1.33333V1.33333H9.33333V0ZM8.66667 2.66667L12.6667 6.66667V13.3333C12.6667 14.0667 12.0667 14.6667 11.3333 14.6667H3.99333C3.26 14.6667 2.66667 14.0667 2.66667 13.3333L2.67333 4C2.67333 3.26667 3.26667 2.66667 4 2.66667H8.66667ZM8 7.33333H11.6667L8 3.66667V7.33333Z" fill="#FF782D" />
                            </svg>

                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">20 Lessons</span>
                        </div>
                    </div>

                    <span className={`w-full h-[1px] bg-[#EAEAEA] ${activeView === "list" ? "inline-block mt-auto" : ""}`}></span>

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
        <div className="myContainer flex gap-[30px] py-[60px]">
            {/* left  */}
            <div className="w-[990px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-exo font-[600] text-[36px]">All Courses</h1>

                    <div className="flex items gap-5 items-center">
                        {/* search  */}
                        <div className="flex items-center  border-b-[1px] border-[#000] gap-2">
                            <input type="text" placeholder="Search" className="text-[#9D9D9D] font-jost font-[400] text-[18px] outline-0" />
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.16675 3.33335C5.94509 3.33335 3.33341 5.94503 3.33341 9.16669C3.33341 12.3883 5.94509 15 9.16675 15C12.3884 15 15.0001 12.3883 15.0001 9.16669C15.0001 5.94503 12.3884 3.33335 9.16675 3.33335ZM1.66675 9.16669C1.66675 5.02455 5.02461 1.66669 9.16675 1.66669C13.3089 1.66669 16.6667 5.02455 16.6667 9.16669C16.6667 13.3088 13.3089 16.6667 9.16675 16.6667C5.02461 16.6667 1.66675 13.3088 1.66675 9.16669Z"
                                    fill="black"
                                />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2858 13.2858C13.6113 12.9603 14.1389 12.9603 14.4643 13.2858L18.0893 16.9108C18.4148 17.2362 18.4148 17.7638 18.0893 18.0893C17.7639 18.4147 17.2363 18.4147 16.9108 18.0893L13.2858 14.4643C12.9604 14.1388 12.9604 13.6112 13.2858 13.2858Z" fill="black" />
                            </svg>
                        </div>

                        {/* buttons  */}
                        <div className="flex items-center gap-5">
                            <button className="cursor-pointer" onClick={() => setActiveView("grid")}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`duration-200 ease-in-out ${activeView === "grid" ? "text-orange-500" : "text-black"}`}>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V6.66667H6.66667V0H0ZM0 8.33333V15H6.66667V8.33333H0ZM8.33333 0V6.66667H15V0H8.33333ZM8.33333 8.33333V15H15V8.33333H8.33333Z" fill="currentColor" />
                                </svg>
                            </button>

                            <button className="cursor-pointer" onClick={() => setActiveView("list")}>
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={`duration-200 ease-in-out ${activeView === "list" ? "text-orange-500" : "text-black"}`}>
                                    <path d="M0 6.25H2.29167V3.95833H0V6.25ZM0 10.2083H2.29167V7.91667H0V10.2083ZM0 2.29167H2.29167V0H0V2.29167ZM3.95833 6.25H15.4167V3.95833H3.95833V6.25ZM3.95833 10.2083H15.4167V7.91667H3.95833V10.2083ZM3.95833 0V2.29167H15.4167V0H3.95833Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* cards  */}
                <div className="flex flex-col gap-[30px] mt-[40px]">
                    <div className={`flex gap-[30px] items-center transition-all duration-400  justify-between  ${activeView === "list" ? "flex-col" : "flex-row"}`}>
                        <Card id={1} img="/home-images/courses-images/courses-1.png" />
                        <Card id={2} img="/home-images/courses-images/courses-2.png" />
                    </div>

                    <div className={`flex gap-[30px] items-center transition-all duration-400  justify-between  ${activeView === "list" ? "flex-col" : "flex-row"}`}>
                        <Card id={3} img="/home-images/courses-images/courses-3.png" />
                        <Card id={4} img="/home-images/courses-images/courses-4.png" />
                    </div>

                    <div className={`flex gap-[30px] items-center transition-all duration-400  justify-between  ${activeView === "list" ? "flex-col" : "flex-row"}`}>
                        <Card id={5} img="/home-images/courses-images/courses-5.png" />
                        <Card id={6} img="/home-images/courses-images/courses-6.png" />
                    </div>
                </div>
            </div>

            <div className="flex w-[270px] flex-col gap-[20px]">
                <div className="flex w-full flex-col gap-[20px] pt-[15px]">
                    <span className="font-exo font-[600] text-[20px] text-[#000]">Course category</span>
                    <ul className="w-full flex flex-col gap-[10px]">
                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Commercial</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Office</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className="  w-full font-jost font-[400] text-[18px] text-[#555555]">Shop</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Educate</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Academy</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Single family home</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Studio</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">University</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>
                    </ul>
                </div>

                <div className="flex w-full flex-col gap-[20px] pt-[15px]">
                    <span className="font-exo font-[600] text-[20px] text-[#000]">Instructors</span>
                    <ul className="w-full flex flex-col gap-[10px]">
                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Kenny White</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">John Doe</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>
                    </ul>
                </div>

                <div className="flex w-full flex-col gap-[20px] pt-[15px]">
                    <span className="font-exo font-[600] text-[20px] text-[#000]">Price</span>
                    <ul className="w-full flex flex-col gap-[10px]">
                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">All</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Free</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Paid</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>
                    </ul>
                </div>

                <div className="flex w-full flex-col gap-[20px] pt-[15px]">
                    <span className="font-exo font-[600] text-[20px] text-[#000]">Price</span>
                    <ul className="w-full flex flex-col gap-[10px]">
                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <div className="flex w-full">
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                            </div>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">(1,025)</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <div className="flex w-full">
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                            </div>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">(1,025)</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <div className="flex w-full">
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                            </div>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">(1,025)</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <div className="flex w-full">
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                            </div>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">(1,025)</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <div className="flex w-full">
                                <img src="/courses-images/on-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                                <img src="/courses-images/off-star.svg" alt="" />
                            </div>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">(1,025)</span>
                        </li>
                    </ul>
                </div>

                <div className="flex w-full flex-col gap-[20px] pt-[15px]">
                    <span className="font-exo font-[600] text-[20px] text-[#000]">Level</span>
                    <ul className="w-full flex flex-col gap-[10px]">
                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">All levels</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Beginner</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Intermidiate</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>

                        <li className="flex items-center gap-[6px]">
                            <input className=" w-[15px] h-[15px] cursor-pointer" type="checkbox" />
                            <span className=" w-full  font-jost font-[400] text-[18px] text-[#555555]">Expert</span>
                            <span className="  text-end font-jost font-[400] text-[18px] text-[#555555]">15</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
