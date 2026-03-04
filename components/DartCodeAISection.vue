<template>
  <section
    class="w-full relative py-16 lg:py-[120px] px-6 lg:px-[120px] overflow-hidden"
    style="background: linear-gradient(135deg, #2d2475 0%, #42389e 50%, #1a1245 100%);"
  >
    <!-- Circuit board background pattern -->
    <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><path d=%22M10 10h40M10 30h40M30 10v40M10 10v40%22 stroke=%22white%22 stroke-width=%221%22 fill=%22none%22/></svg>'); background-size: 60px 60px;"/>

    <div class="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
      <!-- Coming Soon Badge -->
      <span
        class="inline-flex items-center justify-center px-4 py-1.5 rounded-full font-semibold text-sm mb-4"
        style="background: #f9a71e; color: #1a1c3d;"
      >
        Coming Soon
      </span>

      <!-- Title -->
      <h2 class="font-satoshi font-bold text-3xl md:text-4xl lg:text-[48px] text-white text-center mb-[48px]">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <!-- Letter "A" watermark - decorative -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span class="text-[40rem] font-black text-white/5 select-none leading-none">A</span>
      </div>

      <!-- 2x2 Feature Cards Grid -->
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-white/5 backdrop-blur-sm border border-white/5 rounded-[12px] p-6 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors"
        >
          <!-- Icon -->
          <div class="w-[36px] h-[36px] rounded-[8px] bg-white/10 flex items-center justify-center mb-1">
            <img :src="feature.image" class="w-6 h-6 object-contain object-center" :alt="feature.title" />
          </div>
          <h3 class="font-semibold text-[18px] text-white">{{ feature.title }}</h3>
          <p class="text-[16px] leading-relaxed text-white/75">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Enterprise Only Label -->
      <p class="mt-12 font-bold text-[18px]" style="color: #f9a71e;">Enterprise Only</p>

      <!-- Email Signup Banner -->
      <div
        class="mt-6 w-full rounded-[8px] border border-white/10 bg-white/5 backdrop-blur-md px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
      >
        <p class="text-white font-medium text-[16px] md:text-[18px] text-center sm:text-left">
          <span style="color: #f9a71e;" class="font-semibold">Be The First</span> To Try Out Our New AI Features.
        </p>
        <div class="flex items-center border border-white/40 rounded-[6px] p-1 w-full sm:w-auto bg-transparent">
          <input
            type="email"
            placeholder="Enter email address"
            class="px-4 py-1.5 text-[14px] bg-transparent text-white placeholder-white/40 outline-none w-full sm:w-[280px]"
          />
          <button
            class="inline-flex items-center justify-center font-semibold text-[14px] px-6 py-2 rounded-[4px] whitespace-nowrap transition-colors hover:brightness-110"
            style="background: #f9a71e; color: #1a1c3d;"
          >
            Join AI Early Access
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import frame1 from '~/components/logoforty/Frame 1.png'
import frame2 from '~/components/logoforty/Frame 2.png'
import frame3 from '~/components/logoforty/Frame 3.png'
import frame4 from '~/components/logoforty/Frame 4.png'

const features = [
  {
    image: frame1,
    title: 'AutoFlag AI (LLM-Assisted Flag Creation)',
    description: 'Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.',
  },
  {
    image: frame2,
    title: 'SmartRamp AI (AI-Driven Rollout Optimization)',
    description: 'Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.',
  },
  {
    image: frame3,
    title: 'ExplainFlags AI (LLM Root-Cause + Insights)',
    description: 'Understand issues instantly with AI-generated, plain-language insights tied to your flags.',
  },
  {
    image: frame4,
    title: 'AutoSegment AI (Behavioral Segmentation)',
    description: 'Target the right users automatically. AI builds segments from live behavior—no manual rules.',
  },
]
</script>
