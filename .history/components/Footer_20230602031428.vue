<template>
    <footer class="max-w-5xl mx-auto bg-white rounded-lg dark:bg-gray-900 m-2 border-b border-b-black shadow-xl container" style=" margin-top: -px;">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 dark:text-white" style=" margin-left: 10px;">informazioni di dettaglio</h2>
                          <p class="text-md font-reguler" style=" margin-left: 10px;" >Scarica i driver per le stampanti Epson, trova informazioni gratuite sull'installazione dei driver per Windows e Mac.</p>
              </div>
              <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 dark:text-white" style=" margin-left: 30px;">Categoria</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium" style=" margin-left: 30px;">
                      <li class="mb-4">
                        <nuxt-link to="/epson" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Epson</nuxt-link>
                      </li>
                      <li class="my-3">
                        <nuxt-link to="/canon" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Canon</nuxt-link>
                      </li>
                      <li class="my-3">
                        <nuxt-link to="/samsung" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Samsung</nuxt-link>
                      </li>
                      <li class="my-3">
                        <nuxt-link to="/hp" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">HP</nuxt-link>
                      </li>
                      <li class="my-3">
                        <nuxt-link to="/brother" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brother</nuxt-link>
                      </li>
                      <li class="my-3">
                        <nuxt-link to="/ricoh" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ricoh</nuxt-link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Meta</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                        <nuxt-link to="/disclaimer" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Disclaimer</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/privacy-policy" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Privacy Policy</nuxt-link>
                      </li>
                      <!-- <li class="my-3">
                        <nuxt-link to="/terms-and-conditions" class="block py-2 pl-3 pr-4 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Terms and Conditions</nuxt-link>
                      </li> -->
                      <br />
                      <br />
                      <br />
            <div class="mb-6 md:mb-0">
              <nuxt-link to="/" class="flex items-center">
                  <img src="https://ik.imagekit.io/Silawae/Stampante_Drivers/stampante_drivers.webp?updatedAt=1685560546404" class="h-10 mr-3" alt="Stampante Drivers" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </nuxt-link>
            </div>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="text-center my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <nuxt-link to="/" class="hover:underline">stampantedrivers.com </nuxt-link>. All Rights Reserved.
          </span>
      </div>
    </div>
    </footer>
</template>
