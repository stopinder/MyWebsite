<template>
  <div class="my-12 flex items-center justify-center gap-4">
    <!-- Left line -->
    <div class="flex-grow h-px bg-[#9373B5] bg-opacity-40"></div>

    <!-- Mandorla symbol -->
    <svg
        width="80"
        height="40"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="shrink-0 animate-fade-pulse"
    >
      <ellipse
          cx="40"
          cy="25"
          rx="20"
          ry="20"
          fill="none"
          stroke="#9373B5"
          stroke-opacity="0.8"
          stroke-width="1.6"
      />
      <ellipse
          cx="60"
          cy="25"
          rx="20"
          ry="20"
          fill="none"
          stroke="#9373B5"
          stroke-opacity="0.8"
          stroke-width="1.6"
      />
    </svg>

    <!-- Right line -->
    <div class="flex-grow h-px bg-[#9373B5] bg-opacity-40"></div>
  </div>
</template>

<style scoped>
@keyframes fadePulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.04); }
}
.animate-fade-pulse {
  animation: fadePulse 6s ease-in-out infinite;
  transform-origin: center;
}
</style>
