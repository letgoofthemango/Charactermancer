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
        tools.forEach((tool) => {
            if (tool[0].proficient == true) {
                characterToolsProficiencies.push(tool[0].name);
            }
        })
        if (characterToolsProficiencies.length > 0) {
            toolsNode.hidden = false;
        } else {
            toolsNode.hidden = true;
        }
        toolProficienciesNode.textContent = characterToolsProficiencies.join(", ");
    }

    static resetCharacterToolProficiencies() {
        characterToolsProficiencies = [];
        tools.forEach((tool) => {
            tool[0].proficient = false;
        });
    }

    static setCharacterToolProficiencies(...args) {
        args.forEach((arg) => {
            tools.get(`${arg}`)[0].proficient = true;
        })
    }





    // Skills-------------------------------------------------------------------------------------------------------------------------------------------------
    static resetCharacterSkills() {
        skills.forEach((skill) => {
            skill.proficiency = 0;
        })
    }

    static resetSkillNodes() {
        const classSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
        classSkills.forEach((skill) => {
            skill.classList.remove("toBeAdded");
            skill.setAttribute('hidden', 'true');
        })
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
            document.getElementById("skillsID" + i).textContent = `: ${App.getNumber(skills[i].mod)}`;
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

        chosenCharacterSkills.push(skill); //push it into the chosen skills for later use.

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
        possibleSkills.push(...args);
        const skills = document.querySelectorAll("#summary" + args.join(", #summary"));
        skills.forEach((skill) => {
            skill.classList.add("toBeAdded");
            skill.removeAttribute('hidden');
        })
    }

    static resetCharacterChosenSkills() {
        chosenCharacterSkills = [];
    }

    static resetPossibleSkills() {
        possibleSkills = [];
    }

    static setCharacterSkillsNumberToChoose(number) {
        numberOfSkillsToChoose = number;
    }

    static showNodesForPossibleSkills(...args) {
        const skills = document.querySelectorAll("#summary" + args.join(", #summary"));
        skills.forEach((skill) => {
            skill.classList.add("toBeAdded");
            skill.removeAttribute('hidden');
        })
    }





    // Language-------------------------------------------------------------------------------------------------------------------------------------------------
    static updateLanguageProficiencies() {
        languages.forEach((language) => {
            if (language[0].proficient == true) {
                languageProficiencies.push(language[0].name);
            }
        })
        if (languageProficiencies.length >= 0) {
            languageNode.setAttribute('hidden', false);
        } else {
            languageNode.setAttribute('hidden', true);
        }
        languageProficienciesNode.textContent = languageProficiencies.join(", ");
    }

    static resetCharacterLanguageProficiencies() {
        languages.forEach((language) => {
            language[0].proficient = false;
        });
    }

    static setCharacterLanguageProficiencies(...args) {
        args.forEach((arg) => {
            languages.get(`${arg}`)[0].proficient = true;
            console.log(`Language ${arg} has been set to proficient.`)
        })
        console.log(languageProficiencies);
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

    static addCharacterFeatures(...args) {
        characterFeatures.push(...args);
    }

    static setCharacterFeatures(...args) {
        characterFeatures = [...args];
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
        cantripSpellsChosen = [];
        firstLevelSpells = [];
        firstLevelSpellsChosen = [];
        secondLevelSpells = [];
        secondLevelSpellsChosen = [];
        thirdLevelSpells = [];
        thirdLevelSpellsChosen = [];
        fourthLevelSpells = [];
        fourthLevelSpellsChosen = [];
        fifthLevelSpells = [];
        fifthLevelSpellsChosen = [];
        sixthLevelSpells = [];
        sixthLevelSpellsChosen = [];
        seventhLevelSpells = [];
        seventhLevelSpellsChosen = [];
        eigthLevelSpells = [];
        eigthLevelSpellsChosen = [];
        ninethLevelSpells = [];
        ninethLevelSpellsChosen = [];
    }

    static renderSpells() {
        cantripSpells = App.removeDuplicates(cantripSpells.sort());
        cantripSpells.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            cantripsListNode.append(newLi);
        })

        firstLevelSpells = App.removeDuplicates(firstLevelSpells.sort());
        firstLevelSpells.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            firstLevelListNode.append(newLi);
        })
        if (cantripSpells.length > 0 && firstLevelSpells.length > 0) {
            spellsHeadingNode.setAttribute('hidden', false);
        } else {
            spellsHeadingNode.setAttribute('hidden', true);
        }
    }

    static renderChosenSpells() {
        cantripSpellsChosen = App.removeDuplicates(cantripSpellsChosen.sort());
        cantripSpellsChosen.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            cantripsListNode.append(newLi);
        })

        firstLevelSpells = App.removeDuplicates(firstLevelSpells.sort());
        firstLevelSpellsChosen.forEach((spell) => {
            const newLi = document.createElement("li");
            const newContent = document.createTextNode(`${spell}`);
            const newName = spell.replace(/ /g, "");
            newLi.setAttribute('id', `${newName}Spell`);
            newLi.appendChild(newContent);
            firstLevelListNode.append(newLi);
        })
    }

    static setCharacterSpellsKnown(a, b, c, d, e, f, g, h, i, j) {
        cantripsKnown = a;
        firstLevelSpellsKnown = b;
        secondLevelSpellsKnown = c;
        thirdLevelSpellsKnown = d;
        fourthLevelSpellsKnown = e;
        fifthLevelSpellsKnown = f;
        sixthLevelSpellsKnown = g;
        seventhLevelSpellsKnown = h;
        eigthLevelSpellsKnown = i;
        ninethLevelSpellsKnown = j;
    }

    static resetCharacterSpellsKnown() {
        cantripsKnown = null;
        firstLevelSpellsKnown = null;
        secondLevelSpellsKnown = null;
        thirdLevelSpellsKnown = null;
        fourthLevelSpellsKnown = null;
        fifthLevelSpellsKnown = null;
        sixthLevelSpellsKnown = null;
        seventhLevelSpellsKnown = null;
        eigthLevelSpellsKnown = null;
        ninethLevelSpellsKnown = null;
    }

    static setCharacterSpellSlots(a, b, c, d, e, f, g, h, i) {
        firstLevelSpellSlots = a;
        secondLevelSpellSlots = b;
        thirdLevelSpellSlots = c;
        fourthLevelSpellSlots = d;
        fifthLevelSpellSlots = e;
        sixthLevelSpellSlots = f;
        seventhLevelSpellSlots = g;
        eigthLevelSpellSlots = h;
        ninethLevelSpellSlots = i;

    }

    static resetCharacterSpellSlots() {
        firstLevelSpellSlots = null;
        secondLevelSpellSlots = null;
        thirdLevelSpellSlots = null;
        fourthLevelSpellSlots = null;
        fifthLevelSpellSlots = null;
        sixthLevelSpellSlots = null;
        seventhLevelSpellSlots = null;
        eigthLevelSpellSlots = null;
        ninethLevelSpellSlots = null;
    }

    static setClassSpells(number) {
        let spellLevel;
        if (characterLevel <= number) {
            spellLevel = document.querySelectorAll('#cantrips, #firstLevel');
            spellLevel.forEach((element) => {
                element.hidden = false;
            });
            spells.forEach((spell) => {
                if (spell[0].level == 0 && spell[0].classes.includes(`${characterClass}`)) {
                    cantripSpells.push(spell[0].name);
                }
            })
            spells.forEach((spell) => {
                if (spell[0].level == 1 && spell[0].classes.includes(`${characterClass}`)) {
                    firstLevelSpells.push(spell[0].name);
                }
            })
            const lists = document.querySelectorAll('#cantripsList,#firstLevelList');
            lists.forEach((list) => {
                list.classList.toggle("toBeAdded");
            })
        } else {
            console.log(`${characterClass} Spells error`);
        }
    }

    let iVersuchs = [cantripSpells,
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
    let Iversuchs2 = [
    [cantripSpellsChosen],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
    static addSpellsByLevel(number, ...args) {
        args.forEach((arg) => {
        iVersuchs[number].push(spells.get(`${arg}`)[0].name);
        iVersuchs2[number].push(spells.get(`${arg}`)[0].name);
        }
console.log(iVersuchs2[number]);




    switch (number) {
        case 0:
            /*        args.forEach((arg) => {
                                cantripSpells.push(spells.get(`${arg}`)[0].name);
                                cantripSpellsChosen.push(spells.get(`${arg}`)[0].name);
                            }) */
                            
            console.log(`0 ${cantripSpellsChosen}`);
            break;
        case 1:
            args.forEach((arg) => {
                firstLevelSpells.push(spells.get(`${arg}`)[0].name);
                firstLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`1st ${firstLevelSpellsChosen}`);
            break;
        case 2:
            args.forEach((arg) => {
                secondLevelSpells.push(spells.get(`${arg}`)[0].name);
                secondLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`2nd ${secondLevelSpellsChosen}`);
            break;
        case 3:
            args.forEach((arg) => {
                thirdLevelSpells.push(spells.get(`${arg}`)[0].name);
                thirdLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`3rd ${thirdLevelSpellsChosen}`);
            break;
        case 4:
            args.forEach((arg) => {
                fourthLevelSpells.push(spells.get(`${arg}`)[0].name);
                fourthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`4th ${fourthLevelSpellsChosen}`);
            break;
        case 5:
            args.forEach((arg) => {
                fifthLevelSpells.push(spells.get(`${arg}`)[0].name);
                fifthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`5th ${fifthLevelSpellsChosen}`);
            break;
        case 6:
            args.forEach((arg) => {
                sixthLevelSpells.push(spells.get(`${arg}`)[0].name);
                sixthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`6th ${sixthLevelSpellsChosen}`);
            break;
        case 7:
            args.forEach((arg) => {
                seventhLevelSpells.push(spells.get(`${arg}`)[0].name);
                seventhLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`7th ${seventhLevelSpellsChosen}`);
            break;
        case 8:
            args.forEach((arg) => {
                eigthLevelSpells.push(spells.get(`${arg}`)[0].name);
                eigthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`8th ${eigthLevelSpellsChosen}`);
            break;
        case 9:
            args.forEach((arg) => {
                ninethLevelSpells.push(spells.get(`${arg}`)[0].name);
                ninethLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
            })
            console.log(`9th ${ninethLevelSpellsChosen}`);
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

    static resetCharacterSavingThrows() {
    CharacterSavingThrows = [];
}

    static setCharacterSavingThrows(...args) {
    args.forEach((arg) => {
        savingThrows.get(`${arg}`)[0].proficient = true;
        CharacterSavingThrows.push(`${arg}`);
        console.log(`Proficiency for ${arg} has been set to proficient.`)
    })
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
}




}