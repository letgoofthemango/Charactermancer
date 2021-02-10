class Character {
    name = "Character";
    hitDice;
    proficiencyBonus;
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
    static getProficiencyBonus() { //function for proficiency bonus
        if (characterLevel <= 4) {
            proficiencyBonus = 2;
        } else if (characterLevel >= 5 && characterLevel <= 8) {
            proficiencyBonus = 3;
        } else if (characterLevel >= 9 && characterLevel <= 12) {
            proficiencyBonus = 4;
        } else if (characterLevel >= 13 && characterLevel <= 16) {
            proficiencyBonus = 5;
        } else {
            proficiencyBonus = 6;
        }
    }

    //Hitpoints
    static updateHitPoints() {
        characterHitpoints = hitDice + abilityScores[2].mod.bind(abilityScores[2])();
        if (isNaN(characterHitpoints)) {
            hpNode.innerText = "";
        } else {
            hpNode.innerText = characterHitpoints;
        }
    }

    //update skills loop
    static updateSkills() {
        this.getProficiencyBonus();
        for (let i = 0; i < skills.length; i++) {
            if (skills[i].proficiency == 0) {
                skills[i].mod = skills[i].calcStat() + (proficiencyBonus * 0);
            } else if (skills[i].proficiency == 1) {
                skills[i].mod = skills[i].calcStat() + (proficiencyBonus * 0.5);
            } else if (skills[i].proficiency == 2) {
                skills[i].mod = skills[i].calcStat() + (proficiencyBonus * 1);
            } else if (skills[i].proficiency == 3) {
                skills[i].mod = skills[i].calcStat() + (proficiencyBonus * 2);
            } else {
                alert(
                    `something went terribly wrong with the calculation at ${skills[i].name} !!!!`
                );
            }
            document.getElementById("skillsID" + i).textContent = App.getNumber(skills[i].mod);
        }
    }

    //update stats loop
    static updateStats() {
        let totals = document.getElementsByClassName("statTotal");
        let mods = document.getElementsByClassName("statMod");
        for (let i = 0; i < abilityScores.length; i++) {
            totals[i].textContent = abilityScores[i].value;
            mods[i].textContent = App.getNumber(abilityScores[i].mod());
        }
    }

    static updateArmorProficiencies() {
        let armorProficiencies = [];
        for (let i = 0; i < characterArmorProficiencies.length; i++) {
            if (characterArmorProficiencies[i][1] == true) {
                armorProficiencies.push(characterArmorProficiencies[i][0]);
            }
        }
        armorProficienciesNode.textContent = armorProficiencies.join(", ");
    }

    //update weapon prof loop
    static updateWeaponProficiencies() {
        let weaponProficiencies = [];
        weapons.forEach((weapon) => {
            if (weapon[0].proficient == true) {
                weaponProficiencies.push(weapon[0].name);
            }
        })
        weaponProficienciesNode.textContent = weaponProficiencies.join(", ");
    }

    //update tools prof loop
    static updateToolProficiencies() {
        let toolProficiencies = [];
        tools.forEach((tool) => {
            if (tool[0].proficient == true) {
                toolProficiencies.push(tool[0].name);
            }
        })
        toolProficienciesNode.textContent = toolProficiencies.join(", ");
    }

    //update language prof loop
    static updateLanguageProficiencies() {
        let languageProficiencies = [];
        for (let i = 0; i < characterLanguageProficiencies.length; i++) {
            if (characterLanguageProficiencies[i][1] == true) {
                languageProficiencies.push(characterLanguageProficiencies[i][0]);
            }
        }
        languageProficienciesNode.textContent = languageProficiencies.join(", ");
    }

    static updateInitiative() {
        let initiativeMod = abilityScores[1].mod.bind(abilityScores[1])();
        initiativeNode.textContent = App.getNumber(initiativeMod);
    }

    static updatePassivePerception() {
        let passivePerception = 10 + abilityScores[4].mod.bind(abilityScores[4])();
        passivePerceptionNode.textContent = passivePerception;
    }

    static fullCharacterUpdate() {
        this.updateHitPoints();
        this.updateSkills();
        this.updateStats();
        this.updateArmorProficiencies();
        this.updateWeaponProficiencies();
        this.updateToolProficiencies();
        this.updateLanguageProficiencies();
        this.updateInitiative();
        this.updatePassivePerception();
        console.log("UPDATE");
    }

    static resetSkillNodes() {
        const classSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
        for (const i of classSkills) {
            i.classList.remove("toBeAdded");
        }
    }

    static resetSpellLists() {
        const spellLists = document.querySelectorAll('#cantripsList, #firstLevelList');
        for (const i of spellLists) {
            i.classList.remove("toBeAdded");
            i.innerHTML="";
        }
        cantripSpells=[];
        firstLevelSpells=[];
        console.table(cantripSpells, firstLevelSpells);
    }



















}