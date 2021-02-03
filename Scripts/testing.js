function reset() {
  characterArmorProficiencies.forEach((prof) => {
    prof[1] = false;
  });
  characterWeaponProficiencies.forEach((element) => {
    element[1] = false;
  });
  weapons.forEach((weapon)=>{
weapon[0].proficient=false;
  });

/*   characterToolProficiencies.forEach((element) => {
    element[1] = false;
  }); */
  characterLanguageProficiencies.forEach((element) => {
    element[1] = false;
  });
  tools.forEach((tool) => {
    tool[0].proficient = false;
  });
  characterSubClass = "";
  document.getElementById("summarySubClass").textContent = characterSubClass;
  document.getElementById("featuresList").innerHTML = "";
  console.log('RESET');
}



//--------------------------------------function to calculate the characters skill modifiers---------------------------------------------------------------------
function update() {
  let totals = document.getElementsByClassName("statTotal");
  let mods = document.getElementsByClassName("statMod");
  let initiativeMod = abilityScores[1].mod.bind(abilityScores[1])();
  let passivePerception = 10 + abilityScores[4].mod.bind(abilityScores[4])();
  let armorProficiencies = [];
  let weaponProficiencies = [];
  let toolProficiencies = [];
  let languageProficiencies = [];
  console.log("update happend");

  //update skills loop
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].proficiency == 0) {
      skills[i].mod = skills[i].calcStat() + proficiencyBonus * 0;
    } else if (skills[i].proficiency == 1) {
      skills[i].mod = skills[i].calcStat() + proficiencyBonus * 0.5;
    } else if (skills[i].proficiency == 2) {
      skills[i].mod = skills[i].calcStat() + proficiencyBonus * 1;
    } else if (skills[i].proficiency == 3) {
      skills[i].mod = skills[i].calcStat() + proficiencyBonus * 2;
    } else {
      alert(
        `something went terribly wrong with the calculation at ${skills[i].name} !!!!`
      );
    }
    document.getElementById("skillsID" + i).textContent = getNumber(
      skills[i].mod
    );
  }
  //update stats loop
  for (let i = 0; i < abilityScores.length; i++) {
    totals[i].textContent = abilityScores[i].value;
    mods[i].textContent = getNumber(abilityScores[i].mod());
  }

  //update armor prof loop
  for (let i = 0; i < characterArmorProficiencies.length; i++) {
    if (characterArmorProficiencies[i][1] == true) {
      armorProficiencies.push(characterArmorProficiencies[i][0]);
    }
  }
  //update weapon prof loop
  for (let i = 0; i < characterWeaponProficiencies.length; i++) {
    if (characterWeaponProficiencies[i][1] == true) {
      weaponProficiencies.push(characterWeaponProficiencies[i][0]);
    }
  }

  //update tools prof loop
  tools.forEach((tool) => {
/*     if (tool[0].exception==true){ // Possible Bard instruments workaround
      if(characterClass==BARD){
        document.getElementById("toolProficiencies").textContent = "Three musical instruments of your choice";
      }
    } */
    if (tool[0].proficient == true) {
      toolProficiencies.push(tool[0].name);
    }
  });

  /* tools.forEach((tool) => { //--------------------alternative idee für wenn das nicht mit den Maps so funktioniert wie gedacht.
    if (tool[0].proficient == true) {
      toolProficiencies.push([tool[0].name, tool[0].gold, tool[0].proficient]);
    }

  });
  let checkArray = [];
  for (let index = 0; index < toolProficiencies.length; index++) {
    if(toolProficiencies[i].proficient==true){
      checkArray.push
    } */
    


  console.table(toolProficiencies);



  //update language prof loop
  for (let i = 0; i < characterLanguageProficiencies.length; i++) {
    if (characterLanguageProficiencies[i][1] == true) {
      languageProficiencies.push(characterLanguageProficiencies[i][0]);
    }
  }

  /*   const textChanges = document.querySelectorAll(
      "#armorProficiencies, #weaponProficiencies, #toolProficiencies, #languageProficiencies. #summaryPassivePerception"
    );
    textChanges.forEach((element) => {
      element.textContent = element.join(", ");
    }); */
  document.getElementById(
    "armorProficiencies"
  ).textContent = armorProficiencies.join(", ");
  document.getElementById(
    "weaponProficiencies"
  ).textContent = weaponProficiencies.join(", ");
  document.getElementById(
    "toolProficiencies"
  ).textContent = toolProficiencies.join(", ");
  document.getElementById(
    "languageProficiencies"
  ).textContent = languageProficiencies.join(", ");
  document.getElementById(
    "summaryPassivePerception"
  ).textContent = passivePerception;
  document.getElementById("summaryInitiative").textContent = getNumber(
    initiativeMod
  );
}

// document.getElementById("characterOverview").addEventListener("click", function () {
//   abilityScores[0].value = 18;
//   abilityScores[1].value = 18;
//   abilityScores[2].value = 18;
//   abilityScores[3].value = 18;
//   abilityScores[4].value = 18;
//   abilityScores[5].value = 18;
//   update();
// });
