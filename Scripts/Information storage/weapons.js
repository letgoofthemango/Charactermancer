let weapons = new Map([
    ["Firearms", [{ name: "Firearms", proficient: false }]],
    ["Simpleweapons", [{ name: "Simple weapons", proficient: false }]], //this will likely be a problem later when it comes to items
    ["Martialweapons", [{ name: "Martial weapons", proficient: false }]],
    ["Club", [{ name: "Club", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d4", damageType: "bludgeoning", copper: 0, silver: 1, gold: 0, platinum: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Dagger", [{ name: "Dagger", simple: true, martial: false, melee: true, reach: false, ranged: true, range: "20/60", damage: "1d4", damageType: "piercing", copper: 0, silver: 0, gold: 2, platinum: 0, weight: 1, light: true, heavy: false, finesse: true, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Greatclub", [{ name: "Greatclub", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "bludgeoning", copper: 0, silver: 2, gold: 0, platinum: 0, weight: 10, light: false, heavy: false, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Handaxe", [{ name: "Handaxe", simple: true, martial: false, melee: true, reach: false, ranged: true, range: "20/60", damage: "1d6", damageType: "slashing", copper: 0, silver: 0, gold: 5, platinum: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Javelin", [{ name: "Javelin", simple: true, martial: false, melee: true, reach: false, ranged: true, range: "30/120", damage: "1d6", damageType: "piercing", copper: 0, silver: 5, gold: 0, platinum: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Lighthammer", [{ name: "Light hammer", simple: true, martial: false, melee: true, reach: false, ranged: false, range: "20/60", damage: "1d4", damageType: "bludgeoning", copper: 0, silver: 0, gold: 2, platinum: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Mace", [{ name: "Mace", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "bludgeoning", copper: 0, silver: 0, gold: 5, platinum: 0, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Quarterstaff", [{ name: "Quarterstaff", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "bludgeoning", copper: 0, silver: 2, gold: 0, platinum: 0, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d8", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Sickle", [{ name: "Sickle", simple: true, martial: false, melee: true, reach: false, ranged: false, range: 0, damage: "1d4", damageType: "slashing", copper: 0, silver: 0, gold: 1, platinum: 0, weight: 2, light: true, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Spear", [{ name: "Spear", simple: true, martial: false, melee: true, reach: false, ranged: false, range: "20/60", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 1, platinum: 0, weight: 3, light: false, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: true, versatileDMG: "1d8", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Lightcrossbow", [{ name: "Light crossbow", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "80/320", damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 25, platinum: 0, weight: 5, light: false, heavy: false, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: true, special: false, proficient: false }]],
    ["Dart", [{ name: "Dart", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "20/60", damage: "1d4", damageType: "piercing", copper: 5, silver: 0, gold: 0, platinum: 0, weight: 0.25, light: false, heavy: false, finesse: true, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Shortbow", [{ name: "Shortbow", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "80/320", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 25, platinum: 0, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: false, special: false, proficient: false }]],
    ["Sling", [{ name: "Sling", simple: true, martial: false, melee: false, reach: false, ranged: true, range: "30/120", damage: "1d4", damageType: "bludgeoning", copper: 0, silver: 1, gold: 0, platinum: 0, weight: 0, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: true, loading: false, special: false, proficient: false }]],
    ["Battleaxe", [{ name: "Battleaxe", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "slashing", copper: 0, silver: 0, gold: 10, platinum: 0, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d10", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Flail", [{ name: "Flail", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "bludgeoning", copper: 0, silver: 0, gold: 10, platinum: 0, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Glaive", [{ name: "Glaive", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d10", damageType: "slashing", copper: 0, silver: 0, gold: 20, platinum: 0, weight: 6, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Greataxe", [{ name: "Greataxe", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d12", damageType: "slashing", copper: 0, silver: 0, gold: 30, platinum: 0, weight: 7, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Greatsword", [{ name: "Greatsword", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "2d6", damageType: "slashing", copper: 0, silver: 0, gold: 50, platinum: 0, weight: 6, light: false, heavy: true, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Halberd", [{ name: "Halberd", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d10", damageType: "slashing", copper: 0, silver: 0, gold: 20, platinum: 0, weight: 6, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Lance", [{ name: "Lance", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d12", damageType: "piercing", copper: 0, silver: 0, gold: 10, platinum: 0, weight: 6, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: "Special: You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.", proficient: false }]],
    ["Longsword", [{ name: "Longsword", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "slashing", copper: 0, silver: 0, gold: 15, platinum: 0, weight: 3, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d10", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Maul", [{ name: "Maul", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "2d6", damageType: "bludgeoning", copper: 0, silver: 0, gold: 10, platinum: 0, weight: 10, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Morningstar", [{ name: "Morningstar", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 15, platinum: 0, weight: 4, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Pike", [{ name: "Pike", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d10", damageType: "piercing", copper: 0, silver: 0, gold: 5, platinum: 0, weight: 18, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Rapier", [{ name: "Rapier", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 25, platinum: 0, weight: 2, light: false, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Scimitar", [{ name: "Scimitar", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "slashing", copper: 0, silver: 0, gold: 25, platinum: 0, weight: 3, light: true, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Shortsword", [{ name: "Shortsword", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 10, platinum: 0, weight: 2, light: true, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Trident", [{ name: "Trident", simple: false, martial: true, melee: true, reach: false, ranged: true, range: "20/60", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 5, platinum: 0, weight: 4, light: true, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: true, versatileDMG: "1d8", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Warpick", [{ name: "War pick", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 5, platinum: 0, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Warhammer", [{ name: "Warhammer", simple: false, martial: true, melee: true, reach: false, ranged: false, range: 0, damage: "1d8", damageType: "bludgeoning", copper: 0, silver: 0, gold: 15, platinum: 0, weight: 2, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: true, versatileDMG: "1d10", ammunition: false, loading: false, special: false, proficient: false }]],
    ["Whip", [{ name: "Whip", simple: false, martial: true, melee: true, reach: true, ranged: false, range: 10, damage: "1d4", damageType: "slashing", copper: 0, silver: 0, gold: 2, platinum: 0, weight: 3, light: false, heavy: false, finesse: true, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: false, proficient: false }]],
    ["Blowgun", [{ name: "Blowgun", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "25/100", damage: "1", damageType: "piercing", copper: 0, silver: 0, gold: 10, platinum: 0, weight: 1, light: false, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: true, loading: true, proficient: false }]],
    ["Handcrossbow", [{ name: "Hand crossbow", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "30/120", damage: "1d6", damageType: "piercing", copper: 0, silver: 0, gold: 75, platinum: 0, weight: 3, light: true, heavy: false, finesse: false, thrown: false, twoHanded: false, versatile: false, versatileDMG: false, ammunition: true, loading: true, proficient: false }]],
    ["Heavycrossbow", [{ name: "Heavy crossbow", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "100/400", damage: "1d10", damageType: "piercing", copper: 0, silver: 0, gold: 50, platinum: 0, weight: 18, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: true, proficient: false }]],
    ["Longbow", [{ name: "Longbow", simple: false, martial: true, melee: false, reach: false, ranged: true, range: "150/600", damage: "1d8", damageType: "piercing", copper: 0, silver: 0, gold: 50, platinum: 0, weight: 2, light: false, heavy: true, finesse: false, thrown: false, twoHanded: true, versatile: false, versatileDMG: false, ammunition: true, loading: false, special: false, proficient: false }]],
    ["Net", [{ name: "Net", simple: false, martial: true, melee: false, reach: false, ranged: false, range: "5/15", damage: 0, damageType: "bludgeoning", copper: 0, silver: 0, gold: 1, platinum: 0, weight: 3, light: false, heavy: false, finesse: false, thrown: true, twoHanded: false, versatile: false, versatileDMG: false, ammunition: false, loading: false, special: "A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.", proficient: false }]]]);




//Weapon Proficiencies
let characterWeaponProficiencies = [
    ["Simple Weapons", false], //0
    ["Martial Weapons", false],//1
    ["Club", false],//2
    ["Dagger", false],//3
    ["Greatclub", false],//4
    ["Handaxe", false],//5
    ["Javelin", false],//6
    ["Light hammer", false],//7
    ["Mace", false],//8
    ["Quarterstaff", false],//9
    ["Sickle", false],//10
    ["Spear", false],//11
    ["Light Crossbow", false],//12
    ["Dart", false],//13
    ["Shortbow", false],//14
    ["Sling", false],//15
    ["Battleaxe", false],//16
    ["Flail", false],//17
    ["Glaive", false],//18
    ["Greataxe", false],//19
    ["Greatsword", false],//20
    ["Halberd", false],//21
    ["Lance", false],//22
    ["Longsword", false],//23
    ["Maul", false],//24
    ["Morningstar", false],//25
    ["Pike", false],//26
    ["Rapier", false],//27
    ["Scimitar", false],//28
    ["Shortsword", false],//29
    ["Trident", false],//30
    ["War pick", false],//31
    ["Warhammer", false],//32
    ["Whip", false],//33
    ["Blowgun", false],//34
    ["Hand Crossbow", false],//35
    ["Heavy Crossbow", false],//36
    ["Longbow", false],//37
    ["Net", false],//38
    ["Firearms", false]//39
];