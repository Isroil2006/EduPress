import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { items } from "./single-cours-tabs-items";

export default function SingleCourseTabs() {
    const [activeTab, setActiveTab] = useState("Overview");
    const tabs = ["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"];

    function OwerviewTab() {
        return (
            <div>
                <p className="font-jost text-[18px] font-[400] text-[#555555] leading-[150%]">
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                </p>
                <p className="font-jost text-[18px] font-[400] text-[#555555] leading-[150%] mt-[50px]">
                    LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress? No comments yet! You be the first to comment.
                </p>
            </div>
        );
    }

    function CurriculumTab() {
        return (
            <div>
                <p className="font-jost text-[18px] font-[400] text-[#555555] leading-[150%]">LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
                <Accordion className="flex flex-col gap-3 mt-[20px]" type="single" collapsible>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl px-4 bg-white focus:text-[#FF782D]">
                            <AccordionTrigger className="flex items-center gap-3 py-4 text-left font-medium hover:no-underline">
                                <ChevronDown className="h-4 w-4 shrink-0 text-black transition-transform duration-300" />
                                <span className={`flex-1 text-[16px] font-[600] font-exo `}>{item.title}</span>

                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span>{item.lesson} Lessons</span>
                                    <span>{item.mins} Mins</span>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pb-4 ">
                                {item.lessons.map((lesson) => (
                                    <div className="flex items-center justify-between py-3 pl-[44px] pr-5">
                                        <div className="flex items-center gap-2">
                                            <img src="/courses-images/course-single-images/lesson.svg" alt="" />
                                            <span className="text-[18px] font-jost font-[400] hover:text-[#FF782D] duration-300 cursor-pointer">{lesson.title}</span>
                                        </div>

                                        <div className="flex gap-5">
                                            <button className="font-jost font-[400] text-[16px] text-white bg-[#2580D5] py-1 px-3 rounded-[8px] active:scale-95 hover:opacity-80 duration-300">Preview</button>
                                            <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">{lesson.time}</span>
                                            <img src={lesson.img} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        );
    }

    function InstructorTab() {
        return (
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <div className="flex min-w-[180px] items-center justify-center rounded-[20px] bg-[#E64C51] py-[58px] px-[47px]">
                        <img className="" src="/courses-images/course-single-images/thim-press.svg" alt="" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-exo font-[600] text-[20px]">ThimPress</h3>
                            <p className="font-jost font-[400] text-[18px] text-[#555555]">LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2">
                                <img src="/courses-images/courses-svg-1.svg" alt="" />
                                <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">2Weeks</span>
                            </div>

                            <div className="flex gap-2">
                                <img src="/courses-images/courses-svg-2.svg" alt="" />
                                <span className="font-jost font-[400] text-[16px] text-[#9D9D9D]">156 Students</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="text-[18px] font-jost font-[400] text-[#555555]">LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</span>
                <div className="flex items-center gap-5">
                    <span className="font-jost font-[400] text-[18px] text-[#555555]">Follow:</span>
                    <div className="flex items-center gap-[5px]">
                        <a className="hover:text-[#FF782D] text-[#555555] p-[5px] duration-300" href="">
                            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.02786 4.12096C6.01753 4.72422 6.02569 5.32694 6.02569 5.95142C6.11164 5.95522 6.1829 5.96175 6.2547 5.96175C6.96023 5.9623 7.6663 5.96121 8.37238 5.9623C8.79994 5.96338 8.90547 6.06837 8.90601 6.48831C8.9071 7.29611 8.90764 8.1039 8.90601 8.9117C8.90492 9.28595 8.8119 9.3806 8.43547 9.38223C7.7158 9.3855 6.99667 9.38332 6.277 9.38332H6.02678V16.01C6.02678 16.6089 5.96803 16.6665 5.35933 16.6665C4.58526 16.6665 3.81173 16.6671 3.03821 16.666C2.60847 16.6654 2.50892 16.567 2.50838 16.1405C2.50784 13.9891 2.50838 11.8372 2.50838 9.68522V9.42085C2.4257 9.41596 2.35444 9.40834 2.28318 9.40834C1.69297 9.40726 1.10222 9.40889 0.512012 9.40725C0.102402 9.40562 0.00339966 9.31043 0.00231172 8.90463C-0.000952096 8.11043 -0.000407828 7.31624 0.00176805 6.52204C0.00285599 6.09992 0.0996827 6.00527 0.516907 6.00473C1.10059 6.00418 1.68427 6.00473 2.26795 6.00473H2.50838C2.50838 5.90409 2.50729 5.82467 2.50838 5.74525C2.52252 4.97173 2.49478 4.19494 2.56006 3.42631C2.72542 1.49141 4.21318 0.0906864 6.15733 0.0177945C6.97056 -0.0126678 7.78543 0.00473919 8.6003 0.00691507C8.86956 0.00800301 8.98488 0.124412 8.98652 0.395309C8.99087 1.2031 8.99087 2.0109 8.98652 2.81869C8.98488 3.0934 8.87174 3.20219 8.57691 3.20926C8.0275 3.22232 7.47754 3.22286 6.92813 3.23102C6.2906 3.24081 6.03929 3.48179 6.02786 4.12096Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a className="hover:text-[#FF782D] text-[#555555] p-[5px] duration-300" href="">
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.1034 5.61292C13.1082 6.88656 12.8787 8.11633 12.3164 9.26713C11.7056 10.5165 10.8005 11.4763 9.47489 11.9615C8.46516 12.3321 7.43315 12.4232 6.42342 11.9399C6.15749 11.8131 5.91653 11.6349 5.65195 11.4722C5.56623 11.8016 5.47241 12.1431 5.38939 12.4873C5.16395 13.4262 4.89262 14.3495 4.47415 15.2243C4.26761 15.6556 4.04555 16.0781 3.68918 16.4095C3.62236 16.4716 3.54609 16.5256 3.46712 16.5728C3.16406 16.7531 2.86303 16.6694 2.69902 16.3589C2.53231 16.043 2.49991 15.6974 2.49046 15.3491C2.45941 14.1572 2.67607 12.999 2.95888 11.8475C3.27813 10.5489 3.57916 9.24485 3.88222 7.94219C3.90246 7.85445 3.89234 7.74983 3.86467 7.66276C3.53529 6.62266 3.50964 5.6028 4.07728 4.63086C4.38978 4.0963 4.8393 3.73452 5.47038 3.63531C6.36065 3.49492 7.1463 4.1368 7.21177 5.03584C7.25969 5.68582 7.0761 6.29125 6.90534 6.90141C6.74672 7.46432 6.57461 8.02319 6.41667 8.5861C6.32893 8.8986 6.33703 9.21043 6.50374 9.49999C6.7879 9.99135 7.24281 10.1513 7.77535 10.1034C8.40036 10.0481 8.85731 9.69033 9.22516 9.20908C9.6956 8.59352 9.95613 7.88482 10.1127 7.13495C10.2707 6.37697 10.3537 5.61225 10.2416 4.84078C10.0614 3.59548 9.36622 2.75112 8.17695 2.36504C6.97688 1.97559 5.77749 2.03094 4.63546 2.59858C3.45159 3.18646 2.75167 4.1665 2.46346 5.44283C2.31767 6.09147 2.29067 6.74752 2.55795 7.37658C2.65177 7.59729 2.78946 7.80518 2.93593 7.99754C3.11074 8.22635 3.18161 8.46056 3.10399 8.74066C3.03852 8.97555 2.98655 9.21381 2.91905 9.44802C2.78676 9.91103 2.45604 10.0629 2.01867 9.86784C1.15067 9.48109 0.61071 8.79601 0.311705 7.92059C-0.175613 6.49576 -0.0905682 5.08578 0.560088 3.73115C1.5165 1.74138 3.13707 0.60206 5.27465 0.163339C5.6074 0.0951686 5.95028 0.0722202 6.28843 0.0269982C6.32488 0.0222735 6.36065 0.00944937 6.39642 0H7.30829C7.49052 0.0215986 7.67276 0.0411722 7.855 0.0654706C9.40807 0.267957 10.7411 0.909164 11.7738 2.10113C12.6418 3.10344 13.0994 4.27921 13.1034 5.61292Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a className="hover:text-[#FF782D] text-[#555555] p-[5px] duration-300" href="">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.3194 15.2948C13.4639 12.5873 11.6068 9.88082 9.75043 7.17394C9.7262 7.13867 9.70396 7.10196 9.67376 7.05512C9.99891 6.67607 10.3224 6.29865 10.6463 5.9214C12.3296 3.96086 14.0131 2.00014 15.6964 0.0394242C15.7069 0.0271267 15.7152 0.0132017 15.7246 0H14.2951C12.5479 2.03451 10.8006 4.06919 9.02561 6.13607C9.00427 6.09755 8.98908 6.06445 8.96882 6.03498C7.60579 4.04677 6.2424 2.05892 4.87938 0.0707104C4.86437 0.0486473 4.8537 0.0236907 4.84086 0H0C0.041956 0.0687211 0.0806568 0.139612 0.126049 0.205802C2.17195 3.1901 4.21839 6.17405 6.26483 9.15817C6.28617 9.18927 6.3066 9.2211 6.33644 9.26613C6.17025 9.46108 6.00315 9.65802 5.83478 9.85406C3.93229 12.0696 2.02962 14.2849 0.127315 16.5007C0.0821036 16.5535 0.0423177 16.6111 0 16.6667H1.42958C2.077 15.9091 2.72316 15.1505 3.37185 14.394C4.5251 13.049 5.67998 11.7052 6.83413 10.3611C6.87627 10.312 6.91967 10.264 6.96994 10.2067C7.0025 10.2461 7.03143 10.2765 7.05494 10.3107C8.48579 12.3967 9.91627 14.483 11.3466 16.5696C11.3677 16.6005 11.3847 16.6343 11.4037 16.6667H16.2444C15.9362 16.2093 15.6311 15.7498 15.3194 15.2948ZM14.101 15.6306C13.484 15.6311 12.8669 15.6279 12.2499 15.6337C12.1351 15.6346 12.0643 15.6019 11.9973 15.5058C8.68309 10.751 5.36621 5.9979 2.04988 1.24457C2.01931 1.20081 1.99146 1.15506 1.94264 1.08019C2.54792 1.08019 3.12156 1.10297 3.69231 1.07151C4.02995 1.05288 4.21604 1.17169 4.40719 1.44694C7.64558 6.1093 10.8968 10.7628 14.1451 15.4183C14.1873 15.4787 14.228 15.54 14.2833 15.621C14.2039 15.6254 14.1526 15.6304 14.101 15.6306Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a className="hover:text-[#FF782D] text-[#555555] p-[5px] duration-300" href="">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.6633 4.64313C16.6519 2.84681 15.851 1.48378 14.3012 0.576448C13.6193 0.176995 12.8657 0.00417064 12.0753 0.00376304C9.58035 0.00172501 7.0854 -0.00438907 4.59045 0.00539346C2.55976 0.013138 0.863308 1.25267 0.220922 3.18838C0.126358 3.47371 0.0917112 3.77941 0.0297552 4.07574C0.0187498 4.12832 0.00978253 4.18131 0 4.23389V12.4357C0.0448366 12.6852 0.0692929 12.9403 0.137363 13.1833C0.654206 15.0281 1.85297 16.1612 3.72184 16.5835C3.88937 16.6214 4.06179 16.6394 4.23176 16.6667H12.4352C12.6851 16.6218 12.9402 16.5974 13.1836 16.5293C15.0264 16.0133 16.1628 14.8165 16.5785 12.9497C16.6454 12.6509 16.6625 12.3363 16.6633 12.0289C16.6698 9.567 16.6788 7.10506 16.6633 4.64313ZM8.34083 12.902C5.83161 12.9163 3.76423 10.8522 3.76546 8.33399C3.76668 5.81825 5.80022 3.78186 8.32615 3.76759C10.8354 3.75332 12.9027 5.81703 12.9015 8.33521C12.9003 10.851 10.8668 12.8873 8.34083 12.902ZM13.1771 4.87994C12.423 4.8775 11.7888 4.24245 11.7892 3.49001C11.7892 2.73513 12.4214 2.10578 13.1791 2.1066C13.9409 2.10701 14.565 2.73186 14.5629 3.49246C14.5613 4.2506 13.9303 4.88239 13.1771 4.87994Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a className="hover:text-[#FF782D] text-[#555555] p-[5px] duration-300" href="">
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.0351 2.39589C17.8346 1.28842 17.1578 0.577498 16.0996 0.383949C15.6629 0.303781 15.2183 0.245372 14.7748 0.22533C12.894 0.140295 11.0123 0.0735831 9.13094 0C9.13037 0.0194695 9.12979 0.0389389 9.12922 0.0584084C8.6966 0.0584084 8.26369 0.0521095 7.83135 0.0595537C6.03759 0.0896168 4.24353 0.109372 2.45922 0.332126C1.34946 0.470416 0.5807 1.13037 0.349643 2.22753C0.220515 2.84025 0.150082 3.46843 0.0991174 4.09345C-0.00996876 5.43026 -0.0368824 6.77136 0.0581743 8.11017C0.117155 8.9382 0.192743 9.7688 0.33046 10.5868C0.511125 11.6582 1.24953 12.3665 2.28914 12.5209C2.90472 12.6122 3.52631 12.6901 4.14762 12.7104C6.05477 12.7722 7.96306 12.8295 9.87106 12.839C11.7731 12.8487 13.6759 12.8035 15.5705 12.6045C16.0589 12.5529 16.5402 12.4751 16.9671 12.2016C17.6732 11.7495 17.9944 11.0701 18.0714 10.2721C18.1754 9.19244 18.2807 8.11017 18.3162 7.02704C18.3675 5.47721 18.3119 3.92796 18.0351 2.39589ZM7.35378 9.185V3.71208C8.94226 4.62514 10.5141 5.52875 12.1138 6.4484C10.5164 7.3669 8.94483 8.27022 7.35378 9.185Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    function FaqsTab() {
        return <div></div>;
    }

    return (
        <div className="myContainer pt-[50px]">
            <div className="w-[850px] rounded-[20px] flex flex-col">
                {/* button-tabs  */}
                <div className="flex items-center gap-[1px] overflow-hidden bg-[#eaeaea] border-[1px] border-[#eaeaea] rounded-tl-[20px] rounded-tr-[20px]">
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`py-5 w-full duration-300 text-[20px] font-exo font-[600] ${activeTab === tab ? "bg-[#F5F5F5] text-[#FF782D]" : "bg-white text-black"}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* tabs  */}
                <div className="w-full h-max p-[30px] bg-[#F5F5F5] rounded-bl-[20px] rounded-br-[20px]">
                    {activeTab === "Overview" && <OwerviewTab />}
                    {activeTab === "Curriculum" && <CurriculumTab />}
                    {activeTab === "Instructor" && <InstructorTab />}
                    {activeTab === "FAQs" && <FaqsTab />}
                </div>
            </div>
        </div>
    );
}
