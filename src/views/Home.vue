<template>
  <div class="relative font-inter bg-midnight text-white min-h-screen overflow-x-hidden">
    <!-- Subtle Background Texture -->
    <div
        class="absolute inset-0 bg-[url('/images/bg-texture.jpg')] bg-cover bg-center opacity-5 pointer-events-none z-0"
    ></div>

    <!-- Main Layout -->
    <div class="relative z-10">
      <!-- Header -->
      <header class="px-6 py-4 flex justify-between items-center bg-slate-900 shadow-md">
        <h1 class="text-xl font-semibold">Rob Ormiston</h1>
        <nav class="space-x-4 text-sm hidden md:block">
          <a href="#about" class="hover:underline">About</a>
          <a href="#services" class="hover:underline">Services</a>
          <a href="#contact" class="hover:underline">Book</a>
        </nav>
      </header>

      <!-- Hero -->
      <section class="pt-20 pb-8 px-6 text-center max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Depth-Oriented Psychotherapy
        </h2>
        <p class="text-lg text-faded mb-8 leading-relaxed">
          Trauma-informed. Symbolic. Clinical. For over 25 years, I’ve worked with memory, meaning, and emotional healing using IFS and EMDR.
        </p>
        <a
            href="#contact"
            class="inline-block bg-white text-midnight px-6 py-3 rounded-full font-semibold transition hover:bg-slate-200 hover:ring-2 hover:ring-[#9373B5] hover:ring-offset-2"
        >
          Book a Call
        </a>
      </section>

      <!-- Divider -->
      <MandorlaDivider />

      <!-- About -->
      <section id="about" class="py-16 px-6 max-w-4xl mx-auto text-slate-200">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
          <!-- Text Block -->
          <div class="md:w-2/3 text-center md:text-left">
            <h3 class="text-2xl font-bold mb-4">About Me</h3>
            <p class="mb-4">
              I’m a psychotherapist with over 25 years in mental health, including clinical leadership roles within the NHS.
              I work at depth with trauma, memory, and meaning — primarily through Internal Family Systems (IFS) and EMDR.
            </p>
            <p>
              My approach is reflective, symbolic, and rooted in real experience — offering clients clarity, containment, and connection.
            </p>
          </div>

          <!-- Image Block -->
          <div class="md:w-1/3">
            <img
                src="/images/rob-placeholder.jpg"
                alt="Rob Ormiston portrait"
                class="w-32 h-32 rounded-full mx-auto md:mx-0 shadow-sm border border-slate-700 object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Divider -->
      <MandorlaDivider />

      <!-- Services -->
      <section id="services" class="py-16 px-6 bg-slate-800 text-slate-100 text-center">
        <h3 class="text-2xl font-bold mb-6">What I Offer</h3>
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="p-6 border border-slate-600 rounded-xl bg-slate-900">
            <h4 class="font-semibold mb-2 text-lg">IFS Therapy</h4>
            <p class="text-sm leading-relaxed">
              Parts work for emotional clarity, inner alignment, and compassionate self-leadership.
            </p>
          </div>
          <div class="p-6 border border-slate-600 rounded-xl bg-slate-900">
            <h4 class="font-semibold mb-2 text-lg">EMDR Processing</h4>
            <p class="text-sm leading-relaxed">
              Structured trauma resolution through memory reconsolidation and integration.
            </p>
          </div>
          <div class="p-6 border border-slate-600 rounded-xl bg-slate-900">
            <h4 class="font-semibold mb-2 text-lg">Reflective Supervision</h4>
            <p class="text-sm leading-relaxed">
              Depth-oriented clinical supervision for therapists working symbolically or with complex trauma.
            </p>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <MandorlaDivider />

      <!-- Contact -->
      <section id="contact" class="py-16 px-6 bg-slate-900 text-slate-100 text-center">
        <h3 class="text-2xl font-bold mb-4">Book a Session</h3>
        <p class="mb-6 text-faded">Choose a time that works for you. All sessions are online.</p>
        <div class="max-w-3xl mx-auto">
          <iframe
              src="https://calendly.com/robormiston/introduction"
              width="100%"
              height="600"
              frameborder="0"
              class="rounded-xl border border-slate-700 shadow-sm"
              title="Calendly Booking"
          ></iframe>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-6 text-center text-sm text-slate-600 bg-midnight space-y-2">
        <div>
          <a href="mailto:rob@heliosynthesis.org" class="hover:underline">rob@heliosynthesis.org</a>
        </div>
        <div class="space-x-4">
          <a href="https://linkedin.com/in/robormiston" target="_blank" class="hover:underline">LinkedIn</a>
          <a href="https://instagram.com/yourhandle" target="_blank" class="hover:underline">Instagram</a>
        </div>
        <div>&copy; 2025 Rob Ormiston. All rights reserved.</div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import MandorlaDivider from '../components/MandorlaDivider.vue'
</script>



