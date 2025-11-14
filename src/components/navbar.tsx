import { NavLink } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const isActive = location.pathname === "/page/contact" || location.pathname === "/page/faqs";
    return (
        <div className="myContainer h-max flex items-center justify-between">
            <div className="">
                <a href="" className="flex items-center gap-[4px]">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1259)">
                            <path
                                d="M16.8234 29.4567C11.3396 27.4704 5.70868 26.8829 0 26.5025V1.37463C0.177608 1.57116 0.299517 1.69097 0.40461 1.82443C1.46185 3.16017 2.52855 4.4875 3.55742 5.84321C3.75709 6.10594 3.90422 6.48323 3.90528 6.80902C3.92629 11.7179 3.92629 16.6269 3.90423 21.5358C3.90107 22.1285 3.98935 22.3839 4.67666 22.4585C7.96084 22.82 11.2313 23.2793 14.361 24.4237C14.7593 24.5698 14.9716 24.7884 15.1209 25.1762C15.6558 26.5761 16.2254 27.9622 16.8234 29.4567Z"
                                fill="#FF782D"
                            />
                            <path
                                d="M39.3008 1.36411V26.5025C33.611 26.885 27.9833 27.4599 22.5289 29.4472C22.5857 29.257 22.6214 29.092 22.6834 28.9385C23.1878 27.6743 23.7102 26.4174 24.1978 25.1468C24.3386 24.7789 24.5446 24.5719 24.9177 24.4342C27.4914 23.4894 30.1703 23.027 32.8712 22.6603C33.5059 22.5741 34.1417 22.4585 34.7797 22.4364C35.2904 22.4196 35.3966 22.2147 35.3955 21.7428C35.3797 16.8328 35.3923 11.9239 35.3766 7.01393C35.3745 6.50423 35.4985 6.10382 35.8243 5.70657C36.8626 4.43494 37.8663 3.13283 38.8857 1.84438C38.9939 1.70671 39.1137 1.57955 39.3008 1.36411Z"
                                fill="#FF782D"
                            />
                            <path
                                d="M17.4918 16.8644C17.4834 17.7503 17.9268 18.3683 18.6972 18.7928C18.8832 18.8948 19.1165 19.1365 19.1176 19.3152C19.1417 22.7811 19.1354 26.2471 19.1323 29.7131C19.1323 29.7625 19.1028 29.8129 19.0429 30C18.5816 28.8587 18.1633 27.834 17.7534 26.8062C16.2832 23.129 14.8098 19.4518 13.3584 15.7661C13.2533 15.4971 13.2334 15.1387 13.3111 14.8613C13.7736 13.225 14.2633 11.5971 14.7751 9.97549C14.8991 9.58455 14.8287 9.37226 14.4945 9.13054C11.8461 7.21469 8.8846 5.9935 5.76122 5.11176C5.4617 5.02769 5.14747 4.8196 4.9499 4.57894C3.90842 3.30941 2.90163 2.0115 1.88432 0.722007C1.73824 0.537042 1.60162 0.344721 1.4072 0.0830383C6.42331 0.360485 10.914 1.90746 15.0305 4.56107C16.2748 5.36294 17.4623 6.25308 18.6825 7.09278C19.0041 7.31452 19.1512 7.56885 19.1459 7.98607C19.1228 10.089 19.1281 12.193 19.1428 14.2969C19.1459 14.6585 19.0671 14.8571 18.6993 15.0168C17.9174 15.3563 17.5002 16.0047 17.4918 16.8644Z"
                                fill="#FF782D"
                            />
                            <path
                                d="M37.8694 0.137673C37.7034 0.353114 37.5384 0.569607 37.3702 0.783998C36.3655 2.05878 35.3713 3.34197 34.3446 4.59889C34.1586 4.8259 33.8632 5.02347 33.5805 5.10229C30.4729 5.97142 27.5324 7.19155 24.884 9.06852C24.4921 9.34597 24.4017 9.59084 24.552 10.0564C25.069 11.6559 25.5388 13.2702 26.0043 14.8844C26.0706 15.1146 26.0926 15.4099 26.0075 15.6253C24.141 20.3314 22.2567 25.0301 20.3745 29.7299C20.3545 29.7814 20.3146 29.8266 20.2305 29.959C20.2 29.7572 20.1675 29.6374 20.1675 29.5176C20.1643 26.1704 20.1706 22.8232 20.158 19.477C20.1559 19.1092 20.2515 18.921 20.6109 18.7613C21.3876 18.4145 21.8059 17.7692 21.8132 16.9074C21.8195 16.0173 21.3907 15.3636 20.5889 15.0074C20.2536 14.8581 20.1559 14.6858 20.158 14.34C20.1717 12.1961 20.1569 10.0511 20.178 7.90724C20.1801 7.68234 20.2904 7.37652 20.4575 7.2462C24.3512 4.22056 28.5234 1.72669 33.4208 0.698872C34.8637 0.395152 36.3361 0.229104 37.7948 0C37.819 0.0462412 37.8442 0.0914314 37.8694 0.137673Z"
                                fill="#FF782D"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1259">
                                <rect width="39.3008" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span className="text-2xl font-bold font-(family-name:--font-exo)">EduPress</span>
                </a>
            </div>

            <ul className="flex items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-[25px] py-[20px] font-exo font-[600] text-[16px] duration-300 ${
                            isActive ? "bg-[#F5F5F5] !text-[#FF782D]" : "hover:text-[#FF782D]"
                        }`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        `px-[25px] py-[20px] font-exo font-[600] text-[16px] duration-300 ${
                            isActive ? "bg-[#F5F5F5] !text-[#FF782D]" : "hover:text-[#FF782D]"
                        }`
                    }
                >
                    Courses
                </NavLink>

                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        `px-[25px] py-[20px] font-exo font-[600] text-[16px] duration-300 ${
                            isActive ? "bg-[#F5F5F5] !text-[#FF782D]" : "hover:text-[#FF782D]"
                        }`
                    }
                >
                    Blog
                </NavLink>

                <DropdownMenu>
                    <DropdownMenuTrigger
                        className={`flex items-center gap-3 px-[25px] py-[20px] font-exo font-[600] text-[16px] outline-0 duration-300 ${isActive ? "bg-[#F5F5F5] text-[#FF782D]" : "hover:text-[#FF782D]"}`}
                    >
                        Page
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.06 0L4 3.05333L0.94 0L0 0.94L4 4.94L8 0.94L7.06 0Z" fill="currentColor" />
                        </svg>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-40">
                        <DropdownMenuItem asChild>
                            <NavLink to="/page/contact" className="w-full text-[15px] font-exo">
                                Contact
                            </NavLink>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <NavLink to="/page/faqs" className="w-full text-[15px] font-exo">
                                FAQs
                            </NavLink>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <NavLink
                    to="/learnpress"
                    className={({ isActive }) =>
                        `px-[25px] py-[20px] font-exo font-[600] text-[16px] duration-300 ${
                            isActive ? "bg-[#F5F5F5] !text-[#FF782D]" : "hover:text-[#FF782D]"
                        }`
                    }
                >
                    LearnPress Add-On
                </NavLink>

                <NavLink
                    to="/premium-theme"
                    className={({ isActive }) =>
                        `px-[25px] py-[20px] font-exo font-[600] text-[16px] duration-300 ${
                            isActive ? "bg-[#F5F5F5] !text-[#FF782D]" : "hover:text-[#FF782D]"
                        }`
                    }
                >
                    Premium Theme
                </NavLink>
            </ul>

            <div className="flex items-center gap-5">
                <a href="#" className="font-jost font-[500] text-[18px]">
                    Login/Register
                </a>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FF782D" stroke-width="2" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.1666 17.3333C19.945 17.3333 17.3333 19.945 17.3333 23.1667C17.3333 26.3883 19.945 29 23.1666 29C26.3883 29 29 26.3883 29 23.1667C29 19.945 26.3883 17.3333 23.1666 17.3333ZM15.6666 23.1667C15.6666 19.0245 19.0245 15.6667 23.1666 15.6667C27.3088 15.6667 30.6666 19.0245 30.6666 23.1667C30.6666 27.3088 27.3088 30.6667 23.1666 30.6667C19.0245 30.6667 15.6666 27.3088 15.6666 23.1667Z"
                        fill="#FF782D"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.2858 27.2858C27.6113 26.9603 28.1389 26.9603 28.4643 27.2858L32.0893 30.9108C32.4148 31.2362 32.4148 31.7638 32.0893 32.0893C31.7639 32.4147 31.2363 32.4147 30.9108 32.0893L27.2858 28.4643C26.9604 28.1388 26.9604 27.6112 27.2858 27.2858Z"
                        fill="#FF782D"
                    />
                </svg>
            </div>
        </div>
    );
}
