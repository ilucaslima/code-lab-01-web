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
   nextUp?: nextUpType[]
   VideoSegment?: VideoSegment;
}

export type nextUpType = {
   id: string;
   title: string;
   thumbnailUrl: string;
   channelName: string;
   duration: string;
   views: number;
}

export type commentType = {
   id: number;
   author: {
      username: string,
      avatarUrl: string,
   },
   avatarUrl: string;
   content: string;
   publishedAt: string;
   likes: number;
}

export enum VideoSegment {
   BACKEND = "Backend",
   FRONTEND = "Frontend",
   FULLSTACK = "Fullstack",
   ARTIFICIAL_INTELLIGENCE = "Inteligência Artificial",
   DATA_SCIENCE = "Data Science",
   DEVOPS = "DevOps",
}