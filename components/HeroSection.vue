<!-- components/HeroSection.vue -->
<template>
  <section id="hero" class="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
    <!-- Two images side by side on desktop, one on mobile -->
    <div class="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
      <img 
        src="/10.jpg" 
        alt="Booze Café Tijuana" 
        class="w-full h-full object-cover"
      >
      <img 
        src="/11.jpg" 
        alt="Booze Café ambiente" 
        class="hidden lg:block w-full h-full object-cover"
      >
    </div>
    
    <!-- Content card centered over images -->
    <div class="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-[80vh] lg:min-h-[90vh]">
      <div class="border-2 border-gold rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl max-w-5xl w-full">
        <div class="flex flex-col lg:flex-row p-8 lg:p-12">
          <div class="lg:w-1/2 lg:pr-12 lg:border-r lg:border-gold/30">
            <h3 class="font-heading text-4xl lg:text-5xl xl:text-6xl text-k-black text-center lg:text-left">
              Disfruta un 
              <span class="text-gold">café</span>
            </h3>
            <h3 class="font-body italic text-3xl lg:text-4xl xl:text-5xl text-k-black mt-2 text-center lg:text-left">
              O una copa de vino
            </h3>
            <p class="text-base lg:text-lg mt-4 text-body text-center lg:text-left">
              Café, vinos y cócteles en La Cacho, Tijuana.
            </p>
            
            <!-- Primary CTA - Menu Button -->
            <div class="mt-6 flex justify-center lg:justify-start">
              <button 
                @click="$emit('open-menu')"
                class="inline-flex items-center justify-center gap-3 bg-k-black text-white font-heading text-xl px-8 py-4 rounded-full shadow-xl hover:bg-gold hover:text-k-black transition-all duration-300"
              >
                <span>Ver menú</span>
              </button>
            </div>

            <!-- Social Media Links -->
            <div class="mt-6 flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.facebook.com/boozecafe.tj" 
                target="_blank" 
                rel="noopener"
                class="flex items-center justify-center w-12 h-12 rounded-full bg-k-black hover:bg-gold transition-all duration-300 group"
              >
                <FacebookIcon class="w-6 h-6 text-white group-hover:text-k-black transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/boozecafe.tj/?hl=en" 
                target="_blank" 
                rel="noopener"
                class="flex items-center justify-center w-12 h-12 rounded-full bg-k-black hover:bg-gold transition-all duration-300 group"
              >
                <InstagramIcon class="w-6 h-6 text-white group-hover:text-k-black transition-colors" />
              </a>
            </div>
          </div>
          
          <div class="mt-8 pt-8 border-t border-gold/30 lg:border-t-0 lg:pt-0 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h3 class="font-heading text-4xl lg:text-5xl xl:text-6xl text-k-black text-center lg:text-left">Horarios</h3>
            <ul class="list-none mt-4 space-y-2 text-base lg:text-lg text-body">
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