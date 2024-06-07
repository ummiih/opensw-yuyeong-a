import * as React from "react";
import type { SVGProps } from "react";
import {useRouter} from "next/navigation";

const WriteButton = () => {
    const router = useRouter();
    return (
        <button
            onClick={()=>{
                router.push('/magazine/write')
            }}
            className={'flex items-center right-5 gap-x-2 rounded-full px-4 py-2 fixed bottom-24 bg-[#6969B1] shadow-md'}>
            <PlusIcon />
            <div className={'text-white'}>글쓰기</div>
        </button>
    );
}
export default WriteButton;

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M7.81 15.864a.82.82 0 0 1-.813-.813V8.857H.814A.82.82 0 0 1 0 8.043a.82.82 0 0 1 .814-.813h6.183V.95A.82.82 0 0 1 7.81.135a.82.82 0 0 1 .814.813v6.28h3.037a.82.82 0 0 1 .814.814.82.82 0 0 1-.814.814H8.624v6.194a.82.82 0 0 1-.814.813M16 8.044a1.085 1.085 0 1 1-2.17 0 1.085 1.085 0 0 1 2.17 0"
            clipRule="evenodd"
        />
    </svg>
);
