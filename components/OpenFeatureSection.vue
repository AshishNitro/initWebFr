<template>
  <section class="w-full py-16 lg:py-[120px] px-6 lg:px-[120px]" style="background: #edecf6;">
    <div class="max-w-[1680px] mx-auto">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-[275px] lg:justify-between items-center">
        <!-- Left: OpenFeature logo card -->
        <div class="flex-shrink-0 w-full lg:w-[830px]">
          <div
            class="bg-white rounded-xl shadow-sm flex items-center justify-center w-full min-h-[400px] lg:min-h-[618px]"
            style="border: 0.5px solid #42389e;"
          >
            <img
              src="~/assets/images/openfeature-logo.svg"
              alt="OpenFeature logo"
              class="w-[200px] md:w-[260px] h-auto object-contain"
            />
          </div>
        </div>

        <!-- Right: Content -->
        <div class="flex flex-col gap-[32px] w-full lg:w-[575px]">
          <div class="flex flex-col gap-[16px]">
            <h2 class="font-bold text-3xl md:text-[48px] leading-tight text-[#0e121b]">
              Seamless Feature Management with OpenFeature
            </h2>
            <p class="text-[18px] md:text-[20px] leading-[1.6] text-[#5f5f60]">
              Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
            </p>
          </div>
          <a
            href="#"
            class="inline-flex items-center justify-center gap-[8px] border border-accent text-accent font-bold text-[18px] w-fit px-[24px] py-[12px] h-[48px] rounded-[8px] hover:bg-yellow-400 group transition-all duration-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          >
            <span class="bg-text-gradient bg-clip-text text-transparent group-hover:text-white">Learn More</span>
            <svg class="w-6 h-6 text-accent group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
