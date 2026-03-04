<template>
  <section id="pricing" class="w-full py-16 lg:py-[120px] px-6 lg:px-[120px] bg-[#EDECF6]">
    <div class="max-w-[1680px] mx-auto flex flex-col items-center">
      <!-- Title -->
      <h2 class="font-satoshi font-bold text-3xl md:text-4xl lg:text-[48px] text-center mb-[48px] text-[#0E121B]">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Pricing Card -->
      <div
        class="rounded-[16px] px-[32px] py-[40px] flex flex-col items-center gap-6 w-full max-w-[400px] shadow-2xl transition-transform duration-300 hover:-translate-y-2"
        style="background: linear-gradient(135deg, #42389e 0%, #0f1026 100%);"
      >
        <p class="font-bold text-[18px] text-white/80 uppercase tracking-widest">Prices starts at</p>
        <div class="flex items-baseline gap-1 mt-2">
          <span class="font-black text-6xl md:text-[80px] text-white leading-none">$10</span>
          <span class="text-[24px] text-white/80 font-medium ml-2">/month</span>
        </div>
      </div>

      <!-- View Subscription Details Button -->
      <a
        href="#"
        class="mt-[24px] w-full max-w-[400px] inline-flex items-center justify-center bg-[#F9A71E] font-bold text-[18px] px-8 py-[16px] rounded-[8px] hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-xl"
      >
        <span class="bg-text-gradient bg-clip-text text-transparent">View Subscription Details</span>
      </a>

      <!-- Free Sandbox Banner -->
      <div
        class="mt-[64px] w-full max-w-[1200px] bg-[#f5f4fb] rounded-[16px] shadow-md border border-[#d7d5ea] px-8 md:px-[48px] py-[48px] flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div class="flex flex-col gap-[16px] text-center md:text-left">
          <h3 class="font-bold text-2xl md:text-[32px]" style="color: #0E121B;">
            Start Your 7-Day Free Sandbox Plan
          </h3>
          <p class="text-[18px] md:text-[20px] leading-[1.6]" style="color: #5f5f60;">
            Join over 1,000+ startups already growing with IntelliToggle.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-[20px] shrink-0">
          <a
            href="#"
            class="inline-flex items-center justify-center bg-[#F9A71E] text-[#1a1c3d] font-semibold text-[16px] px-5 py-[12px] rounded-[8px] hover:brightness-110 transition-colors shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-[160px]"
          >
            Get Started
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center border font-semibold text-[16px] px-5 py-[12px] rounded-[8px] hover:bg-accent/10 transition-colors shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] w-[160px]"
            style="border-color: #f9a71e; color: #f9a71e;"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
