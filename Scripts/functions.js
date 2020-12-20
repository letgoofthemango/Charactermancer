//--------------------------------------function to calculate the characters armor class---------------------------------------------------------------------
function getCharacterArmorClass() {
    if (characterClass === "Monk" && hasShield === false) {
        characterArmorClass = 10 + dexterityMod + WisdomMod;
        return characterArmorClass;
    } else if (characterClass === "Barbarian") {
        characterArmorClass = 10 + dexterityMod + ConstitutionMod;
        return characterArmorClass;
    } else if (hasShield && armorType == "Heavy") {
        characterArmorClass = armorClass + 2;
        return characterArmorClass;
    } else if (hasShield && armorType == "Medium") {
        /* function clamp(dexterityMod) {
            let acCalcDexMod = Math.min(Math.max(-4, dexterityMod), 2);
            return acCalcDexMod;
        }
        let acCalcDexMod = clamp(dexterityMod); function version of Medium armor Dex Mod Maxmimum*/
        characterArmorClass = armorClass + Math.min(Math.max(-4, dexterityMod), 2) + 2; //shorter more concise version
        return characterArmorClass;
    } else if (hasShield && armorType == "Light") {
        characterArmorClass = armorClass + dexterityMod + 2;
        return characterArmorClass;
    } else {
        characterArmorClass = 10 + dexterityMod;
        return characterArmorClass;
    }
}
/* getCharacterArmorClass(); */
/* console.log("Your character has an AC of " + characterArmorClass); */

/* //--------------------------------------function to calculate the characters skill modifiers---------------------------------------------------------------------

function updateSkills() {
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].proficiency == 0) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 0);
        } else if (skills[i].proficiency == 1) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 0.5);
        } else if (skills[i].proficiency == 2) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 1);
        } else if (skills[i].proficiency == 3) {
            skills[i].mod = skills[i].calcStat + (proficiencyBonus * 2);
        } else {
            console.log(`something went terribly wrong with the calculation at ${skills[i].name} !!!!`);
        }
    }
    console.log("updated");
}
updateSkills(); */

//--------------------------------------function to calculate the characters skill modifiers---------------------------------------------------------------------