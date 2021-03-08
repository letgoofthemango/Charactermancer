/*###################################################################
######################### Load class features for lvl 2 + #######################
#####################################################################*/

// testArray = [` `, ` `, `<h2 class="text-center">Level 3<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level3" aria-expanded="true" aria-controls="level3">[-]</button></span></h2>
// <div class="collapse show" id="level3">

//     <h5><u>Artificer Specialist</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature13" aria-expanded="true" aria-controls="feature13">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature13">
//         <p>At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.</p>
//         <div class="d-flex justify-content-around mb-5">
//             <button type="button" class="btn btn-secondary" id="alchemistSubclass">Alchemist</button>
//             <button type="button" class="btn btn-secondary" id="armorerSubclass">Armorer</button>
//             <button type="button" class="btn btn-secondary" id="alchemistSubclass">Artillerist</button>
//             <button type="button" class="btn btn-secondary" id="alchemistSubclass">Battle Smith</button>
//         </div>
//         <div id="artificierSubClass"></div>
//     </div>

//     <h5><u>The Right Tool for the Job</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature14" aria-expanded="true" aria-controls="feature14">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature14">
//         <p>At 3rd level, you learn how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires
//             1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>
//     </div>
// </div>`, `<br><h2 class="text-center">Level 4<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level4" aria-expanded="true" aria-controls="level4">[-]</button></span></h2>
// <div class="collapse show" id="level4">

//     <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature19" aria-expanded="true" aria-controls="feature19">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature19">
//         <p>Because you reached 4th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
//         <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
//         <div class="d-flex justify-content-center">
//             <p>Ability score improvments:&nbsp</p>
//             <select class="btn btn-info" name="asi1" id="asi1">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <select class="btn btn-info" name="asi2" id="asi2">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <p>&nbspor&nbsp</p>
//             <select class="btn btn-info" name="feat1" id="feat1">
//                 <option value="">Feat</option>
//                 <optgroup label="Tasha´s Cauldron of Everything">
//                     <option value="artificer-initiate">Artificer Initiate</option>
//                     <option value="chef">Chef</option>
//                     <option value="crusher">Crusher</option>
//                     <option value="eldritch-adept">Eldritch Adept</option>
//                     <option value="fey-touched">Fey Touched</option>
//                     <option value="fighting-initiate">Fighting Initiate</option>
//                     <option value="gunner">Gunner</option>
//                     <option value="metamagic-adept">Metamagic Adept</option>
//                     <option value="piercer">Piercer</option>
//                     <option value="poisoner">Poisoner</option>
//                     <option value="shadow-touched">Shadow Touched</option>
//                     <option value="skill-expert">Skill Expert</option>
//                     <option value="slasher">Slasher</option>
//                     <option value="telekinetic">Telekinetic</option>
//                     <option value="telepathic">Telepathic</option>
//                 </optgroup>
//                 <optgroup label="Player´s Handbook">
//                     <option value="actor">Actor</option>
//                     <option value="alert">Alert</option>
//                     <option value="athlete">Athlete</option>
//                     <option value="charger">Charger</option>
//                     <option value="crossbow-expert">Crossbow Expert</option>
//                     <option value="defensive-duelist">Defensive Duelist</option>
//                     <option value="dual-wielder">Dual Wielder</option>
//                     <option value="dungeon-delver">Dungeon Delver</option>
//                     <option value="durable">Durable</option>
//                     <option value="elemental-adept">Elemental Adept</option>
//                     <option value="grappler">Grappler</option>
//                     <option value="great-weapon-master">Great Weapon Master</option>
//                     <option value="healer">Healer</option>
//                     <option value="heavily-armored">Heavily Armored</option>
//                     <option value="heavy-armor-master">Heavy Armor Master</option>
//                     <option value="inspiring-leader">Inspiring Leader</option>
//                     <option value="keen-mind">Keen Mind</option>
//                     <option value="lightly-armored">Lightly Armored</option>
//                     <option value="linguist">Linguist</option>
//                     <option value="lucky">Lucky</option>
//                     <option value="mage-slayer">Mage Slayer</option>
//                     <option value="magic-initiate">Magic Initiate</option>
//                     <option value="martial-adept">Martial Adept</option>
//                     <option value="medium-armor-master">Medium Armor Master</option>
//                     <option value="mobile">Mobile</option>
//                     <option value="moderately-armored">Moderately Armored</option>
//                     <option value="mounted-combatant">Mounted Combatant</option>
//                     <option value="observant">Observant</option>
//                     <option value="polearm-master">Polearm Master</option>
//                     <option value="resilient">Resilient</option>
//                     <option value="ritual-caster">Ritual Caster</option>
//                     <option value="savage-attacker">Savage Attacker</option>
//                     <option value="sentinel">Sentinel</option>
//                     <option value="sharpshooter">Sharpshooter</option>
//                     <option value="shield-master">Shield Master</option>
//                     <option value="skilled">Skilled</option>
//                     <option value="skulker">Skulker</option>
//                     <option value="spell-sniper">Spell Sniper</option>
//                     <option value="tavern-brawler">Tavern Brawler</option>
//                     <option value="tough">Tough</option>
//                     <option value="war-caster">War Caster</option>
//                     <option value="weapon-master">Weapon Master</option>
//                 </optgroup>
//                 <optgroup label="Xanathar´s Guide to Everything">
//                     <option value="bountiful-luck">Bountiful Luck</option>
//                     <option value="dragon-fear">Dragon Fear</option>
//                     <option value="dragon-hide">Dragon Hide</option>
//                     <option value="drow-high-magic">Drow High Magic</option>
//                     <option value="dwarf-fortitude">Dwarf Fortitude</option>
//                     <option value="elven-accuracy">Elven Accuracy</option>
//                     <option value="fade-away">Fade away</option>
//                     <option value="fey-teleportation">Fey Teleportation</option>
//                     <option value="flames-of-phlegethos">Flames of Phlegethos</option>
//                     <option value="infernal-constitution">Infernal Constitution</option>
//                     <option value="orcish-fury">Orcish Fury</option>
//                     <option value="prodigy">Prodigy</option>
//                     <option value="second-chance">Second Chance</option>
//                     <option value="squat-nimbleness">Squat Nimbleness</option>
//                     <option value="wood-elf-magic">Wood Elf Magic</option>
//                 </optgroup>
//                 <optgroup label="Extra">
//                     <option value="blood-magic">Blood Magic</option>
//                     <option value="competent">Competent</option>
//                     <option value="expert">Expert</option>
//                 </optgroup>
//             </select>
//         </div>
//     </div>
// </div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 8<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level8" aria-expanded="true" aria-controls="level8">[-]</button></span></h2>
// <div class="collapse show" id="level8">

