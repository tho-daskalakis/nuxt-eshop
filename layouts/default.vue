<template>
  <div>
    <Toolbar>
      <template #start></template>
      <template #center></template>
      <template #end>
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText v-model="searchText" placeholder="Search" />
        </IconField>

        <Button type="button" icon="pi pi-shopping-cart" @click="toggleMenu"
                aria-haspopup="menu" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </template>
    </Toolbar>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// Search

const searchText = ref('');


// Menu

const menu = ref();

const items = reactive([
  { label: 'Search', icon: 'pi pi-search' }
]);

const toggleMenu = (event: Event) => {
  menu.value.toggle(event);
};
</script>
