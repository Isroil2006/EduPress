import { Button } from "@/components/ui/button";

export default function Grow() {
  return (
    <div className="myContainer flex items-center justify-between">
      <img src="/home-images/grow-images/grow-img.png" alt="" />
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-[32px] font-semibold font-exo">
          Grow us your skill <br /> with LearnPress LMS
        </h1>
        <p className="text-[#555555] font-jost">
          We denounce with righteous indignation and dislike men who are <br />{" "}
          so beguiled and demoralized that cannot trouble.
        </p>
        <div className="flex items-center gap-4 font-jost">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72667 7.05333L0.946667 4.27333L0 5.21333L3.72667 8.94L11.7267 0.94L10.7867 0L3.72667 7.05333Z"
              fill="#55BE24"
            />
          </svg>
          <p className="text-[18px]">Certification</p>
        </div>
        <div className="flex items-center gap-4 font-jost">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72667 7.05333L0.946667 4.27333L0 5.21333L3.72667 8.94L11.7267 0.94L10.7867 0L3.72667 7.05333Z"
              fill="#55BE24"
            />
          </svg>
          <p className="text-[18px]">Certification</p>
        </div>
        <div className="flex items-center gap-4 font-jost">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72667 7.05333L0.946667 4.27333L0 5.21333L3.72667 8.94L11.7267 0.94L10.7867 0L3.72667 7.05333Z"
              fill="#55BE24"
            />
          </svg>
          <p className="text-[18px]">Certification</p>
        </div>
        <div className="flex items-center gap-4 font-jost">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.72667 7.05333L0.946667 4.27333L0 5.21333L3.72667 8.94L11.7267 0.94L10.7867 0L3.72667 7.05333Z"
              fill="#55BE24"
            />
          </svg>
          <p className="text-[18px]">Certification</p>
        </div>
        <Button className="bg-[#FF782D] rounded-[30px] duration-300 font-jost">
          Explorer course
        </Button>
      </div>
    </div>
  );
}