//     <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature20" aria-expanded="true" aria-controls="feature20">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature20">
//         <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
//         <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
//         <div class="d-flex justify-content-center">
//             <p>Ability score improvments:&nbsp</p>
//             <select class="btn btn-info" name="asi3" id="asi3">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <select class="btn btn-info" name="asi4" id="asi4">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <p>&nbspor&nbsp</p>
//             <select class="btn btn-info" name="feat2" id="feat2">
//                 <option value="">Feat</option>
//                 <optgroup label="Tasha´s Cauldron of Everything">
//                     <option value="artificer-initiate">Artificer Initiate</option>
//                     <option value="chef">Chef</option>
//                     <option value="crusher">Crusher</option>
//                     <option value="eldritch-adept">Eldritch Adept</option>
//                     <option value="fey-touched">Fey Touched</option>
//                     <option value="fighting-initiate">Fighting Initiate</option>
//                     <option value="gunner">Gunner</option>
//                     <option value="metamagic-adept">Metamagic Adept</option>
//                     <option value="piercer">Piercer</option>
//                     <option value="poisoner">Poisoner</option>
//                     <option value="shadow-touched">Shadow Touched</option>
//                     <option value="skill-expert">Skill Expert</option>
//                     <option value="slasher">Slasher</option>
//                     <option value="telekinetic">Telekinetic</option>
//                     <option value="telepathic">Telepathic</option>
//                 </optgroup>
//                 <optgroup label="Player´s Handbook">
//                     <option value="actor">Actor</option>
//                     <option value="alert">Alert</option>
//                     <option value="athlete">Athlete</option>
//                     <option value="charger">Charger</option>
//                     <option value="crossbow-expert">Crossbow Expert</option>
//                     <option value="defensive-duelist">Defensive Duelist</option>
//                     <option value="dual-wielder">Dual Wielder</option>
//                     <option value="dungeon-delver">Dungeon Delver</option>
//                     <option value="durable">Durable</option>
//                     <option value="elemental-adept">Elemental Adept</option>
//                     <option value="grappler">Grappler</option>
//                     <option value="great-weapon-master">Great Weapon Master</option>
//                     <option value="healer">Healer</option>
//                     <option value="heavily-armored">Heavily Armored</option>
//                     <option value="heavy-armor-master">Heavy Armor Master</option>
//                     <option value="inspiring-leader">Inspiring Leader</option>
//                     <option value="keen-mind">Keen Mind</option>
//                     <option value="lightly-armored">Lightly Armored</option>
//                     <option value="linguist">Linguist</option>
//                     <option value="lucky">Lucky</option>
//                     <option value="mage-slayer">Mage Slayer</option>
//                     <option value="magic-initiate">Magic Initiate</option>
//                     <option value="martial-adept">Martial Adept</option>
//                     <option value="medium-armor-master">Medium Armor Master</option>
//                     <option value="mobile">Mobile</option>
//                     <option value="moderately-armored">Moderately Armored</option>
//                     <option value="mounted-combatant">Mounted Combatant</option>
//                     <option value="observant">Observant</option>
//                     <option value="polearm-master">Polearm Master</option>
//                     <option value="resilient">Resilient</option>
//                     <option value="ritual-caster">Ritual Caster</option>
//                     <option value="savage-attacker">Savage Attacker</option>
//                     <option value="sentinel">Sentinel</option>
//                     <option value="sharpshooter">Sharpshooter</option>
//                     <option value="shield-master">Shield Master</option>
//                     <option value="skilled">Skilled</option>
//                     <option value="skulker">Skulker</option>
//                     <option value="spell-sniper">Spell Sniper</option>
//                     <option value="tavern-brawler">Tavern Brawler</option>
//                     <option value="tough">Tough</option>
//                     <option value="war-caster">War Caster</option>
//                     <option value="weapon-master">Weapon Master</option>
//                 </optgroup>
//                 <optgroup label="Xanathar´s Guide to Everything">
//                     <option value="bountiful-luck">Bountiful Luck</option>
//                     <option value="dragon-fear">Dragon Fear</option>
//                     <option value="dragon-hide">Dragon Hide</option>
//                     <option value="drow-high-magic">Drow High Magic</option>
//                     <option value="dwarf-fortitude">Dwarf Fortitude</option>
//                     <option value="elven-accuracy">Elven Accuracy</option>
//                     <option value="fade-away">Fade away</option>
//                     <option value="fey-teleportation">Fey Teleportation</option>
//                     <option value="flames-of-phlegethos">Flames of Phlegethos</option>
//                     <option value="infernal-constitution">Infernal Constitution</option>
//                     <option value="orcish-fury">Orcish Fury</option>
//                     <option value="prodigy">Prodigy</option>
//                     <option value="second-chance">Second Chance</option>
//                     <option value="squat-nimbleness">Squat Nimbleness</option>
//                     <option value="wood-elf-magic">Wood Elf Magic</option>
//                 </optgroup>
//                 <optgroup label="Extra">
//                     <option value="blood-magic">Blood Magic</option>
//                     <option value="competent">Competent</option>
//                     <option value="expert">Expert</option>
//                 </optgroup>
//             </select>
//         </div>
//     </div>
// </div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 12<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level12" aria-expanded="true" aria-controls="level12">[-]</button></span></h2>
// <div class="collapse show" id="level12">

