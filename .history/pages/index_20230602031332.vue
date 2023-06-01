<template>
    <div
      style="background-color: #EEEEEE; background-size: cover; background-position: center center; background-repeat: no-repeat; background-attachment: fixed; background-position: center top;"
      class="relative items-top justify-center min-h-screen sm:items-center"
    >
      <Navbar />
      <div class="col-span-1 mt-2">
      <Homepage />
      <br />
      <br />
      <Footer />
    <div class="col-span-1 justify-self-center sm:justify-self-center">
      <R />
    </div>
  </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1"
        >
          <div class="col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1">
            <df />
          </div>
          <div class="col-span-1 justify-self-center sm:justify-self-center">
          </div>
  </div>
  </div>
  </template>


<script>
export default {
  head() {
    return {
    title: 'Treiber Download für Epson-Drucker',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hier ist die Liste der verfügbaren Treiber für die Epson-Druckermodelle. Treiber anhand der Druckermodellnummer suchen.'
      },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://epsontreiber.com/druckertreiber'
        },
      ],
    };
  },
};
</script>