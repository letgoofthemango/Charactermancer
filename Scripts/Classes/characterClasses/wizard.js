class Wizard extends Character {
    static wizardFeaturesByLevel = [`<h1 class="text-center">Wizard<span class="ml-2"><button class="collapseButton" type="button"
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
<p>Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.</p>
    <p>Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.</p>
    <p>Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.</p>
    <p>Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals
    to other worlds.</p>
    
    <h5>Scholars of the Arcane</h5>
    <p>Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.</p>
    <p>Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic.</p>
    
    <h5>The Lure of Knowledge</h5>
    <p>Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as diviners, serve in military forces, or pursue lives of crime or domination.</p>
    <p>But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age.</p>
    <p>Only a select few people in the world are wielders of magic. Of all those, wizards stand at the pinnacle of the craft. Even the least of them can manipulate forces that flout the laws of nature, and the most accomplished among them can cast spells with world-shaking effects.</p>
    <p>The price that wizards pay for their mastery is that most valuable of commodities: time. It takes years of study, instruction, and experimentation to learn how to harness magical energy and carry spells around in one's own mind. For adventuring wizards and other spellcasters who aspire to the highest echelons of the profession, the studying never ends, nor does the quest for knowledge and power.</p>
    
    <i>“Wizardry requires understanding. The knowledge of how and why magic works, and our efforts to broaden that understanding, have brought about the key advances in civilization over the centuries.”</i>
    <p>— Gimble the illusionist</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr></tr>
        <tr>
            <th colspan="3"></th> <!-- spacer to match the 3 default cols (level, prof, features) -->
            <th colspan="1"></th>
            <th colspan="9">Spell Slots per Spell Level</th>
        </tr>
        <tr></tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>Cantrips Known</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>6th</th>
            <th>7th</th>
            <th>8th</th>
            <th>9th</th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td>Arcane Recovery, Spellcasting</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
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
            <td>Arcane Tradition</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
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
            <td>—</td>
            <td>3</td>
            <td>4</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>+2</td>
            <td>Ability Score Improvement</td>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>+3</td>
            <td>—</td>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>6th</td>
            <td>+3</td>
            <td>Arcane Tradition feature</td>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>+3</td>
            <td>—</td>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>+3</td>
            <td>Ability Score Improvement</td>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>+4</td>
            <td>—</td>
            <td>4</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>+4</td>
            <td>Arcane Tradition feature</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>+4</td>
            <td>—</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>+4</td>
            <td>Ability Score Improvement</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>13th</td>
            <td>+5</td>
            <td>—</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>14th</td>
            <td>+5</td>
            <td>Arcane Tradition feature</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>15th</td>
            <td>+5</td>
            <td>—</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>—</td>
        </tr>
        <tr>
            <td>16th</td>
            <td>+5</td>
            <td>Ability Score Improvement</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>—</td>
        </tr>
        <tr>
            <td>17th</td>
            <td>+6</td>
            <td>—</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>18th</td>
            <td>+6</td>
            <td>Spell Mastery</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>19th</td>
            <td>+6</td>
            <td>Ability Score Improvement</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>20th</td>
            <td>+6</td>
            <td>Signature Spells</td>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
        </tr>
    </tbody>
</table>
</div>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
<p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p>

<h6><b>Cantrips</b></h6>
<p>At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.</p>

<h6><b>Spellbook</b></h6>
<p>At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p>
<p>The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during
your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.</p>
<p><i>Copying a Spell into the Book.</i> <br>When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it. Copying a
spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required,
then transcribe it into your spellbook using your own notation.</p>
<p>For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent
this time and money, you can prepare the spell just like your other spells.</p>
<p>A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When you copy a spell from a spell scroll, you must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the
check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed.</p>
<p><i>Replacing the Book.</i> <br>You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier,
since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell. If you lose your spellbook, you can use the same procedure to transcribe the spells
that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.</p>
<p><i>The Book's Appearance.</i> <br>Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely
bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.</p>

<h6><b>Preparing and Casting Spells</b></h6>
<p>The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a
long rest.</p>
<p>You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be
of a level for which you have spell slots.</p>
<p>For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your
spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
<p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at
least 1 minute per spell level for each spell on your list.</p>

<h6><b>Spellcasting Ability</b></h6>
<p>Intelligence is your spellcasting ability for your wizard spells, since you learn your wizard spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition,
you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.</p>
<p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Intelligence modifier</p>
<p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Intelligence modifier</p>


<h6><b>Spellcasting Focus</b></h6>
<p>You can use an arcane focus as a spellcasting focus for your warlock spells.</p>

<h6><b>Ritual Casting</b></h6>
<p>You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.</p>

<h6><b>Learning Spells of 1st Level and Higher</b></h6>
<p>Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find
other spells that you can add to your spellbook (see "Spellbook").</p>

<h6><b>Cantrip Versatility</b></h6>
<p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the wizard spell list.</p>

</div>

<h5>Arcane Recovery<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature2">
<p>You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or
less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.</p>
<p>For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots.</p>
<p>You can recover either a 2nd-level spell slot or two 1st-level spell slots.</p>
</div>
</div>`, `<p>wizard 2`, `<p>wizard 3`, `<p>wizard 4`, `<p>wizard 5`, `<p>wizard 6`, `<p>wizard 7`, `<p>wizard 8`, `<p>wizard 3`, `<p>wizard 2`, `<p>wizard 3`, `<p>wizard 2`, `<p>wizard 3`, `<p>wizard 2`, `<p>wizard 3`, `<p>wizard 2`, `<p>wizard 3`, `<p>wizard 2`, `<p>wizard 3`, `<p>wizard 2`];
    static wizardFeaturesList = [
        [`<li>
    Spellcasting
    </li><li>
    Arcane Recovery</li>`],
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