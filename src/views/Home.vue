<template>
  <div class="font-sans bg-midnight text-white min-h-screen">
    <!-- Header -->
    <header class="px-6 py-4 flex justify-between items-center bg-slate-900 shadow-md">
      <h1 class="text-xl font-semibold">Rob Ormiston</h1>
      <nav class="space-x-4 text-sm hidden md:block">
        <a href="#about" class="hover:underline">About</a>
        <a href="#services" class="hover:underline">Services</a>
        <a href="#philosophy" class="hover:underline">Philosophy</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </nav>
    </header>

    <!-- Hero -->
    <section class="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-midnight to-celestial">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">IFS & EMDR Psychotherapy</h2>
      <p class="text-lg text-faded max-w-xl mx-auto mb-6">
        Clinical depth. Symbolic intelligence. Creator of Heliosynthesis.
      </p>
      <a href="#contact" class="inline-block bg-white text-midnight px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition">
        Book a Free Call
      </a>
    </section>

    <!-- About -->
    <section id="about" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
      <h3 class="text-2xl font-bold mb-4">About Me</h3>
      <p class="mb-4">
        I’m a psychotherapist with 25+ years in mental health, including clinical leadership in the NHS. I specialise in Internal Family Systems (IFS) and EMDR, working deeply with trauma, memory, and meaning.
      </p>
      <p>
        I’m also the creator of Heliosynthesis—a reflective tool for therapists and clients, blending symbolic systems with modern tech.
      </p>
    </section>

    <!-- Services -->
    <section id="services" class="py-20 px-6 bg-slate-800 text-slate-100">
      <h3 class="text-2xl font-bold mb-6 text-center">Services</h3>
      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="p-4 border border-slate-600 rounded-xl bg-slate-900">
          <h4 class="font-semibold mb-2">IFS Therapy</h4>
          <p class="text-sm">Parts work for emotional clarity and inner connection.</p>
        </div>
        <div class="p-4 border border-slate-600 rounded-xl bg-slate-900">
          <h4 class="font-semibold mb-2">EMDR Processing</h4>
          <p class="text-sm">Trauma healing through structured memory integration.</p>
        </div>
        <div class="p-4 border border-slate-600 rounded-xl bg-slate-900">
          <h4 class="font-semibold mb-2">Reflective Supervision</h4>
          <p class="text-sm">Depth-focused support for therapists and clinicians.</p>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section id="philosophy" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
      <h3 class="text-2xl font-bold mb-4">Philosophy</h3>
      <p class="mb-4 italic text-slate-400">
        “Everything is in there. The mind is symbolic, layered, and ready to speak if we listen the right way.”
      </p>
      <p>
        I work at the intersection of system, soul, and signal. I believe real change happens when insight meets embodiment—and when parts are met with presence, not pressure.
      </p>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-20 px-6 bg-slate-900 text-slate-100 text-center">
      <h3 class="text-2xl font-bold mb-4">Contact</h3>
      <p class="mb-6">Get in touch to book a free 20-minute call or learn more about Heliosynthesis.</p>
      <a href="mailto:your@email.com" class="inline-block bg-white text-midnight px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition">
        Send an Email
      </a>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center text-sm text-slate-600">
      &copy; 2025 Rob Ormiston. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// no logic yet
</script>
