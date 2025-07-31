<template>
  <div class="relative font-inter bg-midnight text-white min-h-screen">

    <!-- Background Texture -->
    <div class="absolute inset-0 bg-[url('/images/bg-texture.jpg')] bg-cover bg-center opacity-5 pointer-events-none z-0"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-midnight pointer-events-none z-0"></div>

    <!-- Main Layout -->
    <div class="relative z-10">
      <header class="sticky top-0 z-50 px-6 py-4 flex justify-between items-center bg-midnight bg-opacity-90 shadow-md">
        <router-link to="/" class="text-xl font-display font-semibold">Rob Ormiston</router-link>
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <nav
            :class="[
            'absolute top-full left-0 w-full bg-midnight md:bg-transparent md:static md:flex md:items-center md:space-x-4 text-sm',
            isMenuOpen ? 'block' : 'hidden'
          ]"
            class="px-6 py-4 md:px-0 md:py-0"
        >
          <a href="#about" class="block md:inline hover:underline py-2">About</a>
          <a href="#services" class="block md:inline hover:underline py-2">Services</a>
          <a href="#enneagram" class="block md:inline hover:underline py-2">Enneagram</a>
          <a href="#contact" class="block md:inline hover:underline py-2">Book</a>

          <a href="https://heliosynthesis.org"
              target="_blank"
              class="block md:inline hover:underline py-2"
          >
            Symbolic Insight
          </a>

        </nav>
      </header>

      <!-- Hero -->
      <section class="pt-20 pb-12 px-6 text-center max-w-2xl mx-auto">
        <h2 class="text-5xl font-display font-semibold mb-6 tracking-tight leading-tight">
          Depth-Oriented Psychotherapy
        </h2>
        <p class="text-lg text-slate-300 mb-8 leading-relaxed">
          Trauma-informed. Symbolic. Clinical. For over 25 years, I’ve worked with memory, meaning, and emotional healing using IFS and EMDR.
        </p>
        <a
            href="mailto:discover@heliosynthesis.org?subject=Therapy%20Enquiry"
            class="inline-block bg-periwinkle hover:bg-indigo-400 text-white px-6 py-3 rounded-full font-semibold shadow-aura transition"
        >
          Get in Touch
        </a>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- About -->
      <section id="about" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div class="md:w-2/3 text-center md:text-left">
            <h3 class="text-2xl font-display font-semibold mb-4">About Me</h3>
            <p class="mb-4">
              I’m a psychotherapist with over 25 years in mental health, including clinical leadership roles within the NHS.
              I work at depth with trauma, memory, and meaning — primarily through Internal Family Systems (IFS) and EMDR.
            </p>
            <p>
              My approach is reflective, symbolic, and rooted in real experience — offering clients clarity, containment, and connection.
            </p>
          </div>
          <div class="md:w-1/3 mt-4">
            <img src="/images/rob-placeholder.jpg" alt="Rob Ormiston portrait"
                 class="w-40 h-40 rounded-full mx-auto md:mx-0 shadow-sm border border-slate-700 object-cover"/>
          </div>
        </div>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Services -->
      <section id="services" class="py-20 px-6 bg-celestial text-slate-100 text-center">
        <h3 class="text-2xl font-display font-semibold mb-6">Therapeutic Modalities</h3>
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="p-6 border border-slate-600 rounded-xl bg-midnight">
            <h4 class="font-semibold mb-2 text-lg">IFS Therapy</h4>
            <p class="text-sm leading-relaxed">
              Parts work for emotional clarity, inner alignment, and compassionate self-leadership.
            </p>
          </div>
          <div class="p-6 border border-slate-600 rounded-xl bg-midnight">
            <h4 class="font-semibold mb-2 text-lg">EMDR Processing</h4>
            <p class="text-sm leading-relaxed">
              Structured trauma resolution through memory reconsolidation and integration.
            </p>
          </div>
          <div class="p-6 border border-slate-600 rounded-xl bg-midnight">
            <h4 class="font-semibold mb-2 text-lg">Reflective Supervision</h4>
            <p class="text-sm leading-relaxed">
              Depth-oriented clinical supervision for therapists working symbolically or with complex trauma.
            </p>
          </div>
        </div>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Enneagram Section -->
      <section id="enneagram" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
        <h3 class="text-3xl font-display font-semibold mb-4 text-center">Understanding the Enneagram</h3>
        <p class="text-lg text-slate-300 leading-relaxed mb-4">
          The Enneagram is an ancient yet evolving system of personality patterns — mapping nine core motivations, fears, and transformation paths. Each type reflects a unique lens through which individuals perceive and respond to the world.
        </p>
        <p class="text-lg text-slate-300 leading-relaxed mb-4">
          Its roots trace through Sufi traditions, early Christian mysticism, and modern psychology. Today, it bridges spiritual insight with psychological depth — often used in therapeutic, relational, and leadership contexts.
        </p>
        <p class="text-lg text-slate-300 leading-relaxed">
          In our work, the Enneagram offers not a box but a mirror — helping individuals see their patterns clearly and soften into greater integration. This is part of the symbolic synthesis you’ll experience in your personality report.
        </p>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Contact -->
      <section id="contact" class="py-20 px-6 bg-midnight text-slate-100 text-center">
        <h3 class="text-xl font-semibold mb-2">Schedule a Session</h3>
        <p class="text-sm text-slate-400 mb-4">Choose a time that suits you — all sessions are online.</p>
        <div class="max-w-xl mx-auto">
          <iframe
              src="https://calendly.com/robormiston/introduction"
              width="100%" height="350" frameborder="0"
              class="rounded-xl border border-slate-700 shadow-sm"
              title="Calendly Booking"
          ></iframe>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-6 text-center text-sm text-slate-600 bg-midnight space-y-2">
        <div><a href="mailto:discover@heliosynthesis.org" class="hover:underline">rob@heliosynthesis.org</a></div>
        <div class="space-x-4">
          <a href="https://www.linkedin.com/in/chrysalistherapyservices" target="_blank" class="hover:underline">LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=61555851054901&sk=about_contact_and_basic_info" target="_blank" class="hover:underline">Facebook</a>
        </div>
        <div>&copy; 2025 Rob Ormiston. All rights reserved.</div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)

import MandorlaDivider from '../components/MandorlaDivider.vue'
</script>
