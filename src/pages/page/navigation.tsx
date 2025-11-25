import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const location = useLocation();

    // Sahifa nomini URL asosida chiqaramiz
    const getPageName = () => {
        if (location.pathname === "/page/contact") return "Contact";
        if (location.pathname === "/page/faqs") return "FAQs";
        return null;
    };

    const pageName = getPageName();

    return (
        <div className="w-full py-[18px] bg-[#F5F5F5]">
            <div className="myContainer gap-2 flex items-center">
                <Link
                    className="font-jost font-[400] text-[16px] text-[#555555] hover:text-black duration-300 transition-all hover:-translate-y-[3px]"
                    to="/"
                >
                    Homepage
                </Link>

                {pageName && (
                    <>
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.94 0L0 0.94L3.05333 4L0 7.06L0.94 8L4.94 4L0.94 0Z" fill="#9D9D9D" />
                        </svg>

                        <span className="font-jost font-[400] text-[#555555] text-[16px]">{pageName}</span>
                    </>
                )}
            </div>
        </div>
    );
}
