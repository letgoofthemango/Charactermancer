class Warlock extends Character {
    static warlockFeaturesByLevel = [`<h1 class="text-center">Warlock<span class="ml-2"><button class="collapseButton" type="button"
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
<p>With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a
    magical charm into his honeyed words and bending the palace sentinel to his will.</p>
<p>As flames spring to life in her hands, a wizened human whispers the secret name of her demonic
    patron, infusing her spell with fiendish magic.</p>
<p>Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a
    wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.</p>
<p>Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through
    pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both
    subtle and spectacular. Drawing on the ancient knowledge
    of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm,
    warlocks piece together arcane secrets to bolster their own power.</p>

<h5>Sworn and Beholden</h5>
<p>A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between
    warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons
    for warlocks are not gods. A warlock might lead
    a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not
    typically served by clerics. More often, though, the arrangement is similar to that between a
    master and an apprentice. The warlock learns and grows
    in power, at the cost of occasional services performed on the patron's behalf.</p>
<p>The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being
    (such as the ability to see in darkness or to read any language) to access to powerful spells.
    Unlike bookish wizards, warlocks supplement their
    magic with some facility at hand-to-hand combat. They are comfortable in light armor and know
    how to use simple weapons.</p>

<h5>Delvers into Secrets</h5>
<p>Warlocks are driven by an insatiable need for knowledge and power, which compels them into their
    pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their
    later careers as well.</p>
<p>Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve
    patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful
    tower, meets its fey lord or lady, and stumbles into
    a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden
    lore, a brilliant but crazed student's mind is opened to realities beyond the material world and
    to the alien beings that dwell in the outer void.</p>
<p>Warlocks are finders and keepers of secrets. They push at the edge of our understanding of the
    world, always seeking to expand their expertise. Where sages or wizards might heed a clear sign
    of danger and end their research, a warlock plunges
    ahead, heedless of the cost. Thus, it takes a peculiar mixture of intelligence, curiosity, and
    recklessness to produce a warlock. Many folk would describe that combination as evidence of
    madness. Warlocks see it as a demonstration of bravery.</p>
<p>Warlocks are defined by two elements that work in concert to forge their path into this class.
    The first element is the event or circumstances that led to a warlock's entering into a pact
    with a planar entity. The second one is the nature
    of the entity a warlock is bound to. Unlike clerics, who typically embrace a deity and that
    god's ethos, a warlock might have no love for a patron, or vice versa.</p>

<i>“You think me mad? I think true insanity is being content to live a life of mortal drudgery when
    knowledge and power is there for the taking in the realm beyond.”</i>
<p>— Xarren, herald of Acamar</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr>
            <th colspan="3"></th>
            <!-- spacer to match the 3 default cols (level, prof, features) -->
            <th colspan="5"></th>
        </tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>Cantrips Known</th>
            <th>Spells Known</th>
            <th>Spell Slots</th>
            <th>Slot Level</th>
            <th>Invocations Known</th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td>Pact Magic, Otherworldly Patron</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>1st</td>
            <td>—</td>
        </tr>
        <tr>
            <td>2nd</td>
            <td>+2</td>
            <td>Eldritch Invocations</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>1st</td>
            <td>2</td>
        </tr>
        <tr>
            <td>3rd</td>
            <td>+2</td>
            <td>Pact Boon</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
            <td>2nd</td>
            <td>2</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>+2</td>
            <td>Ability Score Improvement</td>
            <td>3</td>
            <td>5</td>
            <td>2</td>
            <td>2nd</td>
            <td>2</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>+3</td>
            <td>—</td>
            <td>3</td>
            <td>6</td>
            <td>2</td>
            <td>3rd</td>
            <td>3</td>
        </tr>
        <tr>
            <td>6th</td>
            <td>+3</td>
            <td>Otherworldly Patron feature</td>
            <td>3</td>
            <td>7</td>
            <td>2</td>
            <td>3rd</td>
            <td>3</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>+3</td>
            <td>—</td>
            <td>3</td>
            <td>8</td>
            <td>2</td>
            <td>4th</td>
            <td>4</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>+3</td>
            <td>Ability Score Improvement</td>
            <td>3</td>
            <td>9</td>
            <td>2</td>
            <td>4th</td>
            <td>4</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>+4</td>
            <td>—</td>
            <td>3</td>
            <td>10</td>
            <td>2</td>
            <td>5th</td>
            <td>5</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>+4</td>
            <td>Otherworldly Patron feature</td>
            <td>4</td>
            <td>10</td>
            <td>2</td>
            <td>5th</td>
            <td>5</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>+4</td>
            <td>Mystic Arcanum (6th level)</td>
            <td>4</td>
            <td>11</td>
            <td>3</td>
            <td>5th</td>
            <td>5</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>+4</td>
            <td>Ability Score Improvement</td>
            <td>4</td>
            <td>11</td>
            <td>3</td>
            <td>5th</td>
            <td>6</td>
        </tr>
        <tr>
            <td>13th</td>
            <td>+5</td>
            <td>Mystic Arcanum (7th level)</td>
            <td>4</td>
            <td>12</td>
            <td>3</td>
            <td>5th</td>
            <td>6</td>
        </tr>
        <tr>
            <td>14th</td>
            <td>+5</td>
            <td>Otherworldly Patron feature</td>
            <td>4</td>
            <td>12</td>
            <td>3</td>
            <td>5th</td>
            <td>6</td>
        </tr>
        <tr>
            <td>15th</td>
            <td>+5</td>
            <td>Mystic Arcanum (8th level)</td>
            <td>4</td>
            <td>13</td>
            <td>3</td>
            <td>5th</td>
            <td>7</td>
        </tr>
        <tr>
            <td>16th</td>
            <td>+5</td>
            <td>Ability Score Improvement</td>
            <td>4</td>
            <td>13</td>
            <td>3</td>
            <td>5th</td>
            <td>7</td>
        </tr>
        <tr>
            <td>17th</td>
            <td>+6</td>
            <td>Mystic Arcanum (9th level)</td>
            <td>4</td>
            <td>14</td>
            <td>4</td>
            <td>5th</td>
            <td>7</td>
        </tr>
        <tr>
            <td>18th</td>
            <td>+6</td>
            <td>—</td>
            <td>4</td>
            <td>14</td>
            <td>4</td>
            <td>5th</td>
            <td>8</td>
        </tr>
        <tr>
            <td>19th</td>
            <td>+6</td>
            <td>Ability Score Improvement</td>
            <td>4</td>
            <td>15</td>
            <td>4</td>
            <td>5th</td>
            <td>8</td>
        </tr>
        <tr>
            <td>20th</td>
            <td>+6</td>
            <td>Eldritch Master</td>
            <td>4</td>
            <td>15</td>
            <td>4</td>
            <td>5th</td>
            <td>8</td>
        </tr>
    </tbody>
</table>
</div>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Otherworldly Patron<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
            data-target="#featurePatron" aria-expanded="true" aria-controls="featurePatron">[-]</button></span></h5>
        <hr>

        <div class="collapse show mb-2" id="featurePatron">
            <p>At 1st level, you have struck a bargain with an otherworldly being chosen from the list of available patrons. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.</p>
            <div class="d-flex justify-content-around row">
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="archfey">Archfey</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="celestial">Celestial</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="fathomless">Fathomless</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="fiend">Fiend</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="genie">Genie</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="greatOldOne">Great Old One</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="hexBlade">Hexblade</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="ravenQueen">Raven Queen</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="seeker">Seeker</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="undead">Undead</button>
                <button onclick="Warlock.setWarlockSubclass(this.id)" type="button" class="btn btn-secondary" id="undying">Undying</button>
            </div>
            <div id="warlockPatron" class="choiceBG"></div>
        </div>

<h5>Pact Magic<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
<p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 of the Player's Handbook for the general rules of spellcasting.</p>

<h6><b>Cantrips</b></h6>
<p>You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p>

<h6><b>Spell Slots</b></h6>
<p>The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock
spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p>
<p>For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>

<h6><b>Spells Known of 1st Level and Higher</b></h6>
<p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p>
<p>The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level.
When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.</p>
<p>Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p>

<h6><b>Spellcasting Ability</b></h6>
<p>Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell
you cast and when making an attack roll with one.</p>
<p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
<p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>


<h6><b>Spellcasting Focus</b></h6>
<p>You can use an arcane focus as a spellcasting focus for your warlock spells.</p>

<h6><b>Spell Versatility</b></h6>
<p>Whenever you finish a long rest, you can replace one spell you learned from this Pact Magic feature with another spell from the warlock spell list. The new spell must be the same level as the spell you replace.</p>
</div>


</div>`, `<p>warlock 2`, `<p>warlock 3`, `<p>warlock 4`, `<p>warlock 5`, `<p>warlock 6`, `<p>warlock 7`, `<p>warlock 8`, `<p>warlock 3`, `<p>warlock 2`, `<p>warlock 3`, `<p>warlock 2`, `<p>warlock 3`, `<p>warlock 2`, `<p>warlock 3`, `<p>warlock 2`, `<p>warlock 3`, `<p>warlock 2`, `<p>warlock 3`, `<p>warlock 2`];
    static archfey = `<h4 class="text-center">The Archfey<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten
before the mortal races were born. This being's motivations are often inscrutable, and sometimes
whimsical, and might involve a striving for greater magical power or the settling of age-old grudges.
Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming
Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and
ancient hags.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">faerie fire, sleep</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">calm emotions, phantasmal force</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">blink, plant growth</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">dominate beast, greater invisibility</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">dominate person, seeming</td>
    </tr>
</tbody>
</table>
</div>

<h5>Fey Presence<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featurePresence" aria-expanded="true"
    aria-controls="featurePresence">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featurePresence">
<p>Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5>Misty Escape<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureEscape" aria-expanded="true"
    aria-controls="featureEscape">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureEscape">
<p>Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5>Beguiling Defenses<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#featureBeguiling" aria-expanded="true" aria-controls="featureBeguiling">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureBeguiling">
<p>Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.</p>
</div>

<h5 class="mt-2">Dark Delirium<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureDelirium" aria-expanded="true"
    aria-controls="featureDelirium">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureDelirium">
<p>Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.</p>
<p>Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.</p>
<p>You must finish a short or long rest before you can use this feature again.</p>
</div>
</div>`;
    static celestial = `<h4 class="text-center">The Celestial<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, unicorn, or other entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.</p>
<p>Being connected to such power can cause changes in your behavior and beliefs. You might find yourself driven to annihilate the undead, to defeat fiends, and to protect the innocent. At times, your heart might also be filled with a longing for the celestial realm of your patron, and a desire to wander that paradise for the rest of your days. But you know that your mission is among mortals for now, and that your pact binds you to bring light to the dark places of the world.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">cure wounds, guiding bolt</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">flaming sphere, lesser restoration</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">daylight, revivify</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">guardian of faith, wall of fire</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">flame strike, greater restoration</td>
    </tr>
</tbody>
</table>
</div>

<h5>Bonus Cantrips<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureCantrips" aria-expanded="true"
    aria-controls="featureCantrips">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureCantrips">
<p>At 1st level, you learn the sacred flame and light cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known.</p>
</div>

<h5>Healing Light<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureLight" aria-expanded="true"
    aria-controls="featureLight">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureLight">
<p>At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.</p>
<p>As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.</p>
<p>Your pool regains all expended dice when you finish a long rest.</p>
</div>

<h5>Radiant Soul<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRadiant" aria-expanded="true"
    aria-controls="featureRadiant">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureRadiant">
<p>Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets.</p>
</div>

<h5>Celestial Resilience<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureResilience" aria-expanded="true" aria-controls="featureResilience">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureResilience">
<p>Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier.</p>
</div>

<h5 class="mt-2">Searing Vengeance<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSearing" aria-expanded="true"
    aria-controls="featureSearing">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureSearing">
<p>Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and it is blinded until the end of the current turn.</p>
<p>Once you use this feature, you can't use it again until you finish a long rest.</p>
</div>
</div>`;
    static fathomless = `<h4 class="text-center">The Fathomless<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>You have plunged into a pact with the deeps. An entity of the ocean, the Elemental Plane of Water, or
another otherworldly sea now allows you to draw on its thalassic power. Is it merely using you to learn
about terrestrial realms, or does it want you to open cosmic floodgates and drown the world?</p>
<p>Perhaps you were born into a generational cult that venerates the Fathomless and its spawn. Or you might
have been shipwrecked and on the brink of drowning when your patron's grasp offered you a chance at
life. Whatever the reason for your pact, the sea and its unknown depths call to you.</p>
<p>Entities of the deep that might empower a warlock include krakens, ancient water elementals, godlike
hallucinations dreamed into being by kuo-toa, merfolk demigods, and sea hag covens.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Fathomless lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">create or destroy water, thunderwave</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">gust of wind, silence</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">lightning bolt, sleet storm</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">control water, summon elemental (water only)</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">	Bigby's hand (appears as a tentacle), cone of cold</td>
    </tr>
</tbody>
</table>
</div>

<h5>Tentacle of the Deeps<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureTentacle" aria-expanded="true"
    aria-controls="featureTentacle">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureTentacle">
<p>You can magically summon a spectral tentacle that strikes at your foes. As a bonus action, you create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle.</p>
<p>When you create the tentacle, you can make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to 2d8.</p>
<p>As a bonus action on your turn, you can move the tentacle up to 30 feet and repeat the attack.</p>
<p>You can summon the tentacle a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>
</div>

<h5>Gift of the Sea<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureGift" aria-expanded="true"
    aria-controls="featureGift">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureGift">
<p>You gain a swimming speed of 40 feet, and you can breathe underwater.</p>
</div>

<h5>Oceanic Soul<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureOceanic" aria-expanded="true"
    aria-controls="featureOceanic">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureOceanic">
<p>Starting at 6th level you are now even more at home in the depths. You gain resistance to cold damage. In addition, when you are fully submerged, any creature that is also fully submerged can understand your speech, and you can understand theirs.</p>
</div>

<h5>Guardian Coil<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureCoil" aria-expanded="true"
    aria-controls="featureCoil">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureCoil">
<p>At 6th level your Tentacle of the Deeps can defend you and others, interposing itself between them and harm. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by 1d8. When you reach 10th level in this class, the damage reduced by the tentacle increases to 2d8.</p>
</div>

<h5 class="mt-2">Grasping Tentacles<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureGrasping" aria-expanded="true"
    aria-controls="featureGrasping">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureGrasping">
<p>You learn the spell Evard's black tentacles. It counts as a warlock spell for you, but it doesn't count against the number of spells you know. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.</p>
<p>Whenever you cast this spell, your patron's magic bolsters you, granting you a number of temporary hit points equal to your warlock level. Moreover, damage can't break your concentration on this spell.</p>
</div>

<h5 class="mt-2">Fathomless Plunge<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featurePlunge" aria-expanded="true"
    aria-controls="featurePlunge">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featurePlunge">
<p>You can magically open temporary conduits to watery destinations. As an action, you can teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 30 feet of it, each of you appearing in an unoccupied space within 30 feet of the others.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>
</div>`;
    static fiend = `<h4 class="text-center">The Fiend<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even
if you strive against those aims. Such beings desire the corruption or destruction of all things,
ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon,
Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial;
pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">burning hands, command</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">blindness/deafness, scorching ray</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">fireball, stinking cloud</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10"> fire shield, wall of fire</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">flame strike, hallow</td>
    </tr>
</tbody>
</table>
</div>

<h5>Dark One's Blessing<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureBlessing" aria-expanded="true"
    aria-controls="featureBlessing">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureBlessing">
<p>Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit
points equal to your Charisma modifier + your warlock level (minimum of 1).</p>
</div>

<h5>Dark One's Own Luck<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureLuck" aria-expanded="true"
    aria-controls="featureLuck">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureLuck">
<p>Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an
ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so
after seeing the initial roll but before any of the roll's effects occur.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5>Fiendish Resilience<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureResilience" aria-expanded="true"
    aria-controls="featureResilience">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureResilience">
<p>Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain
resistance to that damage type until you choose a different one with this feature. Damage from
magical weapons or silver weapons ignores this resistance.</p>
</div>

<h5>Hurl Through Hell<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHurl" aria-expanded="true"
    aria-controls="featureHurl">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHurl">
<p>Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly
transport the target through the lower planes. The creature disappears and hurtles through a
nightmare landscape.</p>
<p>At the end of your next turn, the target returns to the space it previously occupied, or the nearest
unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its
horrific experience.</p>
<p>Once you use this feature, you can't use it again until you finish a long rest.</p>
</div>
</div>`;
    static genie = `<h4 class="text-center">The Genie<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>You have made a pact with one of the rarest kinds of genie, a noble genie. Such entities rule vast fiefs
on the Elemental Planes and have great influence over lesser genies and elemental creatures. Noble
genies are varied in their motivations, but most are arrogant and wield power that rivals that of lesser
deities. They delight in turning the table on mortals, who often bind genies into servitude, and readily
enter into pacts that expand their reach.</p>
<p>You choose your patron's kind or determine it randomly, using the Genie Kind table.</p>
<table class="table-striped table-hover mb-2">
<thead>
<tr>
    <th class="col-2 text-center" data-rd-isroller="true"><span class="roller render-roller"
            title="Click to roll. SHIFT/CTRL to roll twice." onmousedown="event.preventDefault()"
            onclick="Renderer.dice.pRollerClickUseData(event, this)"
            data-packed-dice="{&quot;type&quot;:&quot;dice&quot;,&quot;rollable&quot;:true,&quot;toRoll&quot;:&quot;d4&quot;}">d4</span>
    </th>
    <th class="col-5" data-rd-isroller="false">Kind</th>
    <th class="col-5" data-rd-isroller="false">Element</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="col-2 text-center">1</td>
    <td class="col-5">Dao</td>
    <td class="col-5">Earth</td>
</tr>
<tr>
    <td class="col-2 text-center">2</td>
    <td class="col-5">Djinni</td>
    <td class="col-5">Air</td>
</tr>
<tr>
    <td class="col-2 text-center">3</td>
    <td class="col-5">Efreeti</td>
    <td class="col-5">Fire</td>
</tr>
<tr>
    <td class="col-2 text-center">4</td>
    <td class="col-5">Marid</td>
    <td class="col-5">Water</td>
</tr>
</tbody>
</table>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Genie lets you choose from an expanded list of spells when you learn a warlock spell. The Genie
Expanded Spells table shows the genie spells that are added to the warlock spell list for you, along
with the spells associated in the table with your patron's kind: dao, djinni, efreeti, or marid.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-1 text-center" data-rd-isroller="false">Spell Level</th>
        <th class="col-2-2" data-rd-isroller="false">Genie Spells</th>
        <th class="col-2-2" data-rd-isroller="false">Dao Spells</th>
        <th class="col-2-2" data-rd-isroller="false">Djinni Spells</th>
        <th class="col-2-2" data-rd-isroller="false">Efreeti Spells</th>
        <th class="col-2-2" data-rd-isroller="false">Marid Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-1 text-center">1st</td>
        <td class="col-2-2">detect evil and good</td>
        <td class="col-2-2">sanctuary</td>
        <td class="col-2-2">thunderwave</td>
        <td class="col-2-2">burning hands</td>
        <td class="col-2-2">fog cloud</td>
    </tr>
    <tr>
        <td class="col-1 text-center">2nd</td>
        <td class="col-2-2">phantasmal force</td>
        <td class="col-2-2">spike growth</td>
        <td class="col-2-2">gust of wind</td>
        <td class="col-2-2">scorching ray</td>
        <td class="col-2-2">blur</td>
    </tr>
    <tr>
        <td class="col-1 text-center">3rd</td>
        <td class="col-2-2">create food and water</td>
        <td class="col-2-2">meld into stone</td>
        <td class="col-2-2">wind wall
        </td>
        <td class="col-2-2">fireball</td>
        <td class="col-2-2">sleet storm</td>
    </tr>
    <tr>
        <td class="col-1 text-center">4th</td>
        <td class="col-2-2">phantasmal killer
        </td>
        <td class="col-2-2">stone shape
        </td>
        <td class="col-2-2">greater invisibility
        </td>
        <td class="col-2-2">fire shield</td>
        <td class="col-2-2">control water</td>
    </tr>
    <tr>
        <td class="col-1 text-center">5th</td>
        <td class="col-2-2">creation</td>
        <td class="col-2-2">wall of stone</td>
        <td class="col-2-2">seeming</td>
        <td class="col-2-2">flame strike</td>
        <td class="col-2-2">cone of cold</td>
    </tr>
    <tr>
        <td class="col-1 text-center">9th</td>
        <td class="col-2-2">wish</td>
        <td class="col-2-2">—</td>
        <td class="col-2-2">—</td>
        <td class="col-2-2">—</td>
        <td class="col-2-2">—</td>
    </tr>
</tbody>
</table>
</div>

<h5>Genie's Vessel<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureVessel" aria-expanded="true"
    aria-controls="featureVessel">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureVessel">
<p>Your patron gifts you a magical vessel that grants you a measure of the genie's power. The vessel is
a Tiny object, and you can use it as a spellcasting focus for your warlock spells. You decide what
the object is, or you can determine what it is randomly by rolling on the Genie's Vessel table.</p>
<table class="table-striped table-hover mb-2">
<caption>Genie's Vessel</caption>
<thead>
    <tr>
        <th class="col-2 text-center"><span>d6</span>
        </th>
        <th class="col-10">Vessel</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1</td>
        <td class="col-10">Oil lamp</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2</td>
        <td class="col-10">Urn</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3</td>
        <td class="col-10">Ring with a compartment</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4</td>
        <td class="col-10">Stoppered bottle</td>
    </tr>
    <tr>
        <td class="col-2 text-center">5</td>
        <td class="col-10">Hollow statuette</td>
    </tr>
    <tr>
        <td class="col-2 text-center">6</td>
        <td class="col-10">Ornate lantern</td>
    </tr>
</tbody>
</table>
<p>While you are touching the vessel, you can use it in the following ways:</p>
<p><b>Bottled Respite.</b> As an action, you can magically vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is appointed with cushions and low tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus. You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space. Once you enter the vessel, you can't enter again until you finish a long rest.</p>
<p>Genie's Wrath. Once during each of your turns when you hit with an attack roll, you can deal extra damage to the target equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).The vessel's AC equals your spell save DC. Its hit points equal your warlock level plus your proficiency bonus, and it is immune to poison and psychic damage.</p>
<p>If the vessel is destroyed or you lose it, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental power when you die.</p>
</div>

<h5>Elemental Gift<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureGift" aria-expanded="true"
    aria-controls="featureGift">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureGift">
<p>When you reach 6th level, you begin to take on characteristics of your patron's kind. You now have resistance to a damage type determined by your patron's kind: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).</p>
<p>In addition, as a bonus action, you can give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>
</div>

<h5>Sanctuary Vessel<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSanctuary" aria-expanded="true"
    aria-controls="featureSanctuary">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureSanctuary">
<p>Starting at 10th level, When you enter your Genie's Vessel via the Bottled Respite feature, you can now choose up to five willing creatures that you can see within 30 feet of you, and the chosen creatures are drawn into the vessel with you.</p>
<p>As a bonus action, you can eject any number of creatures from the vessel, and everyone is ejected if you leave or die or if the vessel is destroyed.</p>
<p>In addition, anyone (including you) who remains within the vessel for at least 10 minutes gains the benefit of finishing a short rest, and anyone can add your proficiency bonus to the number of hit points they regain if they spend any Hit Dice as part of a short rest there.</p>
</div>

<h5>Limited Wish<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWish" aria-expanded="true"
    aria-controls="featureWish">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureWish">
<p>You entreat your patron to grant you a small wish. As an action, you can speak your desire to your Genie's Vessel, requesting the effect of one spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components; the spell simply takes effect as part of this action.</p>
<p>Once you use this feature, you can't use it again until you finish 1d4 long rests.</p>
</div>
</div>`;
    static greatOldOne = `<h4 class="text-center">The Great Old One<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might
come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in
legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even
the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be
unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to
draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun,
the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable
beings.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">dissonant whispers, Tasha's hideous laughter</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">detect thoughts, phantasmal force</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">clairvoyance, sending</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">dominate beast, Evard's black tentacles</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10"> dominate person, telekinesis</td>
    </tr>
</tbody>
</table>
</div>

<h5>Awakened Mind<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureAwakend" aria-expanded="true"
    aria-controls="featureAwakend">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureAwakend">
<p>Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other
creatures. You can communicate telepathically with any creature you can see within 30 feet of you.
You don't need to share a language with the creature for it to understand your telepathic
utterances, but the creature must be able to understand at least one language.</p>
</div>

<h5>Entropic Ward<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureEntropic" aria-expanded="true"
    aria-controls="featureEntropic">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureEntropic">
<p>At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed
strike into good luck for yourself. When a creature makes an attack roll against you, you can use
your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll
against the creature has advantage if you make it before the end of your next turn.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5>Thought Shield<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureShield" aria-expanded="true"
    aria-controls="featureShield">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureShield">
<p>Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it.
You also have resistance to psychic damage, and whenever a creature deals psychic damage to you,
that creature takes the same amount of damage that you do.</p>
</div>

<h5>Create Thrall<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHurl" aria-expanded="true"
    aria-controls="featureHurl">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHurl">
<p>At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron.
You can use your action to touch an incapacitated humanoid. That creature is then charmed by you
until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this
feature again.</p>
<p>You can communicate telepathically with the charmed creature as long as the two of you are on the
same plane of existence.</p>
</div>
</div>`;
    static hexBlade = `<h4 class="text-center">The Hexblade<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>You have made your pact with a mysterious entity from the Shadowfell—a force that manifests in sentient magic weapons carved from the stuff of shadow. The mighty sword Blackrazor is the most notable of these weapons, which have been spread across the multiverse over the ages. The shadowy force behind these weapons can offer power to warlocks who form pacts with it. Many hexblade warlocks create weapons that emulate those formed in the Shadowfell. Others forgo such arms, content to weave the dark magic of that plane into their spellcasting.</p>
<p>Because the Raven Queen is known to have forged the first of these weapons, many sages speculate that she and the force are one and that the weapons, along with hexblade warlocks, are tools she uses to manipulate events on the Material Plane to her inscrutable ends.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">shield, wrathful smite</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">blur, branding smite</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">blink, elemental weapon</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">phantasmal killer, staggering smite</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">banishing smite, cone of cold</td>
    </tr>
</tbody>
</table>
</div>

<h5>Hexblade's Curse<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureCurse" aria-expanded="true"
    aria-controls="featureCurse">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureCurse">
<p>Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:</p>
<ul>
<li>You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.</l>
<li>Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.</l>
<li>If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).</l>
</ul>
<p>You can't use this feature again until you finish a short or long rest.</p>
</div>

<h5>Hex Warrior<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWarrior" aria-expanded="true"
    aria-controls="featureWarrior">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureWarrior">
<p>At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.</p>
<p>The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.</p>
</div>

<h5>Accursed Specter<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpecter" aria-expanded="true"
    aria-controls="featureSpecter">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureSpecter">
<p>Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it to your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter, the statistics for which are in the Monster Manual. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).</p>
<p>The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.</p>
<p>Once you bind a specter with this feature, you can't use the feature again until you finish a long rest.</p>
</div>

<h5>Armor of Hexes<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureArmor" aria-expanded="true"
    aria-controls="featureArmor">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureArmor">
<p>At 10th level, your hex grows more powerful. If the target cursed by your Hexblade's Curse hits you with an attack roll, you can use your reaction to roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll.</p>
</div>

<h5>Master of Hexes<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureMaster" aria-expanded="true"
    aria-controls="featureMaster">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureMaster">
<p>Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature.</p>
</div>
</div>`;
    static ravenQueen = `<h4 class="text-center">The Raven Queen<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>Your patron is the Raven Queen, a mysterious being who rules the Shadowfell from a palace of ice deep within that dread realm. The Raven Queen watches over the world, anticipating each creature's death and ensuring that it meets its end at the proscribed time and place. As the ruler of the Shadowfell, she dwells in a decayed, dark reflection of the world. Her ability to reach into the world is limited. Thus, she turns to mortal warlocks to serve her will. Warlocks sworn to the Raven Queen receive visions and whispers from her in their dreams, sending them on quests and warning them of impending dangers.</p>
<p>The Raven Queen's followers are expected to serve her will in the world. She concerns herself with ensuring that those fated to die pass from the world as expected, and bids her agents to defeat those who seek to cheat death through undeath or other imitations of immortality. She hates intelligent undead and expects her followers to strike them down, whereas mindless undead such as skeletons and zombies are little more than stumbling automatons in her eyes.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Raven Queen lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">false life, sanctuary</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">silence, spiritual weapon</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">feign death, speak with dead</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">ice storm, locate creature</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">commune, cone of cold</td>
    </tr>
</tbody>
</table>
</div>

<h5>Sentinel Raven<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRaven" aria-expanded="true"
    aria-controls="featureRaven">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureRaven">
<p>Starting at 1st level, you gain the service of a spirit sent by the Raven Queen to watch over you. The spirit assumes the form and game statistics of a raven, and it always obeys your commands, which you can give telepathically while it is within 100 feet of you.</p>
<p>While the raven is perched on your shoulder, you gain darkvision with a range of 30 feet and a bonus to your passive Wisdom (Perception) score and to Wisdom (Perception) checks. The bonus equals your Charisma modifier. While perched on your shoulder, the raven can't be targeted by any attack or other harmful effect; only you can cast spells on it; it can't take damage; and it is incapacitated.</p>
<p>You can see through the raven's eyes and hear what it hears while it is within 100 feet of you. In combat, you roll initiative for the raven and control how it acts. If it is slain by a creature, you gain advantage on all attack rolls against the killer for the next 24 hours.</p>
<p>The raven doesn't require sleep. While it is within 100 feet of you, it can awaken you from sleep as a bonus action. The raven vanishes when it dies, if you die, or if the two of you are separated by more than 5 miles.</p>
<p>At the end of a short or long rest, you can call the raven back to you—no matter where it is or whether it died—and it reappears within 5 feet of you.</p>
</div>

<h5>Soul of the Raven<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRavenSoul" aria-expanded="true"
    aria-controls="featureRavenSoul">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureRavenSoul">
<p>At 6th level, you gain the ability to merge with your raven spirit. As a bonus action when your raven is perched on your shoulder, your body merges with your raven's form. While merged, you become Tiny, you replace your speed with the raven's, and you can use your action only to Dash, Disengage, Dodge, Help, Hide, or Search. During this time, you gain the benefits of your raven being perched on your shoulder. As an action, you and the raven return to normal.</p>
</div>

<h5>Raven's Shield<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureShield" aria-expanded="true"
    aria-controls="featureShield">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureShield">
<p>At 10th level, the Raven Queen grants you a protective blessing. You gain advantage on death saving throws, immunity to the frightened condition, and resistance to necrotic damage.</p>
</div>

<h5>Queen's Right Hand<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHand" aria-expanded="true"
    aria-controls="featureHand">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHand">
<p>Starting at 14th level, you can channel the Raven Queen's power to slay a creature. You can cast finger of death. After you cast the spell with this feature, you can't do so again until you finish a long rest.</p>
</div>
</div>`;
    static seeker = `<h4 class="text-center">The Seeker<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>Your patron is an inscrutable being who travels the Astral Plane in search of knowledge and secrets. In return for your patron's gifts, you wander the world seeking lore that you can share with the Seeker.</p>
<p>Your patron could be any deity or other powerful entity dedicated to knowledge or forgotten lore. Celestian is an ideal patron for a Greyhawk campaign, and was the inspiration for this concept. In the Forgotten Realms, your patron might be Azuth or Oghma. Aureon makes an excellent patron in Eberron, while in Krynn and the Dragonlance campaign setting, Gilean is a good match for the Seeker's role.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Seeker lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">feather fall, jump</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">levitate, locate object</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">clairvoyance, sending</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">arcane eye, locate creature</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">legend lore, passwall</td>
    </tr>
</tbody>
</table>
</div>

<h5>Shielding Aurora<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureAurora" aria-expanded="true"
    aria-controls="featureAurora">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureAurora">
<p>Starting at 1st level, you can invoke the Seeker's power to protect you from harm. As a bonus action, you create a whirling aurora of brilliant energy that swirls around you. Until the end of your next turn, you gain resistance to all damage, and if a hostile creature ends its turn within 10 feet of you, it takes radiant damage equal to your warlock level + your Charisma modifier.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5>Astral Refuge<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRefuge" aria-expanded="true"
    aria-controls="featureRefuge">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureRefuge">
<p>At 6th level, you gain the ability to step into an astral refuge. As an action, you disappear from the world for a brief moment and enter the Astral Plane, taking advantage of its timeless nature. While in your astral refuge, you can take two actions to cast spells that target only you. After using those two actions, you return to the space you occupied and your turn ends.</p>
</div>

<h5>Far Wanderer<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWanderer" aria-expanded="true"
    aria-controls="featureWanderer">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureWanderer">
<p>At 10th level, you no longer need to breathe, and you gain resistance to fire damage and cold damage.</p>
</div>

<h5>Astral Sequestration<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHand" aria-expanded="true"
    aria-controls="featureHand">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHand">
<p>Starting at 14th level, you gain the ability to sequester yourself and your allies on the Astral Plane.</p>
<p>By performing a special ritual over the course of 5 minutes, you shift yourself and up to ten willing creatures you can see to the Astral Plane. You and those creatures gain the benefits of a short rest while sequestered on the Astral Plane. You then return to the spaces you all occupied when you used this ability, with no time having passed in the world.</p>
<p>During this short rest, you and the creatures you sequester can make use of any options available during a rest that affect only you and the creatures you sequester.</p>
<p>Once you use this ability, you cannot use it again until you complete a long rest.</p>
</div>
</div>`;
    static undead = `<h4 class="text-center">The Undead<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>The Undead is an entity that resides in the dark corners of the multiverse. Your patron could be Acererak, Azalin, Lord Soth, Strahd, or some other ancient undead being. You may seek to gain knowledge from your patron's countless lifetimes of experience, while it may see you as a piece of a centuries long plan.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Undead lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">bane, false life</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">blindness/deafness, phantasmal force</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">speak with dead, phantom steed</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">death ward, greater invisibility</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">antilife shell, cloudkill</td>
    </tr>
</tbody>
</table>
</div>

<h5>Form of Dread<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureDread" aria-expanded="true"
    aria-controls="featureDread">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureDread">
<p>You manifest an aspect of your patron's dreadful power. As a bonus action, you transform for 1 minute. You gain the following benefits while transformed:</p>
<ul>
<li>You gain temporary hit points equal to 1d10 + your warlock level.</li>
<li>Once during each of your turns, when you hit a creature with an attack, you can force it to make a Wisdom saving throw, and if the saving throw fails, the target is frightened of you until the end of your next turn.</li>
<li>You are immune to the frightened condition.</li>
</ul>
<p>You can transform a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>
<p>The appearance of your Form of Dread reflects some aspect of your patron. For example, your form could be a shroud of shadows forming the crown and robes of your lich patron, or your face might transform into bat-like features due to your vampire patron.</p>
</div>

<h5>Grave Touched<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureTouched" aria-expanded="true"
    aria-controls="featureTouched">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureTouched">
<p>At 6th level, your patron's powers have a profound effect on your body and magic. You don't need to eat, drink, or breathe.</p>
<p>In addition, when you hit a creature with an attack and roll damage against the creature, you can replace the damage type with necrotic damage. While you are using your Form of Dread, you can roll one additional damage die when determining the necrotic damage the target takes.</p>
</div>

<h5>Mortal Husk<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHusk" aria-expanded="true"
    aria-controls="featureHusk">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHusk">
<p>At 10th level, your connection to undeath and necrotic energy now saturates your body. You have resistance to necrotic damage. If you are transformed using your Form of Dread, you instead become immune to necrotic damage.</p>
<p>In addition, when you are reduced to 0 hit points, you can cause your body to explode. Each creature within 30 feet of you takes necrotic damage equal to 2d10 + your warlock level. You then revive with 1 hit point in your previous space, along with your gear, and you gain 1 level of exhaustion. Once you revive this way, you can't do so again until you finish 1d4 long rests.</p>
</div>

<h5>Spirit Projection<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureProjection" aria-expanded="true"
    aria-controls="featureProjection">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureProjection">
<p>Starting at 14th level, your body is now simply a vessel for your spirit. As an action, you can project your spirit from your body. The body you leave behind is unconscious and in a state of suspended animation.</p>
<p>Your spirit can remain outside your body for up to 1 hour or until your concentration is broken (as if concentrating on a spell). When your projection ends, your spirit returns to your body or your body magically teleports to your spirit's space (your choice).</p>
<p>While projecting your spirit, you gain the following benefits:</p>
<ul>
<li>Your spirit and body gain resistance to bludgeoning, piercing, and slashing damage.</li>
<li>When you cast a spell of the conjuration or necromancy school, the spell doesn't require verbal, somatic, or material components that lack a gold cost.</li>
<li>You have a flying speed equal to your walking speed and can hover. You can move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.</li>
<li>While you are using your Form of Dread, once during each of your turns when you deal necrotic damage to a creature, you regain hit points equal to half the amount of necrotic damage dealt.</li>
</ul>
<p>Once you use this feature, you can't do so again until you finish a long rest.</p>
</div>
</div>`;
    static undying = `<h4 class="text-center">The Undying<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Patron" aria-expanded="true"
aria-controls="Patron">[-]</button></span></h4>
<div class="collapse show" id="Patron">
<p>Death holds no sway over your patron, who has unlocked the secrets of everlasting life, although such a prize—like all power—comes at a price. Once mortal, the Undying has seen mortal lifetimes pass like the seasons, like the flicker of endless days and nights. It has the secrets of the ages to share, secrets of life and death. Beings of this sort include Vecna, Lord of the Hand and the Eye; the dread Iuz; the lich-queen Vol; the Undying Court of Aerenal; Vlaakith, lich-queen of the githyanki; and the deathless wizard Fistandantalus.</p>
<p>In the Realms, Undying patrons include Larloch the Shadow King, legendary master of Warlock's Crypt, and Gilgeam, the God-King of Unther.</p>


<h5>Expanded Spell List<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpellList" aria-expanded="true"
    aria-controls="featureSpellList">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpellList">
<p>The Undying lets you choose from an expanded list of spells when you learn a warlock spell. The
following spells are added to the warlock spell list for you.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center">Spell Level</th>
        <th class="col-10">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">false life, ray of sickness</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2nd</td>
        <td class="col-10">blindness/deafness, silence</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">feign death, speak with dead</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4th</td>
        <td class="col-10">aura of life, death ward</a>
        </td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10">contagion, legend lore</td>
    </tr>
</tbody>
</table>
</div>

<h5>Among the Dead<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureAmong" aria-expanded="true"
    aria-controls="featureAmong">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureAmong">
<p>Starting at 1st level, you learn the spare the dying cantrip, which counts as a warlock cantrip for you. You also have advantage on saving throws against any disease.</p>
<p>Additionally, undead have difficulty harming you. If an undead targets you directly with an attack or a harmful spell, that creature must make a Wisdom saving throw against your spell save DC (an undead needn't make the save when it includes you in an area effect, such as the explosion of fireball). On a failed save, the creature must choose a new target or forfeit targeting someone instead of you, potentially wasting the attack or spell. On a successful save, the creature is immune to this effect for 24 hours. An undead is also immune to this effect for 24 hours if you target it with an attack or a harmful spell.</p>
</div>

<h5>Defy Death<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureDefy" aria-expanded="true"
    aria-controls="featureDefy">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureDefy">
<p>Starting at 6th level, you can give yourself vitality when you cheat death or when you help someone else cheat it. You can regain hit points equal to 1d8 + your Constitution modifier (minimum of 1 hit point) when you succeed on a death saving throw or when you stabilize a creature with spare the dying.</p>
<p>Once you use this feature, you can't use it again until you finish a long rest.</p>
</div>

<h5>Undying Nature<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureNature" aria-expanded="true"
    aria-controls="featureNature">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureNature">
<p>Beginning at 10th level, you can hold your breath indefinitely, and you don't require food, water, or sleep, although you still require rest to reduce exhaustion and still benefit from finishing short and long rests.</p>
<p>In addition, you age at a slower rate. For every 10 years that pass, your body ages only 1 year, and you are immune to being magically aged.</p>
</div>

<h5>Indestructible Life<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureProjection" aria-expanded="true"
    aria-controls="featureProjection">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureProjection">
<p>When you reach 14th level, you partake some of the true secrets of the Undying. On your turn, you can use a bonus action to regain hit points equal to 1d8 + your warlock level. Additionally, if you put a severed body part of yours back in place when you use this feature, the part reattaches.</p>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>
</div>`;

    static setWarlockSubclass(subclass) {
        const patron = document.getElementById("warlockPatron");
        characterSubClass = null;
        switch (subclass) {
            case "archfey":
                characterSubClass = "(Archfey)";
                patron.innerHTML = this.archfey;
                break;
            case "celestial":
                characterSubClass = "(Celestial)";
                patron.innerHTML = this.celestial;
                break;
            case "fathomless":
                characterSubClass = "(Fathomless)";
                patron.innerHTML = this.fathomless;
                break;
            case "fiend":
                characterSubClass = "(Fiend)";
                patron.innerHTML = this.fiend;
                break;
            case "genie":
                characterSubClass = "(Genie)";
                patron.innerHTML = this.genie;
                break;
            case "greatOldOne":
                characterSubClass = "(Great Old One)";
                patron.innerHTML = this.greatOldOne;
                break;
            case "hexBlade":
                characterSubClass = "(Hexblade)";
                patron.innerHTML = this.hexBlade;
                break;
            case "ravenQueen":
                characterSubClass = "(Raven Queen)";
                patron.innerHTML = this.ravenQueen;
                break;
            case "seeker":
                characterSubClass = "(Seeker)";
                patron.innerHTML = this.seeker;
                break;
            case "undead":
                characterSubClass = "(Undead)";
                patron.innerHTML = this.undead;
                break;
            case "undying":
                characterSubClass = "(Undying)";
                patron.innerHTML = this.undying;
                break;
            default:
                break;
        }
        subClassNode.textContent = characterSubClass;
    }

    static warlockFeaturesList = [
        [`<li>
    Otherworldly Patron <span id="patron">TEST</span>
    </li><li>
    Pact Magic</li>`],
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