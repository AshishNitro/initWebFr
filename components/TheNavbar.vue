<template>
  <nav class="w-full bg-[#42389E] sticky top-0 z-50 shadow-lg">

    <!-- Main bar — fixed height so opening menu never causes a layout shift -->
    <div class="w-full max-w-[1680px] grid grid-cols-[1fr_auto_1fr] items-center mx-auto px-6 md:px-[80px] lg:px-[120px] h-[70px]">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-1 shrink-0">
        <div class="w-7 h-7 flex items-center justify-center">
          <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <path d="M14.5 4.5V48.3092M32.5 55.3V31.5312V13.8211H4.5H59" stroke="white" stroke-width="9" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="font-merriweather-sans font-bold text-[16px] text-white leading-none tracking-tight">IntelliToggle</span>
      </a>

      <!-- Desktop Nav — truly centered -->
      <ul class="hidden md:flex items-center gap-7">
        <li>
          <a href="#" class="font-dm-sans font-bold text-[14px] text-white hover:text-accent transition-colors duration-200">Home</a>
        </li>
        <li>
          <a href="#about" class="font-dm-sans font-normal text-[14px] text-white/80 hover:text-accent transition-colors duration-200">About</a>
        </li>
        <li>
          <a href="#pricing" class="font-dm-sans font-normal text-[14px] text-white/80 hover:text-accent transition-colors duration-200">Pricing</a>
        </li>
      </ul>

      <!-- Right: CTA (desktop) + Hamburger (mobile) -->
      <div class="flex items-center justify-end">
        <a
          href="#"
          class="hidden md:inline-flex items-center justify-center bg-accent text-primary-dark font-bold text-[14px] px-5 py-2 rounded-lg hover:bg-yellow-400 active:scale-95 transition-all duration-200 shrink-0 whitespace-nowrap"
        >
          Start Sandbox
        </a>

        <button
          class="md:hidden flex flex-col justify-center gap-[5px] p-1.5 rounded-md hover:bg-white/10 transition-colors"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span class="block w-[22px] h-0.5 bg-white rounded-full transition-all duration-300 origin-center" :class="{ 'rotate-45 translate-y-[7px]': menuOpen }" />
          <span class="block w-[22px] h-0.5 bg-white rounded-full transition-all duration-300" :class="{ 'opacity-0': menuOpen }" />
          <span class="block w-[22px] h-0.5 bg-white rounded-full transition-all duration-300 origin-center" :class="{ '-rotate-45 -translate-y-[7px]': menuOpen }" />
        </button>
      </div>
    </div>

    <!-- Mobile dropdown — absolutely positioned so it never affects navbar height -->
    <Transition name="slide-down">
      <div
        v-if="menuOpen"
        class="md:hidden absolute left-0 right-0 top-full border-t border-white/20 bg-[#3a3190] px-6 py-5 flex flex-col gap-1 z-40 shadow-lg"
      >
        <a href="#" class="font-dm-sans font-bold text-[16px] text-white py-2.5 border-b border-white/10" @click="menuOpen = false">Home</a>
        <a href="#about" class="font-dm-sans font-normal text-[16px] text-white/80 py-2.5 border-b border-white/10" @click="menuOpen = false">About</a>
        <a href="#pricing" class="font-dm-sans font-normal text-[16px] text-white/80 py-2.5" @click="menuOpen = false">Pricing</a>
        <a
          href="#"
          class="mt-3 inline-flex items-center justify-center bg-accent text-primary-dark font-bold text-[15px] px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
          @click="menuOpen = false"
        >
          Start Sandbox
        </a>
      </div>
    </Transition>

  </nav>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
