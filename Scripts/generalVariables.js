//Stats
let strength = 8;
let strengthMod = Math.floor((strength - 10) / 2);
let strengthSaveMod;

let dexterity = 8;
let dexterityMod = Math.floor((dexterity - 10) / 2);
let dexteritySaveMod;

let constitution = 8;
let constitutionMod = Math.floor((constitution - 10) / 2);
let constitutionSaveMod;

let intelligence = 8;
let intelligenceMod = Math.floor((intelligence - 10) / 2);
let intelligenceSaveMod;

let wisdom = 8;
let wisdomMod = Math.floor((wisdom - 10) / 2);
let wisdomSaveMod;

let charisma = 8;
let charismaMod = Math.floor((charisma - 10) / 2);
let charismaSaveMod;

//Class
let characterClass = " ";
let characterSubClass = " ";

//Level
let proficiencyBonus = 2;
let characterLevel = 1;

// Name
let characterName = "Your character doesnt have a name yet";

//AC
let characterArmorClass;
let armorClass = 12;
let armorType = "Medium";
let hasShield = true;

//Background
let characterBackground = " ";

//Speed
let characterSpeed = "";

//Initiative
let initiativeMod = dexterityMod;

//Passive perception
let passivePerception = 10 + wisdomMod;



let skills = [{
    name: "Acrobatics",
    proficiency: 0, // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Animal Handling",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Arcana",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Athletics",
    proficiency: 0,
    calcStat: strengthMod,
    mod: 0,
}, {
    name: "Deception",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "History",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Insight",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Intimidation",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Investigation",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Medicine",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Nature",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Perception",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Performance",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Persuasion",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Religion",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Sleight of Hand",
    proficiency: 0,
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Stealth",
    proficiency: 0,
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Survival",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}];

//--------------------------------------function to calculate the characters skill modifiers---------------------------------------------------------------------
function updateSkills() {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].proficiency == 0) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 0);
        } else if (skills[i].proficiency == 1) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 0.5);
        } else if (skills[i].proficiency == 2) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 1);
        } else if (skills[i].proficiency == 3) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 2);
        } else {
            console.log(`something went terribly wrong with the calculation at ${skills[i].name} !!!!`);
        }
    }
}
updateSkills();

//Skills
let acrobaticsMod = skills[0].mod;
let animalHandlingMod = skills[1].mod;
let arcanaMod = skills[2].mod;
let athleticsMod = skills[3].mod;
let deceptionMod = skills[4].mod;
let historyMod = skills[5].mod;
let insightMod = skills[6].mod;
let intimidationMod = skills[7].mod;
let investigationMod = skills[8].mod;
let medicineMod = skills[9].mod;
let natureMod = skills[10].mod;
let perceptionMod = skills[11].mod;
let performanceMod = skills[12].mod;
let persuasionMod = skills[13].mod;
let religionMod = skills[14].mod;
let sleightOfHandMod = skills[15].mod;
let stealthMod = skills[16].mod;
let survivalMod = skills[17].mod;

function getNumber(mod) {
    if (mod >= 0) {
        return "+" + mod;
    } else {
        return mod.toString();
    }
}

//Weapon Proficiencies
let characterWeaponProficiency = [
    ["Simple Weapons", true],
    ["Martial Weapons", true]
];


//Armor Proficiencies
/* let characterArmorProficiency = [
    ["None", true],
    ["Light Armor", true]
    ["Medium Armor", true]
    ["Heavy Armor", true]
]; */

//Tool Proficiencies
let characterToolsProficiencies = [];


//Features:
let characterFeatures = [];


//Equipment
let characterEquipment = [];


//Feats
let characterFeats = [];


//Attacks
let characterAttacks = [];


//Spells
/* let characterSpells = [
    firstLevel[],
    secondLevel[],
    thirdLevel[],
    fourthLevel[],
    fifthLevel[],
    sixthLevel[],
    seventhLevel[],
    eigthLevel[],
    ninethLevel[],

]; */


//Hitpoints
/* let characterHitpoints; */


//Race
let characterRace;


//Alignment
let characterAlignment = "";


//Languages
let characterLanguages = [
    ["Abyssal", true],
    ["Celestial", true],
    ["Deep Speech", true],
    ["Draconic", true],
    ["Dwarvish", true],
    ["Elvish", true],
    ["Giant", true],
    ["Gnomish", true],
    ["Goblin", true],
    ["Halfling", true],
    ["Infernal", true],
    ["Orc", true],
    ["Primordial", true],
    ["Sylvan", true],
    ["Undercommon", true]
];


//Money

//Age
let characterAge = "";

//Height
let characterHeight = "";

//Weight
let characterWeight = "";

//Eye color
let characterEyes = "";

//Skin
let characterSkin = "";

//Hair color
let characterHair = "";

//Backstory
let characterBackstory = "";