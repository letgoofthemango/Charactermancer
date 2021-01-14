let tools = new Map([
  ["Alchemist", [{ name: "Alchemist's supplies", type: "Artisan's tools", silver: 0, gold: 50, weight: 8, proficient: false, description: "Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire. Components: Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water." }]],
  ["Brewer", [{ name: "Brewer's supplies", type: "Artisan's tools", silver: 0, gold: 20, weight: 9, proficient: false, description: "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work. Components: Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing." }]],
  ["Calligrapher", [{ name: "Calligrapher's supplies", type: "Artisan's tools", silver: 0, gold: 10, weight: 5, proficient: false, description: "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design. Components: Calligrapher's supplies include ink, a dozen sheets of parchment, and three quills." }]],
  ["Carpenter", [{ name: "Carpenter's tools", type: "Artisan's tools", silver: 0, gold: 8, weight: 6, proficient: false, description: "Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items.  Components: Carpenter's tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel." }]],
  ["Cartographer", [{ name: "Cartographer's tools", type: "Artisan's tools", silver: 0, gold: 15, weight: 6, proficient: false, description: "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level. Components: Cartographer's tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler." }]],
  ["Cobbler", [{ name: "Cobbler's tools", type: "Artisan's tools", silver: 0, gold: 5, weight: 5, proficient: false, description: "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons. Components: Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread." }]],
  ["Cook", [{ name: "Cook's utensils", type: "Artisan's tools", silver: 0, gold: 1, weight: 8, proficient: false, description: "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit. Components: Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle." }]],
  ["Glassblower", [{ name: "Glassblower's tools", type: "Artisan's tools", silver: 0, gold: 30, weight: 5, proficient: false, description: "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects. Components: The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass." }]],
  ["Jeweler", [{ name: "Jeweler's tools", type: "Artisan's tools", silver: 0, gold: 25, weight: 2, proficient: false, description: "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones. Components: Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers." }]],
  ["Leatherworker", [{ name: "Leatherworker's tools", type: "Artisan's tools", silver: 0, gold: 5, weight: 5, proficient: false, description: "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods. Components: Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps." }]],
  ["Mason", [{ name: "Mason's tools", type: "Artisan's tools", silver: 0, gold: 10, weight: 8, proficient: false, description: "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick. Components: Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square." }]],
  ["Painter", [{ name: "Painter's supplies", type: "Artisan's tools", silver: 0, gold: 10, weight: 5, proficient: false, description: "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art. Components: Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette." }]],
  ["Potter", [{ name: "Potter's tools", type: "Artisan's tools", silver: 0, gold: 10, weight: 3, proficient: false, description: "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels. Components: Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers." }]],
  ["Smith", [{ name: "Smith's tools", type: "Artisan's tools", silver: 0, gold: 20, weight: 8, proficient: false, description: "Smith's tools allow you to work metal, heating it to alter its shape, repair damage, or work raw ingots into useful items. Components: Smith's tools include hammers, tongs, charcoal, rags, and a whetstone." }]],
  ["Tinker", [{ name: "Tinker's tools", type: "Artisan's tools", silver: 0, gold: 50, weight: 10, proficient: false, description: "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail. Components: Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue." }]],
  ["Weaver", [{ name: "Weaver's tools", type: "Artisan's tools", silver: 0, gold: 1, weight: 5, proficient: false, description: "Weaver's tools allow you to create cloth and tailor it into articles of clothing. Components: Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport." }]],
  ["Woodcarver", [{ name: "Woodcarver's tools", type: "Artisan's tools", silver: 0, gold: 1, weight: 5, proficient: false, description: "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows. Components: Woodcarver's tools consist of a knife, a gouge, and a small saw." }]],
  ["Disguise", [{ name: "Disguise kit", type: "Kit", silver: 0, gold: 25, weight: 3, proficient: false, description: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity. Components: A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing." }]],
  ["Forgery", [{ name: "Forgery kit", type: "Kit", silver: 0, gold: 15, weight: 5, proficient: false, description: "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document. A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature. Components: A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal." }]],
  ["Herbalism", [{ name: "Herbalism kit", type: "Kit", silver: 0, gold: 5, weight: 3, proficient: false, description: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing. Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements. Components: An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars." }]],
  ["Navigator", [{ name: "Navigator's tools", type: "Kit", silver: 0, gold: 25, weight: 3, proficient: false, description: "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea. Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction. Components: Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill." }]],
  ["Poisoner", [{ name: "Poisoner's kit", type: "Kit", silver: 0, gold: 50, weight: 2, proficient: false, description: "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons. Additionally, the Crafting and Harvesting Poison rules require the use of a poisoner's kit. A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them. Components: A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod." }]],
  ["Thieves", [{ name: "Thieves' tools", type: "Kit", silver: 0, gold: 25, weight: 1, proficient: false, description: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks. Components: Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers." }]],
  ["Vehicles", [{ name: "Vehicles (land or water)", type: "Kit", silver: 0, gold: 0, weight: 0, proficient: false, description: "You know how to operate certain land or water vehicles." }]],
  ["Dice", [{ name: "Dice set", type: "Gaming sets", silver: 1, gold: 0, weight: 0, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
  ["Dragonchess", [{ name: "Dragonchess set", type: "Gaming sets", silver: 0, gold: 1, weight: 0.5, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
  ["Cards", [{ name: "Playing card set", type: "Gaming sets", silver: 5, gold: 0, weight: 0, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
  ["Ante", [{ name: "Three-Dragon Ante set", type: "Gaming sets", silver: 0, gold: 1, weight: 0, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
  ["Bagpipes", [{ name: "Bagpipes", type: "Instruments", silver: 0, gold: 30, weight: 6, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Drum", [{ name: "Drum", type: "Instruments", silver: 0, gold: 6, weight: 3, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Dulcimer", [{ name: "Dulcimer", type: "Instruments", silver: 0, gold: 25, weight: 10, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Flute", [{ name: "Flute", type: "Instruments", silver: 0, gold: 2, weight: 1, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Lute", [{ name: "Lute", type: "Instruments", silver: 0, gold: 35, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Lyre", [{ name: "Lyre", type: "Instruments", silver: 0, gold: 30, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Horn", [{ name: "Horn", type: "Instruments", silver: 0, gold: 3, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Pan", [{ name: "Pan flute", type: "Instruments", silver: 0, gold: 12, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Shawm", [{ name: "Shawm", type: "Instruments", silver: 0, gold: 2, weight: 1, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
  ["Viol", [{ name: "Viol", type: "Instruments", silver: 0, gold: 30, weight: 1, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]]]);

// const abcd = tools.get(0)[0].proficient;

//Languages
let characterLanguageProficiencies = [
  ["Abyssal", false],//0
  ["Celestial", false],//1
  ["Deep Speech", false],//2
  ["Draconic", false],//3
  ["Dwarvish", false],//4
  ["Elvish", false],//5
  ["Giant", false],//6
  ["Gnomish", false],//7
  ["Goblin", false],//8
  ["Halfling", false],//9
  ["Infernal", false],//10
  ["Orc", false],//1
  ["Primordial", false],//12
  ["Sylvan", false],//13
  ["Undercommon", false],//14
  ["Choose 1", false],//15
  ["Choose 2", false],//16
  ["Choose 3", false]//17
];





/* let characterToolProficiencies = [
  ["Alchemist's supplies", false],//0
  ["Brewer's supplies", false],//1
  ["Calligrapher's supplies", false],//2
  ["Carpenter's tools", false],//3
  ["Cartographer's tools", false],//4
  ["Cobbler's tools", false],//5
  ["Cook's utensils", false],//6
  ["Glassblower's tools", false],//7
  ["Jeweler's tools", false],//8
  ["Leatherworker's tools", false],//9
  ["Mason's tools", false],//10
  ["Painter's supplies", false],//11
  ["Potter's tools", false],//12
  ["Smith's tools", false],//13
  ["Tinker's tools", false],//14
  ["Weaver's tools", false],//15
  ["Woodcarver's tools", false],//16
  ["Disguise Kit", false],//17
  ["Forgery kit", false],//18
  ["Herbalism kit", false],//19
  ["Navigator's tools", false],//20
  ["Poisoner's kit", false],//21
  ["Thieves' tools", false],//22
  ["Vehicles (land or water)", false],//23
  ["Dice set", false],//24
  ["Dragonchess set", false],//25
  ["Playing card set", false],//26
  ["Three-Dragon Ante set", false],//27
  ["Bagpipes", false],//28
  ["Drum", false],//29
  ["Dulcimer", false],//30
  ["Flute", false],//31
  ["Lute", false],//32
  ["Lyre", false],//33
  ["Horn", false],//34
  ["Pan flute", false],//35
  ["Shawm", false],//36
  ["Viol", false],//37
  ["Choose 1", false],//38
  ["Choose 2", false],//39
  ["Choose 3", false]//40
]; */