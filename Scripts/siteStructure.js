/*###################################################################
######################### Load class choice #########################
######################################################################*/
document.getElementById("toClassChoice").addEventListener('click', function() {
    document.getElementById("displayContent").innerHTML = siteClassChoice;
});

/*###################Class choice and features with chosen level######*/
document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    characterSubClass = "";
    if (event.target && event.target.matches("input[type='radio']")) { //check if the target is the target and an input type radio
        characterClass = document.querySelector('input[name="class"]:checked').value; //set character class with the selection from the radio buttons
        document.getElementById("showClassDetails").innerHTML = ""; //clean the element for other text to be displayed
        if (characterClass === "Artificer") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += artificerFeaturesByLevel[i];
                document.getElementById("featuresList").innerHTML += artificerFeaturesList[i];
            }
        } else if (characterClass === "Barbarian") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += barbarianFeaturesByLevel[i];
            }
        } else if (characterClass === "Bard") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += bardFeaturesByLevel[i];
            }
        } else if (characterClass === "Cleric") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += clericFeaturesByLevel[i];
            }
        } else if (characterClass === "Druid") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += druidFeaturesByLevel[i];
            }
        } else if (characterClass === "Fighter") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += fighterFeaturesByLevel[i];
            }
        } else if (characterClass === "Monk") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += monkFeaturesByLevel[i];
            }
        } else if (characterClass === "Mystic") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += mysticFeaturesByLevel[i];
            }
        } else if (characterClass === "Paladin") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += paladinFeaturesByLevel[i];
            }
        } else if (characterClass === "Ranger") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += rangerFeaturesByLevel[i];
            }
        } else if (characterClass === "Rogue") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += rogueFeaturesByLevel[i];
            }
        } else if (characterClass === "Sorcerer") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += sorcererFeaturesByLevel[i];
            }
        } else if (characterClass === "Warlock") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += warlockFeaturesByLevel[i];
            }
        } else if (characterClass === "Wizard") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("showClassDetails").innerHTML += wizardFeaturesByLevel[i];
            }
        }
        document.getElementById("summaryClass").setAttribute("class", "addedChoice");
        document.getElementById("summarySubClass").setAttribute("class", "addedChoice");

        /*      var res = document.querySelectorAll("#div,#par,#head");
for (var i = 0; i < res.length; i++){
 res[i].style.backgroundColor = '#DCDCDC'
} */
        document.getElementById("summaryClass").textContent = characterClass;
    }
});


artificerFeaturesList = [
    [`<li>
        Firearm Proficiency
    </li><li>
        Magical Tinkering
    </li><li>
        Spellcasting
    </li>`],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10],
    [11],
    [12],
    [13],
    [14],
    [15],
    [16],
    [17],
    [18],
    [19],
    [20]
];


/*## Select character level ##########################################*/
document.onchange = function(event) {
    if (event.target.matches('#characterLevel')) {
        characterLevel = document.getElementById("characterLevel").value;
    }
    document.getElementById("showClassDetails").innerHTML = ""; //clean the element for other text to be displayed
    if (characterClass === "Artificer") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += artificerFeaturesByLevel[i];
        }
    } else if (characterClass === "Barbarian") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += barbarianFeaturesByLevel[i];
        }
    } else if (characterClass === "Bard") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += bardFeaturesByLevel[i];
        }
    } else if (characterClass === "Cleric") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += clericFeaturesByLevel[i];
        }
    } else if (characterClass === "Druid") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += druidFeaturesByLevel[i];
        }
    } else if (characterClass === "Fighter") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += fighterFeaturesByLevel[i];
        }
    } else if (characterClass === "Monk") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += monkFeaturesByLevel[i];
        }
    } else if (characterClass === "Mystic") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += mysticFeaturesByLevel[i];
        }
    } else if (characterClass === "Paladin") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += paladinFeaturesByLevel[i];
        }
    } else if (characterClass === "Ranger") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += rangerFeaturesByLevel[i];
        }
    } else if (characterClass === "Rogue") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += rogueFeaturesByLevel[i];
        }
    } else if (characterClass === "Sorcerer") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += sorcererFeaturesByLevel[i];
        }
    } else if (characterClass === "Warlock") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += warlockFeaturesByLevel[i];
        }
    } else if (characterClass === "Wizard") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += wizardFeaturesByLevel[i];
        }
    }
    document.getElementById("summaryLevel").setAttribute("class", "addedChoice");
    document.getElementById("summaryLevel").textContent = characterLevel;
};































/*###################################################################
######################### Site structure ##############################
######################################################################*/
const siteClassChoice = `<h1 class="text-center">Choose your class</h1>
<div class="row">
    <div class="col-10 offset-1" id="classesRadio">

        <input id="artificer" value="Artificer" type="radio" name="class" />
        <label for="artificer">Artificer</label>

        <input id="barbarian" value="Barbarian" type="radio" name="class" />
        <label for="barbarian">Barbarian</label>

        <input id="bard" value="Bard" type="radio" name="class" />
        <label for="bard">Bard</label>

        <input id="cleric" value="Cleric" type="radio" name="class" />
        <label for="cleric">Cleric</label>

        <input id="druid" value="Druid" type="radio" name="class" />
        <label for="druid">Druid</label>

        <input id="fighter" value="Fighter" type="radio" name="class" />
        <label for="fighter">Fighter</label>

        <input id="monk" value="Monk" type="radio" name="class" />
        <label for="monk">Monk</label>

        <!-- <input id="mystic" value="Mystic" type="radio" name="class" />
        <label for="mystic">Mystic</label> -->

        <input id="paladin" value="Paladin" type="radio" name="class" />
        <label for="paladin">Paladin</label>

        <input id="ranger" value="Ranger" type="radio" name="class" />
        <label for="ranger">Ranger</label>

        <input id="rogue" value="Rogue" type="radio" name="class" />
        <label for="rogue">Rogue</label>

        <input id="sorcerer" value="Sorcerer" type="radio" name="class" />
        <label for="sorcerer">Sorcerer</label>

        <input id="warlock" value="Warlock" type="radio" name="class" />
        <label for="warlock">Warlock</label>

        <input id="wizard" value="Wizard" type="radio" name="class" />
        <label for="wizard">Wizard</label>
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
    <button class="btn btn-info" id="goTotFeatures">Features</button>
</div>`;