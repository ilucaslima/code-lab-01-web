import { faker } from "@faker-js/faker/locale/pt_BR"

export const getUserMock = () => {
   return {
      id: "user123",
      name: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      channelUrl: `https://www.youtube.com/${faker.internet.username()}`

   }
}