'use client';

import { atom } from 'recoil';
import {SignInType} from "@/types/common/type";
import {UserType} from "@/types/magazine/type";

export const userSignInInfoAtom = atom<SignInType>({
    key: "userSignInInfoAtom",
    default: {
        nickname: "string",
        password: "string"
    },
});

export const userInfoAtom = atom<UserType>({
    key: "userInfoAtom",
    default: {
        userId: 0,
        username: "string",
        nickName: "string",
        password: "string",
        profileImageUrl: '/profile.png',
        createdAt: "string",
        modifiedAt: "string",
    },
});
