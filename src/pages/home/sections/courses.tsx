export default function Courses() {
    return (
        <div className="myContainer">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h2 className="font-exo font-[600] text-[32px]">Featured courses</h2>
                    <p className="font-jost font-[400] text-[18px] text-[#555555]">Explore our Popular Courses</p>
                </div>

                <button className="bg-white text-black border-[1px] border-[#9D9D9D] px-[20px] py-[10px] rounded-[24px] cursor-pointer hover:bg-indigo-100 duration-300 active:scale-[0.95]">
                    All categories
                </button>
            </div>

            <div className="flex flex-col mt-[50px] gap-[30px]  ">
                <div className="flex items-center justify-between ">
                    {/* card  */}
                    <div className="w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg">
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-1.png')] bg-cover bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px] ">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">
                                Create an LMS Website with LearnPress
                            </h3>

                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z"
                                            fill="#FF782D"
                                        />
                                    </svg>
                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                                </div>

                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="15"
                                        height="12"
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z"
                                            fill="#FF782D"
                                        />
                                    </svg>

                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">
                                        156 Students
                                    </span>
                                </div>
                            </div>

                            <span className="w-full h-[1px] bg-[#EAEAEA]"></span>

                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">
                                        $29.0
                                    </span>
                                    <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                                </div>

                                <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card  */}
                    <div className="w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg">
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-2.png')] bg-cover bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px] ">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">
                                Create an LMS Website with LearnPress
                            </h3>

                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z"
                                            fill="#FF782D"
                                        />
                                    </svg>
                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                                </div>

                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="15"
                                        height="12"
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z"
                                            fill="#FF782D"
                                        />
                                    </svg>

                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">
                                        156 Students
                                    </span>
                                </div>
                            </div>

                            <span className="w-full h-[1px] bg-[#EAEAEA]"></span>

                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-jost font-[400] text-[18px] line-through text-[#9D9D9D]">
                                        $59.0
                                    </span>
                                    <span className="font-jost font-[500] text-[18px] text-[#F51A1A]">$49.0</span>
                                </div>

                                <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card  */}
                    <div className="w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg">
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-3.png')] bg-cover bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px] ">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">
                                Create an LMS Website with LearnPress
                            </h3>

                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z"
                                            fill="#FF782D"
                                        />
                                    </svg>
                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                                </div>

                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="15"
                                        height="12"
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z"
                                            fill="#FF782D"
                                        />
                                    </svg>

                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">
                                        156 Students
                                    </span>
                                </div>
                            </div>

                            <span className="w-full h-[1px] bg-[#EAEAEA]"></span>

                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">
                                        $29.0
                                    </span>
                                    <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                                </div>

                                <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between ">
                    {/* card  */}
                    <div className="w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg">
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-4.png')] bg-cover bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px] ">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">
                                Create an LMS Website with LearnPress
                            </h3>

                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z"
                                            fill="#FF782D"
                                        />
                                    </svg>
                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                                </div>

                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="15"
                                        height="12"
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z"
                                            fill="#FF782D"
                                        />
                                    </svg>

                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">
                                        156 Students
                                    </span>
                                </div>
                            </div>

                            <span className="w-full h-[1px] bg-[#EAEAEA]"></span>

                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">
                                        $29.0
                                    </span>
                                    <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                                </div>

                                <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card  */}
                    <div className="w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg">
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-5.png')] bg-cover bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px] ">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">
                                Create an LMS Website with LearnPress
                            </h3>

                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z"
                                            fill="#FF782D"
                                        />
                                    </svg>
                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                                </div>

                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="15"
                                        height="12"
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z"
                                            fill="#FF782D"
                                        />
                                    </svg>

                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">
                                        156 Students
                                    </span>
                                </div>
                            </div>

                            <span className="w-full h-[1px] bg-[#EAEAEA]"></span>

                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">
                                        $29.0
                                    </span>
                                    <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                                </div>

                                <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* card  */}
                    <div className="w-[410px] overflow-hidden border-[1px] border-[#EAEAEA] rounded-[24px] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-lg">
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-6.png')] bg-cover bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px] ">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className="duration-300 font-exo font-[600] text-[22px] m-0 hover:text-[#FF782D]">
                                Create an LMS Website with LearnPress
                            </h3>

                            <div className="flex items-center gap-[24px]">
                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.66667 0C3 0 0 3 0 6.66667C0 10.3333 3 13.3333 6.66667 13.3333C10.3333 13.3333 13.3333 10.3333 13.3333 6.66667C13.3333 3 10.3333 0 6.66667 0ZM9.46667 9.46667L6 7.33333V3.33333H7V6.8L10 8.6L9.46667 9.46667Z"
                                            fill="#FF782D"
                                        />
                                    </svg>
                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                                </div>

                                <div className="flex items-center gap-[10px] ">
                                    <svg
                                        width="15"
                                        height="12"
                                        viewBox="0 0 15 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.66667 6.78667V9.45333L7.33333 12L12 9.45333V6.78667L7.33333 9.33333L2.66667 6.78667ZM7.33333 0L0 4L7.33333 8L13.3333 4.72667V9.33333H14.6667V4L7.33333 0Z"
                                            fill="#FF782D"
                                        />
                                    </svg>

                                    <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">
                                        156 Students
                                    </span>
                                </div>
                            </div>

                            <span className="w-full h-[1px] bg-[#EAEAEA]"></span>

                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-jost font-[400] text-[16px] line-through text-[#9D9D9D]">
                                        $29.0
                                    </span>
                                    <span className="font-jost font-[500] text-[18px] text-[#55BE24]">Free</span>
                                </div>

                                <a className=" font-jost text-[18px] font-[500] text-[#000]" href="#">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
