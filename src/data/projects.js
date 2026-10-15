// Billeder ligger i public/. Skriv kun filnavnet, fx asset("errorHandling.png").
const asset = (file) => (file ? `${import.meta.env.BASE_URL}${file}` : "");

// Et billede i en story-sektion. Uden filnavn bliver billedet ikke vist.
const picture = (title = "", caption = "", file = "") => ({
  title,
  caption,
  alt: title,
  src: asset(file),
});

const projects = [
  {
    slug: "Mellemrum",
    title: "Optimering af website for Mellemrum",
    year: "2026",
    category: "VSC · React · CSS modules · Optimering",
    intro: "",
    description:
      "Dette projekt omhandler optimering af et website for den opdigtede virksomhed Mellemrum. Målet er at forbedre errorhandling og accesibilitet.",
    services:
      "Loading states · Optimering · Tilmeldingsflow · Errorhandling · Accesibilitet",
    collaboration: "Individuelt projekt · 3. semester",
    tools: "VSC · React · SupaBase REST API · GitHub",
    cover: asset("mellemRum.png"),
    coverAlt: "Billede af website for Mellemrum",
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
        heading: "Om casen",
        paragraphs: [
          "I Mellemrum videreudviklede jeg en eksisterende eventplatform med fokus på at skabe en mere sammenhængende løsning. Jeg arbejdede med at forbedre kodens struktur og gøre platformen mere overskuelig og funktionel for både deltagere og arrangører.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "Få styr på koden",
        paragraphs: [
          "Koden er blevet opdelt i komponenter, og flyttet dem til deres egne filer. Dette har gjort koden mere overskuelig og lettere at arbejde med fremover.",
          "Og så importeret i App.jsx. Dette har gjort det lettere at finde rundt i koden, og gjort det mere overskueligt at arbejde med.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Komponentstruktur", "", "componentsMellemrum.png")],
        },
      },
      {
        heading: "Min prioritering",
        paragraphs: [
          "Efter at have fået overblik i koden, kunne jeg finde ud af hvad jeg vil have fokus på.",
          "Jeg gjorde det mit læremål, at arbejde med loading states, errorhandling og accesibilitet. Dette har jeg prioriteret, da det er områder jeg ikke har arbejdet med før.",
          "Prioriteringener blev rangeret, og kom også fra et teknisk Audit.",
        ],
        media: {
          layout: "single",
          items: [picture()],
        },
      },
      {
        heading: "Loading states",
        theme: "dark",
        paragraphs: [
          "Målet her, har været at tilføje loading states for at give brugerne feedback under indlæsning.",
          "Jeg har implementeret UI loading states, så brugeren får tydelig feedback, mens systemet behandler en handling. Det skaber en mere intuitiv brugeroplevelse, reducerer risikoen for gentagne klik og gør ventetiden mere overskuelig. Samtidig bidrager det til en mere responsiv og gennemarbejdet løsning.",
          "",
        ],
        layout: "text-above",
        media: {
          layout: "comparison",
          items: [
            picture(
              "Ingen loading state",
              "Sådan så det ud, før der blev tilføjet et skeleton som loading state.",
              "beforeMellemrum.png",
            ),
            picture(
              "Med loading state",
              "Sådan ser det ud efter, at der er tilføjet et skeleton som loading state.",
              "skeletonMellemrum.png",
            ),
          ],
        },
      },
      {
        heading: "Errorhandling og feedback",
        paragraphs: [
          "Der er implementeret errorhandling, der sikrer, at brugere får en god oplevelse, selv når der opstår fejl.",
          "Jeg har også implementeret feedbackmekanismer, som bekræfter, at brugeren er tilmeldt det event, formularen tilhører.",
        ],
        layout: "",
        media: {
          layout: "carousel",
          items: [
            picture("Errorhandling", "", "errorHandling.png"),
            picture("Errorhandling", "", "udfyldMellemrum.png"),
            picture("Errorhandling", "", "tilmeldingMellemrum.png"),
          ],
        },
      },
      {
        heading: "Justeringer af supabase",
        paragraphs: [
          "Jeg oprettede separate databasetabeller til events og venues og forbandt dem via fremmednøgler. Det skaber en mere struktureret datamodel, der gør det lettere at vedligeholde data og tilknytte venues til events fremadrettet.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [picture("Supabase integration", "", "supaBase.png")],
        },
      },
      {
        heading: "Hvordan skaber løsningen værdi?",
        paragraphs: [
          "Implementeringen af skeleton loading states og error handling skaber værdi for både brugerne og den videre udvikling af platformen. Skeleton loading gør ventetiden mere overskuelig, mens tydelig fejlhåndtering hjælper brugeren med at forstå og håndtere problemer. Det kan reducere frustration, forebygge gentagne handlinger og skabe en mere stabil og brugervenlig oplevelse. Samtidig gør løsningen det lettere at identificere fejl og videreudvikle platformen.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "Verificering af forbedringer",
        paragraphs: [
          "For at verificere forbedringerne, har jeg brugt lighthouse til at analysere ydeevnen og brugeroplevelsen af løsningen.",
        ],
        layout: "",
        media: {
          layout: "single",
          items: [
            picture(
              "Lighthouse",
              "Dette resultat er med no throttling - har prøvet med 3G og 4G og viste ikke samme resultat. Det reflekteres over i næste sektion.",
              "mellemrumLighthouse.png",
            ),
          ],
        },
      },
      {
        heading: "Next step",
        theme: "dark",
        paragraphs: [
          "Skulle jeg arbejde videre med Mellemrum, ville jeg fokusere på at optimere performance og tilføje flere funktioner, der forbedrer brugeroplevelsen yderligere. Det kunne feks. være at implementere flere CRUD funktioner - såsom slette og/eller redigere events. Slette deres tilmelding og eventuelt et login system.",
          "Jeg vil også arbejde med at optimere performance, så platformen bliver hurtigere og mere responsiv. Dette kan gøres ved at optimere billeder, reducere unødvendige scripts og implementere cachingstrategier.",
          "Så hjemmesiden bliver mere stabil og hurtigere at bruge.",
        ],
      },
    ],
  },
  {
    slug: "Vuuh",
    title: "Onboarding for Vuuh",
    year: "2026",
    category: "UX/UI · Brugertest · Figma",
    description:
      "Case 2 var et gruppeprojekt, med fokus på onboarding oplevelsen hos firmaet Vuuh.",
    services: "Nielsen’s 10 Usability Heuristics · Cognitive Walkthrough",
    collaboration: "Gruppeprojekt · 3. semester",
    tools: "Brugertest · Figma · UX/UI",
    cover: asset("vuuhCover.png"),
    coverAlt: "",
    links: [
      {
        label: "Figma prototype",
        url: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&starting-point-node-id=187%3A1116&t=ENCYw39DZVTtNzA8-1",
      },
      {
        label: "FigJam",
        url: "https://www.figma.com/board/NZdBDp6xkuzHmOg9IzNhYy/Case-2---LAES?node-id=0-1&p=f&t=5MOYvDb8w1F8UH3v-0",
      },
      {
        label: "UX Audit",
        url: "https://drive.google.com/file/d/1r6ZC2bulI5YFLgJ1n-_2rd0doWEptNk5/view?usp=sharing",
      },
    ],
    story: [
      {
        heading: "Om projektet",
        paragraphs: [
          "Vuuh's produkt er en shopify extension service.",
          "Det hjælper webshopejere med at slippe for manuelt arbejde, og lader Vuuh automatisk dele produktinformation og billeder mellem brands og butikker ved hjælp af AI. Problemet opstår, da Vuuh er svært at sætte op uden hjælp udefra. For at kunne lave en skarp onboarding, ville vi finde ud af, hvad der gjorde processen besværlig, og hvordan den kunne gøres nemmere med de funktioner, Vuuh allerede havde.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "Undersøgelse og prioritering",
        paragraphs: [
          "Undersøgelsen af den nuværende onboarding viste, at brugerflowet indeholder for mange steps og mangler tydelig vejledning. Flere steps fremstår som afslutningen på processen, selvom der stadig er handlinger, der skal gennemføres. Det skaber usikkerhed om næste handling og kan få brugeren til at gå i stå eller opgive onboarding undervejs.",
          "På baggrund af dette prioriterede vi, at forenkle flowet, forebygge fejl og tydeliggøre brugerens næste handling. Fokus var at reducere unødvendige steps og klik samt sikre tydelig feedback, så brugeren altid ved, hvor vedkommende befinder sig i processen, og hvad der mangler. Målet var at skabe en mere intuitiv onboarding, der gør det nemmere at gennemføre processen uden hjælp.",
          "Det faglige grundlag var Jakob Nielsens heuristikker 5. Error Prevention og 7. Flexibility and Efficiency of Use. Den første handler om at forebygge fejl og usikkerhed, mens den anden fokuserer på at gøre interaktioner mere effektive og reducere unødvendige handlinger. Heuristikkerne understøttede derfor prioriteringen af et enklere og mere overskueligt brugerflow, der mindsker risikoen for frafald og tab af potentielle kunder.",
        ],
        layout: "text-above",
        media: {
          layout: "text-above",
          items: [picture("Undersøgelse af onboarding", "", "uxFindings.png")],
        },
      },
      {
        heading: "Løsning og faglige valg",
        theme: "dark",
        paragraphs: [
          "For at imødekomme udfordringerne fra undersøgelsen valgte vi at implementere et guidet onboarding-flow (Wizard/Guided Steps) til testordren. Brugeren bliver trin for trin introduceret til processen, hvor hvert step forklarer den næste handling. Ved at trykke på “GOT IT!” kan brugeren fortsætte til næste trin. Samtidig nedtones informationer, som ikke er relevante for den aktuelle handling, så brugerens fokus holdes på det vigtigste.",
          "Efter download af testordren vises en loading-side, der tydeliggør, at der er tale om en testordre, som ikke bliver vist i brugerens webshop. Når processen er gennemført, vises en pop-up med beskeden “Order is successfully downloaded!”.",
        ],
        links: [
          {
            label: "Link til gennemgang af optimiseret onboarding",
            url: "https://www.figma.com/proto/MeZ6V3TVoAOar2gzLS52rb/Case-2---Vuuh?node-id=187-1116&starting-point-node-id=187%3A1116&t=zavENyVEb9OSFZTQ-1",
          },
        ],
      },
      {
        heading: "Resultat og dokumentation",
        paragraphs: [
          "Løsningen tager direkte udgangspunkt i undersøgelsens identificerede problemer med manglende vejledning og usikkerhed om næste handling. Det guidede flow skaber en tydeligere struktur, mens nedtoning af irrelevante informationer reducerer visuel støj. Loading-indikatoren og bekræftelsesbeskeden giver brugeren feedback på processen og skaber klarhed over, hvornår handlingen er gennemført. Dermed bliver onboarding mere overskuelig og mindsker risikoen for, at brugeren går i stå undervejs.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "Refleksion",
        paragraphs: [
          "Projektet har givet mig værdifuld erfaring med at analysere brugerflows og identificere problemområder. Mine vigtigste refleksioner er:",
          "Brugervenlighed: Vigtigheden af at skabe en overskuelig og intuitiv onboarding-proces.",
          "Kommunikation: Tydelig kommunikation er afgørende for at guide brugeren gennem processen.",
          "Heuristikker: Hvordan heuristikker kan bruges til at identificere forbedringsmuligheder og kvalificere designbeslutninger.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading: "Forretningspotentiale",
        theme: "dark",
        paragraphs: [
          "Løsningen giver mulighed for, at kunderne af Vuuh selv kan gennemføre onboarding uden hjælp udefra. Det kan reducere behovet for support og frigøre ressourcer, som kan bruges på andre områder. Samtidig kan en mere brugervenlig onboarding øge konverteringsraten og fastholde kunderne, hvilket kan have en positiv effekt på Vuuh's forretning.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
    ],
  },
  {
    slug: "d'occasion",
    title: "La Rouge Subbrand",
    year: "2026",
    category: "Koncept udvikling · UX/UI · Designsystemer · Figma",
    intro:
      "Navnet på subbrandet er d'occasion, og kommer fra fransk, hvor det også kan betyde: preowned.",
    description:
      "Udtænk et subbrand for La Rouge, der har fokus på preowned fashion.",
    services: "",
    collaboration: "Gruppeprojekt · 3. semester",
    tools: "Figma",
    cover: asset("d'occasionCover.png"),
    coverAlt:
      "Billede af navnet på vores subbrand, d'occasion, med en rød baggrund og et hvidt logo.",
    links: [
      {
        label: "Figma prototype",
        url: "https://www.figma.com/proto/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=513-12734&p=f&t=oJP8U4KNp5vBXKnA-1&scaling=min-zoom&content-scaling=fixed&page-id=225%3A3&starting-point-node-id=274%3A3893&show-proto-sidebar=1",
      },
      {
        label: "Figma",
        url: "https://www.figma.com/design/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=225-3&t=7li7BWWxJFleuBx5-1",
      },
      {
        label: "Branddeck",
        url: "https://www.figma.com/design/i98oArkal1wU1PSigmsBzn/La-Rogue-Secondhand-Case?node-id=721-6304&t=64xCu5yq8CqpsPwz-1",
      },
    ],
    story: [
      {
        heading: "Case og udfordring",
        paragraphs: [
          "Casen handlede om at videreudvikle LA RŌUGEs eksisterende secondhand-koncept og undersøge, hvordan det kunne få sin egen identitet og stå stærkere som et selvstændigt brand. Konceptet er i dag en del af hovedbrandets hjemmeside og mangler et særskilt visuelt udtryk og en klar kommunikation, hvilket begrænser muligheden for at nå nye målgrupper - særligt yngre forbrugere med interesse for secondhand. Mit bidrag bestod i konceptudvikling og design med fokus på at skabe en tydelig visuel retning og et selvstændigt univers, der kan styrke konceptets identitet og gøre det mere relevant for målgruppen.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
      {
        heading:
          "Hvilke indsigter gav vores undersøgelser, og hvordan prioriterede vi?",
        paragraphs: [
          "Ud fra vores desk research kom vi frem til vores 3 hovedindsigter.",
          "Dem prioriterede vi, da de var de mest relevante for vores konceptudvikling og design.",
        ],
        layout: "text-above",
        media: {
          layout: "single",
          items: [picture("Indsigter", "", "indsigterLaRouge.png")],
        },
      },
      {
        heading: "Målgruppe",
        paragraphs: [
          "Gennem desk research fandt vi frem til, at LA RŌUGEs eksisterende målgruppe ikke i høj grad køber genbrug. Derfor valgte vi at rette konceptet mod en yngre målgruppe, som i højere grad interesserer sig for secondhand og cirkulært forbrug. Det dannede grundlag for vores konceptudvikling og design, hvor målet var at skabe et univers, der appellerer til den nye målgruppe.",
        ],
      },
      {
        heading: "Koncept udvikling",
        paragraphs: [
          "Det vigtigste valg under udviklingen af subbrandet var at skabe et visuelt udtryk, der både adskilte sig fra LA RŌUGE og samtidig bevarede en visuel forbindelse til moderselskabet.",
          "I denne del har vi hoppet rigtig meget frem of tilbage mellem de foreskellige visuelle identiteter, men rundede af med moodboard 4, som vi kalder for det endelige moodboard. Det var det moodboard, som vi følte bedst repræsenterede vores subbrand, og som vi kunne arbejde videre med i designprocessen.",
          "Vi beholdte elegancen fra La RŌUGE, men tilføjede et mere legende og kreativt udtryk, der appellerede til vores nye målgruppen. Vi valgte at fokusere på en kombination af farver, typografi og grafiske elementer, der kunne skabe en stærk visuel identitet og differentiere subbrandet fra konkurrenterne.",
        ],
        media: {
          layout: "carousel",
          items: [
            picture("Pop og Flash moodboard", "", "popFlash.png"),
            picture(
              "Art deco og flapper æstetik moodboard",
              "",
              "artFlapper.png",
            ),
            picture(
              "Fransk modeillustration og håndskrift moodboard",
              "",
              "franskSkrift.png",
            ),
            picture("Det endelige moodboard", "", "skrevetMood.png"),
          ],
        },
      },
      {
        heading: "Styletile og designsystem",
        layout: "text-above",
        media: {
          layout: "carousel",
          items: [
            picture("Vores logo designs", "", "laRougeLogo.png"),
            picture("Farver", "", "laRougeFarver.png"),
            picture("Typografi", "", "laRougeTypo.png"),
            picture("Tone of voice", "", "laRougeTone.png"),
            picture("Styletile", "", "laRougeSystem.png"),
          ],
        },
      },
      {
        heading: "Gimmicks",
        theme: "dark",
        layout: "text-above",
        paragraphs: [
          "Som en stor del af vores subbrand, udviklede vi nogle gimmicks, som kunne bruges til at skabe opmærksomhed omkring subbrandet og dets produkter. Den ene gimmick tager fat i rødstrømpe bevægelsen, hvor man får et par røde strømper med ved første køb - noget som kan være med til at skabbe et fælleskab, hvis man er en del af det.",
          "Den anden gimmick er en takke note, som man får med ved første køb. Den er med til at gøre det mere personligt for kunden, og muliggør at La RŌUGE kan skabe en stærkere forbindelse med kunderne ved at tilføje en personlig touch til købeprocessen.",
        ],
        media: {
          layout: "comparison",
          items: [
            picture("Gimmick 1", "", "laRougeSokker.png"),
            picture("Gimmick 2", "", "laRougeTak.png"),
          ],
        },
      },
      {
        heading: "Faglig refleksion",
        paragraphs: [
          "Vi stod ofte overfor udfordringer, hvor vi skulle finde en balance mellem at skabe et selvstændigt subbrand og samtidig bevare en visuel forbindelse til moderselskabet. Det krævede en del iterationer og feedback for at finde den rette balance.",
          "Vi lærte vigtigheden af at have en klar konceptuel retning og at være åbne for feedback og iterationer i designprocessen. Det har været en værdifuld erfaring, der har styrket vores evne til at udvikle et subbrand, der både er unikt og relevant for målgruppen.",
        ],
      },
      {
        heading: "Forretningspotentiale",
        paragraphs: [
          "Et selvstændigt secondhand-subbrand kan hjælpe LA RŌUGE med at nå en yngre målgruppe, tiltrække nye kunder og skabe øget aktivitet omkring virksomhedens eksisterende re-commerce-koncept. En tydelig identitet og en mere overskuelig brugerrejse kan gøre det lettere at købe og videresælge tøj, hvilket potentielt kan øge omsætningen, styrke kundeloyaliteten og skabe mere værdi af virksomhedens eksisterende produkter.",
        ],
        layout: "",
        media: { layout: "single", items: [picture()] },
      },
    ],
    reflection: [
      "I takt med at vi udviklede d'occasion, var det vigtigt for mig at bevare det elegante og feminine udtryk, som allerede kendetegnede La RŌUGE. Selvom d’occasion blev udviklet som et subbrand med brandarketypen The Lover, ønskede jeg ikke, at dette skulle føre til et design med en tydelig seksuel undertone. For mig handlede det i højere grad om at formidle sensualitet gennem elegance, æstetik og feminine detaljer frem for at skabe et udtryk, der virkede direkte eller seksualiseret.",
      "Derfor var jeg særligt opmærksom på, at vores visuelle valg understøttede den ønskede identitet. Undervejs måtte jeg flere gange udfordre retningen i vores idéudvikling, når designet begyndte at bevæge sig mod et mere maskulint udtryk eller satte manden i centrum. Jeg ønskede i stedet at fastholde et univers, hvor kvinden og hendes oplevelse var omdrejningspunktet, og hvor det feminine blev fremhævet på en sofistikeret og stilren måde. Det var vigtigt for mig, at d’occasion fik sin egen identitet uden at miste forbindelsen til La RŌUGEs eksisterende brandunivers..",
    ],
  },
  {
    slug: "LilleRo",
    title: "Idéudvikling og design af appen LilleRo",
    year: "2026",
    category: "UX/UI · Frontend · Brugerinddragelse · React · Supabase · Figma",
    intro: "Kan vi hjælpe forældre med at få ro i maven?",
    description:
      "Dette gruppeprojekt omhandler udviklingen af en app til forældre med børn, der har type 1 diabetes. Formålet med app'en er at gøre hverdagen mere overskuelig for familier, som ofte står med mange praktiske og mentale udfordringer i forbindelse med sygdommen.",
    services: "Frontend · UX/UI · Brugerinddragelse",
    collaboration: "2 mandsgruppeprojekt · 2. semester",
    tools: "Figma · React · Supabase · VSC · GitHub",
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
