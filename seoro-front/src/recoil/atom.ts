'use client';

import { atom } from 'recoil';

export const userInfo = atom({
    key: "userInfo",
    default: {
        nickname: "string",
        password: "string"
    },
});
