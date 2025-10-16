<template>
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-50 overflow-hidden"
          @click.self="$emit('close')"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          
          <!-- Modal Container -->
          <div class="relative h-full flex items-center justify-center p-4">
            <div class="relative bg-primary rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
              
              <!-- Header -->
              <div class="sticky top-0 bg-primary border-b border-k-border z-10 px-8 py-6 flex justify-between items-center">
                <div>
                  <h2 class="font-heading text-5xl md:text-6xl">nuestro menú</h2>
                  <p class="text-body mt-2">Café de especialidad, vinos selectos y cócteles artesanales</p>
                </div>
                <button 
                  @click="$emit('close')"
                  class="w-12 h-12 rounded-full bg-k-gray hover:bg-accent hover:text-white transition-colors flex items-center justify-center text-2xl"
                >
                  ✕
                </button>
              </div>
  
              <!-- Scrollable Content -->
              <div class="overflow-y-auto px-8 py-8" style="max-height: calc(90vh - 120px);">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                  
                  <!-- Café -->
                  <div>
                    <h3 class="font-heading text-4xl mb-6 text-accent">café</h3>
                    <ul class="list-none space-y-4">
                      <li v-for="item in menu.cafe" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-xl">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-lg">${{ item.price }}</span>
                        </div>
                        <p class="text-body text-xs mt-1" v-if="item.description">{{ item.description }}</p>
                      </li>
                    </ul>
                  </div>
  
                  <!-- Sin Café -->
                  <div>
                    <h3 class="font-heading text-4xl mb-6 text-accent">sin café</h3>
                    <ul class="list-none space-y-4">
                      <li v-for="item in menu.sinCafe" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-xl">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-lg">${{ item.price }}</span>
                        </div>
                        <p class="text-body text-xs mt-1" v-if="item.description">{{ item.description }}</p>
                      </li>
                    </ul>
                  </div>
  
                  <!-- Drinks con Café -->
                  <div>
                    <h3 class="font-heading text-4xl mb-6 text-accent">drinks con café</h3>
                    <ul class="list-none space-y-4">
                      <li v-for="item in menu.drinksConCafe" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-xl">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-lg">${{ item.price }}</span>
                        </div>
                        <p class="text-body text-xs mt-1" v-if="item.description">{{ item.description }}</p>
                      </li>
                    </ul>
                  </div>
  
                  <!-- Especialidades -->
                  <div>
                    <h3 class="font-heading text-4xl mb-6 text-accent">especialidades</h3>
                    <ul class="list-none space-y-4">
                      <li v-for="item in menu.especialidades" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-xl">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-lg">${{ item.price }}</span>
                        </div>
                        <p class="text-body text-xs mt-1" v-if="item.description">{{ item.description }}</p>
                      </li>
                    </ul>
                  </div>
  
                  <!-- Vinos -->
                  <div>
                    <h3 class="font-heading text-4xl mb-6 text-wine">vinos</h3>
                    
                    <h4 class="font-heading text-2xl mb-3 mt-6">Espumosos</h4>
                    <ul class="list-none space-y-3">
                      <li v-for="item in menu.vinos.espumosos" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-lg">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-base">${{ item.price }}</span>
                        </div>
                      </li>
                    </ul>
  
                    <h4 class="font-heading text-2xl mb-3 mt-6">Tintos</h4>
                    <ul class="list-none space-y-3">
                      <li v-for="item in menu.vinos.tintos" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-lg">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-base">${{ item.copa }} / ${{ item.botella }}</span>
                        </div>
                      </li>
                    </ul>
  
                    <h4 class="font-heading text-2xl mb-3 mt-6">Blancos</h4>
                    <ul class="list-none space-y-3">
                      <li v-for="item in menu.vinos.blancos" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-lg">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-base">${{ item.copa }} / ${{ item.botella }}</span>
                        </div>
                      </li>
                    </ul>
  
                    <h4 class="font-heading text-2xl mb-3 mt-6">Mimosas</h4>
                    <p class="text-body text-sm mb-2">Matcha / Naranja / Fresa / Maracuyá / Guayaba / Mango</p>
                    <p class="font-heading text-xl">$125</p>
                  </div>
  
                  <!-- Cerveza -->
                  <div>
                    <h3 class="font-heading text-4xl mb-6 text-accent">cerveza</h3>
                    
                    <h4 class="font-heading text-2xl mb-3">Artesanal</h4>
                    <ul class="list-none space-y-3">
                      <li v-for="item in menu.cerveza.artesanal" :key="item.name">
                        <div class="flex justify-between items-baseline">
                          <span class="font-heading text-lg">{{ item.name }}</span>
                          <span class="flex-grow border-b border-dotted border-k-border mx-2 mb-1"></span>
                          <span class="font-heading text-base">${{ item.tap }} / ${{ item.botella }}</span>
                        </div>
                        <p class="text-body text-xs mt-1">{{ item.description }}</p>
                      </li>
                    </ul>
  
                    <h4 class="font-heading text-2xl mb-3 mt-6">Nacional</h4>
                    <p class="text-body text-sm mb-2">XX lager / Bohemia / Heineken / Amstel ultra</p>
                    <p class="font-heading text-xl">$90</p>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
  defineProps({
    isOpen: Boolean
  })
  
  defineEmits(['close'])
  
  const menu = {
    cafe: [
      { name: "Espresso", price: "55" },
      { name: "Cortado", price: "60" },
      { name: "Capuccino", price: "60" },
      { name: "Americano", price: "60 / 70" },
      { name: "Latte", price: "70 / 80" },
      { name: "Nitro Cold Brew", price: "70 / 80" },
      { name: "Tónico", price: "85 / 95", description: "Espresso / Cold brew" },
      { name: "Lottus", price: "115 / 125", description: "Crema y galleta de lotus / crema batida" },
      { name: "Sea Salt Caramelo", price: "80 / 95" },
    ],
    sinCafe: [
      { name: "Matcha", price: "75 / 85" },
      { name: "Sea Salt Matcha", price: "90 / 95" },
      { name: "Matcha Especial", price: "90 / 100", description: "Mango/Fresa/Guayaba (solo frío)" },
      { name: "Chocolate", price: "60 / 65" },
      { name: "Chai Latte", price: "70 / 80" },
      { name: "Taro Latte", price: "70 / 80" },
      { name: "Té", price: "75 / 80", description: "Marroquí / Verde / Negro" },
      { name: "Tisanas", price: "75 / 80", description: "Frutos Rojos / Yellow Sea / Fresa Kiwi" },
      { name: "Infusiones", price: "75 / 80", description: "Manzanilla-Lavanda / Rooibos" },
      { name: "Smoothies", price: "100 / 110", description: "All Caribbean / Chill Berry / Milky Fresa / Milky Mango" },
      { name: "Matchacate", price: "115", description: "Matcha / Plátano / Aguacate" },
      { name: "Limonadas", price: "90", description: "Limonada Booze / Citrus Jamaica" },
    ],
    drinksConCafe: [
      { name: "Bourbon Booze", price: "170", description: "Cold brew / Whiskey" },
      { name: "Carajillo Booze", price: "160", description: "Licor 43 / Mandarina" },
      { name: "NY Espresso", price: "170", description: "Manzana / Lavanda / Mezcal" },
      { name: "Jalapeño Mezcalita", price: "170", description: "Cold brew / Mezcal / Jalapeño" },
      { name: "Espresso Martini", price: "170", description: "Vodka / Espresso" },
    ],
    especialidades: [
      { name: "Mezcalita de Guanabana", price: "170" },
      { name: "Smoothie de Guanabana", price: "170" },
      { name: "Negroni", price: "170", description: "Gin / Campari / Red vermouth" },
      { name: "O Vaina!", price: "170", description: "Vodka / Jamaica" },
      { name: "Vodka Sour", price: "170", description: "Toronja / Fresa / Menta" },
      { name: "Berry Basil Flizz Gin", price: "170", description: "Plátano / Fresa / Agua tónica" },
      { name: "Mezcalita Cítrica", price: "170", description: "Toronja / Agua tónica" },
      { name: "Tequila Violeta", price: "170", description: "Limón / Vino tinto" },
      { name: "Paloma Maracuyá", price: "170", description: "Tequila / Maracuyá" },
      { name: "Sangría Booze", price: "150", description: "Vino blanco o tinto" },
    ],
    vinos: {
      espumosos: [
        { name: "Barón Maxime", price: "115 / 405" },
        { name: "Aperol Spritz", price: "160" },
      ],
      tintos: [
        { name: "Cabernet Cetto", copa: "110", botella: "405" },
        { name: "Syrah Cetto", copa: "110", botella: "405" },
        { name: "Cune Rioja Crianza", copa: "135", botella: "510" },
      ],
      blancos: [
        { name: "Pinot Grigio", copa: "75", botella: "255" },
        { name: "Valminor Albariño", copa: "130", botella: "450" },
      ],
    },
    cerveza: {
      artesanal: [
        {
          name: "Artesanal",
          tap: "100",
          botella: "110",
          description: "TINIEBLA witbier insurgente / PIEDRA LISA session ipa colima / MATSU japanese rice lager tairand / DRÁGULA cotmeal stout insurgente",
        },
      ],
    },
  }
  </script>
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  .modal-enter-active .relative,
  .modal-leave-active .relative {
    transition: transform 0.3s ease;
  }
  
  .modal-enter-from .relative,
  .modal-leave-to .relative {
    transform: scale(0.95);
  }
  </style>