export default defineNuxtConfig({
  compatibilityDate: '2025-10-16',
  devtools: { enabled: false },
  ssr:false,
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Booze Café | Tijuana',
      meta: [
        // Essential SEO tags
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=1'
        },
        { 
          name: 'description', 
          content: 'Booze Café en Plaza Jalisco, Tijuana. Disfruta café de especialidad, vinos selectos y cócteles artesanales en un ambiente acogedor. Abierto de 7am a 9pm.'
        },
        // Keywords
        {
          name: 'keywords',
          content: 'booze cafe, cafe tijuana, cockteles tijuana, vino tijuana, cafe especialidad, plaza jalisco, booze coffee, cacho tijuana'
        },
        // Open Graph / Facebook
        { 
          property: 'og:type', 
          content: 'website'
        },
        { 
          property: 'og:title', 
          content: 'Booze Café | Tijuana'
        },
        { 
          property: 'og:description', 
          content: 'Tu espacio favorito en Plaza Jalisco para café de especialidad, vinos selectos y cócteles artesanales. Start with a shot, end with a shot.'
        },
        { 
          property: 'og:image', 
          content: '/logo.jpg'
        },
        { 
          property: 'og:image:width', 
          content: '1200'
        },
        { 
          property: 'og:image:height', 
          content: '630'
        },
        // Twitter
        { 
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        { 
          name: 'twitter:title', 
          content: 'Booze Café | Café de Especialidad y Cócteles en Tijuana'
        },
        { 
          name: 'twitter:description', 
          content: 'Tu espacio favorito en Plaza Jalisco para café de especialidad, vinos selectos y cócteles artesanales.'
        },
        { 
          name: 'twitter:image', 
          content: '/logo.jpg'
        },
        // Local Business
        {
          name: 'geo.region',
          content: 'MX-BCN'
        },
        {
          name: 'geo.placename',
          content: 'Tijuana'
        },
        {
          name: 'geo.position',
          content: '32.5168972;-117.023972'
        }
      ]
    }
  },
})