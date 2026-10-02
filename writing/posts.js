// Writing list, in the order it should appear on the site.
//
// To add an essay:
//   1. Make a new .md file in this folder (copy an existing one and change the top part).
//   2. Add one line below with the same slug, title, and year.
//
//   slug     → the address: clairetaeyoon.com/writing/<slug>/  (must match "permalink" in the .md file)
//   subtitle → optional
//   file     → only for a PDF, e.g. { file: "digital-houyhnhnms.pdf", title: "...", year: "2023" }
window.POSTS = [
  { slug: "is-kindness-intelligence", year: "2026", title: "Is Kindness a Form of Intelligence?" },
  { slug: "the-theatre-organization", year: "2026", title: "The Theatre Organization" },
  { slug: "pokemon-and-trainer", year: "2026", title: "Pokémon and Trainer", subtitle: "An Alternative Model of Human-AI Relationship" },
];
