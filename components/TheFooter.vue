<template>
  <div>
    <footer class="bg-primary py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Column 1: Logo and Socials -->
          <div>
            <img src="https://placehold.co/150x40/393330/F5F4F2?text=Booze" alt="Footer Logo" class="h-10 mb-4">
            <p class="py-3 text-body">Tu espacio favorito en Colonia Cacho para café, vino y buena vibra.</p>
            <p class="text-body italic font-bold">Start with a shot, end with a shot.</p>
            <ul class="flex gap-3 list-none mt-4">
              <li>
                <a href="https://www.facebook.com/boozecafe.tj" target="_blank" rel="noopener" class="p-0">
                  <FacebookIcon class="w-6 h-6 text-k-black hover:text-gold transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/boozecafe.tj/?hl=en" target="_blank" rel="noopener" class="p-0">
                  <InstagramIcon class="w-6 h-6 text-k-black hover:text-gold transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h6 class="font-heading text-2xl mb-4 text-k-black">Enlaces</h6>
            <ul class="list-none space-y-2">
              <li><a href="#hero" class="text-body hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#about" class="text-body hover:text-gold transition-colors">Nosotros</a></li>
              <li><a href="#menu" class="text-body hover:text-gold transition-colors">Menú</a></li>
              <li><a href="https://take.cards/3tGya" target="_blank" rel="noopener" class="text-body hover:text-gold transition-colors">Tarjeta de Lealtad</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact -->
          <div>
            <h6 class="font-heading text-2xl mb-4 text-k-black">Ubicación</h6>
            <ul class="list-none space-y-2 text-body mb-4">
              <li>Av. Jalisco 2850</li>
              <li>Col. Madero (Cacho)</li>
              <li>Plaza Jalisco, Tijuana</li>
            </ul>
            <a 
              href="https://www.google.com/maps/place/Booze+Coffee/@32.5169498,-117.0239405,20.57z/data=!4m14!1m7!3m6!1s0x80d9490045f6b6ad:0xc3df2e3348b9d81!2sPlaza+Jalisco!8m2!3d32.5169147!4d-117.0237715!16s%2Fg%2F11y6rlykwz!3m5!1s0x80d949006902f7e3:0x553fe41f798265f5!8m2!3d32.5168972!4d-117.023972!16s%2Fg%2F11w9phm_q_?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener"
              class="inline-flex items-center gap-2 bg-k-black text-white px-4 py-2 rounded-lg hover:bg-gold hover:text-k-black transition-colors text-sm font-heading"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <span>Cómo llegar</span>
            </a>
          </div>

          <!-- Column 4: Hours -->
          <div>
            <h6 class="font-heading text-2xl mb-4 text-k-black">Horarios</h6>
            <ul class="list-none space-y-2 text-body">
              <li>LUN - VIE: 7:00 am - 9:00 pm</li>
              <li>SÁB - DOM: 8:00 am - 9:00 pm</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <footer class="bg-k-gray border-t border-k-border py-6">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p class="text-body text-sm">© 2025 Booze Café Tijuana. Creado por: <a href="https://fullstack-labs.netlify.app/" class="text-gold underline font-bold hover:text-k-black transition-colors" target="_blank">Fullstack Labs</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import FacebookIcon from './icons/FacebookIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
</script>