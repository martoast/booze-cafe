<template>
  <header class="bg-primary sticky top-0 z-50 shadow-md">
    <!-- Main Navigation -->
    <nav class="bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <!-- Logo -->
          <NuxtLink to="/#hero" class="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Booze Café Logo" 
              class="h-16 pt-1"
            >
          </NuxtLink>

          <!-- Desktop Navigation -->
          <ul class="hidden md:flex items-center gap-8 list-none">
            <li>
              <NuxtLink to="/#hero" class="text-body font-heading text-lg hover:text-gold transition-colors">
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#about" class="text-body font-heading text-lg hover:text-gold transition-colors">
                Nosotros
              </NuxtLink>
            </li>
            <li>
              <button 
                @click="$emit('open-menu')"
                class="text-body font-heading text-lg hover:text-gold transition-colors"
              >
                Menú
              </button>
            </li>
            <li>
              <NuxtLink 
                to="/gallery" 
                class="text-body font-heading text-lg hover:text-gold transition-colors"
              >
                Galería
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="https://wa.me/16199489069?text=Hola,%20me%20interesa%20información%20sobre%20franquicias%20de%20Booze%20Café" 
                target="_blank" 
                rel="noopener"
                external
                class="text-body font-heading text-lg hover:text-gold transition-colors"
              >
                Franquicias
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="https://take.cards/3tGya" 
                target="_blank" 
                rel="noopener"
                external
                class="inline-flex items-center gap-2 bg-k-black text-white font-heading px-6 py-2 rounded-full hover:bg-gold hover:text-k-black transition-all duration-300"
              >
                Tarjeta de Lealtad
              </NuxtLink>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 text-k-black hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          v-show="isMenuOpen"
          class="md:hidden border-t border-gold/20 py-4"
        >
          <ul class="flex flex-col gap-4 list-none">
            <li>
              <NuxtLink 
                to="/#hero" 
                @click="isMenuOpen = false"
                class="block text-body font-heading text-lg hover:text-gold transition-colors py-2"
              >
                Inicio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/#about" 
                @click="isMenuOpen = false"
                class="block text-body font-heading text-lg hover:text-gold transition-colors py-2"
              >
                Nosotros
              </NuxtLink>
            </li>
            <li>
              <button 
                @click="$emit('open-menu'); isMenuOpen = false"
                class="block text-body font-heading text-lg hover:text-gold transition-colors py-2 text-left w-full"
              >
                Menú
              </button>
            </li>
            <li>
              <NuxtLink 
                to="/gallery" 
                @click="isMenuOpen = false"
                class="block text-body font-heading text-lg hover:text-gold transition-colors py-2"
              >
                Galería
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="https://wa.me/16199489069?text=Hola,%20me%20interesa%20información%20sobre%20franquicias%20de%20Booze%20Café" 
                target="_blank" 
                rel="noopener"
                external
                @click="isMenuOpen = false"
                class="block text-body font-heading text-lg hover:text-gold transition-colors py-2"
              >
                Franquicias
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="https://take.cards/3tGya" 
                target="_blank" 
                rel="noopener"
                external
                class="inline-flex items-center gap-2 bg-k-black text-white font-heading px-6 py-2 rounded-full hover:bg-gold hover:text-k-black transition-all duration-300"
              >
                Tarjeta de Lealtad
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

defineEmits(['open-menu'])
</script>