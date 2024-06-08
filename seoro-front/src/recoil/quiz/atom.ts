import {atom} from "recoil";

export const correctCountAtom = atom<number>({
    key: "correctCountAtom",
    default: 0,
});
