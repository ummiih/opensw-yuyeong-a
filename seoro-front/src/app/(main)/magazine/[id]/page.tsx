'use client';

import * as React from "react";
import {SVGProps, useState} from "react";
import Header from "@/components/magazine/Header";
import Image from "next/image";
import CommentInput from "@/components/magazine/CommentInput";

const ArticleDetail = () => {
    const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(false);

    return (
        <div className={'relative min-h-screen'}>
            <Header title={'Magazine'}></Header>
            <div className={'flex flex-col gap-y-4 px-5 py-4'}>
                {/*  title, date, writer */}
                <div className={'flex justify-between items-start'}>
                    <div className={'text-[20px] text-[#54515F] font-semibold'}>여성의 월경전 왜 예민할까?</div>
                    <div className={'flex flex-col items-end text-[14px] text-[#54515F] mt-1'}>
                        <div>2024.05.05</div>
                        <div>시아</div>
                    </div>
                </div>

                {/* image, content */}
                <div className={'flex flex-col gap-y-4'}>
                    {/*Image*/}
                    <div className={'relative w-full h-[200px]'}>
                        <Image src={'/post.png'} alt={'/post.png'} className={'object-cover'} fill></Image>
                    </div>
                    {/*content*/}
                    <div className={'text-[16px]'}>
                        성인 여성 중 본인의 생리주기나 . 그주기에 따른 임신 가능성에 대해 모르는 이가 적지 않습니다.
                        임신은 물론 피임을 위해서라면 본인의 생리주기와 임신기간 정도는 알아두는 것이 바람직해요.

                        하이닥 산부인과 상담의사 이민아 원장(닥터예스팀산부인과의원)은 “본인의 생리주가와 배란기를 통해 임신 가능성이 높은 기간을 예측할 수 있다면 피임에 도움이 될 수 있다”고
                        말했습니다.

                        다만 “예측과 가능성일 뿐, 이에 의존하는 피임법은 실패 확률이 높다”고 경고하고 있어요.
                    </div>
                </div>

                {/* like, comment */}
                <div className={'flex justify-between items-center'}>
                    <div className={'flex gap-x-2'}>
                        <div className={'flex gap-x-1 text-[12px] text-[#727375]'}>
                            <div>관심</div>
                            <div>3</div>
                        </div>
                        <div className={'flex gap-x-1 text-[12px] text-[#727375]'}>
                            <div>댓글</div>
                            <div>3</div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setIsLikeButtonClicked(!isLikeButtonClicked);
                        }}
                        className={isLikeButtonClicked ? 'flex gap-x-1 items-center w-fit rounded-full px-3 py-1 text-white text-[14px] bg-[#8D8DC1]' : 'flex gap-x-1 items-center w-fit rounded-full px-3 py-1 text-[#727375] text-[14px] border-[1px] border-[#E4E5E7]'}>
                        {isLikeButtonClicked ? <WhiteHeartIcon /> : <LikeIcon/> }좋아요
                    </button>
                </div>
            </div>
            <div className={'h-[10px] bg-gray-100'}/>
            {/* comment */}
            <CommentInput />
            <div>


            </div>
        </div>
    );
}
export default ArticleDetail;

const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={14}
        fill="none"
        {...props}
    >
        <g fill="#D9D9D9" clipPath="url(#a)">
            <path d="M9.132 12.554a.47.47 0 0 0-.647-.198l-.16.083a1.83 1.83 0 0 1-1.65 0 13 13 0 0 1-2.298-1.485C1.683 8.753 1.113 6.187.992 5.176l-.02-.212C.96 4.83.96 4.747.96 4.734c0-1.792 1.414-3.366 3.027-3.366 1.51 0 2.867.717 3.545 1.869a.481.481 0 1 0 .832-.487C7.513 1.304 5.836.408 3.994.408 1.83.408 0 2.392 0 4.734c0 0 0 .115.013.307 0 .09.013.173.025.256.135 1.12.768 3.974 3.731 6.4a13.5 13.5 0 0 0 2.464 1.593c.397.198.832.3 1.26.3.43 0 .865-.102 1.261-.3l.173-.09a.47.47 0 0 0 .198-.646zM10.322 12.286a.5.5 0 1 0 0-.998.5.5 0 0 0 0 .998" />
            <path d="M11.666 11.141a.483.483 0 0 1-.34-.826c2.1-2.053 2.567-4.274 2.67-5.138.005-.07.018-.14.018-.211.013-.14.013-.224.013-.23 0-1.799-1.414-3.373-3.027-3.373-1.51 0-2.867.717-3.545 1.869a.481.481 0 1 1-.832-.487C7.474 1.3 9.151.403 10.993.403c2.164 0 3.988 1.984 3.988 4.333 0 0 0 .115-.013.307 0 .083-.013.172-.026.256-.115.953-.633 3.436-2.95 5.702a.5.5 0 0 1-.333.134z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .408h15v13.183H0z" />
            </clipPath>
        </defs>
    </svg>
);

const WhiteHeartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={14}
        fill="none"
        {...props}
    >
        <g fill="#fff" clipPath="url(#a)">
            <path d="M9.132 12.554a.47.47 0 0 0-.647-.199l-.16.084a1.83 1.83 0 0 1-1.65 0 13 13 0 0 1-2.298-1.485C1.683 8.753 1.113 6.187.992 5.175l-.02-.21C.96 4.83.96 4.746.96 4.733c0-1.792 1.414-3.366 3.027-3.366 1.51 0 2.867.717 3.545 1.868a.481.481 0 1 0 .832-.486C7.513 1.304 5.836.408 3.994.408 1.83.408 0 2.392 0 4.734c0 0 0 .115.013.307 0 .09.013.173.025.256.135 1.12.768 3.974 3.731 6.4a13.5 13.5 0 0 0 2.464 1.593c.397.198.832.3 1.26.3.43 0 .865-.102 1.261-.3l.173-.09a.47.47 0 0 0 .198-.646zM10.322 12.286a.5.5 0 1 0 0-.999.5.5 0 0 0 0 .999" />
            <path d="M11.666 11.141a.483.483 0 0 1-.34-.825c2.1-2.055 2.567-4.275 2.67-5.139.005-.07.018-.14.018-.211.013-.141.013-.224.013-.23 0-1.799-1.414-3.373-3.027-3.373-1.51 0-2.867.717-3.545 1.869a.481.481 0 1 1-.832-.487C7.474 1.3 9.151.403 10.993.403c2.164 0 3.988 1.984 3.988 4.332 0 0 0 .116-.013.308 0 .083-.013.172-.026.256-.115.953-.633 3.436-2.95 5.701a.5.5 0 0 1-.333.135z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .408h15v13.183H0z" />
            </clipPath>
        </defs>
    </svg>
);
