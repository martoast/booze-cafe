<template>
    <header class="bg-primary font-body sticky top-0 z-50">
      <!-- Top Bar -->
      <div class="bg-primary">
        <div class="container mx-auto px-4">
          <ul class="flex justify-between list-none py-2 text-sm md:text-base">
            <li class="font-light hidden md:block">Av. Jalisco 2850, Col. Madero (Cacho)</li>
            <li class="font-light">LUN - VIE: 7:00 am a 9:00 pm</li>
            <li class="font-light hidden lg:block">SÁB - DOM: 8:00 am a 9:00 pm</li>
          </ul>
        </div>
      </div>
  
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const isMenuOpen = ref(false)
  </script>