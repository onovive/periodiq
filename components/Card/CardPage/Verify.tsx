import * as React from "react";
import { SVGProps } from "react";
const VerifyIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={0.546875}
            y={0.546906}
            width={26.9062}
            height={26.9062}
            rx={13.4531}
            fill="white"
        />
        <rect
            x={0.546875}
            y={0.546906}
            width={26.9062}
            height={26.9062}
            rx={13.4531}
            stroke="url(#paint0_linear_10_760)"
            strokeWidth={1.09375}
        />
        <path
            d="M19.1666 10.25L11.3749 18.0417L7.83325 14.5"
            stroke="#191921"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient
                id="paint0_linear_10_760"
                x1={14}
                y1={0.0000305176}
                x2={14}
                y2={28}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#16161D" />
                <stop offset={1} stopColor="#3C3C48" />
            </linearGradient>
        </defs>
    </svg>
);
export default VerifyIcon;