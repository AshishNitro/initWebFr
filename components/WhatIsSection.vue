<template>
  <!-- Combined TrustedBy + WhatIs — one unified white section/card -->
  <section id="about" class="w-full bg-white">

    <!-- ── Trusted By strip ── -->
    <div class="w-full py-[80px] px-6 lg:px-[120px] border-b border-gray-100">
      <div class="max-w-[1680px] mx-auto flex flex-col items-center gap-[40px]">
        <h2 class="font-semibold text-[24px] leading-normal text-[#1a1c3d] text-center">
          Trusted by various engineering teams
        </h2>
        <div class="flex flex-wrap items-center justify-center gap-[60px] md:gap-[100px]">
          <img
            src="~/assets/images/logo-google-cloud.svg"
            alt="Google Cloud"
            class="h-[40px] md:h-[60px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-aws.svg"
            alt="AWS"
            class="h-[40px] md:h-[60px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-azure.svg"
            alt="Microsoft Azure"
            class="h-[40px] md:h-[60px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-digitalocean.svg"
            alt="DigitalOcean"
            class="h-[40px] md:h-[60px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-ibm.svg"
            alt="IBM"
            class="h-[40px] md:h-[60px] object-contain transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>

    <!-- ── What Is IntelliToggle ── -->
    <div class="w-full py-[120px] px-6 lg:px-[120px]">
      <div class="max-w-[1680px] mx-auto flex flex-col gap-[48px] items-center">

        <!-- Gradient title -->
        <div class="w-full px-0 lg:px-[100px]">
          <h2
            class="font-satoshi font-bold text-[40px] leading-normal text-center w-full"
            style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
          >
            What Is IntelliToggle
          </h2>
        </div>

        <!-- Two-column layout -->
        <div class="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

          <!-- Left: Text -->
          <div class="flex flex-col gap-[16px] items-start w-full lg:w-[623px] shrink-0">
            <h3 class="font-semibold text-[32px] leading-normal text-[#0E121B]">
              Your AI Dart App's Control Panel For Feature Releases
            </h3>
            <div class="flex flex-col gap-[8px] items-start w-full">
              <p class="font-normal text-[18px] leading-relaxed text-[#5f5f60]">
                IntelliToggle is a &ldquo;Dart-Powered&rdquo; feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
              </p>
              <div class="flex flex-col gap-[8px] items-start w-full mt-2">
                <p class="font-semibold text-[24px] leading-normal text-[#0E121B]">Benefits</p>
                <ul class="list-disc text-[18px] leading-relaxed text-[#5f5f60] pl-[27px] flex flex-col gap-1">
                  <li>Toggle new features without app updates</li>
                  <li>Roll out to specific users or regions</li>
                  <li>Instantly rollback when needed</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right: Dashboard card (purple gradient container from Figma) -->
          <div
            class="w-full lg:w-[830px] rounded-[12px] overflow-hidden flex flex-col items-center justify-center px-[51px] py-[46px] shrink-0 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.05)] min-h-[400px] lg:min-h-[618px]"
            style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%);"
          >
            <div class="bg-[#f8f8f8] w-full h-full rounded-[4px] overflow-hidden">
              <img
                src="http://localhost:3845/assets/5f8aff7823d3f22fcf04158c440411409a3d71e6.png"
                alt="IntelliToggle Dashboard Preview"
                class="w-full h-auto object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
</script>
