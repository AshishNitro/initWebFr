<template>
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto flex flex-col items-center">
      <!-- Title -->
      <h2
        class="font-satoshi font-bold text-3xl lg:text-[48px] text-center mb-[48px] pb-2 leading-[1.2]"
        style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent;"
      >
        Why Teams Use IntelliToggle
      </h2>

      <!-- Three Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-[95px] mb-[64px] lg:px-[40px] w-full">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col"
        >
          <!-- Icon Box -->
          <div class="mb-[32px] transition-transform duration-300 hover:scale-105 flex-shrink-0">
            <img :src="item.image" :alt="item.title" class="w-[90px] h-[90px] object-contain" />
          </div>
          <h3 class="font-bold text-[24px] mb-[12px]" style="color: #1A1C3D;">{{ item.title }}</h3>
          <p class="text-[18px] md:text-[20px] leading-[1.6]" style="color: #5f5f60;">{{ item.description }}</p>
        </div>
      </div>

      <!-- Case Note Banner -->
      <div
        class="w-full max-w-[1400px] mx-auto rounded-[16px] border border-[#d2d0e5] shadow-md px-8 py-[24px] flex flex-col md:flex-row items-center justify-between gap-6"
        style="background: #edecf6;"
      >
        <p class="text-[18px] md:text-[20px] text-center md:text-left text-[#0E121B] leading-snug">
          <strong class="font-bold">Read a 2-min case note:</strong>
          <span class="font-medium text-[#5f5f60]"> How a sample Flutter app shipped faster with IntelliToggle</span>
        </p>
        <a
          href="#"
          class="inline-flex shrink-0 items-center justify-center bg-[#F9A71E] font-bold text-[18px] px-[32px] py-[16px] rounded-[8px] whitespace-nowrap hover:bg-yellow-400 hover:-translate-y-1 transition-all duration-300 shadow-xl"
        >
          <span class="bg-text-gradient bg-clip-text text-transparent">Read Now</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import frame5 from '~/components/logoforty/Frame 5.png'
import frame6 from '~/components/logoforty/Frame 6.png'
import frame7 from '~/components/logoforty/Frame 7.png'

const items = [
  {
    image: frame5,
    title: 'Safer, faster rollouts',
    description: 'Control feature releases in minutes, not weeks without risking production stability.',
  },
  {
    image: frame6,
    title: 'Confidence to ship',
    description: '"Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes."',
  },
  {
    image: frame7,
    title: 'Future-ready with AI delivery',
    description: 'Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.',
  },
]
</script>
