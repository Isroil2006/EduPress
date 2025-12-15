import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";

export default function BlogSingleComment() {
    const [active, setActive] = useState(1);

    function Comment() {
        return (
            <div className="flex gap-5 pt-5  border-t border-[#EAEAEA]">
                <img className="w-[60px] h-[60px]" src="/courses-images/course-single-images/user-comment-img.png" alt="" />
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex w-full items-center justify-between">
                        <h3 className="font-exo font-[600] text-[20px]">Laura Hipster</h3>
                        <span className="font-jost font-[400] text-[16px] text-[#555555]">October 03, 2022</span>
                    </div>

                    <p className="font-jost font-[400] text-[18px] text-[#555555]">Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.</p>
                    <div className="flex gap-[8px] items-center">
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.73598 1.13683C5.76083 1.12589 5.78803 1.12138 5.81508 1.12369C5.84213 1.12601 5.86817 1.1351 5.8908 1.15011C5.91342 1.16511 5.93191 1.18557 5.94457 1.20959C5.95723 1.23362 5.96364 1.26043 5.96323 1.28758V2.58471C5.96323 2.73389 6.02249 2.87697 6.12798 2.98246C6.23347 3.08794 6.37654 3.14721 6.52573 3.14721C7.2761 3.14721 8.79035 3.15283 10.2382 4.07196C11.3452 4.77396 12.477 6.05196 13.1576 8.43246C12.0101 7.32658 10.6995 6.72696 9.55198 6.40858C8.84665 6.21378 8.12179 6.09831 7.39085 6.06433C7.09166 6.05119 6.79197 6.0542 6.4931 6.07333H6.47848L6.47285 6.07446H6.47173L6.52573 6.63471L6.46948 6.07446C6.33063 6.08841 6.20193 6.15348 6.10837 6.25701C6.01482 6.36055 5.96308 6.49516 5.96323 6.63471V7.93183C5.96323 8.05333 5.83948 8.12983 5.73598 8.08258L1.25398 4.78296C1.23876 4.77167 1.22299 4.76116 1.20673 4.75146C1.18226 4.73676 1.16202 4.71598 1.14797 4.69114C1.13392 4.6663 1.12653 4.63825 1.12653 4.60971C1.12653 4.58117 1.13392 4.55312 1.14797 4.52828C1.16202 4.50344 1.18226 4.48266 1.20673 4.46796C1.223 4.45826 1.23877 4.44775 1.25398 4.43646L5.73598 1.13683ZM7.08823 7.18146C7.16473 7.18146 7.2491 7.18483 7.3391 7.18821C7.82735 7.21071 8.50235 7.28496 9.2516 7.49308C10.7434 7.90708 12.5096 8.84533 13.6841 10.9581C13.7476 11.0721 13.8488 11.1605 13.9704 11.2081C14.0919 11.2558 14.2262 11.2596 14.3503 11.2191C14.4744 11.1785 14.5805 11.096 14.6504 10.9858C14.7204 10.8756 14.7498 10.7445 14.7337 10.615C14.2117 6.44121 12.612 4.24521 10.8412 3.12246C9.4406 2.23371 7.99835 2.06271 7.08823 2.03008V1.28758C7.08833 1.05591 7.0259 0.828504 6.90752 0.629361C6.78913 0.430217 6.61919 0.266721 6.41562 0.156123C6.21206 0.0455252 5.98241 -0.00807306 5.75091 0.000984088C5.51942 0.0100412 5.29466 0.0814178 5.10035 0.207582L0.607101 3.51508C0.421341 3.63104 0.268145 3.79236 0.161936 3.98385C0.0557275 4.17535 0 4.39073 0 4.60971C0 4.82869 0.0557275 5.04406 0.161936 5.23556C0.268145 5.42706 0.421341 5.58838 0.607101 5.70433L5.10035 9.01183C5.29466 9.138 5.51942 9.20937 5.75091 9.21843C5.98241 9.22749 6.21206 9.17389 6.41562 9.06329C6.61919 8.95269 6.78913 8.7892 6.90752 8.59006C7.0259 8.39091 7.08833 8.16351 7.08823 7.93183V7.18146Z"
                                fill="#F51A1A"
                            />
                        </svg>

                        <span className="font-jost font-[400] text-[16px] text-[#555555]">Reply</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="myContainer">
            <div className="flex flex-col gap-[30px] w-[990px]">
                <div className="flex flex-col gap-3">
                    <h3 className="font-exo font-[600] text-[20px]">Comments</h3>
                    <span className="font-jost font-[400] text-[18px] text-[#555555]">20 Comments</span>
                </div>

                <div className="flex flex-col gap-[30px]">
                    <Comment />
                    <div className="pl-[80px]">
                        <Comment />
                    </div>
                    <Comment />

                    <div className="w-full items-center justify-center mt-5">
                        <Pagination>
                            <PaginationContent>
                                <PaginationPrevious />

                                {[1, 2, 3].map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink onClick={() => setActive(page)} className={active === page ? "cursor-pointer bg-primary text-white" : "cursor-pointer"}>
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationNext />
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
