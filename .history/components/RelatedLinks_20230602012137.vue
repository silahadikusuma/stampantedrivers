<template>
    <div class="max-w-xs text-left lg:mx-4 md:mx-4 mt-3 shadow-xl">
      <br />
      <h3 class="text-xl leading-7 font-semibold">Aktueller Beitrag</h3>
      <div class="mt-5 overflow-hidden shadow-xl">
        <div class="relative overflow-x-auto shadow-xl">
          <table class="w-full text-sm text-left">
            <tbody>
              <tr v-for="item in listLinks" :key="item.id" class="bg-white border-b hover:bg-gray-50">
                <a v-if="item.link && !item.isRoute" :href="item.link" target="_blank" class="text-blue-600 dark:text-blue-600 hover:underline cursor-pointer" rel="noopener noreferrer">
                  <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                      {{ item.label }}
                  </th>
                </a>
                <nuxt-link v-if="item.isRoute" :to="item.link" class="text-blue-700 dark:text-black hover:underline cursor-pointer" rel="noopener noreferrer">
                  <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                      {{ item.label }}
                  </th>
                </nuxt-link>
                <th v-if="!item.link && !item.isRoute" scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                    {{ item.label }}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "RelatedLinks",
    data() {
      return {
        listLinks: [
                {
                  "id": "646a6cf6-c04e-4d19-892e-ddb79d2552d2",
                  "label": "Epson ET-2820 Treiber",
                  "link": "/epson/drivers-epson-et-2820",
                  "isRoute": true
                },
                {
                  "id": "e40c9706-cf25-4ef8-a748-9c741c61280b",
                  "label": "Epson ET-2810 Treiber",
                  "link": "/epson/drivers-epson-et-2810",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Canon TS5050 Treiber",
                  "link": "/canon/drivers-canon-ts-5050",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Canon MG3550 Treiber",
                  "link": "/canon/drivers-canon-mg-3550",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Samsung C48x Treiber",
                  "link": "/samsung/drivers-samsung-c48x",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Samsung C480w Treiber",
                  "link": "/samsung/drivers-samsung-c480w",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "HP Deskjet 4120e Treiber",
                  "link": "/hp/hp-deskjet-4120e",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "HP Deskjet 3750 Treiber",
                  "link": "/hp/hp-deskjet-3750",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Brother HL-L2350DW Treiber",
                  "link": "/brother/brother-hl-l2350dw",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Brother MFC-J5340DW",
                  "link": "/brother/brother-mfc-j5340dw",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Ricoh SP 150 Treiber",
                  "link": "/ricoh/ricoh-sp-150",
                  "isRoute": true
                },
                {
                  "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                  "label": "Ricoh IM C3000",
                  "link": "/ricoh/ricoh-im-c3000",
                  "isRoute": true
                },
              ]
      }
    }
    // computed: {
    //   getLinks() {
    //     return this.$store.state.links.listLinks;
    //   }
    // },
    // created() {
    //   this.$store.dispatch('links/fetchRelatedLinks');
    // }
  }
  </script>