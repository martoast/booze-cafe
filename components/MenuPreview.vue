<template>
  <section id="menu" class="py-medium bg-primary relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="font-heading text-7xl md:text-8xl text-k-black mb-4">Bebidas de Temporada</h2>
        <p class="text-body mt-4 max-w-2xl mx-auto text-lg">
          Descubre nuestras creaciones especiales de otoño. Solo por tiempo limitado.
        </p>
      </div>

      <!-- Drinks Carousel -->
      <div class="relative mb-16">
        
        <!-- Scrollable Container -->
        <div 
          ref="scrollContainer"
          class="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          @mouseenter="pauseAutoScroll"
          @touchstart="handleTouch"
          @touchmove="handleTouchMove"
          @touchend="stopTouch"
        >
          <!-- Drink Cards Track -->
          <div 
            ref="drinkTrack"
            class="flex gap-6 md:gap-8"
          >
            <!-- Triple the drinks for true infinite scroll -->
            <template v-for="n in 3" :key="`set-${n}`">
              <div 
                v-for="(drink, index) in featuredDrinks" 
                :key="`drink-${n}-${index}`"
                class="flex-shrink-0 w-64 md:w-80 group"
              >
                <div class="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-xl border-2 border-gold/20">
                  <img 
                    :src="drink.image" 
                    :alt="drink.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                    loading="lazy"
                    draggable="false"
                  >
                  <!-- Dark overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-k-black/80 via-k-black/20 to-transparent"></div>
                  
                  <!-- Drink info -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 class="font-heading text-3xl md:text-4xl mb-2">{{ drink.name }}</h3>
                    <p class="text-sm md:text-base font-body opacity-90">{{ drink.description }}</p>
                  </div>
                  
                  <!-- Seasonal badge -->
                  <div class="absolute top-4 right-4 bg-gold text-k-black px-3 py-1 rounded-full text-xs font-heading">
                    🍂 Otoño
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center relative">
        <button 
          @click="$emit('open-menu')"
          class="inline-flex items-center justify-center gap-3 bg-k-black text-white font-heading text-2xl md:text-3xl px-16 py-6 rounded-full shadow-2xl hover:bg-gold hover:text-k-black transition-all duration-300"
        >
          <span>Ver menú completo</span>
        </button>
        
        <!-- Subtle hint text -->
        <p class="text-body text-sm mt-4 opacity-70">
          Explora toda nuestra carta de café, vinos y cócteles
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
    name: 'Nutty Pumpkin',
    description: 'Licor de almendras servido on the rocks con un twist de jarabe de calabaza.',
    image: '/menu/1.jpg'
  },
  {
    name: 'Pumpkin Latte',
    description: 'Espresso con especias de calabaza y crema batida.',
    image: '/menu/2.jpg'
  },
  {
    name: 'Latte de Romero',
    description: 'Con foam de calabaza y toque herbal.',
    image: '/menu/3.jpg'
  },
  {
    name: 'Mango Harvest',
    description: 'Mango, leche y calabaza en un smoothie que sabe a otoño.',
    image: '/menu/4.jpg'
  },
  {
    name: 'Spicy Pumpkin Mocha',
    description: 'Espresso, cacao, chile y calabaza en un mix bold y de temporada.',
    image: '/menu/5.jpg'
  }
]

// Refs and state
const scrollContainer = ref(null)
const drinkTrack = ref(null)
const isDragging = ref(false)
const isAutoScrollPaused = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const startTouchX = ref(0)
let checkInterval = null
let autoScrollInterval = null
let pauseTimeout = null

// Mouse drag handlers
const startDrag = (e) => {
  isDragging.value = true
  isAutoScrollPaused.value = true
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
  // Resume auto-scroll after 3 seconds
  clearTimeout(pauseTimeout)
  pauseTimeout = setTimeout(() => {
    isAutoScrollPaused.value = false
  }, 3000)
}

// Touch handlers
const handleTouch = (e) => {
  isDragging.value = true
  isAutoScrollPaused.value = true
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
  // Resume auto-scroll after 3 seconds
  clearTimeout(pauseTimeout)
  pauseTimeout = setTimeout(() => {
    isAutoScrollPaused.value = false
  }, 3000)
}

// Pause on hover
const pauseAutoScroll = () => {
  isAutoScrollPaused.value = true
  clearTimeout(pauseTimeout)
  pauseTimeout = setTimeout(() => {
    isAutoScrollPaused.value = false
  }, 3000)
}

// Auto-scroll function
const autoScroll = () => {
  if (!scrollContainer.value || isDragging.value || isAutoScrollPaused.value) return
  
  // Scroll by 1 pixel
  scrollContainer.value.scrollLeft += 1
}

// Check scroll position for infinite loop
const checkScrollPosition = () => {
  if (!scrollContainer.value) return
  
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
    
    // Auto-scroll every 30ms for smooth movement
    autoScrollInterval = setInterval(autoScroll, 30)
  }
})

onUnmounted(() => {
  if (checkInterval) {
    clearInterval(checkInterval)
  }
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
  if (pauseTimeout) {
    clearTimeout(pauseTimeout)
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
</style>