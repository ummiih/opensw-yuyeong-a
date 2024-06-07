'use client';
import Header from "@/components/magazine/Header";
import {useRouter} from "next/navigation";

import * as React from "react";
import {SVGProps, useRef, useState} from "react";
import Image from "next/image";


const WriteMagazine = () => {
    const router = useRouter();
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [imageUrlList, setImageUrlList] = useState<File[]>([]);
    const imgRef = useRef<HTMLInputElement>(null);
    /**
     * 이미지 업로드 및 미리보기 함수
     */
    const saveImgFile = async () => {
        const files = imgRef.current?.files;
        if (!files) return;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreviews((prevImagePreviews) => [...prevImagePreviews, reader.result as string]);
            };
            reader.readAsDataURL(file);

            setImageUrlList((prevImageUrlList) => [...prevImageUrlList, file]);
        }
    };

    return (
        <div className={'min-h-screen relative'}>
            <Header title={'글쓰기'}></Header>
            <div className={'p-5 flex flex-col gap-y-5'}>
                <div className={'flex flex-col gap-y-5'}>
                    <div className={'text-[#727375]'}>제목 <span className={'text-[#8D8DC1]'}>*</span></div>
                    <input
                        placeholder={'제목을 입력해주세요.'}
                        className={'w-full py-[14px] px-3 rounded-[12px] border-[1px] border-[#E4E5E7] placeholder:text-[#9E9FA1]'}></input>

                    <div className={'text-[#727375]'}>내용 <span className={'text-[#8D8DC1]'}>*</span></div>
                    <textarea
                        placeholder={'제목을 입력해주세요.'}
                        className={'w-full h-[200px] py-[14px] px-3 rounded-[12px] border-[1px] border-[#E4E5E7] placeholder:text-[#9E9FA1]'}></textarea>

                </div>
                <div className={'flex gap-x-2 '}>
                    <div className={'rounded-[8px] p-2 bg-[#F4F5F7] w-fit'}>
                        <label htmlFor="image">
                            <Icon/>
                        </label>
                        <input
                            type={'file'}
                            accept={'image/*'}
                            id="image"
                            name="image"
                            ref={imgRef}
                            onChange={saveImgFile}
                            multiple
                            style={{display: 'none'}}></input>
                    </div>
                    <div className={'w-[375px] flex items-center overflow-x-scroll gap-x-3'}>
                        {imagePreviews?.map((img, i) => {
                            return (
                                <div key={i} className={'relative rounded-[8px]'}>
                                    <div className={'relative rounded-[8px] w-[80px] h-[80px] overflow-hidden'}>
                                        <Image key={i} src={img} fill alt={img} className={'object-cover'}></Image>;
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                    router.push('/magazine')
                }}
                className={'absolute bottom-[8px] right-[20px] left-[20px] bg-[#8D8DC1] rounded-[12px] text-white py-4 text-[14px]'}>작성
                완료
            </button>
        </div>
    )
}
export default WriteMagazine;

const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={29}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#9E9FA1"
            d="M14.5 9.77a3.465 3.465 0 1 1 0 6.93 3.465 3.465 0 0 1 0-6.93m0-1.75a5.213 5.213 0 0 0-5.215 5.214A5.213 5.213 0 0 0 14.5 18.45a5.213 5.213 0 0 0 5.215-5.215A5.213 5.213 0 0 0 14.5 8.02"
        />
        <path
            fill="#9E9FA1"
            d="M23.833 4.612A2.92 2.92 0 0 1 26.75 7.53v10.897a2.92 2.92 0 0 1-2.917 2.917H5.167a2.92 2.92 0 0 1-2.917-2.917V7.529a2.92 2.92 0 0 1 2.917-2.917zm0-1.75H5.167A4.665 4.665 0 0 0 .5 7.53v10.897a4.665 4.665 0 0 0 4.667 4.667h18.666a4.665 4.665 0 0 0 4.667-4.667V7.529a4.665 4.665 0 0 0-4.667-4.667"
        />
        <path
            fill="#9E9FA1"
            d="M21.512 8.276a.933.933 0 1 0 0-1.867.933.933 0 0 0 0 1.867M10.638.378H5.342a.88.88 0 0 0-.875.875c0 .478.396.875.875.875h5.296a.88.88 0 0 0 .875-.876.88.88 0 0 0-.875-.874"
        />
    </svg>
);
