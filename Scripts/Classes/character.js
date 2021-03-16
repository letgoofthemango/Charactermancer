class Character {
    name = "Character";
    proficiencyBonus;
    characterClass = null;
    characterSubClass = null;
    characterName = "Your character doesnt have a name yet";
    playerName = "You havent given your player name yet";
    characterArmorClass;
    armorClass;
    armorType;
    hasShield = false;
    characterWalkingSpeed = 30;
    characterClimbingSpeed = 30;
    characterSwimingSpeed = 30;
    characterFlyingSpeed = 30;
    characterVision;
    initiativeMod;
    passivePerception;
    characterFightingStyle;
    possibleSkillChoices = [];
    chosenCharacterSkills = [];
    numberOfSkillsToChoose = 2;
    characterToolsProficiencies = [1];
    characterPossibleToolChoices = [];
    characterMaxToolProficiencies;
    languageProficiencies = [];
    maxLanguageProficiencies = [];
    possibleLanguageProficiencies = [];
    characterFeatures = [];
    characterEquipment = [];
    characterFeats = [];
    maxcharacterFeats = [];
    characterAttacks = [];
    possibleCantripSpells = [];
    cantripSpellsChosen = [];
    cantripsKnown;
    firstLevelSpells = [];
    firstLevelSpellsChosen = [];
    firstLevelSpellsKnown;
    firstLevelSpellSlots;
    characterHitpoints;
    hitDice;
    characterRace;
    characterAlignment;
    characterAge;
    characterHeight;
    characterWeight;
    characterEyesColor;
    characterSkinColor;
    characterHairColor;
    characterBackstory;
    characterBackground;
    
    spellCastingAbility; // 0=Int 1=Wis 2=Cha---------
    spellSaveDC = 8 + mod + Character.proficiencyBonus;
    spellAttackBonus = mod + Character.proficiencyBonus;
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

    static setCharacterWeaponProficiencies(...args) {
        args.forEach((prof) => {
            weapons.get(`${prof}`)[0].proficient = true;
        })
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

    static setCharacterArmorProficiency(...args) {
        const profs = args.join();
        if (profs.includes("none")) {
            characterArmorProficiencies[0][1] = true;
        }
        if (profs.includes("light")) {
            characterArmorProficiencies[1][1] = true;
        }
        if (profs.includes("medium")) {
            characterArmorProficiencies[2][1] = true;
        }
        if (profs.includes("heavy")) {
            characterArmorProficiencies[3][1] = true;
        }
        if (profs.includes("shields")) {
            characterArmorProficiencies[4][1] = true;
        }
    }





    // Tools-------------------------------------------------------------------------------------------------------------------------------------------------
    static updateCharacterToolProficiencies() {
        Character.characterToolsProficiencies.length = 0;
        let toolsArr = [];
        for (const [key, value] of tools.entries()) { // UNBEDINGT .entries anschaun!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (value[0].proficient == true) {
                Character.characterToolsProficiencies.push(key);
                toolsArr.push(value[0].name);
            }
        }
        // characterToolsProficiencies= App.removeDuplicates(characterToolsProficiencies);
        if (Character.characterToolsProficiencies.length > 0) {
            toolsNode.hidden = false;
        } else {
            toolsNode.hidden = true;
        }
        toolProficienciesNode.textContent = toolsArr.sort().join(", ");
        console.log(Character.characterToolsProficiencies);
    }

    static resetCharacterToolProficiencies() {
        Character.characterToolsProficiencies = [];
        tools.forEach((tool) => {
            tool[0].proficient = false;
        });
    }

    static setCharacterToolProficiencies(number, ...args) {
        switch (number) {
            case 0:
                args.forEach((arg) => {
                    tools.get(`${arg}`)[0].proficient = false;
                })
                break;
            case 1:
                args.forEach((arg) => {
                    tools.get(`${arg}`)[0].proficient = true;
                })
                break;
            default:
                break;
        }
    }

    static resetCharacterPossibleToolchoices() {
        Character.characterPossibleToolChoices = [];
    }

    static setCharacterPossibleToolChoices(...args) {
        Character.characterPossibleToolChoices = [...args];
    }





    // Skills-------------------------------------------------------------------------------------------------------------------------------------------------
    static resetCharacterSkills() {
        skills.forEach((skill) => {
            skill.proficiency = 0;
        })
    }

    static resetSkillNodes() {
        const classSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimal, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
        classSkills.forEach((skill) => {
            skill.classList.remove("toBeAdded");
            skill.setAttribute('hidden', 'true');
        })
    }

    static updateSkills() {
        this.getProficiencyBonus();
        for (let i = 0; i < skills.length; i++) {
            if (skills[i].proficiency == 0) {
                skills[i].mod = skills[i].calcStat() + (Character.proficiencyBonus * 0);
            } else if (skills[i].proficiency == 1) {
                skills[i].mod = skills[i].calcStat() + (Character.proficiencyBonus * 0.5);
            } else if (skills[i].proficiency == 2) {
                skills[i].mod = skills[i].calcStat() + (Character.proficiencyBonus * 1);
            } else if (skills[i].proficiency == 3) {
                skills[i].mod = skills[i].calcStat() + (Character.proficiencyBonus * 2);
            } else {
                alert(
                    `something went terribly wrong with the calculation at ${skills[i].name} !!!!`
                );
            }
            document.getElementById("skillsID" + i).textContent = `: ${App.getNumber(skills[i].mod)}`;
        }
    }

    static getProficiencyBonus() { //function for proficiency bonus
        if (characterLevel <= 4) {
            Character.proficiencyBonus = 2;
        } else if (characterLevel >= 5 && characterLevel <= 8) {
            Character.proficiencyBonus = 3;
        } else if (characterLevel >= 9 && characterLevel <= 12) {
            Character.proficiencyBonus = 4;
        } else if (characterLevel >= 13 && characterLevel <= 16) {
            Character.proficiencyBonus = 5;
        } else {
            Character.proficiencyBonus = 6;
        }
    }

    static setSkill(skill, number) {
        let skillNumber;
        switch (skill) {
            case "Acrobatics":
                skillNumber = 0;
                break;
            case "Animal":
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
            case "Sleight":
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
        if (skills[skillNumber].proficiency >= 1) {
            node.classList.add('toBeAdded');
            node.hidden = false;
            Character.chosenCharacterSkills.push(skill); //push it into the chosen skills for later use.
        } else {
            node.classList.remove('toBeAdded');
            node.hidden = true;
        }


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

    static setClassSkills(...args) {
        Character.possibleSkillChoices.push(...args);
        let changedNames = [];
        Character.possibleSkillChoices.forEach((skill) => {
            const convertedName = skill.replace(/ |handling|of|hand/g, "");
            changedNames.push(convertedName);
        })
        const skills = document.querySelectorAll("#summary" + changedNames.join(", #summary"));
        skills.forEach((skill) => {
            skill.classList.add("toBeAdded");
            skill.hidden = false;
        })
    }

    static resetCharacterChosenSkills() {
        Character.chosenCharacterSkills = [];
    }

    static resetPossibleSkills() {
        Character.possibleSkillChoices = [];
    }

    static setCharacterSkillsNumberToChoose(number) {
        Character.numberOfSkillsToChoose = number;
    }

    static showNodesForPossibleSkills(...args) {
        const skills = document.querySelectorAll("#summary" + args.join(", #summary"));
        skills.forEach((skill) => {
            skill.classList.add("toBeAdded");
            skill.hidden = false;
        })
    }





    // Language-------------------------------------------------------------------------------------------------------------------------------------------------
    static updateLanguageProficiencies() {
        Character.languageProficiencies.length = 0;
        let languagesArr = [];
        for (const [key, value] of languages.entries()) {
            if (value[0].proficient == true) {
                Character.languageProficiencies.push(key);
                languagesArr.push(value[0].name);
            }
        }

        // languages.forEach((language) => {
        //     if (language[0].proficient == true) {
        //         languageProficiencies.push(language[0].name);
        //     }
        // })
        languageProficienciesNode.textContent = languagesArr.join(", ");
    }

    static resetCharacterLanguageProficiencies() {
        languages.forEach((language) => {
            language[0].proficient = false;
        });
        languages.get("Common")[0].proficient = true;
        Character.languageProficiencies = [];
    }

    static setCharacterLanguageProficiencies(number, ...args) {
        switch (number) {
            case 0:
                args.forEach((arg) => {
                    languages.get(`${arg}`)[0].proficient = false;
                    console.log(`Language ${arg} has been set to unproficient.`)
                })
                break;
            case 1:
                args.forEach((arg) => {
                    languages.get(`${arg}`)[0].proficient = true;
                    console.log(`Language ${arg} has been set to proficient.`)
                })
                break;
            default:
                break;
        }
    }

    static setCharacterPossibleLanguageProficiencies() {
        languages.forEach((language) => {
            if (language[0].name === "Druidic" || language[0].name === "Thieves' Cant") {
                return;
            }
            Character.possibleLanguageProficiencies.push(language[0].name);
        })
    }




    // Features--------------------------------------------------------------------------------------------------------------------------------------------------

    static resetCharacterFeatures() {
        Character.characterFeatures = null;
        featuresNode.innerHTML = "";
    }

    static renderCharacterfeatures() {
        Character.characterFeatures.forEach((feature) => {
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

    static addCharacterFeatures(...args) {
        Character.characterFeatures.push(...args);
    }

    static setCharacterFeatures(...args) {
        Character.characterFeatures = [...args];
    }

    static resetCharacterVision() {
        Character.characterVision = null;
    }

    static setCharacterVision(vision) {
        Character.characterVision = vision;
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
        Character.possibleCantripSpells = [];
        Character.cantripSpellsChosen = [];
        Character.firstLevelSpells = [];
        Character.firstLevelSpellsChosen = [];
        Character.secondLevelSpells = [];
        Character.secondLevelSpellsChosen = [];
        Character.thirdLevelSpells = [];
        Character.thirdLevelSpellsChosen = [];
        Character.fourthLevelSpells = [];
        Character.fourthLevelSpellsChosen = [];
        Character.fifthLevelSpells = [];
        Character.fifthLevelSpellsChosen = [];
        Character.sixthLevelSpells = [];
        Character.sixthLevelSpellsChosen = [];
        Character.seventhLevelSpells = [];
        Character.seventhLevelSpellsChosen = [];
        Character.eigthLevelSpells = [];
        Character.eigthLevelSpellsChosen = [];
        Character.ninethLevelSpells = [];
        Character.ninethLevelSpellsChosen = [];
    }

    static renderSpells() {
        Character.possibleCantripSpells = App.removeDuplicates(Character.possibleCantripSpells.sort());
        Character.possibleCantripSpells.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            cantripsListNode.append(newLi);
        })

        Character.firstLevelSpells = App.removeDuplicates(Character.firstLevelSpells.sort());
        Character.firstLevelSpells.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            firstLevelListNode.append(newLi);
        })
        if (Character.possibleCantripSpells.length > 0 && Character.firstLevelSpells.length > 0) {
            spellsHeadingNode.hidden = false;
        } else {
            spellsHeadingNode.hidden = true;
        }
    }

    static updateRenderSpellsChosen() {
        const spellLists = document.querySelectorAll('#cantripsList, #firstLevelList');
        for (const i of spellLists) {
            i.innerHTML = "";
        }
        Character.cantripSpellsChosen.length = 0;
        Character.firstLevelSpellsChosen.length = 0;
        let cantripsArr = [];
        for (const [key, value] of spells.entries()) {
            if (value[0].level == 0 && value[0].known == true) {
                Character.cantripSpellsChosen.push(key);
                cantripsArr.push(value[0].name);
            }
        }
        cantripsArr = App.removeDuplicates(cantripsArr.sort());
        cantripsArr.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/'|\/|-| /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            cantripsListNode.append(newLi);
        })
        let firstLevelArr = [];
        for (const [key, value] of spells.entries()) {
            if (value[0].level == 1 && value[0].known == true) {
                Character.firstLevelSpellsChosen.push(key);
                firstLevelArr.push(value[0].name);
            }
        }
        firstLevelArr = App.removeDuplicates(firstLevelArr.sort());
        firstLevelArr.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/'|\/|-| /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            firstLevelListNode.append(newLi);
        })

    }

    static setCharacterSpellsKnown(a, b, c, d, e, f, g, h, i, j) {
        Character.cantripsKnown = a;
        Character.firstLevelSpellsKnown = b;
        Character.secondLevelSpellsKnown = c;
        Character.thirdLevelSpellsKnown = d;
        Character.fourthLevelSpellsKnown = e;
        Character.fifthLevelSpellsKnown = f;
        Character.sixthLevelSpellsKnown = g;
        Character.seventhLevelSpellsKnown = h;
        Character.eigthLevelSpellsKnown = i;
        Character.ninethLevelSpellsKnown = j;
    }

    static resetCharacterSpellsKnown() {
        Character.cantripsKnown = null;
        Character.firstLevelSpellsKnown = null;
        Character.secondLevelSpellsKnown = null;
        Character.thirdLevelSpellsKnown = null;
        Character.fourthLevelSpellsKnown = null;
        Character.fifthLevelSpellsKnown = null;
        Character.sixthLevelSpellsKnown = null;
        Character.seventhLevelSpellsKnown = null;
        Character.eigthLevelSpellsKnown = null;
        Character.ninethLevelSpellsKnown = null;
    }

    static setCharacterSpellSlots(a, b, c, d, e, f, g, h, i) {
        Character.firstLevelSpellSlots = a;
        Character.secondLevelSpellSlots = b;
        Character.thirdLevelSpellSlots = c;
        Character.fourthLevelSpellSlots = d;
        Character.fifthLevelSpellSlots = e;
        Character.sixthLevelSpellSlots = f;
        Character.seventhLevelSpellSlots = g;
        Character.eigthLevelSpellSlots = h;
        Character.ninethLevelSpellSlots = i;

    }

    static resetCharacterSpellSlots() {
        Character.firstLevelSpellSlots = null;
        Character.secondLevelSpellSlots = null;
        Character.thirdLevelSpellSlots = null;
        Character.fourthLevelSpellSlots = null;
        Character.fifthLevelSpellSlots = null;
        Character.sixthLevelSpellSlots = null;
        Character.seventhLevelSpellSlots = null;
        Character.eigthLevelSpellSlots = null;
        Character.ninethLevelSpellSlots = null;
    }

    static setClassSpells(number) {
        let spellLevel;
        if (characterLevel <= number) {
            spellLevel = document.querySelectorAll('#cantrips, #firstLevel');
            spellLevel.forEach((element) => {
                element.hidden = false;
            });
            for (const [key, value] of spells.entries()) { // UNBEDINGT .entries anschaun!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (value[0].level == 0 && value[0].classes.includes(`${Character.characterClass}`)) {
                    Character.characterToolsProficiencies.push(key);
                    Character.possibleCantripSpells.push(value[0].name);
                }
            }
            spells.forEach((spell) => {
                if (spell[0].level == 1 && spell[0].classes.includes(`${Character.characterClass}`)) {
                    Character.firstLevelSpells.push(spell[0].name);
                }
            })
            const lists = document.querySelectorAll('#cantripsList,#firstLevelList');
            lists.forEach((list) => {
                list.classList.toggle("toBeAdded");
            })
        } else {
            console.log(`${Character.characterClass} Spells error`);
        }
    }

    static setSpellsToKnown(number, ...args) {
        switch (number) {
            case 0:
                args.forEach((arg) => {
                    spells.get(`${arg}`)[0].known = false;
                    console.log(`Spell ${arg} set to unknown.`)
                })
                break;
            case 1:
                args.forEach((arg) => {
                    spells.get(`${arg}`)[0].known = true;
                    console.log(`Spell ${arg} set to known.`)
                })
                break;
            default:
                break;
        }

    }



    static addSpellsByLevel(number, ...args) {
        switch (number) {
            case 0:
                args.forEach((arg) => {
                    Character.possibleCantripSpells.push(spells.get(`${arg}`)[0].name);
                    Character.cantripSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`0 ${Character.cantripSpellsChosen}`);
                break;
            case 1:
                args.forEach((arg) => {
                    Character.firstLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.firstLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`1st ${Character.firstLevelSpellsChosen}`);
                break;
            case 2:
                args.forEach((arg) => {
                    Character.secondLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.secondLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`2nd ${Character.secondLevelSpellsChosen}`);
                break;
            case 3:
                args.forEach((arg) => {
                    Character.thirdLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.thirdLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`3rd ${Character.thirdLevelSpellsChosen}`);
                break;
            case 4:
                args.forEach((arg) => {
                    Character.fourthLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.fourthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`4th ${Character.fourthLevelSpellsChosen}`);
                break;
            case 5:
                args.forEach((arg) => {
                    Character.fifthLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.fifthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`5th ${Character.fifthLevelSpellsChosen}`);
                break;
            case 6:
                args.forEach((arg) => {
                    Character.sixthLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.sixthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`6th ${Character.sixthLevelSpellsChosen}`);
                break;
            case 7:
                args.forEach((arg) => {
                    Character.seventhLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.seventhLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`7th ${Character.seventhLevelSpellsChosen}`);
                break;
            case 8:
                args.forEach((arg) => {
                    Character.eigthLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.eigthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`8th ${Character.eigthLevelSpellsChosen}`);
                break;
            case 9:
                args.forEach((arg) => {
                    Character.ninethLevelSpells.push(spells.get(`${arg}`)[0].name);
                    Character.ninethLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
                })
                console.log(`9th ${Character.ninethLevelSpellsChosen}`);
                break;
        }
    }





    // Stats------------------------------------------------------------------------------------------------------------------------------------------------------

    static updateCharacterStats() {
        let totals = document.getElementsByClassName("statTotal");
        let mods = document.getElementsByClassName("statMod");
        for (let i = 0; i < abilityScores.length; i++) {
            totals[i].textContent = abilityScores[i].value;
            mods[i].textContent = App.getNumber(abilityScores[i].mod());
        }
    }


    static updateCharacterHitPoints() {
        Character.characterHitpoints = Character.hitDice + abilityScores[2].mod.bind(abilityScores[2])();
        if (isNaN(Character.characterHitpoints)) {
            hpNode.innerText = "";
        } else {
            hpNode.innerText = Character.characterHitpoints;
        }
    }


    static setCharacterHitdice(number) {
        Character.hitDice = number;
    }


    static updateCharacterInitiative() {
        Character.initiativeMod = abilityScores[1].mod.bind(abilityScores[1])();
        initiativeNode.textContent = App.getNumber(Character.initiativeMod);
    }


    static updateCharacterPassivePerception() {
        Character.passivePerception = 10 + abilityScores[4].mod.bind(abilityScores[4])();
        passivePerceptionNode.textContent = Character.passivePerception;
    }

    static resetCharacterSubClass() {
        Character.characterSubClass = null;
        subClassNode.textContent = "";
    }

    static resetCharacterSavingThrows() {
        Character.savingThrows = [];
    }

    static setCharacterSavingThrows(...args) {
        args.forEach((arg) => {
            savingThrows.get(`${arg}`)[0].proficient = true;
            Character.savingThrows.push(`${arg}`);
        })
    }

    static setCharacterWalkingSpeed(value) {
        Character.characterWalkingSpeed = value;
    }
    static setCharacterClimbingSpeed(value) {
        Character.characterClimbingSpeed = value;
    }
    static setCharacterSwimmingSpeed(value) {
        Character.characterSwimingSpeed = value;
    }
    static setCharacterFlyingSpeed(value) {
        Character.characterFlyingSpeed = value;
    }

    static resetsetCharacterSpeed() {
        Character.characterWalkingSpeed = 0;
        Character.characterClimbingSpeed = 0;
        Character.characterSwimingSpeed = 0;
        Character.characterFlyingSpeed = 0;
    }

    static updateCharacterSpeeds() {
        if (Character.characterWalkingSpeed <= 0 && Character.characterClimbingSpeed <= 0 && Character.characterSwimingSpeed <= 0 && Character.characterFlyingSpeed <= 0) {
            SpeedNode.hidden = true;
        } else {
            SpeedNode.hidden = false;
        }
        let speeds = [];
        if (Character.characterWalkingSpeed >= 1) {
            speeds.push(`${Character.characterWalkingSpeed} feet`)
        }
        if (Character.characterClimbingSpeed >= 1) {
            speeds.push(`${Character.characterClimbingSpeed} feet climbing`)
        }
        if (Character.characterSwimingSpeed >= 1) {
            speeds.push(`${Character.characterSwimingSpeed} feet swimming`)
        }
        if (Character.characterFlyingSpeed >= 1) {
            speeds.push(`${Character.characterFlyingSpeed} feet flying`)
        }
        SpeedsNode.innerText = speeds.join(", ");
    }




    // Full character actions----------------------------------------------------------------------------------------------------------------------

    static fullCharacterUpdate() {
        this.updateCharacterHitPoints();
        this.updateSkills();
        this.updateCharacterStats();
        this.updateCharacterSpeeds();
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
        this.resetCharacterPossibleToolchoices();
        this.resetCharacterSkills();
        this.resetsetCharacterSpeed();
        this.resetCharacterVision();
        this.resetCharacterSavingThrows();
        this.setCharacterSkillsNumberToChoose(null);
        this.resetSkillNodes();
        this.resetCharacterChosenSkills();
        this.resetPossibleSkills();
        this.resetCharacterFeatures();
        this.resetCharacterSpells();
        this.resetCharacterSpellSlots();
        this.resetSpellLists();
        this.resetCharacterSpellsKnown();
        this.resetCharacterSubClass();
        console.log('RESET');
        console.log('1');
    }




}