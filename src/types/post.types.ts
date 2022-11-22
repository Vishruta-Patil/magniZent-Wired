export type LikeType = {
    likedBy: String[]|undefined,
    likeCount: Number
}

export type PostDetailsType = {
    comments?: [],
    content: string,
    createdAt?: Date,
    id: string,
    likes?: LikeType,
    uid?: string|undefined
}