//     <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature21" aria-expanded="true" aria-controls="feature21">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature21">
//         <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
//         <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
//         <div class="d-flex justify-content-center">
//             <p>Ability score improvments:&nbsp</p>
//             <select class="btn btn-info" name="asi5" id="asi5">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <select class="btn btn-info" name="asi6" id="asi6">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <p>&nbspor&nbsp</p>
//             <select class="btn btn-info" name="feat3" id="feat3">
//                 <option value="">Feat</option>
//                 <optgroup label="Tasha´s Cauldron of Everything">
//                     <option value="artificer-initiate">Artificer Initiate</option>
//                     <option value="chef">Chef</option>
//                     <option value="crusher">Crusher</option>
//                     <option value="eldritch-adept">Eldritch Adept</option>
//                     <option value="fey-touched">Fey Touched</option>
//                     <option value="fighting-initiate">Fighting Initiate</option>
//                     <option value="gunner">Gunner</option>
//                     <option value="metamagic-adept">Metamagic Adept</option>
//                     <option value="piercer">Piercer</option>
//                     <option value="poisoner">Poisoner</option>
//                     <option value="shadow-touched">Shadow Touched</option>
//                     <option value="skill-expert">Skill Expert</option>
//                     <option value="slasher">Slasher</option>
//                     <option value="telekinetic">Telekinetic</option>
//                     <option value="telepathic">Telepathic</option>
//                 </optgroup>
//                 <optgroup label="Player´s Handbook">
//                     <option value="actor">Actor</option>
//                     <option value="alert">Alert</option>
//                     <option value="athlete">Athlete</option>
//                     <option value="charger">Charger</option>
//                     <option value="crossbow-expert">Crossbow Expert</option>
//                     <option value="defensive-duelist">Defensive Duelist</option>
//                     <option value="dual-wielder">Dual Wielder</option>
//                     <option value="dungeon-delver">Dungeon Delver</option>
//                     <option value="durable">Durable</option>
//                     <option value="elemental-adept">Elemental Adept</option>
//                     <option value="grappler">Grappler</option>
//                     <option value="great-weapon-master">Great Weapon Master</option>
//                     <option value="healer">Healer</option>
//                     <option value="heavily-armored">Heavily Armored</option>
//                     <option value="heavy-armor-master">Heavy Armor Master</option>
//                     <option value="inspiring-leader">Inspiring Leader</option>
//                     <option value="keen-mind">Keen Mind</option>
//                     <option value="lightly-armored">Lightly Armored</option>
//                     <option value="linguist">Linguist</option>
//                     <option value="lucky">Lucky</option>
//                     <option value="mage-slayer">Mage Slayer</option>
//                     <option value="magic-initiate">Magic Initiate</option>
//                     <option value="martial-adept">Martial Adept</option>
//                     <option value="medium-armor-master">Medium Armor Master</option>
//                     <option value="mobile">Mobile</option>
//                     <option value="moderately-armored">Moderately Armored</option>
//                     <option value="mounted-combatant">Mounted Combatant</option>
//                     <option value="observant">Observant</option>
//                     <option value="polearm-master">Polearm Master</option>
//                     <option value="resilient">Resilient</option>
//                     <option value="ritual-caster">Ritual Caster</option>
//                     <option value="savage-attacker">Savage Attacker</option>
//                     <option value="sentinel">Sentinel</option>
//                     <option value="sharpshooter">Sharpshooter</option>
//                     <option value="shield-master">Shield Master</option>
//                     <option value="skilled">Skilled</option>
//                     <option value="skulker">Skulker</option>
//                     <option value="spell-sniper">Spell Sniper</option>
//                     <option value="tavern-brawler">Tavern Brawler</option>
//                     <option value="tough">Tough</option>
//                     <option value="war-caster">War Caster</option>
//                     <option value="weapon-master">Weapon Master</option>
//                 </optgroup>
//                 <optgroup label="Xanathar´s Guide to Everything">
//                     <option value="bountiful-luck">Bountiful Luck</option>
//                     <option value="dragon-fear">Dragon Fear</option>
//                     <option value="dragon-hide">Dragon Hide</option>
//                     <option value="drow-high-magic">Drow High Magic</option>
//                     <option value="dwarf-fortitude">Dwarf Fortitude</option>
//                     <option value="elven-accuracy">Elven Accuracy</option>
//                     <option value="fade-away">Fade away</option>
//                     <option value="fey-teleportation">Fey Teleportation</option>
//                     <option value="flames-of-phlegethos">Flames of Phlegethos</option>
//                     <option value="infernal-constitution">Infernal Constitution</option>
//                     <option value="orcish-fury">Orcish Fury</option>
//                     <option value="prodigy">Prodigy</option>
//                     <option value="second-chance">Second Chance</option>
//                     <option value="squat-nimbleness">Squat Nimbleness</option>
//                     <option value="wood-elf-magic">Wood Elf Magic</option>
//                 </optgroup>
//                 <optgroup label="Extra">
//                     <option value="blood-magic">Blood Magic</option>
//                     <option value="competent">Competent</option>
//                     <option value="expert">Expert</option>
//                 </optgroup>
//             </select>
//         </div>
//     </div>
// </div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 16<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level16" aria-expanded="true" aria-controls="level16">[-]</button></span></h2>
// <div class="collapse show" id="level16">

