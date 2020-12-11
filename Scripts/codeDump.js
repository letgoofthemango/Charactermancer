function getCharacterProficiencyBonus() { //function for proficiency bonus
    if (characterLevel <= 4) {
        proficiencyBonus = 2;
        return proficiencyBonus;
    } else if (characterLevel >= 5 && characterLevel <= 8) {
        proficiencyBonus = 3;
        return proficiencyBonus;
    } else if (characterLevel >= 9 && characterLevel <= 12) {
        proficiencyBonus = 4;
        return proficiencyBonus;
    } else if (characterLevel >= 13 && characterLevel <= 16) {
        proficiencyBonus = 5;
        return proficiencyBonus;
    } else {
        proficiencyBonus = 6;
        return proficiencyBonus;
    }
}

//everything levedependent goes here!!!!!!!
switch (characterLevel) {
    case 2:
        proficiencyBonus = 2;
        break;
    case 3:
        proficiencyBonus = 2;
        break;
    case 4:
        proficiencyBonus = 2;
        break;
    case 5:
        proficiencyBonus = 3;
        break;
    case 6:
        proficiencyBonus = 3;
        break;
    case 7:
        proficiencyBonus = 3;
        break;
    case 8:
        proficiencyBonus = 3;
        break;
    case 9:
        proficiencyBonus = 4;
        break;
    case 10:
        proficiencyBonus = 4;
        break;
    case 11:
        proficiencyBonus = 4;
        break;
    case 12:
        proficiencyBonus = 4;
        break;
    case 13:
        proficiencyBonus = 5;
        break;
    case 14:
        proficiencyBonus = 5;
        break;
    case 15:
        proficiencyBonus = 5;
        break;
    case 16:
        proficiencyBonus = 5;
        break;
    case 17:
        proficiencyBonus = 6;
        break;
    case 18:
        proficiencyBonus = 6;
        break;
    case 19:
        proficiencyBonus = 6;
        break;
    case 20:
        proficiencyBonus = 6;
        break;
    default:
        proficiencyBonus = 2;
        break;
};

document.getElementById("setClass").addEventListener("click", function() {
    characterClass = document.querySelector('input[name="class"]:checked').value; // für textfeld probieren!
    let linkToClass = `./${characterClass}.html`;
    setClassLink.setAttribute('href', linkToClass);
    sessionStorage.setItem("characterClass", characterClass);
});

//function for displaying features by level
function showClassDetails() {
    characterClass = document.querySelector('input[name="class"]:checked').value;
    document.getElementById("showClassDetails").innerHTML = "";
    if (characterClass === "artificer") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += artificerFeaturesByLevel[i];
        }
    } else if (characterClass === "barbarian") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += barbarianFeaturesByLevel[i];
        }
    } else if (characterClass === "cleric") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += clericFeaturesByLevel[i];
        }
    } else if (characterClass === "druid") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += druidFeaturesByLevel[i];
        }
    } else if (characterClass === "fighter") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += fighterFeaturesByLevel[i];
        }
    } else if (characterClass === "monk") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += monkFeaturesByLevel[i];
        }
    } else if (characterClass === "mystic") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += mysticFeaturesByLevel[i];
        }
    } else if (characterClass === "paladin") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += paladinFeaturesByLevel[i];
        }
    } else if (characterClass === "ranger") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += rangerFeaturesByLevel[i];
        }
    } else if (characterClass === "rogue") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += rogueFeaturesByLevel[i];
        }
    } else if (characterClass === "sorcerer") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += sorcererFeaturesByLevel[i];
        }
    } else if (characterClass === "warlock") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += warlockFeaturesByLevel[i];
        }
    } else if (characterClass === "wizard") {
        for (let i = 0; i < characterLevel; i++) {
            document.getElementById("showClassDetails").innerHTML += wizardFeaturesByLevel[i];
        }
    }
    console.log(characterClass);
}