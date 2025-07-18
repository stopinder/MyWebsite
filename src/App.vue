<template>
  <Home />
</template>

<script setup>
import { onMounted } from 'vue'
import Home from './views/Home.vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    });
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-fade').forEach(el => {
    observer.observe(el)
  })
})
</script>





