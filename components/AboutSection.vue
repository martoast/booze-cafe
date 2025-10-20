<!-- components/AboutSection.vue -->
<template>
  <section id="about" class="py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="flex items-center justify-center">
          <img 
            src="/public/about.jpg" 
            alt="Coffee Bean" 
            class="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
          >
        </div>
        <div class="flex flex-col justify-center">
          <h3 class="font-heading text-5xl md:text-6xl lg:text-7xl">Sobre Nosotros</h3>
          <div class="mt-6">
            <p class="text-body text-lg">
              Bienvenido a Booze, donde cada momento del día tiene su bebida perfecta. Desde un espresso matutino hasta una copa de vino al atardecer, somos tu refugio en Colonia Cacho, Tijuana. Nuestra mixología de autor, café de especialidad y brunch todo el día se encuentran en un espacio con actitud. Ya sea que vengas por un cold brew, un cocktail creativo o nuestra famosa charcutería con vino, aquí encontrarás ese plan que nunca falla.
            </p>
            <p class="text-body text-lg mt-4 font-bold italic">
              Start with a shot, end with a shot.
            </p>
            <a href="#menu" class="btn-primary inline-block mt-6">Ver menú</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>