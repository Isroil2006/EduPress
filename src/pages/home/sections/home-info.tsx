export default function HomeInfo() {
    return (
        <div className="myContainer flex gap-[30px] items-center justify-between">
            {/* card  */}
            <div className="w-full flex flex-col items-center justify-center rounded-[24px] gap-2 bg-[#F5F5F5] py-[50px]">
                <span className="font-exo font-[600] text-[32px] text-[#FF782D]">25K+</span>
                <span className="font-jost font-[500] text-[18px]">Active Students</span>
            </div>

            {/* card  */}
            <div className="w-full flex flex-col items-center justify-center rounded-[24px] gap-2 bg-[#F5F5F5] py-[50px]">
                <span className="font-exo font-[600] text-[32px] text-[#FF782D]">899</span>
                <span className="font-jost font-[500] text-[18px]">Total Courses</span>
            </div>

            {/* card  */}
            <div className="w-full flex flex-col items-center justify-center rounded-[24px] gap-2 bg-[#F5F5F5] py-[50px]">
                <span className="font-exo font-[600] text-[32px] text-[#FF782D]">158</span>
                <span className="font-jost font-[500] text-[18px]">Instructor</span>
            </div>

            {/* card  */}
            <div className="w-full flex flex-col items-center justify-center rounded-[24px] gap-2 bg-[#F5F5F5] py-[50px]">
                <span className="font-exo font-[600] text-[32px] text-[#FF782D]">100%</span>
                <span className="font-jost font-[500] text-[18px]">Satisfaction rate</span>
            </div>
        </div>
    );
}
