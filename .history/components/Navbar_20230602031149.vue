<template>
    <!--Nav-->
    <div class="bg-[#FFFFFF] max-w-5xl mx-auto text-left" style=" padding-top: 15px;">
        <div class="justify-center flex flex-wrap items-center w-full px-3 py-3 mx-auto mt-0">
		<!--Logo-->
		<div class="flex flex-col items-center justify-center">
      <nuxt-link to="/" class="flex items-center">
          <img src="https://ik.imagekit.io/Silawae/Stampante_Drivers/stampante_drivers.webp?updatedAt=1685560546404" class="h-10 mr-0" style=" width: 250px; height: 70px;"  alt="stampante drivers" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </nuxt-link>
  <div class="flex justify-end md:hidden">
  </div>
</div>

		<!--/Logo-->

		<!--Search-->

	</div>
	<!--End Search-->
    <!--Main Nav-->

    <div class="-my-2 -mr-2 md:hidden line">
        </div>
    <div class="w-full shadow-xl scroll">
    <div class="flex mx-auto justify-center text-base border-b border-b-black list-reset bounce-in-right text-center bg-white shadow-xl">
			<div class="mr-1">
				<nuxt-link to="/epson" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#000000] no-underline bg-transparent rounded hover:no-underline hover:text-[#D4D4D4] hover:bg-[#FFFFFF] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Epson</span></nuxt-link>
        </div>

			<div class="mr-1">
				<nuxt-link to="/canon" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#000000] no-underline bg-transparent rounded hover:no-underline hover:text-[#D4D4D4] hover:bg-[#FFFFFF] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Canon</span></nuxt-link>
        </div>
			<div class="mr-1">
				<nuxt-link to="/samsung" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#000000] no-underline bg-transparent rounded hover:no-underline hover:text-[#D4D4D4] hover:bg-[#FFFFFF] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Samsung</span></nuxt-link>
        </div>

      <div class="mr-1">
				<nuxt-link to="/hp" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#000000] no-underline bg-transparent rounded hover:no-underline hover:text-[#D4D4D4] hover:bg-[#FFFFFF] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">HP</span></nuxt-link>
        </div>

        <div class="mr-1">
				<nuxt-link to="/brother" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#000000] no-underline bg-transparent rounded hover:no-underline hover:text-[#D4D4D4] hover:bg-[#FFFFFF] focus:border-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    </svg>
					<span class="pl-2">Brother</span></nuxt-link>
        </div>

        <div class="mr-1">
				<nuxt-link to="/ricoh" class="flex items-center justify-center px-5 py-2 my-2 font-semibold text-[#000000] no-underline bg-transparent rounded hover:no-underline hover:text-[#D4D4D4] hover:bg-[#FFFFFF] focus:border-gray-800">
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

</script>
  
  
<style>

.sidebar .widget {
  position: relative;
}
.sidebar .widget:after {
  left: 5px;
  transform: rotate(-5deg);
}
.sidebar .widget::after {
  right: 5px;
  transform: rotate(5deg);
}
.sidebar .widget::before, .sidebar .widget:before {
  content: '';
  bottom: 10px;
  height: 20px;
  position: absolute;
  z-index: -1;
  background: transparent;
  width: 50%;
  box-shadow: 7px 6px 15px #444444;
}


.container, .site-footer, .site-info {
  box-shadow: 0 5px 5px #383838;
}


.inside-header {
  background: -webkit-linear-gradient(30deg,#7e0909 33%,#ffffff 50%,#ffffff 75%);
}

.main-navigation {
  background: -webkit-linear-gradient(30deg,#fc4e03 25%,#fc4e03 33%,#000000 50%);
}

.sidebar .widget {
  box-shadow: 0 10px 10px #acacac;
}

</style>