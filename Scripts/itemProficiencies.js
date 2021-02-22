// change enumerable for the first three entries?
let weapons = new Map([
    ["Firearms", [{ name: "firearms", proficient: false }]],   //this will likely be a problem later when it comes to items
    ["SimpleWeapons", [{ name: "simple weapons", proficient: false }]],
    ["MartialWeapons", [{ name: "martial weapons", proficient: false }]],
    ["Club", [{ name: "club", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d4", damageType: "bludgeoning", copper: 0, silver: 1, gold: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Dagger", [{ name: "dagger", simple: true, martial: false, melee: true, reach: false, ranged: true, range: "20/60", damage: "1d4", damageType: "piercing", copper: 0, silver: 0, gold: 2, weight: 1, light: true, heavy: false, finesse: true, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Greatclub", [{ name: "greatclub", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "bludgeoning", copper: 0, silver: 2, gold: 0, weight: 10, light: false, heavy: false, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Handaxe", [{ name: "handaxe", simple: true, martial: false, melee: true, reach: false, ranged: true, range: "20/60", damage: "1d6", damageType: "slashing", copper: 0, silver: 0, gold: 5, weight: 2, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Javelin", [{ name: "javelin", simple: true, martial: false, melee: true, reach: false, ranged: true, range: "30/120", damage: "1d6", damageType: "piercing", copper: 0, silver: 5, gold: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Lighthammer", [{ name: "light hammer", simple: true, martial: false, melee: true, reach: false, ranged: false, range: "20/60", damage: "1d4", damageType: "bludgeoning", copper: 0, silver: 0, gold: 2, weight: 2, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Mace", [{ name: "mace", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "bludgeoning", copper: 0, silver: 0, gold: 5, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Quarterstaff", [{ name: "quarterstaff", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "bludgeoning", copper: 0, silver: 2, gold: 0, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d8", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Sickle", [{ name: "sickle", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d4", damageType: "slashing", copper: 0, silver: 0, gold: 1, weight: 2, light: true, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Spear", [{ name: "spear", simple: true, martial: false, melee: true, reach: false, ranged: false, range: "20/60", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 1, weight: 3, light: false, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: true, versatileDMG: "1d8", ammunition: false, loading: false, special: false, proficient: false }]],
    ["LightCrossbow", [{ name: "light crossbow", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "80/320", damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 25, weight: 5, light: false, heavy: false, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: true, special: false, proficient: false }]],
    ["Dart", [{ name: "dart", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "20/60", damage: "1d4", damageType: "piercing", copper: 5, silver: 0, gold: 0, weight: 0.25, light: false, heavy: false, finesse: true, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Shortbow", [{ name: "shortbow", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "80/320", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 25, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: false, special: false, proficient: false }]],
    ["Sling", [{ name: "sling", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "30/120", damage: "1d4", damageType: "bludgeoning", copper: 0, silver: 1, gold: 0, weight: 0, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: true, loading: false, special: false, proficient: false }]],
    ["Battleaxe", [{ name: "battleaxe", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "slashing", copper: 0, silver: 0, gold: 10, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d10", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Flail", [{ name: "flail", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "bludgeoning", copper: 0, silver: 0, gold: 10, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Glaive", [{ name: "glaive", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d10", damageType: "slashing", copper: 0, silver: 0, gold: 20, weight: 6, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Greataxe", [{ name: "greataxe", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d12", damageType: "slashing", copper: 0, silver: 0, gold: 30, weight: 7, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Greatsword", [{ name: "greatsword", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "2d6", damageType: "slashing", copper: 0, silver: 0, gold: 50, weight: 6, light: false, heavy: true, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Halberd", [{ name: "halberd", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d10", damageType: "slashing", copper: 0, silver: 0, gold: 20, weight: 6, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Lance", [{ name: "lance", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d12", damageType: "piercing", copper: 0, silver: 0, gold: 10, weight: 6, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: "Special: You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.", proficient: false }]],
    ["Longsword", [{ name: "longsword", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "slashing", copper: 0, silver: 0, gold: 15, weight: 3, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d10", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Maul", [{ name: "maul", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "2d6", damageType: "bludgeoning", copper: 0, silver: 0, gold: 10, weight: 10, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Morningstar", [{ name: "morningstar", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 15, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Pike", [{ name: "pike", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d10", damageType: "piercing", copper: 0, silver: 0, gold: 5, weight: 18, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Rapier", [{ name: "rapier", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 25, weight: 2, light: false, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Scimitar", [{ name: "scimitar", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "slashing", copper: 0, silver: 0, gold: 25, weight: 3, light: true, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Shortsword", [{ name: "shortsword", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 10, weight: 2, light: true, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Trident", [{ name: "trident", simple: false, martial: true, melee: true, reach: false, ranged: true, range: "20/60", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 5, weight: 4, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: true, versatileDMG: "1d8", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Warpick", [{ name: "war pick", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 5, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Warhammer", [{ name: "warhammer", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "bludgeoning", copper: 0, silver: 0, gold: 15, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d10", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Whip", [{ name: "whip", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d4", damageType: "slashing", copper: 0, silver: 0, gold: 2, weight: 3, light: false, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Blowgun", [{ name: "blowgun", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "25/100", damage: "1", damageType: "piercing", copper: 0, silver: 0, gold: 10, weight: 1, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: true, loading: true, proficient: false }]],
    ["HandCrossbow", [{ name: "hand crossbow", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "30/120", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 75, weight: 3, light: true, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: true, loading: true, proficient: false }]],
    ["HeavyCrossbow", [{ name: "heavy crossbow", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "100/400", damage: "1d10", damageType: "piercing", copper: 0, silver: 0, gold: 50, weight: 18, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: true, proficient: false }]],
    ["Longbow", [{ name: "longbow", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "150/600", damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 50, weight: 2, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: false, special: false, proficient: false }]],
    ["Net", [{ name: "net", simple: false, martial: true, melee: false, reach: false, ranged: false, range: "5/15", damage: 0, damageType: "bludgeoning", copper: 0, silver: 0, gold: 1, weight: 3, light: false, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.", proficient: false }]]]);

// Armors 
let armors = new Map([
    ["PaddedArmor", [{ name: "Padded Armor", armorType: "Light", gold: 5, copper: 0, silver: 0, armorClass: 11, strengthRequired: 0, stealthDisadvatage: true, weight: 8 }]],
    ["LeatherArmor", [{ name: "Leather Armor", armorType: "Light", copper: 0, silver: 0, gold: 10, armorClass: 11, strengthRequired: 0, stealthDisadvatage: false, weight: 10 }]],
    ["StuddedLeather", [{ name: "Studded Leather Armor", armorType: "Light", copper: 0, silver: 0, gold: 45, armorClass: 12, strengthRequired: 0, stealthDisadvatage: false, weight: 13 }]],
    ["Hide", [{ name: "Hide Armor", armorType: "Medium", copper: 0, silver: 0, gold: 10, armorClass: 12, maxDexMod: 2, strengthRequired: 0, stealthDisadvatage: false, weight: 12 }]],
    ["ChainShirt", [{ name: "Chain Shirt", armorType: "Medium", copper: 0, silver: 0, gold: 50, armorClass: 13, maxDexMod: 2, strengthRequired: 0, stealthDisadvatage: false, weight: 20 }]],
    ["Scale", [{ name: "Scale mail", armorType: "Medium", copper: 0, silver: 0, gold: 50, armorClass: 14, maxDexMod: 2, strengthRequired: 0, stealthDisadvatage: true, weight: 45 }]],
    ["Breastplate", [{ name: "Breastplate", armorType: "Medium", copper: 0, silver: 0, gold: 400, armorClass: 14, maxDexMod: 2, strengthRequired: 0, stealthDisadvatage: false, weight: 20 }]],
    ["Half", [{ name: "Half plate", armorType: "Medium", copper: 0, silver: 0, gold: 750, armorClass: 15, maxDexMod: 2, strengthRequired: 0, stealthDisadvatage: true, weight: 40 }]],
    ["Ring", [{ name: "Ring mail", armorType: "Heavy", copper: 0, silver: 0, gold: 30, armorClass: 14, strengthRequired: 0, stealthDisadvatage: true, weight: 40 }]],
    ["Chainmail", [{ name: "Chain mail", armorType: "Heavy", copper: 0, silver: 0, gold: 75, armorClass: 16, strengthRequired: 13, stealthDisadvatage: true, weight: 55 }]],
    ["Splint", [{ name: "Splint", armorType: "Heavy", copper: 0, silver: 0, gold: 200, armorClass: 17, strengthRequired: 15, stealthDisadvatage: true, weight: 60 }]],
    ["Plate", [{ name: "Plate", armorType: "Heavy", copper: 0, silver: 0, gold: 1500, armorClass: 18, strengthRequired: 15, stealthDisadvatage: true, weight: 65 }]],
    ["Shield", [{ name: "Shield", armorType: "Shield", copper: 0, silver: 0, gold: 10, armorClass: 2, strengthRequired: 0, stealthDisadvatage: false, weight: 6 }]],
])

//Armor Proficiencies
let characterArmorProficiencies = [
    ["none", false],
    ["light armor", false],
    ["medium armor", false],
    ["heavy armor", false],
    ["shields", false]
];

let tools = new Map([
    ["Alchemist", [{ name: "alchemist's supplies", type: "Artisan's tools", silver: 0, gold: 50, weight: 8, proficient: false, description: "Alchemist's supplies enable a character to produce useful concoctions, such as acid or alchemist's fire. Components: Alchemist's supplies include two glass beakers, a metal frame to hold a beaker in place over an open flame, a glass stirring rod, a small mortar and pestle, and a pouch of common alchemical ingredients, including salt, powdered iron, and purified water." }]],
    ["Brewer", [{ name: "vrewer's supplies", type: "Artisan's tools", silver: 0, gold: 20, weight: 9, proficient: false, description: "Brewing is the art of producing beer. Not only does beer serve as an alcoholic beverage, but the process of brewing purifies water. Crafting beer takes weeks of fermentation, but only a few hours of work. Components: Brewer's supplies include a large glass jug, a quantity of hops, a siphon, and several feet of tubing." }]],
    ["Calligrapher", [{ name: "calligrapher's supplies", type: "Artisan's tools", silver: 0, gold: 10, weight: 5, proficient: false, description: "Calligraphy treats writing as a delicate, beautiful art. Calligraphers produce text that is pleasing to the eye, using a style that is difficult to forge. Their supplies also give them some ability to examine scripts and determine if they are legitimate, since a calligrapher's training involves long hours of studying writing and attempting to replicate its style and design. Components: Calligrapher's supplies include ink, a dozen sheets of parchment, and three quills." }]],
    ["Carpenter", [{ name: "carpenter's tools", type: "Artisan's tools", silver: 0, gold: 8, weight: 6, proficient: false, description: "Skill at carpentry enables a character to construct wooden structures. A carpenter can build a house, a shack, a wooden cabinet, or similar items.  Components: Carpenter's tools include a saw, a hammer, nails, a hatchet, a square, a ruler, an adze, a plane, and a chisel." }]],
    ["Cartographer", [{ name: "cartographer's tools", type: "Artisan's tools", silver: 0, gold: 15, weight: 6, proficient: false, description: "Using cartographer's tools, you can create accurate maps to make travel easier for yourself and those who come after you. These maps can range from large-scale depictions of mountain ranges to diagrams that show the layout of a dungeon level. Components: Cartographer's tools consist of a quill, ink, parchment, a pair of compasses, calipers, and a ruler." }]],
    ["Cobbler", [{ name: "cobbler's tools", type: "Artisan's tools", silver: 0, gold: 5, weight: 5, proficient: false, description: "Although the cobbler's trade might seem too humble for an adventurer, a good pair of boots will see a character across rugged wilderness and through deadly dungeons. Components: Cobbler's tools consist of a hammer, an awl, a knife, a shoe stand, a cutter, spare leather, and thread." }]],
    ["Cook", [{ name: "cook's utensils", type: "Artisan's tools", silver: 0, gold: 1, weight: 8, proficient: false, description: "Adventuring is a hard life. With a cook along on the journey, your meals will be much better than the typical mix of hardtack and dried fruit. Components: Cook's utensils include a metal pot, knives, forks, a stirring spoon, and a ladle." }]],
    ["Glassblower", [{ name: "glassblower's tools", type: "Artisan's tools", silver: 0, gold: 30, weight: 5, proficient: false, description: "Someone who is proficient with glassblower's tools has not only the ability to shape glass, but also specialized knowledge of the methods used to produce glass objects. Components: The tools include a blowpipe, a small marver, blocks, and tweezers. You need a source of heat to work glass." }]],
    ["Jeweler", [{ name: "jeweler's tools", type: "Artisan's tools", silver: 0, gold: 25, weight: 2, proficient: false, description: "Training with jeweler's tools includes the basic techniques needed to beautify gems. It also gives you expertise in identifying precious stones. Components: Jeweler's tools consist of a small saw and hammer, files, pliers, and tweezers." }]],
    ["Leatherworker", [{ name: "leatherworker's tools", type: "Artisan's tools", silver: 0, gold: 5, weight: 5, proficient: false, description: "Knowledge of leatherworking extends to lore concerning animal hides and their properties. It also confers knowledge of leather armor and similar goods. Components: Leatherworker's tools include a knife, a small mallet, an edger, a hole punch, thread, and leather scraps." }]],
    ["Mason", [{ name: "mason's tools", type: "Artisan's tools", silver: 0, gold: 10, weight: 8, proficient: false, description: "Mason's tools allow you to craft stone structures, including walls and buildings crafted from brick. Components: Mason's tools consist of a trowel, a hammer, a chisel, brushes, and a square." }]],
    ["Painter", [{ name: "painter's supplies", type: "Artisan's tools", silver: 0, gold: 10, weight: 5, proficient: false, description: "Proficiency with painter's supplies represents your ability to paint and draw. You also acquire an understanding of art history, which can aid you in examining works of art. Components: Painter's supplies include an easel, canvas, paints, brushes, charcoal sticks, and a palette." }]],
    ["Potter", [{ name: "potter's tools", type: "Artisan's tools", silver: 0, gold: 10, weight: 3, proficient: false, description: "Potter's tools are used to create a variety of ceramic objects, most typically pots and similar vessels. Components: Potter's tools include potter's needles, ribs, scrapers, a knife, and calipers." }]],
    ["Smith", [{ name: "smith's tools", type: "Artisan's tools", silver: 0, gold: 20, weight: 8, proficient: false, description: "Smith's tools allow you to work metal, heating it to alter its shape, repair damage, or work raw ingots into useful items. Components: Smith's tools include hammers, tongs, charcoal, rags, and a whetstone." }]],
    ["Tinker", [{ name: "tinker's tools", type: "Artisan's tools", silver: 0, gold: 50, weight: 10, proficient: false, description: "A set of tinker's tools is designed to enable you to repair many mundane objects. Though you can't manufacture much with tinker's tools, you can mend torn clothes, sharpen a worn sword, and patch a tattered suit of chain mail. Components: Tinker's tools include a variety of hand tools, thread, needles, a whetstone, scraps of cloth and leather, and a small pot of glue." }]],
    ["Weaver", [{ name: "weaver's tools", type: "Artisan's tools", silver: 0, gold: 1, weight: 5, proficient: false, description: "Weaver's tools allow you to create cloth and tailor it into articles of clothing. Components: Weaver's tools include thread, needles, and scraps of cloth. You know how to work a loom, but such equipment is too large to transport." }]],
    ["Woodcarver", [{ name: "woodcarver's tools", type: "Artisan's tools", silver: 0, gold: 1, weight: 5, proficient: false, description: "Woodcarver's tools allow you to craft intricate objects from wood, such as wooden tokens or arrows. Components: Woodcarver's tools consist of a knife, a gouge, and a small saw." }]],
    ["Disguise", [{ name: "disguise kit", type: "Kit", silver: 0, gold: 25, weight: 3, proficient: false, description: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.The perfect tool for anyone who wants to engage in trickery, a disguise kit enables its owner to adopt a false identity. Components: A disguise kit includes cosmetics, hair dye, small props, and a few pieces of clothing." }]],
    ["Forgery", [{ name: "forgery kit", type: "Kit", silver: 0, gold: 15, weight: 5, proficient: false, description: "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document. A forgery kit is designed to duplicate documents and to make it easier to copy a person's seal or signature. Components: A forgery kit includes several different types of ink, a variety of parchments and papers, several quills, seals and sealing wax, gold and silver leaf, and small tools to sculpt melted wax to mimic a seal." }]],
    ["Herbalism", [{ name: "herbalism kit", type: "Kit", silver: 0, gold: 5, weight: 3, proficient: false, description: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing. Proficiency with an herbalism kit allows you to identify plants and safely collect their useful elements. Components: An herbalism kit includes pouches to store herbs, clippers and leather gloves for collecting plants, a mortar and pestle, and several glass jars." }]],
    ["Navigator", [{ name: "navigator's tools", type: "Kit", silver: 0, gold: 25, weight: 3, proficient: false, description: "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea. Proficiency with navigator's tools helps you determine a true course based on observing the stars. It also grants you insight into charts and maps while developing your sense of direction. Components: Navigator's tools include a sextant, a compass, calipers, a ruler, parchment, ink, and a quill." }]],
    ["Poisoner", [{ name: "poisoner's kit", type: "Kit", silver: 0, gold: 50, weight: 2, proficient: false, description: "A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons. Additionally, the Crafting and Harvesting Poison rules require the use of a poisoner's kit. A poisoner's kit is a favored resource for thieves, assassins, and others who engage in skulduggery. It allows you to apply poisons and create them from various materials. Your knowledge of poisons also helps you treat them. Components: A poisoner's kit includes glass vials, a mortar and pestle, chemicals, and a glass stirring rod." }]],
    ["Thieves", [{ name: "thieves' tools", type: "Kit", silver: 0, gold: 25, weight: 1, proficient: false, description: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.Perhaps the most common tools used by adventurers, thieves' tools are designed for picking locks and foiling traps. Proficiency with the tools also grants you a general knowledge of traps and locks. Components: Thieves' tools include a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers." }]],
    ["Vehicles", [{ name: "vehicles (land or water)", type: "Kit", silver: 0, gold: 0, weight: 0, proficient: false, description: "You know how to operate certain land or water vehicles." }]],
    ["Dice", [{ name: "dice set", type: "Gaming sets", silver: 1, gold: 0, weight: 0, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
    ["Dragonchess", [{ name: "dragonchess set", type: "Gaming sets", silver: 0, gold: 1, weight: 0.5, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
    ["Cards", [{ name: "dlaying card set", type: "Gaming sets", silver: 5, gold: 0, weight: 0, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
    ["Ante", [{ name: "three-Dragon Ante set", type: "Gaming sets", silver: 0, gold: 1, weight: 0, proficient: false, description: "Proficiency with a gaming set applies to one type of game, such as Three-Dragon Ante or games of chance that use dice. Components: A gaming set has all the pieces needed to play a specific game or type of game, such as a complete deck of cards or a board and tokens." }]],
    ["Bagpipes", [{ name: "bagpipes", type: "Instruments", silver: 0, gold: 30, weight: 6, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Drum", [{ name: "drum", type: "Instruments", silver: 0, gold: 6, weight: 3, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Dulcimer", [{ name: "dulcimer", type: "Instruments", silver: 0, gold: 25, weight: 10, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Flute", [{ name: "flute", type: "Instruments", silver: 0, gold: 2, weight: 1, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Lute", [{ name: "lute", type: "Instruments", silver: 0, gold: 35, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Lyre", [{ name: "lyre", type: "Instruments", silver: 0, gold: 30, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Horn", [{ name: "horn", type: "Instruments", silver: 0, gold: 3, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Pan", [{ name: "pan flute", type: "Instruments", silver: 0, gold: 12, weight: 2, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Shawm", [{ name: "shawm", type: "Instruments", silver: 0, gold: 2, weight: 1, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]],
    ["Viol", [{ name: "viol", type: "Instruments", silver: 0, gold: 30, weight: 1, proficient: false, description: "Proficiency with a musical instrument indicates you are familiar with the techniques used to play it. You also have knowledge of some songs commonly performed with that instrument." }]]])

//Languages

let languages = new Map([
    ["Abyssal", [{ name: "Abyssal", proficient: false }]],
    ["Celestial", [{ name: "Celestial", proficient: false }]],
    ["Common", [{ name: "Common", proficient: false }]],
    ["DeepSpeech", [{ name: "Deep Speech", proficient: false }]],
    ["Draconic", [{ name: "Draconic", proficient: false }]],
    ["Druidic", [{ name: "Druidic", proficient: false }]],
    ["Dwarvish", [{ name: "Dwarvish", proficient: false }]],
    ["Elvish", [{ name: "Elvish", proficient: false }]],
    ["Giant", [{ name: "Giant", proficient: false }]],
    ["Gnomish", [{ name: "Gnomish", proficient: false }]],
    ["Goblin", [{ name: "Goblin", proficient: false }]],
    ["Halfling", [{ name: "Halfling", proficient: false }]],
    ["Infernal", [{ name: "Infernal", proficient: false }]],
    ["Orc", [{ name: "Orc", proficient: false }]],
    ["Primordial", [{ name: "Primordial", proficient: false }]],
    ["Sylvan", [{ name: "Sylvan", proficient: false }]],
    ["Thieves", [{ name: "Thieves' Cant", proficient: false }]],
    ["Undercommon", [{ name: "Undercommon", proficient: false }]]])

//Saving throws
let savingThrows = new Map([
    ["Strength", [{ name: "Strength", proficient: false }]],
    ["Dexterity", [{ name: "Dexterity", proficient: false }]],
    ["Constitution", [{ name: "Constitution", proficient: false }]],
    ["Wisdom", [{ name: "Wisdom", proficient: false }]],
    ["Intelligence", [{ name: "Intelligence", proficient: false }]],
    ["Charisma", [{ name: "Charisma", proficient: false }]]])