// Case-study content for /projects/[slug], rendered by the template in
// case-study.js. Object order drives the "More projects" rotation on each page.
//
// Per project:
//   name/tags/bg/cover  — card shown in "More projects" grids
//   embed               — when true (and liveUrl is set) the hero embeds the
//                         live site in an iframe; otherwise a drop placeholder
//   imgA..imgD/imgWide  — case-study images; null renders a drop placeholder

const IMG = (id) =>
  `https://cdn.sanity.io/images/6sbcjjxj/production/${id}-6016x4016.jpg?w=1600&auto=format`;

// Blank-template entry: swap the placeholder copy for real content as each
// project's case study gets written.
const placeholder = (name, tags, bg) => ({
  name,
  tags,
  bg,
  cover: null,
  title: `Building ${name}`,
  sub: 'One line on what you improved or built for this client.',
  liveUrl: '',
  liveDomain: '',
  embed: false,
  company: name,
  timeline: 'Timeline',
  services: tags,
  challenge1:
    'Paragraph one — what the client needed, the state of things before, and why it mattered.',
  challenge2: 'Paragraph two — what your research uncovered and how it framed the work.',
  result1: 'Paragraph one — what you designed and built, and the key decisions behind it.',
  result2: 'Paragraph two — what shipped and what it does for the client today.',
  imgA: null,
  imgB: null,
  imgC: null,
  imgD: null,
  imgWide: null,
  quote: 'Client quote goes here.',
  quoteName: name,
  quoteStat: 'Result stat · Result stat',
});

export const PROJECTS = {
  'diamond-edge-cutting': {
    name: 'Diamond Edge Cutting',
    tags: ['Web Design', 'Development', 'CMS'],
    bg: 'linear-gradient(135deg,#e8eaee 0%,#f6f7f8 45%,#dfe2e7 100%)',
    cover: IMG('17ab320e8c24752e25a4a3267a9c7d2730e2012f'),
    title: 'Building Diamond Edge Cutting',
    sub: 'A corporate site and CMS for the GCC’s leading specialist demolition contractor.',
    liveUrl: 'https://diamond-edge-cutting-g9kq.vercel.app/',
    liveDomain: 'diamond-edge-cutting.vercel.app',
    embed: true,
    company: 'Diamond Edge Cutting LLC',
    timeline: '2026 · Live',
    services: ['Web Design', 'Development', 'CMS'],
    challenge1:
      'The GCC’s largest robotic demolition fleet had no digital presence to match. DEC needed a site that could carry serious credentials — ISO certifications, a Guinness World Record, 14+ landmark projects — and still generate enquiries from developers and main contractors.',
    challenge2:
      'We researched how their clients actually procure: through credentials, sector filters, and proof of delivered work. That shaped an architecture of five core pages — home, demolition services, rental equipment, a filterable project portfolio, and contact.',
    result1:
      'We designed an industrial, safety-first visual language and built it on Next.js with Sanity as the CMS — so their team publishes new projects, equipment and services without touching code. Every project page is generated from one reusable template.',
    result2:
      'SEO structure, per-page metadata and fast loads on Vercel. The site is live today, carrying a filterable portfolio of 14+ projects across 6 sectors — publishable entirely by the client’s own team.',
    imgA: IMG('17ab320e8c24752e25a4a3267a9c7d2730e2012f'),
    imgB: IMG('0810d97be7d9da5558ec1b00aed44ec228fcf0dd'),
    imgC: IMG('fd0b13302304dbeb04f93cdf76130762bb24031c'),
    imgD: IMG('a98b66ad22852c8bbae826508e2816d3f7372ba3'),
    imgWide: 'https://diamond-edge-cutting-g9kq.vercel.app/hero/hero-desktop.webp',
    quote:
      'Client quote goes here — ask DEC for one line about working together and what the new site changed for them.',
    quoteName: 'Diamond Edge Cutting LLC',
    quoteStat: '14+ projects live in the CMS · 5 core pages shipped',
  },
  'atlas-technologies': placeholder(
    'Atlas Technologies',
    ['UX Design', 'Web Design'],
    'linear-gradient(135deg,#e8eaee 0%,#f6f7f8 45%,#dfe2e7 100%)'
  ),
  finlytics: placeholder(
    'Finlytics',
    ['Web Design', 'Development'],
    'linear-gradient(135deg,#e2e5ea,#f3f4f6 55%,#e8eaee)'
  ),
  'orbital-bank': placeholder(
    'Orbital Bank',
    ['Brand', 'Web Design'],
    'linear-gradient(150deg,#eef0f3,#dfe2e7 60%,#f6f7f8)'
  ),
  'echo-analytics': placeholder(
    'Echo Analytics',
    ['UX Design', 'Development'],
    'linear-gradient(120deg,#e8eaee,#f6f7f8 45%,#e2e5ea)'
  ),
  'nova-commerce': placeholder(
    'Nova Commerce',
    ['Web Design', 'CMS'],
    'linear-gradient(160deg,#f3f4f6,#e2e5ea 55%,#eef0f3)'
  ),
  studioz: placeholder(
    'StudioZ',
    ['Brand', 'Web Design'],
    'linear-gradient(140deg,#dfe2e7,#eef0f3 50%,#f6f7f8)'
  ),
};

// Up to four other projects for the "More projects" grid, in data order.
export function moreProjects(currentSlug) {
  return Object.entries(PROJECTS)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 4)
    .map(([slug, p]) => ({ slug, ...p }));
}
