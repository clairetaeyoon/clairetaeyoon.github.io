// Writing list, in the order it should appear on the site.
//
// To add an essay:
//   1. Make a new .md file in this folder (copy an existing one and change the top part).
//   2. Add one line below with the same slug, title, and year.
//
//   slug     → the address: clairetaeyoon.com/writing/<slug>/  (must match "permalink" in the .md file)
//   subtitle → optional
//   excerpt  → the opening paragraph, shown (first three lines) under the title in the Writing list
//   file     → only for a PDF, e.g. { file: "digital-houyhnhnms.pdf", title: "...", year: "2023" }
window.POSTS = [
  { slug: "the-digital-houyhnhnms", year: "2023", title: "The Digital Houyhnhnms",
    subtitle: "Adapted from The Living Ideas of Future Observers (2023)",
    excerpt: "Published in 1726, the satirical novel Gulliver’s Travels is probably more familiar to most people as a children’s story. Jonathan Swift’s provocative satire was treated almost as a banned book when it first appeared, and that is precisely how it came to be disguised as “safe” children’s literature, a rather unjust fate. While the world dismissed Gulliver’s Travels as a light storybook, however, its central concern quietly slipped out of view: the underside of the “anthropocentrism” that has confined our frame of perception since the modern era. This concern comes through most clearly in the final part, “Houyhnhnmland.”" },
  { slug: "is-kindness-intelligence", year: "2026", title: "Is Kindness a Form of Intelligence?",
    subtitle: "Why AI Apocalypse Might Not Happen After All",
    excerpt: "Is it true that kindness is a form of intelligence? No study has yet shown a conclusion as clear-cut as “the smarter, the kinder,” but it seems possible to argue that kindness is more than a personality trait and is, at its core, an evolutionary strategy. In Survival of the Friendliest, for instance, Professor Brian Hare and Vanessa Woods argue that what made friendliness an advantage for survival is, at bottom, a cognitive capacity to read the intentions of others and to assess oneself objectively. In other words, one must be able to think comprehensively about how one’s actions in a given situation will affect others, and how that effect will in turn come back to oneself. Homo sapiens is the species that has built societies to this day by coexisting in just this way. In that sense, if we ponder the definition of intelligence as “the capacity for intellectual activity that, when confronted with a new object or situation, grasps its meaning and finds a rational way to adapt,” calling kindness a form of intelligence is not much of a stretch." },
  { slug: "the-theatre-organization", year: "2026", title: "The Theatre Organization",
    subtitle: "The Inefficiency Paradox of AI",
    excerpt: "Since The Digital Houyhnhnms ran on the front page of The Korea Economic Daily in 2024, the inverted worldview it describes between humans and AI has only grown more persuasive. Of course, what The Digital Houyhnhnms proposes remains provocative and remotely extreme. How, then, might we describe the relationship between humans and AI as it stands right now? This essay sets out to diagnose humans who have become actors, and a human world that has accordingly become a theatre." },
  { slug: "pokemon-and-trainer", year: "2026", title: "Pokémon and Trainer",
    subtitle: "An Alternative Model of Human-AI Relationship",
    excerpt: "If theatre organizations inevitably produce inefficiency, how should we resolve it? Leaving AI to do everything with no human involvement at all is neither realistic nor the right direction for thinking about models of coexistence. What we need is a reinterpretation of our role as actors standing on the stage of the theatre organization. In searching for an alternative model for that reinterpretation, one cannot help but think of the most complex and sophisticated partnership known to modern humanity: none other than the relationship between Pokémon and Trainer(!) We must take on the role of Trainer so that AI can perform as our Pokémon. Given that AI programs develop by being trained, the fit seems almost too neat." },
];
