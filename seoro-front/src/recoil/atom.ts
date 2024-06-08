'use client';

import { atom } from 'recoil';
import {SignInType} from "@/types/common/type";

export const userInfo = atom<SignInType>({
    key: "userInfo",
    default: {
        nickname: "string",
        password: "string"
    },
});
