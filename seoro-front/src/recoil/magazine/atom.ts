'use client';

import {atom} from "recoil";
import {CommentPostType} from "@/types/magazine/type";

export const commentAtom = atom<CommentPostType>({
    key: "commentAtom",
    default: {
        userId: 1,
        content: "string"
    }
});

export const deleteCommentIdAtom = atom<number>({
    key: "deleteCommentIdAtom",
    default: 0,
});
