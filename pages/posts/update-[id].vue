<script lang="ts" setup>
import { doc, getDoc, updateDoc } from "firebase/firestore";
const route = useRoute();
const router = useRouter();
const id: string = route.params.id as string;
const { $firestore }: any = useNuxtApp();
const post = ref<any>({});
onMounted(async () => {
  const docRef = doc($firestore, "posts", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { title, description } = docSnap.data();
    post.value.title = title;
    post.value.description = description;
  }
});
const handleUpdate = async () => {
  const docRef = doc($firestore, id);
  await updateDoc(docRef, {
    title: post.value.title,
    description: post.value.description,
  });
  router.push({ path: "/posts" });
};
</script>
<template>
  <div>
    <input type="text" v-model="post.title" />
    <textarea v-model="post.description"></textarea>
    <button @click="handleUpdate">update</button>
  </div>
</template>
