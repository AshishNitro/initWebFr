<template>
  <!-- Combined TrustedBy + WhatIs — one unified white section/card -->
  <section id="about" class="w-full bg-white">

    <!-- ── Trusted By strip ── -->
    <div class="w-full py-[80px] px-6 lg:px-[120px] border-b border-gray-100">
      <div class="max-w-[1680px] mx-auto flex flex-col items-center gap-[40px]">
        <h2 class="font-semibold text-[24px] leading-normal text-[#1a1c3d] text-center">
          Trusted by various engineering teams
        </h2>
        <div class="flex flex-wrap items-center justify-center gap-[40px] md:gap-[80px]">
          <img
            src="~/assets/images/logo-google-cloud.svg"
            alt="Google Cloud"
            class="h-[28px] md:h-[36px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-aws.svg"
            alt="Amazon Web Services"
            class="h-[28px] md:h-[36px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-azure.svg"
            alt="Microsoft Azure"
            class="h-[28px] md:h-[36px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-digitalocean2.svg"
            alt="DigitalOcean"
            class="h-[28px] md:h-[36px] object-contain transition-all duration-300 hover:scale-105"
          />
          <img
            src="~/assets/images/logo-ibm.svg"
            alt="IBM"
            class="h-[28px] md:h-[36px] object-contain transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>

    <!-- ── What Is IntelliToggle ── -->
    <div class="w-full py-[120px] px-6 lg:px-[120px]">
      <div class="max-w-[1680px] mx-auto flex flex-col gap-[80px] items-center">

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
        <div class="w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[48px] lg:gap-[80px]">

          <!-- Left: Text -->
          <div class="flex flex-col gap-[16px] items-start w-full lg:w-[460px] shrink-0">
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
            class="dashboard-preview-wrapper"
            style="background: linear-gradient(180deg, #42389E 0%, #0F1026 100%);"
          >
            <!-- Live Dashboard Preview -->
            <div class="dashboard-card">

              <!-- ═══ Top Navbar ═══ -->
              <div class="dash-topnav">
                <div class="dash-topnav-left">
                  <div class="dash-logo">
                    <svg width="18" height="18" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 4.5V48.3092M32.5 55.3V31.5312V13.8211H4.5H59" stroke="white" stroke-width="9" stroke-linecap="round"/>
                    </svg>
                    <span class="dash-logo-text">IntelliToggle</span>
                  </div>
                  <div class="dash-search">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;">
                      <circle cx="7" cy="7" r="5" stroke="#94a3b8" stroke-width="1.5"/>
                      <line x1="11" y1="11" x2="14" y2="14" stroke="#94a3b8" stroke-width="1.5"/>
                    </svg>
                    <span class="dash-search-text">Search...</span>
                  </div>
                </div>
                <div class="dash-topnav-right">
                  <div class="dash-upgrade-btn">
                    <svg width="10" height="10" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.02222 4.04438L3.03333 10.111H9.1L10.1111 4.04438M2.02222 4.04438L2.88987 4.7385C3.45404 5.18982 3.73612 5.4155 4.02046 5.45053C4.26956 5.48122 4.52117 5.41813 4.72636 5.27359C4.96056 5.10862 5.10287 4.77658 5.38745 4.11251L6.06666 2.52771M2.02222 4.04438C2.30143 4.04438 2.52777 3.81803 2.52777 3.53882C2.52777 3.25962 2.30143 3.03327 2.02222 3.03327C1.74301 3.03327 1.51666 3.25962 1.51666 3.53882C1.51666 3.81803 1.74301 4.04438 2.02222 4.04438ZM10.1111 4.04438L9.24347 4.73851C8.67927 5.18982 8.39722 5.4155 8.11285 5.45053C7.86376 5.48122 7.61215 5.41813 7.40694 5.27359C7.17277 5.10862 7.03045 4.77658 6.74588 4.11251L6.06666 2.52771M10.1111 4.04438C10.3903 4.04438 10.6167 3.81803 10.6167 3.53882C10.6167 3.25962 10.3903 3.03327 10.1111 3.03327C9.83189 3.03327 9.60555 3.25962 9.60555 3.53882C9.60555 3.81803 9.83189 4.04438 10.1111 4.04438ZM6.06666 2.52771C6.34588 2.52771 6.57222 2.30137 6.57222 2.02216C6.57222 1.74295 6.34588 1.5166 6.06666 1.5166C5.78744 1.5166 5.56111 1.74295 5.56111 2.02216C5.56111 2.30137 5.78744 2.52771 6.06666 2.52771ZM6.06666 2.02216H6.07172M10.1111 3.53882H10.1162M2.02222 3.53882H2.02727" stroke="#525866" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Upgrade Now
                  </div>
                  <div class="dash-notif">
                    <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="20.2222" height="20.2222" rx="10.1111" fill="white" fill-opacity="0.15"/>
                      <path d="M5.32346 11.5114C5.21595 12.2162 5.6966 12.7053 6.28509 12.9491C8.54127 13.8838 11.681 13.8838 13.9371 12.9491C14.5256 12.7053 15.0063 12.2162 14.8988 11.5114C14.8327 11.0783 14.506 10.7176 14.2639 10.3655C13.9469 9.89853 13.9154 9.38919 13.9154 8.84733C13.9154 6.75325 12.2122 5.05566 10.1111 5.05566C8.01009 5.05566 6.30687 6.75325 6.30687 8.84733C6.30682 9.38919 6.27532 9.89853 5.95828 10.3655C5.71624 10.7176 5.38953 11.0783 5.32346 11.5114Z" stroke="white" stroke-width="0.758333" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.0889 13.6499C8.32069 14.5221 9.13818 15.1666 10.1111 15.1666C11.0841 15.1666 11.9015 14.5221 12.1333 13.6499" stroke="white" stroke-width="0.758333" stroke-linecap="round" stroke-linejoin="round"/>
                      <g filter="url(#filter0_d_8252_1941)">
                        <circle cx="13.6806" cy="4.80289" r="1.76944" fill="#FC5050"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_8252_1941" x="10.9" y="2.52789" width="5.56112" height="5.56104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="0.505556"/>
                          <feGaussianBlur stdDeviation="0.505556"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0784314 0 0 0 0.03 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8252_1941"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8252_1941" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div class="dash-avatar-nav">
                    <img src="~/assets/images/avtartlogo.svg" alt="Avatar" class="w-full h-full rounded-full object-cover" />
                  </div>
                  <div class="dash-user-info">
                    <span style="font-size:5.5px;color:white;font-weight:600;">Sophia Williams</span>
                    <span style="font-size:4px;color:#a5b4fc;">sophia@devco.com</span>
                  </div>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.05556 5.49992L6.93243 3.62305L7.46857 4.15919L5.05556 6.57221L2.64254 4.15919L3.17868 3.62305L5.05556 5.49992Z" fill="white"/>
                  </svg>
                </div>
              </div>

              <!-- ═══ Body ═══ -->
              <div class="dash-body">

                <!-- ── Sidebar ── -->
                <aside class="dash-sidebar">
                  <div class="dash-project-selector">
                    <span style="font-size:5px;color:#7c3aed;">P</span>
                    <span style="font-size:5.5px;color:#1e1b4b;font-weight:600;flex:1;">Project1</span>
                    <svg width="6" height="6" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="#64748b" stroke-width="1"/></svg>
                  </div>

                  <div class="dash-menu-label">MAIN MENU</div>

                  <div class="dash-menu-item">
                    <img src="~/assets/images/dashboard-browsing.svg" width="8" height="8" style="flex-shrink: 0;" />
                    <span>Dashboard</span>
                  </div>

                  <div class="dash-menu-item dash-menu-active">
                    <img src="~/assets/images/flag-02.svg" width="8" height="8" style="flex-shrink: 0; filter: brightness(0);" />
                    <span>Feature Flags</span>
                  </div>

                  <div class="dash-menu-item">
                    <img src="~/assets/images/setting-done-04.svg" width="8" height="8" style="flex-shrink: 0;" />
                    <span>Experiments</span>
                  </div>

                  <div class="dash-menu-item">
                    <img src="~/assets/images/analytics-01.svg" width="8" height="8" style="flex-shrink: 0;" />
                    <span>Analytics</span>
                  </div>

                  <div class="dash-menu-item">
                    <img src="~/assets/images/clock-03.svg" width="8" height="8" style="flex-shrink: 0;" />
                    <span>Audit logs</span>
                  </div>

                  <div class="dash-menu-label" style="margin-top:8px;">PREFERENCES</div>

                  <div class="dash-menu-item">
                    <img src="~/assets/images/setting-07.svg" width="8" height="8" style="flex-shrink: 0;" />
                    <span>Settings</span>
                  </div>

                  <div class="dash-menu-item">
                    <img src="~/assets/images/help-square.svg" width="8" height="8" style="flex-shrink: 0;" />
                    <span>Support / Docs</span>
                  </div>
                </aside>

                <!-- ── Main Content ── -->
                <div class="dash-main">
                  <div class="dash-content-area">
                    <!-- Page header -->
                    <div class="dash-page-header">
                      <div style="display:flex;align-items:center;gap:3px;">
                        <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1" stroke="#1e1b4b" stroke-width="1.5" fill="none"/></svg>
                        <span style="font-size:7px;font-weight:700;color:#1e1b4b;">mobile-menu-toggle details</span>
                      </div>
                      <div style="font-size:4.5px;color:#94a3b8;margin-top:2px;">
                        <span style="color:#7c3aed;">⚑ Flag List</span>
                        <span style="margin:0 2px;">/</span>
                        <span>⚑ mobile-menu-toggle</span>
                      </div>
                    </div>

                    <!-- Flag name + toggle -->
                    <div class="dash-flag-header">
                      <span style="font-size:8px;font-weight:700;color:#1e1b4b;">Mobile-Menu-Toggle</span>
                      <div style="display:flex;align-items:center;gap:4px;">
                        <div class="dash-toggle-on">
                          <div class="dash-toggle-dot"></div>
                        </div>
                        <span style="font-size:4.5px;color:#1e1b4b;">On</span>
                        <div class="dash-rollback-btn">Roll Back ↩</div>
                      </div>
                    </div>

                    <!-- Tabs -->
                    <div class="dash-tabs">
                      <div class="dash-tab dash-tab-active">Details</div>
                      <div class="dash-tab">Targeting Rules</div>
                      <div class="dash-tab">Percentage Rollouts</div>
                    </div>

                    <!-- SDK Usage Chart -->
                    <div class="dash-chart-section">
                      <div class="dash-chart-header">
                        <div style="display:flex;align-items:center;gap:3px;">
                          <span style="font-size:5px;">📊</span>
                          <span style="font-size:5.5px;font-weight:600;color:#1e1b4b;">SDK Usage count</span>
                        </div>
                        <div class="dash-dropdown-small">Last Year ▾</div>
                      </div>
                      <!-- Y axis + bars -->
                      <div class="dash-chart-area">
                        <div class="dash-chart-y-axis">
                          <span>20k</span><span>15k</span><span>10k</span><span>5k</span><span>0</span>
                        </div>
                        <div class="dash-chart-bars">
                          <div v-for="(bar, i) in chartData" :key="i" class="dash-bar-col">
                            <div class="dash-bar" :style="{ height: bar.h + '%', background: bar.color }"></div>
                            <span class="dash-bar-label">{{ bar.label }}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Kill Flag -->
                    <div class="dash-action-row">
                      <div>
                        <div style="font-size:5.5px;font-weight:700;color:#1e1b4b;">Kill</div>
                        <div style="font-size:4px;color:#64748b;margin-top:1px;">Permanently disable this flag and revert to the default navigation across all platforms.</div>
                      </div>
                      <div class="dash-btn-danger">Kill Flag</div>
                    </div>

                    <!-- Clone -->
                    <div class="dash-action-row">
                      <div>
                        <div style="font-size:5.5px;font-weight:700;color:#1e1b4b;">Clone this flag</div>
                        <div style="font-size:4px;color:#64748b;margin-top:1px;max-width:180px;">Cloning the flag will copy its targeting configuration and on/off state for all environments. Experiment information such as iterations and metrics will not be copied over.</div>
                      </div>
                      <div class="dash-btn-outline">Clone this flag</div>
                    </div>

                    <!-- Archive -->
                    <div class="dash-action-row" style="border-bottom:none;">
                      <div>
                        <div style="font-size:5.5px;font-weight:700;color:#1e1b4b;">Archive flag</div>
                        <div style="font-size:4px;color:#64748b;margin-top:1px;">This flag will be archived across all environments and will only appear in your list when filtered for.</div>
                      </div>
                      <div class="dash-btn-outline" style="color:#7c3aed;border-color:#7c3aed;">Archive</div>
                    </div>
                  </div>

                  <!-- ── Right Info Panel ── -->
                  <div class="dash-right-panel">
                    <div class="dash-info-row" style="display:flex;align-items:center;justify-content:space-between;">
                      <span class="dash-info-label" style="margin-bottom:0;">Key</span>
                      <span class="dash-info-value"><span style="color:#000;">⚑</span> mobile-menu-toggle</span>
                    </div>

                    <div class="dash-info-row">
                      <span class="dash-info-label">Description</span>
                      <span class="dash-info-value">Toggles the responsive hamburger menu on mobile viewports for smoother navigation.</span>
                    </div>

                    <div class="dash-info-row">
                      <span class="dash-info-label">Code references</span>
                      <div style="display:flex;align-items:center;gap:2px;margin-top:1px;">
                        <div style="width:6px;height:6px;border-radius:50%;background:#1e1b4b;display:flex;align-items:center;justify-content:center;">
                          <span style="font-size:3px;color:white;">⊕</span>
                        </div>
                        <span style="font-size:4.5px;font-weight:600;color:#1e1b4b;">Sample-app</span>
                      </div>
                    </div>

                    <div class="dash-info-row">
                      <span class="dash-info-label">Variations</span>
                      <div style="display:flex;flex-direction:column;gap:2px;margin-top:1px;">
                        <div style="display:flex;align-items:center;gap:3px;">
                          <div style="width:6px;height:6px;border-radius:1px;background:#3b82f6;"></div>
                          <span style="font-size:4.5px;color:#1e1b4b;">On</span>
                        </div>
                        <div style="display:flex;align-items:center;gap:3px;">
                          <div style="width:6px;height:6px;border-radius:1px;background:#a855f7;"></div>
                          <span style="font-size:4.5px;color:#1e1b4b;">Off</span>
                        </div>
                      </div>
                    </div>

                    <div class="dash-info-row">
                      <div style="display:flex;align-items:center;justify-content:space-between;">
                        <span class="dash-info-label" style="margin-bottom:0;">Scheduling</span>
                        <div style="display:flex;align-items:center;gap:2px;">
                          <div class="dash-toggle-on" style="width:14px;height:8px;">
                            <div class="dash-toggle-dot" style="width:5px;height:5px;"></div>
                          </div>
                          <span style="font-size:4px;color:#1e1b4b;">On</span>
                        </div>
                      </div>
                      <div style="margin-top:3px;">
                        <div style="font-size:4px;color:#64748b;">Date ⓘ</div>
                        <div class="dash-input-field">
                          <span>📅</span>
                          <span>12/02/205</span>
                          <span style="margin-left:auto;">▾</span>
                        </div>
                      </div>
                      <div style="margin-top:3px;">
                        <div style="font-size:4px;color:#64748b;">Time ⓘ</div>
                        <div class="dash-input-field">
                          <span>🕐</span>
                          <span>12:20 PM</span>
                          <span style="margin-left:auto;">▾</span>
                        </div>
                      </div>
                    </div>

                    <!-- Audit Log -->
                    <div class="dash-info-row" style="border-bottom:none;">
                      <span class="dash-info-label">Audit Log</span>
                      <div v-for="n in 3" :key="n" class="dash-audit-entry">
                        <div class="dash-audit-avatar">
                          <img src="~/assets/images/Ellipse 4.png" alt="Avatar" class="w-full h-full rounded-full object-cover" />
                        </div>
                        <div style="flex:1;">
                          <div style="font-size:4.5px;font-weight:600;color:#1e1b4b;">James Brown</div>
                          <div style="font-size:3.5px;color:#94a3b8;">james@algnu.com</div>
                        </div>
                        <div style="text-align:right;">
                          <div style="font-size:4px;color:#1e1b4b;">Apr 29, 2025</div>
                          <div style="font-size:3.5px;color:#94a3b8;">15:04</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const chartData = [
  { label: 'Jan', h: 25, color: '#818cf8' },
  { label: 'Feb', h: 40, color: '#818cf8' },
  { label: 'Mar', h: 35, color: '#818cf8' },
  { label: 'Apr', h: 55, color: '#6366f1' },
  { label: 'May', h: 50, color: '#6366f1' },
  { label: 'Jun', h: 65, color: '#6366f1' },
  { label: 'Jul', h: 30, color: '#818cf8' },
  { label: 'Aug', h: 70, color: '#4f46e5' },
  { label: 'Sep', h: 85, color: '#4f46e5' },
  { label: 'Oct', h: 45, color: '#818cf8' },
  { label: 'Nov', h: 60, color: '#6366f1' },
  { label: 'Dec', h: 90, color: '#4f46e5' },
]
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   Dashboard Preview – pixel-accurate replica
   ═══════════════════════════════════════════════ */

