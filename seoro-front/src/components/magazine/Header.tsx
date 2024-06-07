import * as React from "react";
import type { SVGProps } from "react";

const Header = () => {
    return (
        <div className={'flex gap-x-24 items-center w-full h-[100px] bg-[#8D8DC1] rounded-b-[30px] px-5 py-5 shadow-lg'}>
            <Icon className={'flex justify-start'}></Icon>
            <div className={'text-[20px] font-semibold text-white'}>Magazine</div>
        </div>
    )
}
export default Header;

const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={24}
            height={25}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <path fill="#D9D9D9" d="M0 .5h24v23.888H0z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#F5F5F5"
                d="M10 22.398 0 12.444l10-9.953 1.775 1.766-8.225 8.187 8.225 8.187z"
            />
        </g>
    </svg>
);
