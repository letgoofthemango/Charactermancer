class Character {
    name = "Character";
    hitDice;
    armorProficiencies; //0=none,1=light armor 2=medium armor 3=medium armor+shield 4 Heavy armor+shields------
    weaponProficiencies = [];
    //0= simple weapons, 1=Martial weapons, 3= club 4=dagger, 5=Greatclub, 6=Handaxe, 7= Javelin, 8=Light Hammer, 9= Mace, 10=Quarterstaff, 11= Sickle, 12= Spear, 13=Light Crossbow, 14=Dart, 15=Shortbow, 16= Sling, 17= Battleaxe, 18=Flail, 19=Glaive, 20=Greataxe, 21=Greatsword, 22=Halberd, 23=Lance, 24=Longsword, 25=Maul, 26= Morningstar, 27=Pike, 28=Rapier, 29= Scimitar, 30=Shortsword, 31=Trident, 32=Warpick, 33=Warhammer, 34=Whip, 35=Blowgun, 36=Hand Crossbow, 37=Heavy Crossbow, 38=Longbow, 39=Net, 40=Fire arms----

    toolProficiencies = [];
    //0=Alchemist's supplies 1=Brewer's supplies 2=Calligrapher's supplies 3=Carpenter's tools 4=Cartographer's tools 5= Cobbler's tools 6=Cook's utensils 7=Glassblower's tools 8=Jeweler's tools 9=Leatherworker's tools 10=Mason's tools 11=Painter's supplies 12=Potter's tools 13=Smith's tools 14=Tinker's tools 15=Weaver's tools 16=Woodcarver's tools 17=Disguise Kit 18=Forgery kit 19=Herbalism kit 20=Navigator's tools 21=Poisoner's kit 22=Thieves' tools 23=Vehicles (land or water) 24=Dice set 25=Dragonchess set 25= Playing card set 26=Three-Dragon Ante set 27=Bagpipes 28=Drum 29=Dulcimer 30=Flute 31=Lute 32=Lyre 33=Horn 34=Pan flute 35=Shawm 36=Viol----------------

    savingThrowProficiencies = []; //0=Strength 1=Dex 2=Con 3=Int 4= Wis 5=Cha


    classSkills = []; // 0=Acrobatics 1=Animal Handling 2=Arcana 3= Athletics 4= Deception 5= History 6= Insight 7=Intimidation 8=Investigation 9= Medicine 10=Nature 11= Perception 12=Performance 13=Persuation 14=Religion 15=Sleight of Hand 16=Stealth 17=Survival------------


    spellCaster;
    spellCastingAbility; // 0=Int 1=Wis 2=Cha---------
    spellSaveDC = 8 + mod + proficiencyBonus;
    spellAttackBonus = mod + proficiencyBonus;
    source; //0=PHB, 1=TCE, 2= UAMy----------

    /*###################################################################
    ######################### Multiclassing ##############################
    ######################################################################*/

    multiClassAbilityScore = [];
    multiClassWeaponProficiencies = [];
    //0= simple weapons, 1=Martial weapons, 3= club 4=dagger, 5=Greatclub, 6=Handaxe, 7= Javelin, 8=Light Hammer, 9= Mace, 10=Quarterstaff, 11= Sickle, 12= Spear, 13=Light Crossbow, 14= Dart, 15=Shortbow, 16= Sling, 17= Battleaxe, 18=Flail, 19=Glaive, 20=Greataxe, 21=Greatsword, 22=Halberd, 23=Lance, 24=Longsword, 25=Maul, 26= Morningstar, 27=Pike, 28=Rapier, 29= Scimitar, 30=Shortsword, 31=Trident, 32=Warpick, 33=Warhammer, 34=Whip, 35=Blowgun, 36=Hand Crossbow, 37=Heavy Crossbow, 38=Longbow, 39=Net, 40=Fire arms----
    multiClassArmorProficiencies = []; //0=none,1=light armor 2=medium armor 3=medium armor+shield 4 Heavy armor+shields------
    multiClassToolProficiencies = []; //0=Alchemist's supplies 1=Brewer's supplies 2=Calligrapher's supplies 3=Carpenter's tools 4=Cartographer's tools 5= Cobbler's tools 6=Cook's utensils 7=Glassblower's tools 8=Jeweler's tools 9=Leatherworker's tools 10=Mason's tools 11=Painter's supplies 12=Potter's tools 13=Smith's tools 14=Tinker's tools 15=Weaver's tools 16=Woodcarver's tools 17=Disguise Kit 18=Forgery kit 19=Herbalism kit 20=Navigator's tools 21=Poisoner's kit 22=Thieves' tools 23=Vehicles (land or water) 24=Dice set 25=Dragonchess set 25= Playing card set 26=Three-Dragon Ante set 27=Bagpipes 28=Drum 29=Dulcimer 30=Flute 31=Lute 32=Lyre 33=Horn 34=Pan flute 35=Shawm 36=Viol----------------


    /*###################################################################
    ######################### Methods ##############################
    ######################################################################*/
    getProficiencyBonus() { //function for proficiency bonus
        if (characterLevel <= 4) {
            proficiencyBonus = 2;
            return proficiencyBonus;
        } else if (characterLevel >= 5 && characterLevel <= 8) {
            proficiencyBonus = 3;
            return proficiencyBonus;
        } else if (characterLevel >= 9 && characterLevel <= 12) {
            proficiencyBonus = 4;
            return proficiencyBonus;
        } else if (characterLevel >= 13 && characterLevel <= 16) {
            proficiencyBonus = 5;
            return proficiencyBonus;
        } else {
            proficiencyBonus = 6;
            return proficiencyBonus;
        }
    }
}

