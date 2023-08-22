<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { data }: any = await useFetch("/api/posts/" + id);
const handleUpdate = async () => {
  const { error } = await useFetch("/api/posts/" + id, {
    method: "PUT",
    body: {
      title: data.value.title,
      description: data.value.description,
    },
  });
  if (!error.value) {
    await router.push({ path: "/posts" });
  }
};
</script>
<template>
  <input type="text" v-model="data.title" />
  <textarea v-model="data.description"></textarea>
  <button @click="handleUpdate">update</button>
</template>
