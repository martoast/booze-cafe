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
                  <FacebookIcon class="w-6 h-6 text-k-black hover:text-accent transition-colors" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/boozecafe.tj/?hl=en" target="_blank" rel="noopener" class="p-0">
                  <InstagramIcon class="w-6 h-6 text-k-black hover:text-accent transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h6 class="font-heading text-2xl mb-4">Enlaces</h6>
            <ul class="list-none space-y-2">
              <li><a href="#hero" class="text-body hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#about" class="text-body hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#menu" class="text-body hover:text-accent transition-colors">Menú</a></li>
              <li><a href="https://take.cards/3tGya" target="_blank" rel="noopener" class="text-body hover:text-accent transition-colors">Tarjeta de Lealtad</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact -->
          <div>
            <h6 class="font-heading text-2xl mb-4">Ubicación</h6>
            <ul class="list-none space-y-2 text-body">
              <li>Av. Jalisco 2850</li>
              <li>Col. Madero (Cacho)</li>
              <li>Plaza Jalisco, Tijuana</li>
            </ul>
          </div>

          <!-- Column 4: Hours -->
          <div>
            <h6 class="font-heading text-2xl mb-4">Horarios</h6>
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
          <p class="text-body text-sm">© 2025 Booze Café Tijuana. Creado por: <a href="https://fullstack-labs.netlify.app/" class="text-accent underline font-bold hover:text-wine transition-colors" target="_blank">Fullstack Labs</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import FacebookIcon from './icons/FacebookIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';
</script>