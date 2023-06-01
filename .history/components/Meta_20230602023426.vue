<template>
    <div class="max-w-xs text-left lg:mx-4 md:mx-4 mt-3 shadow-xl">
      <br />
      <h3 class="text-xl leading-7 font-semibold" style=" margin-left: -10px;"></h3> Meta </h3>
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
                  "label": "Disclaimer",
                  "link": "/disclaimer",
                  "isRoute": true
                },
                {
                  "id": "e40c9706-cf25-4ef8-a748-9c741c61280b",
                  "label": "Privacy Policy",
                  "link": "/privacy-policy",
                  "isRoute": true
                },
                // {
                //   "id": "158db849-a143-4bbc-a757-48d7f25802ca",
                //   "label": "Terms and Conditions",
                //   "link": "/terms-and-conditions",
                //   "isRoute": true
                // }
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
