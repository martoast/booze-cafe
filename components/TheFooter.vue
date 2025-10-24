<template>
  <div>
    <footer class="bg-primary py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Column 1: Logo and Socials -->
          <div>
            <img src="/logo.svg" alt="Footer Logo" class="h-12 mb-4">
            <!-- <p class="py-3 font-body text-body">Tu espacio favorito en Colonia Cacho para café, vino y buena vibra.</p> -->
            <p class="font-heading italic text-body font-bold">Start with a shot, end with a shot.</p>
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
              <li><a href="#hero" class="font-body text-body hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#about" class="font-body text-body hover:text-gold transition-colors">Nosotros</a></li>
              <li><a href="#menu" class="font-body text-body hover:text-gold transition-colors">Menú</a></li>
              <li><a href="https://wa.me/16199489069?text=Hola,%20me%20interesa%20información%20sobre%20franquicias%20de%20Booze%20Café" target="_blank" rel="noopener" class="font-body text-body hover:text-gold transition-colors">Franquicias</a></li>
              <li><a href="https://take.cards/3tGya" target="_blank" rel="noopener" class="font-body text-body hover:text-gold transition-colors">Tarjeta de Lealtad</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact -->
          <div>
            <h6 class="font-heading text-2xl mb-4 text-k-black">Ubicación</h6>
            <ul class="list-none space-y-2 font-body text-body mb-4">
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
            <ul class="list-none space-y-2 font-body text-body mb-6">
              <li>LUN - VIE: 7:00 am - 9:00 pm</li>
              <li>SÁB - DOM: 8:00 am - 9:00 pm</li>
            </ul>
            <a 
              href="https://wa.me/16199489069?text=Hola,%20me%20interesa%20información%20sobre%20franquicias%20de%20Booze%20Café" 
              target="_blank" 
              rel="noopener"
              class="inline-flex items-center gap-2 bg-gold text-k-black px-4 py-2 rounded-lg hover:bg-k-black hover:text-white transition-colors text-sm font-heading"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Franquicias</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <footer class="bg-k-gray border-t border-k-border py-6">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p class="font-body text-body text-sm">© 2025 Booze Café Tijuana. Creado por: <a href="https://fullstack-labs.netlify.app/" class="text-gold underline font-bold hover:text-k-black transition-colors" target="_blank">Fullstack Labs</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import FacebookIcon from './icons/FacebookIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
</script>