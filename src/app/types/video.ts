export type videoType = {
   id: string
   title: string;
   thumbnailUrl: string;
   duration: string;
   views: number;
   publishedAt: Date;
   channelName: string;
   channelAvatarUrl: string;
   subscribers: number;
   description: string;
   likes?: number;
   tags?: string[];
   comments?: commentType[];
   commentsCount?: number;
   createdAt: Date
   videoUrl: string;
}

export type commentType = {
   id: number;
   author: {
      username: string,
      avatarUrl: string,
   },
   content: string;
   publishedAt: string;
   likes: number;
}