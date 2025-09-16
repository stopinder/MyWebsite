<template>
  <div class="relative font-inter bg-midnight text-white min-h-screen">
    <!-- Background Texture -->
    <div
        class="absolute inset-0 bg-[url('/images/bg-texture.jpg')] bg-cover bg-center opacity-5 pointer-events-none z-0"
    ></div>
    <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-midnight pointer-events-none z-0"
    ></div>

    <!-- Main Layout -->
    <div class="relative z-10">
      <header
          class="sticky top-0 z-50 px-6 py-4 grid grid-cols-3 items-center bg-midnight bg-opacity-90 shadow-md"
      >
        <!-- Left: Logo + Name -->
        <div class="flex items-center flex-shrink-0 space-x-4">
          <router-link to="/" class="flex items-center space-x-4">
            <img
                src="/src/assets/favmine.png"
                alt="Rob Ormiston logo"
                class="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover shrink-0"
            />
            <span class="text-2xl md:text-3xl lg:text-4xl font-garamond font-semibold text-slate-900">
      Rob Ormiston
    </span>
          </router-link>
        </div>


        <!-- Center: Desktop Navigation (grouped) -->
        <nav
            v-if="!isMenuOpen && windowWidth >= 768"
            class="hidden md:flex justify-center items-center gap-5 text-sm"
        >
          <!-- Home -->
          <router-link to="/" class="hover:underline">Home</router-link>

          <!-- About (dropdown) -->
          <div
              class="relative"
              @mouseenter="aboutHover = true"
              @mouseleave="aboutHover = false"
          >
            <button
                class="inline-flex items-center gap-1 hover:underline"
                :aria-expanded="aboutHover ? 'true' : 'false'"
                aria-haspopup="menu"
            >
              About
              <span class="text-slate-400">▾</span>
            </button>
            <div
                v-show="aboutHover"
                class="absolute left-0 top-full w-44 rounded-lg bg-[#0f1a2c] border border-slate-700 shadow-lg py-2"
                role="menu"
            >
              <a href="/#about" class="block px-3 py-2 hover:bg-white/5" role="menuitem">
                About Me
              </a>
              <a href="/#vision" class="block px-3 py-2 hover:bg-white/5" role="menuitem">
                Vision
              </a>
            </div>
          </div>



          <!-- Services (top-level) -->
          <a href="/#services" class="hover:underline">Services</a>

          <!-- Enneagram (top-level) -->
          <a href="/#enneagram" class="hover:underline">Enneagram</a>

          <!-- Resources (dropdown) -->
          <div
              class="relative"
              @mouseenter="resourcesHover = true"
              @mouseleave="resourcesHover = false"
          >
            <button
                class="inline-flex items-center gap-1 hover:underline"
                :aria-expanded="resourcesHover ? 'true' : 'false'"
                aria-haspopup="menu"
            >
              Resources
              <span class="text-slate-400">▾</span>
            </button>
            <div
                v-show="resourcesHover"
                class="absolute left-0 top-full w-56 rounded-lg bg-[#0f1a2c] border border-slate-700 shadow-lg py-2"
                role="menu"
            >
              <a
                  href="https://blog.robormiston.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block px-3 py-2 hover:bg-white/5"
                  role="menuitem"
              >
                Blog <span class="ml-1 text-slate-400">↗</span>
              </a>
            </div>
          </div>



        </nav>

        <!-- Right: Hamburger (mobile only) -->
        <div class="flex justify-end md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white" aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Mobile Navigation Dropdown (collapsible groups) -->
      <div v-if="isMenuOpen" class="md:hidden px-6 py-4 bg-midnight text-white space-y-2">
        <router-link to="/" class="block hover:underline" @click="isMenuOpen = false">Home</router-link>

        <!-- About collapsible -->
        <button
            class="w-full flex items-center justify-between py-2 text-left hover:underline"
            @click="aboutOpen = !aboutOpen"
            :aria-expanded="aboutOpen ? 'true' : 'false'"
        >
          <span>About</span>
          <span class="text-slate-400">{{ aboutOpen ? '▴' : '▾' }}</span>
        </button>
        <div v-show="aboutOpen" class="pl-3 space-y-1">
          <a href="/#about" class="block hover:underline" @click="closeMenu()">About Me</a>
          <a href="/#mission" class="block hover:underline" @click="closeMenu()">Mission</a>
        </div>

        <a href="/#services" class="block hover:underline" @click="closeMenu()">Services</a>
        <a href="/#enneagram" class="block hover:underline" @click="closeMenu()">Enneagram</a>

        <!-- Resources collapsible -->
        <button
            class="w-full flex items-center justify-between py-2 text-left hover:underline"
            @click="resourcesOpen = !resourcesOpen"
            :aria-expanded="resourcesOpen ? 'true' : 'false'"
        >
          <span>Resources</span>
          <span class="text-slate-400">{{ resourcesOpen ? '▴' : '▾' }}</span>
        </button>
        <div v-show="resourcesOpen" class="pl-3 space-y-1">
          <a
              href="https://blog.robormiston.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block hover:underline"
              @click="closeMenu"
          >Blog <span class="ml-1 text-slate-400">↗</span></a>
          <a
              href="https://blog.robormiston.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block hover:underline"
              @click="closeMenu"
          >Symbolic Insight <span class="ml-1 text-slate-400">↗</span></a>
        </div>

        <a
            href="https://calendly.com/robormiston/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            class="block mt-2 text-center px-3 py-2 rounded-md font-medium bg-[#b08d57] text-midnight"
            @click="closeMenu()"
        >Book</a>
      </div>

      <!-- Hero -->
      <section role="banner" aria-label="Hero"
               class="pt-20 pb-12 px-6 text-center max-w-2xl mx-auto bg-midnight text-white">

        <h1 class="text-5xl font-cormorant font-semibold mb-6 tracking-tight leading-tight">
          Trauma-Informed Psychotherapy & Counselling
        </h1>

        <p class="text-lg text-slate-300 mb-8 leading-relaxed font-inter">
          Creating a safe, clear space where healing from trauma unfolds. Here,
          complexity is met with patience and precision—helping you build
          resilience, regain balance, and move forward with confidence.
          <span class="block mt-3">
      My approach is reflective and symbolic, grounded in lived experience,
      providing clients with clarity, containment, and genuine connection.
    </span>
        </p>

        <div class="flex flex-col items-center gap-3">
          <a
              aria-label="Email Rob to get in touch"
              href="mailto:discover@heliosynthesis.org?subject=Hello%20Rob&body=Hi%20Rob,%0D%0A%0D%0AI%27d%20like%20to%20get%20in%20touch%20to%20explore%20your%20work.%20Looking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,"
              class="inline-flex items-center justify-center rounded-xl bg-periwinkle px-5 py-3 font-medium text-midnight hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-periwinkle/60 transition"
          >
            Get in Touch →
          </a>

          <a
              href="#how-i-work"
              class="text-periwinkle/90 hover:text-periwinkle underline-offset-4 hover:underline"
          >

            How I Work
          </a>
        </div>
      </section>




      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- About -->
      <section id="about" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
        <div class="flex flex-col md:flex-row items-start gap-10">
          <!-- Text -->
          <div class="md:w-2/3 text-center md:text-left flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-display font-semibold mb-4">About Me</h3>

              <p class="mb-4 text-slate-300">
                I’m a psychotherapist and the founder of Heliosynthesis, with over 25 years
                of experience in mental health, including clinical leadership roles within
                the NHS. My work focuses on trauma, memory, and meaning — helping people
                make sense of their experiences and reconnect with resilience.
              </p>

              <p class="text-slate-300">
                I am IFS- and EMDR-informed. My approach is reflective and symbolic,
                grounded in lived experience — offering clarity, containment,
                and genuine connection.
              </p>
            </div>

            <!-- Collapsible extras -->
            <details class="mt-6">
              <summary class="cursor-pointer text-periwinkle underline-offset-4 hover:underline">
                Credentials
              </summary>
              <ul class="mt-2 text-sm text-slate-400 list-disc pl-5 space-y-1">
                <li>Training: Syzygy Institute</li>
                <li>Registered Mental Health Nurse</li>
                <li>Member: British Association for Counselling and Psychotherapy (BACP)</li>
                <li>Planning committees: International Humanities Conference (humanistic)</li>
              </ul>
            </details>
          </div>

          <!-- Image -->
          <div class="md:w-1/3 mt-4 md:self-start">
            <img
                src="/src/assets/rob-placeholder.jpg"
                alt="Rob Ormiston portrait"
                class="w-48 h-64 rounded-lg mx-auto md:mx-0 shadow-md border border-slate-700 object-cover"
            />
          </div>
        </div>
      </section>



      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />
      <!-- How I Work -->
      <section id="how-i-work" class="py-20 px-6 max-w-3xl mx-auto text-slate-200">
        <h2 class="text-3xl font-display font-semibold mb-8 text-center">
          How I Work
        </h2>

        <div class="space-y-8 text-slate-300 leading-relaxed font-inter">
          <div>
            <h3 class="text-xl font-semibold text-periwinkle mb-2">A Safe and Steady Space</h3>
            <p>
              Healing from trauma begins with safety. Our work together takes place in a clear and contained space, where your pace is respected and your experiences are met without judgment. The foundation is trust — building a relationship where you feel steady enough to explore what matters most.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-periwinkle mb-2">Working with All Parts of You</h3>
            <p>
              We all carry different “parts” — protective sides, vulnerable places, and hidden strengths. In therapy, we explore these gently, helping them find balance rather than conflict. This approach allows for deeper self-understanding and lasting change, without forcing or rushing the process.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-periwinkle mb-2">Making Meaning Together</h3>
            <p>
              Beyond coping, therapy can also be about meaning. We look at patterns, symbols, and the story your life is telling — finding clarity in complexity, and helping you connect with a deeper sense of purpose and direction.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-periwinkle mb-2">Thoughtful Use of Tools</h3>
            <p>
              For clients who wish, I make careful use of modern tools — including AI summaries and reflections — to help you see your progress more clearly between sessions. These are always optional, and our work remains centered on the human relationship between us.
            </p>
          </div>
        </div>
      </section>
      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Client Reflections -->
      <section class="py-20 px-6 max-w-6xl mx-auto text-slate-200">
        <p class="text-center text-sm uppercase tracking-wide text-slate-400 mb-2">
          Words from clients
        </p>
        <h3 class="text-2xl font-display font-semibold mb-6 text-center">
          Client Reflections
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-slate-300">
          <!-- 1 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            "Rob helped me reconnect with parts of myself I’d long forgotten. The work was profound ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— S.R., 2024</footer>
          </blockquote>

          <!-- 2 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            "Rob’s approach unlocked a whole new perspective. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— A.M., 2023</footer>
          </blockquote>

          <!-- 3 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            "Rob is the best therapist I have met in 10 years. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— J.L., 2022</footer>
          </blockquote>

          <!-- 4 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            "I felt genuinely seen and safe to explore tough stuff. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— K.T., 2024</footer>
          </blockquote>

          <!-- 5 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            "The blend of clarity and compassion changed my day-to-day. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— P.N., 2023</footer>
          </blockquote>

          <!-- 6 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <svg class="w-6 h-6 text-periwinkle opacity-30 absolute -top-3 -left-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.17 6.6C6.1 7.69 5.57 9.05 5.57 10.68c0 2.32 1.01 4.01 3.03 5.08L8.6 17.3c-3.02-1.16-4.53-3.38-4.53-6.58 0-1.8.6-3.36 1.8-4.68C7.07 4.83 8.8 4 10.8 4v2.4c-1.34 0-2.47.43-3.63 1.2z"/>
            </svg>
            "I left every session lighter and more resourced. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— D.W., 2022</footer>
          </blockquote>
        </div>

        <div class="text-center mt-8">
          <a
              href="mailto:discover@heliosynthesis.org?subject=Hello%20Rob&body=Hi%20Rob,%0D%0A%0D%0AI%27d%20like%20to%20get%20in%20touch%20to%20explore%20your%20work.%20Looking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,"
              class="text-periwinkle hover:underline"
          >Get in Touch →</a>
        </div>
      </section>



      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Services -->
      <section id="services" class="py-20 px-6 bg-celestial text-slate-100 text-center">
        <h3 class="text-2xl font-display font-semibold mb-6">
          Therapeutic Modalities
        </h3>
        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div class="p-6 border border-slate-600 rounded-xl bg-midnight">
            <h4 class="font-semibold mb-2 text-lg">IFS Therapy</h4>
            <p class="text-sm leading-relaxed">
              Parts work for emotional clarity, inner alignment, and compassionate
              self-leadership.
            </p>
          </div>
          <div class="p-6 border border-slate-600 rounded-xl bg-midnight">
            <h4 class="font-semibold mb-2 text-lg">EMDR Processing</h4>
            <p class="text-sm leading-relaxed">
              Structured trauma resolution through memory reconsolidation and
              integration.
            </p>
          </div>
          <div class="p-6 border border-slate-600 rounded-xl bg-midnight">
            <h4 class="font-semibold mb-2 text-lg">Reflective Supervision</h4>
            <p class="text-sm leading-relaxed">
              Depth-oriented clinical supervision for therapists working symbolically
              or with complex trauma.
            </p>
          </div>
        </div>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Enneagram Section -->
      <section id="enneagram" class="py-20 px-6 max-w-4xl mx-auto text-slate-200">
        <h3 class="text-3xl font-display font-semibold mb-4 text-center">
          Understanding the Enneagram
        </h3>
        <p class="text-lg text-slate-300 leading-relaxed mb-4">
          The Enneagram is an ancient yet evolving system of personality patterns
          — mapping nine core motivations, fears, and transformation paths. Each
          type reflects a unique lens through which individuals perceive and respond
          to the world.
        </p>
        <p class="text-lg text-slate-300 leading-relaxed mb-4">
          Its roots trace through Sufi traditions, early Christian mysticism, and
          modern psychology. Today, it bridges spiritual insight with psychological
          depth — often used in therapeutic, relational, and leadership contexts.
        </p>
        <p class="text-lg text-slate-300 leading-relaxed">
          In our work, the Enneagram offers not a box but a mirror — helping
          individuals see their patterns clearly and soften into greater
          integration. This is part of the symbolic synthesis you’ll experience in
          your personality report.
        </p>
      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Vision Section -->
      <section id="vision" class="max-w-3xl mx-auto py-20 px-6 space-y-10">
        <img
            :src="stressed"
            alt="Therapist holding complexity"
            class="rounded-lg w-full h-48 object-cover mb-8"
        />

        <h1 class="text-5xl font-cormorant font-semibold text-slate-200 text-center">
          Vision
        </h1>

        <p class="text-lg leading-relaxed text-slate-200">
          Psychotherapy is demanding work. Therapists hold complex stories, carry the weight of trauma,
          and offer presence where it is most needed. Our vision is to create tools that honour this
          depth of care while making the work lighter to hold.
        </p>

        <p class="text-lg leading-relaxed text-slate-200">
          We are building an integrated platform designed for psychotherapists and clinicians. It brings
          together scheduling, billing, secure client access, and thoughtful use of AI — not to replace
          the human relationship, but to reduce administrative burden and give more space for what matters
          most: the therapy itself.
        </p>

        <p class="text-lg leading-relaxed text-slate-200">
          With features for supervision, governance, and reflection, the platform aims to support both
          clinical practice and therapist well-being. The
          <a
              href="https://heliosynthesis.org"
              target="_blank"
              rel="noopener noreferrer"
              class="underline text-indigo-400 hover:text-indigo-600"
          >
            fun personality assessment
          </a>
          you may have tried offers a glimpse of what is possible — how AI can help illuminate patterns
          and deepen reflection, always under the guidance of the therapist.
        </p>

        <p class="text-lg leading-relaxed text-slate-200">
          In a world shaped by conflict, crisis, and rising trauma, accessible and sustainable mental
          health care is more important than ever. By combining clinical wisdom with evolving technology,
          we hope to build a future where therapists can thrive, and clients can receive care that is
          both compassionate and enduring.
        </p>
      </section>



      <!-- Footer -->
      <div class="flex justify-center items-center mt-4 space-x-2">
        <span class="text-slate-500">Registered Member of</span>
        <a
            href="https://www.bacp.co.uk/"
            target="_blank"
            rel="noopener"
            class="inline-block"
        >
          <img
              src="/src/assets/BACP.png"
              alt="BACP Logo"
              class="h-6 md:h-8 object-contain"
          />
        </a>
      </div>

      <footer class="py-6 text-center text-sm text-slate-600 bg-midnight space-y-2">
        <div>
          <a href="mailto:discover@heliosynthesis.org" class="hover:underline">discover@heliosynthesis.org</a>
        </div>
        <div class="space-x-4">
          <a
              href="https://www.linkedin.com/in/chrysalistherapyservices"
              target="_blank"
              class="hover:underline"
          >LinkedIn</a>
          <a
              href="https://www.facebook.com/profile.php?id=61555851054901&sk=about_contact_and_basic_info"
              target="_blank"
              class="hover:underline"
          >Facebook</a>
        </div>
        <div>© 2025 Rob Ormiston. All rights reserved.</div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import stressed from '../assets/stressed.jpg'
import MandorlaDivider from '../components/MandorlaDivider.vue'

const showName = ref(false)
const isMenuOpen = ref(false)
const windowWidth = ref(window.innerWidth)

// Desktop dropdown hovers
const aboutHover = ref(false)
const resourcesHover = ref(false)

// Mobile collapsibles
const aboutOpen = ref(false)
const resourcesOpen = ref(false)

onMounted(() => {
  setTimeout(() => { showName.value = true }, 300)
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

function openBuyMeACoffee() {
  window.open('https://buymeacoffee.com/heliosynth', '_blank')
}

function closeMenu() {
  isMenuOpen.value = false
  aboutOpen.value = false
  resourcesOpen.value = false
}
</script>
