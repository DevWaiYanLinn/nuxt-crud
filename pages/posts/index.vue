<script lang="ts" setup>
const { data : posts } = useFetch('/api/posts');
</script>
<template>
  <ul>
    <li v-if="posts?.length" v-for="post in posts" v-bind:key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>
