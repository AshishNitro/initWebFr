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
          class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[12px] p-6 flex flex-col gap-2 hover:bg-white/15 transition-colors"
        >
          <!-- Icon -->
          <div class="w-[36px] h-[36px] rounded-[8px] bg-white/10 flex items-center justify-center mb-1">
            <component :is="feature.icon" class="w-5 h-5 text-white" />
          </div>
          <h3 class="font-semibold text-[18px] text-white">{{ feature.title }}</h3>
          <p class="text-[16px] leading-relaxed text-white/75">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Enterprise Only Label -->
      <p class="mt-12 font-bold text-[18px]" style="color: #f9a71e;">Enterprise Only</p>

      <!-- Email Signup Banner -->
      <div
        class="mt-6 w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
      >
        <p class="text-white font-semibold text-base md:text-base text-center sm:text-left">
          <span style="color: #f9a71e;">Be The First</span> To Try Out Our New AI Features.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter email address"
            class="rounded-lg px-4 py-2.5 text-sm bg-white/90 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-accent w-full sm:w-56"
          />
          <button
            class="inline-flex items-center justify-center bg-accent font-semibold text-sm px-5 py-2.5 rounded-lg text-gradient hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            Join AI Early Access
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Simple inline SVG icons as render functions
const FlagIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' }),
      h('line', { x1: '4', y1: '22', x2: '4', y2: '15' }),
    ])
  }
})
const RocketIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('path', { d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' }),
      h('path', { d: 'M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' }),
    ])
  }
})
const SearchIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('circle', { cx: '11', cy: '11', r: '8' }),
      h('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' }),
    ])
  }
})
const TargetIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
      h('circle', { cx: '12', cy: '12', r: '10' }),
      h('circle', { cx: '12', cy: '12', r: '6' }),
      h('circle', { cx: '12', cy: '12', r: '2' }),
    ])
  }
})

const features = [
  {
    icon: FlagIcon,
    title: 'AutoFlag AI (LLM-Assisted Flag Creation)',
    description: 'Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.',
  },
  {
    icon: RocketIcon,
    title: 'SmartRamp AI (AI-Driven Rollout Optimization)',
    description: 'Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.',
  },
  {
    icon: SearchIcon,
    title: 'ExplainFlags AI (LLM Root-Cause + Insights)',
    description: 'Understand issues instantly with AI-generated, plain-language insights tied to your flags.',
  },
  {
    icon: TargetIcon,
    title: 'AutoSegment AI (Behavioral Segmentation)',
    description: 'Target the right users automatically. AI builds segments from live behavior—no manual rules.',
  },
]
</script>
