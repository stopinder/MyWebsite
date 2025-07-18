<template>
  <div class="my-12 flex justify-center">
    <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="animate-fade-pulse"
    >
      <!-- Left ellipse -->
      <ellipse
          cx="40"
          cy="25"
          rx="20"
          ry="20"
          fill="none"
          stroke="white"
          stroke-opacity="0.3"
          stroke-width="1.5"
      />
      <!-- Right ellipse -->
      <ellipse
          cx="60"
          cy="25"
          rx="20"
          ry="20"
          fill="none"
          stroke="white"
          stroke-opacity="0.3"
          stroke-width="1.5"
      />
    </svg>
  </div>
</template>

<style scoped>
@keyframes fadePulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.03); }
}
.animate-fade-pulse {
  animation: fadePulse 6s ease-in-out infinite;
  transform-origin: center;
}
</style>
