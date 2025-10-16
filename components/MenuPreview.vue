<template>
    <section id="menu" class="py-medium bg-primary relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="font-heading text-7xl md:text-8xl lg:text-9xl">nuestro menú</h2>
          <p class="text-body mt-4 max-w-2xl mx-auto text-lg">
            Café de especialidad, vinos selectos y cócteles artesanales.
          </p>
        </div>
  
        <!-- Drinks Carousel -->
        <div class="relative mb-16">
          <!-- Gradient Overlays for fade effect -->
          
          <!-- Scrollable Container -->
          <div 
            ref="scrollContainer"
            class="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
            @mousedown="startDrag"
            @mousemove="onDrag"
            @mouseup="endDrag"
            @mouseleave="endDrag"
            @touchstart="handleTouch"
            @touchmove="handleTouchMove"
            @touchend="stopTouch"
          >
            <!-- Drink Cards Track -->
            <div 
              ref="drinkTrack"
              class="flex gap-6 md:gap-8 px-4 animate-slow-scroll"
              :class="{ 'pause-animation': isDragging }"
            >
              <!-- Triple the drinks for infinite scroll -->
              <template v-for="n in 3" :key="`set-${n}`">
                <div 
                  v-for="(drink, index) in featuredDrinks" 
                  :key="`drink-${n}-${index}`"
                  class="flex-shrink-0 w-64 md:w-80 group"
                >
                  <div class="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-xl">
                    <img 
                      :src="drink.image" 
                      :alt="drink.name"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                      loading="lazy"
                      draggable="false"
                    >
                    <!-- Dark overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <!-- Drink info -->
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 class="font-heading text-3xl md:text-4xl mb-2">{{ drink.name }}</h3>
                      <p class="text-sm md:text-base font-body opacity-90">{{ drink.description }}</p>
                    </div>
                    
                    <!-- Hover effect badge -->
                    <div class="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver más
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
  
        <!-- Eye-catching CTA Button -->
        <div class="text-center relative">
          <!-- Pulsing background circle -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full animate-ping-slow pointer-events-none"></div>
          
          <button 
            @click="$emit('open-menu')"
            class="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-wine text-white font-heading text-2xl md:text-3xl px-16 py-6 rounded-full shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 group z-10"
          >
            <span>Ver menú completo</span>
            <svg 
              class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <!-- Subtle hint text -->
          <p class="text-body text-sm mt-4 opacity-70">
            Explora toda nuestra carta de bebidas
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  defineEmits(['open-menu'])
  
  // Featured drinks data
  const featuredDrinks = [
    {
      name: 'Bourbon Booze',
      description: 'Cold brew con whiskey',
      image: '/2.jpg'
    },
    {
      name: 'Espresso Martini',
      description: 'Vodka y espresso',
      image: '/7.jpg'
    },
    {
      name: 'Sangría Booze',
      description: 'Vino blanco o tinto',
      image: '/5.jpg'
    },
    {
      name: 'Carajillo Booze',
      description: 'Licor 43 con mandarina',
      image: '/3.jpg'
    },
    {
      name: 'Jalapeño Mezcalita',
      description: 'Cold brew con mezcal',
      image: '/4.jpg'
    },
    {
      name: 'Lottus Coffee',
      description: 'Crema de lotus batida',
      image: '/6.jpg'
    }
  ]
  
  // Refs and state
  const scrollContainer = ref(null)
  const drinkTrack = ref(null)
  const isDragging = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)
  const startTouchX = ref(0)
  let checkInterval = null
  
  // Mouse drag handlers
  const startDrag = (e) => {
    isDragging.value = true
    startX.value = e.pageX - scrollContainer.value.offsetLeft
    scrollLeft.value = scrollContainer.value.scrollLeft
  }
  
  const onDrag = (e) => {
    if (!isDragging.value) return
    e.preventDefault()
    const x = e.pageX - scrollContainer.value.offsetLeft
    const walk = (x - startX.value) * 2
    scrollContainer.value.scrollLeft = scrollLeft.value - walk
  }
  
  const endDrag = () => {
    isDragging.value = false
  }
  
  // Touch handlers
  const handleTouch = (e) => {
    isDragging.value = true
    startTouchX.value = e.touches[0].clientX
  }
  
  const handleTouchMove = (e) => {
    if (!isDragging.value) return
    const currentX = e.touches[0].clientX
    const diff = startTouchX.value - currentX
    scrollContainer.value.scrollLeft += diff
    startTouchX.value = currentX
  }
  
  const stopTouch = () => {
    isDragging.value = false
  }
  
  // Check scroll position for infinite loop
  const checkScrollPosition = () => {
    if (!scrollContainer.value || isDragging.value) return
    
    const container = scrollContainer.value
    const scrollWidth = container.scrollWidth
    const currentScroll = container.scrollLeft
    
    // Calculate the width of one set (1/3 of total)
    const oneSetWidth = scrollWidth / 3
    
    // If we've scrolled past 2 sets, reset to position of 1 set
    if (currentScroll >= oneSetWidth * 2) {
      container.scrollLeft = currentScroll - oneSetWidth
    }
    // If we've scrolled before the first set, jump forward
    else if (currentScroll <= 0) {
      container.scrollLeft = oneSetWidth
    }
  }
  
  // Initialize
  onMounted(() => {
    if (scrollContainer.value) {
      // Start at middle position
      const scrollWidth = scrollContainer.value.scrollWidth
      scrollContainer.value.scrollLeft = scrollWidth / 3
      
      // Check position periodically for infinite loop
      checkInterval = setInterval(checkScrollPosition, 100)
    }
  })
  
  onUnmounted(() => {
    if (checkInterval) {
      clearInterval(checkInterval)
    }
  })
  </script>
  
  <style scoped>
  /* Hide scrollbar */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Slow continuous scroll animation */
  @keyframes slow-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-100% / 3));
    }
  }
  
  .animate-slow-scroll {
    animation: slow-scroll 120s linear infinite;
    will-change: transform;
  }
  
  /* Pause animation when dragging or hovering */
  .animate-slow-scroll:hover,
  .animate-slow-scroll.pause-animation {
    animation-play-state: paused;
  }
  
  /* Pulsing animation for CTA background */
  @keyframes ping-slow {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.2;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.3);
      opacity: 0;
    }
  }
  
  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  </style>