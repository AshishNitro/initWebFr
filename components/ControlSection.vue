<template>
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto">
      <!-- Section Title -->
      <h2 class="font-satoshi font-bold text-3xl lg:text-[48px] text-left mb-[48px] text-[#0E121B]">
        Control &amp; Power-focused
      </h2>

      <!-- Three Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[95px]">
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col gap-[24px]"
        >
          <!-- App Screenshot (dark bg card) -->
          <div class="flex flex-col gap-[8px]">
            <div
              class="rounded-[12px] overflow-hidden shadow-lg"
              style="background: #1a1c3d;"
            >
              <div class="p-3">
                <div class="rounded-[4px] overflow-hidden bg-[#f8f8f8]">
                  <img
                    :src="card.img"
                    :alt="card.title + ' screenshot'"
                    class="w-full h-auto block opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="flex flex-col gap-[12px] mt-4">
              <h3 class="font-bold text-[24px]" style="color: #0E121B;">{{ card.title }}</h3>
              <p class="text-[18px] md:text-[20px] leading-[1.6]" style="color: #5f5f60;">{{ card.description }}</p>
            </div>
          </div>

          <a
            href="#"
            class="inline-flex mt-auto items-center justify-center border font-bold text-[18px] px-[24px] py-[12px] rounded-[8px] self-start shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] hover:bg-[#F9A71E] hover:text-white transition-all duration-300 w-fit"
            style="border-color: #F9A71E; color: #F9A71E;"
          >
            View Documentation
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Connect',
    description: 'Install SDK in your Dart project in 2 mins.',
    img: '~/assets/images/control-connect.png',
  },
  {
    title: 'Create Flags',
    description: 'Define features in IntelliToggle dashboard.',
    img: '~/assets/images/control-create.png',
  },
  {
    title: 'Ship & Control',
    description: 'Flip switches anytime, see instant results.',
    img: '~/assets/images/control-ship.png',
  },
]
</script>