.dashboard-preview-wrapper {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
  flex-shrink: 1;
  box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.05);
  min-height: 400px;
}
@media (min-width: 1024px) {
  .dashboard-preview-wrapper {
    max-width: 950px;
    flex: 1;
    padding: 24px;
  }
}

.dashboard-card {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  font-family: 'Inter', sans-serif;
  zoom: 1.6;
}

/* ── Top Navbar ── */
.dash-topnav {
  height: 28px;
  background: #1e1b4b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  flex-shrink: 0;
}
.dash-topnav-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dash-topnav-right {
  display: flex;
  align-items: center;
  gap: 6px;
}
.dash-logo {
  display: flex;
  align-items: center;
  gap: 1px;
}
.dash-logo-text {
  font-size: 6px;
  font-weight: 700;
  color: white;
}
.dash-search {
  display: flex;
  align-items: center;
  gap: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  padding: 2px 8px;
  min-width: 100px;
  height: 16px;
}
.dash-search-text {
  font-size: 4.5px;
  color: #94a3b8;
}
.dash-upgrade-btn {
  font-size: 4.5px;
  font-weight: 600;
  color: #1e1b4b;
  background: #EDECF6;
  padding: 2px 6px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 2px;
}
.dash-notif {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
}
.dash-avatar-nav {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dash-user-info {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

/* ── Body ── */
.dash-body {
  display: flex;
  flex: 1;
  min-height: 0;
}

/* ── Sidebar ── */
.dash-sidebar {
  width: 70px;
  background: #fafafa;
  border-right: 1px solid #e5e7eb;
  padding: 6px 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex-shrink: 0;
}
.dash-project-selector {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px 4px;
  margin-bottom: 4px;
}
.dash-menu-label {
  font-size: 3.5px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  padding: 2px 4px;
  margin-top: 2px;
}
.dash-menu-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 4px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 5px;
  color: #64748b;
  transition: background 0.15s;
}
.dash-menu-item:hover {
  background: #f1f5f9;
}
.dash-menu-active {
  background: #E5E5E5 !important;
  color: #1e1b4b !important;
}
.dash-menu-active svg path,
.dash-menu-active svg rect,
.dash-menu-active svg circle {
  fill: white;
  stroke: white;
}

/* ── Main Content Area ── */
.dash-main {
  flex: 1;
  display: flex;
  min-width: 0;
  background: #fff;
}
.dash-content-area {
  flex: 1;
  padding: 8px 10px;
  overflow-y: auto;
  border-right: 1px solid #e5e7eb;
  min-width: 0;
}

/* Page header */
.dash-page-header {
  margin-bottom: 6px;
}

/* Flag header */
.dash-flag-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  margin-bottom: 4px;
}
.dash-toggle-on {
  width: 18px;
  height: 10px;
  background: #22c55e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1px;
}
.dash-toggle-dot {
  width: 7px;
  height: 7px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
.dash-rollback-btn {
  font-size: 4px;
  color: #64748b;
  border: 1px solid #e5e7eb;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
}

/* Tabs */
.dash-tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 8px;
  gap: 0;
}
.dash-tab {
  font-size: 4.5px;
  color: #94a3b8;
  padding: 4px 8px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
}
.dash-tab:hover {
  color: #4f46e5;
}
.dash-tab-active {
  color: #1e1b4b;
  font-weight: 600;
  border-bottom-color: #4f46e5;
}

