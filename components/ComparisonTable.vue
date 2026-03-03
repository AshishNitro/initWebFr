<template>
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto flex flex-col items-center">
      <!-- Section Heading -->
      <h2 class="font-satoshi font-bold text-3xl lg:text-[48px] text-center mb-[24px] text-[#0E121B] w-full">
        Dart-Powered Feature Flag
      </h2>

      <!-- Sub-heading -->
      <h3 class="font-bold text-2xl md:text-[36px] text-center mb-[16px]" style="color: #0E121B;">
        Not Another Generic Feature Flag Tool
      </h3>
      <p class="text-[18px] md:text-[20px] text-center max-w-[800px] mb-[48px] leading-[1.6]" style="color: #5f5f60;">
        Most tools are built for every language, which means extra layers and slower toggles.
        IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
      </p>

      <!-- Comparison Table -->
      <div class="w-full max-w-[1200px] overflow-x-auto rounded-[8px] shadow-sm border border-[#d7d5ea]">
        <table class="w-full border-collapse text-[16px]">
          <!-- Header -->
          <thead>
            <tr style="background: linear-gradient(180deg, #42389e 0%, #0f1026 100%);">
              <th class="text-left px-5 py-3 font-semibold text-white w-[26%]">Features</th>
              <th class="text-center px-5 py-3 font-semibold text-white w-[37%]">IntelliToggle</th>
              <th class="text-center px-5 py-3 font-semibold text-white w-[37%]">Other Feature Flag</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, i) in rows"
              :key="row.feature"
              :class="i % 2 === 0 ? 'bg-white' : 'bg-[#f5f4fb]'"
            >
              <td class="px-5 py-4 font-semibold text-[16px]" style="color: #0E121B;">{{ row.feature }}</td>
              <td class="px-5 py-4 text-center">
                <div class="flex items-center justify-center">
                  <svg v-if="row.intelliToggle" class="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  <svg v-else class="w-6 h-6 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
              </td>
              <td class="px-5 py-4 text-center">
                <div class="flex items-center justify-center">
                  <svg v-if="row.others" class="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  <svg v-else class="w-6 h-6 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const rows = [
  { feature: 'Dart-native SDK & server', intelliToggle: true, others: false },
  { feature: 'End-to-end type safety', intelliToggle: true, others: false },
  { feature: 'AI-assisted roll-outs & cleanup', intelliToggle: true, others: false },
  { feature: 'A/B testing built-in', intelliToggle: true, others: false },
  { feature: 'Dart-Powered SDKs', intelliToggle: true, others: false },
]
</script>

<style scoped>
table {
  border-spacing: 0;
}
</style>
