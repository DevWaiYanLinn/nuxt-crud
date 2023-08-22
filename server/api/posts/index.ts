import * as data from "~/database.json";
export default defineEventHandler(async () => {
  const posts: any = data;
  return posts.default;
});
