import { PROJECTS, moreProjects } from './data';

// Case-study page markup, server-rendered as an HTML string like the landing
// page (see app/page.js). Layout follows the "Project Case Study" design;
// section styles live in case-study.css, everything else reuses globals.css.

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ARROW =
  '<svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Image slot: real image when the project has one, "drop image here" otherwise.
const media = (cls, img, label, hint = 'drop image here') => `
      <div class="cs-media ${cls}">
        ${
          img
            ? `<div class="cs-img" role="img" aria-label="${esc(label)}" style="background-image:url('${img}')"></div>`
            : `<div class="cs-drop"><span class="cs-drop-hint">${hint}</span></div>`
        }
      </div>`;

// hidden: card belongs to the duplicated marquee set — kept out of tab order.
const moreCard = (mp, hidden = false) => `
          <div class="cs-mp">
            <div class="cs-mp-head">
              <span class="cs-mp-name">${esc(mp.name)}</span>
              <a href="/projects/${mp.slug}" class="cs-mp-view"${hidden ? ' tabindex="-1"' : ''}>View ${ARROW}</a>
            </div>
            <div class="cs-mp-tags">${mp.tags.map((t) => `<span class="cs-mp-tag">${esc(t)}</span>`).join('')}</div>
            <a href="/projects/${mp.slug}" class="cs-mp-cover" style="background:${mp.bg}" aria-label="${esc(mp.name)} case study"${hidden ? ' tabindex="-1"' : ''}>
              ${
                mp.cover
                  ? `<span class="cs-img" style="background-image:url('${mp.cover}')"></span>`
                  : `<span class="cs-drop"><span class="cs-drop-name">${esc(mp.name)}</span><span class="cs-drop-hint">drop project cover here</span></span>`
              }
            </a>
          </div>`;

const TOOLS = ['Figma', 'WordPress', 'Next.js', 'React.js', 'Node.js', 'Google Analytics', 'Google Search Console', 'Claude'];
const toolItems = TOOLS.map((t) => `<span class="logo-item"><span class="logo-name">${t}</span></span>`).join('\n              ');

