// Full landing-page markup (faithful clone) rendered via dangerouslySetInnerHTML
// in app/page.js. Interactions live in app/Interactions.js.
export const MARKUP = `
  <!-- ============ BRAND LOGO SPRITE (defined once, reused via <use>) ============ -->
  <svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
    <!-- Figma -->
    <symbol id="l-figma" viewBox="-9.5 0 57 57">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"/>
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 11-19 0z"/>
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 100-19H19z"/>
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z"/>
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z"/>
    </symbol>

    <!-- WordPress -->
    <symbol id="l-wordpress" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" fill="#21759B"/>
      <path d="M5 7.6 7.75 16.6 12 10.2l4.25 6.4L19 7.6" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- React -->
    <symbol id="l-react" viewBox="-12 -10.5 24 21">
      <circle r="2.05" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" stroke-width="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g>
    </symbol>

    <!-- Next.js -->
    <symbol id="l-next" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11.5" fill="#000"/>
      <g fill="#fff"><rect x="8" y="7" width="1.7" height="10"/><rect x="14.3" y="7" width="1.7" height="10"/><path d="M8 7 16 17.2h-2L8 8.7Z"/></g>
    </symbol>

    <!-- Node.js -->
    <symbol id="l-node" viewBox="0 0 24 24">
      <path fill="#539E43" d="M12 1.8 20.6 6.9v10.2L12 22.2 3.4 17.1V6.9z"/>
      <g fill="#fff"><rect x="8.6" y="8" width="1.7" height="8"/><rect x="13.7" y="8" width="1.7" height="8"/><path d="M8.6 8 15.4 16h-1.6L8.6 9.6Z"/></g>
    </symbol>

    <!-- Google Search Console -->
    <symbol id="l-gsc" viewBox="0 0 24 24">
      <rect x="2.5" y="13" width="3.4" height="7" rx="1.2" fill="#4285F4"/>
      <rect x="7.6" y="9.5" width="3.4" height="10.5" rx="1.2" fill="#EA4335"/>
      <rect x="12.7" y="11.5" width="3.4" height="8.5" rx="1.2" fill="#FBBC04"/>
      <circle cx="17.6" cy="8" r="3.6" fill="none" stroke="#34A853" stroke-width="2.2"/>
      <line x1="20.2" y1="10.6" x2="22.4" y2="12.8" stroke="#34A853" stroke-width="2.2" stroke-linecap="round"/>
    </symbol>

    <!-- Google Analytics -->
    <symbol id="l-ga" viewBox="0 0 24 24">
      <rect x="14" y="2.5" width="7" height="19" rx="3.5" fill="#F9AB00"/>
      <rect x="3" y="12.5" width="7" height="9" rx="3.5" fill="#E37400"/>
      <circle cx="6.5" cy="8" r="3.6" fill="#E37400"/>
    </symbol>

    <!-- Claude (sunburst) -->
    <symbol id="l-claude" viewBox="0 0 24 24">
      <g fill="#D97757">
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(30 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(60 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(90 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(120 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(150 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(180 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(210 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(240 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(270 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(300 12 12)"/>
        <rect x="11.1" y="1.6" width="1.8" height="8.2" rx="0.9" transform="rotate(330 12 12)"/>
      </g>
    </symbol>

  </svg>

  <!-- ============ 1. NAV ============ -->
  <header class="nav-wrap">
    <div class="nav-pill" id="navPill">
      <div class="nav-glare" id="navGlare" aria-hidden="true"></div>
      <div class="nav-bar">
        <a href="#section-hero" class="nav-logo" aria-label="Pixsl Studio home">
          <span class="logo-mark"></span>
          Pixsl Studio
        </a>
        <div class="nav-burger-shell">
          <button class="nav-burger" id="navBurger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav class="nav-menu" id="navMenu" aria-label="Main">
        <div class="nav-menu-inner">
          <a class="nav-link" href="#section-services">Services <span class="idx">01</span></a>
          <a class="nav-link" href="#section-projects">Projects <span class="idx">02</span></a>
          <a class="nav-link" href="#section-pricing">Pricing <span class="idx">03</span></a>
          <a class="nav-link" href="#section-testimonials">Reviews <span class="idx">04</span></a>
          <a class="nav-link" href="#section-faqs">FAQs <span class="idx">05</span></a>
          <a class="nav-link" href="#section-contact">Contact <span class="idx">06</span></a>
          <a class="btn btn-glow nav-cta" href="#section-contact">Book A Call</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <!-- ============ 2. HERO ============ -->
    <section class="hero" id="section-hero">
      <video class="hero-video" id="heroVideo" autoplay muted loop playsinline aria-hidden="true">
        <source src="/assets/hero-smooth.mp4" type="video/mp4" />
      </video>
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container">
        <div class="hero-inner">
          <h1 class="reveal" style="--d:.08s">Your work is premium. Your website should prove it.</h1>
          <p class="hero-sub reveal" style="--d:.16s">Fast, clean, mobile-first website design for UAE home automation and built-environment firms. We put the install front and centre, so the right clients reach out.</p>
          <div class="hero-ctas reveal" style="--d:.24s">
            <a href="#section-contact" class="btn btn-glow">
              Book a Free Call
              <span class="icon-chip">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
            <a href="#section-projects" class="btn btn-light">See Projects</a>
          </div>

          <!-- ============ 3. APPS WE USE / LOGO MARQUEE ============ -->
          <div class="trusted reveal" style="--d:.32s">
            <span class="eyebrow">Apps &amp; tools we build with</span>
            <div class="marquee">
              <div class="marquee-track">
                <span class="logo-item"><svg class="logo-ic"><use href="#l-figma"/></svg><span class="logo-name">Figma</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-wordpress"/></svg><span class="logo-name">WordPress</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-next"/></svg><span class="logo-name">Next.js</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-react"/></svg><span class="logo-name">React.js</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-node"/></svg><span class="logo-name">Node.js</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-ga"/></svg><span class="logo-name">Google Analytics</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-gsc"/></svg><span class="logo-name">Google Search Console</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-claude"/></svg><span class="logo-name">Claude</span></span>
                <!-- duplicate set for continuous loop -->
                <span class="logo-item"><svg class="logo-ic"><use href="#l-figma"/></svg><span class="logo-name">Figma</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-wordpress"/></svg><span class="logo-name">WordPress</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-next"/></svg><span class="logo-name">Next.js</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-react"/></svg><span class="logo-name">React.js</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-node"/></svg><span class="logo-name">Node.js</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-ga"/></svg><span class="logo-name">Google Analytics</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-gsc"/></svg><span class="logo-name">Google Search Console</span></span>
                <span class="logo-item"><svg class="logo-ic"><use href="#l-claude"/></svg><span class="logo-name">Claude</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 5. STATS BENTO ============ -->
    <section class="stats" id="section-stats">
      <div class="container">
        <div class="section-head reveal">
          <h2>Pixsl Studio makes it simple,<span class="dim">and delivers results.</span></h2>
        </div>
        <div class="stats-grid">
          <div class="card stat-card reveal">
            <span class="stat-value"><span class="count" data-to="500" data-suffix="+">0+</span></span>
            <span class="stat-label">Successful projects delivered</span>
            <p>We build high-impact websites and digital experiences for startups and enterprises to scale fast</p>
          </div>
          <div class="card stat-card reveal" style="--d:.08s">
            <span class="stat-value"><span class="count" data-to="50" data-suffix="%">0%</span></span>
            <span class="stat-label">Increased in conversion rate</span>
            <p>Purpose-built digital experiences that elevate brands and increase conversion rates at every touchpoint.</p>
          </div>
          <div class="card stat-card cta-card reveal" style="--d:.16s">
            <h3>Let's build yours</h3>
            <p>A fixed quote, a Figma design you approve, and a site that is live in 10 to 14 days.</p>
            <a href="#section-contact" class="btn btn-red">Book a Free Call</a>
          </div>
          <div class="card stat-card reveal">
            <span class="stat-value"><span class="count" data-to="50" data-prefix="$" data-suffix="M+">$0M+</span></span>
            <span class="stat-label">Seed + series A funding</span>
            <p>Through strategic design, marketing, and conversion optimization, we've helped businesses scale faster.</p>
            <a class="stat-link" href="#section-testimonials">See our Awards
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
          <div class="card stat-card awards reveal" style="--d:.08s">
            <span class="stat-value"><span class="count" data-to="10" data-suffix="+">0+</span></span>
            <span class="stat-label">Awards recognition</span>
            <p>Industry recognition of our best work, we are literally the best at our craft</p>
            <div class="awards-list">
              <div class="award-row">
                <span class="award-name">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5.5L16 6l-4.5 3.8L13 16l-5-3.2L3 16l1.5-6.2L0 6l6-.5L8 0z"/></svg>
                  Site of the Day</span>
                <span class="award-year">Award - 2025</span>
              </div>
              <div class="award-row">
                <span class="award-name">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5.5L16 6l-4.5 3.8L13 16l-5-3.2L3 16l1.5-6.2L0 6l6-.5L8 0z"/></svg>
                  Best UI/UX</span>
                <span class="award-year">Award CS - 2022</span>
              </div>
              <div class="award-row">
                <span class="award-name">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5.5L16 6l-4.5 3.8L13 16l-5-3.2L3 16l1.5-6.2L0 6l6-.5L8 0z"/></svg>
                  Site Honors Award</span>
                <span class="award-year">FWA - 2024</span>
              </div>
              <div class="award-row">
                <span class="award-name">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5.5L16 6l-4.5 3.8L13 16l-5-3.2L3 16l1.5-6.2L0 6l6-.5L8 0z"/></svg>
                  Interaction Design Feature</span>
                <span class="award-year">Behance - 2021</span>
              </div>
              <div class="award-row">
                <span class="award-name">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5.5L16 6l-4.5 3.8L13 16l-5-3.2L3 16l1.5-6.2L0 6l6-.5L8 0z"/></svg>
                  Award Name here</span>
                <span class="award-year">Year of the Award</span>
              </div>
              <div class="award-row">
                <span class="award-name">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5.5L16 6l-4.5 3.8L13 16l-5-3.2L3 16l1.5-6.2L0 6l6-.5L8 0z"/></svg>
                  Award Name here</span>
                <span class="award-year">Year of the Award</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 6. SERVICES (pinned scroll) ============ -->
    <section class="services" id="section-services">
      <div class="services-sticky">
        <div class="container">
          <div class="services-top">
            <div class="section-head left" style="margin-bottom:0">
              <h2>Website design that sells the install.<span class="dim">Four services, one studio.</span></h2>
            </div>
            <a href="#section-contact" class="btn btn-dark">Start A Project</a>
          </div>
          <div class="services-body">
            <div class="service-list" id="serviceList">
              <div class="service-item active" data-index="0">
                <button class="service-head" aria-expanded="true">
                  <span class="service-title"><span class="service-num">01</span> Signature Website</span>
                  <span class="service-chevron">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                </button>
                <div class="service-panel"><div>
                  <p>A new 5 to 7 page site on WordPress or Next.js that puts your installs front and centre: project galleries, a mobile-first build, on-page SEO with GA and GSC, and a lead form that routes enquiries straight to your inbox. Designed in Figma first, live in 10 to 14 days.</p>
                </div></div>
              </div>
              <div class="service-item" data-index="1">
                <button class="service-head" aria-expanded="false">
                  <span class="service-title"><span class="service-num">02</span> Website Rescue / Rebuild</span>
                  <span class="service-chevron">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                </button>
                <div class="service-panel"><div>
                  <p>Your projects moved on and your website did not. We rebuild it with your best work above the fold, fix the page-speed and mobile scores, and wire in analytics and lead capture. Same Figma-first process, 10 to 14 days.</p>
                </div></div>
              </div>
              <div class="service-item" data-index="2">
                <button class="service-head" aria-expanded="false">
                  <span class="service-title"><span class="service-num">03</span> Ecommerce Website</span>
                  <span class="service-chevron">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                </button>
                <div class="service-panel"><div>
                  <p>Sell smart-home kit and hardware online. Product catalogue and galleries, payments and checkout, enquiry capture, and search-ready pages, built on WooCommerce or Next.js.</p>
                </div></div>
              </div>
              <div class="service-item" data-index="3">
                <button class="service-head" aria-expanded="false">
                  <span class="service-title"><span class="service-num">04</span> Website Care Retainer</span>
                  <span class="service-chevron">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                </button>
                <div class="service-panel"><div>
                  <p>Your site, kept healthy month after month: managed hosting, maintenance with a set response window, content and gallery updates as new projects ship, uptime and page-speed monitoring, and a monthly check-in.</p>
                </div></div>
              </div>
            </div>
            <div class="service-visual" id="serviceVisual">
              <div class="visual-slide active">
                <div class="ph"><span class="ph-label">Signature Website</span></div>
                <span class="visual-chip">Figma-first · 10-14 days</span>
              </div>
              <div class="visual-slide">
                <div class="ph" style="background:linear-gradient(135deg,#dfe2e7,#f6f7f8 50%,#e8eaee)"><span class="ph-label">Website Rescue</span></div>
                <span class="visual-chip">Redesign · Speed fixed</span>
              </div>
              <div class="visual-slide">
                <div class="ph" style="background:linear-gradient(150deg,#e8eaee,#eef0f3 55%,#dfe2e7)"><span class="ph-label">Ecommerce Website</span></div>
                <span class="visual-chip">Catalogue · Checkout</span>
              </div>
              <div class="visual-slide">
                <div class="ph" style="background:linear-gradient(120deg,#eef0f3,#e2e5ea 60%,#f6f7f8)"><span class="ph-label">Website Care</span></div>
                <span class="visual-chip">Monthly · No lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 7. PROJECTS ============ -->
    <section class="projects" id="section-projects">
      <div class="container">
        <div class="section-head reveal">
          <h2>Here's what<span class="dim">the momentum looks like.</span></h2>
        </div>
        <div class="projects-grid">
          <a href="#section-projects" class="project-card reveal">
            <div class="project-media"><div class="ph"><span class="ph-label">Atlas Technologies</span></div></div>
            <div class="project-row">
              <span class="project-name">Atlas Technologies</span>
              <span class="project-arrow"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
          </a>
          <a href="#section-projects" class="project-card reveal" style="--d:.08s">
            <div class="project-media"><div class="ph" style="background:linear-gradient(135deg,#e2e5ea,#f3f4f6 55%,#e8eaee)"><span class="ph-label">Finlytics</span></div></div>
            <div class="project-row">
              <span class="project-name">Finlytics</span>
              <span class="project-arrow"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
          </a>
          <a href="#section-projects" class="project-card reveal">
            <div class="project-media"><div class="ph" style="background:linear-gradient(150deg,#eef0f3,#dfe2e7 60%,#f6f7f8)"><span class="ph-label">Orbital Bank</span></div></div>
            <div class="project-row">
              <span class="project-name">Orbital Bank</span>
              <span class="project-arrow"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
          </a>
          <a href="#section-projects" class="project-card reveal" style="--d:.08s">
            <div class="project-media"><div class="ph" style="background:linear-gradient(120deg,#e8eaee,#f6f7f8 45%,#e2e5ea)"><span class="ph-label">Echo Analytics</span></div></div>
            <div class="project-row">
              <span class="project-name">Echo Analytics</span>
              <span class="project-arrow"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
          </a>
          <a href="#section-projects" class="project-card reveal">
            <div class="project-media"><div class="ph" style="background:linear-gradient(160deg,#f3f4f6,#e2e5ea 55%,#eef0f3)"><span class="ph-label">Nova Commerce</span></div></div>
            <div class="project-row">
              <span class="project-name">Nova Commerce</span>
              <span class="project-arrow"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
          </a>
          <a href="#section-projects" class="project-card reveal" style="--d:.08s">
            <div class="project-media"><div class="ph" style="background:linear-gradient(140deg,#dfe2e7,#eef0f3 50%,#f6f7f8)"><span class="ph-label">StudioZ</span></div></div>
            <div class="project-row">
              <span class="project-name">StudioZ</span>
              <span class="project-arrow"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
          </a>
        </div>
        <div class="projects-more reveal">
          <a href="#section-projects" class="btn btn-light">View All Projects</a>
        </div>
      </div>
    </section>

    <!-- ============ 8. PROCESS ============ -->
    <section class="process" id="section-process">
      <div class="container">
        <div class="section-head reveal">
          <h2>A web design process that respects your time.<span class="dim">Days, not months.</span></h2>
          <p class="sub">You approve the design in Figma before we write a line of code, so the build stays fast and there are no surprises at launch.</p>
        </div>
        <div class="process-grid">
          <div class="card process-card reveal">
            <span class="process-num">01</span>
            <h3>Discovery &amp; Scope</h3>
            <p>A short call about your projects, your clients, and what a good enquiry looks like. You get a fixed quote and a clear scope.</p>
            <div class="process-visual pv-strategy">
              <div class="pv-rings">
                <i></i><i></i><i></i>
                <span class="pv-core">◎</span>
                <span class="pv-sat" style="top:-4px;left:78px">🎯</span>
                <span class="pv-sat" style="top:66px;left:-10px">👥</span>
                <span class="pv-sat" style="top:66px;right:-10px">📈</span>
                <span class="pv-sat" style="bottom:-4px;left:78px">💡</span>
              </div>
            </div>
          </div>
          <div class="card process-card reveal" style="--d:.08s">
            <span class="process-num">02</span>
            <h3>Design in Figma</h3>
            <p>You see the full design first and approve it before any build. Changes happen here, where they are quick and cheap.</p>
            <div class="process-visual pv-design">
              <div class="pv-frame"><i class="hero-block"></i><i></i><i class="half"></i><i></i></div>
              <div class="pv-frame mid"><i class="hero-block"></i><i></i><i></i><i class="half"></i></div>
              <div class="pv-frame"><i class="hero-block"></i><i class="half"></i><i></i><i></i></div>
            </div>
          </div>
          <div class="card process-card reveal">
            <span class="process-num">03</span>
            <h3>Build &amp; Launch</h3>
            <p>We build the approved design, connect analytics and lead capture, and put your best installs front and centre.</p>
            <div class="process-visual pv-code">
              <span class="c-dim">Project path</span><br />
              <span class="c-red">/pixsl-studio/</span>Launch.md<br />
              <span class="c-dim">status:</span> <span class="c-green">ready ✓</span><br />
              <span class="pv-deploy">&lt; Deploy &gt;</span>
            </div>
          </div>
          <div class="card process-card reveal" style="--d:.08s">
            <span class="process-num">04</span>
            <h3>Handover &amp; Care</h3>
            <p>You own everything: domain, code, content, and accounts. Stay on a care retainer or take the keys, with no lock-in.</p>
            <div class="process-visual pv-scale">
              <div class="pv-metric">
                <div class="m-val">90+</div>
                <div class="m-label">Mobile speed score</div>
              </div>
              <div class="pv-bars">
                <i style="--h:22"></i><i style="--h:34"></i><i style="--h:28"></i><i style="--h:46"></i><i style="--h:58"></i><i class="hot" style="--h:72"></i><i class="hot" style="--h:92"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="cta-banner reveal">
          <div class="banner-inner">
            <div>
              <h3>Let's put your best work online.</h3>
              <p>Book a discovery call. If we are not the right fit, we will say so on the call.</p>
            </div>
            <a href="#section-contact" class="btn btn-red">Book a Free Call</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 9. PRICING ============ -->
    <section class="pricing" id="section-pricing">
      <div class="container">
        <div class="section-head reveal">
          <h2>Web design pricing, quoted in AED.<span class="dim">Pick the build that fits.</span></h2>
          <p class="sub">Every project starts with a fixed quote after a short call. No hourly billing, no surprise invoices.</p>
          <div class="service-pills" id="currencySwitch" role="group" aria-label="Choose currency" style="justify-content:center;margin-top:20px">
            <button type="button" class="pill-opt selected" data-cur="aed">AED</button>
            <button type="button" class="pill-opt" data-cur="usd">USD</button>
            <button type="button" class="pill-opt" data-cur="eur">EUR</button>
            <button type="button" class="pill-opt" data-cur="inr">INR</button>
          </div>
        </div>
        <div class="pricing-grid">
          <div class="card price-card reveal">
            <span class="plan-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="2.5" width="15" height="15" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M2.5 7.5h15M7.5 7.5v10" stroke="currentColor" stroke-width="1.5"/></svg>
            </span>
            <h3 class="plan-name">Website Rescue</h3>
            <p class="plan-desc">For firms whose site is old, slow, or thin. We rebuild it around the projects you run now.</p>
            <div class="plan-price">
              <span class="amount">Custom</span>
              <span class="period">Quoted after a site review</span>
            </div>
            <a href="#section-contact" class="btn btn-dark">Book a Free Call</a>
            <ul class="plan-features">
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Your best projects above the fold</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Before and after proof of the rebuild</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Page-speed and mobile scores fixed</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>On-page SEO, GA and GSC set up</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Lead-capture form</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Design approved in Figma before build</li>
            </ul>
            <div class="plan-addon">
              <span>Add Website Care Retainer</span>
              <span class="addon-price">Custom / mo</span>
            </div>
          </div>

          <div class="card price-card featured-plan reveal" style="--d:.08s">
            <span class="plan-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.4 5.2L18 8l-4.2 3.8L15 18l-5-3-5 3 1.2-6.2L2 8l5.6-.8L10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
            </span>
            <h3 class="plan-name">Signature Website <span class="plan-badge">Flagship</span></h3>
            <p class="plan-desc">A new 5 to 7 page site that makes your installs the hero and turns visits into discovery calls.</p>
            <div class="plan-price">
              <span class="amount"><span class="count" data-money data-to="4000" data-prefix="AED " data-aed="4000" data-usd="1100" data-eur="1000" data-inr="95000">AED 0</span></span>
              <span class="period">Starting price</span>
            </div>
            <a href="#section-contact" class="btn btn-red">Book a Free Call</a>
            <ul class="plan-features">
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>5 to 7 pages, WordPress or Next.js</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Project galleries built for visual trades</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Mobile-first build</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>On-page SEO, GA and GSC set up</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Lead form wired to your inbox</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>1 month hosting included</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Design approved in Figma before code</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Live in 10 to 14 days</li>
            </ul>
          </div>

          <div class="card price-card reveal" style="--d:.16s">
            <span class="plan-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.5"/><path d="M10 5.5V10l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </span>
            <h3 class="plan-name">Ecommerce Website</h3>
            <p class="plan-desc">For firms selling smart-home kit and hardware. Catalogue, checkout, and enquiries in one place.</p>
            <div class="plan-price">
              <span class="amount">Custom</span>
              <span class="period">Quoted per project</span>
            </div>
            <a href="#section-contact" class="btn btn-dark">Book a Free Call</a>
            <ul class="plan-features">
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Product catalogue and galleries</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Payments and checkout</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>WooCommerce or Next.js</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Mobile-optimised storefront</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>On-page SEO, GA and GSC set up</li>
              <li><span class="check"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Enquiry capture</li>
            </ul>
            <div class="plan-addon">
              <span>Add Website Care Retainer</span>
              <span class="addon-price">Custom / mo</span>
            </div>
          </div>
        </div>

        <div class="pricing-note">
          <div class="card mini-quote reveal">
            <div class="mq-stat">62%</div>
            <div class="mq-statlabel">increase in mobile traffic retention</div>
            <p class="mq-text">Pixsl Studio completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.</p>
            <div class="mq-person">
              <span class="avatar">JO</span>
              <div>
                <div class="mq-name">Julian Ortega</div>
                <div class="mq-role">CEO</div>
              </div>
            </div>
          </div>
          <div class="card mini-cta reveal">
            <div>
              <h4>Keep it healthy after launch.</h4>
              <p>The Website Care Retainer covers managed hosting, maintenance with a set response window, monthly gallery updates, page-speed monitoring, and a monthly check-in.</p>
            </div>
            <a href="#section-contact" class="btn btn-dark">Book a Call</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 10. TESTIMONIALS ============ -->
    <section class="testimonials" id="section-testimonials">
      <div class="container">
        <div class="section-head reveal">
          <h2>We're loved.<span class="dim">Just success stories.</span></h2>
        </div>
        <div class="testimonials-grid">
          <div class="card t-card reveal">
            <div class="t-stat">3.1×</div>
            <div class="t-statlabel">increase in qualified leads</div>
            <p class="t-text">We launched our new site in under three weeks and saw results almost immediately. The design felt premium from day one, exactly what we needed to stand out in a crowded market.</p>
            <div class="t-person">
              <span class="avatar">MG</span>
              <div>
                <div class="t-name">Melissa Gomez</div>
                <div class="t-role">Co-Founder</div>
              </div>
            </div>
          </div>
          <div class="card t-card reveal" style="--d:.06s">
            <div class="t-stat">41%</div>
            <div class="t-statlabel">reduction in drop-off rate</div>
            <p class="t-text">From the first call, the team just got it. They redesigned our entire funnel and the impact was immediate: more signups, lower drop-off, and a brand that finally matched our ambition.</p>
            <div class="t-person">
              <span class="avatar">GA</span>
              <div>
                <div class="t-name">George Adams</div>
                <div class="t-role">CEO</div>
              </div>
            </div>
          </div>
          <div class="card t-card reveal" style="--d:.12s">
            <div class="t-stat">2.3×</div>
            <div class="t-statlabel">increase in lead conversion</div>
            <p class="t-text">Pixsl Studio completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.</p>
            <div class="t-person">
              <span class="avatar">SC</span>
              <div>
                <div class="t-name">Sarah Coleman</div>
                <div class="t-role">CMO</div>
              </div>
            </div>
          </div>
          <div class="card t-card reveal">
            <div class="t-stat">45%</div>
            <div class="t-statlabel">Reduced bounce rate</div>
            <p class="t-text">The team at Pixsl Studio not only built us a beautiful platform, they made it fast, smart, and incredibly intuitive. Their UX insights and performance tweaks made a huge difference in keeping users engaged.</p>
            <div class="t-person">
              <span class="avatar">ML</span>
              <div>
                <div class="t-name">Marcus Levine</div>
                <div class="t-role">Co-founder</div>
              </div>
            </div>
          </div>
          <div class="card t-card reveal" style="--d:.06s">
            <div class="t-stat">62%</div>
            <div class="t-statlabel">increase in mobile traffic retention</div>
            <p class="t-text">Pixsl Studio completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.</p>
            <div class="t-person">
              <span class="avatar">JO</span>
              <div>
                <div class="t-name">Julian Ortega</div>
                <div class="t-role">CEO</div>
              </div>
            </div>
          </div>
          <div class="card t-card reveal" style="--d:.12s">
            <div class="t-stat">3x</div>
            <div class="t-statlabel">faster MVP launch</div>
            <p class="t-text">Working with Pixsl Studio helped us cut our launch timeline dramatically. They understand product goals and build with both speed and precision. Easily one of the best agencies we've worked with.</p>
            <div class="t-person">
              <span class="avatar">AK</span>
              <div>
                <div class="t-name">Amina Khatri</div>
                <div class="t-role">Head of Product</div>
              </div>
            </div>
          </div>
          <div class="card t-card t-you reveal" style="--d:.18s">
            <div class="t-stat">You?</div>
            <p>Your installs could be the next story here. Book a discovery call and find out.</p>
            <a href="#section-contact" class="btn btn-red">Book a Free Call</a>
          </div>
        </div>
        <div class="reviews-footer reveal">
          <div class="avatar-stack">
            <span class="avatar">MG</span><span class="avatar">GA</span><span class="avatar">SC</span><span class="avatar">ML</span><span class="avatar">AK</span>
          </div>
          <div>
            <div class="stars">★★★★★</div>
            <div class="reviews-label">From 1500+ reviews</div>
          </div>
          <a href="#section-testimonials" class="btn btn-light">View All Reviews</a>
        </div>
      </div>
    </section>

    <!-- ============ 11. WHY US / COMPARISON ============ -->
    <section class="whyus" id="section-whyus">
      <div class="container">
        <div class="section-head reveal">
          <h2>Why work with us?<span class="dim">See it side by side.</span></h2>
          <p class="sub">What you get with Pixsl Studio, next to the usual route.</p>
        </div>
        <div class="compare-label reveal">Your options side-by-side</div>
        <div class="card compare reveal">
          <div class="compare-head">
            <div></div>
            <div class="col-lamosa"><span class="logo-mark"></span> Pixsl Studio</div>
            <div>Typical agency / freelancer</div>
          </div>
          <div class="compare-row">
            <div class="crit">Fixed quote, AED-first.</div>
            <div class="good"><span class="mark yes"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>One number before we start</div>
            <div class="bad"><span class="mark no"><svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>Hourly billing and scope creep</div>
          </div>
          <div class="compare-row">
            <div class="crit">Live in 10 to 14 days.</div>
            <div class="good"><span class="mark yes"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Days, not months</div>
            <div class="bad"><span class="mark no"><svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>4 to 8 weeks, often more</div>
          </div>
          <div class="compare-row">
            <div class="crit">Design approved before code.</div>
            <div class="good"><span class="mark yes"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Full Figma design first</div>
            <div class="bad"><span class="mark no"><svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>First look after development</div>
          </div>
          <div class="compare-row">
            <div class="crit">Built around your portfolio.</div>
            <div class="good"><span class="mark yes"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Install photos front and centre</div>
            <div class="bad"><span class="mark no"><svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>Generic stock-photo layouts</div>
          </div>
          <div class="compare-row">
            <div class="crit">Measurable from day one.</div>
            <div class="good"><span class="mark yes"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>GA, GSC and lead tracking included</div>
            <div class="bad"><span class="mark no"><svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>Analytics as a paid extra</div>
          </div>
          <div class="compare-row">
            <div class="crit">You own everything.</div>
            <div class="good"><span class="mark yes"><svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Domain, code and content are yours</div>
            <div class="bad"><span class="mark no"><svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>Locked into their platform</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 12. FAQ ============ -->
    <section class="faqs" id="section-faqs">
      <div class="container">
        <div class="section-head reveal">
          <h2>Got a question?<span class="dim">We've got answers.</span></h2>
        </div>
        <div class="faq-body">
          <div class="card faq-aside reveal">
            <h3>Still have a question?</h3>
            <p>Email hello@pixsl.pro and Prabha will read it and reply himself.</p>
            <a href="#section-contact" class="btn btn-dark">Contact Us</a>
          </div>
          <div class="faq-list reveal" style="--d:.08s">
            <div class="faq-item open">
              <button class="faq-q" aria-expanded="true">
                How much does a website cost in Dubai?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>A Signature Website starts at AED 4,000, and most land between AED 4,000 and 5,000. Rescue projects, ecommerce builds, and care plans are quoted after a short call. You always get a fixed number before we start.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                How long does a website take to build?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>10 to 14 days for a Signature Website or a rebuild, counted from the day you approve the design. Ecommerce timelines depend on catalogue size, so we quote those per project.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                What does Figma-first design mean?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>You see and approve the full design in Figma before we write any code. Changes happen at the design stage, where they are quick, so the build stays on schedule and there are no surprises at launch.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                Do you only build websites for home automation companies?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>That is our home ground. We also build for interior fit-out, AV and home cinema, MEP, renovation and joinery, and landscaping and pool firms across Dubai, Abu Dhabi, and Sharjah.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                WordPress or Next.js, which one do I get?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>Whichever fits your team. WordPress when you want to edit content yourself, Next.js when speed and custom features matter most. We recommend one on the discovery call and explain why.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                Who owns the website when it's done?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>You do. The domain, code, content, and every account sit in your name. Stay on the care retainer if you want us around, or take the keys, there is no lock-in.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                Can you redesign my existing website instead of rebuilding it?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>Often, yes. If the foundation is sound we rescue it: new design, faster pages, better galleries. If it is beyond saving, we say so and quote a rebuild instead.</p></div></div>
            </div>
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false">
                What happens after the website launches?
                <span class="faq-icon"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></span>
              </button>
              <div class="faq-a"><div><p>Either a clean handover with a walkthrough, or the Website Care Retainer: managed hosting, maintenance with a set response window, monthly content and gallery updates, and page-speed monitoring.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 13. CONTACT ============ -->
    <section class="contact" id="section-contact">
      <div class="container">
        <div class="contact-body">
          <div class="card contact-info reveal">
            <h2>Get in touch<span class="dim">with the studio.</span></h2>
            <p>Tell us about your projects and what your current site is not doing for you. Prabha reads every message and replies himself.</p>
            <div class="contact-lines">
              <div class="contact-line">
                <span class="cl-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M2 4.5l6 4.5 6-4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                <div>
                  <div class="cl-label">Email:</div>
                  <div class="cl-value"><a href="mailto:hello@pixsl.pro">hello@pixsl.pro</a></div>
                </div>
              </div>
              <div class="contact-line">
                <span class="cl-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 15s5.5-4.6 5.5-8.5a5.5 5.5 0 10-11 0C2.5 10.4 8 15 8 15z" stroke="currentColor" stroke-width="1.4"/><circle cx="8" cy="6.5" r="2" stroke="currentColor" stroke-width="1.4"/></svg></span>
                <div>
                  <div class="cl-label">Service area:</div>
                  <div class="cl-value">Dubai, Abu Dhabi, Sharjah · remote-friendly across the UAE</div>
                </div>
              </div>
            </div>
            <div class="contact-availability">Available Monday to Friday, 9 AM to 6 PM GST</div>
            <div class="contact-cta">
              <h4>You run the installs. We make the website prove it.</h4>
              <p>One short call is enough to scope your project and give you a fixed quote.</p>
              <a href="mailto:hello@pixsl.pro" class="btn btn-red">Book a Free Call</a>
            </div>
          </div>

          <form class="card contact-form reveal" style="--d:.08s" onsubmit="return false;">
            <div class="form-row">
              <div class="field">
                <label for="f-first">First Name</label>
                <input id="f-first" type="text" placeholder="Jane" autocomplete="off" />
              </div>
              <div class="field">
                <label for="f-last">Last Name</label>
                <input id="f-last" type="text" placeholder="Smith" autocomplete="off" />
              </div>
            </div>
            <div class="field">
              <label for="f-email">Email</label>
              <input id="f-email" type="email" placeholder="you@company.com" autocomplete="off" />
            </div>
            <div class="field">
              <label for="f-company">Company Name</label>
              <input id="f-company" type="text" placeholder="Company name" autocomplete="off" />
            </div>
            <div class="field">
              <label for="f-phone">Phone</label>
              <div class="phone-row">
                <select id="f-code" aria-label="Country code">
                  <option>🇦🇪 +971</option>
                  <option>🇮🇳 +91</option>
                  <option>🇬🇧 +44</option>
                  <option>🇺🇸 +1</option>
                </select>
                <input id="f-phone" type="tel" placeholder="50 000 0000" autocomplete="off" />
              </div>
            </div>
            <div class="field">
              <label for="f-country">Country</label>
              <select id="f-country">
                <option>🇦🇪 United Arab Emirates</option>
                <option>🇮🇳 India</option>
                <option>🇬🇧 United Kingdom</option>
                <option>🇺🇸 United States</option>
                <option>🌍 Other</option>
              </select>
            </div>
            <div class="field">
              <label>How can we help you?</label>
              <div class="service-pills" id="servicePills">
                <button type="button" class="pill-opt selected">Signature Website</button>
                <button type="button" class="pill-opt">Website Rescue / Rebuild</button>
                <button type="button" class="pill-opt">Ecommerce Website</button>
                <button type="button" class="pill-opt">Website Care Retainer</button>
              </div>
            </div>
            <div class="field">
              <label for="f-budget">Budget</label>
              <select id="f-budget">
                <option>Select a budget</option>
                <option>AED 4,000-6,000</option>
                <option>AED 6,000-10,000</option>
                <option>AED 10,000-20,000</option>
                <option>AED 20,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-red">Send Request</button>
              <a href="mailto:hello@pixsl.pro" class="btn btn-light">Email Us</a>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ 14. BLOG ============ -->
    <section class="blogs" id="section-blogs">
      <div class="container">
        <div class="section-head reveal">
          <h2>Fresh insights &amp; ideas,<span class="dim">from the team.</span></h2>
          <p class="sub">Expert tips, case studies, and trends to help you design, grow, and convert smarter.</p>
        </div>
        <div class="blog-grid">
          <a href="#section-blogs" class="blog-card reveal">
            <div class="blog-meta">
              <span class="avatar">ER</span>
              <span class="b-author">Elias Reed</span>
              <span class="b-dot">·</span>
              <span>Jul 9, 2025</span>
              <span class="b-dot">·</span>
              <span>8 min</span>
            </div>
            <div class="blog-media"><div class="ph"><span class="ph-label">Motion Design</span></div></div>
            <div class="blog-content">
              <h3>Why Motion Design is the New Differentiator in SaaS</h3>
              <div class="blog-tags">
                <span class="tag">Motion Design</span>
                <span class="tag">Design</span>
                <span class="tag hot">Featured</span>
              </div>
            </div>
          </a>
          <a href="#section-blogs" class="blog-card reveal" style="--d:.08s">
            <div class="blog-meta">
              <span class="avatar">LM</span>
              <span class="b-author">Leo Martínez</span>
              <span class="b-dot">·</span>
              <span>Jun 18, 2025</span>
              <span class="b-dot">·</span>
              <span>9 min</span>
            </div>
            <div class="blog-media"><div class="ph" style="background:linear-gradient(150deg,#e2e5ea,#f6f7f8 55%,#e8eaee)"><span class="ph-label">Landing Pages</span></div></div>
            <div class="blog-content">
              <h3>The Psychology Behind High-Converting Landing Pages</h3>
              <div class="blog-tags">
                <span class="tag">Design</span>
                <span class="tag">Technology</span>
              </div>
            </div>
          </a>
          <a href="#section-blogs" class="blog-card reveal">
            <div class="blog-meta">
              <span class="avatar">LM</span>
              <span class="b-author">Leo Martínez</span>
              <span class="b-dot">·</span>
              <span>Jul 4, 2025</span>
              <span class="b-dot">·</span>
              <span>12 min</span>
            </div>
            <div class="blog-media"><div class="ph" style="background:linear-gradient(120deg,#eef0f3,#dfe2e7 60%,#f3f4f6)"><span class="ph-label">MVP</span></div></div>
            <div class="blog-content">
              <h3>Building an MVP That Doesn't Suck: 6 Rules to Follow</h3>
              <div class="blog-tags">
                <span class="tag">product-development</span>
                <span class="tag">Design</span>
              </div>
            </div>
          </a>
        </div>
        <div class="blogs-more reveal">
          <a href="#section-blogs" class="btn btn-light">Read More</a>
        </div>
      </div>
    </section>

    <!-- ============ 15. FOOTER CTA ============ -->
    <section class="footer-cta">
      <div class="container">
        <div class="fc-badge reveal">
          <div class="avatar-stack">
            <span class="avatar">A</span><span class="avatar">B</span><span class="avatar">C</span>
          </div>
          <span class="fc-label">Built for the UAE's premium trades.</span>
        </div>
        <h2 class="reveal" style="--d:.08s">Look as good online as you do on site.</h2>
        <p class="sub reveal" style="--d:.16s">Book a free discovery call. We look at your current site and your best projects, then give you a fixed quote.</p>
        <div class="fc-ctas reveal" style="--d:.24s">
          <a href="#section-contact" class="btn btn-glow">Book a Free Call</a>
          <a href="#section-pricing" class="btn btn-light">View Plans</a>
        </div>
        <div class="trusted reveal" style="--d:.3s">
          <span class="eyebrow">Apps &amp; tools we build with</span>
          <div class="marquee">
            <div class="marquee-track">
              <span class="logo-item"><svg class="logo-ic"><use href="#l-figma"/></svg><span class="logo-name">Figma</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-wordpress"/></svg><span class="logo-name">WordPress</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-next"/></svg><span class="logo-name">Next.js</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-react"/></svg><span class="logo-name">React.js</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-node"/></svg><span class="logo-name">Node.js</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-ga"/></svg><span class="logo-name">Google Analytics</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-gsc"/></svg><span class="logo-name">Google Search Console</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-claude"/></svg><span class="logo-name">Claude</span></span>
              <!-- duplicate set for continuous loop -->
              <span class="logo-item"><svg class="logo-ic"><use href="#l-figma"/></svg><span class="logo-name">Figma</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-wordpress"/></svg><span class="logo-name">WordPress</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-next"/></svg><span class="logo-name">Next.js</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-react"/></svg><span class="logo-name">React.js</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-node"/></svg><span class="logo-name">Node.js</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-ga"/></svg><span class="logo-name">Google Analytics</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-gsc"/></svg><span class="logo-name">Google Search Console</span></span>
              <span class="logo-item"><svg class="logo-ic"><use href="#l-claude"/></svg><span class="logo-name">Claude</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-news">
            <h4>Stay in the loop</h4>
            <p>Occasional notes on what makes trade websites win work in the UAE. No spam, unsubscribe any time.</p>
            <form class="newsletter" onsubmit="return false;">
              <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
              <button type="submit" class="btn btn-dark">Subscribe</button>
            </form>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#section-contact">Contact us</a></li>
              <li><a href="#section-hero">About us</a></li>
              <li><a href="#section-services">Services</a></li>
              <li><a href="#section-projects">Projects</a></li>
              <li><a href="#section-blogs">Blog</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Reach us</h5>
            <ul>
              <li><a href="mailto:hello@pixsl.pro">hello@pixsl.pro</a></li>
              <li><a href="https://pixsl.pro" rel="noopener">pixsl.pro</a></li>
              <li><a href="#section-contact">Book a call</a></li>
              <li><a href="#section-faqs">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Pixsl Studio · pixsl.pro</span>
          <div class="fb-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of services</a>
          </div>
        </div>
      </div>
      <span class="footer-watermark" aria-hidden="true">Pixsl</span>
    </footer>

  <!-- ============ STRUCTURED DATA ============ -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Pixsl Studio",
    "url": "https://pixsl.pro",
    "email": "hello@pixsl.pro",
    "description": "Pixsl Studio builds websites that make premium UAE service businesses look as good online as the work they deliver, starting with home automation and the built-environment trades.",
    "founder": { "@type": "Person", "name": "Prabha" },
    "priceRange": "AED 4,000+",
    "currenciesAccepted": "AED",
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Sharjah" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "knowsAbout": ["Web design", "Website redesign", "Ecommerce websites", "Website maintenance", "On-page SEO"],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Signature Website", "description": "A new 5 to 7 page website on WordPress or Next.js with project galleries, a mobile-first build, on-page SEO with GA and GSC, and a lead-capture form. Designed in Figma first, live in 10 to 14 days." },
        "priceCurrency": "AED",
        "price": "4000",
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "AED", "minPrice": "4000", "maxPrice": "5000" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Website Rescue / Rebuild", "description": "A redesign or rebuild of an outdated, slow, or thin website: best projects above the fold, page-speed and mobile scores fixed, on-page SEO with GA and GSC, and lead capture." }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Ecommerce Website", "description": "A product catalogue and checkout build for firms selling smart-home kit and hardware, on WooCommerce or Next.js." }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Website Care Retainer", "description": "Managed hosting, maintenance with a set response window, monthly content and gallery updates, uptime and page-speed monitoring, and a monthly check-in." }
      }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "A Signature Website starts at AED 4,000, and most land between AED 4,000 and 5,000. Rescue projects, ecommerce builds, and care plans are quoted after a short call. You always get a fixed number before we start." }
      },
      {
        "@type": "Question",
        "name": "How long does a website take to build?",
        "acceptedAnswer": { "@type": "Answer", "text": "10 to 14 days for a Signature Website or a rebuild, counted from the day you approve the design. Ecommerce timelines depend on catalogue size, so we quote those per project." }
      },
      {
        "@type": "Question",
        "name": "What does Figma-first design mean?",
        "acceptedAnswer": { "@type": "Answer", "text": "You see and approve the full design in Figma before we write any code. Changes happen at the design stage, where they are quick, so the build stays on schedule and there are no surprises at launch." }
      },
      {
        "@type": "Question",
        "name": "Do you only build websites for home automation companies?",
        "acceptedAnswer": { "@type": "Answer", "text": "That is our home ground. We also build for interior fit-out, AV and home cinema, MEP, renovation and joinery, and landscaping and pool firms across Dubai, Abu Dhabi, and Sharjah." }
      },
      {
        "@type": "Question",
        "name": "WordPress or Next.js, which one do I get?",
        "acceptedAnswer": { "@type": "Answer", "text": "Whichever fits your team. WordPress when you want to edit content yourself, Next.js when speed and custom features matter most. We recommend one on the discovery call and explain why." }
      },
      {
        "@type": "Question",
        "name": "Who owns the website when it's done?",
        "acceptedAnswer": { "@type": "Answer", "text": "You do. The domain, code, content, and every account sit in your name. Stay on the care retainer if you want us around, or take the keys, there is no lock-in." }
      },
      {
        "@type": "Question",
        "name": "Can you redesign my existing website instead of rebuilding it?",
        "acceptedAnswer": { "@type": "Answer", "text": "Often, yes. If the foundation is sound we rescue it: new design, faster pages, better galleries. If it is beyond saving, we say so and quote a rebuild instead." }
      },
      {
        "@type": "Question",
        "name": "What happens after the website launches?",
        "acceptedAnswer": { "@type": "Answer", "text": "Either a clean handover with a walkthrough, or the Website Care Retainer: managed hosting, maintenance with a set response window, monthly content and gallery updates, and page-speed monitoring." }
      }
    ]
  }
  </script>
`;
