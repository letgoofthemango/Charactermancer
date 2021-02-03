 let proficiencyBonus = 2;
//------------------------------STATS--------------------------------------
let abilityScores = [{
    name: "Strength",
    value: 8,
    mod: function() { return Math.floor((this.value - 10) / 2); },
    saveMod: function() { return this.mod() + proficiencyBonus; }
}, {
    name: "Dexterity",
    value: 8,
    mod: function() { return Math.floor((this.value - 10) / 2); },
    saveMod: function() { return this.mod() + proficiencyBonus; }
}, {
    name: "Constitution",
    value: 8,
    mod: function() { return Math.floor((this.value - 10) / 2); },
    saveMod: function() { return this.mod() + proficiencyBonus; }
}, {
    name: "Intelligence",
    value: 8,
    mod: function() { return Math.floor((this.value - 10) / 2); },
    saveMod: function() { return this.mod() + proficiencyBonus; }
}, {
    name: "Wisdom",
    value: 8,
    mod: function() { return Math.floor((this.value - 10) / 2); },
    saveMod: function() { return this.mod() + proficiencyBonus; }
}, {
    name: "Charisma",
    value: 8,
    mod: function() { return Math.floor((this.value - 10) / 2); },
    saveMod: function() { return this.mod() + proficiencyBonus; }
}];
//Class
let characterClass = " ";
let characterSubClass = " ";
const ARTIFICER = 'Artificer';
const BARBARIAN = 'Barbarian';
const BARD = 'Bard';
const CLERIC = 'Cleric';
const DRUID = 'Druid';
const FIGHTER = 'Fighter';
const MONK = 'Monk';
const MYSTIC = 'Mystic';
const PALADIN = 'Paladin';
const RANGER = 'Ranger';
const ROGUE = 'Rogue';
const SORCERER = 'Sorcerer';
const WARLOCK = 'Warlock';
const WIZARD = 'Wizard';

//Level
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

/* //Initiative
let initiativeMod = abilityScores[1].mod.bind(abilityScores[1])();

//Passive perception
let passivePerception = 10 + abilityScores[4].mod.bind(abilityScores[4])(); */

let characterFightingStyle;

let skills = [{
    name: "Acrobatics",
    proficiency: 0, // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
    calcStat: abilityScores[1].mod.bind(abilityScores[1]),
    mod: 0,
}, {
    name: "Animal Handling",
    proficiency: 0,
    calcStat: abilityScores[4].mod.bind(abilityScores[4]),
    mod: 0,
}, {
    name: "Arcana",
    proficiency: 0,
    calcStat: abilityScores[3].mod.bind(abilityScores[3]),
    mod: 0,
}, {
    name: "Athletics",
    proficiency: 0,
    calcStat: abilityScores[0].mod.bind(abilityScores[0]),
    mod: 0,
}, {
    name: "Deception",
    proficiency: 0,
    calcStat: abilityScores[5].mod.bind(abilityScores[5]),
    mod: 0,
}, {
    name: "History",
    proficiency: 0,
    calcStat: abilityScores[3].mod.bind(abilityScores[3]),
    mod: 0,
}, {
    name: "Insight",
    proficiency: 0,
    calcStat: abilityScores[4].mod.bind(abilityScores[4]),
    mod: 0,
}, {
    name: "Intimidation",
    proficiency: 0,
    calcStat: abilityScores[5].mod.bind(abilityScores[5]),
    mod: 0,
}, {
    name: "Investigation",
    proficiency: 0,
    calcStat: abilityScores[3].mod.bind(abilityScores[3]),
    mod: 0,
}, {
    name: "Medicine",
    proficiency: 0,
    calcStat: abilityScores[4].mod.bind(abilityScores[4]),
    mod: 0,
}, {
    name: "Nature",
    proficiency: 0,
    calcStat: abilityScores[3].mod.bind(abilityScores[3]),
    mod: 0,
}, {
    name: "Perception",
    proficiency: 0,
    calcStat: abilityScores[4].mod.bind(abilityScores[4]),
    mod: 0,
}, {
    name: "Performance",
    proficiency: 0,
    calcStat: abilityScores[5].mod.bind(abilityScores[5]),
    mod: 0,
}, {
    name: "Persuasion",
    proficiency: 0,
    calcStat: abilityScores[5].mod.bind(abilityScores[5]),
    mod: 0,
}, {
    name: "Religion",
    proficiency: 0,
    calcStat: abilityScores[3].mod.bind(abilityScores[3]),
    mod: 0,
}, {
    name: "Sleight of Hand",
    proficiency: 0,
    calcStat: abilityScores[1].mod.bind(abilityScores[1]),
    mod: 0,
}, {
    name: "Stealth",
    proficiency: 0,
    calcStat: abilityScores[1].mod.bind(abilityScores[1]),
    mod: 0,
}, {
    name: "Survival",
    proficiency: 0,
    calcStat: abilityScores[4].mod.bind(abilityScores[4]),
    mod: 0,
}];

