<template>
  <section
    class="w-full relative overflow-hidden"
    style="background: linear-gradient(160deg, #42389e 0%, #2d2475 35%, #1a1245 65%, #0f1026 100%); min-height: 600px;"
  >
    <!-- Background vector overlay -->
    <div
      class="absolute inset-0 opacity-20"
      style="background: radial-gradient(ellipse 120% 80% at 50% 0%, #7b6fd0 0%, transparent 70%);"
    />

    <div class="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-[48px] pt-12 pb-0 flex flex-col items-center text-center">
      <!-- Headline -->
      <div class="relative max-w-[900px]">
        <h1 class="font-satoshi font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight text-white mb-3">
          The First
          <span class="relative inline-block mx-2">
            <!-- Orange badge behind the text -->
            <span
              class="absolute inset-0 -mx-2 -my-0.5 rounded-[8px]"
              style="background: #f9a71e; z-index: -1;"
            />
            <span class="relative font-bold px-2 py-0.5" style="color: #1a1245;">Dart-Native</span>
          </span>
          Feature Flag
          <br />
          With DartCodeAI
        </h1>
      </div>

      <!-- Subtitle -->
      <div class="mt-3 space-y-1 max-w-[700px]">
        <p class="font-semibold text-base md:text-lg lg:text-[20px] text-[#fefeff] leading-normal">
          Feature flags built for Dart, Ship faster, roll back<br />
          safely, and scale with AI-powered delivery
        </p>
        <p class="font-semibold text-base md:text-lg lg:text-[20px] leading-normal text-accent">
          Starting at just $1/month
        </p>
      </div>

      <div class="mt-8 flex flex-col md:flex-row items-center justify-center gap-[32px]">
        <div class="flex flex-col sm:flex-row items-center gap-[32px]">
          <div>
            <p class="text-[14px] font-medium text-text-light mb-2 text-left">Valid till 15th September,2025</p>
            <a
              href="#"
              class="inline-flex items-center justify-center font-bold text-[18px] rounded-[8px] w-[260px] h-[43px] shadow-lg hover:-translate-y-1 transition-all duration-300 bg-[#F9A71E]"
            >
              <span class="bg-text-gradient bg-clip-text text-transparent">Get Access</span>
            </a>
          </div>
          <div>
            <p class="text-[14px] font-medium text-transparent mb-2 hidden md:block select-none">Spacer</p>
            <a
              href="#"
              class="inline-flex items-center justify-center border border-[#F9A71E] font-bold text-[18px] rounded-[8px] w-[260px] h-[43px] shadow-lg hover:-translate-y-1 hover:bg-white/5 transition-all duration-300 text-[#F9A71E]"
            >
              Join AI Early Access
            </a>
          </div>
        </div>
      </div>

      <!-- Dashboard Preview -->
      <div class="mt-16 w-full max-w-[1394px] relative group perspective-1000">
        <!-- Blurred container -->
        <div
          class="rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-transform duration-700 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          style="background: rgba(255,255,255,0.55); backdrop-filter: blur(8px);"
        >
          <div class="m-4 md:m-6 rounded-lg overflow-hidden border border-gray-400 bg-[#0F1026]">
            <img
              src="~/assets/images/dashboard-hero.png"
              alt="IntelliToggle Dashboard"
              class="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
