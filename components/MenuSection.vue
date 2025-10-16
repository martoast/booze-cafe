<template>
  <section id="menu" class="py-medium">
    <div class="container mx-auto px-4">
      <h2 class="font-heading text-7xl md:text-8xl lg:text-9xl">
        nuestro menú
      </h2>
      <p class="text-body mt-2 max-w-2xl">
        Café de especialidad, vinos selectos y cócteles artesanales. Todo
        preparado con dedicación para tu disfrute.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          <!-- Café -->
          <div>
            <h3 class="font-heading text-5xl">café</h3>
            <ul class="list-none space-y-6 mt-6">
              <li v-for="item in menu.cafe" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span>${{ item.price }}</span>
                </h5>
                <p class="text-body text-sm mt-1" v-if="item.description">
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </div>

          <!-- Sin Café -->
          <div>
            <h3 class="font-heading text-5xl">sin café</h3>
            <ul class="list-none space-y-6 mt-6">
              <li v-for="item in menu.sinCafe" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span>${{ item.price }}</span>
                </h5>
                <p class="text-body text-sm mt-1" v-if="item.description">
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </div>

          <!-- Drinks con Café -->
          <div>
            <h3 class="font-heading text-5xl">drinks con café</h3>
            <ul class="list-none space-y-6 mt-6">
              <li v-for="item in menu.drinksConCafe" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span>${{ item.price }}</span>
                </h5>
                <p class="text-body text-sm mt-1" v-if="item.description">
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </div>

          <!-- Especialidades -->
          <div>
            <h3 class="font-heading text-5xl">especialidades</h3>
            <ul class="list-none space-y-6 mt-6">
              <li v-for="item in menu.especialidades" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span>${{ item.price }}</span>
                </h5>
                <p class="text-body text-sm mt-1" v-if="item.description">
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </div>

          <!-- Vinos -->
          <div>
            <h3 class="font-heading text-5xl text-wine">vinos</h3>

            <h4 class="font-heading text-3xl mt-8 mb-4">Espumosos</h4>
            <ul class="list-none space-y-4">
              <li v-for="item in menu.vinos.espumosos" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span>${{ item.price }}</span>
                </h5>
              </li>
            </ul>

            <h4 class="font-heading text-3xl mt-8 mb-4">Tintos</h4>
            <ul class="list-none space-y-4">
              <li v-for="item in menu.vinos.tintos" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span class="text-lg"
                    >${{ item.copa }} / ${{ item.botella }}</span
                  >
                </h5>
              </li>
            </ul>

            <h4 class="font-heading text-3xl mt-8 mb-4">Blancos</h4>
            <ul class="list-none space-y-4">
              <li v-for="item in menu.vinos.blancos" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span class="text-lg"
                    >${{ item.copa }} / ${{ item.botella }}</span
                  >
                </h5>
              </li>
            </ul>

            <h4 class="font-heading text-3xl mt-8 mb-4">Mimosas</h4>
            <p class="text-body text-sm mb-4">
              Matcha / Naranja / Fresa / Maracuyá / Guayaba / Mango
            </p>
            <p class="font-heading text-2xl">$125</p>
          </div>

          <!-- Cerveza -->
          <div>
            <h3 class="font-heading text-5xl">cerveza</h3>

            <h4 class="font-heading text-3xl mt-8 mb-4">Artesanal</h4>
            <ul class="list-none space-y-4">
              <li v-for="item in menu.cerveza.artesanal" :key="item.name">
                <h5
                  class="flex justify-between items-baseline font-heading text-2xl"
                >
                  <span>{{ item.name }}</span>
                  <span
                    class="flex-grow border-b border-dotted border-k-border mx-2"
                  ></span>
                  <span class="text-lg"
                    >${{ item.tap }} / ${{ item.botella }}</span
                  >
                </h5>
                <p class="text-body text-sm mt-1">{{ item.description }}</p>
              </li>
            </ul>

            <h4 class="font-heading text-3xl mt-8 mb-4">Nacional</h4>
            <p class="text-body mb-2">
              XX lager / Bohemia / Heineken / Amstel ultra
            </p>
            <p class="font-heading text-2xl">$90</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const menu = {
  cafe: [
    { name: "Espresso", price: "55" },
    { name: "Cortado", price: "60" },
    { name: "Capuccino", price: "60" },
    { name: "Americano", price: "60 / 70" },
    { name: "Latte", price: "70 / 80" },
    { name: "Nitro Cold Brew", price: "70 / 80" },
    { name: "Tónico", price: "85 / 95", description: "Espresso / Cold brew" },
    {
      name: "Lottus",
      price: "115 / 125",
      description: "Crema y galleta de lotus / crema batida",
    },
    { name: "Sea Salt Caramelo", price: "80 / 95" },
  ],
  sinCafe: [
    { name: "Matcha", price: "75 / 85" },
    { name: "Sea Salt Matcha", price: "90 / 95" },
    {
      name: "Matcha Especial",
      price: "90 / 100",
      description: "Mango/Fresa/Guayaba (solo frío)",
    },
    { name: "Chocolate", price: "60 / 65" },
    { name: "Chai Latte", price: "70 / 80" },
    { name: "Taro Latte", price: "70 / 80" },
    { name: "Té", price: "75 / 80", description: "Marroquí / Verde / Negro" },
    {
      name: "Tisanas",
      price: "75 / 80",
      description: "Frutos Rojos / Yellow Sea / Fresa Kiwi",
    },
    {
      name: "Infusiones",
      price: "75 / 80",
      description: "Manzanilla-Lavanda / Rooibos",
    },
    {
      name: "Smoothies",
      price: "100 / 110",
      description: "All Caribbean / Chill Berry / Milky Fresa / Milky Mango",
    },
    {
      name: "Matchacate",
      price: "115",
      description: "Matcha / Plátano / Aguacate",
    },
    {
      name: "Limonadas",
      price: "90",
      description: "Limonada Booze / Citrus Jamaica",
    },
  ],
  drinksConCafe: [
    { name: "Bourbon Booze", price: "170", description: "Cold brew / Whiskey" },
    {
      name: "Carajillo Booze",
      price: "160",
      description: "Licor 43 / Mandarina",
    },
    {
      name: "NY Espresso",
      price: "170",
      description: "Manzana / Lavanda / Mezcal",
    },
    {
      name: "Jalapeño Mezcalita",
      price: "170",
      description: "Cold brew / Mezcal / Jalapeño",
    },
    { name: "Espresso Martini", price: "170", description: "Vodka / Espresso" },
  ],
  especialidades: [
    { name: "Mezcalita de Guanabana", price: "170" },
    { name: "Smoothie de Guanabana", price: "170" },
    {
      name: "Negroni",
      price: "170",
      description: "Gin / Campari / Red vermouth",
    },
    { name: "O Vaina!", price: "170", description: "Vodka / Jamaica" },
    {
      name: "Vodka Sour",
      price: "170",
      description: "Toronja / Fresa / Menta",
    },
    {
      name: "Berry Basil Flizz Gin",
      price: "170",
      description: "Plátano / Fresa / Agua tónica",
    },
    {
      name: "Mezcalita Cítrica",
      price: "170",
      description: "Toronja / Agua tónica",
    },
    {
      name: "Tequila Violeta",
      price: "170",
      description: "Limón / Vino tinto",
    },
    {
      name: "Paloma Maracuyá",
      price: "170",
      description: "Tequila / Maracuyá",
    },
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
        description:
          "TINIEBLA witbier insurgente / PIEDRA LISA session ipa colima / MATSU japanese rice lager tairand / DRÁGULA cotmeal stout insurgente",
      },
    ],
  },
};
</script>
