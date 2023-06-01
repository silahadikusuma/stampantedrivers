<template>
    <div class="max-w-5xl mx-auto text-left" style="display: grid; grid-template-columns: 1fr 300px; grid-gap: 20px; background-color: #fff;">
        <div class="content">
          <div class="mt-0 overflow-hidden shadow sm:rounded-lg p-6 bg-white">
          <div>
              <div id="">
                <nuxt-link to="/" class="text-black font-reguler hover:underline"> 
                  <img src="https://ik.imagekit.io/muhammadhilalludin/Driver/home.png?updatedAt=1683457882027" alt="Image description" class="mr-0" width="20" style="margin-top: -10px; margin-left: 0px;  margin-bottom: -20px;" > 
                </nuxt-link>
                <p class="text-gray-500" style=" margin-left: 25px;"> » Canon</p>
                <div class="line" style=" margin-top: 4px;"></div>
  
                <div id="">
              <h1 class="text-xl font-medium">Driver Canon Stampante Windows 11/10 Download</h1>
            </div>
            <br />
              <p class="text-md">Sie können Epson Druckertreiber und Software-Dateien direkt von Epsons Servern auf deren Support-Seite herunterladen. Diese Treiberdateien sind erforderlich, um Ihren Drucker mit Ihrem PC zu verbinden, auf Druck- und Scanfunktionen zuzugreifen und die neueste Software und Firmware zu aktualisieren.</p>
            <div>
              <br />
              <p class="text-md">Epson-Hersteller aktualisieren ihre Treiber und Software regelmäßig, um die Kompatibilität mit neuen Computer-Systemen sicherzustellen, die Druckerleistung zu verbessern, die Druckgeschwindigkeit zu erhöhen, präzise Scans zu gewährleisten, Fehler zu beheben und Zugang zu neuen Funktionen und Möglichkeiten zu bieten.</p>
        <div>
          <br />
              <p class="text-md">Diese Seite enthält eine Liste der Download-Links für Epson Druckertreiber. Laden Sie die neuesten Druckertreiber, Software, Epson Scan 2 und firmware für Ihre Epson Drucker kostenlos deutsch version.</p>
  
  
                <div class="grid grid-cols-3 gap-2 mt-4">
    <div class="line w-[100%]"></div>
    <div class="flex items-center justify-center">
      <div class="px-3 py-2 text-sm font-bold text-gray-700 bg-[#D8D8D8] flex justify-center border-b">
        Canon Druckertreiber
      </div>
    </div>
    <div class="line w-[100%]"></div>
  </div>
  <br />


  <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
                         
                <div class="flex justify-center items-center">
                <article
                    class="hover:animate-background rounded-xl bg-gradient-to-r from-red-300 via-red-500 to-red-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
                  >
                         <div class="rounded-[10px] bg-white dark:bg-gray-900 sm:p-6">
                          <a href="/canon/canon-ts-5050" class="">
                              <img src="https://ik.imagekit.io/Silawae/Stampante_Drivers/Download_Stampante_Canon_TS5050_Driver.webp?updatedAt=1685622563458" alt="Download_Stampante_Canon_TS5050_Driver" class="object-cover w-full h-full rounded">
                              <h5 class="text-center text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-2">Canon TS5050</h5>
                          </a>
                        </div>
                </article>
              </div>
  
                
              <div class="flex justify-center items-center">
                <article
                    class="hover:animate-background rounded-xl bg-gradient-to-r from-red-300 via-red-500 to-red-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
                  >
                         <div class="rounded-[10px] bg-white dark:bg-gray-900 sm:p-6">
                          <a href="/canon/canon-mg-3550" class="">
                              <img src="https://ik.imagekit.io/qu50ggaiv/Canon_MG3550.png?updatedAt=1683998102765" alt="gambar" class="object-cover w-full h-full rounded">
                              <h5 class="text-center text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-2">Canon MG3550</h5>
                          </a>
                        </div>
                </article>
              </div>
  
  
              <div class="flex justify-center items-center">
                <article
                    class="hover:animate-background rounded-xl bg-gradient-to-r from-red-300 via-red-500 to-red-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
                  >
                         <div class="rounded-[10px] bg-white dark:bg-gray-900 sm:p-6">
                        <a href="/canon/canon-ip-7250" class="">
                            <img src="https://ik.imagekit.io/qu50ggaiv/Canon_IP7250.png?updatedAt=1683998215856" alt="gambar" class="object-cover w-full h-full rounded">
                            <h5 class="text-center text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-2">Canon IP7250</h5>
                        </a>
                      </div>
                </article>
              </div>

  
  
              </div>
        </div>



        
      </div>
    </div>
    </div>
    </div>
    </div>
              
              <!-- Content goes here -->
        </div>
        <div class="sidebar">
          <!-- Sidebar content goes here -->
          <RelatedLinks />
        </div>
        <div :class="isModalWidget ? 'relative z-10' : 'hidden'" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form @submit.prevent="onSubmitGetCode">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg class="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        <div>
      <div>
      <div>
      </div>
      </div>
      </div>
      </div>
      <div class="flex justify-center pt-4 space-x-2">
          <!-- footer will be here  -->
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '~/components/RelatedLinks.vue'
  
  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        isOpen: false
      }
    }
  }
  </script> 


