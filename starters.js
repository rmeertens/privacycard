// Conversation starters. Each language has a list of open questions to write
// about. Hints are revealed one level at a time, from single words up to
// full example sentences, so answers can grow from simple to interesting.
//
// A hint item is either a string or [text, translation]. Grammar hints use
// `text` for the explanation and `items` for example sentences.
window.STARTERS = {
  nl: {
    name: "Dutch",
    flag: "🇳🇱",
    questions: [
      {
        id: "today",
        q: "Wat heb je vandaag gedaan?",
        en: "What did you do today?",
        hints: [
          { label: "Words", items: [["vandaag", "today"], ["vanochtend", "this morning"], ["eerst", "first"], ["daarna", "afterwards"], ["'s avonds", "in the evening"]] },
          { label: "Things", items: [["het werk", "work"], ["de supermarkt", "the supermarket"], ["de fiets", "the bike"], ["het ontbijt", "breakfast"], ["de koffie", "coffee"]] },
          { label: "Verbs", items: [["werken (gewerkt)", "to work"], ["fietsen (gefietst)", "to cycle"], ["eten (gegeten)", "to eat"], ["kopen (gekocht)", "to buy"], ["gaan (gegaan)", "to go"]] },
          { label: "Grammar", title: "Perfect tense: hebben/zijn + past participle", text: "Use the perfect tense for things you did. Conjugate hebben or zijn and put the past participle at the end. Verbs of movement to a place usually take zijn.", items: [["Ik heb koffie gedronken.", "I drank coffee."], ["Ik ben naar de winkel gegaan.", "I went to the shop."]] },
          { label: "Build it up", items: [["Ik heb gewerkt.", "I worked."], ["Eerst heb ik koffie gedronken en daarna ben ik naar mijn werk gefietst.", "First I drank coffee and then I cycled to work."], ["Nadat ik boodschappen had gedaan, heb ik samen met een vriend gekookt.", "After I had done the shopping, I cooked together with a friend."]] }
        ]
      },
      {
        id: "weekend",
        q: "Wat doe je graag in het weekend?",
        en: "What do you like to do at the weekend?",
        hints: [
          { label: "Words", items: [["graag", "gladly / like to"], ["liever", "rather"], ["meestal", "usually"], ["soms", "sometimes"], ["altijd", "always"]] },
          { label: "Things", items: [["het park", "the park"], ["de markt", "the market"], ["het boek", "the book"], ["de film", "the film"], ["het terras", "the terrace"]] },
          { label: "Verbs", items: [["wandelen", "to walk"], ["lezen", "to read"], ["uitslapen", "to sleep in"], ["afspreken (met)", "to meet up (with)"], ["koken", "to cook"]] },
          { label: "Grammar", title: "Graag, liever, het liefst + verb second", text: "Put graag after the verb to say you like doing something. Use liever (rather) and het liefst (most of all) to compare. If you start with a time word, the verb still comes second, so the subject moves after it.", items: [["Ik lees graag.", "I like reading."], ["Op zaterdag slaap ik uit.", "On Saturday I sleep in."]] },
          { label: "Build it up", items: [["Ik lees graag.", "I like reading."], ["Op zaterdag slaap ik uit en daarna wandel ik in het park.", "On Saturday I sleep in and then I walk in the park."], ["Als het mooi weer is, spreek ik het liefst met vrienden af op een terras.", "When the weather is nice, I most like to meet friends on a terrace."]] }
        ]
      },
      {
        id: "food",
        q: "Wat is je favoriete eten?",
        en: "What is your favourite food?",
        hints: [
          { label: "Words", items: [["lekker", "tasty"], ["zoet", "sweet"], ["zout", "salty"], ["pittig", "spicy"], ["gezond", "healthy"]] },
          { label: "Things", items: [["de pasta", "pasta"], ["de soep", "soup"], ["de kaas", "cheese"], ["het brood", "bread"], ["de groenten", "vegetables"]] },
          { label: "Verbs", items: [["koken", "to cook"], ["bakken", "to bake / fry"], ["proeven", "to taste"], ["bestellen", "to order"], ["houden van", "to love"]] },
          { label: "Grammar", title: "Adjectives: when to add -e", text: "An adjective before a noun usually gets -e. The exception: het-words with een (or no article) keep the bare form. After omdat (because) the verb goes to the end.", items: [["de lekkere soep", "the tasty soup"], ["een lekker broodje", "a tasty sandwich"], ["…omdat het snel klaar is.", "…because it is ready quickly."]] },
          { label: "Build it up", items: [["Ik vind pasta lekker.", "I like pasta."], ["Mijn favoriete eten is pasta, omdat het snel en makkelijk is.", "My favourite food is pasta, because it is quick and easy."], ["Ik hou van pittige soep, vooral als mijn oma die op een koude dag maakt.", "I love spicy soup, especially when my grandma makes it on a cold day."]] }
        ]
      },
      {
        id: "home",
        q: "Hoe ziet je huis eruit?",
        en: "What does your home look like?",
        hints: [
          { label: "Words", items: [["groot", "big"], ["klein", "small"], ["licht", "bright"], ["gezellig", "cosy"], ["oud", "old"]] },
          { label: "Things", items: [["de keuken", "the kitchen"], ["de slaapkamer", "the bedroom"], ["de tuin", "the garden"], ["het balkon", "the balcony"], ["de bank", "the sofa"]] },
          { label: "Verbs", items: [["wonen", "to live"], ["hebben", "to have"], ["staan", "to stand"], ["liggen", "to lie"], ["hangen", "to hang"]] },
          { label: "Grammar", title: "Er is / er zijn and position verbs", text: "Use er is / er zijn for 'there is / there are'. Dutch prefers a position verb instead: staan for upright things, liggen for flat things, hangen for things on a wall.", items: [["Er is een tuin.", "There is a garden."], ["Er staat een bank in de woonkamer.", "There is a sofa in the living room."], ["Aan de muur hangt een schilderij.", "There is a painting on the wall."]] },
          { label: "Build it up", items: [["Mijn huis is klein.", "My home is small."], ["Ik woon in een klein appartement met een balkon.", "I live in a small flat with a balcony."], ["In de woonkamer staat een grote bank waar ik 's avonds graag op lees.", "In the living room there is a big sofa where I like to read in the evening."]] }
        ]
      },
      {
        id: "holiday",
        q: "Waar ben je het laatst op vakantie geweest?",
        en: "Where did you last go on holiday?",
        hints: [
          { label: "Words", items: [["vorig jaar", "last year"], ["vorige zomer", "last summer"], ["warm", "warm"], ["mooi", "beautiful"], ["druk", "busy"]] },
          { label: "Things", items: [["het strand", "the beach"], ["de bergen", "the mountains"], ["het hotel", "the hotel"], ["de trein", "the train"], ["de stad", "the city"]] },
          { label: "Verbs", items: [["reizen (was/reisde)", "to travel"], ["zwemmen (zwom)", "to swim"], ["bezoeken (bezocht)", "to visit"], ["zien (zag)", "to see"], ["blijven (bleef)", "to stay"]] },
          { label: "Grammar", title: "Simple past for telling a story", text: "Start with the perfect tense, then switch to the simple past (imperfectum) to describe what it was like. Common irregular forms: was/waren, ging/gingen, zag/zagen. After toen (when) the verb goes to the end.", items: [["Het was heel warm.", "It was very warm."], ["We gingen elke dag zwemmen.", "We went swimming every day."]] },
          { label: "Build it up", items: [["Ik was in Spanje.", "I was in Spain."], ["Vorige zomer ben ik met de trein naar Frankrijk gereisd.", "Last summer I travelled to France by train."], ["Toen we in de bergen waren, zagen we elke ochtend de zon opkomen.", "When we were in the mountains, we saw the sun rise every morning."]] }
        ]
      },
      {
        id: "learn",
        q: "Wat wil je volgend jaar leren?",
        en: "What do you want to learn next year?",
        hints: [
          { label: "Words", items: [["volgend jaar", "next year"], ["misschien", "maybe"], ["eindelijk", "finally"], ["moeilijk", "difficult"], ["leuk", "fun"]] },
          { label: "Things", items: [["de taal", "the language"], ["de gitaar", "the guitar"], ["de cursus", "the course"], ["het rijbewijs", "the driving licence"], ["de app", "the app"]] },
          { label: "Verbs", items: [["leren", "to learn"], ["oefenen", "to practise"], ["proberen", "to try"], ["beginnen (met)", "to start (with)"], ["willen", "to want"]] },
          { label: "Grammar", title: "Modal verbs and gaan + infinitive", text: "A modal verb (willen, kunnen, moeten) sits in second place and the infinitive goes to the end. For plans, use gaan + infinitive. Zou graag … willen is a polite 'would like to'.", items: [["Ik wil gitaar leren spelen.", "I want to learn to play guitar."], ["Ik ga Spaans leren.", "I'm going to learn Spanish."]] },
          { label: "Build it up", items: [["Ik wil koken leren.", "I want to learn to cook."], ["Volgend jaar ga ik eindelijk beginnen met een cursus Spaans.", "Next year I'm finally going to start a Spanish course."], ["Ik zou graag piano willen leren, zodat ik samen met mijn kinderen kan spelen.", "I would like to learn piano, so that I can play together with my children."]] }
        ]
      },
      {
        id: "person",
        q: "Wie is een belangrijk persoon in je leven?",
        en: "Who is an important person in your life?",
        hints: [
          { label: "Words", items: [["aardig", "kind"], ["grappig", "funny"], ["slim", "clever"], ["behulpzaam", "helpful"], ["altijd", "always"]] },
          { label: "Things", items: [["de vriend / vriendin", "friend"], ["de moeder", "mother"], ["de collega", "colleague"], ["de buurman", "neighbour"], ["de familie", "family"]] },
          { label: "Verbs", items: [["helpen", "to help"], ["kennen", "to know (a person)"], ["bewonderen", "to admire"], ["lachen", "to laugh"], ["bellen", "to call"]] },
          { label: "Grammar", title: "Relative clauses with die and dat", text: "Add detail about a person with die (de-words and plurals) or dat (het-words). The verb in the relative clause goes to the end.", items: [["Mijn zus, die in Utrecht woont, …", "My sister, who lives in Utrecht, …"], ["het meisje dat naast me zit", "the girl who sits next to me"]] },
          { label: "Build it up", items: [["Mijn moeder is belangrijk.", "My mother is important."], ["Mijn beste vriend is grappig en hij helpt me altijd.", "My best friend is funny and he always helps me."], ["Ik bewonder mijn oma, die op haar zeventigste nog Engels is gaan leren.", "I admire my grandma, who started learning English at seventy."]] }
        ]
      },
      {
        id: "weather",
        q: "Wat vind je van het weer vandaag?",
        en: "What do you think of the weather today?",
        hints: [
          { label: "Words", items: [["koud", "cold"], ["warm", "warm"], ["nat", "wet"], ["zonnig", "sunny"], ["bewolkt", "cloudy"]] },
          { label: "Things", items: [["de regen", "the rain"], ["de wind", "the wind"], ["de zon", "the sun"], ["de paraplu", "the umbrella"], ["de jas", "the coat"]] },
          { label: "Verbs", items: [["regenen", "to rain"], ["waaien", "to blow (wind)"], ["schijnen", "to shine"], ["vinden", "to think / find"], ["hopen", "to hope"]] },
          { label: "Grammar", title: "Weather with het, opinions with dat", text: "Weather verbs use het as the subject. Give an opinion with Ik vind het …, and a wish with Ik hoop dat … (verb to the end).", items: [["Het regent. Het waait.", "It's raining. It's windy."], ["Ik hoop dat het morgen droog is.", "I hope it's dry tomorrow."]] },
          { label: "Build it up", items: [["Het regent.", "It's raining."], ["Het is koud en het waait hard, dus ik draag een dikke jas.", "It's cold and very windy, so I'm wearing a thick coat."], ["Hoewel het nu bewolkt is, hoop ik dat de zon vanmiddag gaat schijnen.", "Although it's cloudy now, I hope the sun will shine this afternoon."]] }
        ]
      },
      {
        id: "shopping",
        q: "Wat heb je laatst in de supermarkt gekocht?",
        en: "What did you buy at the supermarket recently?",
        hints: [
          { label: "Words", items: [["goedkoop", "cheap"], ["duur", "expensive"], ["in de aanbieding", "on offer"], ["vers", "fresh"], ["biologisch", "organic"]] },
          { label: "Things", items: [["de melk", "milk"], ["de appels", "apples"], ["het brood", "bread"], ["de kassa", "the till"], ["de bonuskaart", "the loyalty card"]] },
          { label: "Verbs", items: [["kopen (gekocht)", "to buy"], ["betalen (betaald)", "to pay"], ["afrekenen (afgerekend)", "to pay at the till"], ["scannen (gescand)", "to scan"], ["besparen (bespaard)", "to save"]] },
          { label: "Grammar", title: "Separable verbs", text: "Verbs like afrekenen split in the present tense: the prefix goes to the end. In the perfect tense, ge- goes between the prefix and the verb.", items: [["Ik reken af bij de kassa.", "I pay at the till."], ["Ik heb afgerekend.", "I have paid."]] },
          { label: "Build it up", items: [["Ik heb brood gekocht.", "I bought bread."], ["Ik heb appels gekocht, want ze waren in de aanbieding.", "I bought apples, because they were on offer."], ["Toen ik bij de kassa afrekende, liet ik mijn bonuskaart scannen en bespaarde ik twee euro.", "When I paid at the till, I had my loyalty card scanned and saved two euros."]] }
        ]
      }
    ]
  },

  en: {
    name: "English",
    flag: "🇬🇧",
    questions: [
      {
        id: "today",
        q: "What did you do today?",
        hints: [
          { label: "Words", items: ["today", "this morning", "first", "then", "afterwards"] },
          { label: "Things", items: ["work", "the supermarket", "my bike", "breakfast", "a coffee"] },
          { label: "Verbs", items: ["work (worked)", "cycle (cycled)", "eat (ate)", "buy (bought)", "go (went)"] },
          { label: "Grammar", title: "Past simple for finished actions", text: "Use the past simple for things that are finished. Regular verbs add -ed; many common verbs are irregular and need to be learned.", items: ["I worked from home.", "I went to the shop and bought some milk."] },
          { label: "Build it up", items: ["I worked.", "First I had a coffee, and then I cycled to work.", "After I had finished work, I cooked dinner with a friend who was visiting."] }
        ]
      },
      {
        id: "weekend",
        q: "What do you like doing at the weekend?",
        hints: [
          { label: "Words", items: ["usually", "sometimes", "always", "rather", "most of all"] },
          { label: "Things", items: ["the park", "the market", "a book", "a film", "a café"] },
          { label: "Verbs", items: ["walk", "read", "sleep in", "meet up (with)", "cook"] },
          { label: "Grammar", title: "like / love / enjoy + -ing", text: "After like, love, enjoy and prefer, use the -ing form of the verb. Frequency words (usually, always) go before the main verb.", items: ["I love reading.", "I usually sleep in on Saturdays."] },
          { label: "Build it up", items: ["I like reading.", "On Saturday I sleep in, and then I go for a walk in the park.", "When the weather is nice, I'd rather meet friends at a café than stay at home."] }
        ]
      },
      {
        id: "food",
        q: "What is your favourite food?",
        hints: [
          { label: "Words", items: ["delicious", "sweet", "salty", "spicy", "healthy"] },
          { label: "Things", items: ["pasta", "soup", "cheese", "bread", "vegetables"] },
          { label: "Verbs", items: ["cook", "bake", "taste", "order", "love"] },
          { label: "Grammar", title: "Giving reasons with because / especially when", text: "Add a reason with because + a full clause. Use especially when to make your answer more specific.", items: ["I like pasta because it's quick to make.", "I love soup, especially when it's cold outside."] },
          { label: "Build it up", items: ["I like pasta.", "My favourite food is pasta, because it's quick and easy.", "I love spicy soup, especially when my grandmother makes it on a cold winter day."] }
        ]
      },
      {
        id: "home",
        q: "What does your home look like?",
        hints: [
          { label: "Words", items: ["big", "small", "bright", "cosy", "old"] },
          { label: "Things", items: ["the kitchen", "the bedroom", "the garden", "a balcony", "a sofa"] },
          { label: "Verbs", items: ["live", "have", "share", "decorate", "relax"] },
          { label: "Grammar", title: "There is / there are + prepositions", text: "Use there is for one thing and there are for several. Add a place with in, on, next to or opposite.", items: ["There is a sofa in the living room.", "There are two pictures on the wall."] },
          { label: "Build it up", items: ["My home is small.", "I live in a small flat with a balcony.", "In the living room there's a big sofa where I like to read in the evenings."] }
        ]
      },
      {
        id: "holiday",
        q: "Where did you last go on holiday?",
        hints: [
          { label: "Words", items: ["last year", "last summer", "warm", "beautiful", "busy"] },
          { label: "Things", items: ["the beach", "the mountains", "a hotel", "the train", "the city"] },
          { label: "Verbs", items: ["travel (travelled)", "swim (swam)", "visit (visited)", "see (saw)", "stay (stayed)"] },
          { label: "Grammar", title: "Past continuous for background", text: "Use the past continuous (was/were + -ing) to set the scene, and the past simple for the events that happened.", items: ["The sun was shining when we arrived.", "While we were walking, we saw a fox."] },
          { label: "Build it up", items: ["I was in Spain.", "Last summer I travelled to France by train.", "While we were staying in the mountains, we watched the sun rise every morning."] }
        ]
      },
      {
        id: "learn",
        q: "What do you want to learn next year?",
        hints: [
          { label: "Words", items: ["next year", "maybe", "finally", "difficult", "fun"] },
          { label: "Things", items: ["a language", "the guitar", "a course", "a driving licence", "an app"] },
          { label: "Verbs", items: ["learn", "practise", "try", "start", "want"] },
          { label: "Grammar", title: "Talking about plans: going to / would like to", text: "Use going to for plans you have decided on. Use would like to for wishes. Add so that to explain the purpose.", items: ["I'm going to learn Spanish.", "I'd like to learn the piano."] },
          { label: "Build it up", items: ["I want to learn to cook.", "Next year I'm finally going to start a Spanish course.", "I'd like to learn the piano so that I can play together with my children."] }
        ]
      },
      {
        id: "person",
        q: "Who is an important person in your life?",
        hints: [
          { label: "Words", items: ["kind", "funny", "clever", "helpful", "always"] },
          { label: "Things", items: ["a friend", "my mother", "a colleague", "my neighbour", "my family"] },
          { label: "Verbs", items: ["help", "know", "admire", "laugh", "call"] },
          { label: "Grammar", title: "Relative clauses with who / which", text: "Add detail about a person with who, and about a thing with which or that. Use commas when the extra detail isn't needed to identify them.", items: ["My sister, who lives in Leeds, …", "the friend who taught me to swim"] },
          { label: "Build it up", items: ["My mother is important.", "My best friend is funny and always helps me.", "I admire my grandmother, who started learning English at the age of seventy."] }
        ]
      },
      {
        id: "weather",
        q: "What do you think of the weather today?",
        hints: [
          { label: "Words", items: ["cold", "warm", "wet", "sunny", "cloudy"] },
          { label: "Things", items: ["the rain", "the wind", "the sun", "an umbrella", "a coat"] },
          { label: "Verbs", items: ["rain", "blow", "shine", "think", "hope"] },
          { label: "Grammar", title: "Contrast with although / but", text: "Use but to join two ideas, or start with although to contrast them in one sentence. Hope is followed by a normal clause (often in the present tense).", items: ["It's cold, but it's sunny.", "Although it's cloudy, I hope it stays dry."] },
          { label: "Build it up", items: ["It's raining.", "It's cold and windy, so I'm wearing a thick coat.", "Although it's cloudy now, I hope the sun comes out this afternoon."] }
        ]
      },
      {
        id: "shopping",
        q: "What did you buy at the supermarket recently?",
        hints: [
          { label: "Words", items: ["cheap", "expensive", "on offer", "fresh", "organic"] },
          { label: "Things", items: ["milk", "apples", "bread", "the till", "a loyalty card"] },
          { label: "Verbs", items: ["buy (bought)", "pay (paid)", "scan (scanned)", "save (saved)", "pick up (picked up)"] },
          { label: "Grammar", title: "Countable and uncountable nouns", text: "Use a few / many with countable nouns (apples) and a little / much with uncountable ones (milk, bread). Some works for both.", items: ["I bought a few apples.", "We didn't buy much bread."] },
          { label: "Build it up", items: ["I bought some bread.", "I bought apples because they were on offer.", "When I paid at the till, I had my loyalty card scanned and saved two pounds."] }
        ]
      }
    ]
  }
};
