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

function getNumber(mod) {
    if (mod >= 0) {
        return "+" + mod;
    } else {
        return mod.toString();
    }
}