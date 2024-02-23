<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class="rounded border m-4 p-2 text-orange-500">
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
