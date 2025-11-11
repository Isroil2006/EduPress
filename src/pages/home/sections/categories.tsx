export default function Categories() {
    return (
        <div className="myContainer ">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                    <h2 className="font-exo font-[600] text-[32px]">Top Categories</h2>
                    <p className="font-jost font-[400] text-[18px] text-[#555555]">Explore our Popular Categories</p>
                </div>

                <button className="bg-white text-black border-[1px] border-[#9D9D9D] px-[20px] py-[10px] rounded-[24px] cursor-pointer hover:bg-indigo-100 duration-300 active:scale-[0.95]">
                    All categories
                </button>
            </div>

            <div className="flex flex-col gap-10 mt-[50px]">
                <div className="flex items-center gap-[30px]">
                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Art.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Art & Design</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Development.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Development</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Communiication.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Communiication</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Videography.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Videography</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Photography.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Photography</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-[30px]">
                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Marketing.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Marketing</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Content writing.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Content writing</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Finance.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Finance</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Science.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Science</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>

                    {/* card */}
                    <div className="flex flex-col items-center justify-center w-[234px] h-[234px] rounded-[24px] border-[1px] border-[#EAEAEA] transition-all duration-300 hover:-translate-y-[16px] cursor-pointer hover:shadow-xl">
                        <img src="/home-images/catigorie-images/Network.svg" alt="" />
                        <div className="mt-6 flex flex-col items-center gap-2">
                            <span className="font-exo font-[600] text-[20px]">Network</span>
                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">38 Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