//     <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature22" aria-expanded="true" aria-controls="feature22">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature21">
//         <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
//         <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
//         <div class="d-flex justify-content-center">
//             <p>Ability score improvments:&nbsp</p>
//             <select class="btn btn-info" name="asi7" id="asi7">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <select class="btn btn-info" name="asi8" id="asi8">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <p>&nbspor&nbsp</p>
//             <select class="btn btn-info" name="feat4" id="feat4">
//                 <option value="">Feat</option>
//                 <optgroup label="Tasha´s Cauldron of Everything">
//                     <option value="artificer-initiate">Artificer Initiate</option>
//                     <option value="chef">Chef</option>
//                     <option value="crusher">Crusher</option>
//                     <option value="eldritch-adept">Eldritch Adept</option>
//                     <option value="fey-touched">Fey Touched</option>
//                     <option value="fighting-initiate">Fighting Initiate</option>
//                     <option value="gunner">Gunner</option>
//                     <option value="metamagic-adept">Metamagic Adept</option>
//                     <option value="piercer">Piercer</option>
//                     <option value="poisoner">Poisoner</option>
//                     <option value="shadow-touched">Shadow Touched</option>
//                     <option value="skill-expert">Skill Expert</option>
//                     <option value="slasher">Slasher</option>
//                     <option value="telekinetic">Telekinetic</option>
//                     <option value="telepathic">Telepathic</option>
//                 </optgroup>
//                 <optgroup label="Player´s Handbook">
//                     <option value="actor">Actor</option>
//                     <option value="alert">Alert</option>
//                     <option value="athlete">Athlete</option>
//                     <option value="charger">Charger</option>
//                     <option value="crossbow-expert">Crossbow Expert</option>
//                     <option value="defensive-duelist">Defensive Duelist</option>
//                     <option value="dual-wielder">Dual Wielder</option>
//                     <option value="dungeon-delver">Dungeon Delver</option>
//                     <option value="durable">Durable</option>
//                     <option value="elemental-adept">Elemental Adept</option>
//                     <option value="grappler">Grappler</option>
//                     <option value="great-weapon-master">Great Weapon Master</option>
//                     <option value="healer">Healer</option>
//                     <option value="heavily-armored">Heavily Armored</option>
//                     <option value="heavy-armor-master">Heavy Armor Master</option>
//                     <option value="inspiring-leader">Inspiring Leader</option>
//                     <option value="keen-mind">Keen Mind</option>
//                     <option value="lightly-armored">Lightly Armored</option>
//                     <option value="linguist">Linguist</option>
//                     <option value="lucky">Lucky</option>
//                     <option value="mage-slayer">Mage Slayer</option>
//                     <option value="magic-initiate">Magic Initiate</option>
//                     <option value="martial-adept">Martial Adept</option>
//                     <option value="medium-armor-master">Medium Armor Master</option>
//                     <option value="mobile">Mobile</option>
//                     <option value="moderately-armored">Moderately Armored</option>
//                     <option value="mounted-combatant">Mounted Combatant</option>
//                     <option value="observant">Observant</option>
//                     <option value="polearm-master">Polearm Master</option>
//                     <option value="resilient">Resilient</option>
//                     <option value="ritual-caster">Ritual Caster</option>
//                     <option value="savage-attacker">Savage Attacker</option>
//                     <option value="sentinel">Sentinel</option>
//                     <option value="sharpshooter">Sharpshooter</option>
//                     <option value="shield-master">Shield Master</option>
//                     <option value="skilled">Skilled</option>
//                     <option value="skulker">Skulker</option>
//                     <option value="spell-sniper">Spell Sniper</option>
//                     <option value="tavern-brawler">Tavern Brawler</option>
//                     <option value="tough">Tough</option>
//                     <option value="war-caster">War Caster</option>
//                     <option value="weapon-master">Weapon Master</option>
//                 </optgroup>
//                 <optgroup label="Xanathar´s Guide to Everything">
//                     <option value="bountiful-luck">Bountiful Luck</option>
//                     <option value="dragon-fear">Dragon Fear</option>
//                     <option value="dragon-hide">Dragon Hide</option>
//                     <option value="drow-high-magic">Drow High Magic</option>
//                     <option value="dwarf-fortitude">Dwarf Fortitude</option>
//                     <option value="elven-accuracy">Elven Accuracy</option>
//                     <option value="fade-away">Fade away</option>
//                     <option value="fey-teleportation">Fey Teleportation</option>
//                     <option value="flames-of-phlegethos">Flames of Phlegethos</option>
//                     <option value="infernal-constitution">Infernal Constitution</option>
//                     <option value="orcish-fury">Orcish Fury</option>
//                     <option value="prodigy">Prodigy</option>
//                     <option value="second-chance">Second Chance</option>
//                     <option value="squat-nimbleness">Squat Nimbleness</option>
//                     <option value="wood-elf-magic">Wood Elf Magic</option>
//                 </optgroup>
//                 <optgroup label="Extra">
//                     <option value="blood-magic">Blood Magic</option>
//                     <option value="competent">Competent</option>
//                     <option value="expert">Expert</option>
//                 </optgroup>
//             </select>
//         </div>
//     </div>
// </div>`, ` `, ` `, `<br><h2 class="text-center">Level 19<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level19" aria-expanded="true" aria-controls="level19">[-]</button></span></h2>
// <div class="collapse show" id="level19">

//     <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature23" aria-expanded="true" aria-controls="feature23">[-]</button></span></h5>
//     <hr>

