/*###################################################################
######################### Load class choice #########################
######################################################################*/
document.getElementById("toClassChoice").addEventListener("click", function () {
  document.getElementById("displayContent").innerHTML = siteClassChoice;
  document.getElementById("characterOverview").style.visibility = "visible";
  update();
});

/*###################Class choice and features with chosen level######*/
document
  .getElementById("displayContent")
  .addEventListener("click", function (event) {
    //to pin the eventlistener to the parent node
    reset();
    /*     document.getElementById("proficienciesList").innerHTML = ""; */
    if (event.target && event.target.matches("input[type='radio']")) {
      //check if the target is the target and an input type radio
      characterClass = document.querySelector('input[name="class"]:checked')
        .value; //set character class with the selection from the radio buttons
      document.getElementById("showClassDetails").innerHTML = ""; //clean the element for other text to be displayed

      switch (characterClass) {
        case ARTIFICER:
          characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = weapons.get("Simpleweapons")[0].proficient = characterWeaponProficiencies[39][1] = tools.get("Thieves")[0].proficient = tools.get("Tinker")[0].proficient = true; //set class proficienciess to true
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              artificerFeaturesByLevel[i];
            document.getElementById("featuresList").innerHTML +=
              artificerFeaturesList[i];
          }
          break;
        case BARBARIAN:
          characterArmorProficiencies[1][1] = characterArmorProficiencies[2][1] = characterArmorProficiencies[4][1] = characterWeaponProficiencies[0][1] = characterWeaponProficiencies[1][1] = true;
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              barbarianFeaturesByLevel[i];
            document.getElementById("featuresList").innerHTML +=
              barbarianFeaturesList[i];
          }
          break;
        case BARD:
          characterArmorProficiencies[1][1] = characterWeaponProficiencies[0][1] = characterWeaponProficiencies[35][1] = characterWeaponProficiencies[23][1] = characterWeaponProficiencies[27][1] = characterWeaponProficiencies[29][1] = characterToolProficiencies[40][1] = true;
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              bardFeaturesByLevel[i];
            document.getElementById("featuresList").innerHTML +=
              bardFeaturesList[i];
          }
          break;
        case CLERIC:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              clericFeaturesByLevel[i];
          }
          break;
        case DRUID:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              druidFeaturesByLevel[i];
          }
          break;
        case FIGHTER:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              fighterFeaturesByLevel[i];
          }
          break;
        case MONK:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              monkFeaturesByLevel[i];
          }
          break;
        case MYSTIC:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              mysticFeaturesByLevel[i];
          }
          break;
        case PALADIN:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              paladinFeaturesByLevel[i];
          }
          break;
        case RANGER:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              rangerFeaturesByLevel[i];
          }
          break;
        case ROGUE:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              rogueFeaturesByLevel[i];
          }
          break;
        case SORCERER:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              sorcererFeaturesByLevel[i];
          }
          break;
        case WARLOCK:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              warlockFeaturesByLevel[i];
          }
          break;
        case WIZARD:
          for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML +=
              wizardFeaturesByLevel[i];
          }
          break;
      }

      const changeToGreen = document.querySelectorAll(
        "#summaryClass, #summarySubClass #featuresList, #weaponProficiencies, #armorProficiencies, #toolProficiencies, #languageProficiencies"
      );
      
      for (const i of changeToGreen) {
        i.classList.add("addedChoice");
      }

      document.getElementById("summaryClass").textContent = characterClass;
      update();
    } else {
      return;
    }
  });

/*## Select character level ##########################################*/
document.onchange = function (event) {
  if (event.target.matches("#characterLevel")) {
    characterLevel = document.getElementById("characterLevel").value;
  }
  document.getElementById("showClassDetails").innerHTML = ""; //clean the element for other text to be displayed
  switch (characterClass) {
    case ARTIFICER:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          artificerFeaturesByLevel[i];
      }
      break;
    case BARBARIAN:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          barbarianFeaturesByLevel[i];
      }
      break;
    case BARD:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          bardFeaturesByLevel[i];
      }
      break;
    case CLERIC:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          clericFeaturesByLevel[i];
      }
      break;
    case DRUID:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          druidFeaturesByLevel[i];
      }
      break;
    case FIGHTER:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          fighterFeaturesByLevel[i];
      }
      break;
    case MONK:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          monkFeaturesByLevel[i];
      }
      break;
    case MYSTIC:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          mysticFeaturesByLevel[i];
      }
      break;
    case PALADIN:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          paladinFeaturesByLevel[i];
      }
      break;
    case RANGER:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          rangerFeaturesByLevel[i];
      }
      break;
    case ROGUE:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          rogueFeaturesByLevel[i];
      }
      break;
    case SORCERER:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          sorcererFeaturesByLevel[i];
      }
      break;
    case WARLOCK:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          warlockFeaturesByLevel[i];
      }
      break;
    case WIZARD:
      for (let i = 0; i < characterLevel; i++) {
        document.getElementById("showClassDetails").innerHTML +=
          wizardFeaturesByLevel[i];
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
