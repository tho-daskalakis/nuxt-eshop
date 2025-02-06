<template>
  <div>
    <Toolbar>
      <template #start>
        <Menu :model='items' />
      </template>
      <template #center></template>
      <template #end></template>
    </Toolbar>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const items = reactive([
  { label: 'New', icon: 'pi pi-plus' },
  { label: 'Search', icon: 'pi pi-search' }
]);
</script>
