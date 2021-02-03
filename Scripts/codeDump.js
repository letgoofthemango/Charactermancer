/*###################################################################
######################### Load class features for lvl 2 + #######################
#####################################################################*/

testArray = [` `, ` `, `<h2 class="text-center">Level 3<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level3" aria-expanded="true" aria-controls="level3">[-]</button></span></h2>
<div class="collapse show" id="level3">

    <h5><u>Artificer Specialist</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature13" aria-expanded="true" aria-controls="feature13">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature13">
        <p>At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.</p>
        <div class="d-flex justify-content-around mb-5">
            <button type="button" class="btn btn-secondary" id="alchemistSubclass">Alchemist</button>
            <button type="button" class="btn btn-secondary" id="armorerSubclass">Armorer</button>
            <button type="button" class="btn btn-secondary" id="alchemistSubclass">Artillerist</button>
            <button type="button" class="btn btn-secondary" id="alchemistSubclass">Battle Smith</button>
        </div>
        <div id="artificierSubClass"></div>
    </div>

    <h5><u>The Right Tool for the Job</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature14" aria-expanded="true" aria-controls="feature14">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature14">
        <p>At 3rd level, you learn how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires
            1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>
    </div>
</div>`, `<br><h2 class="text-center">Level 4<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level4" aria-expanded="true" aria-controls="level4">[-]</button></span></h2>
<div class="collapse show" id="level4">

    <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature19" aria-expanded="true" aria-controls="feature19">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature19">
        <p>Because you reached 4th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
        <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
        <div class="d-flex justify-content-center">
            <p>Ability score improvments:&nbsp</p>
            <select class="btn btn-info" name="asi1" id="asi1">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <select class="btn btn-info" name="asi2" id="asi2">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <p>&nbspor&nbsp</p>
            <select class="btn btn-info" name="feat1" id="feat1">
                <option value="">Feat</option>
                <optgroup label="Tasha´s Cauldron of Everything">
                    <option value="artificer-initiate">Artificer Initiate</option>
                    <option value="chef">Chef</option>
                    <option value="crusher">Crusher</option>
                    <option value="eldritch-adept">Eldritch Adept</option>
                    <option value="fey-touched">Fey Touched</option>
                    <option value="fighting-initiate">Fighting Initiate</option>
                    <option value="gunner">Gunner</option>
                    <option value="metamagic-adept">Metamagic Adept</option>
                    <option value="piercer">Piercer</option>
                    <option value="poisoner">Poisoner</option>
                    <option value="shadow-touched">Shadow Touched</option>
                    <option value="skill-expert">Skill Expert</option>
                    <option value="slasher">Slasher</option>
                    <option value="telekinetic">Telekinetic</option>
                    <option value="telepathic">Telepathic</option>
                </optgroup>
                <optgroup label="Player´s Handbook">
                    <option value="actor">Actor</option>
                    <option value="alert">Alert</option>
                    <option value="athlete">Athlete</option>
                    <option value="charger">Charger</option>
                    <option value="crossbow-expert">Crossbow Expert</option>
                    <option value="defensive-duelist">Defensive Duelist</option>
                    <option value="dual-wielder">Dual Wielder</option>
                    <option value="dungeon-delver">Dungeon Delver</option>
                    <option value="durable">Durable</option>
                    <option value="elemental-adept">Elemental Adept</option>
                    <option value="grappler">Grappler</option>
                    <option value="great-weapon-master">Great Weapon Master</option>
                    <option value="healer">Healer</option>
                    <option value="heavily-armored">Heavily Armored</option>
                    <option value="heavy-armor-master">Heavy Armor Master</option>
                    <option value="inspiring-leader">Inspiring Leader</option>
                    <option value="keen-mind">Keen Mind</option>
                    <option value="lightly-armored">Lightly Armored</option>
                    <option value="linguist">Linguist</option>
                    <option value="lucky">Lucky</option>
                    <option value="mage-slayer">Mage Slayer</option>
                    <option value="magic-initiate">Magic Initiate</option>
                    <option value="martial-adept">Martial Adept</option>
                    <option value="medium-armor-master">Medium Armor Master</option>
                    <option value="mobile">Mobile</option>
                    <option value="moderately-armored">Moderately Armored</option>
                    <option value="mounted-combatant">Mounted Combatant</option>
                    <option value="observant">Observant</option>
                    <option value="polearm-master">Polearm Master</option>
                    <option value="resilient">Resilient</option>
                    <option value="ritual-caster">Ritual Caster</option>
                    <option value="savage-attacker">Savage Attacker</option>
                    <option value="sentinel">Sentinel</option>
                    <option value="sharpshooter">Sharpshooter</option>
                    <option value="shield-master">Shield Master</option>
                    <option value="skilled">Skilled</option>
                    <option value="skulker">Skulker</option>
                    <option value="spell-sniper">Spell Sniper</option>
                    <option value="tavern-brawler">Tavern Brawler</option>
                    <option value="tough">Tough</option>
                    <option value="war-caster">War Caster</option>
                    <option value="weapon-master">Weapon Master</option>
                </optgroup>
                <optgroup label="Xanathar´s Guide to Everything">
                    <option value="bountiful-luck">Bountiful Luck</option>
                    <option value="dragon-fear">Dragon Fear</option>
                    <option value="dragon-hide">Dragon Hide</option>
                    <option value="drow-high-magic">Drow High Magic</option>
                    <option value="dwarf-fortitude">Dwarf Fortitude</option>
                    <option value="elven-accuracy">Elven Accuracy</option>
                    <option value="fade-away">Fade away</option>
                    <option value="fey-teleportation">Fey Teleportation</option>
                    <option value="flames-of-phlegethos">Flames of Phlegethos</option>
                    <option value="infernal-constitution">Infernal Constitution</option>
                    <option value="orcish-fury">Orcish Fury</option>
                    <option value="prodigy">Prodigy</option>
                    <option value="second-chance">Second Chance</option>
                    <option value="squat-nimbleness">Squat Nimbleness</option>
                    <option value="wood-elf-magic">Wood Elf Magic</option>
                </optgroup>
                <optgroup label="Extra">
                    <option value="blood-magic">Blood Magic</option>
                    <option value="competent">Competent</option>
                    <option value="expert">Expert</option>
                </optgroup>
            </select>
        </div>
    </div>
</div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 8<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level8" aria-expanded="true" aria-controls="level8">[-]</button></span></h2>
<div class="collapse show" id="level8">

    <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature20" aria-expanded="true" aria-controls="feature20">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature20">
        <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
        <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
        <div class="d-flex justify-content-center">
            <p>Ability score improvments:&nbsp</p>
            <select class="btn btn-info" name="asi3" id="asi3">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <select class="btn btn-info" name="asi4" id="asi4">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <p>&nbspor&nbsp</p>
            <select class="btn btn-info" name="feat2" id="feat2">
                <option value="">Feat</option>
                <optgroup label="Tasha´s Cauldron of Everything">
                    <option value="artificer-initiate">Artificer Initiate</option>
                    <option value="chef">Chef</option>
                    <option value="crusher">Crusher</option>
                    <option value="eldritch-adept">Eldritch Adept</option>
                    <option value="fey-touched">Fey Touched</option>
                    <option value="fighting-initiate">Fighting Initiate</option>
                    <option value="gunner">Gunner</option>
                    <option value="metamagic-adept">Metamagic Adept</option>
                    <option value="piercer">Piercer</option>
                    <option value="poisoner">Poisoner</option>
                    <option value="shadow-touched">Shadow Touched</option>
                    <option value="skill-expert">Skill Expert</option>
                    <option value="slasher">Slasher</option>
                    <option value="telekinetic">Telekinetic</option>
                    <option value="telepathic">Telepathic</option>
                </optgroup>
                <optgroup label="Player´s Handbook">
                    <option value="actor">Actor</option>
                    <option value="alert">Alert</option>
                    <option value="athlete">Athlete</option>
                    <option value="charger">Charger</option>
                    <option value="crossbow-expert">Crossbow Expert</option>
                    <option value="defensive-duelist">Defensive Duelist</option>
                    <option value="dual-wielder">Dual Wielder</option>
                    <option value="dungeon-delver">Dungeon Delver</option>
                    <option value="durable">Durable</option>
                    <option value="elemental-adept">Elemental Adept</option>
                    <option value="grappler">Grappler</option>
                    <option value="great-weapon-master">Great Weapon Master</option>
                    <option value="healer">Healer</option>
                    <option value="heavily-armored">Heavily Armored</option>
                    <option value="heavy-armor-master">Heavy Armor Master</option>
                    <option value="inspiring-leader">Inspiring Leader</option>
                    <option value="keen-mind">Keen Mind</option>
                    <option value="lightly-armored">Lightly Armored</option>
                    <option value="linguist">Linguist</option>
                    <option value="lucky">Lucky</option>
                    <option value="mage-slayer">Mage Slayer</option>
                    <option value="magic-initiate">Magic Initiate</option>
                    <option value="martial-adept">Martial Adept</option>
                    <option value="medium-armor-master">Medium Armor Master</option>
                    <option value="mobile">Mobile</option>
                    <option value="moderately-armored">Moderately Armored</option>
                    <option value="mounted-combatant">Mounted Combatant</option>
                    <option value="observant">Observant</option>
                    <option value="polearm-master">Polearm Master</option>
                    <option value="resilient">Resilient</option>
                    <option value="ritual-caster">Ritual Caster</option>
                    <option value="savage-attacker">Savage Attacker</option>
                    <option value="sentinel">Sentinel</option>
                    <option value="sharpshooter">Sharpshooter</option>
                    <option value="shield-master">Shield Master</option>
                    <option value="skilled">Skilled</option>
                    <option value="skulker">Skulker</option>
                    <option value="spell-sniper">Spell Sniper</option>
                    <option value="tavern-brawler">Tavern Brawler</option>
                    <option value="tough">Tough</option>
                    <option value="war-caster">War Caster</option>
                    <option value="weapon-master">Weapon Master</option>
                </optgroup>
                <optgroup label="Xanathar´s Guide to Everything">
                    <option value="bountiful-luck">Bountiful Luck</option>
                    <option value="dragon-fear">Dragon Fear</option>
                    <option value="dragon-hide">Dragon Hide</option>
                    <option value="drow-high-magic">Drow High Magic</option>
                    <option value="dwarf-fortitude">Dwarf Fortitude</option>
                    <option value="elven-accuracy">Elven Accuracy</option>
                    <option value="fade-away">Fade away</option>
                    <option value="fey-teleportation">Fey Teleportation</option>
                    <option value="flames-of-phlegethos">Flames of Phlegethos</option>
                    <option value="infernal-constitution">Infernal Constitution</option>
                    <option value="orcish-fury">Orcish Fury</option>
                    <option value="prodigy">Prodigy</option>
                    <option value="second-chance">Second Chance</option>
                    <option value="squat-nimbleness">Squat Nimbleness</option>
                    <option value="wood-elf-magic">Wood Elf Magic</option>
                </optgroup>
                <optgroup label="Extra">
                    <option value="blood-magic">Blood Magic</option>
                    <option value="competent">Competent</option>
                    <option value="expert">Expert</option>
                </optgroup>
            </select>
        </div>
    </div>
</div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 12<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level12" aria-expanded="true" aria-controls="level12">[-]</button></span></h2>
<div class="collapse show" id="level12">

    <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature21" aria-expanded="true" aria-controls="feature21">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature21">
        <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
        <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
        <div class="d-flex justify-content-center">
            <p>Ability score improvments:&nbsp</p>
            <select class="btn btn-info" name="asi5" id="asi5">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <select class="btn btn-info" name="asi6" id="asi6">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <p>&nbspor&nbsp</p>
            <select class="btn btn-info" name="feat3" id="feat3">
                <option value="">Feat</option>
                <optgroup label="Tasha´s Cauldron of Everything">
                    <option value="artificer-initiate">Artificer Initiate</option>
                    <option value="chef">Chef</option>
                    <option value="crusher">Crusher</option>
                    <option value="eldritch-adept">Eldritch Adept</option>
                    <option value="fey-touched">Fey Touched</option>
                    <option value="fighting-initiate">Fighting Initiate</option>
                    <option value="gunner">Gunner</option>
                    <option value="metamagic-adept">Metamagic Adept</option>
                    <option value="piercer">Piercer</option>
                    <option value="poisoner">Poisoner</option>
                    <option value="shadow-touched">Shadow Touched</option>
                    <option value="skill-expert">Skill Expert</option>
                    <option value="slasher">Slasher</option>
                    <option value="telekinetic">Telekinetic</option>
                    <option value="telepathic">Telepathic</option>
                </optgroup>
                <optgroup label="Player´s Handbook">
                    <option value="actor">Actor</option>
                    <option value="alert">Alert</option>
                    <option value="athlete">Athlete</option>
                    <option value="charger">Charger</option>
                    <option value="crossbow-expert">Crossbow Expert</option>
                    <option value="defensive-duelist">Defensive Duelist</option>
                    <option value="dual-wielder">Dual Wielder</option>
                    <option value="dungeon-delver">Dungeon Delver</option>
                    <option value="durable">Durable</option>
                    <option value="elemental-adept">Elemental Adept</option>
                    <option value="grappler">Grappler</option>
                    <option value="great-weapon-master">Great Weapon Master</option>
                    <option value="healer">Healer</option>
                    <option value="heavily-armored">Heavily Armored</option>
                    <option value="heavy-armor-master">Heavy Armor Master</option>
                    <option value="inspiring-leader">Inspiring Leader</option>
                    <option value="keen-mind">Keen Mind</option>
                    <option value="lightly-armored">Lightly Armored</option>
                    <option value="linguist">Linguist</option>
                    <option value="lucky">Lucky</option>
                    <option value="mage-slayer">Mage Slayer</option>
                    <option value="magic-initiate">Magic Initiate</option>
                    <option value="martial-adept">Martial Adept</option>
                    <option value="medium-armor-master">Medium Armor Master</option>
                    <option value="mobile">Mobile</option>
                    <option value="moderately-armored">Moderately Armored</option>
                    <option value="mounted-combatant">Mounted Combatant</option>
                    <option value="observant">Observant</option>
                    <option value="polearm-master">Polearm Master</option>
                    <option value="resilient">Resilient</option>
                    <option value="ritual-caster">Ritual Caster</option>
                    <option value="savage-attacker">Savage Attacker</option>
                    <option value="sentinel">Sentinel</option>
                    <option value="sharpshooter">Sharpshooter</option>
                    <option value="shield-master">Shield Master</option>
                    <option value="skilled">Skilled</option>
                    <option value="skulker">Skulker</option>
                    <option value="spell-sniper">Spell Sniper</option>
                    <option value="tavern-brawler">Tavern Brawler</option>
                    <option value="tough">Tough</option>
                    <option value="war-caster">War Caster</option>
                    <option value="weapon-master">Weapon Master</option>
                </optgroup>
                <optgroup label="Xanathar´s Guide to Everything">
                    <option value="bountiful-luck">Bountiful Luck</option>
                    <option value="dragon-fear">Dragon Fear</option>
                    <option value="dragon-hide">Dragon Hide</option>
                    <option value="drow-high-magic">Drow High Magic</option>
                    <option value="dwarf-fortitude">Dwarf Fortitude</option>
                    <option value="elven-accuracy">Elven Accuracy</option>
                    <option value="fade-away">Fade away</option>
                    <option value="fey-teleportation">Fey Teleportation</option>
                    <option value="flames-of-phlegethos">Flames of Phlegethos</option>
                    <option value="infernal-constitution">Infernal Constitution</option>
                    <option value="orcish-fury">Orcish Fury</option>
                    <option value="prodigy">Prodigy</option>
                    <option value="second-chance">Second Chance</option>
                    <option value="squat-nimbleness">Squat Nimbleness</option>
                    <option value="wood-elf-magic">Wood Elf Magic</option>
                </optgroup>
                <optgroup label="Extra">
                    <option value="blood-magic">Blood Magic</option>
                    <option value="competent">Competent</option>
                    <option value="expert">Expert</option>
                </optgroup>
            </select>
        </div>
    </div>
</div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 16<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level16" aria-expanded="true" aria-controls="level16">[-]</button></span></h2>
<div class="collapse show" id="level16">

    <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature22" aria-expanded="true" aria-controls="feature22">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature21">
        <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
        <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
        <div class="d-flex justify-content-center">
            <p>Ability score improvments:&nbsp</p>
            <select class="btn btn-info" name="asi7" id="asi7">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <select class="btn btn-info" name="asi8" id="asi8">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <p>&nbspor&nbsp</p>
            <select class="btn btn-info" name="feat4" id="feat4">
                <option value="">Feat</option>
                <optgroup label="Tasha´s Cauldron of Everything">
                    <option value="artificer-initiate">Artificer Initiate</option>
                    <option value="chef">Chef</option>
                    <option value="crusher">Crusher</option>
                    <option value="eldritch-adept">Eldritch Adept</option>
                    <option value="fey-touched">Fey Touched</option>
                    <option value="fighting-initiate">Fighting Initiate</option>
                    <option value="gunner">Gunner</option>
                    <option value="metamagic-adept">Metamagic Adept</option>
                    <option value="piercer">Piercer</option>
                    <option value="poisoner">Poisoner</option>
                    <option value="shadow-touched">Shadow Touched</option>
                    <option value="skill-expert">Skill Expert</option>
                    <option value="slasher">Slasher</option>
                    <option value="telekinetic">Telekinetic</option>
                    <option value="telepathic">Telepathic</option>
                </optgroup>
                <optgroup label="Player´s Handbook">
                    <option value="actor">Actor</option>
                    <option value="alert">Alert</option>
                    <option value="athlete">Athlete</option>
                    <option value="charger">Charger</option>
                    <option value="crossbow-expert">Crossbow Expert</option>
                    <option value="defensive-duelist">Defensive Duelist</option>
                    <option value="dual-wielder">Dual Wielder</option>
                    <option value="dungeon-delver">Dungeon Delver</option>
                    <option value="durable">Durable</option>
                    <option value="elemental-adept">Elemental Adept</option>
                    <option value="grappler">Grappler</option>
                    <option value="great-weapon-master">Great Weapon Master</option>
                    <option value="healer">Healer</option>
                    <option value="heavily-armored">Heavily Armored</option>
                    <option value="heavy-armor-master">Heavy Armor Master</option>
                    <option value="inspiring-leader">Inspiring Leader</option>
                    <option value="keen-mind">Keen Mind</option>
                    <option value="lightly-armored">Lightly Armored</option>
                    <option value="linguist">Linguist</option>
                    <option value="lucky">Lucky</option>
                    <option value="mage-slayer">Mage Slayer</option>
                    <option value="magic-initiate">Magic Initiate</option>
                    <option value="martial-adept">Martial Adept</option>
                    <option value="medium-armor-master">Medium Armor Master</option>
                    <option value="mobile">Mobile</option>
                    <option value="moderately-armored">Moderately Armored</option>
                    <option value="mounted-combatant">Mounted Combatant</option>
                    <option value="observant">Observant</option>
                    <option value="polearm-master">Polearm Master</option>
                    <option value="resilient">Resilient</option>
                    <option value="ritual-caster">Ritual Caster</option>
                    <option value="savage-attacker">Savage Attacker</option>
                    <option value="sentinel">Sentinel</option>
                    <option value="sharpshooter">Sharpshooter</option>
                    <option value="shield-master">Shield Master</option>
                    <option value="skilled">Skilled</option>
                    <option value="skulker">Skulker</option>
                    <option value="spell-sniper">Spell Sniper</option>
                    <option value="tavern-brawler">Tavern Brawler</option>
                    <option value="tough">Tough</option>
                    <option value="war-caster">War Caster</option>
                    <option value="weapon-master">Weapon Master</option>
                </optgroup>
                <optgroup label="Xanathar´s Guide to Everything">
                    <option value="bountiful-luck">Bountiful Luck</option>
                    <option value="dragon-fear">Dragon Fear</option>
                    <option value="dragon-hide">Dragon Hide</option>
                    <option value="drow-high-magic">Drow High Magic</option>
                    <option value="dwarf-fortitude">Dwarf Fortitude</option>
                    <option value="elven-accuracy">Elven Accuracy</option>
                    <option value="fade-away">Fade away</option>
                    <option value="fey-teleportation">Fey Teleportation</option>
                    <option value="flames-of-phlegethos">Flames of Phlegethos</option>
                    <option value="infernal-constitution">Infernal Constitution</option>
                    <option value="orcish-fury">Orcish Fury</option>
                    <option value="prodigy">Prodigy</option>
                    <option value="second-chance">Second Chance</option>
                    <option value="squat-nimbleness">Squat Nimbleness</option>
                    <option value="wood-elf-magic">Wood Elf Magic</option>
                </optgroup>
                <optgroup label="Extra">
                    <option value="blood-magic">Blood Magic</option>
                    <option value="competent">Competent</option>
                    <option value="expert">Expert</option>
                </optgroup>
            </select>
        </div>
    </div>
</div>`, ` `, ` `, `<br><h2 class="text-center">Level 19<span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#level19" aria-expanded="true" aria-controls="level19">[-]</button></span></h2>
<div class="collapse show" id="level19">

    <h5><u>Ability Score Improvement</u><span class="ml-2"><button class="butt" type="button" data-toggle="collapse" data-target="#feature23" aria-expanded="true" aria-controls="feature23">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature23">
        <p>Because you reached 8th level, you can now increase your ability scores. You can increase either one ability by 2, or two by 1.</p>
        <p>If your DM allows the use of feats, you may take a feat instead of the ability score improvements.</p>
        <div class="d-flex justify-content-center">
            <p>Ability score improvments:&nbsp</p>
            <select class="btn btn-info" name="asi9" id="asi9">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <select class="btn btn-info" name="asi10" id="asi10">
                <option value="1">Strength</option>
                <option value="2">Dexterity</option>
                <option value="3">Constitution</option>
                <option value="4">Intelligence</option>
                <option value="5">Wisdom</option>
                <option value="6">Charisma</option>
            </select>
            <p>&nbspor&nbsp</p>
            <select class="btn btn-info" name="feat5" id="feat5">
                <option value="">Feat</option>
                <optgroup label="Tasha´s Cauldron of Everything">
                    <option value="artificer-initiate">Artificer Initiate</option>
                    <option value="chef">Chef</option>
                    <option value="crusher">Crusher</option>
                    <option value="eldritch-adept">Eldritch Adept</option>
                    <option value="fey-touched">Fey Touched</option>
                    <option value="fighting-initiate">Fighting Initiate</option>
                    <option value="gunner">Gunner</option>
                    <option value="metamagic-adept">Metamagic Adept</option>
                    <option value="piercer">Piercer</option>
                    <option value="poisoner">Poisoner</option>
                    <option value="shadow-touched">Shadow Touched</option>
                    <option value="skill-expert">Skill Expert</option>
                    <option value="slasher">Slasher</option>
                    <option value="telekinetic">Telekinetic</option>
                    <option value="telepathic">Telepathic</option>
                </optgroup>
                <optgroup label="Player´s Handbook">
                    <option value="actor">Actor</option>
                    <option value="alert">Alert</option>
                    <option value="athlete">Athlete</option>
                    <option value="charger">Charger</option>
                    <option value="crossbow-expert">Crossbow Expert</option>
                    <option value="defensive-duelist">Defensive Duelist</option>
                    <option value="dual-wielder">Dual Wielder</option>
                    <option value="dungeon-delver">Dungeon Delver</option>
                    <option value="durable">Durable</option>
                    <option value="elemental-adept">Elemental Adept</option>
                    <option value="grappler">Grappler</option>
                    <option value="great-weapon-master">Great Weapon Master</option>
                    <option value="healer">Healer</option>
                    <option value="heavily-armored">Heavily Armored</option>
                    <option value="heavy-armor-master">Heavy Armor Master</option>
                    <option value="inspiring-leader">Inspiring Leader</option>
                    <option value="keen-mind">Keen Mind</option>
                    <option value="lightly-armored">Lightly Armored</option>
                    <option value="linguist">Linguist</option>
                    <option value="lucky">Lucky</option>
                    <option value="mage-slayer">Mage Slayer</option>
                    <option value="magic-initiate">Magic Initiate</option>
                    <option value="martial-adept">Martial Adept</option>
                    <option value="medium-armor-master">Medium Armor Master</option>
                    <option value="mobile">Mobile</option>
                    <option value="moderately-armored">Moderately Armored</option>
                    <option value="mounted-combatant">Mounted Combatant</option>
                    <option value="observant">Observant</option>
                    <option value="polearm-master">Polearm Master</option>
                    <option value="resilient">Resilient</option>
                    <option value="ritual-caster">Ritual Caster</option>
                    <option value="savage-attacker">Savage Attacker</option>
                    <option value="sentinel">Sentinel</option>
                    <option value="sharpshooter">Sharpshooter</option>
                    <option value="shield-master">Shield Master</option>
                    <option value="skilled">Skilled</option>
                    <option value="skulker">Skulker</option>
                    <option value="spell-sniper">Spell Sniper</option>
                    <option value="tavern-brawler">Tavern Brawler</option>
                    <option value="tough">Tough</option>
                    <option value="war-caster">War Caster</option>
                    <option value="weapon-master">Weapon Master</option>
                </optgroup>
                <optgroup label="Xanathar´s Guide to Everything">
                    <option value="bountiful-luck">Bountiful Luck</option>
                    <option value="dragon-fear">Dragon Fear</option>
                    <option value="dragon-hide">Dragon Hide</option>
                    <option value="drow-high-magic">Drow High Magic</option>
                    <option value="dwarf-fortitude">Dwarf Fortitude</option>
                    <option value="elven-accuracy">Elven Accuracy</option>
                    <option value="fade-away">Fade away</option>
                    <option value="fey-teleportation">Fey Teleportation</option>
                    <option value="flames-of-phlegethos">Flames of Phlegethos</option>
                    <option value="infernal-constitution">Infernal Constitution</option>
                    <option value="orcish-fury">Orcish Fury</option>
                    <option value="prodigy">Prodigy</option>
                    <option value="second-chance">Second Chance</option>
                    <option value="squat-nimbleness">Squat Nimbleness</option>
                    <option value="wood-elf-magic">Wood Elf Magic</option>
                </optgroup>
                <optgroup label="Extra">
                    <option value="blood-magic">Blood Magic</option>
                    <option value="competent">Competent</option>
                    <option value="expert">Expert</option>
                </optgroup>
            </select>
        </div>
    </div>
</div>`, ` `];

