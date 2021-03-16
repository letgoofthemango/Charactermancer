//------------------------------STATS--------------------------------------
let abilityScores = [{
    name: "Strength",
    value: 8,
    mod: function () { return Math.floor((this.value - 10) / 2); },
    saveMod: function () { return this.mod() + Character.proficiencyBonus; }
}, {
    name: "Dexterity",
    value: 8,
    mod: function () { return Math.floor((this.value - 10) / 2); },
    saveMod: function () { return this.mod() + Character.proficiencyBonus; }
}, {
    name: "Constitution",
    value: 8,
    mod: function () { return Math.floor((this.value - 10) / 2); },
    saveMod: function () { return this.mod() + Character.proficiencyBonus; }
}, {
    name: "Intelligence",
    value: 8,
    mod: function () { return Math.floor((this.value - 10) / 2); },
    saveMod: function () { return this.mod() + Character.proficiencyBonus; }
}, {
    name: "Wisdom",
    value: 8,
    mod: function () { return Math.floor((this.value - 10) / 2); },
    saveMod: function () { return this.mod() + Character.proficiencyBonus; }
}, {
    name: "Charisma",
    value: 8,
    mod: function () { return Math.floor((this.value - 10) / 2); },
    saveMod: function () { return this.mod() + Character.proficiencyBonus; }
}];

//Level
let characterLevel = 1;



let skills = [{
    name: "Acrobatics", proficiency: 0, calcStat: abilityScores[1].mod.bind(abilityScores[1]), mod: 0, // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
}, {
    name: "Animal handling", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0,
}, {
    name: "Arcana", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0,
}, {
    name: "Athletics", proficiency: 0, calcStat: abilityScores[0].mod.bind(abilityScores[0]), mod: 0,
}, {
    name: "Deception", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0,
}, {
    name: "History", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0,
}, {
    name: "Insight", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0,
}, {
    name: "Intimidation", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0,
}, {
    name: "Investigation", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0,
}, {
    name: "Medicine", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0,
}, {
    name: "Nature", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0,
}, {
    name: "Perception", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0,
}, {
    name: "Performance", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0,
}, {
    name: "Persuasion", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0,
}, {
    name: "Religion", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0,
}, {
    name: "Sleight of hand", proficiency: 0, calcStat: abilityScores[1].mod.bind(abilityScores[1]), mod: 0,
}, {
    name: "Stealth", proficiency: 0, calcStat: abilityScores[1].mod.bind(abilityScores[1]), mod: 0,
}, {
    name: "Survival", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0,
}];

//Character.


//Class
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
// App nodes
const nameNode = document.getElementById("summaryName");
const classNode = document.getElementById("summaryClass");
const subClassNode = document.getElementById("summarySubClass");
const levelNode = document.getElementById("summaryLevel");
const hpNode = document.getElementById("summaryHP");
const backgroundNode = document.getElementById("summaryBackground");
const acNode = document.getElementById("summaryAC");
const initiativeNode = document.getElementById("summaryInitiative");
const SpeedNode = document.getElementById("summarySpeed");
const SpeedsNode = document.getElementById("summarySpeeds");
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
const sleightOfHandNode = document.getElementById("summarySleight");
const stealthNode = document.getElementById("summaryStealth");
const survivalNode = document.getElementById("summarySurvival");
const skillsTextNode = document.getElementById("summarySkillsText");
const weaponProficienciesNode = document.getElementById("weaponProficiencies");
const armorProficienciesNode = document.getElementById("armorProficiencies");
const toolsNode = document.getElementById("summaryTools");
const toolProficienciesNode = document.getElementById("toolProficiencies");
const languageNode = document.getElementById("summaryLanguages");
const languageProficienciesNode = document.getElementById("languageProficiencies");
const featuresNode = document.getElementById("featuresList");
const equipmentNode = document.getElementById("equipmentList");
const attacksNode = document.getElementById("attacksList");
const spellsHeadingNode = document.getElementById("summarySpellsHeading");
const cantripsNode = document.getElementById("cantrips");
const cantripsListNode = document.getElementById("cantripsList");
const firstLevelNode = document.getElementById("firstLevel");
const firstLevelListNode = document.getElementById("firstLevelList");
const secondLevelNode = document.getElementById("secondLevel");
const secondLevelListNode = document.getElementById("secondLevel");
const thirdLevelNode = document.getElementById("thirdLevel");
const thirdLevelListNode = document.getElementById("thirdLevel");
const fourthLevelNode = document.getElementById("fourthLevel");
const fourthLevelListNode = document.getElementById("fourthLevel");
const fifthLevelNode = document.getElementById("fifthLevel");
const fifthLevelListNode = document.getElementById("fifthLevel");
const sixthLevelNode = document.getElementById("sixthLevel");
const sixthLevelListNode = document.getElementById("sixthLevel");
const seventhLevelNode = document.getElementById("seventhLevel");
const seventhLevelListNode = document.getElementById("seventhLevel");
const eigthLevelNode = document.getElementById("eigthLevel");
const eigthLevelListNode = document.getElementById("eigthLevel");
const ninethLevelNode = document.getElementById("ninethLevel");
const ninethLevelListNode = document.getElementById("ninethLevel");
const mainNode = document.getElementById("displayContent");
const overviewNode = document.getElementById("characterOverview");


/* document.getElementById("characterOverview").addEventListener("click", function () {
    abilityScores[0].value = 20;
    abilityScores[1].value = 20;
    abilityScores[2].value = 20;
    abilityScores[3].value = 20;
    abilityScores[4].value = 20;
    abilityScores[5].value = 20;
    Character.fullCharacterUpdate();
}); */