function getNumber(mod) {
    if (mod >= 0) {
        return "+" + mod;
    } else {
        return mod.toString();
    }
}

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
let characterHitpoints;
let hitDice;


//Race
let characterRace;


//Alignment
let characterAlignment = "";





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


// App nodes
const nameNode = document.getElementById("summaryName");
const classNode = document.getElementById("summaryClass");
const subClassNode = document.getElementById("summarySubClass");
const levelNode = document.getElementById("summaryLevel");
const hpNode = document.getElementById("summaryHP");
const backgroundNode = document.getElementById("summaryBackground");
const acNode = document.getElementById("summaryAC");
const initiativeNode = document.getElementById("summaryInitiative");
const speedNode = document.getElementById("summarySpeed");
const passivePerceptionNode = document.getElementById("summaryPassivePerception");
const acrobaticsNode = document.getElementById("summaryAcrobatics");
const animalHandlingNode = document.getElementById("summaryAnimalHandling");
const arcanaNode = document.getElementById("summaryArcana");
const athleticsNode = document.getElementById("summaryAthletics");
const deceptionNode = document.getElementById("summaryDeception");
const historyNode = document.getElementById("summaryHistory");
const insightNode = document.getElementById("summaryInsight");
const intimidationNode = document.getElementById("summaryIntimidation");
const investigationNode = document.getElementById("summaryInvestigation");
const medicineNode = document.getElementById("summaryMedicine");
const natureNode = document.getElementById("summaryNature");
const perceptionNode = document.getElementById("summaryPerception");
const performanceNode = document.getElementById("summaryPerformance");
const persuationNode = document.getElementById("summaryPersuasion");
const religionNode = document.getElementById("summaryReligion");
const sleightNode = document.getElementById("summarySleight");
const stealthNode = document.getElementById("summaryStealth");
const survivalNode = document.getElementById("summarySurvival");
const weaponProficienciesNode = document.getElementById("weaponProficiencies");
const armorProficienciesNode = document.getElementById("armorProficiencies");
const toolProficienciesNode = document.getElementById("toolProficiencies");
const languageProficienciesNode = document.getElementById("languageProficiencies");
const featuresNode = document.getElementById("featuresList");
const equipmentNode = document.getElementById("equipmentList");
const attacksNode = document.getElementById("attacksList");
const cantripsNode = document.getElementById("cantrips");
const firstLevelNode = document.getElementById("firstLevel");
const secondLevelNode = document.getElementById("secondLevel");
const thirdLevelNode = document.getElementById("thirdLevel");
const fourthLevelNode = document.getElementById("fourthLevel");
const fifthLevelNode = document.getElementById("fifthLevel");
const sixthLevelNode = document.getElementById("sixthLevel");
const seventhLevelNode = document.getElementById("seventhLevel");
const eigthLevelNode = document.getElementById("eigthLevel");
const ninethLevelNode = document.getElementById("ninethLevel");
const mainNode = document.getElementById("displayContent");
const overviewNode = document.getElementById("characterOverview");