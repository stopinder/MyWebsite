<template>
  <div class="relative font-inter bg-midnight text-white min-h-screen">

    <!-- Background Texture -->
    <div class="absolute inset-0 bg-[url('/images/bg-texture.jpg')] bg-cover bg-center opacity-5 pointer-events-none z-0"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-midnight pointer-events-none z-0"></div>

    <!-- Main Layout -->
    <div class="relative z-10">
      <header class="sticky top-0 z-50 px-6 py-4 grid grid-cols-3 items-center bg-midnight bg-opacity-90 shadow-md">

        <!-- Left: Logo + Name + Chrysalis -->
        <div class="flex items-start flex-col">
          <router-link to="/" class="flex items-center space-x-3 flex-shrink-0">
            <img
                src="/src/assets/favmine.png"
                alt="Rob Ormiston logo"
                class="w-8 h-8 rounded-full shadow-md border border-slate-700 object-cover"
            />
            <transition name="fade-up" appear>
              <span v-if="showName" class="text-xl font-cormorant font-semibold whitespace-nowrap">Rob Ormiston</span>
            </transition>
          </router-link>
          <div class="ml-11 text-sm text-slate-400 font-medium leading-snug">
            <a href="/chrysalis" class="hover:underline">Chrysalis Therapy Services</a>
          </div>

        </div>

        <!-- Center: Desktop Navigation -->
        <nav v-if="!isMenuOpen && windowWidth >= 768" class="hidden md:flex justify-center space-x-4 text-sm">

          <a href="#about" class="hover:underline">About</a>
          <a href="#services" class="hover:underline">Services</a>
          <a href="#enneagram" class="hover:underline">Enneagram</a>
          <a href="#mission" class="hover:underline">Mission</a>
          <a href="https://calendly.com/robormiston/new-meeting" target="_blank" rel="noopener noreferrer" class="hover:underline">Book</a>
          <a href="https://heliosynthesis.org" target="_blank" class="hover:underline whitespace-nowrap">Symbolic Insight</a>
        </nav>

        <!-- Right: Hamburger (mobile only) -->
        <div class="flex justify-end md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>


      </header>
      <!-- Mobile Navigation Dropdown -->
      <div v-if="isMenuOpen" class="md:hidden px-6 py-4 bg-midnight text-white space-y-2">
        <a href="#about" class="block hover:underline" @click="isMenuOpen = false">About</a>
        <a href="#services" class="block hover:underline" @click="isMenuOpen = false">Services</a>
        <a href="#enneagram" class="block hover:underline" @click="isMenuOpen = false">Enneagram</a>
        <a href="#mission" class="block hover:underline" @click="isMenuOpen = false">Mission</a>
        <a href="https://calendly.com/robormiston/new-meeting" target="_blank" rel="noopener noreferrer" class="block hover:underline" @click="isMenuOpen = false">Book</a>
        <a href="https://heliosynthesis.org" target="_blank" class="block hover:underline" @click="isMenuOpen = false">Symbolic Insight</a>
      </div>



      <!-- Hero -->
      <section class="pt-20 pb-12 px-6 text-center max-w-2xl mx-auto bg-midnight text-white">
        <h1 class="text-5xl font-cormorant font-semibold mb-6 tracking-tight leading-tight text-white">
          Trauma-Informed Psychotherapy & Counselling
        </h1>
        <p class="text-lg text-faded mb-8 leading-relaxed font-inter">
          With over 25 years of clinical experience, I offer trauma-informed psychotherapy and counselling using Internal Family Systems (IFS) and Eye Movement Desensitization and Reprocessing (EMDR). My practice supports emotional healing, memory integration, and meaning-making—tailored to individuals seeking compassionate, evidence-based care.
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
              I’m a psychotherapist and the founder of Heliosynthesis. With well over 25 years experience of working in mental health environments, including clinical leadership roles within the NHS.
              I work at depth with trauma, memory, and meaning — primarily through Internal Family Systems (IFS) and EMDR.
            </p>
            <p>
              My approach is reflective, symbolic, and rooted in real experience — offering clients clarity, containment, and connection.
            </p>
          </div>
          <div class="md:w-1/3 mt-4">
            <img src="/src/assets/rob-placeholder.jpg" alt="Rob Ormiston portrait"
                 class="w-40 h-40 rounded-full mx-auto md:mx-0 shadow-sm border border-slate-700 object-cover"/>
          </div>
        </div>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <section class="py-20 px-6 max-w-6xl mx-auto text-slate-200">
        <p class="text-center text-sm uppercase tracking-wide text-slate-400 mb-2">Words from clients</p>
        <h3 class="text-2xl font-display font-semibold mb-6 text-center">Client Reflections</h3>

        <div class="grid md:grid-cols-3 gap-6 text-slate-300">
          <blockquote class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            “Rob helped me reconnect with parts of myself I’d long forgotten. The work was profound.”
            <footer class="mt-3 text-sm text-slate-400">— S.R., 2024</footer>
          </blockquote>

          <blockquote class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            “I’ve tried many approaches to healing. Rob’s symbolic and clear method changed everything.”
            <footer class="mt-3 text-sm text-slate-400">— A.M., 2023</footer>
          </blockquote>

          <blockquote class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            “Working with Rob felt like walking into a sacred space. I left each session more whole.”
            <footer class="mt-3 text-sm text-slate-400">— J.L., 2022</footer>
          </blockquote>
        </div>

        <p class="text-center text-slate-400 mt-10">
          Curious to explore this work yourself?
          <a href="#contact" class="text-periwinkle hover:underline">Book a session →</a>
        </p>
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

      <section id="mission" class="max-w-3xl mx-auto py-20 px-6 space-y-10">
        <img
            :src="stressed"
            alt="Therapist holding complexity"
            class="rounded-lg w-full h-48 object-cover mb-8"
        />
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
      </section>


      <!-- Footer -->
      <div class="flex justify-center items-center mt-4 space-x-2">
        <span class="text-slate-500">Registered Member of</span>
        <a href="https://www.bacp.co.uk/" target="_blank" rel="noopener" class="inline-block">
          <img
              src="/src/assets/BACP.png"
              alt="BACP Logo"
              class="h-6 md:h-8 object-contain"
          />
        </a>
      </div>

      <footer class="py-6 text-center text-sm text-slate-600 bg-midnight space-y-2">
        <div><a href="mailto:discover@heliosynthesis.org" class="hover:underline">discover@heliosynthesis.org</a></div>
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
import { ref, onMounted } from 'vue'
import stressed from '../assets/stressed.jpg'

const showName = ref(false)
const isMenuOpen = ref(false)

onMounted(() => {
  setTimeout(() => {
    showName.value = true
  }, 300)
})
const windowWidth = ref(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

import MandorlaDivider from '../components/MandorlaDivider.vue'

function donate() {
  window.open('https://buymeacoffee.com/heliosynth', '_blank');
}
</script>
