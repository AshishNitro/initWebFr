<template>
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto flex flex-col items-center">
      <!-- Section Heading -->
      <h2 class="font-satoshi font-bold text-3xl lg:text-[48px] text-center mb-[64px] text-[#2a266a] w-full">
        Dart-Powered Feature Flag
      </h2>

      <!-- Sub-heading -->
      <h3 class="font-bold text-2xl md:text-[32px] text-center mb-[12px] text-[#2a266a]">
        Not Another Generic Feature Flag Tool
      </h3>
      <p class="text-[16px] md:text-[18px] text-center max-w-[800px] mb-[48px] leading-[1.6]" style="color: #5f5f60;">
        Most tools are built for every language, which means extra layers and slower toggles.
        IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
      </p>

      <!-- Comparison Table -->
      <div class="w-full max-w-[1200px] overflow-hidden rounded-[8px] shadow-sm border border-[#d7d5ea]">
        <table class="w-full border-collapse text-[16px]">
          <!-- Header -->
          <thead>
            <tr style="background: linear-gradient(180deg, #42389e 0%, #0f1026 100%);">
              <th class="text-left pl-6 pr-5 py-[18px] font-semibold text-white w-[40%]">Features</th>
              <th class="text-center px-5 py-[18px] font-semibold text-white w-[30%]">IntelliToggle</th>
              <th class="text-center px-5 py-[18px] font-semibold text-white w-[30%]">Other Feature Flag</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              v-for="(row, i) in rows"
              :key="row.feature"
              class="table-row"
            >
              <td class="pl-6 pr-5 py-[14px] font-semibold text-[14px]" style="color: #3d3a6b;">{{ row.feature }}</td>
              <td class="px-5 py-[14px] text-center text-[16px]">
                <span v-if="row.intelliToggle" class="check-mark">✓</span>
                <span v-else class="cross-mark">✕</span>
              </td>
              <td class="px-5 py-[14px] text-center text-[16px]">
                <span v-if="row.others" class="check-mark">✓</span>
                <span v-else class="cross-mark">✕</span>
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

.table-row {
  border-bottom: 1px solid #e8e6f4;
}

.table-row:last-child {
  border-bottom: none;
}

.check-mark {
  color: #2a266a;
  font-weight: 700;
  font-size: 16px;
}

.cross-mark {
  color: #b0aece;
  font-weight: 500;
  font-size: 16px;
}
</style>
