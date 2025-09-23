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
      <header class="sticky top-0 z-50 px-6 py-4 bg-midnight bg-opacity-90 shadow-md">
        <div class="max-w-7xl mx-auto flex items-center justify-between w-full">

          <!-- Left: Logo + Name -->
          <div class="flex items-center space-x-4">
            <router-link to="/" class="flex items-center space-x-4">
              <img
                  src="/images/favmine.png"
                  alt="Rob Ormiston logo"
                  class="w-20 h-20 object-cover shrink-0"
              />
              <span class="text-xl md:text-3xl font-garamond font-semibold text-white truncate">
          Rob Ormiston
        </span>
            </router-link>
          </div>

          <!-- Center: Navigation (desktop only) -->
          <nav
              v-if="!isMenuOpen && windowWidth >= 768"
              class="hidden md:flex items-center gap-6 text-sm justify-center flex-1"
          >
            <router-link to="/" class="hover:underline">Home</router-link>
            <router-link :to="{ hash: '#about' }" class="hover:underline">About</router-link>
            <router-link :to="{ hash: '#services' }" class="hover:underline">Services</router-link>
            <router-link :to="{ hash: '#enneagram' }" class="hover:underline">Enneagram</router-link>
          </nav>

          <!-- Right: Spacer (to balance layout) -->
          <div class="hidden md:block w-[152px]">&nbsp;</div> <!-- Adjust width as needed -->

          <!-- Mobile Hamburger -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-white" aria-label="Toggle menu">
              <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </header>




      <!-- Mobile Navigation -->
      <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-50 md:hidden px-6 py-6 bg-midnight text-white space-y-4 overflow-y-auto"
      >
        <router-link to="/" class="block hover:underline" @click="closeMenu()">Home</router-link>

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
          <a href="#about" class="block hover:underline" @click.prevent="navigateTo('#about')">About Me</a>
          <a href="#vision" class="block hover:underline" @click.prevent="navigateTo('#vision')">Vision</a>
        </div>

        <a href="#services" class="block hover:underline" @click.prevent="navigateTo('#services')">Services</a>
        <a href="#enneagram" class="block hover:underline" @click.prevent="navigateTo('#enneagram')">Enneagram</a>

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
              @click="closeMenu()"
          >Blog <span class="ml-1 text-slate-400">↗</span></a>
        </div>
      </div>


      <!-- Hero -->
      <section
          role="banner"
          aria-label="Hero"
          class="relative isolate overflow-hidden pt-10 pb-12 px-6 text-center max-w-2xl mx-auto bg-midnight text-white"
      >
        <!-- Cosmic background (always visible) -->
        <div class="absolute inset-0 z-0 pointer-events-none">
          <svg
              aria-hidden="true"
              focusable="false"
              role="presentation"
              viewBox="0 0 1200 600"
              class="h-full w-full opacity-35 md:opacity-40 mix-blend-screen"
              preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="nebula" cx="70%" cy="30%" r="60%">
                <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.55"/>
                <stop offset="40%" stop-color="#3b82f6" stop-opacity="0.28"/>
                <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="star" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
                <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
              </radialGradient>
            </defs>

            <!-- Nebula blobs -->
            <circle cx="880" cy="120" r="360" fill="url(#nebula)"/>
            <circle cx="320" cy="220" r="260" fill="url(#nebula)" opacity="0.4"/>

            <!-- Light spiral (galaxy arm) -->
            <path
                d="M950,160c-80,-40 -190,-30 -270,20c-110,70 -160,190 -140,250c20,60 120,40 200,-10
           c80,-50 140,-120 190,-180c30,-36 24,-64 20,-80z"
                fill="none"
                stroke="#a78bfa"
                stroke-opacity="0.35"
                stroke-width="2.5"
            />

            <!-- Stars -->
            <g fill="#e5e7eb" fill-opacity="0.95">
              <circle cx="180" cy="90" r="1.2"/>
              <circle cx="240" cy="140" r="1.2"/>
              <circle cx="520" cy="60" r="1.4"/>
              <circle cx="680" cy="210" r="1.2"/>
              <circle cx="1040" cy="80" r="1.4"/>
              <circle cx="980" cy="190" r="1.4"/>
              <circle cx="740" cy="320" r="1.2"/>
              <circle cx="420" cy="260" r="1.2"/>
              <circle cx="300" cy="330" r="1.2"/>
              <circle cx="1060" cy="260" r="1.2"/>
            </g>
            <g opacity="0.55">
              <circle cx="520" cy="60" r="12" fill="url(#star)"/>
              <circle cx="980" cy="190" r="14" fill="url(#star)"/>
              <circle cx="300" cy="330" r="11" fill="url(#star)"/>
            </g>
          </svg>
        </div>

        <!-- Readability overlay -->
        <div class="absolute inset-0 z-0 bg-gradient-to-b from-midnight/30 via-transparent to-midnight/50 pointer-events-none"></div>

        <!-- Content -->
        <div class="relative z-10">
          <h1 class="text-5xl font-cormorant font-semibold mb-6 tracking-tight leading-tight">
            Trauma-Informed Psychotherapy & Counselling
          </h1>
          <p class="text-lg text-slate-300 mb-8 leading-relaxed font-inter">
            Creating a safe, clear space where healing from trauma unfolds. Here,
            complexity is met with patience and precision—helping you build resilience, regain balance,
            and move forward with confidence.
            <span class="block mt-3">
        My approach is reflective and symbolic, grounded in lived experience, providing clients
        with clarity, containment, and genuine connection.
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
            <router-link
                :to="{ hash: '#how-i-work' }"
                class="text-periwinkle/90 hover:text-periwinkle underline-offset-4 hover:underline"
            >
              How I Work
            </router-link>
          </div>
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

          <!-- Image wrapper with enforced full width + flex centering -->
          <div class="w-full md:w-1/3 mt-4 flex justify-center md:justify-start">
            <img
                src="/images/rob-placeholder.jpg"
                alt="Rob Ormiston portrait"
                width="192"
                height="256"
                loading="lazy"
                class="w-48 h-64 rounded-lg shadow-md border border-slate-700 object-cover"
            />
          </div>


        </div>
      </section>

      <MandorlaDivider class="text-periwinkle/90 my-8" />


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
            "Rob helped me reconnect with parts of myself I’d long forgotten. The work was profound ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— S.R., 2024</footer>
          </blockquote>

          <!-- 2 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            "Rob’s approach unlocked a whole new perspective. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— A.M., 2023</footer>
          </blockquote>

          <!-- 3 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            "Rob is the best therapist I have met in 10 years. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— J.L., 2022</footer>
          </blockquote>

          <!-- 4 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            "I felt genuinely seen and safe to explore tough stuff. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— K.T., 2024</footer>
          </blockquote>

          <!-- 5 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            "The blend of clarity and compassion changed my day-to-day. ⭐ ⭐ ⭐ ⭐ ⭐."
            <footer class="mt-3 text-sm text-slate-400">— P.N., 2023</footer>
          </blockquote>

          <!-- 6 -->
          <blockquote
              class="relative border-l-4 border-periwinkle/60 pl-4 italic bg-midnight/40 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
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
        <details class="mt-6 text-slate-300">
          <summary class="cursor-pointer text-periwinkle underline-offset-4 hover:underline text-base">
            Read More: Enneagram in Therapy
          </summary>
          <div class="mt-4 space-y-4 text-slate-400 text-base leading-relaxed">
            <p>
              The Enneagram describes not just who we are, but how we’ve adapted. Each type reflects a core motivational pattern — a lens through which we protect ourselves, pursue belonging, and organise meaning.
            </p>

            <p>
              In therapy, it becomes a subtle map — not of surface traits, but of *inner architecture*. It helps us notice which parts of us take the lead, what exiles may be hidden beneath them, and how we behave when we're stressed or safe. It works especially well alongside Internal Family Systems (IFS), offering a way to locate the system-level manager part and explore the stories it holds.
            </p>

            <p>
              Your type isn’t the whole story. It’s the lead instrument in a much larger orchestra. Our work together invites all the players to the stage — so you can hear the full music of your inner life.
            </p>
          </div>
        </details>

      </section>

      <MandorlaDivider class="text-periwinkle opacity-60 my-8" />

      <!-- Vision Section -->
      <section id="vision" class="max-w-3xl mx-auto py-20 px-6 space-y-10">
        <img
            src="/images/stressed.jpg"
            alt="Therapist holding complexity"
            width="1200" height="300"
            loading="lazy"
            class="rounded-lg w-full h-48 object-cover mb-8"
        />

        <h2 class="text-5xl font-cormorant font-semibold text-slate-200 text-center">
          Vision
        </h2>

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
      <footer class="flex flex-col items-center space-y-6 py-10 bg-midnight text-slate-300">
        <!-- Logos Row -->
        <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 text-center sm:text-left">
          <!-- BACP -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span class="text-sm">Registered Member of</span>
            <a href="https://www.bacp.co.uk/" target="_blank" rel="noopener noreferrer" class="inline-block">
              <img
                  src="/images/BACP.png"
                  alt="BACP Logo"
                  class="h-8 sm:h-10 mx-auto sm:mx-0 object-contain"
                  loading="lazy"
              />
            </a>
          </div>

          <!-- Syzygy -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span class="text-sm">Trained at</span>
            <a href="https://www.syzygyinstitute.com/" target="_blank" rel="noopener noreferrer" class="inline-block">
              <img
                  src="/images/syzergy.png"
                  alt="Syzygy Institute Logo"
                  class="h-8 sm:h-10 mx-auto sm:mx-0 object-contain"
                  loading="lazy"
              />
            </a>
          </div>

          <!-- University of Chichester -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span class="text-sm">Graduate of</span>
            <a href="https://www.chi.ac.uk/" target="_blank" rel="noopener noreferrer" class="inline-block">
              <img
                  src="/images/UC.png"
                  alt="University of Chichester Logo"
                  class="h-8 sm:h-10 mx-auto sm:mx-0 object-contain"
                  loading="lazy"
              />
            </a>
          </div>
        </div>

        <!-- Divider -->
        <hr class="w-full border-t border-slate-700/40 my-6" />

        <!-- Contact + Social -->
        <div class="text-center text-sm space-y-3">
          <div>
            <a href="mailto:discover@heliosynthesis.org" class="hover:underline text-slate-200">
              discover@heliosynthesis.org
            </a>
          </div>

          <div class="flex justify-center gap-6">
            <a
                href="https://www.linkedin.com/in/chrysalistherapyservices"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline text-slate-200"
            >
              LinkedIn
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=61555851054901&sk=about_contact_and_basic_info"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline text-slate-200"
            >
              Facebook
            </a>
          </div>

          <div class="text-slate-400">© 2025 Rob Ormiston. All rights reserved.</div>
        </div>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MandorlaDivider from '../components/MandorlaDivider.vue'

const showName = ref(false)
const isMenuOpen = ref(false)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

// Desktop dropdown hovers
const aboutHover = ref(false)
const resourcesHover = ref(false)

// Mobile collapsibles
const aboutOpen = ref(false)
const resourcesOpen = ref(false)

onMounted(() => {
  setTimeout(() => {
    showName.value = true
  }, 300)
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

function navigateTo(hash) {
  closeMenu()
  setTimeout(() => {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = hash
    }
  }, 200)
}
</script>