/* Chart */
.dash-chart-section {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 6px 8px;
  margin-bottom: 8px;
}
.dash-chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.dash-dropdown-small {
  font-size: 4px;
  color: #64748b;
  border: 1px solid #e5e7eb;
  padding: 1px 4px;
  border-radius: 2px;
}
.dash-chart-area {
  display: flex;
  gap: 4px;
  height: 70px;
}
.dash-chart-y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 3.5px;
  color: #94a3b8;
  padding-bottom: 8px;
}
.dash-chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  flex: 1;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0;
}
.dash-bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
}
.dash-bar {
  width: 80%;
  border-radius: 1.5px 1.5px 0 0;
  min-height: 2px;
  transition: height 0.3s ease;
}
.dash-bar-label {
  font-size: 3px;
  color: #94a3b8;
  margin-top: 2px;
}

/* Action rows */
.dash-action-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #f1f5f9;
  gap: 6px;
}
.dash-btn-danger {
  font-size: 4px;
  font-weight: 600;
  color: white;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
}
.dash-btn-outline {
  font-size: 4px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #e5e7eb;
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ── Right Info Panel ── */
.dash-right-panel {
  width: 100px;
  background: #fafafa;
  padding: 8px 6px;
  display: flex;
  flex-direction: column;
  gap: 0;
  flex-shrink: 0;
  overflow-y: auto;
}
.dash-info-row {
  padding: 4px 0;
  border-bottom: 1px solid #e5e7eb;
}
.dash-info-label {
  font-size: 4.5px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 2px;
  display: block;
}
.dash-info-value {
  font-size: 4px;
  color: #1e1b4b;
  line-height: 1.4;
  display: block;
}
.dash-input-field {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 4px;
  color: #1e1b4b;
  border: 1px solid #e5e7eb;
  border-radius: 3px;
  padding: 2px 4px;
  margin-top: 1px;
  background: white;
}

/* Audit log */
.dash-audit-entry {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 3px;
  padding: 2px 0;
}
.dash-audit-avatar {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