document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    if (event.target && event.target.matches("#goTotFeatures")) { //check if the target is the target and it matches the id
        document.getElementById("displayContent").innerHTML = ""; //clean the element displayContent for other DOM stuff to be displayed
        if (characterClass === "Artificer") {
            for (let i = 0; i < characterLevel; i++) {
                document.getElementById("displayContent").innerHTML += testArray[i];
            }
        } else { console.log("got to features doesnt work") }
        /*else if (characterClass === "Barbarian") {
                   for (let i = 0; i < characterLevel; i++) {
                       document.getElementById("showClassDetails").innerHTML += barbarianFeaturesByLevel[i];
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
               document.getElementById("summaryClass").textContent = characterClass; */
    }
});

document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    if (event.target && event.target.matches("#alchemistSubclass")) { //check if the target is the target and it matches the id
        document.getElementById("artificierSubClass").innerHTML = alchemist;
        document.getElementById("summarySubClass").textContent = "(Alchemist)";

    }
});
//--------------------------------------------------------------------------------------------------------------


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


/* let abilityScores = [{
    name: "Strength",
    value: 8,
    mod: ()=> { return Math.floor((this.value - 10) / 2); },
    saveMod: ()=> { return this.mod() + proficiencyBonus; }
}, {
    name: "Dexterity",
    value: 8,
    mod: ()=> { return Math.floor((this.value - 10) / 2); },
    saveMod: ()=> { return this.mod() + proficiencyBonus; }
}, {
    name: "Constitution",
    value: 8,
    mod: ()=> { return Math.floor((this.value - 10) / 2); },
    saveMod: ()=> { return this.mod() + proficiencyBonus; }
}, {
    name: "Intelligence",
    value: 8,
    mod: ()=> { return Math.floor((this.value - 10) / 2); },
    saveMod: ()=> { return this.mod() + proficiencyBonus; }
}, {
    name: "Wisdom",
    value: 8,
    mod: ()=> { return Math.floor((this.value - 10) / 2); },
    saveMod: ()=> { return this.mod() + proficiencyBonus; }
}, {
    name: "Charisma",
    value: 8,
    mod: ()=> { return Math.floor((this.value - 10) / 2); },
    saveMod: ()=> { return this.mod() + proficiencyBonus; }
}]; */



