<script lang="ts" setup>
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
const posts = reactive<any>([]);
const { $firestore }: any = useNuxtApp();
onMounted(async () => {
  const querySnap = await getDocs(collection($firestore, "posts"));
  querySnap.forEach((doc: any) => {
    posts.push({ id: doc.id, ...doc.data() });
  });
});
const handleDelete = async (id: string) => {
  const postsRef = doc($firestore, "posts", id);
  await deleteDoc(postsRef);
  const index = posts.findIndex((p: any) => p.id != id);
  posts.splice(index,1)
};
</script>
<template>
  <ul>
    <li v-for="post in posts" v-bind:key="post.id">
      <span>{{ post.title }}</span>
      <button @click="handleDelete(post.id)">Delete</button>
    </li>
  </ul>
</template>
