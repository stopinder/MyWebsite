<template>
  <div class="relative font-inter bg-midnight text-white min-h-screen overflow-x-hidden">
    <!-- Background Texture -->
    <div
        class="absolute inset-0 bg-[url('/images/bg-texture.jpg')] bg-cover bg-center opacity-5 pointer-events-none z-0"
    ></div>
    <!-- Radial Overlay -->
    <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-midnight pointer-events-none z-0"
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
      <section class="pt-20 pb-12 px-6 text-center max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          Depth-Oriented Psychotherapy
        </h2>
        <p class="text-lg text-faded mb-8 leading-relaxed">
          Trauma-informed. Symbolic. Clinical. For over 25 years, I’ve worked with memory, meaning, and emotional healing using IFS and EMDR.
        </p>
        <a
            href="mailto:discover@heliosynthesis.org?subject=Therapy%20Enquiry&body=Hi%20Rob%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20your%20psychotherapy%20services.%20Please%20let%20me%20know%20next%20steps.%0A%0AThanks%2C"
            class="inline-block bg-white text-midnight px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition"
        >
          Get in Touch
        </a>
      </section>

      <!-- Symbolic Accent -->
      <MandorlaDivider class="text-purple-400 opacity-60 my-8" />

      <!-- About -->
      <section id="about" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
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

          <!-- Image -->
          <div class="md:w-1/3 mt-4">
            <img
                src="/images/rob-placeholder.jpg"
                alt="Rob Ormiston portrait"
                class="w-40 h-40 rounded-full mx-auto md:mx-0 shadow-sm border border-slate-700 object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Symbolic Accent -->
      <MandorlaDivider class="text-purple-400 opacity-60 my-8" />

      <!-- Services -->
      <section id="services" class="py-20 px-6 bg-slate-800 text-slate-100 text-center">
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

      <!-- Symbolic Accent -->
      <MandorlaDivider class="text-purple-400 opacity-60 my-8" />

      <!-- Contact -->
      <section id="contact" class="py-20 px-6 bg-slate-900 text-slate-100 text-center">
        <h3 class="text-xl font-semibold mb-2">Book a Session</h3>
        <p class="text-sm text-slate-400 mb-4">Choose a time that suits you — all sessions are online.</p>

        <div class="max-w-xl mx-auto">
          <iframe
              src="https://calendly.com/robormiston/introduction"
              width="100%"
              height="350"
              frameborder="0"
              class="rounded-xl border border-slate-700 shadow-sm"
              title="Calendly Booking"
          ></iframe>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-6 text-center text-sm text-slate-600 bg-midnight space-y-2">
        <div>
          <a href="mailto:discover@heliosynthesis.org" class="hover:underline">rob@heliosynthesis.org</a>
        </div>
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
import MandorlaDivider from '../components/MandorlaDivider.vue'
</script>
