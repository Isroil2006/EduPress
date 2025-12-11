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
                <div className="flex gap-6">
                    <div className="flex items-center justify-center rounded-[20px] bg-[#E64C51] py-[58px] px-[47px]">
                        <img src="/courses-images/course-single-images/thim-press.svg" alt="" />
                    </div>
                </div>
            </div>
        );
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
                <div className="w-full h-max p-[30px] bg-[#F5F5F5]">
                    {activeTab === "Overview" && <OwerviewTab />}
                    {activeTab === "Curriculum" && <CurriculumTab />}
                    {activeTab === "Instructor" && <InstructorTab />}
                </div>
            </div>
        </div>
    );
}
