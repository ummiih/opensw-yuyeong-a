import Image from "next/image";
import {SVGProps} from "react";
import * as React from "react";

const Commnet = () => {
    return (
        <div>
            {/* profile */}
            <div className={'flex gap-x-2'}>
                <div className={'relative rounded-full w-[32px] h-[32px]'}>
                    <Image alt={'/defaultProfileImage.png'} src={'/defaultProfileImage.png'} fill
                           className={'object-cover'}></Image>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex justify-between'}>
                        <div>
                            <div className={'text-[14px]'}>닉네임</div>
                            <div className={'text-[14px] text-[#9E9FA1]'}><span>23.12.10</span> | <span>18:10</span></div>
                        </div>
                        <MoreIcon/>
                    </div>

                    {/* commentContent */}
                    <div className={'mt-1'}>
                        블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Commnet;

const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#9E9FA1"
            d="M24 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M24 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M24 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
    </svg>
);

