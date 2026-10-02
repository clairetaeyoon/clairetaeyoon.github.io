// Writing list, in the order it should appear on the site.
//
// To add an essay:
//   1. Make a new .md file in this folder (copy an existing one and change the top part).
//   2. Add one line below with the same slug, title, and year.
//
//   slug     → the address: clairetaeyoon.com/writing/<slug>/  (must match "permalink" in the .md file)
//   subtitle → optional
//   excerpt  → two or three sentences shown under the title in the Writing list
//   file     → only for a PDF, e.g. { file: "digital-houyhnhnms.pdf", title: "...", year: "2023" }
window.POSTS = [
  { slug: "the-digital-houyhnhnms", year: "2023", title: "The Digital Houyhnhnms",
    subtitle: "Adapted from The Living Ideas of Future Observers (2023)",
    excerpt: "Published in 1726, the satirical novel Gulliver’s Travels is probably more familiar to most people as a children’s story. While the world dismissed it as a light storybook, its central concern quietly slipped out of view: the underside of anthropocentrism." },
  { slug: "is-kindness-intelligence", year: "2026", title: "Is Kindness a Form of Intelligence?",
    subtitle: "Why AI Apocalypse Might Not Happen After All",
    excerpt: "Is it true that kindness is a form of intelligence? No study has yet shown a conclusion as clear-cut as “the smarter, the kinder,” but it seems possible to argue that kindness is more than a personality trait and is, at its core, an evolutionary strategy." },
  { slug: "the-theatre-organization", year: "2026", title: "The Theatre Organization",
    subtitle: "The Inefficiency Paradox of AI",
    excerpt: "A teacher’s worksheet is made by AI, a student’s essay is written by AI, and the grading is done by AI. On the surface nothing has changed, yet the exchange has become a ritual for proving that a human took part." },
  { slug: "pokemon-and-trainer", year: "2026", title: "Pokémon and Trainer",
    subtitle: "An Alternative Model of Human-AI Relationship",
    excerpt: "If theatre organizations inevitably produce inefficiency, how should we resolve it? In searching for an alternative, one cannot help but think of the most complex partnership known to modern humanity: the relationship between Pokémon and Trainer." },
];
