// Billeder ligger i public/. Skriv kun filnavnet, fx asset("errorHandling.png").
const asset = (file) => (file ? `${import.meta.env.BASE_URL}${file}` : "");

// Et billede i en story-sektion. Uden filnavn bliver billedet ikke vist.
const picture = (title = "", caption = "", file = "") => ({
  title,
  caption,
  alt: title,
  src: asset(file),
});

/*
  SKABELON
  Tomme felter ("" eller [""]) vises ikke på projektsiden. De står klar til,
  at du udfylder dem.

  slug           bruges i URL'en: /projects/<slug>
  title          overskrift
  year           årstal
  category       kort linje, fx "UX/UI · React" (vises også på forsiden)
  intro          kort tekst under overskriften
  description    "Om projektet" (vises også på forsiden)
  services       Discipliner
  collaboration  Projektform, fx "Gruppeprojekt · 3. semester"
  tools          Værktøjer
  cover          stort billede øverst (vises også på forsiden)
  coverAlt       alt-tekst til cover
  links          [{ label, url }]
  story          sektioner: { heading, paragraphs: [""], layout, media }
                 layout: "" eller "text-above" (teksten over billederne)
                 media.layout: "single" | "comparison" (2 billeder side om
                 side) | "carousel"
                 media.items: [picture("Titel", "Billedtekst", "fil.png")]
  reflection     [""] – afsnit i refleksionen
*/

const projects = [
  {
    slug: "Vuuh",
    title: "Onboarding for Vuuh",
    year: "2026",
    category: "UX/UI · Brugertest · Figma",
    intro: "En onboarding-proces for kunder af Vuuh.",
    description: "KOMMER SNART.",
    services: "",
    collaboration: "",
    tools: "",
    cover: asset("vuuhMockUp.png"),
    coverAlt: "",
    links: [],
    story: [
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
    ],
    reflection: [""],
  },
  {
    slug: "Mellemrum",
    title: "Optimering af website for Mellemrum",
    year: "2026",
    category: "VSC · React · CSS modules · Optimering",
    intro: "",
    description:
      "Dette projekt omhandler optimering af et website for den opdigtede virksomhed Mellemrum. Målet er at forbedre errorhandling og accesibilitet.",
    services: "",
    collaboration: "",
    tools: "",
    cover: asset("mellemRum.png"),
    coverAlt: "",
    links: [
      {
        label: "Live site",
        url: "https://line-jpg.github.io/mellemrum/",
      },
      {
        label: "GitHub repo",
        url: "https://github.com/Line-jpg/mellemrum",
      },
    ],
    story: [
      {
        heading: "Errorhandling",
        paragraphs: [
          "Vi har implementeret en robust errorhandling, der sikrer, at brugere får en god oplevelse, selv når der opstår fejl.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Errorhandling", "", "errorHandling.png")],
        },
      },
      {
        heading: "Loading states",
        paragraphs: [
          "Tilføjelse af loading states for at give brugerne feedback under indlæsning.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Loading states", "", "skeletonMellemrum.png")],
        },
      },
      {
        heading: "Supabase integration",
        paragraphs: [
          "Optimeret Supabase for at kunne holde styr på data, og sikre en robust og skalérbar database.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Supabase integration")],
        },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
    ],
    reflection: [""],
  },
  {
    slug: "LilleRo",
    title: "Idéudvikling og design af appen LilleRo",
    year: "2026",
    category:
      "UX/UI · Frontend · Brugerinddragelse · React · Supabase · Figma",
    intro: "Kan vi hjælpe forældre med at få ro i maven?",
    description:
      "Dette gruppeprojekt omhandler udviklingen af en app til forældre med børn, der har type 1 diabetes. Formålet med app'en er at gøre hverdagen mere overskuelig for familier, som ofte står med mange praktiske og mentale udfordringer i forbindelse med sygdommen.",
    services: "",
    collaboration: "",
    tools: "",
    cover: asset("LilleRoFront.png"),
    coverAlt: "",
    links: [
      {
        label: "Githhub repo",
        url: "https://github.com/Line-jpg/lillero-webapp",
      },
      {
        label: "Live site",
        url: "https://line-jpg.github.io/lillero-webapp/",
      },
    ],
    story: [
      {
        heading: "Design",
        paragraphs: [
          "Gennem projektet har vi udviklet en app til forældre med børn, der har type 1-diabetes, med fokus på at skabe en mere overskuelig hverdag. De vigtigste designvalg har været en enkel informationsarkitektur, en genkendelig navigation inspireret af sociale medier samt et visuelt design med fokus på usability, læsbarhed og overskuelighed. Principper som KISS, Jakob’s Law og Hick’s Law har været med til at understøtte disse valg.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Design", "", "mockup-lillero.png")],
        },
      },
      {
        heading: "Teknik",
        paragraphs: [
          "Teknisk har vi udviklet løsningen som en Single Page Application i React med CRUD-funktionalitet og datahåndtering gennem Supabase. Dette gør det muligt for brugerne at oprette, læse, redigere og slette opslag, samtidig med at applikationen leverer en dynamisk og responsiv brugeroplevelse.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Teknik", "", "iphoneMockupLilleRo.png")],
        },
      },
      {
        heading: "Metode",
        paragraphs: [
          "Vores beslutninger er understøttet af teorier som User-Centered Design, Double Diamond og iterativ udvikling, der har sikret, at brugerens behov har været i centrum gennem hele processen. Research, spørgeskemaer og interviews har desuden givet et solidt grundlag for både design- og udviklingsbeslutninger.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Metode", "", "skemaLilleRo.png")],
        },
      },
      {
        heading: "Værdi",
        paragraphs: [
          "Løsningen skaber værdi ved at kombinere praktiske værktøjer, troværdig information og et fællesskab for forældre i samme situation. Dette kan bidrage til større tryghed, bedre overblik og lettere adgang til både hjælp og viden i hverdagen.",
        ],
        layout: "",
        media: { layout: "single", items: [picture("Værdi")] },
      },
    ],
    reflection: [""],
  },
  {
    slug: "webshop",
    title: "Webshop",
    year: "2026",
    category: "Design · Frontend · Proces",
    intro: "",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    services: "",
    collaboration: "",
    tools: "",
    cover: "",
    coverAlt: "",
    links: [
      {
        label: "Eksempel-link",
        url: "https://github.com",
      },
    ],
    story: [
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
    ],
    reflection: [""],
  },
  {
    slug: "case-study",
    title: "Case study",
    year: "2026",
    category: "Design · Frontend · Proces",
    intro: "",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    services: "",
    collaboration: "",
    tools: "",
    cover: "",
    coverAlt: "",
    links: [
      {
        label: "Eksempel-link",
        url: "https://github.com",
      },
    ],
    story: [
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "",
        paragraphs: [""],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
    ],
    reflection: [""],
  },
];

export default projects;