//     <div class="collapse show" id="feature23">
//         <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
//         <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
//         <div class="d-flex justify-content-center">
//             <p>Ability score improvments:&nbsp</p>
//             <select class="btn btn-info" name="asi9" id="asi9">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <select class="btn btn-info" name="asi10" id="asi10">
//                 <option value="1">Strength</option>
//                 <option value="2">Dexterity</option>
//                 <option value="3">Constitution</option>
//                 <option value="4">Intelligence</option>
//                 <option value="5">Wisdom</option>
//                 <option value="6">Charisma</option>
//             </select>
//             <p>&nbspor&nbsp</p>
//             <select class="btn btn-info" name="feat5" id="feat5">
//                 <option value="">Feat</option>
//                 <optgroup label="Tasha´s Cauldron of Everything">
//                     <option value="artificer-initiate">Artificer Initiate</option>
//                     <option value="chef">Chef</option>
//                     <option value="crusher">Crusher</option>
//                     <option value="eldritch-adept">Eldritch Adept</option>
//                     <option value="fey-touched">Fey Touched</option>
//                     <option value="fighting-initiate">Fighting Initiate</option>
//                     <option value="gunner">Gunner</option>
//                     <option value="metamagic-adept">Metamagic Adept</option>
//                     <option value="piercer">Piercer</option>
//                     <option value="poisoner">Poisoner</option>
//                     <option value="shadow-touched">Shadow Touched</option>
//                     <option value="skill-expert">Skill Expert</option>
//                     <option value="slasher">Slasher</option>
//                     <option value="telekinetic">Telekinetic</option>
//                     <option value="telepathic">Telepathic</option>
//                 </optgroup>
//                 <optgroup label="Player´s Handbook">
//                     <option value="actor">Actor</option>
//                     <option value="alert">Alert</option>
//                     <option value="athlete">Athlete</option>
//                     <option value="charger">Charger</option>
//                     <option value="crossbow-expert">Crossbow Expert</option>
//                     <option value="defensive-duelist">Defensive Duelist</option>
//                     <option value="dual-wielder">Dual Wielder</option>
//                     <option value="dungeon-delver">Dungeon Delver</option>
//                     <option value="durable">Durable</option>
//                     <option value="elemental-adept">Elemental Adept</option>
//                     <option value="grappler">Grappler</option>
//                     <option value="great-weapon-master">Great Weapon Master</option>
//                     <option value="healer">Healer</option>
//                     <option value="heavily-armored">Heavily Armored</option>
//                     <option value="heavy-armor-master">Heavy Armor Master</option>
//                     <option value="inspiring-leader">Inspiring Leader</option>
//                     <option value="keen-mind">Keen Mind</option>
//                     <option value="lightly-armored">Lightly Armored</option>
//                     <option value="linguist">Linguist</option>
//                     <option value="lucky">Lucky</option>
//                     <option value="mage-slayer">Mage Slayer</option>
//                     <option value="magic-initiate">Magic Initiate</option>
//                     <option value="martial-adept">Martial Adept</option>
//                     <option value="medium-armor-master">Medium Armor Master</option>
//                     <option value="mobile">Mobile</option>
//                     <option value="moderately-armored">Moderately Armored</option>
//                     <option value="mounted-combatant">Mounted Combatant</option>
//                     <option value="observant">Observant</option>
//                     <option value="polearm-master">Polearm Master</option>
//                     <option value="resilient">Resilient</option>
//                     <option value="ritual-caster">Ritual Caster</option>
//                     <option value="savage-attacker">Savage Attacker</option>
//                     <option value="sentinel">Sentinel</option>
//                     <option value="sharpshooter">Sharpshooter</option>
//                     <option value="shield-master">Shield Master</option>
//                     <option value="skilled">Skilled</option>
//                     <option value="skulker">Skulker</option>
//                     <option value="spell-sniper">Spell Sniper</option>
//                     <option value="tavern-brawler">Tavern Brawler</option>
//                     <option value="tough">Tough</option>
//                     <option value="war-caster">War Caster</option>
//                     <option value="weapon-master">Weapon Master</option>
//                 </optgroup>
//                 <optgroup label="Xanathar´s Guide to Everything">
//                     <option value="bountiful-luck">Bountiful Luck</option>
//                     <option value="dragon-fear">Dragon Fear</option>
//                     <option value="dragon-hide">Dragon Hide</option>
//                     <option value="drow-high-magic">Drow High Magic</option>
//                     <option value="dwarf-fortitude">Dwarf Fortitude</option>
//                     <option value="elven-accuracy">Elven Accuracy</option>
//                     <option value="fade-away">Fade away</option>
//                     <option value="fey-teleportation">Fey Teleportation</option>
//                     <option value="flames-of-phlegethos">Flames of Phlegethos</option>
//                     <option value="infernal-constitution">Infernal Constitution</option>
//                     <option value="orcish-fury">Orcish Fury</option>
//                     <option value="prodigy">Prodigy</option>
//                     <option value="second-chance">Second Chance</option>
//                     <option value="squat-nimbleness">Squat Nimbleness</option>
//                     <option value="wood-elf-magic">Wood Elf Magic</option>
//                 </optgroup>
//                 <optgroup label="Extra">
//                     <option value="blood-magic">Blood Magic</option>
//                     <option value="competent">Competent</option>
//                     <option value="expert">Expert</option>
//                 </optgroup>
//             </select>
//         </div>
//     </div>
// </div>`, ` `];


// //everything levedependent goes here!!!!!!!
// switch (characterLevel) {
//     case 2:
//         proficiencyBonus = 2;
//         break;
//     case 3:
//         proficiencyBonus = 2;
//         break;
//     case 4:
//         proficiencyBonus = 2;
//         break;
//     case 5:
//         proficiencyBonus = 3;
//         break;
//     case 6:
//         proficiencyBonus = 3;
//         break;
//     case 7:
//         proficiencyBonus = 3;
//         break;
//     case 8:
//         proficiencyBonus = 3;
//         break;
//     case 9:
//         proficiencyBonus = 4;
//         break;
//     case 10:
//         proficiencyBonus = 4;
//         break;
//     case 11:
//         proficiencyBonus = 4;
//         break;
//     case 12:
//         proficiencyBonus = 4;
//         break;
//     case 13:
//         proficiencyBonus = 5;
//         break;
//     case 14:
//         proficiencyBonus = 5;
//         break;
//     case 15:
//         proficiencyBonus = 5;
//         break;
//     case 16:
//         proficiencyBonus = 5;
//         break;
//     case 17:
//         proficiencyBonus = 6;
//         break;
//     case 18:
//         proficiencyBonus = 6;
//         break;
//     case 19:
//         proficiencyBonus = 6;
//         break;
//     case 20:
//         proficiencyBonus = 6;
//         break;
//     default:
//         proficiencyBonus = 2;
//         break;
// };