export function caseStudyMarkup(slug) {
  const p = PROJECTS[slug];
  const others = moreProjects(slug);

  return `
<main class="cs-page">

  <!-- ============ BREADCRUMB ============ -->
  <div class="container cs-anim">
    <a href="/#section-projects" class="cs-back">
      <span class="cs-back-ic"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      Our Projects
    </a>
  </div>

  <!-- ============ TITLE ============ -->
  <div class="container cs-title-row cs-anim" style="--d:.06s">
    <div class="cs-title-copy">
      <h1>${esc(p.title)}</h1>
      <p class="cs-sub">${esc(p.sub)}</p>
    </div>
  </div>

  <!-- ============ META ============ -->
  <div class="container cs-meta-row cs-anim" style="--d:.12s">
    <div class="cs-meta">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="4" width="11" height="9.5" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 4V3a1.5 1.5 0 011.5-1.5h2A1.5 1.5 0 0110.5 3v1" stroke="currentColor" stroke-width="1.4"/></svg>
      <div><div class="cs-meta-label">Company</div><div class="cs-meta-value">${esc(p.company)}</div></div>
    </div>
    <div class="cs-meta">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M8 4.5V8l2.4 1.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      <div><div class="cs-meta-label">Timeline</div><div class="cs-meta-value">${esc(p.timeline)}</div></div>
    </div>
    <div class="cs-meta">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M11.5 2.5l2 2L5 13l-2.7.7L3 11l8.5-8.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
      <div><div class="cs-meta-label">Services provided</div><div class="cs-meta-value">${esc(p.services.join(', '))}</div></div>
    </div>
    ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-light cs-preview">Preview Project</a>` : ''}
  </div>

  <!-- ============ HERO MEDIA ============ -->
  <div class="container cs-hero-wrap cs-anim" style="--d:.18s">
    <div class="cs-hero">
      ${
        p.embed && p.liveUrl
          ? `<iframe src="${p.liveUrl}" title="${esc(p.company)} — live site" loading="lazy"></iframe>`
          : `<div class="cs-drop"><span class="cs-drop-name">${esc(p.company)}</span><span class="cs-drop-hint">drop hero media here</span></div>`
      }
      ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="cs-domain"><span class="dot"></span>${esc(p.liveDomain)}</a>` : ''}
    </div>
  </div>

  <!-- ============ CHALLENGE & RESEARCH ============ -->
  <section class="container cs-split reveal">
    <div class="cs-copy">
      <h2>The Challenge &amp; Research</h2>
      <p>${esc(p.challenge1)}</p>
      <p>${esc(p.challenge2)}</p>
    </div>
    ${media('cs-media-tall', p.imgA, `${p.company} — research`)}
  </section>

  <div class="container cs-band-wrap reveal">
    ${media('cs-band', p.imgB, `${p.company} — site detail`)}
  </div>

  <!-- ============ REDESIGN & RESULTS ============ -->
  <section class="container cs-split cs-split-rev reveal">
    <div class="cs-stack">
      ${media('cs-media-card', p.imgC, `${p.company} — result`)}
      ${media('cs-media-card', p.imgD, `${p.company} — result detail`)}
    </div>
    <div class="cs-copy">
      <h2>The Redesign &amp; Results</h2>
      <p>${esc(p.result1)}</p>
      <p>${esc(p.result2)}</p>
    </div>
  </section>

  <div class="container cs-band-wrap reveal">
    ${media('cs-wide', p.imgWide, `${p.company} — full view`, 'drop wide image here')}
  </div>

  <!-- ============ QUOTE ============ -->
  <div class="container cs-quote reveal">
    <div class="cs-quote-inner">
      <p>${esc(p.quote)}</p>
      <div class="cs-quote-name">${esc(p.quoteName)}</div>
      <div class="cs-quote-stat">${esc(p.quoteStat)}</div>
    </div>
  </div>

  <div class="container cs-divider-wrap"><div class="cs-divider"></div></div>

  <!-- ============ MORE PROJECTS ============ -->
  <section class="container cs-more">
    <h2 class="reveal">More projects,<span class="dim">like this one.</span></h2>
    <div class="cs-more-marquee reveal">
      <div class="cs-more-track">
${others.map((mp) => moreCard(mp)).join('\n')}
        <!-- duplicate set for continuous loop -->
        <div class="cs-more-dup" aria-hidden="true">
${others.map((mp) => moreCard(mp, true)).join('\n')}
        </div>
      </div>
    </div>
    <div class="cs-more-all reveal">
      <a href="/#section-projects">View all Projects ${ARROW}</a>
    </div>
  </section>

  <!-- ============ CONTACT (same as landing) ============ -->
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
                <div class="cl-label">Where we work:</div>
                <div class="cl-value">Middle East, UK, Europe, US, India, and Southeast Asia · remote-friendly worldwide</div>
              </div>
            </div>
          </div>
          <div class="contact-availability">We usually reply within one business day, wherever you are.</div>
          <div class="contact-cta">
            <h4>You do the work. We make the website prove it.</h4>
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
              <button type="button" class="pill-opt selected">Website design &amp; development</button>
              <button type="button" class="pill-opt">Custom software &amp; apps</button>
              <button type="button" class="pill-opt">Branding &amp; digital assets</button>
              <button type="button" class="pill-opt">Website care &amp; hosting</button>
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

  <!-- ============ FOOTER CTA ============ -->
  <section class="footer-cta">
    <div class="container">
      <div class="fc-badge reveal">
        <div class="avatar-stack">
          <span class="avatar">A</span><span class="avatar">B</span><span class="avatar">C</span>
        </div>
        <span class="fc-label">Built for people who do great work.</span>
      </div>
      <h2 class="reveal" style="--d:.08s">Look as good online as your work is.</h2>
      <p class="sub reveal" style="--d:.16s">Book a free discovery call. We look at your current site and your best work, give you a fixed quote, and if we are not the right fit, we will say so on the call.</p>
      <div class="fc-ctas reveal" style="--d:.24s">
        <a href="#section-contact" class="btn btn-glow">Book a Free Call</a>
        <a href="/#section-pricing" class="btn btn-light">View Plans</a>
      </div>
      <div class="trusted reveal" style="--d:.3s">
        <span class="eyebrow">Apps &amp; tools we build with</span>
        <div class="marquee">
          <div class="marquee-track">
            ${toolItems}
            <!-- duplicate set for continuous loop -->
            ${toolItems}
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- ============ FOOTER (same as landing) ============ -->
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
            <li><a href="/#section-hero">About us</a></li>
            <li><a href="/#section-services">Services</a></li>
            <li><a href="/#section-projects">Projects</a></li>
            <li><a href="/#section-blogs">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Reach us</h5>
          <ul>
            <li><a href="mailto:hello@pixsl.pro">hello@pixsl.pro</a></li>
            <li><a href="https://pixsl.pro" rel="noopener">pixsl.pro</a></li>
            <li><a href="#section-contact">Book a call</a></li>
            <li><a href="/#section-faqs">FAQs</a></li>
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
    <span class="footer-watermark" aria-hidden="true">Pixsl Studio</span>
  </footer>
`;
}
