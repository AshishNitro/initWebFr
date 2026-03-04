<template>
  <!-- CTA Banner -->
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto">
      <div
        class="relative rounded-[24px] overflow-hidden px-6 md:px-12 py-[80px] flex flex-col items-center text-center shadow-2xl"
        style="background: linear-gradient(135deg, #2d2475 0%, #42389e 50%, #1a1245 100%);"
      >
        <!-- Circuit board background pattern -->
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><path d=%22M10 10h40M10 30h40M30 10v40M10 10v40%22 stroke=%22white%22 stroke-width=%221%22 fill=%22none%22/></svg>'); background-size: 60px 60px;"/>

        <div class="relative z-10 flex flex-col items-center gap-6 max-w-[800px]">
          <h2 class="font-satoshi font-bold text-3xl md:text-5xl lg:text-[56px] text-white leading-tight">
            Launch Features Confidently With AI Driven Feature Flags
          </h2>
          <p class="text-[20px] md:text-[24px] text-white/90">
            Start for free, scale as your team grows
          </p>
          <div class="flex flex-col sm:flex-row gap-[24px] mt-4">
            <a
              href="#pricing"
              class="inline-flex items-center justify-center bg-[#F9A71E] font-bold text-[18px] px-8 py-[14px] rounded-[8px] hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-xl w-full sm:w-[260px] h-[54px]"
            >
              <span class="bg-text-gradient bg-clip-text text-transparent">Start for $1/mo</span>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center border font-bold text-[18px] px-8 py-[14px] rounded-[8px] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-xl w-full sm:w-[260px] h-[54px]"
              style="border-color: #f9a71e; color: #f9a71e;"
            >
              Join AI Early Access
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="w-full py-16 lg:py-[80px] px-6 lg:px-[120px]" style="background: #ecebf5;">
    <div class="max-w-[1680px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">
      <!-- Brand Column -->
      <div class="flex flex-col gap-[8px] w-full lg:w-[300px]">
        <a href="/" class="flex items-center gap-0">
          <div class="w-[40px] h-[37px] flex items-center justify-center">
            <img src="~/assets/images/logo-icon.png" alt="IntelliToggle" class="w-full h-full object-contain" />
          </div>
          <span class="font-merriweather-sans font-bold text-[16px] bg-clip-text bg-gradient-to-b from-[#42389e] to-[#0f1026] text-transparent -ml-1">IntelliToggle</span>
        </a>
        <p class="text-[16px] leading-relaxed max-w-[280px] opacity-90" style="color: #4a4b4d;">
          IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
        </p>
        <!-- Social Icon -->
        <div class="flex gap-3 mt-1">
          <a
            href="#"
            class="w-[24px] h-[24px] rounded-full flex items-center justify-center"
            aria-label="GitHub"
          >
             <img src="~/assets/images/github-icon.svg" alt="GitHub" class="w-full h-full" />
          </a>
        </div>
      </div>

      <!-- Resources & Company Columns -->
      <div class="flex gap-10 lg:gap-0 lg:w-[400px] lg:justify-between">
        <!-- Resources Column -->
        <div class="flex flex-col gap-[20px]">
          <h4 class="text-[16px] font-normal" style="color: #5f5f60;">Resources</h4>
          <ul class="flex flex-col gap-[12px]">
            <li v-for="link in resourceLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-[16px] font-semibold hover:text-primary transition-colors"
                style="color: #323338;"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div class="flex flex-col gap-[20px]">
          <h4 class="text-[16px] font-normal" style="color: #5f5f60;">Company</h4>
          <ul class="flex flex-col gap-[12px]">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-[16px] font-semibold hover:text-primary transition-colors"
                style="color: #323338;"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Column -->
      <div class="flex flex-col gap-[20px] w-full lg:w-[280px]">
        <h4 class="font-semibold text-[16px]" style="color: #263238;">Subscribe to Newsletter</h4>
        <form class="flex" @submit.prevent>
          <input
            type="email"
            placeholder="Enter email address"
            class="flex-1 rounded-l-[7px] px-3 py-[9px] text-[12px] border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-primary/30 min-w-0"
            style="color: #8a8a8a;"
          />
          <button
            type="submit"
            class="inline-flex items-center justify-center bg-[#F9A71E] font-bold text-[12px] px-[32px] py-[9px] rounded-r-[7px] hover:bg-yellow-400 transition-colors whitespace-nowrap border-0"
          >
            <span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">Subscribe</span>
          </button>
        </form>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
const resourceLinks = [
  { label: 'Why IntelliToggle Is Different', href: '#' },
  { label: 'Customer Support', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

const companyLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Documentation', href: '#' },
  { label: 'About Us', href: '#about' },
]
</script>
