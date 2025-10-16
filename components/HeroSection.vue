<template>
  <section id="hero" class="relative">
    <!-- Two images side by side -->
    <div class="grid grid-cols-1 lg:grid-cols-2 max-h-[80vh]">
      <img 
        src="/10.jpg" 
        alt="banner left" 
        class="w-full h-full object-cover min-h-[40vh] lg:min-h-[80vh]"
      >
      <img 
        src="/11.jpg" 
        alt="banner right" 
        class="w-full h-full object-cover min-h-[40vh] lg:min-h-[80vh]"
      >
    </div>
    
    <!-- Content card overlay -->
    <div class="container mx-auto px-4 lg:absolute lg:left-1/2 lg:top-full lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
      <div class="border rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg my-12 lg:my-0">
        <div class="flex flex-col lg:flex-row p-8 lg:p-12">
          <div class="lg:w-1/2 lg:pr-12 lg:border-r lg:border-k-border">
            <h3 class="font-heading text-4xl lg:text-5xl xl:text-6xl text-k-black">
              Disfruta un 
              <span class="text-accent">café</span>
            </h3>
            <h3 class="font-body italic text-3xl lg:text-4xl xl:text-5xl text-wine mt-2">
              O una copa de vino
            </h3>
            <p class="text-base lg:text-lg mt-4 text-body">Tu espacio favorito en Plaza Jalisco para café de especialidad, vinos selectos y cócteles artesanales en un ambiente acogedor.</p>
            <a href="#menu" class="btn-primary mt-6">Ver menú</a>
          </div>
          <div class="mt-8 pt-8 border-t border-k-border lg:border-t-0 lg:pt-0 lg:mt-0 lg:w-1/2 lg:pl-12">
            <h3 class="font-heading text-4xl lg:text-5xl xl:text-6xl">Horarios</h3>
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