// //function for displaying features by level
// // function showClassDetails() {
// //     characterClass = document.querySelector('input[name="class"]:checked').value;
// //     document.getElementById("showClassDetails").innerHTML = "";
// //     if (characterClass === "artificer") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += artificerFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "barbarian") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += barbarianFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "cleric") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += clericFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "druid") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += druidFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "fighter") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += fighterFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "monk") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += monkFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "mystic") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += mysticFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "paladin") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += paladinFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "ranger") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += rangerFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "rogue") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += rogueFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "sorcerer") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += sorcererFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "warlock") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += warlockFeaturesByLevel[i];
// //         }
// //     } else if (characterClass === "wizard") {
// //         for (let i = 0; i < characterLevel; i++) {
// //             document.getElementById("showClassDetails").innerHTML += wizardFeaturesByLevel[i];
// //         }
// //     }
// //     console.log(characterClass);
// // }



// function getCharacterArmorClass() {
//     if (characterClass === "Monk" && hasShield === false) {
//         characterArmorClass = 10 + dexterityMod + WisdomMod;
//         return characterArmorClass;
//     } else if (characterClass === "Barbarian") {
//         characterArmorClass = 10 + dexterityMod + ConstitutionMod;
//         return characterArmorClass;
//     } else if (hasShield && armorType == "Heavy") {
//         characterArmorClass = armorClass + 2;
//         return characterArmorClass;
//     } else if (hasShield && armorType == "Medium") {
//         /* function clamp(dexterityMod) {
//             let acCalcDexMod = Math.min(Math.max(-4, dexterityMod), 2);
//             return acCalcDexMod;
//         }
//         let acCalcDexMod = clamp(dexterityMod); function version of Medium armor Dex Mod Maxmimum*/
//         characterArmorClass = armorClass + Math.min(Math.max(-4, dexterityMod), 2) + 2; //shorter more concise version
//         return characterArmorClass;
//     } else if (hasShield && armorType == "Light") {
//         characterArmorClass = armorClass + dexterityMod + 2;
//         return characterArmorClass;
//     } else {
//         characterArmorClass = 10 + dexterityMod;
//         return characterArmorClass;
//     }
// }


// let armorType = armor[4].armorType; // to save specific armor's type for AC calc
// //console.log(armorType);
// let armorClass = armor[4].armorClass; // to save specific armor's class for AC calc
// //console.log(armorClass);

// for (let i = 0; i < armor.length; i++) {
//     console.table(armor[i]);
// }


// // let skills = [{
// //     name: "Acrobatics",
// //     proficiency: 0, // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
// //     calcStat: abilityScores[1].mod.bind(abilityScores[1]),
// //     mod: 0,
// // }, {
// //     name: "Animal Handling",
// //     proficiency: 0,
// //     calcStat: abilityScores[4].mod.bind(abilityScores[4]),
// //     mod: 0,
// // }, {
// //     name: "Arcana",
// //     proficiency: 0,
// //     calcStat: abilityScores[3].mod.bind(abilityScores[3]),
// //     mod: 0,
// // }, {
// //     name: "Athletics",
// //     proficiency: 0,
// //     calcStat: abilityScores[0].mod.bind(abilityScores[0]),
// //     mod: 0,
// // }, {
// //     name: "Deception",
// //     proficiency: 0,
// //     calcStat: abilityScores[5].mod.bind(abilityScores[5]),
// //     mod: 0,
// // }, {
// //     name: "History",
// //     proficiency: 0,
// //     calcStat: abilityScores[3].mod.bind(abilityScores[3]),
// //     mod: 0,
// // }, {
// //     name: "Insight",
// //     proficiency: 0,
// //     calcStat: abilityScores[4].mod.bind(abilityScores[4]),
// //     mod: 0,
// // }, {
// //     name: "Intimidation",
// //     proficiency: 0,
// //     calcStat: abilityScores[5].mod.bind(abilityScores[5]),
// //     mod: 0,
// // }, {
// //     name: "Investigation",
// //     proficiency: 0,
// //     calcStat: abilityScores[3].mod.bind(abilityScores[3]),
// //     mod: 0,
// // }, {
// //     name: "Medicine",
// //     proficiency: 0,
// //     calcStat: abilityScores[4].mod.bind(abilityScores[4]),
// //     mod: 0,
// // }, {
// //     name: "Nature",
// //     proficiency: 0,
// //     calcStat: abilityScores[3].mod.bind(abilityScores[3]),
// //     mod: 0,
// // }, {
// //     name: "Perception",
// //     proficiency: 0,
// //     calcStat: abilityScores[4].mod.bind(abilityScores[4]),
// //     mod: 0,
// // }, {
// //     name: "Performance",
// //     proficiency: 0,
// //     calcStat: abilityScores[5].mod.bind(abilityScores[5]),
// //     mod: 0,
// // }, {
// //     name: "Persuasion",
// //     proficiency: 0,
// //     calcStat: abilityScores[5].mod.bind(abilityScores[5]),
// //     mod: 0,
// // }, {
// //     name: "Religion",
// //     proficiency: 0,
// //     calcStat: abilityScores[3].mod.bind(abilityScores[3]),
// //     mod: 0,
// // }, {
// //     name: "Sleight of Hand",
// //     proficiency: 0,
// //     calcStat: abilityScores[1].mod.bind(abilityScores[1]),
// //     mod: 0,
// // }, {
// //     name: "Stealth",
// //     proficiency: 0,
// //     calcStat: abilityScores[1].mod.bind(abilityScores[1]),
// //     mod: 0,
// // }, {
// //     name: "Survival",
// //     proficiency: 0,
// //     calcStat: abilityScores[4].mod.bind(abilityScores[4]),
// //     mod: 0,
// // }];

