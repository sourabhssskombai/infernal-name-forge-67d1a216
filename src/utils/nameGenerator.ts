
interface NameParts {
  prefixes: string[];
  suffixesMale: string[];
  suffixesFemale: string[];
  virtues: string[];
  sins: string[];
  infernal: string[];
  descriptive: string[];
}

export const nameDatabase: NameParts = {
  prefixes: [
    "Ash", "Astar", "Bel", "Brin", "Cress", "Damak", "Ekemon", "Fen", "Grim", "Hex",
    "Ith", "Kara", "Keth", "Mal", "Mel", "Mor", "Neth", "Nir", "Ral", "Sam", "Shar",
    "Thav", "Therai", "Val", "Ver", "Zar", "Baph", "Charn", "Dhar", "Erebos", "Heth",
    "Infer", "Kaz", "Lil", "Malag", "Meph", "Nergal", "Phelg", "Pyrax", "Sar", "Skor", 
    "Tham", "Vesh", "Xar", "Zeph", "Bael", "Carn", "Dusk", "Glaaz", "Kiv", "Meloch",
    "Narn", "Oriax", "Pazz", "Rimmon", "Sabn", "Tethys", "Uziel", "Vorn", "Yann"
  ],
  suffixesMale: [
    "adius", "akas", "akos", "char", "cis", "dan", "dar", "gil", "gos", "ith",
    "izar", "kosh", "león", "lor", "mai", "non", "rai", "reus", "rius", "ron",
    "ros", "run", "sire", "thor", "thos", "thus", "tos", "vius", "vor", "xus",
    "zar", "anthus", "emon", "eas", "imon", "ius", "kas", "kos", "morn", "nix", "roth",
    "thon", "vian", "xius", "ryus", "dis", "noth", "riel", "then", "trius"
  ],
  suffixesFemale: [
    "aah", "aia", "ali", "alis", "alith", "ara", "aza", "cia", "dia", "ela", "ere",
    "esh", "esi", "etia", "hala", "hara", "ia", "iana", "ieh", "ila", "ina", "ira", "kali",
    "kira", "lith", "loth", "maia", "nara", "nea", "nia", "ora", "ori", "oris", "rah",
    "raia", "riel", "ris", "seis", "sera", "this", "thya", "tish", "xis", "yra",
    "zara", "anthe", "elith", "esha", "inra", "ixia", "kyra", "medea", "nyra", "tria",
    "phine", "risa", "thea", "vira", "wyse", "xira", "zora"
  ],
  virtues: [
    "Hope", "Honor", "Glory", "Light", "Mercy", "Faith", "Courage", "Justice", "Truth",
    "Valor", "Grace", "Pride", "Wisdom", "Redemption", "Charity", "Devotion", "Temperance", 
    "Humility", "Serenity", "Loyalty", "Honor", "Fortitude", "Patience", "Kindness", 
    "Forgiveness", "Clarity", "Purity", "Resolve", "Harmony"
  ],
  sins: [
    "Wrath", "Ruin", "Spite", "Malice", "Torment", "Dread", "Doom", "Terror", "Despair",
    "Agony", "Venom", "Vengeance", "Scorn", "Ash", "Thorn", "Shadow", "Blood", "Dusk", 
    "Blight", "Misery", "Pain", "Deceit", "Cruelty", "Betrayal", "Hatred", "Anguish", 
    "Tyranny", "Rancor", "Malevolence", "Chaos", "Envy", "Greed", "Lust", "Pride", 
    "Gluttony", "Sloth"
  ],
  infernal: [
    "Abaddon", "Asmodeus", "Baalzebul", "Dispater", "Fierna", "Geryon", "Glasya", "Levistus",
    "Mammon", "Mephistopheles", "Zariel", "Belial", "Bel", "Tiamat", "Moloch", "Nergal",
    "Baalberith", "Hutijin", "Mahathallah", "Barbatos", "Alloces", "Astaroth", "Balan",
    "Bathym", "Eligor", "Focalor", "Forneus", "Ipos", "Leraje", "Marchosias", "Phenex",
    "Sabnock", "Shax", "Vine", "Zagan", "Berith", "Lilith", "Malaphar", "Arioch"
  ],
  descriptive: [
    "Crimson", "Obsidian", "Midnight", "Infernal", "Ashen", "Burning", "Fiery", "Dark",
    "Shadowed", "Hellborn", "Ember", "Flame", "Sooty", "Charred", "Smoldering", "Diabolic",
    "Abyssal", "Sinister", "Onyx", "Sulfurous", "Brimstone", "Scarlet", "Devilish", 
    "Forsaken", "Unholy", "Corrupt", "Fallen", "Damned", "Accursed", "Nether", "Doomed",
    "Blighted", "Hexed", "Wicked", "Dire", "Ominous", "Malevolent"
  ]
};

