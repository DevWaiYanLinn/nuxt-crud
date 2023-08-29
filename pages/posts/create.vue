<template>
  <input type="text" placeholder="title" />
  <input type="text" placeholder="description" />
  <button @click="handleCreate">create</button>
</template>
<script setup lang="ts">
import { collection, doc, setDoc } from "firebase/firestore";
const { $firestore }: any = useNuxtApp();
const router = useRouter();
const handleCreate = async () => {
  const postsRef = collection($firestore, "posts");
  await setDoc(doc(postsRef), {
    title: "posts title",
    description: "posts description",
  });
  router.push({ path: "/posts" });
};
</script>
