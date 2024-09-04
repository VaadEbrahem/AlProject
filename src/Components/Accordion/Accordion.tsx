import { useState } from "react";

const Accordionn = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center"
      >
        {accordionOpen ? (
          <svg
            className="pr-5"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="pr-5"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18M12 6V18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <span className="text-xl font-bold">{title}</span>
      </button>

      <div
        className={`
          grid
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          text-white
          text-sm
          ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden text-base  pl-12">{answer}</div>
      </div>
    </div>
  );
};

export default Accordionn;
