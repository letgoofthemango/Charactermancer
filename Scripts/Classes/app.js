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
        overviewNode.style.visibility = "visible";
        Character.fullCharacterUpdate();
    }

    static getNumber(mod) {
        if (mod >= 0) {
            return "+" + mod;
        } else {
            return mod.toString();
        }
    }


    static setCharacterClass(characterClass) {
        Character.reset();
        const classDetailsNode = document.getElementById("showClassDetails");
        classDetailsNode.innerHTML = ""; //clean the element for other text to be displayed
        Character.resetSpellLists();

        switch (characterClass) {
            case ARTIFICER:
                hitDice = 8;
                const artificerSkills = document.querySelectorAll('#summaryArcana, #summaryHistory, #summaryInvestigation, #summaryMedicine, #summaryNature, #summaryPerception, #summarySleight');
                for (const i of artificerSkills) {
                    i.classList.add("toBeAdded");
                }
                characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("SimpleWeapons")[0].proficient = weapons.get("Firearms")[0].proficient = tools.get("Thieves")[0].proficient = tools.get("Tinker")[0].proficient = true; //set class proficienciess to true
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Artificer.artificerFeaturesByLevel[i];
                    featuresNode.innerHTML += Artificer.artificerFeaturesList[i];
                }
                Artificer.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;

            case BARBARIAN:
                hitDice = 12;
                const barbarianSkills = document.querySelectorAll('#summaryAnimalHandling, #summaryAthletics, #summaryIntimidation, #summaryNature, #summaryPerception, #summarySurvival');
                for (const i of barbarianSkills) {
                    i.classList.add("toBeAdded");
                }
                characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("SimpleWeapons")[0].proficient = weapons.get("MartialWeapons")[0].proficient = true;
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
                weapons.get("SimpleWeapons")[0].proficient = weapons.get("HandCrossbow")[0].proficient = weapons.get("Longsword")[0].proficient = weapons.get("Rapier")[0].proficient = weapons.get("Shortsword")[0].proficient = characterArmorProficiencies[1][1] = true;

                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Bard.bardFeaturesByLevel[i];
                    featuresNode.innerHTML += Bard.bardFeaturesList[i];
                }
                Bard.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;

            case CLERIC:
                Cleric.setClericHitdice();
                Cleric.setClericSkillNodes();
                Cleric.setClericSpells();
                Cleric.setClericWeaponProficiencies();
                Cleric.setClericArmorProficiencies();
                Cleric.displayClericFeaturesByLevel();
                break;

            case DRUID:
                hitDice = 8;
                characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("Club")[0].proficient = weapons.get("Dagger")[0].proficient = weapons.get("Dart")[0].proficient = weapons.get("Javelin")[0].proficient = weapons.get("Mace")[0].proficient = weapons.get("Quarterstaff")[0].proficient = weapons.get("Scimitar")[0].proficient = weapons.get("Sickle")[0].proficient = weapons.get("Sling")[0].proficient = weapons.get("Spear")[0].proficient = characterLanguageProficiencies[4][1] = true;
                const druidSkills = document.querySelectorAll('#summaryAnimalHandling, #summaryArcana, #summaryInsight, #summaryMedicine, #summaryNature, #summaryPerception, #summaryReligion, #summarySurvival');
                for (const i of druidSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Druid.druidFeaturesByLevel[i];
                    featuresNode.innerHTML += Druid.druidFeaturesList[i];
                }
                Druid.setSpellLevel();
                break;

            case FIGHTER:
                hitDice = 10;
                weapons.get("SimpleWeapons")[0].proficient = weapons.get("MartialWeapons")[0].proficient = characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[3][1] = characterArmorProficiencies[4][1] = true;
                const fighterSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAnimalHandling, #summaryAthletics, #summaryHistory, #summaryInsight, #summaryIntimidation, #summaryPerception, #summarySurvival');
                for (const i of fighterSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Fighter.fighterFeaturesByLevel[i];
                    featuresNode.innerHTML += Fighter.fighterFeaturesList[i];
                }
                break;

            case MONK:
                hitDice = 8;
                weapons.get("SimpleWeapons")[0].proficient = weapons.get("Shortsword")[0].proficient = characterArmorProficiencies[0][1] = true;
                const monkSkills = document.querySelectorAll('#summaryAcrobatics, #summaryAthletics, #summaryHistory, #summaryInsight, #summaryReligion, #summaryStealth');
                for (const i of monkSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Monk.monkFeaturesByLevel[i];
                    featuresNode.innerHTML += Monk.monkFeaturesList[i];
                }
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
                hitDice = 10;
                weapons.get("SimpleWeapons")[0].proficient = weapons.get("MartialWeapons")[0].proficient = characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[3][1] = characterArmorProficiencies[4][1] = true;
                const paladinSkills = document.querySelectorAll('#summaryAthletics, #summaryInsight, #summaryIntimidation, #summaryMedicine, #summaryPersuasion, #summaryReligion');
                for (const i of paladinSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Paladin.paladinFeaturesByLevel[i];
                    featuresNode.innerHTML += Paladin.paladinFeaturesList[i];
                }
                Paladin.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                break;

            case RANGER:
                hitDice = 10;
                characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("SimpleWeapons")[0].proficient = weapons.get("MartialWeapons")[0].proficient = true;
                const rangerSkills = document.querySelectorAll('#summaryAnimalHandling, #summaryAthletics, #summaryInsight, #summaryInvestigation, #summaryNature, #summaryPerception, #summaryStealth, #summarySurvival');
                for (const i of rangerSkills) {
                    i.classList.add("toBeAdded");
                }
                for (let i = 0; i < characterLevel; i++) {
                    classDetailsNode.innerHTML += Ranger.rangerFeaturesByLevel[i];
                    featuresNode.innerHTML += Ranger.rangerFeaturesList[i];
                }
                Ranger.setSpellLevel(); // CHANGE THIS TO CLERIC EXAMPLE ON SPELLS ETC!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
            toolProficienciesNode.textContent = "Three musical instruments of your choice";
        } else if (characterClass == DRUID) {
            armorProficienciesNode.textContent += " (druids will not wear armor or use shields made of metal)"
        } else if (characterClass == MONK) {
            toolProficienciesNode.textContent = "any one type of artisan's tools or any one musical instrument of your choice"
        }
    }
}