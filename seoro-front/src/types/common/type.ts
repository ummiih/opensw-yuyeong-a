export type NavbarType = 'home'|'magazine'| 'quiz' |'mypage'

export interface SignUpType {
    username: string;
    nickname: string;
    password: string;
}

export interface SignInType {
    nickname: string;
    password: string;
}