// // let skills = new Map([
// //     ["Acrobatics", [{ name: "Acrobatics", proficiency: 0, calcStat: abilityScores[1].mod.bind(abilityScores[1]), mod: 0, }]] // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
// //     ["AnimalHandling", [{ name: "Animal Handling", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0, }]]
// //     ["Arcana", [{ name: "Arcana", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0, }]]
// //     ["Athletics", [{ name: "Athletics", proficiency: 0, calcStat: abilityScores[0].mod.bind(abilityScores[0]), mod: 0, }]]
// //     ["Deception", [{ name: "Deception", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0, }]]
// //     ["History", [{ name: "History", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0, }]]
// //     ["Insight", [{ name: "Insight", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0, }]]
// //     ["Intimidation", [{ name: "Intimidation", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0, }]]
// //     ["Investigation", [{ name: "Investigation", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0, }]]
// //     ["Medicine", [{ name: "Medicine", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0, }]]
// //     ["Nature", [{ name: "Nature", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0, }]]
// //     ["Perception", [{ name: "Perception", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0, }]]
// //     ["Performance", [{ name: "Performance", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0, }]]
// //     ["Persuasion", [{ name: "Persuasion", proficiency: 0, calcStat: abilityScores[5].mod.bind(abilityScores[5]), mod: 0, }]]
// //     ["Religion", [{ name: "Religion", proficiency: 0, calcStat: abilityScores[3].mod.bind(abilityScores[3]), mod: 0, }]]
// //     ["SleightOfHand", [{ name: "Sleight of Hand", proficiency: 0, calcStat: abilityScores[1].mod.bind(abilityScores[1]), mod: 0, }]]
// //     ["Stealth", [{ name: "Stealth", proficiency: 0, calcStat: abilityScores[1].mod.bind(abilityScores[1]), mod: 0, }]]
// //     ["Survival", [{ name: "Survival", proficiency: 0, calcStat: abilityScores[4].mod.bind(abilityScores[4]), mod: 0 }]]]);


// switch (number) {
//     case 0:
//         args.forEach((arg) => {
//             cantripSpells.push(spells.get(`${arg}`)[0].name);
//             cantripSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })

//         console.log(`0 ${cantripSpellsChosen}`);
//         break;
//     case 1:
//         args.forEach((arg) => {
//             firstLevelSpells.push(spells.get(`${arg}`)[0].name);
//             firstLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`1st ${firstLevelSpellsChosen}`);
//         break;
//     case 2:
//         args.forEach((arg) => {
//             secondLevelSpells.push(spells.get(`${arg}`)[0].name);
//             secondLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`2nd ${secondLevelSpellsChosen}`);
//         break;
//     case 3:
//         args.forEach((arg) => {
//             thirdLevelSpells.push(spells.get(`${arg}`)[0].name);
//             thirdLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`3rd ${thirdLevelSpellsChosen}`);
//         break;
//     case 4:
//         args.forEach((arg) => {
//             fourthLevelSpells.push(spells.get(`${arg}`)[0].name);
//             fourthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`4th ${fourthLevelSpellsChosen}`);
//         break;
//     case 5:
//         args.forEach((arg) => {
//             fifthLevelSpells.push(spells.get(`${arg}`)[0].name);
//             fifthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`5th ${fifthLevelSpellsChosen}`);
//         break;
//     case 6:
//         args.forEach((arg) => {
//             sixthLevelSpells.push(spells.get(`${arg}`)[0].name);
//             sixthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`6th ${sixthLevelSpellsChosen}`);
//         break;
//     case 7:
//         args.forEach((arg) => {
//             seventhLevelSpells.push(spells.get(`${arg}`)[0].name);
//             seventhLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`7th ${seventhLevelSpellsChosen}`);
//         break;
//     case 8:
//         args.forEach((arg) => {
//             eigthLevelSpells.push(spells.get(`${arg}`)[0].name);
//             eigthLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`8th ${eigthLevelSpellsChosen}`);
//         break;
//     case 9:
//         args.forEach((arg) => {
//             ninethLevelSpells.push(spells.get(`${arg}`)[0].name);
//             ninethLevelSpellsChosen.push(spells.get(`${arg}`)[0].name);
//         })
//         console.log(`9th ${ninethLevelSpellsChosen}`);
//         break;
// }

// // static possibleSpells = [cantripSpells, firstLevelSpells, secondLevelSpells, thirdLevelSpells, fourthLevelSpells, fifthLevelSpells, sixthLevelSpells, seventhLevelSpells, eigthLevelSpells, ninethLevelSpells]
// // static chosenSpells = [cantripSpellsChosen, firstLevelSpellsChosen, secondLevelSpellsChosen, thirdLevelSpellsChosen, fourthLevelSpellsChosen, fifthLevelSpellsChosen, sixthLevelSpellsChosen, seventhLevelSpellsChosen, eigthLevelSpellsChosen, ninethLevelSpellsChosen]


// // static addSpellsByLevel(number, ...args) {
// //     args.forEach((arg) => {
// //         this.possibleSpells[number].push(spells.get(`${arg}`)[0].name);
// //         this.chosenSpells[number].push(spells.get(`${arg}`)[0].name);
// //         console.log(this.possibleSpells[number]);
// //     })
// // }


// {/* <b><u><em>THIS HAS TO BE IMPLEMENTED IN THE NEXT STEP!</em></u></b> */}






