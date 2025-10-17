<template>
  <div>
    <HeroSection @open-menu="isMenuOpen = true" />
    <AboutSection />
    <MenuPreview @open-menu="isMenuOpen = true" />
    <LoyaltyBanner />
    
    <!-- Menu Modal -->
    <MenuModal :is-open="isMenuOpen" @close="isMenuOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>