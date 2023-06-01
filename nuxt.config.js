export default {
  target: "static",
  ssr: true,

  head: {
    htmlAttrs: {
      lang: "de",
    },
    title: "Altersrechner | Berechnen Sie Ihr Alter kostenlos mit Alterradar",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Unser kostenloser Altersrechner berechnet sofort Ihr Alter anhand Ihres Geburtstages und teilt Ihnen mit, wie alt Sie in Jahren, Monaten und Tagen.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/aufalmarom-id/image/upload",
    },
    imagekit: {
      baseURL: "https://ik.imagekit.io/Dedixz",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "vue-sweetalert2/nuxt",
    "@nuxtjs/robots",
  ],

  sitemap: {
    hostname: process.env.BASE_URL,
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
  },

  robots: [
    {
      UserAgent: "*",
      Disallow: "",
      Allow: "/",
    },
    {
      Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias["node-fetch-native"] = require.resolve("node-fetch");
    },
  },

  publicRuntimeConfig: {
    HOME_BASE_URL: process.env.BASE_URL,
  },
};