function setWarlockSubclass(subclass){
    if (target && target.matches("#archfey")) {
        characterSubClass = "(Archfey)";
        document.getElementById("warlockOrigin").innerHTML = archfey;
    } else if (target && target.matches("#celestial")) {
        characterSubClass = "(Celestial)";
        document.getElementById("warlockOrigin").innerHTML = celestial;
    } else if (target && target.matches("#fathomless")) {
        characterSubClass = "(Fathomless)";
        document.getElementById("warlockOrigin").innerHTML = fathomless;
    } else if (target && target.matches("#fiend")) {
        characterSubClass = "(Fiend)";
        document.getElementById("warlockOrigin").innerHTML = fiend;
    } else if (target && target.matches("#genie")) {
        characterSubClass = "(Genie)";
        document.getElementById("warlockOrigin").innerHTML = genie;
    } else if (target && target.matches("#greatOldOne")) {
        characterSubClass = "(Great Old One)";
        document.getElementById("warlockOrigin").innerHTML = greatOldOne;
    } else if (target && target.matches("#hexBlade")) {
        characterSubClass = "(Hexblade)";
        document.getElementById("warlockOrigin").innerHTML = hexBlade;
    } else if (target && target.matches("#ravenQueen")) {
        characterSubClass = "(Raven Queen)";
        document.getElementById("warlockOrigin").innerHTML = ravenQueen;
    } else if (target && target.matches("#seeker")) {
        characterSubClass = "(Seeker)";
        document.getElementById("warlockOrigin").innerHTML = seeker;
    } else if (target && target.matches("#undead")) {
        characterSubClass = "(Undead)";
        document.getElementById("warlockOrigin").innerHTML = undead;
    } else if (target && target.matches("#undying")) {
        characterSubClass = "(Undying)";
        document.getElementById("warlockOrigin").innerHTML = undying;
    } else {
        return;
    }
    document.getElementById("summarySubClass").textContent = characterSubClass;
    }

    switch (subclass) {
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        case "hexBlade":
            characterSubClass = "(Hexblade)";
            document.getElementById("warlockOrigin").innerHTML = hexBlade;
            break;
        default:
            break;
    }