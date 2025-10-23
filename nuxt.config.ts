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
      link: [
        // Add Google Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ],
      meta: [
        // ... your existing meta tags
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,viewport-fit=cover,maximum-scale=1'
        },
        { 
          name: 'description', 
          content: 'Café, vinos y cócteles en La Cacho, Tijuana. Start with a shot, end with a shot.'
        },
        {
          name: 'keywords',
          content: 'booze cafe, cafe tijuana, cockteles tijuana, vino tijuana, cafe especialidad, cacho tijuana, booze coffee'
        },
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
          content: 'https://booze-cafe.netlify.app/frame.png'
        },
        { 
          property: 'og:image:width', 
          content: '1200'
        },
        { 
          property: 'og:image:height', 
          content: '630'
        },
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
          content: 'https://booze-cafe.netlify.app/frame.png'
        },
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