class Artificer extends Character {
    name = "Artificer";
    hitDice = 8;
    healthPoints = hitDice + constitutionMod;
    armorProficiencies = 2;
    weaponProficiencies = [0, 40];
    toolproficiencies = [22, 14]; //plus one one type of artisan's tools of your choice
    savingThrowProficiencies = [2, 3];
    classSkillsSelection = [2, 5, 8, 9, 10, 11, 15]; //------------choose 2
    spellcaster = true;
    spellCastingAbility = 0;
    spellSaveDC = 8 + intelligenceMod + proficiencyBonus;
    spellAttackBonus = intelligenceMod + proficiencyBonus;
    source = 2;
    /*###################################################################
    ######################### Multiclassing ##############################
    ######################################################################*/
    multiClassAbilityScore = [intelligence];
    multiClassWeaponProficiencies = [];
    multiClassArmorProficiencies = [3];
    multiClassToolProficiencies = [14, 22];
    /*###################################################################
    ######################### Methods ##############################
    ######################################################################*/
    getAC = () => {
        if (hasShield && armorType == "Medium") {
            characterArmorClass = armorClass + Math.min(Math.max(-4, dexterityMod), 2) + 2;
            return characterArmorClass;
        } else if (hasShield && armorType == "Light") {
            characterArmorClass = armorClass + dexterityMod + 2;
            return characterArmorClass;
        } else {
            characterArmorClass = 10 + dexterityMod;
            return characterArmorClass;
        }
    };

    getHitpointsFirstLvl = () => {};
    getHitpointsLvl = () => {};
    getMaxSpellLvl = () => {};
    getSpellSlots = () => {};
    getSpellSaveDC = () => {};
    getInfusionsCount = () => {};

}, {
    name: "Barbarian",
    proficiency: 2,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Bard",
    proficiency: 3,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Cleric",
    proficiency: 0,
    calcStat: strengthMod,
    mod: 0,
}, {
    name: "Druid",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Fighter",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Monk",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Mystic",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Paladin",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Ranger",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Rogue",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Sorcerer",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Warlock",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Wizard",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}];

class Subclass {}




let armorType = armor[4].armorType; // to save specific armor's type for AC calc
//console.log(armorType);
let armorClass = armor[4].armorClass; // to save specific armor's class for AC calc
//console.log(armorClass);

/* for (let i = 0; i < armor.length; i++) {
    console.table(armor[i]);
} */ //for iterating through the armor array!!!


let skills = [{
    name: "Acrobatics",
    proficiency: 1, // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Animal Handling",
    proficiency: 2,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Arcana",
    proficiency: 3,
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