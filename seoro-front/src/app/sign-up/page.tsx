'use client';
import {useRouter} from "next/navigation";
import {FormEvent, useEffect, useRef, useState} from "react";
import {postUserSignUp} from "@/lib/api/onboarding/onboarding";
import Image from "next/image";
import * as React from "react";
import {useRecoilState} from "recoil";
import {userInfoAtom} from "@/recoil/atom";
import {UserType} from "@/types/magazine/type";

const SignUp = () => {
    const router = useRouter();
    const imgRef = useRef<HTMLInputElement>(null);
    const [uploadImage, setUploadImage] = useState();
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

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
            nickname: e.target.nickname.value,
            username: e.target.username.value,
            password: e.target.password.value,
        };

        formData.append(
            'signUpRequest',
            new Blob([JSON.stringify(json)], {
                type: 'application/json',
            }),
        );

        try {
            await postUserSignUp(formData).then((response)=>{
                setUserInfo((prevUser: UserType) => ({
                    ...prevUser,
                    userId: response.userId,
                    username: response.username,
                    nickName: response.nickName,
                    password: response.password,
                    profileImageUrl: response.profileImageUrl,
                    createdAt: response.createdAt,
                    modifiedAt: response.modifiedAt,
                }));
                router.push('/home')
            }); // API 호출

        } catch (error) {
            console.error('폼 제출 중 오류 발생:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={'p-5 flex flex-col justify-center min-h-screen bg-[#EEEDF5]'}>
            {/* 프로필 사진 설정 섹션 */}
            <div className="flex flex-col justify-center items-center">
                <div className="relative w-fit">
                    <div className="relative w-[100px] h-[100px] object-cover overflow-hidden rounded-full">
                        <Image
                            alt={uploadImage ? uploadImage : 'k'}
                            src={
                                uploadImage ? uploadImage : '/profile.png'
                            }
                            className={'object-cover'}
                            fill></Image>
                    </div>
                    <label for="input-file">
                        <ProfileImageIcon className="absolute bottom-0 right-0" />
                    </label>
                    <input
                        type="file"
                        id={'input-file'}
                        ref={imgRef}
                        name="input-file"
                        onChange={handleImagePreview}
                        className="hidden"></input>
                </div>
            </div>

            <div className={'mt-5 flex flex-col gap-y-5'}>
                <input
                    id="username"
                    name="username"
                    className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                    placeholder={'이름을 입력해주세요.'}></input>
                <input
                    id="nickname"
                    name="nickname"
                    className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                    placeholder={'아이디를 입력해주세요.'}></input>
                <input
                    id="password"
                    name="password"
                    className={'py-4 px-4 bg-white rounded-[12px] shadow-md w-full outline-none'}
                    placeholder={'비밀번호를 입력해주세요.'}></input>
            </div>

            <button
                type={'submit'}
                className={'mt-20 bg-[#8D8DC1] py-4 rounded-[12px] text-white'}>회원가입
            </button>
        </form>
    );
}
export default SignUp;

function ProfileImageIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={35} height={35} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x={0.838} y={0.886} width={33.6} height={33.6} rx={16.8} fill="#9E9FA1" />
            <mask
                id="prefix__a"
                style={{
                    maskType: 'alpha',
                }}
                maskUnits="userSpaceOnUse"
                x={3}
                y={3}
                width={30}
                height={30}>
                <path fill="#D9D9D9" d="M3.237 3.286h28.8v28.8h-28.8z" />
            </mask>
            <g mask="url(#prefix__a)">
                <path
                    d="M17.638 22.965c1.2 0 2.22-.42 3.06-1.26.84-.84 1.26-1.86 1.26-3.06s-.42-2.22-1.26-3.06c-.84-.84-1.86-1.26-3.06-1.26s-2.22.42-3.06 1.26c-.84.84-1.26 1.86-1.26 3.06s.42 2.22 1.26 3.06c.84.84 1.86 1.26 3.06 1.26zm0-1.92c-.672 0-1.24-.232-1.704-.696a2.317 2.317 0 01-.696-1.704c0-.672.232-1.24.696-1.704a2.317 2.317 0 011.704-.696c.672 0 1.24.232 1.704.696.464.464.696 1.032.696 1.704 0 .672-.232 1.24-.696 1.704a2.317 2.317 0 01-1.704.696zm-7.68 5.28c-.528 0-.98-.188-1.356-.564a1.849 1.849 0 01-.564-1.356v-11.52c0-.528.188-.98.564-1.356a1.849 1.849 0 011.356-.564h3.024l1.776-1.92h5.76l1.776 1.92h3.024c.528 0 .98.188 1.356.564.376.376.564.828.564 1.356v11.52c0 .528-.188.98-.564 1.356a1.849 1.849 0 01-1.356.564H9.958z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}