export interface GeneratedName {
  name: string;
  type: "male" | "female" | "virtue" | "sin" | "descriptive" | "infernal";
  meaning?: string;
}

// Generate a meaning for the name
export const generateMeaning = (name: string, type: string): string => {
  const meaningTemplates = [
    `${name} means "one who walks between worlds"`,
    `In the infernal tongue, ${name} signifies "marked by destiny"`,
    `Those named ${name} are said to possess extraordinary arcane potential`,
    `${name} is an ancient tiefling name meaning "finder of hidden paths"`,
    `Bearers of the name ${name} are known for their exceptional ${type === "virtue" ? "virtue" : "cunning"}`,
    `In tiefling culture, ${name} represents "one who defies fate"`,
    `The name ${name} carries the weight of ancestral power`,
    `${name} translates to "seeker of forbidden knowledge"`,
    `Those called ${name} are destined for greatness in dark or light`,
    `The name ${name} suggests one who stands at the crossroads of destiny`,
    `In ancient scrolls, ${name} is associated with "mastery over inner demons"`,
    `${name} signifies "born of two worlds but servant to none"`,
    `The name ${name} carries the essence of both infernal heritage and mortal spirit`,
    `Legends speak of those named ${name} as having unique insight into cosmic mysteries`,
    `${name} denotes "one who forges their own chains or breaks them"`
  ];

  // Return a random meaning from the templates
  return meaningTemplates[Math.floor(Math.random() * meaningTemplates.length)];
};

// Generate a single name
export const generateSingleName = (gender: "male" | "female" | "any" = "any"): GeneratedName => {
  const { prefixes, suffixesMale, suffixesFemale, virtues, sins, infernal, descriptive } = nameDatabase;
  
  // Determine the type of name to generate
  const nameTypes = ["standard", "virtue", "sin", "descriptive", "infernal"];
  const selectedType = nameTypes[Math.floor(Math.random() * nameTypes.length)];
  
  let name = "";
  let type: "male" | "female" | "virtue" | "sin" | "descriptive" | "infernal";
  
  if (selectedType === "standard") {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    
    // Determine gender if "any" was selected
    let actualGender: "male" | "female";
    if (gender === "any") {
      actualGender = Math.random() > 0.5 ? "male" : "female";
    } else {
      actualGender = gender;
    }
    
    // Get the appropriate suffix based on gender
    const suffixes = actualGender === "male" ? suffixesMale : suffixesFemale;
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    name = prefix + suffix;
    type = actualGender;
  } else if (selectedType === "virtue") {
    name = virtues[Math.floor(Math.random() * virtues.length)];
    type = "virtue";
  } else if (selectedType === "sin") {
    name = sins[Math.floor(Math.random() * sins.length)];
    type = "sin";
  } else if (selectedType === "descriptive") {
    name = descriptive[Math.floor(Math.random() * descriptive.length)];
    type = "descriptive";
  } else {
    name = infernal[Math.floor(Math.random() * infernal.length)];
    type = "infernal";
  }
  
  // Generate a meaning for the name
  const meaning = generateMeaning(name, type);
  
  return { name, type, meaning };
};

// Generate multiple names
export const generateNames = (count: number, gender: "male" | "female" | "any" = "any"): GeneratedName[] => {
  const names: GeneratedName[] = [];
  
  for (let i = 0; i < count; i++) {
    names.push(generateSingleName(gender));
  }
  
  return names;
};
