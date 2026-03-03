<template>
  <div>
    <TheNavbar />
    <main>
      <div class="relative">
        <HeroSection />
        
      </div>
      <--TrustedBy />
      <--WhatIsSection />
      <--OpenFeatureSection />
      <--ControlSection />
      <--ComparisonTable />
      <--DartCodeAISection />
      <--PricingSection />
      <--WhyTeamsSection />
      <--CTABannerAndFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'IntelliToggle — The First Feature Flag With DartCodeAI',
  meta: [
    {
      name: 'description',
      content: 'Feature flags built for Dart, enhanced by AI. The first native Dart feature flag platform with DartCodeAI. Starting at just $1/month.',
    },
    {
      property: 'og:title',
      content: 'IntelliToggle — The First Feature Flag With DartCodeAI',
    },
    {
      property: 'og:description',
      content: 'Feature flags built for Dart, enhanced by AI. Native SDK, OpenFeature compliant, AI-powered rollouts.',
    },
  ],
})
</script>
