import Image from "next/image";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <rect width="6" height="14" x="1" y="4" fill="white">
            <animate id="svgSpinnersBarsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsFade1.end-0.025s" dur="0.075s" values="1;0.2" />
          </rect>
          <rect width="6" height="14" x="9" y="4" fill="white" opacity="0.4">
            <animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.015s" dur="0.075s" values="1;0.2" />
          </rect>
          <rect width="6" height="14" x="17" y="4" fill="white" opacity="0.3">
            <animate id="svgSpinnersBarsFade1" fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.03s" dur="0.075s" values="1;0.2" />
          </rect>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
