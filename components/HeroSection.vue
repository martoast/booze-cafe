<template>
  <section id="hero" class="relative">
    <!-- Two images side by side on desktop, one on mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-2 max-h-[80vh]">
      <img 
        src="/10.jpg" 
        alt="Booze Café Tijuana" 
        class="w-full h-full object-cover min-h-[80vh]"
      >
      <img 
        src="/11.jpg" 
        alt="Booze Café ambiente" 
        class="hidden lg:block w-full h-full object-cover min-h-[80vh]"
      >
    </div>
    
    <!-- Content card overlay -->
    <div class="container mx-auto px-4 lg:absolute lg:left-1/2 lg:top-full lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
      <div class="border-2 border-gold rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl my-12 lg:my-0">
        <div class="flex flex-col lg:flex-row p-8 lg:p-12">
          <div class="lg:w-1/2 lg:pr-12 lg:border-r lg:border-gold/30">
            <h3 class="font-heading text-4xl lg:text-5xl xl:text-6xl text-k-black">
              Disfruta un 
              <span class="text-gold">café</span>
            </h3>
            <h3 class="font-body italic text-3xl lg:text-4xl xl:text-5xl text-k-black mt-2">
              O una copa de vino
            </h3>
            <p class="text-base lg:text-lg mt-4 text-body">
              Café, vinos y cócteles en La Cacho, Tijuana.
            </p>
            
            <!-- Primary CTA - Menu Button -->
            <div class="mt-6">
              <button 
                @click="$emit('open-menu')"
                class="inline-flex items-center justify-center gap-3 bg-k-black text-white font-heading text-xl px-8 py-4 rounded-full shadow-xl hover:bg-gold hover:text-k-black transition-all duration-300"
              >
                <span>Ver menú</span>
              </button>
            </div>
          </div>
          
          <div class="mt-8 pt-8 border-t border-gold/30 lg:border-t-0 lg:pt-0 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h3 class="font-heading text-4xl lg:text-5xl xl:text-6xl text-k-black">Horarios</h3>
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
defineEmits(['open-menu'])
</script>