//Armor Proficiencies
let characterArmorProficiencies = [
    ["None", false],
    ["Light Armor", false],
    ["Medium Armor", false],
    ["Heavy Armor", false],
    ["Shields", false]
];

const armors = [{
    name: "Padded Armor",
    armorType: "Light",
    cost: 5,
    armorClass: 11,
    strengthRequired: 0,
    stealthDisadvatage: true,
    weight: 8
}, {
    name: "Leather Armor",
    armorType: "Light",
    cost: 10,
    armorClass: 11,
    strengthRequired: 0,
    stealthDisadvatage: false,
    weight: 10
}, {
    name: "Studded leather Armor",
    armorType: "Light",
    cost: 45,
    armorClass: 12,
    strengthRequired: 0,
    stealthDisadvatage: false,
    weight: 13
}, {
    name: "Hide Armor",
    armorType: "Medium",
    cost: 10,
    armorClass: 12,
    maxDexMod: 2,
    strngthRequired: 0,
    stealhDisadatage: false,
    weight: 12
}, {
    name: "Chain shirt",
    armorType: "Medium",
    cost: 50,
    armorClass: 13,
    maxDexMod: 2,
    strngthRequired: 0,
    stealhDisadatage: false,
    weight: 20
}, {
    name: "Scale mail",
    armorType: "Medium",
    cost: 50,
    armorClass: 14,
    maxDexMod: 2,
    strngthRequired: 0,
    stealhDisadatage: true,
    weight: 45
}, {
    name: "Breastplate",
    armorType: "Medium",
    cost: 400,
    armorClass: 14,
    maxDexMod: 2,
    strngthRequired: 0,
    stealhDisadatage: false,
    weight: 20
}, {
    name: "Half plate",
    armorType: "Medium",
    cost: 750,
    armorClass: 15,
    maxDexMod: 2,
    strngthRequired: 0,
    stealhDisadatage: true,
    weight: 40
}, {
    name: "Ring mail",
    armorType: "Heavy",
    cost: 30,
    armorClass: 14,
    strengthRequired: 0,
    stealthDisadvatage: true,
    weight: 40
}, {
    name: "Chain mail",
    armorType: "Heavy",
    cost: 75,
    armorClass: 16,
    strengthRequired: 13,
    stealthDisadvatage: true,
    weight: 55
}, {
    name: "Splint",
    armorType: "Heavy",
    cost: 200,
    armorClass: 17,
    strengthRequired: 15,
    stealthDisadvatage: true,
    weight: 60
}, {
    name: "Plate",
    armorType: "Heavy",
    cost: 1500,
    armorClass: 18,
    strengthRequired: 15,
    stealthDisadvatage: true,
    weight: 65
}, {
    name: "Shield",
    armorType: "Shield",
    cost: 10,
    armorClass: 2,
    strengthRequired: 0,
    stealthDisadvatage: false,
    weight: 6
}];