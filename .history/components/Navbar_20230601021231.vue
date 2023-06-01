<template>
    <!--Nav-->
    <div class="bg-[#026CF2] max-w-5xl mx-auto text-left" style=" padding-top: 15px;">
        <div class="justify-center container flex flex-wrap items-center w-full px-3 py-3 mx-auto mt-0">
		<!--Logo-->
		<div class="flex flex-col items-center justify-center">
      <nuxt-link to="/" class="flex items-center">
          <img src="https://ik.imagekit.io/Silawae/Stampante_Drivers/Stampante_Driver.webp?updatedAt=1685560323243" class="h-10 mr-0" style=" width: 250px; height: 40px;"  alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </nuxt-link>
  <div class="flex justify-end md:hidden">
    <button class="p-2 outline:none" onclick="toggleSearch();" id="nav-toggle">
      <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
      </svg>
    </button>
  </div>
</div>

		<!--/Logo-->

		<!--Search-->

	</div>
	<!--End Search-->
    <!--Main Nav-->

    <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="openMenu"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

    <div class="w-full shadow-md scroll">
    <div class="container-full flex mx-auto justify-center text-base border-b list-reset bounce-in-right text-center bg-white">
			<div class="mr-1">
				<nuxt-link to="/epson" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#026CF2] no-underline bg-transparent rounded hover:no-underline hover:text-white hover:bg-[#026CF2] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Epson</span></nuxt-link>
        </div>

			<div class="mr-1">
				<nuxt-link to="/canon" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#026CF2] no-underline bg-transparent rounded hover:no-underline hover:text-white hover:bg-[#026CF2] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Canon</span></nuxt-link>
        </div>
			<div class="mr-1">
				<nuxt-link to="/samsung" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#026CF2] no-underline bg-transparent rounded hover:no-underline hover:text-white hover:bg-[#026CF2] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Samsung</span></nuxt-link>
        </div>

      <div class="mr-1">
				<nuxt-link to="/hp" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#026CF2] no-underline bg-transparent rounded hover:no-underline hover:text-white hover:bg-[#026CF2] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">HP</span></nuxt-link>
        </div>

        <div class="mr-1">
				<nuxt-link to="/brother" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#026CF2] no-underline bg-transparent rounded hover:no-underline hover:text-white hover:bg-[#026CF2] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Brother</span></nuxt-link>
        </div>

        <div class="mr-1">
				<nuxt-link to="/ricoh" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#026CF2] no-underline bg-transparent rounded hover:no-underline hover:text-white hover:bg-[#026CF2] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Ricoh</span></nuxt-link>
        </div>

			

        </div>
	</div>
	<!--/Main Nav-->

</div>	<!--/Nav-->
</template>

<script>
export default{
  data() {
    return {
      isCollapse: false,
      isOptionsExpanded: false,
      selectedOption: "",
      options: [
        {
          label: "Fußballspieler",
          url: "/star-geburtstage/futballspieler",
        },
        {
          label: "Wissenschaftler",
          url: "/star-geburtstage/wissenschaftler",
        },
        {
          label: "Autorin",
          url: "/star-geburtstage/autorin",
        },
        {
          label: "Modell",
          url: "/star-geburtstage/modell",
        },
        {
          label: "Erfinder",
          url: "/star-geburtstage/erfinder",
        },
        {
          label: "Politiker",
          url: "/star-geburtstage/politiker",
        },
        {
          label: "Nobelpreis",
          url: "/star-geburtstage/nobelpreis",
        },
        {
          label: "Sängerin",
          url: "/star-geburtstage/sangerin",
        },
		    {
          label: "Unternehmen",
          url: "/star-geburtstage/unternehmen",
        },
      ]
    }

  },
  methods: {
    openMenu() {
      this.isCollapse = true;
    },
    closeMenu() {
      this.isCollapse = false;
    },
    setOption(option) {
      this.selectedOption = option;
      // this.isOptionsExpanded = false;
    }
    
  }
  
}
</script>
