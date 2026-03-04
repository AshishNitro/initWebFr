<template>
  <section class="w-full bg-white py-16 lg:py-[120px] px-6 lg:px-[120px]">
    <div class="max-w-[1680px] mx-auto">
      <!-- Section Title -->
      <h2 class="font-satoshi font-bold text-3xl lg:text-[48px] text-left mb-[48px] text-[#0E121B]">
        Control &amp; Power-focused
      </h2>

      <!-- Three Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[95px]">
        <div
          v-for="(card, index) in cards"
          :key="card.title"
          class="flex flex-col gap-[24px]"
        >
          <!-- App Screenshot (dark bg card) -->
          <div class="flex flex-col gap-[8px]">
            <div
              class="rounded-[12px] p-3 overflow-hidden shadow-lg h-full border border-slate-800/20"
              style="background: #1a1c3d;"
            >
              <div class="rounded-[4px] overflow-hidden bg-slate-900 w-full h-[180px] lg:h-[220px] relative">
                
                <!-- SVGs -->
                <div v-if="index === 0" class="absolute inset-0 w-full h-full">
                  <img src="./logoforty/connect1.svg" class="w-full h-full object-cover object-left-top" />
                </div>
                <div v-else-if="index === 1" class="absolute inset-0 w-full h-full">
                  <img src="./logoforty/createflags.svg" class="w-full h-full object-cover object-left-top" />
                </div>
                <div v-else class="absolute inset-0 w-full h-full">
                  <img src="./logoforty/ship.svg" class="w-full h-full object-cover object-left-top" />
                </div>

                <!-- EXISTING CODE COMMENTED FOR LATER -->
                <template v-if="false">
                <!-- Card 1: Connect Mockup -->
                <div v-if="index === 0" class="absolute inset-0 flex flex-col select-none w-full h-full bg-[#f5f6fa]">
                  <!-- Top Navbar -->
                  <div class="h-[22px] bg-[#1e1b4b] flex items-center justify-between px-2 shrink-0">
                    <div class="flex items-center gap-1.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="white" opacity="0.9"/></svg>
                      <span class="text-white text-[6px] font-bold">IntelliToggle</span>
                    </div>
                    <div class="flex items-center gap-1 bg-white/10 rounded px-1.5 py-0.5 min-w-[60px]">
                      <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#94a3b8" stroke-width="1.5"/><line x1="11" y1="11" x2="14" y2="14" stroke="#94a3b8" stroke-width="1.5"/></svg>
                      <span class="text-[5px] text-slate-400">Search...</span>
                    </div>
                  </div>
                  <!-- Body -->
                  <div class="flex flex-1 min-h-0">
                    <!-- Left Sidebar -->
                    <div class="w-[52px] bg-white border-r border-slate-200 flex flex-col py-1.5 px-1 gap-[1px] shrink-0 overflow-hidden">
                      <!-- Project -->
                      <div class="flex items-center gap-1 px-1 py-1 mb-1">
                        <div class="w-3 h-3 rounded bg-indigo-600 flex items-center justify-center"><span class="text-white text-[4px] font-bold">P</span></div>
                        <span class="text-[5px] font-semibold text-slate-800 truncate">Project1</span>
                      </div>
                      <div class="text-[3.5px] font-bold text-slate-400 uppercase px-1 mb-0.5">Main Menu</div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1" fill="#94a3b8"/><rect x="9" y="1" width="6" height="6" rx="1" fill="#94a3b8"/><rect x="1" y="9" width="6" height="6" rx="1" fill="#94a3b8"/><rect x="9" y="9" width="6" height="6" rx="1" fill="#94a3b8"/></svg>
                        <span>Dashboard</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1" stroke="#94a3b8" stroke-width="1.5" fill="none"/></svg>
                        <span>Feature Flags</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#94a3b8" stroke-width="1.5" fill="none"/></svg>
                        <span>Experiments</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><polyline points="2,12 5,6 8,9 11,3 14,7" stroke="#94a3b8" stroke-width="1.5" fill="none"/></svg>
                        <span>Analytics</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="1" stroke="#94a3b8" stroke-width="1.5" fill="none"/></svg>
                        <span>Audit logs</span>
                      </div>
                      <div class="text-[3.5px] font-bold text-slate-400 uppercase px-1 mt-1 mb-0.5">Preferences</div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] bg-indigo-600 text-white font-medium">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="white" stroke-width="1.5" fill="none"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2" stroke="white" stroke-width="1"/></svg>
                        <span>Settings</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <svg width="6" height="6" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="4" stroke="#94a3b8" stroke-width="1.5" fill="none"/><path d="M4 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#94a3b8" stroke-width="1.5" fill="none"/></svg>
                        <span>Support / Docs</span>
                      </div>
                    </div>
                    <!-- Settings Sub-Menu -->
                    <div class="w-[55px] bg-white border-r border-slate-200 flex flex-col py-2 px-1.5 gap-[1px] shrink-0 overflow-hidden">
                      <div class="text-[6px] font-bold text-slate-800 mb-0.5 px-0.5">Settings</div>
                      <div class="text-[4px] text-slate-400 mb-1.5 px-0.5 leading-tight">Manage your personal information, team, plan and...</div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">⚙️</span><span>General</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">🔒</span><span>Password</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">💳</span><span>Subscription</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">🔔</span><span>Notifications</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">📂</span><span>Linked Repos</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">✉️</span><span>Email & Msgs</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] bg-indigo-50 text-indigo-700 font-medium">
                        <span class="text-[6px]">🔑</span><span>OAuth2</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">👁️</span><span>Transparency</span>
                      </div>
                      <div class="flex items-center gap-1 px-1 py-[2px] rounded text-[5px] text-slate-500">
                        <span class="text-[6px]">🔐</span><span>Login & Pass</span>
                      </div>
                    </div>
                    <!-- Main Content Area -->
                    <div class="flex-1 p-3 relative overflow-hidden bg-[#f5f6fa]">
                      <div class="text-[7px] font-bold text-slate-800 mb-0.5">Settings</div>
                      <div class="text-[4px] text-slate-400 mb-2">Manage your personal information, team, plan and...</div>
                      <div class="flex items-center gap-1 mb-2">
                        <svg width="7" height="7" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill="#6366f1"/><path d="M5 8l2 2 4-4" stroke="white" stroke-width="1.5" fill="none"/></svg>
                        <span class="text-[6px] font-semibold text-indigo-700">OAuth2 Clients</span>
                      </div>
                      <div class="border border-slate-200 rounded bg-white p-2 h-[60px] flex items-center justify-center">
                        <span class="text-[4px] text-slate-300">No clients yet</span>
                      </div>
                    </div>
                  </div>
                  <!-- Overlay Modal -->
                  <div class="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px] flex items-center justify-end p-2">
                    <div class="bg-white rounded-lg shadow-2xl w-[55%] h-[92%] flex flex-col overflow-hidden mr-1">
                      <!-- Modal Header -->
                      <div class="flex items-center justify-between px-3 py-2 border-b border-slate-100">
                        <span class="text-[8px] font-bold text-slate-900">Create OAuth2 Client</span>
                        <div class="w-3 h-3 flex items-center justify-center text-slate-400 cursor-pointer hover:text-slate-600 text-[8px]">✕</div>
                      </div>
                      <!-- Modal Body -->
                      <div class="flex-1 px-3 py-2 flex flex-col gap-2 overflow-y-auto">
                        <!-- Client Name -->
                        <div class="flex flex-col gap-0.5">
                          <div class="text-[5px] font-semibold text-slate-600">Client Name <span class="text-red-400">*</span></div>
                          <div class="h-[14px] border border-slate-200 rounded px-1.5 flex items-center bg-white">
                            <span class="text-[5px] text-slate-400">P Client</span>
                          </div>
                        </div>
                        <!-- Project Name -->
                        <div class="flex flex-col gap-0.5">
                          <div class="text-[5px] font-semibold text-slate-600">Project Name</div>
                          <div class="h-[14px] border border-slate-200 rounded px-1.5 flex items-center justify-between bg-white">
                            <span class="text-[5px] text-slate-700 font-medium">Project 1</span>
                            <svg width="5" height="5" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="#94a3b8" stroke-width="1.2"/></svg>
                          </div>
                        </div>
                        <!-- Government visibility -->
                        <div class="flex flex-col gap-0.5">
                          <div class="text-[5px] font-semibold text-slate-600">Government visibility</div>
                          <div class="flex gap-0">
                            <div class="px-2 py-[3px] bg-indigo-600 text-white text-[5px] font-medium rounded-l border border-indigo-600">Production</div>
                            <div class="px-2 py-[3px] bg-white text-slate-600 text-[5px] font-medium rounded-r border border-slate-200 border-l-0">Staging</div>
                          </div>
                        </div>
                        <!-- Scope -->
                        <div class="flex flex-col gap-1">
                          <div class="text-[5px] font-semibold text-slate-600">Scope</div>
                          <div class="flex items-center gap-1">
                            <div class="w-[7px] h-[7px] border border-indigo-500 rounded-sm bg-indigo-500 flex items-center justify-center">
                              <svg width="5" height="5" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 5-5" stroke="white" stroke-width="1.5"/></svg>
                            </div>
                            <span class="text-[5px] text-slate-700 font-medium">Root</span>
                          </div>
                          <div class="flex items-center gap-1 pl-2">
                            <div class="w-[7px] h-[7px] border border-slate-300 rounded-sm bg-white"></div>
                            <span class="text-[5px] text-slate-500">More</span>
                          </div>
                          <div class="flex items-center gap-1 pl-2">
                            <div class="w-[7px] h-[7px] border border-slate-300 rounded-sm bg-white"></div>
                            <span class="text-[5px] text-slate-500">Evaluate</span>
                          </div>
                        </div>
                        <!-- Date -->
                        <div class="flex flex-col gap-0.5">
                          <div class="text-[5px] font-semibold text-slate-600">Date</div>
                          <div class="h-[14px] border border-slate-200 rounded px-1.5 flex items-center justify-between bg-white">
                            <div class="flex items-center gap-1">
                              <span class="text-[5px]">📅</span>
                              <span class="text-[5px] text-slate-700">12/03/25</span>
                            </div>
                            <svg width="5" height="5" viewBox="0 0 12 12" fill="none"><path d="M3 5l3 3 3-3" stroke="#94a3b8" stroke-width="1.2"/></svg>
                          </div>
                        </div>
                      </div>
                      <!-- Modal Footer -->
                      <div class="flex gap-2 justify-end px-3 py-2 border-t border-slate-100">
                        <div class="px-3 py-1 bg-slate-100 text-slate-600 rounded text-[6px] font-medium cursor-pointer hover:bg-slate-200 transition-colors">Cancel</div>
                        <div class="px-3 py-1 bg-indigo-600 text-white rounded text-[6px] font-medium shadow-sm cursor-pointer hover:bg-indigo-700 transition-colors">Create Client</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card 2: Create Flags Mockup -->
                <div v-else-if="index === 1" class="absolute inset-0 flex select-none items-center justify-center p-4 bg-slate-900 overflow-hidden">
                  <!-- Abstract background elements to look like dashboard blurred behind -->
                  <div class="absolute inset-0 opacity-20 pointer-events-none">
                    <div class="absolute top-4 left-4 right-4 h-10 border border-slate-700 rounded-lg"></div>
                    <div class="absolute top-20 left-4 right-4 bottom-4 border border-slate-700 rounded-lg flex flex-col gap-2 p-3">
                      <div class="h-4 w-1/3 bg-slate-800 rounded"></div>
                      <div class="h-4 w-2/3 bg-slate-800 rounded"></div>
                      <div class="h-4 w-1/2 bg-slate-800 rounded"></div>
                    </div>
                  </div>
                  <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
                  
                  <div class="relative w-full max-w-[90%] bg-white rounded-lg shadow-2xl p-4 flex flex-col gap-3 transform hover:scale-[1.02] transition-transform duration-300">
                    <div class="w-full rounded-md bg-blue-50/80 py-2 px-3 border border-blue-100/50 flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <div class="text-blue-700 text-[10px] font-semibold">Flag Details</div>
                    </div>
                    
                    <div class="flex flex-col gap-0.5 px-1">
                      <div class="text-[12px] text-slate-800 font-bold tracking-tight">new checkout flow</div>
                      <div class="text-[8px] text-slate-400 font-mono">Key: new-checkout-flow</div>
                    </div>
                    
                    <div class="flex items-center justify-between border-t border-b border-slate-100 py-3 my-1 px-1">
                      <div class="text-[9px] font-medium text-slate-700">Make this flag 'on' default</div>
                      <!-- Toggle Switch -->
                      <div class="w-7 h-4 bg-emerald-500 rounded-full relative p-[2px] shadow-sm cursor-pointer transition-colors">
                        <div class="w-3 h-3 bg-white rounded-full absolute right-[2px] shadow-sm transition-transform"></div>
                      </div>
                    </div>
                    
                    <!-- Variations Table -->
                    <div class="flex flex-col gap-1.5 border border-slate-100 rounded-md p-2 bg-slate-50/30">
                      <div class="flex justify-between text-[7px] font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-1 mb-1">
                        <span>Variation Name</span><span>Value</span>
                      </div>
                      <div class="flex justify-between items-center text-[9px] text-slate-700 font-medium px-1 py-0.5 hover:bg-slate-100 rounded transition-colors">
                        <div class="flex items-center gap-1.5"><div class="w-1 h-1 bg-slate-400 rounded-full"></div>True</div>
                        <span class="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">true</span>
                      </div>
                      <div class="flex justify-between items-center text-[9px] text-slate-700 font-medium px-1 py-0.5 hover:bg-slate-100 rounded transition-colors">
                        <div class="flex items-center gap-1.5"><div class="w-1 h-1 bg-slate-400 rounded-full"></div>False</div>
                        <span class="text-red-500 bg-red-50 px-1.5 py-0.5 rounded">false</span>
                      </div>
                    </div>
                    
                    <div class="flex gap-2 mt-1 justify-end">
                      <div class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-md text-[8px] font-medium cursor-pointer hover:bg-slate-200 transition-colors">Cancel</div>
                      <div class="px-3 py-1.5 bg-blue-600 text-white rounded-md text-[8px] font-medium shadow-sm shadow-blue-500/30 cursor-pointer hover:bg-blue-700 transition-colors">Create flag</div>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Ship & Control Mockup -->
                <div v-else class="absolute inset-0 w-full h-full bg-white select-none flex flex-col">
                  <!-- Header -->
                  <div class="border-b border-slate-100 p-4 flex justify-between items-center bg-slate-50/80">
                    <div class="flex flex-col gap-0.5">
                      <div class="text-slate-900 font-bold text-[14px]">Feature Flags</div>
                      <div class="text-slate-500 text-[8px] font-medium">Manage your feature lifecycle here.</div>
                    </div>
                    <div class="px-2 py-1.5 bg-white border border-slate-200 rounded-md text-[8px] text-slate-400 flex items-center gap-2 shadow-sm w-1/3">
                      <svg class="w-2.5 h-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      <span class="truncate">Search flags...</span>
                      <div class="bg-slate-100 px-1 py-0.5 rounded text-[6px] font-semibold ml-auto border border-slate-200">⌘K</div>
                    </div>
                  </div>
                  <!-- List Container -->
                  <div class="flex flex-col p-3 gap-2 overflow-hidden flex-1 bg-slate-50/30">
                    
                    <!-- Active Flag Item -->
                    <div class="border border-emerald-100 bg-white rounded-lg p-3 flex flex-col gap-1.5 shadow-sm relative pl-7 group hover:border-emerald-200 hover:shadow-md transition-all">
                      <div class="absolute left-3 top-3.5 w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                      <div class="flex justify-between items-start">
                        <div class="text-[11px] font-bold text-slate-900">Enable-New-Ui</div>
                        <div class="text-[7px] text-slate-400 font-medium">Dec 30, 2025</div>
                      </div>
                      <div class="text-[9px] text-slate-500 font-medium">Gets the new onboarding experience.</div>
                      <div class="flex gap-1.5 mt-1 border-t border-slate-50 pt-2">
                        <span class="px-1.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 rounded text-[7px] font-semibold">Dev</span>
                        <span class="px-1.5 py-0.5 bg-blue-50 border border-blue-100 text-blue-700 rounded text-[7px] font-semibold">Prod</span>
                      </div>
                    </div>
                    
                    <!-- Inactive Flag Item -->
                    <div class="border border-slate-100 bg-white rounded-lg p-3 flex flex-col gap-1 relative pl-7 group opacity-80 hover:opacity-100 transition-opacity">
                      <div class="absolute left-3 top-3.5 w-2 h-2 bg-slate-300 rounded-full border border-slate-400"></div>
                      <div class="flex justify-between items-start">
                        <div class="text-[11px] font-semibold text-slate-700">Beta-Feature-X</div>
                        <div class="text-[7px] text-slate-400 font-medium">Jan 12, 2026</div>
                      </div>
                      <div class="text-[9px] text-slate-500 font-medium">Experimental settings for internal team.</div>
                    </div>
                    
                    <!-- Another Inactive Flag -->
                    <div class="border border-slate-100 bg-white rounded-lg p-3 flex flex-col gap-1 relative pl-7 opacity-60">
                      <div class="absolute left-3 top-3.5 w-2 h-2 bg-slate-300 rounded-full border border-slate-400"></div>
                      <div class="text-[11px] font-semibold text-slate-700">Legacy-API-Deprecation</div>
                    </div>

                  </div>
                  <!-- Pagination mock -->
                  <div class="border-t border-slate-100 p-2 flex justify-center text-[7px] text-slate-400 font-medium bg-white">
                    Page 2 of 16
                  </div>
                </div>
                </template>

              </div>
            </div>

            <!-- Card Content -->
            <div class="flex flex-col gap-[12px] mt-4">
              <h3 class="font-bold text-[24px]" style="color: #0E121B;">{{ card.title }}</h3>
              <p class="text-[18px] md:text-[20px] leading-[1.6]" style="color: #5f5f60;">{{ card.description }}</p>
            </div>
          </div>

          <a
            href="#"
            class="inline-flex mt-auto items-center justify-center border font-bold text-[18px] px-[24px] py-[12px] rounded-[8px] self-start shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] hover:bg-[#F9A71E] hover:text-white transition-all duration-300 w-fit"
            style="border-color: #F9A71E; color: #F9A71E;"
          >
            View Documentation
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Connect',
    description: 'Install SDK in your Dart project in 2 mins.',
    img: '~/assets/images/control-connect.png',
  },
  {
    title: 'Create Flags',
    description: 'Define features in IntelliToggle dashboard.',
    img: '~/assets/images/control-create.png',
  },
  {
    title: 'Ship & Control',
    description: 'Flip switches anytime, see instant results.',
    img: '~/assets/images/control-ship.png',
  },
]
</script>
