export type FilterType = '최신순' | '인기순';

export interface ArticleType {
    articleId: number;
    user: UserType;
    comments: CommentType[],
    imageUrl: string;
    title: string;
    content: string;
    likeCount: number;
    viewCount: number;
    createdAt: string;
    modifiedAt: string;
}

export interface CommentPostType {
    userId: number;
    content: string;
}

export interface UserType {
    userId: number;
    username: string;
    nickName: string;
    password: string;
    profileImageUrl: string;
    createdAt: string;
    modifiedAt: string;
}

export interface CommentType {
    commentId: number;
    content: string;
    user: UserType;
    createdAt: string;
    modifiedAt: string;
}
