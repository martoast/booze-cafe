<template>
    <section id="gallery" class="bg-primary py-20 px-6">
      <div class="max-w-7xl mx-auto">        
  
        <!-- Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          <div
            v-for="n in 12"
            :key="n"
            class="aspect-square overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            @click="openLightbox(n)"
          >
            <img
              :src="`/gallery/${n}.jpg`"
              :alt="`Booze Café momento ${n}`"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
  
      <!-- Lightbox Modal -->
      <transition name="fade">
        <div
          v-if="lightboxOpen"
          class="fixed inset-0 z-50 bg-k-black/95 flex items-center justify-center p-4"
          @click="closeLightbox"
        >
          <button
            class="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            @click.stop="closeLightbox"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  
          <!-- Image -->
          <img
            :src="`/gallery/${n}.jpg`"
            :alt="`Booze Café momento ${n}`"
            class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            @click.stop
          />
        </div>
      </transition>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const lightboxOpen = ref(false)
  const currentImage = ref(null)
  
  const openLightbox = (n) => {
    currentImage.value = n
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
  }
  
  const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = ''
  }
  
  const handleKeydown = (e) => {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
  }
  
  onMounted(() => window.addEventListener('keydown', handleKeydown))
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  })
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  