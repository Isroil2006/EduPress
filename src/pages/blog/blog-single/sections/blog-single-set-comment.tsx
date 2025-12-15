export default function BlogSingleSetComment() {
    return (
        <div className="myContainer flex flex-col gap-[30px] pt-[40px] pb-[90px]">
            <div className="flex flex-col gap-5 w-[850px]">
                <div className="flex flex-col gap-3">
                    <h2 className="font-exo font-[600] text-[20px]">Comments</h2>
                    <p className="font-jost font-[400] text-[18px] text-[#555555]">Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className="flex gap-5">
                    <input className="border border-[#9D9D9D] rounded-[8px] h-[48px] px-[10px] w-full" type="text" placeholder="Name*" />
                    <input className="border border-[#9D9D9D] rounded-[8px] h-[48px] px-[10px] w-full" type="text" placeholder="Name*" />
                </div>
                <textarea className="border border-[#9D9D9D] rounded-[8px] pt-3 min-h-[100px] px-[10px] w-full" placeholder="Message*"></textarea>
                <div className="flex gap-1 items-center">
                    <input className="w-3 h-3" type="checkbox" />
                    <p className="font-jost font-[400] text-[18px] text-[#555555]">Save my name, email in this brower for the next time I comment</p>
                </div>
                <button className="py-[10px] px-[20px] self-start bg-[#FF782D] rounded-[24px] text-white hover:bg-[#c5622c] duration-300 active:scale-[0.90]">Posts comment</button>
            </div>
        </div>
    );
}
