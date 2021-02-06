class App {
    static siteClassChoice = `<h1 class="text-center">Choose your class</h1>
    <div class="row">
        <div class="col-10 offset-1" id="classesRadio">
    
        <button onclick="App.setCharacterClass(this.value)" id="artificerButton" class="btn btn-primary" value="Artificer" >Artificer</button>
        <button onclick="App.setCharacterClass(this.value)" id="barbarianButton" class="btn btn-primary" value="Barbarian" >Barbarian</button>
        <button onclick="App.setCharacterClass(this.value)" id="bardButton" class="btn btn-primary" value="Bard" >Bard</button>
        <button onclick="App.setCharacterClass(this.value)" id="clericButton" value="Cleric" class="btn btn-primary" >Cleric</button>
        <button onclick="App.setCharacterClass(this.value)" id="druidButton" class="btn btn-primary" value="Druid" >Druid</button>
        <button onclick="App.setCharacterClass(this.value)" id="fighterButton" class="btn btn-primary" value="Fighter" >Fighter</button>
        <button onclick="App.setCharacterClass(this.value)" id="monkButton" class="btn btn-primary" value="Monk" >Monk</button>
        <button onclick="App.setCharacterClass(this.value)" id="mysticButton" class="btn btn-primary" value="Mystic" >Mystic</button>
        <button onclick="App.setCharacterClass(this.value)" id="paladinButton" class="btn btn-primary" value="Paladin" >Paladin</button>
        <button onclick="App.setCharacterClass(this.value)" id="rangerButton" class="btn btn-primary" value="Ranger" >Ranger</button>
        <button onclick="App.setCharacterClass(this.value)" id="rogueButton" class="btn btn-primary" value="Rogue" >Rogue</button>
        <button onclick="App.setCharacterClass(this.value)" id="sorcererButton" class="btn btn-primary" value="Sorcerer" >Sorcerer</button>
        <button onclick="App.setCharacterClass(this.value)" id="warlockButton" class="btn btn-primary" value="Warlock" >Warlock</button>
        <button onclick="App.setCharacterClass(this.value)" id="wizardButton" class="btn btn-primary" value="Wizard" >Wizard</button>
        </div>
        
        <div class="form-group col-3 offset-4 d-flex justify-content-center">
            <label for="characterLevel">How many levels do you want in this class?</label>
            <select class="form-control col-3" id="characterLevel" disabled>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
        </div>
    </div>
    
    <div id="showClassDetails"></div>
    <div class="d-flex justify-content-center">
        <button class="btn btn-info" id="goToFeatures" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Features</button>
    </div>`;

    static startApp() {
        mainNode.innerHTML = this.siteClassChoice;
        overviewNode.style.visibility = "visible";
        App.update();
    }

    static getNumber(mod) {
        if (mod >= 0) {
            return "+" + mod;
        } else {
            return mod.toString();
        }
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

        characterSubClass = "";
        subClassNode.textContent = "";
        featuresNode.innerHTML = "";

        const classSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
        for (const i of classSkills) {
            i.classList.remove("toBeAdded");
        }
        console.log('RESET');
    }

    static update() {
        console.log("UPDATE");
        Character.fullCharacterUpdate();
    }


    static setCharacterClass(characterClass) {
        App.reset();
        const classDetailsNode = document.getElementById("showClassDetails");
        classDetailsNode.innerHTML = ""; //clean the element for other text to be displayed

        switch (characterClass) {
            case ARTIFICER:
                hitDice = 8;
                const artSkills = document.querySelectorAll('#summaryArcana, #summaryHistory, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summarySleight');
                for (const i of artSkills) {
                    i.classList.add("toBeAdded");
                }
                characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("Simpleweapons")[0].proficient = weapons.get("Firearms")[0].proficient = tools.get("Thieves")[0].proficient = tools.get("Tinker")[0].proficient = true; //set class proficienciess to true
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Artificer.artificerFeaturesByLevel[i];
                    featuresNode.innerHTML += Artificer.artificerFeaturesList[i];
                }
                break;
            case BARBARIAN:
                hitDice = 12;
                const barbSkills = document.querySelectorAll('#summaryAnimalHandling, #summaryAthletics, #summaryIntimidation, #summaryNature, #summaryPerception, #summarySurvival');
                for (const i of barbSkills) {
                    i.classList.add("toBeAdded");
                }
                characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("Simpleweapons")[0].proficient = weapons.get("Martialweapons")[0].proficient = true;
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Barbarian.barbarianFeaturesByLevel[i];
                    featuresNode.innerHTML += Barbarian.barbarianFeaturesList[i];
                }
                break;
            case BARD:
                hitDice = 8;
                const bardSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of bardSkills) {
                    i.classList.add("toBeAdded");
                }
                characterArmorProficiencies[1][1] = characterWeaponProficiencies[0][1] = characterWeaponProficiencies[35][1] = characterWeaponProficiencies[23][1] = characterWeaponProficiencies[27][1] = characterWeaponProficiencies[29][1] = true;

                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Bard.bardFeaturesByLevel[i];
                    featuresNode.innerHTML += Bard.bardFeaturesList[i];
                }
                break;
            case CLERIC:
                hitDice = 8;
                const clericSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of clericSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Cleric.clericFeaturesByLevel[i];
                }
                break;
            case DRUID:
                hitDice = 8;
                const druidSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of druidSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Druid.druidFeaturesByLevel[i];
                }
                break;
            case FIGHTER:
                hitDice = 10;
                const fighterSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of fighterSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Fighter.fighterFeaturesByLevel[i];
                }
                break;
            case MONK:
                hitDice = 8;
                const monkSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of monkSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Monk.monkFeaturesByLevel[i];
                }
                break;
            case MYSTIC:
                hitDice = 8;
                const mysticSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of mysticSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Mystic.mysticFeaturesByLevel[i];
                }
                break;
            case PALADIN:
                hitDice = 10;
                const paladinSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of paladinSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Paladin.paladinFeaturesByLevel[i];
                }
                break;
            case RANGER:
                hitDice = 10;
                const rangerSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of rangerSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Ranger.rangerFeaturesByLevel[i];
                }
                break;
            case ROGUE:
                hitDice = 8;
                const rogueSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of rogueSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Rogue.rogueFeaturesByLevel[i];
                }
                break;
            case SORCERER:
                hitDice = 6;
                const sorcererSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of sorcererSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Sorcerer.sorcererFeaturesByLevel[i];
                }
                break;
            case WARLOCK:
                hitDice = 8;
                const warlockSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of warlockSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Warlock.warlockFeaturesByLevel[i];
                }
                break;
            case WIZARD:
                hitDice = 6;
                const wizardSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryArcana, #summaryAthletics, #summaryDeception, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summaryReligion, #summarySleight, #summaryStealth, #summarySurvival');
                for (const i of wizardSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Wizard.wizardFeaturesByLevel[i];
                }
                break;
        }

        const changeToGreen = document.querySelectorAll(
            "#summaryClass, #summarySubClass, #summaryLevel, #summaryHP, #featuresList, #weaponProficiencies, #armorProficiencies, #toolProficiencies, #languageProficiencies"
        );

        for (const i of changeToGreen) {
            i.classList.add("toBeAdded");
        }

        classNode.textContent = characterClass;
        levelNode.textContent = characterLevel;

        App.update();

        if (characterClass == ARTIFICER) {
            toolProficienciesNode.textContent += ", and one type of artisan's tools of your choice";
        } else if (characterClass == BARD) {
            document.getElementById("toolProficiencies").textContent = "Three musical instruments of your choice";
        }
    }
}