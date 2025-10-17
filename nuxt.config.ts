export default defineNuxtConfig({
  compatibilityDate: '2025-10-16',
  devtools: { enabled: false },
  ssr: false,
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
          content: 'Café, vinos y cócteles en La Cacho, Tijuana. Start with a shot, end with a shot.'
        },
        // Keywords
        {
          name: 'keywords',
          content: 'booze cafe, cafe tijuana, cockteles tijuana, vino tijuana, cafe especialidad, cacho tijuana, booze coffee'
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
          content: 'Café, vinos y cócteles en La Cacho, Tijuana. Start with a shot, end with a shot.'
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
          content: 'Booze Café | Tijuana'
        },
        { 
          name: 'twitter:description', 
          content: 'Café, vinos y cócteles en La Cacho, Tijuana.'
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