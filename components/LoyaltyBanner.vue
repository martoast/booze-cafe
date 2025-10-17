<template>
  <section class="relative bg-primary overflow-hidden">
    <!-- Image section - Left side on desktop -->
    <div class="relative h-[500px] md:h-[600px] overflow-hidden md:absolute md:left-0 md:h-full md:w-1/2">
      <img 
        class="w-full h-full object-contain md:object-cover" 
        src="/card.jpg" 
        alt="Booze Loyalty Card" 
      />
      
      <!-- Decorative blob SVG -->
      <svg 
        viewBox="0 0 926 676" 
        aria-hidden="true" 
        class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[100px] opacity-30"
      >
        <path 
          fill="url(#loyalty-gradient)" 
          fill-opacity=".4" 
          d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" 
        />
        <defs>
          <linearGradient 
            id="loyalty-gradient" 
            x1="926.392" 
            x2="-109.635" 
            y1=".176" 
            y2="321.024" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D4A574" />
            <stop offset="1" stop-color="#C9A961" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <!-- Content section - Right side -->
    <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
      <div class="px-6 md:ml-auto md:w-1/2 md:pl-16 lg:pl-24">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-heading text-k-black mb-6">
          Acumula puntos
        </h2>

        <p class="text-xl md:text-2xl text-body mb-8">
          Obtén recompensas con cada visita
        </p>

        <!-- CTA Button -->
        <a 
          href="https://take.cards/3tGya" 
          target="_blank" 
          rel="noopener"
          class="inline-flex items-center gap-3 bg-k-black text-white font-heading text-xl px-8 py-4 rounded-full shadow-xl hover:bg-gold hover:text-k-black transition-all duration-300"
        >
          <span>Obtener tarjeta gratis</span>
        </a>
      </div>
    </div>
  </section>
</template>