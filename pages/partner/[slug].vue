<template>
  <h1>{{ $route.params.slug }}</h1>
  <h2>Partner-id: {{partnerId}}</h2>
</template>

<script setup lang="ts">

const route = useRoute();
const slug = route.params.slug;
const partnerId = ref<string>('');

await queryContent<{id: string, slug: string}>('partner')
    .where({ slug })
    .findOne()
    .then((p) => {
      partnerId.value = p.id;
    })
    .catch(console.error);
</script>
