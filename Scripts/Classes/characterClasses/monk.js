class Monk extends Character {
    static monkFeaturesByLevel = [`<h1 class="text-center">Monk<span class="ml-2"><button class="collapseButton" type="button"
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
<p>Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade
    and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them,
    knocking their blows aside and sending them reeling,
    until at last she stands alone.</p>
<p>Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first
    charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his
    foes.</p>
<p>Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch
    and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade
    free of its cloth-wrapped scabbard and peers through
    the open window at the tyrant prince, so vulnerable in the grip of sleep.</p>
<p>Whatever their discipline, monks are united in their ability to magically harness the energy that
    flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler
    focus of defensive ability and speed, this energy
    infuses all that a monk does.</p>

<h5>The Magic of Ki</h5>
<p>Monks make careful study of a magical energy that most monastic traditions call ki. This energy
    is an element of the magic that suffuses the multiverse—specifically, the element that flows
    through living bodies. Monks harness this power within
    themselves to create magical effects and exceed their bodies' physical capabilities, and some of
    their special attacks can hinder the flow of ki in their opponents. Using this energy, monks
    channel uncanny speed and strength into their
    unarmed strikes. As they gain experience, their martial training and their mastery of ki gives
    them more power over their bodies and the bodies of their foes.</p>

<h5>Training and Asceticism</h5>
<p>Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of
    ordinary life, where time seems to stand still. The monks who live there seek personal
    perfection through contemplation and rigorous training. Many
    entered the monastery as children, sent to live there when their parents died, when food
    couldn't be found to support them, or in return for some kindness that the monks had performed
    for their families.</p>
<p>Some monks live entirely apart from the surrounding population, secluded from anything that might
    impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies
    or assassins at the command of their leader,
    a noble patron, or some other mortal or divine power.</p>
<p>The majority of monks don't shun their neighbors, making frequent visits to nearby towns or
    villages and exchanging their service for food and other goods. As versatile warriors, monks
    often end up protecting their neighbors from monsters
    or tyrants.</p>
<p>For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a
    wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave
    their cloisters take their work seriously, approaching
    their adventures as personal tests of their physical and spiritual growth. As a rule, monks care
    little for material wealth and are driven by a desire to accomplish a greater mission than
    merely slaying monsters and plundering their treasure.</p>

<p>Monks walk a path of contradiction. They study their art as a wizard does, and like a wizard,
    they wear no armor and typically eschew weapons. Yet they are deadly combatants, their abilities
    on a par with those of a raging barbarian or a superbly
    trained fighter. Monks embrace this seeming contradiction, for it speaks to the core of all
    monastic study. By coming to know oneself completely, one learns much of the wider world.</p>
<p>A monk's focus on inner mastery leads many such individuals to become detached from society, more
    concerned with their personal experience than with happenings elsewhere. Adventuring monks are a
    rare breed of an already rare type of character,
    taking their quest for perfection beyond the walls of the monastery into the world at large.</p>

<i>“Do not mistake my silence for acceptance of your villainy. While you blustered and threatened,
    I've planned four different ways to snap your neck with my bare hands.”</i>
<p>— Ember, grand master of flowers</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr>
        </tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>
                <div>Martial Arts</div>
            </th>
            <th>
                <div>Ki Points</div>
            </th>
            <th>
                <div>Unarmored Movement</div>
            </th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td><span>Unarmored Defense,<span>Martial Arts</span></td>
            <td>1d4</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>2nd</td>
            <td>+2</td>
            <td><span>Ki, </span><span>Unarmored Movement</span></td>
            <td>1d4</td>
            <td>2</td>
            <td>+10 ft.</td>
        </tr>
        <tr>
            <td>3rd</td>
            <td>+2</td>
            <td><span>Deflect Missiles, </span><span>Monastic Tradition</span></td>
            <td>1d4</td>
            <td>3</td>
            <td>+10 ft.</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>+2</td>
            <td><span>Ability Score Improvement, </span><span>Slow Fall</span></td>
            <td>1d4</td>
            <td>4</td>
            <td>+10 ft.</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>+3</td>
            <td><span>Extra Attack, </span><span>Stunning Strike</span></td>
            <td>1d6</td>
            <td>5</td>
            <td>+10 ft.</td>
        </tr>
        <tr>
            <td>6th</td>
            <td>+3</td>
            <td><span>Ki-Empowered Strikes, </span><span>Monastic Tradition feature</span></td>
            <td>1d6</td>
            <td>6</td>
            <td>+15 ft.</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>+3</td>
            <td><span>Evasion,</span><span>Stillness of Mind</span></td>
            <td>1d6</td>
            <td>7</td>
            <td>+15 ft.</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>+3</td>
            <td><span>Ability Score Improvement</span></td>
            <td>1d6</td>
            <td>8</td>
            <td>+15 ft.</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>+4</td>
            <td><span>Unarmored Movement improvement</span></td>
            <td>1d6</td>
            <td>9</td>
            <td>+15 ft.</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>+4</td>
            <td><span>Purity of Body</span></td>
            <td>1d6</td>
            <td>10</td>
            <td>+20 ft.</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>+4</td>
            <td><span>Monastic Tradition feature</span></td>
            <td>1d8</td>
            <td>11</td>
            <td>+20 ft.</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>+4</td>
            <td><span>Ability Score Improvement</span></td>
            <td>1d8</td>
            <td>12</td>
            <td>+20 ft.</td>
        </tr>
        <tr>
            <td>13th</td>
            <td>+5</td>
            <td><span>Tongue of the Sun and Moon</span></td>
            <td>1d8</td>
            <td>13</td>
            <td>+20 ft.</td>
        </tr>
        <tr>
            <td>14th</td>
            <td>+5</td>
            <td><span>Diamond Soul</span></td>
            <td>1d8</td>
            <td>14</td>
            <td>+25 ft.</td>
        </tr>
        <tr>
            <td>15th</td>
            <td>+5</td>
            <td><span>Timeless Body</span></td>
            <td>1d8</td>
            <td>15</td>
            <td>+25 ft.</td>
        </tr>
        <tr>
            <td>16th</td>
            <td>+5</td>
            <td><span>Ability Score Improvement</span></td>
            <td>1d8</td>
            <td>16</td>
            <td>+25 ft.</td>
        </tr>
        <tr>
            <td>17th</td>
            <td>+6</td>
            <td><span>Monastic Tradition feature</span></td>
            <td>1d10</td>
            <td>17</td>
            <td>+25 ft.</td>
        </tr>
        <tr>
            <td>18th</td>
            <td>+6</td>
            <td><span>Empty Body</span></td>
            <td>1d10</td>
            <td>18</td>
            <td>+30 ft.</td>
        </tr>
        <tr>
            <td>19th</td>
            <td>+6</td>
            <td><span>Ability Score Improvement</span></td>
            <td>1d10</td>
            <td>19</td>
            <td>+30 ft.</td>
        </tr>
        <tr>
            <td>20th</td>
            <td>+6</td>
            <td><span>Perfect Self</span></td>
            <td>1d10</td>
            <td>20</td>
            <td>+30 ft.</td>
        </tr>
    </tbody>
</table>
</div>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

    <h5>Unarmored Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p>
    </div>

    <h5>Martial Arts<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature2">
        <p>Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.</p>
        <p>You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield.</p>
        <ul>
            <li>You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.</li>
            <li>You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.</li>
            <li>When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an
                unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.</li>
        </ul>
        <p>Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama).</p>
    </div>

    <h5>Monk Weapons<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature3">
        <p>You can use this feature to define your monk weapons, rather than using the definition in Martial Arts.</p>
        <p>You practice your martial arts with specially chosen weapons, which become monk weapons for you. You can choose a number of weapons to be your monk weapons equal to 5 + your Wisdom modifier (minimum of five weapons). The chosen weapons
            must each meet the following criteria:</p>

        <ul>
            <li>The weapon must be a simple or martial weapon.</li>
            <li>You must be proficient with the weapon.</li>
            <li>The weapon must lack these properties: heavy, special, or two-handed.</li>
        </ul>
</div>`, `<p>monk 2`, `<p>monk 3`, `<p>monk 4`, `<p>monk 5`, `<p>monk 6`, `<p>monk 7`, `<p>monk 8`, `<p>monk 3`, `<p>monk 8`, `<p>monk 3`, `<p>monk 2`, `<p>monk 3`, `<p>monk 2`, `<p>monk 3`, `<p>monk 2`, `<p>monk 3`, `<p>monk 2`, `<p>monk 3`, `<p>monk 2`];
    static monkFeaturesList = [
        [`<li>
    Martial Arts
    </li><li>
    Unarmored Defense
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
}