/* function setupCheckboxesListeners(id, referenceArray) {
    const inputs = document.getElementById(id).getElementsByTagName("input");
    const nodes = Array.from(inputs);
    nodes.forEach((node) => {
        node.addEventListener("change", (event) => {
            CheckBoxesHandler(event, nodes, referenceArray);
        })
    });
}


function CheckBoxesHandler(event, nodes, referenceArray) {
    const node = event.target;
    if (node.checked == true) {
        referenceArray.push(node.value);
        if (referenceArray.length >= testy) {
            nodes.forEach((node) => {
                if (referenceArray.includes(node.value)) {
                    node.disabled = false;
                } else {
                    node.disabled = true;
                }
            });
        }
        console.log("ist jetzt haken");

    } else if (node.checked == false) {
        // ABCD = ABCD.filter((skill) => skill !== node.value); eventuelle Filterfunktion!!!!!
        for (var i = 0; i < referenceArray.length; i++) {
            if (referenceArray[i] === node.value) {
                referenceArray.splice(i, 1);
                break
            }
        }
        if (referenceArray.length < testy) {
            nodes.forEach((node) => {
                node.disabled = false;
            });
        }
        console.log("ist jetzt kein haken");
    }
}








characterToolsProficiencies = ["thieves", "tinker"];

function setupRadiosListeners(id, referenceArray, referenceVariable) {
    const inputs = document.getElementById(id).getElementsByTagName("input");
    const nodes = Array.from(inputs);
    nodes.forEach((node) => {
        node.addEventListener("change", (event) => {
            radiosHandler(event, nodes, referenceArray, referenceVariable);
        })
    });
}
setupRadiosListeners("ToolsDiv", characterToolsProficiencies, 3);


function radiosHandler(event, nodes, referenceArray, referenceVariable) {
    const node = event.target;
    if (node.checked == true) {
        if (referenceArray.length >= referenceVariable) {
            referenceArray.pop();
        }
        referenceArray.push(node.value);
        if (referenceArray.length >= 1) {
            nodes.forEach((node) => {
                if (referenceArray.includes(node.value)) {
                }
            });
        }
        console.log("ist jetzt ausgewählt");

    }
    console.log(referenceArray);
}



















let testy = 2;

function cantripsSpellsCheckboxesListeners() {
    const inputs = document.getElementById("cantripSelectionList").getElementsByTagName("input");
    const nodes = Array.from(inputs);
    nodes.forEach((node) => {
        node.addEventListener("change", (event) => {
            cantripsCheckBoxesHandler(event, nodes);
        })
    });
}
cantripsSpellsCheckboxesListeners();


function cantripsCheckBoxesHandler(event, nodes) {
    const node = event.target;
    if (node.checked == true) {
        cantripSpellsChosen.push(node.value);
        if (cantripSpellsChosen.length >= testy) {
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
        if (cantripSpellsChosen.length < testy) {
            nodes.forEach((node) => {
                node.disabled = false;
            });
        }
        console.log("ist jetzt kein haken");
    }
    console.log(cantripSpellsChosen);
}


function firstSpellsCheckboxesListeners() {
    const inputs = document.getElementById("firstSelectionList").getElementsByTagName("input");
    const nodes = Array.from(inputs);
    nodes.forEach((node) => {
        node.addEventListener("change", (event) => {
            firstCheckBoxesHandler(event, nodes);
        })
    });
}
firstSpellsCheckboxesListeners();


function firstCheckBoxesHandler(event, nodes) {
    const node = event.target;
    if (node.checked == true) {
        firstLevelSpellsChosen.push(node.value);
        if (firstLevelSpellsChosen.length >= testy) {
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
        if (firstLevelSpellsChosen.length < testy) {
            nodes.forEach((node) => {
                node.disabled = false;
            });
        }
        console.log("ist jetzt kein haken");
    }
    console.log(firstLevelSpellsChosen);
}











function populateCheckboxes(id, referenceArray) {
    referenceArray.forEach((element) => {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "form-check");
        const newSelect = document.createElement("input");
        newSelect.setAttribute("class", "form-check-input");
        newSelect.setAttribute("type", "checkbox");
        newSelect.setAttribute("value", `${element}`);
        newSelect.setAttribute("id", `${element}Check`);
        const newLabel = document.createElement("LABEL");
        newLabel.setAttribute("class", "form-check-label");
        newLabel.setAttribute("id", `${element}Label`);
        newLabel.htmlFor = `${element}Check`;
        newLabel.innerText = `${element}`;
        const appendedDiv = document.getElementById(id);
        appendedDiv.appendChild(newDiv);
        newDiv.appendChild(newSelect);
        newDiv.appendChild(newLabel);
    })
}

populateCheckboxes("skillsSelectionList", possibleSkillChoices);
setupCheckboxesListeners("skillsDiv", chosenCharacterSkills);



tools.forEach((tool) => {
    if (tool[0].type === "Artisan's tools") {
        if (tool[0].name.includes("tinker")) {
            return;
        }
        possibleToolChoices.push(tool[0].name)
    }
})

languages.forEach((language) => {
    if (language[0].name === "Druidic" || language[0].name === "Thieves' Cant") {
        return;
    }
    possibleLanguageProficiencies.push(language[0].name);
})

function populateRadios(id, referenceArray, endarray, buttonGroupName) {
    let sanitizedName;
    referenceArray.forEach((element) => {
        if (endarray.includes(element)) {
            return;
        }
        switch (referenceArray) {
            case possibleToolChoices:
                sanitizedName = element.toLowerCase().replace(/'s| | kit|(land or water)|set|-|Ante|tools|utensils|supplies/g, "");
                break;
            case possibleSkillChoices:
                sanitizedName = element.replace(/ |handling|of|hand/g, "");
                break;
            case possibleLanguageProficiencies:
                sanitizedName = element.replace(/ /g, "");
                break;
            default:
                break;
        }
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "form-check");
        const newRadio = document.createElement("input");
        newRadio.setAttribute("class", "form-check-input");
        newRadio.setAttribute("type", "radio");
        newRadio.setAttribute("name", buttonGroupName);
        newRadio.setAttribute("value", `${sanitizedName}`);
        newRadio.setAttribute("id", `${element}Check`);
        const newLabel = document.createElement("LABEL");
        newLabel.setAttribute("class", "form-check-label");
        newLabel.setAttribute("id", `${sanitizedName}Label`);
        newLabel.htmlFor = `${element}Check`;
        newLabel.innerText = `${element}`;
        const appendedDiv = document.getElementById(id);
        appendedDiv.appendChild(newDiv);
        newDiv.appendChild(newRadio);
        newDiv.appendChild(newLabel);
    })
}
populateRadios("toolsSelectionList", possibleLanguageProficiencies, languageProficiencies, "languages")
setupRadiosListeners("toolsSelectionList", languageProficiencies, 1); */
