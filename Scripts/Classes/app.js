class App {
    static siteClassChoice = `<h1 class="text-center">Choose your class</h1>
    <div class="row">
        <div class="col-10 offset-1" id="classesRadio">
    
        <button onclick="App.renderCharacterClass(this.value)" id="artificerButton" class="btn btn-primary" value="Artificer" >Artificer</button>
        <button onclick="App.renderCharacterClass(this.value)" id="barbarianButton" class="btn btn-primary" value="Barbarian" >Barbarian</button>
        <button onclick="App.renderCharacterClass(this.value)" id="bardButton" class="btn btn-primary" value="Bard" >Bard</button>
        <button onclick="App.renderCharacterClass(this.value)" id="clericButton" value="Cleric" class="btn btn-primary" >Cleric</button>
        <button onclick="App.renderCharacterClass(this.value)" id="druidButton" class="btn btn-primary" value="Druid" >Druid</button>
        <button onclick="App.renderCharacterClass(this.value)" id="fighterButton" class="btn btn-primary" value="Fighter" >Fighter</button>
        <button onclick="App.renderCharacterClass(this.value)" id="monkButton" class="btn btn-primary" value="Monk" >Monk</button>
        <button onclick="App.renderCharacterClass(this.value)" id="paladinButton" class="btn btn-primary" value="Paladin" >Paladin</button>
        <button onclick="App.renderCharacterClass(this.value)" id="rangerButton" class="btn btn-primary" value="Ranger" >Ranger</button>
        <button onclick="App.renderCharacterClass(this.value)" id="rogueButton" class="btn btn-primary" value="Rogue" >Rogue</button>
        <button onclick="App.renderCharacterClass(this.value)" id="sorcererButton" class="btn btn-primary" value="Sorcerer" >Sorcerer</button>
        <button onclick="App.renderCharacterClass(this.value)" id="warlockButton" class="btn btn-primary" value="Warlock" >Warlock</button>
        <button onclick="App.renderCharacterClass(this.value)" id="wizardButton" class="btn btn-primary" value="Wizard" >Wizard</button>
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
        <button onclick="App.goToSkillsnTools()" class="btn btn-info" id="goToSkillsnTools">Next</button>
    </div>`;
    static siteSkillsNTools = `
 <div class="container" id="container">
 <h1 class="text-center">skills, features, languages, and spells</h1>
 <p class="text-center">Here you will be able to choose different things depending on the class choice that you
     made in the previous step.</p>

 <div class="row d-flex justify-content-between" id="selectionsDiv">
     <div class="col-3" id="skillsDiv">
         <h3 class="pl-5">skills</h3>
         <p>You may choose <u><span id="skillsCount">2</span></u> class skills</p>
         <div id="skillsSelectionList">
             <!-- to be filled -->
         </div>
     </div>

     <div class="col-3" id="ToolsDiv">
         <h3 class="pl-5">tools</h3>
         <p>You may choose <u><span id="toolsCount">1</span></u> additional class tool(s)</p>
         <div id="toolsSelectionList">
             <!-- to be filled -->
         </div>
     </div>

     <div class="col-3" id="languagesDiv">
         <h3 class="pl-5">languages</h3>
         <p>You may choose <u><span id="languagesCount">2</span></u> languages</p>
         <div id="languageSelectionList">
             <!-- to be filled -->
         </div>
     </div>

     <div class="col-3" id="spellsDiv">
         <h3 class="pl-5">spells</h3>
         <p>You may choose <u><span id="cantripCount">2</span></u> spells of cantrip level and <u><span
                     id="firstCount">2</span></u> of 1st level</p>
         <div id="spellSelectionList">
             <h5>cantrips</h5>
             <div id="cantripSelectionList">
                 <!-- to be filled -->
             </div>
             <h5>1st level</h5>
             <div id="firstSelectionList">
                 <!-- to be filled -->
             </div>
         </div>
     </div>
 </div>
</div>`


    static startApp() {
        mainNode.innerHTML = this.siteClassChoice;
        Character.fullCharacterUpdate();
    }

    static goToSkillsnTools() {
        mainNode.innerHTML = this.siteSkillsNTools;
        const skillsDivNode = document.getElementById("skillsDiv");
        const toolsDivNode = document.getElementById("ToolsDiv");
        const languagesDivNode = document.getElementById("languagesDiv");
        const spellsDivNode = document.getElementById("spellsDiv");
        if (possibleSkillChoices.length <= 0) {
            skillsDivNode.hidden = true;
        }
        if (characterPossibleToolChoices.length <= 0) {
            toolsDivNode.hidden = true;
        }
        if (possibleLanguageProficiencies.length <= 0) {
            languagesDivNode.hidden = true;
        }
        if (characterPossibleToolChoices.length <= 0) {
            spellsDivNode.hidden = true;
        }
        Character.resetSkillNodes();
        Character.resetSpellLists();

        App.populateCheckboxes("skillsSelectionList", possibleSkillChoices, chosenCharacterSkills);
        App.setupCheckboxesListeners("skillsSelectionList", chosenCharacterSkills, numberOfSkillsToChoose);
        App.populateCheckboxes("toolsSelectionList", characterPossibleToolChoices, characterToolsProficiencies);
        App.setupCheckboxesListeners("toolsSelectionList", characterToolsProficiencies, characterMaxToolProficiencies);
        App.populateCheckboxes("languageSelectionList", possibleLanguageProficiencies, languageProficiencies);
        App.setupCheckboxesListeners("languageSelectionList", languageProficiencies, maxLanguageProficiencies);
    }

    static getNumber(mod) {
        if (mod >= 0) {
            return "+" + mod;
        } else {
            return mod.toString();
        }
    }




    static renderCharacterClass(characterClass) {
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
                Rogue.displayRogueFeaturesByLevel();
                Rogue.setRogueClass();
                break;

            case SORCERER:
                Sorcerer.setSorcererClass();
                Sorcerer.displaySorcererFeaturesByLevel();
                break;

            case WARLOCK:
                Warlock.setWarlockClass();
                Warlock.displayWarlockFeaturesByLevel();
                break;

            case WIZARD:
                Wizard.setWizardClass();
                Wizard.displayWizardFeaturesByLevel();
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
            toolProficienciesNode.textContent = "three musical instruments of your choice";
        } else if (characterClass == DRUID) {
            armorProficienciesNode.textContent += " (druids will not wear armor or use shields made of metal)"
        } else if (characterClass == MONK) {
            toolsNode.hidden = false;
            toolProficienciesNode.textContent = "any one type of artisan's tools or any one musical instrument of your choice"
        }
    }



    static populateCheckboxes(id, referenceArray, endArray) {
        let sanitizedName;
        referenceArray.forEach((element) => {
            if (endArray.includes(element)) {
                return;
            }
            switch (referenceArray) {
                case characterPossibleToolChoices:
                    sanitizedName = element.toLowerCase().replace(/'s| | kit|(land or water)|set|-|Ante|tools|utensils|supplies/g, "");
                    break;
                case possibleSkillChoices:
                    sanitizedName = element.replace(/ |handling|of|hand/g, "");
                    break;
                case possibleLanguageProficiencies:
                    sanitizedName = element.replace(/ |'|Cant/g, "");
                    break;
                default:
                    break;
            }            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "form-check");
            const newSelect = document.createElement("input");
            newSelect.setAttribute("class", "form-check-input");
            newSelect.setAttribute("type", "checkbox");
            newSelect.setAttribute("value", `${sanitizedName}`);
            newSelect.setAttribute("id", `${sanitizedName}Check`);
            const newLabel = document.createElement("LABEL");
            newLabel.setAttribute("class", "form-check-label");
            newLabel.setAttribute("id", `${sanitizedName}Label`);
            newLabel.htmlFor = `${sanitizedName}Check`;
            newLabel.innerText = `${element}`;
            const appendedDiv = document.getElementById(id);
            appendedDiv.appendChild(newDiv);
            newDiv.appendChild(newSelect);
            newDiv.appendChild(newLabel);
        })
    }

    static setupCheckboxesListeners(id, referenceArray, referenceVariable) {
        const inputs = document.getElementById(id).getElementsByTagName("input");
        const nodes = Array.from(inputs);
        nodes.forEach((node) => {
            node.addEventListener("change", (event) => {
                this.checkBoxesHandler(event, nodes, referenceArray, referenceVariable);
            })
        });
    }


    static checkBoxesHandler(event, nodes, referenceArray, referenceVariable) {
        const node = event.target;
        if (node.checked == true) {
            switch (referenceArray) {
                case chosenCharacterSkills:
                    Character.setSkill(node.value, 2);
                    break;
                case characterToolsProficiencies:
                    Character.setCharacterToolProficiencies(1, node.value);
                    Character.updateCharacterToolProficiencies();
                    break;
                case languageProficiencies:
                    Character.setCharacterLanguageProficiencies(1, node.value);
                    Character.updateLanguageProficiencies();
                    break;

                default:
                    break;
            }
            if (referenceArray.length >= referenceVariable) {
                nodes.forEach((node) => {
                    if (referenceArray.includes(node.value)) {
                        node.disabled = false;
                    } else {
                        node.disabled = true;
                    }
                });
            }
            console.log(referenceArray);

        } else if (node.checked == false) {
            switch (referenceArray) {
                case chosenCharacterSkills:
                    Character.setSkill(node.value, 0);
                    break;
                case characterToolsProficiencies:
                    Character.setCharacterToolProficiencies(0, node.value);
                    Character.updateCharacterToolProficiencies();
                    break;
                case languageProficiencies:
                    Character.setCharacterLanguageProficiencies(0, node.value);
                    Character.updateLanguageProficiencies();
                    break;
                default:
                    break;
            }
            for (var i = 0; i < referenceArray.length; i++) {
                if (referenceArray[i] === node.value) {
                    referenceArray.splice(i, 1);
                    break
                }
            }
            // ABCD = ABCD.filter((skill) => skill !== node.value); eventuelle Filterfunktion!!!!!
            if (referenceArray.length < referenceVariable) {
                nodes.forEach((node) => {
                    node.disabled = false;
                });
            }
            console.log(referenceArray);
        }
        Character.updateSkills();
    }











    static cantripsSpellsCheckboxesListeners() {
        const inputs = document.getElementById("cantripSelectionList").getElementsByTagName("input");
        const nodes = Array.from(inputs);
        nodes.forEach((node) => {
            node.addEventListener("change", (event) => {
                cantripsCheckBoxesHandler(event, nodes);
            })
        });
    }
    // cantripsSpellsCheckboxesListeners();


    static cantripsCheckBoxesHandler(event, nodes) {
        const node = event.target;
        if (node.checked == true) {
            cantripSpellsChosen.push(node.value);
            if (cantripSpellsChosen.length >= referenceVariable) {
                nodes.forEach((node) => {
                    if (cantripSpellsChosen.includes(node.value)) {
                        node.disabled = false;
                    } else {
                        node.disabled = true;
                    }
                });
            }
            console.log("ist jetzt haken");

        } else if (node.checked == false) {
            // ABCD = ABCD.filter((skill) => skill !== node.value); eventuelle Filterfunktion!!!!!
            for (var i = 0; i < cantripSpellsChosen.length; i++) {
                if (cantripSpellsChosen[i] === node.value) {
                    cantripSpellsChosen.splice(i, 1);
                    break
                }
            }
            if (cantripSpellsChosen.length < referenceVariable) {
                nodes.forEach((node) => {
                    node.disabled = false;
                });
            }
            console.log("ist jetzt kein haken");
        }
        console.log(cantripSpellsChosen);
    }


    static firstSpellsCheckboxesListeners() {
        const inputs = document.getElementById("firstSelectionList").getElementsByTagName("input");
        const nodes = Array.from(inputs);
        nodes.forEach((node) => {
            node.addEventListener("change", (event) => {
                firstCheckBoxesHandler(event, nodes);
            })
        });
    }
    // firstSpellsCheckboxesListeners();


    static firstCheckBoxesHandler(event, nodes) {
        const node = event.target;
        if (node.checked == true) {
            firstLevelSpellsChosen.push(node.value);
            if (firstLevelSpellsChosen.length >= referenceVariable) {
                nodes.forEach((node) => {
                    if (firstLevelSpellsChosen.includes(node.value)) {
                        node.disabled = false;
                    } else {
                        node.disabled = true;
                    }
                });
            }
            console.log("ist jetzt haken");

        } else if (node.checked == false) {
            for (var i = 0; i < firstLevelSpellsChosen.length; i++) {
                if (firstLevelSpellsChosen[i] === node.value) {
                    firstLevelSpellsChosen.splice(i, 1);
                    break
                }
            }
            if (firstLevelSpellsChosen.length < referenceVariable) {
                nodes.forEach((node) => {
                    node.disabled = false;
                });
            }
            console.log("ist jetzt kein haken");
        }
        console.log(firstLevelSpellsChosen);
    }

    // static camelize(str) {
    //     return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    //         return index === 0 ? word.toLowerCase() : word.toUpperCase();
    //     }).replace(/\s+/g, '');
    // }


    static removeDuplicates(data) {
        return [...new Set(data)]
    }
}