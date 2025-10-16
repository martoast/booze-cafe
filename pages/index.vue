<template>
  <div>
    <HeroSection />
    <AboutSection />
    <MenuPreview @open-menu="isMenuOpen = true" />
    <LoyaltyBanner />
    
    <!-- Menu Modal -->
    <MenuModal :is-open="isMenuOpen" @close="isMenuOpen = false" />
  </div>
</template>

<script setup>


const isMenuOpen = ref(false)
</script>