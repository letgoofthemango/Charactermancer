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
        <!-- <button onclick="App.setCharacterClass(this.value)" id="mysticButton" class="btn btn-primary" value="Mystic" >Mystic</button> -->
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
        <button class="btn btn-info" id="goToFeatures">Next</button>
    </div>`;

    static startApp() {
        mainNode.innerHTML = this.siteClassChoice;
        Character.fullCharacterUpdate();
    }

    static getNumber(mod) {
        if (mod >= 0) {
            return "+" + mod;
        } else {
            return mod.toString();
        }
    }

    static removeDuplicates(data) {
        return [...new Set(data)]
    }


    static setCharacterClass(characterClass) {
        overviewNode.style.visibility = "visible";
        Character.fullCharacterReset();
        const classDetailsNode = document.getElementById("showClassDetails");
        classDetailsNode.innerHTML = ""; //clean the element for other text to be displayed
        Character.resetSpellLists();

        switch (characterClass) {
            case ARTIFICER:
                Artificer.setArtificerClass();
                Artificer.displayArtificerFeaturesByLevel();
                break;

            case BARBARIAN:
                Barbarian.setBarbarianClass();
                Barbarian.displayBarbarianFeaturesByLevel();
                break;

            case BARD:
                Bard.setBardClass();
                Bard.displayBardFeaturesByLevel();
                break;

            case CLERIC:
                Cleric.setClericClass();
                Cleric.displayClericFeaturesByLevel();
                break;

            case DRUID:
                Druid.setDruidClass();
                Druid.displayDruidFeaturesByLevel();
                break;

            case FIGHTER:
                Fighter.setFighterClass();
                Fighter.displayFighterFeaturesByLevel();
                break;

            case MONK:
                Monk.displayMonkFeaturesByLevel();
                Monk.setMonkClass();
                break;

            case MYSTIC:
                hitDice = 8;
                weapons.get("SimpleWeapons")[0].proficient = characterArmorProficiencies[1][1] = true;
                const mysticSkills = document.querySelectorAll('#summaryArcana, #summaryHistory, #summaryInsight, #summaryMedicine, #summaryNature, #summaryPerception, #summaryReligion');
                for (const i of mysticSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Mystic.mysticFeaturesByLevel[i];
                    featuresNode.innerHTML += Mystic.mysticFeaturesList[i];
                }
                break;

            case PALADIN:
                Paladin.displayPaladinFeaturesByLevel();
                Paladin.setPaladinClass();
                break;

            case RANGER:
                Ranger.displayRangerFeaturesByLevel();
                Ranger.setRangerClass();
                break;

            case ROGUE:
                hitDice = 8;
                weapons.get("SimpleWeapons")[0].proficient = weapons.get("HandCrossbow")[0].proficient = weapons.get("Longsword")[0].proficient = weapons.get("Rapier")[0].proficient = weapons.get("Shortsword")[0].proficient = characterArmorProficiencies[1][1] = tools.get("Thieves")[0].proficient = characterLanguageProficiencies[15][1] = true;
                const rogueSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAthletics, #summaryDeception, #summaryInsight, #summaryIntimidation, #summaryInvestigation, #summaryPerception, #summaryPerformance, #summaryPersuasion, #summarySleight, #summaryStealth');
                for (const i of rogueSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Rogue.rogueFeaturesByLevel[i];
                    featuresNode.innerHTML += Rogue.rogueFeaturesList[i];
                }
                Rogue.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;

            case SORCERER:
                hitDice = 6;
                weapons.get("Dagger")[0].proficient = weapons.get("Dart")[0].proficient = weapons.get("Sling")[0].proficient = weapons.get("Quarterstaff")[0].proficient = weapons.get("LightCrossbow")[0].proficient = characterArmorProficiencies[0][1] = true;
                const sorcererSkills = document.querySelectorAll('#summaryArcana, #summaryDeception, #summaryInsight, #summaryIntimidation, #summaryPersuasion, #summaryReligion');
                for (const i of sorcererSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Sorcerer.sorcererFeaturesByLevel[i];
                    featuresNode.innerHTML += Sorcerer.sorcererFeaturesList[i];
                }
                Sorcerer.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;

            case WARLOCK:
                hitDice = 8;
                weapons.get("SimpleWeapons")[0].proficient = characterArmorProficiencies[1][1] = true;
                const warlockSkills = document.querySelectorAll('#summaryArcana, #summaryDeception, #summaryHistory, #summaryIntimidation, #summaryInvestigation, #summaryNature, #summaryReligion');
                for (const i of warlockSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Warlock.warlockFeaturesByLevel[i];
                    featuresNode.innerHTML += Warlock.warlockFeaturesList[i];
                }
                Warlock.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;

            case WIZARD:
                hitDice = 6;
                weapons.get("Dagger")[0].proficient = weapons.get("Dart")[0].proficient = weapons.get("Sling")[0].proficient = weapons.get("Quarterstaff")[0].proficient = weapons.get("LightCrossbow")[0].proficient = characterArmorProficiencies[0][1] = true;
                const wizardSkills = document.querySelectorAll('#summaryArcana, #summaryHistory, #summaryInsight, #summaryInvestigation, #summaryMedicine, #summaryReligion');
                for (const i of wizardSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Wizard.wizardFeaturesByLevel[i];
                    featuresNode.innerHTML += Wizard.wizardFeaturesList[i];
                }
                Wizard.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;
        }

        const changeToGreen = document.querySelectorAll(
            "#summaryClass, #summarySubClass, #summaryLevel, #summaryHP, #featuresList, #weaponProficiencies, #armorProficiencies, #toolProficiencies, #languageProficiencies, #cantripsList, #firstLevelList"
        );

        for (const i of changeToGreen) {
            i.classList.add("toBeAdded");
        }

        classNode.textContent = characterClass;
        levelNode.textContent = characterLevel;

        Character.fullCharacterUpdate();
        Character.renderSpells();

        if (characterClass == ARTIFICER) {
            toolProficienciesNode.textContent += ", and one type of artisan's tools of your choice";
        } else if (characterClass == BARD) {
            toolsNode.removeAttribute("hidden");
            toolProficienciesNode.textContent = "Three musical instruments of your choice";
        } else if (characterClass == DRUID) {
            armorProficienciesNode.textContent += " (druids will not wear armor or use shields made of metal)"
            languageNode.removeAttribute("hidden");
        } else if (characterClass == MONK) {
            toolProficienciesNode.textContent = "any one type of artisan's tools or any one musical instrument of your choice"
        }
    }
}