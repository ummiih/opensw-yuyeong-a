'use client';
import Header from "@/components/magazine/Header";
import {useRouter} from "next/navigation";

import * as React from "react";
import {FormEvent, SVGProps, useRef, useState} from "react";
import Image from "next/image";
import { useRecoilValue} from "recoil";
import {userInfoAtom} from "@/recoil/atom";
import {postArticle} from "@/lib/api/magazine/magazine";


const WriteMagazine = () => {
    const router = useRouter();
    const imgRef = useRef<HTMLInputElement>(null);
    const [uploadImage, setUploadImage] = useState();
    const userInfo = useRecoilValue(userInfoAtom);

    // 이미지 미리보기 설정
    const handleImagePreview = async () => {
        const files = imgRef.current?.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onloadend = () => {
            setUploadImage(reader.result);
        };
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // 폼 제출 시 새로고침 방지
        const formData = new FormData();

        formData.append('imageFile', imgRef.current.files[0]); // 파일을 formData에 추가

        const json = {
            userId: userInfo.userId,
            title: e.target.title.value,
            content: e.target.content.value,
        };

        formData.append(
            'writeArticleRequest',
            new Blob([JSON.stringify(json)], {
                type: 'application/json',
            }),
        );

        // formData의 내용을 출력하는 코드
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            await postArticle(formData).then((response)=>{
                console.log('글쓰기',response)
                router.push('/magazine')
            }); // API 호출

        } catch (error) {
            console.error('폼 제출 중 오류 발생:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={'min-h-screen relative'}>
            <Header title={'글쓰기'} rightElement={<EmptyIcon />}></Header>
            <div className={'p-5 flex flex-col gap-y-5'}>
                <div className={'flex flex-col gap-y-5'}>
                    <div className={'text-[#727375]'}>제목 <span className={'text-[#8D8DC1]'}>*</span></div>
                    <input
                        id="title"
                        name="title"
                        placeholder={'제목을 입력해주세요.'}
                        className={'w-full py-[14px] px-3 rounded-[12px] border-[1px] border-[#E4E5E7] placeholder:text-[#9E9FA1] outline-none'}></input>

                    <div className={'text-[#727375]'}>내용 <span className={'text-[#8D8DC1]'}>*</span></div>
                    <textarea
                        id="content"
                        name="content"
                        placeholder={'내용을 입력해주세요.'}
                        className={'w-full h-[200px] py-[14px] px-3 rounded-[12px] border-[1px] border-[#E4E5E7] placeholder:text-[#9E9FA1] outline-none'}></textarea>

                </div>
                <div className={'flex gap-x-2'}>
                    <div className={'rounded-[8px] p-2 bg-[#F4F5F7] w-fit h-10'}>
                        <label htmlFor="image">
                            <Icon/>
                        </label>
                        <input
                            type={'file'}
                            accept={'image/*'}
                            id="image"
                            name="image"
                            ref={imgRef}
                            onChange={handleImagePreview}
                            multiple
                            style={{display: 'none'}}></input>
                    </div>
                    <div className={'w-[375px] flex items-center overflow-x-scroll gap-x-3'}>
                        <div className={'relative rounded-[8px] w-[80px] h-[80px] overflow-hidden'}>
                            {uploadImage ?
                                <Image src={uploadImage} alt={uploadImage} className={'object-cover'} fill></Image> : null}
                        </div>
                    </div>
                </div>
            </div>

            <button
                type={'submit'}
                className={'absolute bottom-[8px] right-[20px] left-[20px] bg-[#8D8DC1] rounded-[12px] text-white py-4 text-[14px]'}>작성
                완료
            </button>
        </form>
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


const EmptyIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={32}
            height={32}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
        </mask>
    </svg>
);
