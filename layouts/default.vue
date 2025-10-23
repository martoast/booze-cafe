<template>
  <div>
    <TheHeader @open-menu="isMenuOpen = true" />
    <main>
      <slot />
    </main>
    <TheFooter />
    
    <!-- Menu Modal -->
    <MenuModal :is-open="isMenuOpen" @close="isMenuOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>