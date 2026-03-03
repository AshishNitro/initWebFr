<template>
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto flex flex-col items-center">
      <!-- Title -->
      <h2 class="font-satoshi font-bold text-3xl lg:text-[48px] text-center mb-[48px] text-[#0E121B]">
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
          <div
            class="w-[100px] h-[90px] rounded-2xl flex items-center justify-center shadow-sm mb-[32px] transition-transform duration-300 hover:scale-105"
            style="background: #edecf6;"
          >
            <component :is="item.icon" class="w-[44px] h-[44px]" style="color: #42389e;" />
          </div>
          <h3 class="font-bold text-[24px] mb-[12px]" style="color: #0e121b;">{{ item.title }}</h3>
          <p class="text-[18px] md:text-[20px] leading-[1.6]" style="color: #5f5f60;">{{ item.description }}</p>
        </div>
      </div>

      <!-- Case Note Banner -->
      <div
        class="w-full max-w-[1100px] mx-auto rounded-[16px] border border-[#d2d0e5] shadow-md px-8 py-[24px] flex flex-col md:flex-row items-center justify-between gap-6"
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
import { defineComponent, h } from 'vue'

const SlidersIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('line', { x1: '4', y1: '21', x2: '4', y2: '14' }),
      h('line', { x1: '4', y1: '10', x2: '4', y2: '3' }),
      h('line', { x1: '12', y1: '21', x2: '12', y2: '12' }),
      h('line', { x1: '12', y1: '8', x2: '12', y2: '3' }),
      h('line', { x1: '20', y1: '21', x2: '20', y2: '16' }),
      h('line', { x1: '20', y1: '12', x2: '20', y2: '3' }),
      h('line', { x1: '1', y1: '14', x2: '7', y2: '14' }),
      h('line', { x1: '9', y1: '8', x2: '15', y2: '8' }),
      h('line', { x1: '17', y1: '16', x2: '23', y2: '16' }),
    ])
  }
})

const DeployIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' }),
      h('path', { d: 'M12 8v4l3 3' }),
    ])
  }
})

const AIIcon = defineComponent({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('rect', { x: '3', y: '11', width: '18', height: '10', rx: '2' }),
      h('circle', { cx: '12', cy: '5', r: '2' }),
      h('path', { d: 'M12 7v4' }),
      h('line', { x1: '8', y1: '16', x2: '8', y2: '16' }),
      h('line', { x1: '16', y1: '16', x2: '16', y2: '16' }),
    ])
  }
})

const items = [
  {
    icon: SlidersIcon,
    title: 'Safer, faster rollouts',
    description: 'Control feature releases in minutes, not weeks without risking production stability.',
  },
  {
    icon: DeployIcon,
    title: 'Confidence to ship',
    description: '"Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes."',
  },
  {
    icon: AIIcon,
    title: 'Future-ready with AI delivery',
    description: 'Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.',
  },
]
</script>
