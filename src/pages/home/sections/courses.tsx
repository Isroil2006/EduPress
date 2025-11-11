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

            <div className="flex flex-col mt-[50px] gap-[30px]">
                <div className="flex items-center justify-between">
                    {/* card  */}
                    <div>
                        <div className="p-[20px] w-[410px] h-[250px] flex items-start bg-[url('/home-images/courses-images/courses-1.png')] bg-center bg-no-repeat">
                            <span className="px-3 py-2 font-jost font-[500] text-[16px] bg-black rounded-[8px] text-white">
                                Photography
                            </span>
                        </div>
                        <div className="flex flex-col gap-4 p-[20px]">
                            <span className="font-jost font-[400] text-[16px]">by Determined-Poitras</span>
                            <h3 className=" font-exo font-[600] text-[20px] "></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
