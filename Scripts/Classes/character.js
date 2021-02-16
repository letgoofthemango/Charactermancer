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



    // Weapons-------------------------------------------------------------------------------------------------------------------------------
    static resetCharacterWeaponProficiencies() {
        weapons.forEach((weapon) => {
            weapon[0].proficient = false;
        });
    }
    static resetCharacterWeaponProficienciesList() {
        weaponProficienciesNode.innerHTML = "";
    }

    static updateCharacterWeaponProficiencies() {
        let weaponProficiencies = [];
        weapons.forEach((weapon) => {
            if (weapon[0].proficient == true) {
                weaponProficiencies.push(weapon[0].name);
            }
        })
        weaponProficienciesNode.textContent = weaponProficiencies.join(", ");
    }





    // Armors-------------------------------------------------------------------------------------------------------------------------------------
    static resetCharacterArmorProficiencies() {
        characterArmorProficiencies.forEach((prof) => {
            prof[1] = false;
        });
    }

    static resetCharacterArmorProficienciesList() {
        armorProficienciesNode.innerHTML = "";
    }

    static updateCharacterArmorProficiencies() {
        let armorProficiencies = [];
        for (let i = 0; i < characterArmorProficiencies.length; i++) {
            if (characterArmorProficiencies[i][1] == true) {
                armorProficiencies.push(characterArmorProficiencies[i][0]);
            }
        }
        armorProficienciesNode.textContent = armorProficiencies.join(", ");
    }





    // Tools-------------------------------------------------------------------------------------------------------------------------------------------------
    static updateCharacterToolProficiencies() {
        let toolProficiencies = [];
        tools.forEach((tool) => {
            if (tool[0].proficient == true) {
                toolProficiencies.push(tool[0].name);
            }
        })
        toolProficienciesNode.textContent = toolProficiencies.join(", ");
    }

    static resetCharacterToolProficiencies() {
        tools.forEach((tool) => {
            tool[0].proficient = false;
        });
    }





    // Skills-------------------------------------------------------------------------------------------------------------------------------------------------
    static resetCharacterSkills() {
        skills.forEach((skill) => {
            skill.proficiency = 0;
        })
    }

    static resetSkillNodes() {
        const classSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
        for (const i of classSkills) {
            i.classList.remove("toBeAdded");
            i.setAttribute('hidden', 'true');
        }
    }

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

    static setSkill(skill, number) {
        let skillNumber;
        switch (skill) {
            case "Acrobatics":
                skillNumber = 0;
                break;
            case "AnimalHandling":
                skillNumber = 1;
                break;
            case "Arcana":
                skillNumber = 2;
                break;
            case "Athletics":
                skillNumber = 3;
                break;
            case "Deception":
                skillNumber = 4;
                break;
            case "History":
                skillNumber = 5;
                break;
            case "Insight":
                skillNumber = 6;
                break;
            case "Intimidation":
                skillNumber = 7;
                break;
            case "Investigation":
                skillNumber = 8;
                break;
            case "Medicine":
                skillNumber = 9;
                break;
            case "Nature":
                skillNumber = 10;
                break;
            case "Perception":
                skillNumber = 11;
                break;
            case "Performance":
                skillNumber = 12;
                break;
            case "Persuasion":
                skillNumber = 13;
                break;
            case "Religion":
                skillNumber = 14;
                break;
            case "SleightOfHand":
                skillNumber = 15;
                break;
            case "Stealth":
                skillNumber = 16;
                break;
            case "Survival":
                skillNumber = 17;
                break;
            default:
                alert('False skill name given!!!!')
                break;
        }

        skills[skillNumber].proficiency = number;

        let node = document.getElementById(`summary${skill}`);
        if (skills[skillNumber].proficiency == 1 || skills[skillNumber].proficiency == 2 || skills[skillNumber].proficiency == 3) {
            node.classList.add('toBeAdded');
            node.removeAttribute('hidden');
        } else {
            node.classList.remove('toBeAdded');
            node.setAttribute('hidden', true);
        }

        chosenSkills.push(skill); //push it into the chosen skills for later use.
        // console.log(chosenSkills);

        switch (number) {
            case 0:
                console.log(`${skill} skill is now set to unproficient`);
                break;
            case 1:
                console.log(`${skill} skill is now set to half proficiency`);
                break;
            case 2:
                console.log(`${skill} skill is now set to proficient`);
                break;
            case 3:
                console.log(`${skill} skill is now set to expertise`);
                break;
            default:
                alert('False skill proficiency Parameter given!!!')
                break;
        }
    }

    static resetCharacterChosenSkills() {
        chosenSkills = [];
    }

    static resetPossibleSkills() {
        possibleSkills = [];
    }





    // Language-------------------------------------------------------------------------------------------------------------------------------------------------
    static updateLanguageProficiencies() {
        let languageProficiencies = [];
        for (let i = 0; i < characterLanguageProficiencies.length; i++) {
            if (characterLanguageProficiencies[i][1] == true) {
                languageProficiencies.push(characterLanguageProficiencies[i][0]);
            }
        }
        languageProficienciesNode.textContent = languageProficiencies.join(", ");
    }

    static resetCharacterLanguageProficiencies() {
        characterLanguageProficiencies.forEach((element) => {
            element[1] = false;
        });
    }





    // Features--------------------------------------------------------------------------------------------------------------------------------------------------

    static resetCharacterFeatures() {
        characterFeatures = null;
        featuresNode.innerHTML = "";
    }

    static renderCharacterfeatures() {
        characterFeatures.forEach((feature) => {
            const newLi = document.createElement("li");
            const newSpan = document.createElement("span");
            const newContent = document.createTextNode(`${feature}`);
            const newName = feature.replace(" ", "");
            newLi.setAttribute('id', `${newName}Feature`);
            newLi.appendChild(newContent);
            newSpan.setAttribute('id', `${newName}FeatureSpan`);
            newLi.appendChild(newSpan);
            featuresNode.append(newLi);
        })
    }





    // Spells----------------------------------------------------------------------------------------------------------------------------------------------------

    static resetSpellLists() {
        const spellLists = document.querySelectorAll('#cantripsList, #firstLevelList');
        for (const i of spellLists) {
            i.innerHTML = "";
        }
        const spellLevel = document.querySelectorAll('#cantrips, #firstLevel');
        spellLevel.forEach(element => {
            element.hidden = true;
        });
    }

    static resetCharacterSpells() {
        cantripSpells = [];
        firstLevelSpells = [];
    }

    static renderSpells() {
        cantripSpells.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            cantripsListNode.append(newLi);
        })

        firstLevelSpells.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            firstLevelListNode.append(newLi);
        })
    }





    // Stats------------------------------------------------------------------------------------------------------------------------------------------------------

    //update stats loop
    static updateCharacterStats() {
        let totals = document.getElementsByClassName("statTotal");
        let mods = document.getElementsByClassName("statMod");
        for (let i = 0; i < abilityScores.length; i++) {
            totals[i].textContent = abilityScores[i].value;
            mods[i].textContent = App.getNumber(abilityScores[i].mod());
        }
    }


    //Hitpoints
    static updateCharacterHitPoints() {
        characterHitpoints = hitDice + abilityScores[2].mod.bind(abilityScores[2])();
        if (isNaN(characterHitpoints)) {
            hpNode.innerText = "";
        } else {
            hpNode.innerText = characterHitpoints;
        }
    }


    static setCharacterHitdice(number) {
        hitDice = number;
    }


    static updateCharacterInitiative() {
        let initiativeMod = abilityScores[1].mod.bind(abilityScores[1])();
        initiativeNode.textContent = App.getNumber(initiativeMod);
    }


    static updateCharacterPassivePerception() {
        let passivePerception = 10 + abilityScores[4].mod.bind(abilityScores[4])();
        passivePerceptionNode.textContent = passivePerception;
    }

    static resetCharacterSubClass() {
        characterSubClass = null;
        subClassNode.textContent = "";
    }





// Full character actions----------------------------------------------------------------------------------------------------------------------

static fullCharacterUpdate() {
        this.updateCharacterHitPoints();
        this.updateSkills();
        this.updateCharacterStats();
        this.updateCharacterArmorProficiencies();
        this.updateCharacterWeaponProficiencies();
        this.updateCharacterToolProficiencies();
        this.updateLanguageProficiencies();
        this.updateCharacterInitiative();
        this.updateCharacterPassivePerception();
        this.renderCharacterfeatures();
        console.log("UPDATE");
    }

    static fullCharacterReset() {
        this.resetCharacterWeaponProficiencies();
        this.resetCharacterWeaponProficienciesList();
        this.resetCharacterArmorProficiencies();
        this.resetCharacterArmorProficienciesList();
        this.resetCharacterLanguageProficiencies();
        this.resetCharacterToolProficiencies();
        this.resetCharacterSkills();
        this.resetSkillNodes();
        this.resetCharacterChosenSkills();
        this.resetPossibleSkills();
        this.resetCharacterFeatures();
        this.resetCharacterSpells();
        this.resetSpellLists();
        this.resetCharacterSubClass();
        console.log('RESET');
    }










}