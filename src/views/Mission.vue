<template>
  <div class="relative font-karla bg-midnight min-h-screen text-slate-200">

    <!-- Navigation header -->
    <header class="sticky top-0 z-50 px-6 py-4 grid grid-cols-3 items-center bg-midnight bg-opacity-90 shadow-md">
      <div class="flex items-start flex-col">
        <router-link to="/" class="flex items-center space-x-3 flex-shrink-0">
          <img
              :src="favmine"
              alt="Rob Ormiston logo"
              class="w-8 h-8 rounded-full shadow-md border border-slate-700 object-cover"
          />
          <span class="text-xl font-cormorant font-semibold whitespace-nowrap text-periwinkle">Rob Ormiston</span>
        </router-link>
        <div class="ml-11 text-sm text-faded font-medium leading-snug">
          <a href="/chrysalis" class="hover:underline">Chrysalis Therapy Services</a>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex justify-center space-x-4 text-sm">
        <a href="/" class="hover:underline text-faded">Home</a>
        <a href="#about" class="hover:underline text-faded">About</a>
        <a href="#services" class="hover:underline text-faded">Services</a>
        <a href="#enneagram" class="hover:underline text-faded">Enneagram</a>
        <a href="/mission" class="hover:underline font-semibold text-periwinkle">Mission</a>
        <a href="#contact" class="hover:underline text-faded">Book</a>
        <a href="https://heliosynthesis.org" target="_blank" class="hover:underline whitespace-nowrap text-faded">Symbolic Insight</a>
      </nav>

      <!-- Mobile Hamburger -->
      <div class="flex justify-end md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="text-periwinkle">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Dropdown -->
    <div v-if="isMenuOpen" class="md:hidden px-6 py-4 bg-midnight text-periwinkle space-y-2">
      <a href="/" class="block hover:underline text-periwinkle" @click="isMenuOpen = false">Home</a>
      <a href="#about" class="block hover:underline text-periwinkle" @click="isMenuOpen = false">About</a>
      <a href="#services" class="block hover:underline text-periwinkle" @click="isMenuOpen = false">Services</a>
      <a href="#enneagram" class="block hover:underline text-periwinkle" @click="isMenuOpen = false">Enneagram</a>
      <a href="/mission" class="block hover:underline font-semibold text-periwinkle" @click="isMenuOpen = false">Mission</a>
      <a href="#contact" class="block hover:underline text-periwinkle" @click="isMenuOpen = false">Book</a>
      <a href="https://heliosynthesis.org" target="_blank" rel="noopener noreferrer" class="block hover:underline text-periwinkle" @click="isMenuOpen = false">Symbolic Insight</a>
    </div>

    <!-- Impactful Image -->
    <div class="max-w-3xl mx-auto mt-12 px-6">
      <img
          :src="stressed"
          alt="Therapist holding complexity"
          class="rounded-lg h-48 w-full object-cover"
      />
    </div>

    <!-- Mission Content -->
    <main class="max-w-3xl mx-auto py-20 px-6 space-y-10">

      <h1 class="text-5xl font-cormorant font-semibold text-slate-200">
        Our Mission
      </h1>

      <p class="text-lg leading-relaxed text-slate-200">
        The free personality quiz you completed is a demonstration of how AI can assist psychotherapists in understanding complex emotional dynamics. It is a step towards a broader vision.
      </p>

      <p class="text-lg leading-relaxed text-slate-200">
        I am building a comprehensive container app tailored for psychotherapists and clinicians. This app will integrate scheduling, billing, supervision, and AI-assisted tools designed to reduce burnout and improve clinical care.
      </p>

      <p class="text-lg leading-relaxed text-slate-200">
        In the current global context, with increased trauma due to conflicts and crises, accessible online trauma therapy is essential. This platform will evolve with AI advancements to empower therapists — not replace them.
      </p>

      <p class="text-lg leading-relaxed text-slate-200">
        Therapists hold profound complexity in their work, and AI can help shoulder that burden alongside them. Together, we aim to create a sustainable future for mental health services.
      </p>

      <p class="text-lg leading-relaxed text-slate-200">
        To realize this vision, I invite your financial support and partnership. Your contributions will help build this vital resource for therapists and the clients they serve.
      </p>

      <div class="pt-8 flex justify-center">
        <button
            @click="donate"
            class="bg-periwinkle hover:bg-indigo-600 text-midnight font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
        >
          Donate
        </button>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import favmine from '../assets/favmine.png'
import stressed from '../assets/stressed.jpg'

const isMenuOpen = ref(false)

function donate() {
  window.open('https://buymeacoffee.com/heliosynth', '_blank');
}
</script>
