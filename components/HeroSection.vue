<template>
  <!-- Hero wrapper — the angled background is pure CSS, no SVG -->
  <div class="hero-wrapper relative w-full overflow-hidden">

    <!-- Layer 1: #EDECF6 diagonal slab (bottom shape) -->
    <div class="hero-slab-light" />

    <!-- Layer 2: Main gradient block (clipped diagonally at the bottom) -->
    <div class="hero-gradient-block" />

    <!-- Content sits above both layers -->
    <div class="relative z-10 max-w-[1680px] mx-auto px-6 lg:px-[48px] pt-32 lg:pt-40 pb-0 flex flex-col items-center text-center">

      <!-- Headline -->
      <div class="relative max-w-[900px]">
        <h1 class="font-satoshi font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight text-white mb-3">
          The First
          <span class="relative inline-block mx-2">
            <!-- Orange badge behind the text -->
            <span
              class="absolute inset-0 -mx-2 -my-0.5 rounded-[8px]"
              style="background: #f9a71e; z-index: -1;"
            />
            <span class="relative font-bold px-2 py-0.5" style="color: #1a1245;">Dart-Native</span>
          </span>
          Feature Flag
          <br />
          With DartCodeAI
        </h1>
      </div>

      <!-- Subtitle -->
      <div class="mt-3 space-y-1 max-w-[700px]">
        <p class="font-semibold text-base md:text-lg lg:text-[20px] text-[#fefeff] leading-normal">
          Feature flags built for Dart, Ship faster, roll back<br />
          safely, and scale with AI-powered delivery
        </p>
        <p class="font-semibold text-base md:text-lg lg:text-[20px] leading-normal text-accent">
          Starting at just $1/month
        </p>
      </div>

      <!-- CTA Group -->
      <div class="mt-6 flex flex-col items-center gap-[4px]">
        <p class="text-[14px] font-medium text-text-light">Valid till 15th September,2025</p>
        <div class="flex flex-col sm:flex-row items-center gap-[20px]">
          <a
            href="#"
            class="inline-flex items-center justify-center font-semibold text-[16px] px-[32px] py-[11px] rounded-[8px] w-[200px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] hover:bg-yellow-400 transition-colors bg-accent"
            style="color: #1a1245;"
          >
            Get Access
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center border border-accent font-semibold text-[16px] px-[32px] py-[11px] rounded-[8px] w-[220px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] hover:bg-white/10 transition-colors text-accent"
          >
            Join AI Early Access
          </a>
        </div>
      </div>

      <!-- Dashboard Preview -->
      <div class="mt-16 w-full max-w-[1394px] relative">
        <div class="dashboard-card relative">
          <img
            src="/pngs/outer.png"
            alt="IntelliToggle App Preview"
            class="dashboard-preview-img"
          />
          <!-- Overlay inner app screenshot -->
          <img
            src="/pngs/app.intellitoggle.com 1.png"
            alt="IntelliToggle App Screenshot"
            class="dashboard-overlay-img"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ── Hero wrapper ── */
.hero-wrapper {
  min-height: 600px;
}

/* ── Layer 1: Light #EDECF6 diagonal slab ── */
.hero-slab-light {
  position: absolute;
  inset: 0;
  background-color: #edecf6;
  clip-path: polygon(0 0, 100% 0, 100% 37%, 0 70%);
  z-index: 1;
}

/* ── Layer 2: Main gradient block, clipped diagonally ── */
.hero-gradient-block {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #42389e 0%, #0f1026 100%);
  clip-path: polygon(0 0, 100% 0, 100% 32%, 0 65%);
  z-index: 2;
}

/* ── Dashboard preview card ── */
.dashboard-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.25);
}

.dashboard-preview-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

/* ── Overlay inner screenshot on top of dashboard ── */
.dashboard-overlay-img {
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  width: 95%;
  height: 95%;
  object-fit: contain;
  border-radius: 10px;
  z-index: 2;
}
</style>

<script setup>
</script>
