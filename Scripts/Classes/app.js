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
        <button onclick="App.goToSkillsnTools()" class="btn btn-info" id="goToSkillsnTools" disabled>Next</button>
    </div>`;
    static siteSkillsNTools = `
 <div class="container" id="container">
 <h1 class="text-center">skills, features, languages, and spells</h1>
 <p class="text-center">Here, you will be able to choose different things depending on the class choice that you
     made in the previous step.</p>

 <div class="row d-flex justify-content-around" id="selectionsDiv">
     <div class="col-3" id="skillsDiv">
         <h3 class="pl-5">skills</h3>
         <p>You may choose <u><span id="skillsCount"></span></u> class skills</p>
         <div id="skillsSelectionList">
             <!-- to be filled -->
         </div>
     </div>

     <div class="col-3" id="ToolsDiv">
         <h3 class="pl-5">tools</h3>
         <p>You may choose <u><span id="toolsCount"></span></u> class tool(s)</p>
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
         <p>You may choose <u><span id="cantripCount"></span></u> cantrips and <u><span
                     id="firstCount"></span></u> spells of 1st level</p>
         <div id="spellSelectionList">
             <div id="cantripSpells">
                 <h5>cantrips</h5>
                 <div id="cantripSelectionList">
                     <!-- to be filled -->
                 </div>
             </div>

             <div id="firstLevelSpells">
                 <h5>1st level</h5>
                 <div id="firstSelectionList">
                     <!-- to be filled -->
                 </div>
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
        if (Character.possibleSkillChoices.length <= 0) {
            skillsDivNode.hidden = true;
        }
        if (Character.characterPossibleToolChoices.length <= 0) {
            toolsDivNode.hidden = true;
        }
        if (Character.possibleLanguageProficiencies.length <= 0) {
            languagesDivNode.hidden = true;
        }
        if (Character.possibleCantripSpells.length <= 0 && Character.firstLevelSpells.length <= 0) {
            spellsDivNode.hidden = true;
        }
        Character.resetSkillNodes();
        App.emptyDivs("cantripsList", "firstLevelList");

        App.populateCheckboxes("skillsSelectionList", Character.possibleSkillChoices, Character.chosenCharacterSkills);
        App.setupCheckboxesListeners("skillsSelectionList", Character.chosenCharacterSkills, Character.numberOfSkillsToChoose);
        document.getElementById("skillsCount").innerText =Character.numberOfSkillsToChoose;
        
        App.populateCheckboxes("toolsSelectionList", Character.characterPossibleToolChoices, Character.characterToolsProficiencies);
        App.setupCheckboxesListeners("toolsSelectionList", Character.characterToolsProficiencies, Character.characterMaxToolProficiencies);
        if (Character.characterClass == ARTIFICER) {
            document.getElementById("toolsCount").innerText =1;            
        } else {
            document.getElementById("toolsCount").innerText =Character.characterMaxToolProficiencies; 
        }

        App.populateCheckboxes("languageSelectionList", Character.possibleLanguageProficiencies, Character.languageProficiencies);
        App.setupCheckboxesListeners("languageSelectionList", Character.languageProficiencies, Character.maxLanguageProficiencies);

        App.populateCheckboxes("cantripSelectionList", Character.possibleCantripSpells, Character.cantripSpellsChosen);
        App.setupCheckboxesListeners("cantripSelectionList", Character.cantripSpellsChosen, Character.cantripsKnown);

        App.populateCheckboxes("firstSelectionList", Character.firstLevelSpells, Character.firstLevelSpellsChosen);
        App.setupCheckboxesListeners("firstSelectionList", Character.firstLevelSpellsChosen, Character.firstLevelSpellsKnown);

        if (Character.characterClass == ARTIFICER) {
            const inputs = document.getElementById("firstSelectionList").getElementsByTagName("input");
            const nodes = Array.from(inputs);
            nodes.forEach((node) => {
                node.click();
            });
            document.getElementById("firstLevelSpells").remove();
        }
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
        document.getElementById("goToSkillsnTools").disabled=false;
    }



    static populateCheckboxes(id, referenceArray, endArray) {
        let sanitizedName;
        referenceArray.forEach((element) => {
            if (endArray.includes(element)) {
                return;
            }
            switch (referenceArray) {
                case Character.characterPossibleToolChoices:
                    sanitizedName = element.toLowerCase().replace(/'s| | kit|(land or water)|set|-|Ante|tools|utensils|supplies/g, "");
                    break;
                case Character.possibleSkillChoices:
                    sanitizedName = element.replace(/ |handling|of|hand/g, "");
                    break;
                case Character.possibleLanguageProficiencies:
                    sanitizedName = element.replace(/ |'|Cant/g, "");
                    break;
                case Character.possibleCantripSpells:
                    sanitizedName = element.replace(/'|\/|-| /g, "");
                    break;
                case Character.firstLevelSpells:
                    sanitizedName = element.replace(/'|\/|-| /g, "");
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
                case Character.chosenCharacterSkills:
                    Character.setSkill(node.value, 2);
                    break;
                case Character.characterToolsProficiencies:
                    Character.setCharacterToolProficiencies(1, node.value);
                    Character.updateCharacterToolProficiencies();
                    break;
                case Character.languageProficiencies:
                    Character.setCharacterLanguageProficiencies(1, node.value);
                    Character.updateLanguageProficiencies();
                    break;
                case Character.cantripSpellsChosen:
                    Character.setSpellsToKnown(1, node.value)
                    Character.updateRenderSpellsChosen();
                    break;
                case Character.firstLevelSpellsChosen:
                    Character.setSpellsToKnown(1, node.value)
                    Character.updateRenderSpellsChosen();
                    break;
                default:
                    console.log("Somethign went wrong with the checkboxes handler switch!!")
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
                case Character.chosenCharacterSkills:
                    Character.setSkill(node.value, 0);
                    break;
                case Character.characterToolsProficiencies:
                    Character.setCharacterToolProficiencies(0, node.value);
                    Character.updateCharacterToolProficiencies();
                    break;
                case Character.languageProficiencies:
                    Character.setCharacterLanguageProficiencies(0, node.value);
                    Character.updateLanguageProficiencies();
                    break;
                case Character.cantripSpellsChosen:
                    Character.setSpellsToKnown(0, node.value)
                    Character.updateRenderSpellsChosen();
                    break;
                case Character.firstLevelSpellsChosen:
                    Character.setSpellsToKnown(0, node.value)
                    Character.updateRenderSpellsChosen();
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
            if (referenceArray.length <= referenceVariable) {
                nodes.forEach((node) => {
                    node.disabled = false;
                });
            }
            console.log(referenceArray);
        }
        Character.updateSkills();
    }



    // static camelize(str) {
    //     return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    //         return index === 0 ? word.toLowerCase() : word.toUpperCase();
    //     }).replace(/\s+/g, '');
    // }

    static emptyDivs(...args) {
        const list = document.querySelectorAll("#" + args.join(", #"));
        for (const i of list) {
            i.innerHTML = "";
        }
    }

    static removeDuplicates(data) {
        return [...new Set(data)]
    }
}