export default function Hero() {
    return (
        <div className="flex h-[680px]  w-full bg-[url('/home-images/hero-images/hero-bg.png')] bg-center bg-no-repeat">
            <div className="myContainer flex flex-col items-start justify-center">
                <h1 className="font-exo font-[600] text-[48px]">
                    Build Skills with <br /> Online Course
                </h1>
                <p className="font-jost font-[400] text-[18px] w-[520px] text-[#555555]">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                <button className="px-[20px] py-[10px] bg-[#FF782D] rounded-[24px] text-white mt-5 hover:bg-[#c5622c] duration-300 active:scale-[0.90]">Posts comment</button>
            </div>
        </div>
    );
}
