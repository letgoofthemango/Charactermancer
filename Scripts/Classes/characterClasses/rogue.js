class Rogue extends Character {
    static rogueFeaturesByLevel = [`<h1 class="text-center">Rogue<span class="ml-2"><button class="collapseButton" type="button"
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
<p>Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an
    ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she
    disappears into the shadows as her fighter friend moves forward to kick the door open.</p>
    <p>A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When
    their target—a notorious slaver—passes the alleyway, the accomplice cries out, the slaver comes to
    investigate, and the assassin's blade cuts his throat before he can make a sound.</p>
    <p>Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard's belt.
    In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to
    make their escape.</p>
    <p>Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation.
    They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness
    and versatility that is the cornerstone of any successful adventuring party.</p>
    
    <h5>Skill and Precision</h5>
    <p>Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their
    combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus
    on stealth and deception, while others refine the skills that help them in a dungeon environment, such
    as climbing, finding and disarming traps, and opening locks.</p>
    <p>When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one
    precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent
    down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few
    learn magical tricks to supplement their other abilities.</p>
    
    <h5>A Shady Living</h5>
    <p>Every town and city has its share of rogues. Most of them live up to the worst stereotypes of the class,
    making a living as burglars, assassins, cutpurses, and con artists. Often, these scoundrels are
    organized into thieves' guilds or crime families. Plenty of rogues operate independently, but even they
    sometimes recruit apprentices to help them in their scams and heists. A few rogues make an honest living
    as locksmiths, investigators, or exterminators, which can be a dangerous job in a world where dire
    rats—and wererats—haunt the sewers.</p>
    <p>As adventurers, rogues fall on both sides of the law. Some are hardened criminals who decide to seek
    their fortune in treasure hoards, while others take up a life of adventure to escape from the law. Some
    have learned and perfected their skills with the explicit purpose of infiltrating ancient ruins and
    hidden crypts in search of treasure.</p>
    <p>When brute force won't get the job done, or when magic isn't available or appropriate, the rogue rises to
    the fore. With skills tied to stealth, subterfuge, and trickery, rogues can get into and out of trouble
    in ways that few other characters can emulate.</p>
    <p>Some rogues who turn to adventuring are former criminals who have decided that dodging monsters is
    preferable to remaining one step ahead of the law. Others are professional killers in search of a
    profitable application of their talents between contracts. Some simply love the thrill of overcoming any
    challenge that stands in their way.</p>
    <p>On adventures, a rogue is likely to mix an outwardly cautious approach—few rogues enjoy combat—with a
    ravenous hunger for loot. Most of the time, in a rogue's mind, taking up arms against a creature is not
    about killing the creature but about becoming the new owner of its treasure.</p>
    <h5>A Shady Living</h5>
    <p>Most of what rogues do revolves around obtaining treasure and preventing others from doing the same.
    Little gets in the way of attaining those goals, except that many rogues are enticed away from that path
    by a compulsion that clouds their thinking—an irresistible need that must be satisfied, even if doing so
    is risky.</p>
    <p>A rogue's guilty pleasure could be the acquisition of a physical item, something to be experienced, or a
    way of conducting oneself at certain times. One rogue might not be able to pass up any loot made of
    silver, for instance, even if said loot is hanging around the neck of a castle guard. Another one can't
    go through a day in the city without lifting a purse or two, just to keep in practice.</p>
    <p>What's the one form of temptation that your rogue character can't resist when the opportunity presents
    itself, even if giving into it might mean trouble for you and your companions?</p>
    
    <i>“People forget that the entire point of venturing down into a dusty tomb is to bring back the prizes
    hidden away there. Fighting is for fools. Dead men can't spend their fortunes.”</i>
    <p>— Barnabas Bladecutter</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr></tr>
        <tr>
            <th colspan="3"></th> <!-- spacer to match the 3 default cols (level, prof, features) -->
            <th colspan="1"></th>
            <th colspan="2"></th>
            <th scope="col" colspan="4">Spell Slots per Spell Level (Arcane Trickster)</th>
        </tr>
        <tr></tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>Sneak Attack</th>
            <th>Cantrips Known</th>
            <th>SpellsKnown</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td>Expertise,Sneak Attack,Thieves' Cant</td>
            <td>1d6</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>2nd</td>
            <td>+2</td>
            <td>Cunning Action</td>
            <td>1d6</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>3rd</td>
            <td>+2</td>
            <td>Roguish Archetype</td>
            <td>2d6</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>+2</td>
            <td>Ability Score Improvement</td>
            <td>2d6</td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>+3</td>
            <td>Uncanny Dodge</td>
            <td>3d6</td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>6th</td>
            <td>+3</td>
            <td>Expertise</td>
            <td>3d6</td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>+3</td>
            <td>Evasion</td>
            <td>4d6</td>
            <td>3</td>
            <td>5</td>
            <td>4</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>+3</td>
            <td>Ability Score Improvement</td>
            <td>4d6</td>
            <td>3</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>+4</td>
            <td>Roguish Archetype feature</td>
            <td>5d6</td>
            <td>3</td>
            <td>6</td>
            <td>4</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>+4</td>
            <td>Ability Score Improvement</td>
            <td>5d6</td>
            <td>4</td>
            <td>7</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>+4</td>
            <td>Reliable Talent</td>
            <td>6d6</td>
            <td>4</td>
            <td>8</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>+4</td>
            <td>Ability Score Improvement</td>
            <td>6d6</td>
            <td>4</td>
            <td>8</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>13th</td>
            <td>+5</td>
            <td>Roguish Archetype feature</td>
            <td>7d6</td>
            <td>4</td>
            <td>9</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
        </tr>
        <tr>
            <td>14th</td>
            <td>+5</td>
            <td>Blindsense</td>
            <td>7d6</td>
            <td>4</td>
            <td>10</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
        </tr>
        <tr>
            <td>15th</td>
            <td>+5</td>
            <td>Slippery Mind</td>
            <td>8d6</td>
            <td>4</td>
            <td>10</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
        </tr>
        <tr>
            <td>16th</td>
            <td>+5</td>
            <td>Ability Score Improvement</td>
            <td>8d6</td>
            <td>4</td>
            <td>11</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
        </tr>
        <tr>
            <td>17th</td>
            <td>+6</td>
            <td>Roguish Archetype feature</td>
            <td>9d6</td>
            <td>4</td>
            <td>11</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
        </tr>
        <tr>
            <td>18th</td>
            <td>+6</td>
            <td>Elusive</td>
            <td>9d6</td>
            <td>4</td>
            <td>11</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
        </tr>
        <tr>
            <td>19th</td>
            <td>+6</td>
            <td>Ability Score Improvement</td>
            <td>10d6</td>
            <td>4</td>
            <td>12</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>20th</td>
            <td>+6</td>
            <td>Stroke of Luck</td>
            <td>10d6</td>
            <td>4</td>
            <td>13</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
        </tr>
    </tbody>
</table>
</div>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Expertise<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
<p>At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your
proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make
that uses either of the chosen proficiencies.</p>

<p>At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to
gain this benefit.</p>
</div>

<h5>Sneak Attack<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature2">
<p>Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn,
you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the
attack roll. The attack must use a finesse or a ranged weapon.</p>
<p>You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it,
that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.</p>
<p>The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak
Attack column of the Rogue table.</p>
</div>

<h5>Thieves' Cant<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature3">
<p>During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</p>
<p>In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</p>
</div>

</div>`, `<p>rogue 2`, `<p>rogue 3`, `<p>rogue 4`, `<p>rogue 5`, `<p>rogue 6`, `<p>rogue 7`, `<p>rogue 8`, `<p>rogue 3`, `<p>rogue 2`, `<p>rogue 3`, `<p>rogue 2`, `<p>rogue 3`, `<p>rogue 2`, `<p>rogue 3`, `<p>rogue 2`, `<p>rogue 3`, `<p>rogue 2`, `<p>rogue 3`, `<p>rogue 2`];
    static rogueFeaturesList = [
        [`<li>
    Expertise <span id="enemy">TEST</span>
    </li><li>
    Sneak attack
    </li><li>
    Thieves' Cant
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
    static displayRogueFeaturesByLevel() {
        const classDetailsNode = document.getElementById("showClassDetails");
        for (let i = 0; i < characterLevel; i++) {
            classDetailsNode.innerHTML += Rogue.rogueFeaturesByLevel[i];
        }
    }


    // Full character actions----------------------------------------------------------------------------------------------------------------------
    static setRogueClass() {
        characterClass = ROGUE;
        Character.setCharacterHitdice(8);
        Character.setCharacterSavingThrows("Dexterity", "Intelligence");
        Character.setClassSkills("Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of hand", "Stealth");
        Character.setCharacterSkillsNumberToChoose(4);
        Character.setCharacterFeatures("Expertise", "Sneak Attack", "Thieves' Cant");
        Character.setCharacterLanguageProficiencies("Thieves");
        Character.setCharacterWeaponProficiencies("simpleWeapons", "handCrossbow", "longsword", "rapier", "shortsword");
        Character.setCharacterArmorProficiency("light");
    }
}