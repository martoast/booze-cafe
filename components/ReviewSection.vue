<!-- components/ReviewSection.vue -->
<template>
    <section class="relative bg-k-black overflow-hidden">
      <!-- Decorative blob SVG -->
      <svg 
        viewBox="0 0 926 676" 
        aria-hidden="true" 
        class="absolute -top-24 right-24 w-[57.875rem] transform-gpu blur-[100px] opacity-20"
      >
        <path 
          fill="url(#review-gradient)" 
          fill-opacity=".4" 
          d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" 
        />
        <defs>
          <linearGradient 
            id="review-gradient" 
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
  
      <!-- Content -->
      <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
        <div class="px-6 text-center">
          <div class="flex justify-center mb-6">
            <!-- Star rating visual -->
            <div class="flex gap-2">
              <svg v-for="i in 5" :key="i" class="w-10 h-10 md:w-12 md:h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
  
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
            ¿Te gustó tu visita?
          </h2>
  
          <p class="font-body text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Comparte tu experiencia con nosotros y ayuda a otros a descubrir Booze
          </p>
  
          <!-- CTA Button -->
          <a 
            href="https://maps.app.goo.gl/zThxbDurW1byqN5w9" 
            target="_blank" 
            rel="noopener"
            class="inline-flex items-center gap-3 bg-gold text-k-black font-heading text-xl px-8 py-4 rounded-full shadow-xl hover:bg-white transition-all duration-300"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Dejar una reseña</span>
          </a>
  
          <p class="font-body text-white/60 text-sm mt-4">
            Se abrirá en Google Maps
          </p>
        </div>
      </div>
    </section>
  </template>