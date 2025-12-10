import { useState } from "react";

export default function Direct() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="myContainer ">
      <div className=" flex gap-[100px] mt-[80px]">
        <div className="">
          <h1 className="w-[400px] font-exo font-[600] text-[36px]">
            Need a direct line?
          </h1>
          <p className="mt-[24px] w-[410px] font-jost font-[400] text-[#555555] text-[18px]">
            Cras massa et odio donec faucibus in. Vitae pretium massa dolor
            ullamcorper lectus elit quam.
          </p>

          <div className="flex items-center gap-[16px] mt-[32px]">
            <div className="w-[56px] h-[56px] bg-zinc-100 flex items-center justify-center rounded-[8px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_368)">
                  <path
                    d="M8.82667 14.3867C10.7467 18.16 13.84 21.24 17.6133 23.1733L20.5467 20.24C20.9067 19.88 21.44 19.76 21.9067 19.92C23.4 20.4133 25.0133 20.68 26.6667 20.68C27.4 20.68 28 21.28 28 22.0133V26.6667C28 27.4 27.4 28 26.6667 28C14.1467 28 4 17.8533 4 5.33333C4 4.6 4.6 4 5.33333 4H10C10.7333 4 11.3333 4.6 11.3333 5.33333C11.3333 7 11.6 8.6 12.0933 10.0933C12.24 10.56 12.1333 11.08 11.76 11.4533L8.82667 14.3867Z"
                    fill="#FF782D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_368">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div>
              <p className=" text-[18px] text-[#555555]">Phone</p>
              <p className="text-[16px] font-exo font-[600]">(123) 456 7890</p>
            </div>
          </div>

          <div className="flex items-center gap-[16px] mt-[32px]">
            <div className="w-[56px] h-[56px] bg-zinc-100 flex items-center justify-center rounded-[8px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_374)">
                  <path
                    d="M26.666 5.33331H5.33268C3.86602 5.33331 2.67935 6.53331 2.67935 7.99998L2.66602 24C2.66602 25.4666 3.86602 26.6666 5.33268 26.6666H26.666C28.1327 26.6666 29.3327 25.4666 29.3327 24V7.99998C29.3327 6.53331 28.1327 5.33331 26.666 5.33331ZM26.666 10.6666L15.9993 17.3333L5.33268 10.6666V7.99998L15.9993 14.6666L26.666 7.99998V10.6666Z"
                    fill="#FF782D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_374">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div>
              <p className=" text-[18px] text-[#555555]">Email</p>
              <p className="text-[16px] font-exo font-[600]">
                contact@thimpress.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-[850px] h-[450px] border-2 border-amber-400">
          <img src="/contact-image/Map.png" alt="" />
        </div>
      </div>
      <div className=" mt-[80px]">
        <h1 className="w-[400px] font-exo font-[600] text-[32px]">
          Contact us
        </h1>
        <p className="mt-[24px] font-jost font-[400] text-[#555555] text-[18px]">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className=" mt-[32px] flex gap-[20px]">
          <input
            type="text"
            placeholder="Name*"
            className="w-[635px] h-[48px] border border-[#89BCEC] rounded-xl px-4 text-[16px] outline-none focus:ring-2 focus:ring-[#4AA3FF]"
          />
          <input
            type="text"
            placeholder="Email*"
            className="w-[635px] h-[48px] border border-[#89BCEC] rounded-xl px-4 text-[16px] outline-none focus:ring-2 focus:ring-[#4AA3FF]"
          />
        </div>
        <textarea
          placeholder="Comment"
          className="w-full h-[110px] mt-[24px] border border-[#89BCEC] rounded-xl px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-[#4AA3FF] resize-none"
        ></textarea>
        <div className="mt-[20px] ">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="peer hidden"
            />

            <div
              className={`
                w-[12px] h-[12px] border-2 border-[#4AA3FF] 
                flex items-center justify-center transition-all
                ${checked ? "bg-[#4AA3FF]" : "bg-white"}
              `}
            >
              {/* check icon */}
              {checked && (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <span className="text-[16px] text-[#555]">
              Save my name, email in this brower for the next time I comment
            </span>
          </label>
        </div>
        <div className="mt-[32px] mb-[120px]">
          <button className="w-[170px] h-[48px] rounded-[24px] bg-[#FF782D] text-white text-[18px] hover:bg-[#e76b22] transition-all active:scale-95">
            Posts comment
          </button>
        </div>
      </div>
    </div>
  );
}
