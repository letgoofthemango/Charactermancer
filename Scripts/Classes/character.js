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

    static resetSkills() {
        skills.forEach((skill) => {
            skill.proficiency = 0;
        })
    }

    static setSkill(skill) {
        switch (skill) {
            case "Acrobatics":
                (skills[0].proficiency == 0) ? skills[0].proficiency = 1 : skills[0].proficiency = 0;
                (skills[0].proficiency == 1) ? acrobaticsNode.classList.add('toBeAdded') : acrobaticsNode.classList.remove('toBeAdded');
                break;
            case "AnimalHandling":
                (skills[1].proficiency == 0) ? skills[1].proficiency = 1 : skills[1].proficiency = 0;
                (skills[1].proficiency == 1) ? animalHandlingNode.classList.add('toBeAdded') : animalHandlingNode.classList.remove('toBeAdded');
                break;
            case "Arcana":
                (skills[2].proficiency == 0) ? skills[2].proficiency = 1 : skills[2].proficiency = 0;
                (skills[2].proficiency == 1) ? arcanaNode.classList.add('toBeAdded') : arcanaNode.classList.remove('toBeAdded');
                break;
            case "Athletics":
                (skills[3].proficiency == 0) ? skills[3].proficiency = 1 : skills[3].proficiency = 0;
                (skills[3].proficiency == 1) ? athleticsNode.classList.add('toBeAdded') : athleticsNode.classList.remove('toBeAdded');
                break;
            case "Deception":
                (skills[4].proficiency == 0) ? skills[4].proficiency = 1 : skills[4].proficiency = 0;
                (skills[4].proficiency == 1) ? deceptionNode.classList.add('toBeAdded') : deceptionNode.classList.remove('toBeAdded');
                break;
            case "History":
                (skills[5].proficiency == 0) ? skills[5].proficiency = 1 : skills[5].proficiency = 0;
                (skills[5].proficiency == 1) ? historyNode.classList.add('toBeAdded') : historyNode.classList.remove('toBeAdded');
                break;
            case "Insight":
                (skills[6].proficiency == 0) ? skills[6].proficiency = 1 : skills[6].proficiency = 0;
                (skills[6].proficiency == 1) ? insightNode.classList.add('toBeAdded') : insightNode.classList.remove('toBeAdded');
                break;
            case "Intimidation":
                (skills[7].proficiency == 0) ? skills[7].proficiency = 1 : skills[7].proficiency = 0;
                (skills[7].proficiency == 1) ? intimidationNode.classList.add('toBeAdded') : intimidationNode.classList.remove('toBeAdded');
                break;
            case "Investigation":
                (skills[8].proficiency == 0) ? skills[8].proficiency = 1 : skills[8].proficiency = 0;
                (skills[8].proficiency == 1) ? investigationNode.classList.add('toBeAdded') : investigationNode.classList.remove('toBeAdded');
                break;
            case "Medicine":
                (skills[9].proficiency == 0) ? skills[9].proficiency = 1 : skills[9].proficiency = 0;
                (skills[9].proficiency == 1) ? medicineNode.classList.add('toBeAdded') : medicineNode.classList.remove('toBeAdded');
                break;
            case "Nature":
                (skills[10].proficiency == 0) ? skills[10].proficiency = 1 : skills[10].proficiency = 0;
                (skills[10].proficiency == 1) ? natureNode.classList.add('toBeAdded') : natureNode.classList.remove('toBeAdded');
                break;
            case "Perception":
                (skills[11].proficiency == 0) ? skills[11].proficiency = 1 : skills[11].proficiency = 0;
                (skills[11].proficiency == 1) ? perceptionNode.classList.add('toBeAdded') : perceptionNode.classList.remove('toBeAdded');
                break;
            case "Performance":
                (skills[12].proficiency == 0) ? skills[12].proficiency = 1 : skills[12].proficiency = 0;
                (skills[12].proficiency == 1) ? performanceNode.classList.add('toBeAdded') : performanceNode.classList.remove('toBeAdded');
                break;
            case "Persuasion":
                (skills[13].proficiency == 0) ? skills[13].proficiency = 1 : skills[13].proficiency = 0;
                (skills[13].proficiency == 1) ? persuationNode.classList.add('toBeAdded') : persuationNode.classList.remove('toBeAdded');
                break;
            case "Religion":
                (skills[14].proficiency == 0) ? skills[14].proficiency = 1 : skills[14].proficiency = 0;
                (skills[14].proficiency == 1) ? religionNode.classList.add('toBeAdded') : religionNode.classList.remove('toBeAdded');
                break;
            case "SleightOfHand":
                (skills[15].proficiency == 0) ? skills[15].proficiency = 1 : skills[15].proficiency = 0;
                (skills[15].proficiency == 1) ? sleightOfHandNode.classList.add('toBeAdded') : sleightOfHandNode.classList.remove('toBeAdded');
                break;
            case "Stealth":
                (skills[16].proficiency == 0) ? skills[16].proficiency = 1 : skills[16].proficiency = 0;
                (skills[16].proficiency == 1) ? stealthNode.classList.add('toBeAdded') : stealthNode.classList.remove('toBeAdded');
                break;
            case "Survival":
                (skills[17].proficiency == 0) ? skills[17].proficiency = 1 : skills[17].proficiency = 0;
                (skills[17].proficiency == 1) ? survivalNode.classList.add('toBeAdded') : survivalNode.classList.remove('toBeAdded');
                break;
        }
        console.log(`${skill} skill is now 1`);
    }

    static reset() {
        characterArmorProficiencies.forEach((prof) => {
            prof[1] = false;
        });
        weapons.forEach((weapon) => {
            weapon[0].proficient = false;
        });

        characterLanguageProficiencies.forEach((element) => {
            element[1] = false;
        });

        tools.forEach((tool) => {
            tool[0].proficient = false;
        });
        const spellLevel = document.querySelectorAll('#cantrips, #firstLevel');
        spellLevel.forEach(element => {
            element.hidden = true;
        });

        characterSubClass = null;
        subClassNode.textContent = "";
        featuresNode.innerHTML = "";

        this.resetSpells();
        this.resetSkillNodes();
        this.resetSkills();
        this.resetSpellLists();
        this.resetArmorProficienciesList();

        console.log('RESET');
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
            i.innerHTML = "";
        }
    }

    static resetSpells() {
        cantripSpells = [];
        firstLevelSpells = [];
    }

    static resetArmorProficienciesList() {
        armorProficienciesNode.innerHTML = "";
    }

    static resetArmorProficiencies() {
        characterArmorProficiencies.forEach((prof) => {
            prof[1] = false;
        });
    }

    static resetWeaponProficienciesList() {
        weaponProficienciesNode.innerHTML = "";
    }

    static resetWeaponProficiencies() {
        weapons.forEach((weapon) => {
            weapon[0].proficient = false;
        });
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
    static renderSpells() {
        cantripSpells.forEach((spell) => {
            cantripsListNode.innerHTML += `<li>${spell}</li>`;
        })
        firstLevelSpells.forEach((spell) => {
            firstLevelListNode.innerHTML += `<li>${spell}</li>`;
        })
    }



















}