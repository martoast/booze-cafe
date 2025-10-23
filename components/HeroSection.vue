<!-- components/HeroSection.vue -->
<template>
  <section id="hero" class="relative min-h-screen overflow-hidden">
    <!-- Background images -->
    <div class="absolute inset-0">
      <!-- Mobile: single image takes full space -->
      <img 
        src="/11.jpg" 
        alt="Booze Café Tijuana" 
        class="w-full h-full object-cover lg:hidden"
      >
      
      <!-- Desktop: two images side by side -->
      <div class="hidden lg:grid grid-cols-2 w-full h-full">
        <img 
          src="/10.jpg" 
          alt="Booze Café Tijuana" 
          class="w-full h-full object-cover"
        >
        <img 
          src="/11.jpg" 
          alt="Booze Café ambiente" 
          class="w-full h-full object-cover"
        >
      </div>
    </div>
    
    <!-- Gradient overlay for better text readability on mobile -->
    <div class="absolute inset-0 bg-gradient-to-t from-k-black/40 via-transparent to-transparent lg:hidden"></div>
    
    <!-- Content card - centered on mobile, bottom left on desktop -->
    <div class="relative z-10 container mx-auto px-4 h-dvh md:h-screen flex items-center lg:items-end pb-0 lg:pb-16">
      <div class="border-2 border-gold rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl w-full max-w-4xl mx-auto lg:mx-0">
        <div class="flex flex-col lg:flex-row p-6 lg:p-8">
          <div class="lg:w-1/2 lg:pr-8 lg:border-r lg:border-gold/30">
            <h3 class="font-heading text-4xl lg:text-4xl xl:text-5xl text-k-black">
              Start with a 
              <span class="text-gold">shot</span>
            </h3>
            <h3 class="font-heading italic text-3xl lg:text-3xl xl:text-4xl text-k-black mt-1">
              End with a shot
            </h3>
            <p class="font-body text-base lg:text-lg mt-3 text-body">
              Café, vinos y cócteles en La Cacho, Tijuana.
            </p>
            
            <!-- CTAs -->
            <div class="mt-4 flex flex-col sm:flex-row gap-3 items-start">
              <button 
                @click="$emit('open-menu')"
                class="inline-flex items-center justify-center gap-2 bg-k-black text-white font-heading text-lg px-6 py-3 rounded-full shadow-xl hover:bg-gold hover:text-k-black transition-all duration-300"
              >
                <span>Ver menú</span>
              </button>
              
              <!-- Social Media Links -->
              <div class="flex gap-3">
                <a 
                  href="https://www.facebook.com/boozecafe.tj" 
                  target="_blank" 
                  rel="noopener"
                  class="flex items-center justify-center w-11 h-11 rounded-full bg-k-black hover:bg-gold transition-all duration-300 group"
                >
                  <FacebookIcon class="w-5 h-5 text-white group-hover:text-k-black transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/boozecafe.tj/?hl=en" 
                  target="_blank" 
                  rel="noopener"
                  class="flex items-center justify-center w-11 h-11 rounded-full bg-k-black hover:bg-gold transition-all duration-300 group"
                >
                  <InstagramIcon class="w-5 h-5 text-white group-hover:text-k-black transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          <div class="mt-6 pt-6 border-t border-gold/30 lg:border-t-0 lg:pt-0 lg:mt-0 lg:w-1/2 lg:pl-8">
            <h3 class="font-heading text-3xl lg:text-4xl text-k-black">Horarios</h3>
            <ul class="list-none mt-3 space-y-1 font-body text-base lg:text-lg text-body">
              <li>LUN - VIE.....................7:00 am - 9:00 pm</li>
              <li>SÁB - DOM......................8:00 am - 9:00 pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FacebookIcon from './icons/FacebookIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'

defineEmits(['open-menu'])
</script>