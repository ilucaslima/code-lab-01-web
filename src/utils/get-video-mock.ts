import { faker } from "@faker-js/faker/locale/pt_BR";
import type { commentType, videoType } from "../app/types/video";

export const getVideoMock = (): videoType => ({
   id: faker.string.uuid(),
   title: `Vídeo ${faker.lorem.sentence()}`,
   thumbnailUrl: `https://picsum.photos/300/200?random=${faker.number.int({
      min: 1,
      max: 1000,
   })}`,
   duration: `${faker.number.int({ min: 1, max: 59 })}:${faker.number.int({
      min: 10,
      max: 59,
   })}`,
   views: faker.number.int({ min: 0, max: 1000000 }),
   publishedAt: faker.date.past(),
   channelName: `Canal ${faker.company.name()}`,
   channelAvatarUrl: `https://i.pravatar.cc/150?img=${faker.number.int({
      min: 1,
      max: 70,
   })}`,
   subscribers: faker.number.int({ min: 100, max: 5000000 }),
   description: faker.lorem.paragraphs(8),
   likes: faker.number.int({ min: 0, max: 100000 }),
   tags: faker.helpers.arrayElements(
      [
         "React",
         "Next.js",
         "TypeScript",
         "Node.js",
         "Prisma",
         "Tailwind",
         "JavaScript",
         "Frontend",
         "Backend",
         "Fullstack",
      ],
      { min: 2, max: 5 }
   ),
   comments: Array.from(
      { length: faker.number.int({ min: 2, max: 8 }) },
      getCommentMock
   ),
   commentsCount: faker.number.int({ min: 2, max: 500 }),
   createdAt: faker.date.past(),
   videoUrl: faker.internet.url(),
});

export const getCommentMock = (): commentType => ({
   id: faker.number.int({ min: 1, max: 999999 }),
   author: {
      username: faker.internet.username(),
      avatarUrl: `https://i.pravatar.cc/150?img=${faker.number.int({
         min: 1,
         max: 70,
      })}`,
   },
   content: faker.lorem.paragraph(),
   publishedAt: faker.date.recent().toISOString(),
   likes: faker.number.int({ min: 0, max: 5000 }),
});