class Paladin extends Character {
    static paladinFeaturesByLevel = [`<h1 class="text-center">Paladin<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true"
aria-controls="collapseIntro">[-]</button></span></h1>

<div class="collapse show" id="collapseIntro">

<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
<a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
    aria-controls="nav-home" aria-selected="true">Class table</a>
<a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
    aria-controls="nav-profile" aria-selected="false">Class description</a>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<!-- -------------------------------------------------------------beginning description div-->
<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
<p>Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man's wounds knit
    closed, and his eyes open wide with amazement.</p>
<p>A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before
    they even realize he is there.</p>
<p>Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness.</p>
<p>Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in
    a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.</p>

<h5>The Cause of Righteousness</h5>
<p>A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause
    of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin's power comes as much from a commitment to justice itself as it does from a god.</p>
<p>Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the
    undead, and to protect the innocent and those who join them in the fight for justice.</p>

<h5>Beyond the Mundane Life</h5>
<p>Almost by definition, the life of a paladin is an adventuring life. Unless a lasting injury has taken him or her away from adventuring for a time, every paladin lives on the front lines of the cosmic struggle against evil. Fighters are rare
    enough among the ranks of the militias and armies of the world, but even fewer people can claim the true calling of a paladin. When they do receive the call, these warriors turn from their former occupations and take up arms to fight evil.
    Sometimes their oaths lead them into the service of the crown as leaders of elite groups of knights, but even then their loyalty is first to the cause of righteousness, not to crown and country.</p>
<p>Adventuring paladins take their work seriously. A delve into an ancient ruin or dusty crypt can be a quest driven by a higher purpose than the acquisition of treasure. Evil lurks in dungeons and primeval forests, and even the smallest victory
    against it can tilt the cosmic balance away from oblivion.</p>

<P>A paladin is a living embodiment of an oath—a promise or a vow made manifest in the person of a holy warrior who has the skill and the determination to see the cause through to the end. Some paladins devote themselves expressly to protecting
    the innocent and spreading justice in the world, while others resolve to attain that goal by conquering those who stand defiant and bringing them under the rule of law.</P>
<p>Although no paladin in the world could be described as typical, a number of them are narrow-minded do-gooders who refuse to tolerate even the smallest deviation from their own outlook. Paladins who take up the adventuring life, however, rarely
    remain so rigid in their attitudes—if only to keep from alienating their companions.</p>

<i>“The true worth of a paladin is measured not in foes defeated or dungeons plundered. It is measured in lives saved and hearts turned to the causes of mercy and justice.”</i>
<p>— Isteval</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr></tr>
        <tr>
            <th colspan="3"></th> <!-- spacer to match the 3 default cols (level, prof, features) -->
            <th colspan="5">Spell Slots per Spell Level</th>
        </tr>
        <tr></tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td>
                <span>Divine Sense,</span>
                <span>Lay on Hands</span>
            </td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>2nd</td>
            <td>+2</td>
            <td>
                <span>Divine Smite,</span>
                <span>Fighting Style,</span>
                <span>Spellcasting</span>
            </td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>3rd</td>
            <td>+2</td>
            <td>
                <span>Divine Health,</span>
                <span>Sacred Oath</span>
            </td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>+2</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>+3</td>
            <td>
                <span>Extra Attack</span>
            </td>
            <td>4</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>6th</td>
            <td>+3</td>
            <td>
                <span>Aura of Protection</span>
            </td>
            <td>4</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>+3</td>
            <td>
                <span>Sacred Oath feature</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>+3</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>+4</td>
            <td>—</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>+4</td>
            <td>
                <span>Aura of Courage</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>+4</td>
            <td>
                <span>Improved Divine Smite</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>+4</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>13th</td>
            <td>+5</td>
            <td>—</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>—</td>
        </tr>
        <tr>
            <td>14th</td>
            <td>+5</td>
            <td>
                <span>Cleansing Touch</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>—</td>
        </tr>
        <tr>
            <td>15th</td>
            <td>+5</td>
            <td>
                <span>Sacred Oath feature</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
        </tr>
        <tr>
            <td>16th</td>
            <td>+5</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
        </tr>
        <tr>
            <td>17th</td>
            <td>+6</td>
            <td>—</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>18th</td>
            <td>+6</td>
            <td>
                <span>Aura improvements</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>19th</td>
            <td>+6</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
        </tr>
        <tr>
            <td>20th</td>
            <td>+6</td>
            <td>
                <span>Sacred Oath feature</span>
            </td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
        </tr>
    </tbody>
</table>
</div>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

    <h5>Divine Sense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know
            the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd
            von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.</p>

        <p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.</p>
    </div>

    <h5>Lay on Hands<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature2">
        <p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.</p>
        <p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.</p>
        <p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands,
            expending hit points separately for each one.</p>
        <p>This feature has no effect on undead and constructs.</p>
    </div>
</div>`, `<p>paladin 2`, `<p>paladin 3`, `<p>paladin 4`, `<p>paladin 5`, `<p>paladin 6`, `<p>paladin 7`, `<p>paladin 8`, `<p>paladin 3`, `<p>paladin 2`, `<p>paladin 3`, `<p>paladin 2`, `<p>paladin 3`, `<p>paladin 2`, `<p>paladin 3`, `<p>paladin 2`, `<p>paladin 3`, `<p>paladin 2`, `<p>paladin 3`, `<p>paladin 2`];
    static paladinFeaturesList = [
        [`<li>
    Divine Sense
    </li><li>
    Lay on Hands
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


    static displayPaladinFeaturesByLevel() {
        const classDetailsNode = document.getElementById("showClassDetails");
        for (let i = 0; i < characterLevel; i++) {
            classDetailsNode.innerHTML += Paladin.paladinFeaturesByLevel[i];
        }
    }


    // Full character actions----------------------------------------------------------------------------------------------------------------------
    static setPaladinClass() {
        Character.characterClass = PALADIN;
        Character.setCharacterHitdice(10);
        Character.setCharacterSavingThrows("Wisdom", "Charisma");
        Character.setClassSkills("Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion");
        Character.setCharacterSkillsNumberToChoose(2);
        Character.setCharacterFeatures("Divine Sense", "Lay on Hands");
        Character.setCharacterWeaponProficiencies("simpleWeapons", "martialWeapons");
        Character.setCharacterArmorProficiency("light", "medium", "heavy", "shields");
        // Character.setCharacterSpellsKnown(50, 50, 0, 0, 0, 0, 0, 0, 0, 0);
        // Character.setClassSpells(1);
        // Character.setCharacterSpellSlots(2, 0, 0, 0, 0, 0, 0, 0, 0);
    }

}