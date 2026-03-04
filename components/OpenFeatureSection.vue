<template>
  <section class="w-full py-16 lg:py-[100px] px-6 lg:px-[120px]" style="background: #f4f4f8;">
    <div class="max-w-[1280px] mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-[120px] lg:justify-between items-center">
        
        <!-- Left: OpenFeature logo card -->
        <div class="flex-shrink-0 w-full lg:w-[540px]">
          <div
            class="bg-white rounded-[10px] flex items-center justify-center w-full min-h-[350px] lg:min-h-[460px] shadow-sm relative overflow-hidden"
            style="border: 1px solid #D1D5DB;"
          >
            <!-- A subtle light bottom shadow or inset shadow isn't super necessary, but a tiny border helps define the card on the grey background like the image -->
            <img
              src="@/components/logoforty/openfeature.png"
              alt="OpenFeature logo"
              class="w-[240px] md:w-[280px] h-auto object-contain"
            />
          </div>
        </div>

        <!-- Right: Content -->
        <div class="flex flex-col gap-[28px] w-full lg:w-[580px]">
          <div class="flex flex-col gap-[16px]">
            <h2 class="font-bold text-3xl md:text-[34px] leading-[1.3] text-[#1a1c3d] xl:whitespace-nowrap">
              Seamless Feature Management with<br />OpenFeature
            </h2>
            <p class="text-[16px] md:text-[16px] leading-[1.6] text-[#6B7280]">
              Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
            </p>
          </div>
          <a
            href="#"
            class="inline-flex items-center justify-center gap-[8px] bg-[#F9A71E] text-[#1a1c3d] font-semibold text-[15px] w-fit px-[24px] py-[12px] rounded-[6px] hover:bg-[#e0961b] transition-all duration-300"
          >
            <span>Learn More</span>
            <svg class="w-5 h-5 text-[#1a1c3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
