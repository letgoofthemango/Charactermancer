/*###################################################################
######################### Artificer ##################################
#####################################################################*/
const artificerFeaturesByLevel = [`<h1 class="text-center">Artificer<span class="ml-2"><button class="collapseButton" type="button"
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
<p>Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in
    objects. They see magic as a complex system waiting to be decoded and then harnessed in their
    spells and inventions. You can find everything you need
    to play one of these inventors in the next few sections. Artificers use a variety of tools to
    channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to
    create a potent elixir, calligrapher's supplies to inscribe
    a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied
    to their tools and their talents, and few other characters can produce the right tool for a job
    as well as an artificer.</p>

<h5>Artificers in Many Worlds</h5>
<p>Throughout the D&D multiverse, artificers create inventions and magic items of peace and war.
    Many lives have been brightened or saved because of the work of kind artificers, but countless
    lives have also been lost because of the mass destruction
    unleashed by certain artificers' creations.</p>

<p>In the Forgotten Realms, the island of Lantan is home to many artificers, and in the world of
    Dragonlance, tinker gnomes are often members of this class. The strange technologies in the
    Barrier Peaks of the world of Greyhawk have inspired some folk
    to walk the path of the artificer, and in Mystara, various nations employ artificers to keep
    airships and other wondrous devices operational.</p>

<p>Artificers in the City of Sigil share discoveries from throughout the multiverse, and from there,
    the gnome artificer Vi runs a cosmos-spanning business that hires adventurers to fix problems
    that others deem unfixable. In Vi's home world, Eberron,
    magic is harnessed as a form of science and deployed throughout society, largely as a result of
    the wondrous ingenuity of artificers.</p>
<p>Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic
    as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane
    power, crafting magical objects. To cast a spell, an artificer could use alchemist's supplies to
    create a potent elixir, calligrapher's supplies to inscribe a sigil of power on an ally's armor,
    or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and
    their talents.</p>

<h5>Arcane Science</h5>
<p>In the world of Eberron, arcane magic has been harnessed as a form of science and deployed
    throughout society. Artificers reflect this development. Their knowledge of magical devices, and
    their ability to infuse mundane items with magic, allows Eberron's most miraculous projects to
    continue.</p>
<p>During the Last War, artificers were marshaled on a massive scale. Many lives were saved because
    of the inventions of brave artificers, but countless lives were also lost because of the mass
    destruction unleashed by their creations.</p>

<h5>Seekers of New Lore</h5>
<p>Nothing excites an artificer quite like uncovering a new metal or discovering a source of
    elemental energy. In artificer circles, new inventions and strange discoveries create the most
    excitement. Artificers who wish to make their mark must innovate, creating something fresh,
    rather than iterating on familiar designs.</p>
<p>This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and
    populated regions have long since been explored. Thus, artificers seek the frontiers of
    civilization in hopes of making the next great discovery in arcane research.</p>
<i>“Artificers invent cutting-edge problems, then try to solve them-loudly and often with collateral
    damage.”</i>
<p class="text-right">— Tasha</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr style="background-color: transparent;">
            <th colspan="3"></th>
            <!-- spacer to match the 3 default cols (level, prof, features) -->
            <th colspan="3"></th>
            <th class="cls-tbl__col-group" colspan="5">Spell Slots per Spell Level</th>
        </tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>
                <div>Infusions Known</div>
            </th>
            <th>
                <div>Infused Items</div>
            </th>
            <th>Cantrips Known
</div>
</th>
<th>
<div>1st</div>
</th>
<th>
<div>2nd</div>
</th>
<th>
<div>3rd</div>
</th>
<th>
<div>4th</div>
</th>
<th>
<div>5th</div>
</th>
</tr>
<tr>
<td>1st</td>
<td>+2</td>
<td>
    <div>Optional Rule: Firearm Proficiency</div>
    <span>Magical Tinkering, </span>
    <span>Spellcasting</span>
</td>
<td>—</td>
<td>—</td>
<td>2</td>
<td>2</td>
<td>—</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>2nd</td>
<td>+2</td>
<td>
    <span>Infuse Item</span>
</td>
<td>4</td>
<td>2</td>
<td>2</td>
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
    <span>Artificer Specialist, </span>
    <span>The Right Tool for the Job</span>
</td>
<td>4</td>
<td>2</td>
<td>2</td>
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
<td>4</td>
<td>2</td>
<td>2</td>
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
    <span>Artificer Specialist Feature</span>
</td>
<td>4</td>
<td>2</td>
<td>2</td>
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
    <span>Tool Expertise</span>
</td>
<td>6</td>
<td>3</td>
<td>2</td>
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
    <span>Flash of Genius</span>
</td>
<td>6</td>
<td>3</td>
<td>2</td>
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
<td>6</td>
<td>3</td>
<td>2</td>
<td>4</td>
<td>3</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>9th</td>
<td>+4</td>
<td>
    <span>Artificer Specialist Feature</span>
</td>
<td>6</td>
<td>3</td>
<td>2</td>
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
    <span>Magic Item Adept</span>
</td>
<td>8</td>
<td>4</td>
<td>3</td>
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
    <span>Spell-Storing Item</span>
</td>
<td>8</td>
<td>4</td>
<td>3</td>
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
<td>8</td>
<td>4</td>
<td>3</td>
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
<td>8</td>
<td>4</td>
<td>3</td>
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
    <span>Magic Item Savant</span>
</td>
<td>10</td>
<td>5</td>
<td>4</td>
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
    <span>Artificer Specialist Feature</span>
</td>
<td>10</td>
<td>5</td>
<td>4</td>
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
<td>10</td>
<td>5</td>
<td>4</td>
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
<td>10</td>
<td>5</td>
<td>4</td>
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
    <span>Magic Item Master</span>
</td>
<td>12</td>
<td>6</td>
<td>4</td>
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
<td>12</td>
<td>6</td>
<td>4</td>
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
    <span>Soul of Artifice</span>
</td>
<td>12</td>
<td>6</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
</tr>
</tbody>
</table>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#level1" aria-expanded="true"
    aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Firearm Proficiency<span class="ml-2"><button class="collapseButton" type="button"
        data-toggle="collapse" data-target="#feature1" aria-expanded="true"
        aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
<p>The secrets of creating and operating gunpowder weapons have been discovered in various
    corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in chapter
    9 of the Dungeon Master's Guide and your artificer has been exposed
    to the operation of such weapons, your artificer is proficient with them.</p>
</div>

<h5>Magical Tinkering<span class="ml-2"><button class="collapseButton" type="button"
        data-toggle="collapse" data-target="#feature2" aria-expanded="true"
        aria-controls="feature2">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature2">
<p>At 1st level, you learn how to invest a spark of magic into mundane objects. To use this
    ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny
    nonmagical object as an action and give it one of the following magical
    properties of your choice:</p>
<ul>
    <li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.
    </li>
    <li>Whenever tapped by a creature, the object emits a recorded message that can be heard up
        to 10 feet away. You utter the message when you bestow this property on the object, and
        the recording can be no more than 6 seconds long.</li>
    <li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves,
        chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li>
    <li>A static visual effect appears on one of the object's surfaces. This effect can be a
        picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as
        you like.</li>
</ul>
<p>The chosen property lasts indefinitely. As an action, you can touch the object and end the
    property early. You can bestow magic on multiple objects, touching one object each time you
    use this feature, though a single object can only bear one property
    at a time. The maximum number of objects you can affect with this feature at one time is
    equal to your Intelligence modifier (minimum of one object). If you try to exceed your
    maximum, the oldest property immediately ends, and then the new
    property applies.</p>
</div>

<h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
        data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span>
</h5>
<hr>

<div class="collapse show" id="feature3">
<p>You have studied the workings of magic and how to channel it through objects. As a result,
    you have gained the ability to cast spells. To observers, you don't appear to be casting
    spells in a conventional way; you look as if you're producing wonders
    using mundane items or outlandish inventions.</p>

<h6><b>Tools Required</b></h6>
<p>You produce your artificer spell effects through your tools. You must have a spellcasting
    focus—specifically thieves' tools or some kind of artisan's tool—in hand when you cast any
    spell with this Spellcasting feature (meaning the spell has an
    'M' component when you cast it). You must be proficient with the tool to use it in this way.
    See chapter 5, "Equipment," in the Player's Handbook for descriptions of these tools.</p>
<p>After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of
    your infusions as a spellcasting focus.</p>

<h6><b>The Magic of Artifice</b></h6>
<p>As an artificer, you use tools when you cast your spells. When describing your spellcasting,
    think about how you're using a tool to perform the spell effect. If you cast cure wounds
    using alchemist's supplies, you could be quickly producing a
    salve. If you cast it using tinker's tools, you might have a miniature mechanical spider
    that binds wounds. When you cast poison spray, you could fling foul chemicals or use a wand
    that spits venom. The effect of the spell is the same as for
    a spellcaster of any other class, but your method of spellcasting is special. The same
    principle applies when you prepare your spells. As an artificer, you don't study a spellbook
    or pray to prepare your spells. Instead, you work with your
    tools and create the specialized items you'll use to produce your effects. If you replace
    cure wounds with heat metal, you might be altering the device you use to heal—perhaps
    modifying a tool so that it channels heat instead of healing energy.
    Such details don't limit you in any way or provide you with any benefit beyond the spell's
    effects. You don't have to justify how you're using tools to cast a spell. But describing
    your spellcasting creatively is a fun way to distinguish yourself
    from other spellcasters.</p>

<h6><b>Cantrips (0-Level Spells)</b></h6>
<p>At 1st level, you know two cantrips of your choice from the artificer spell list. At higher
    levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips
    Known column of the Artificer table.</p>
<p>When you gain a level in this class, you can replace one of the artificer cantrips you know
    with another cantrip from the artificer spell list.</p>

<h6><b>Preparing and Casting Spells</b></h6>
<p>The Artificer table shows how many spell slots you have to cast your artificer spells. To
    cast one of your artificer spells of 1st level or higher, you must expend a slot of the
    spell's level or higher. You regain all expended spell slots when
    you finish a long rest.</p>
<p>You prepare the list of artificer spells that are available for you to cast, choosing from
    the artificer spell list. When you do so, choose a number of artificer spells equal to your
    Intelligence modifier + half your artificer level, rounded down
    (minimum of one spell). The spells must be of a level for which you have spell slots.</p>
<p>For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level
    spell slots. With an Intelligence of 14, your list of prepared spells can include four
    spells of 1st or 2nd level, in any combination. If you prepare the
    1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting
    the spell doesn't remove it from your list of prepared spells.</p>
<p>You can change your list of prepared spells when you finish a long rest. Preparing a new list
    of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1
    minute per spell level for each spell on your list.</p>

<h6><b>Spellcasting Ability</b></h6>
<p>Intelligence is your spellcasting ability for your artificer spells; your understanding of
    the theory behind magic allows you to wield these spells with superior skill. You use your
    Intelligence whenever an artificer spell refers to your spellcasting
    ability. In addition, you use your Intelligence modifier when setting the saving throw DC
    for an artificer spell you cast and when making an attack roll with one.</p>
<p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Intelligence
    modifier</p>
<p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Intelligence
    modifier</p>

<h6><b>Ritual Casting</b></h6>
<p>You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the
    spell prepared.</p>
</div>
</div>
</div>
</div>`, `<h2 class="text-center">Level 2<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level2" aria-expanded="true" aria-controls="level2">[-]</button></span></h2>
<div class="collapse show" id="level2">

    <h5>Infuse Item<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature7" aria-expanded="true" aria-controls="feature7">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature7">
        <p>At 2nd level, you gain the ability to imbue mundane items with certain magical infusions. The magic items you create with this feature are effectively prototypes of permanent items.</p>

        <h6><b>Infusions Known</b></h6>
        <p>When you gain this feature, pick four artificer infusions to learn, choosing from the "Artificer Infusions" section at the end of the class's description. You learn additional infusions of your choice when you reach certain levels in this class,
            as shown in the Infusions Known column of the Artificer table.</p>
        <p>Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one.</p>
        <h6><b>Artificer Infusions</b></h6>
        <p>Artificers have invented numerous magical infusions, extraordinary processes that rapidly create magic items. To many, artificers seem like wonderworkers, accomplishing in hours what others need weeks to complete. The description of each of the
            following infusions details the type of item that can receive it, along with whether the resulting magic item requires attunement.</p>
        <p>Some infusions specify a minimum artificer level. You can't learn such an infusion until you are at least that level. Unless an infusion's description says otherwise, you can't learn an infusion more than once.</p>
        <h6><b>Infusing an Item</b></h6>
        <p>Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description.
            If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see "Attunement" in chapter 7 of the Dungeon
            Master's Guide).</p>
        <p>Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days have passed equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you give up your knowledge of the infusion
            for another one.</p>
        <p>You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one
            object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies.</p>
        <p>If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.</p>
    </div>
</div>`, `<h2 class="text-center">Level 3<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level3" aria-expanded="true" aria-controls="level3">[-]</button></span></h2>
<div class="collapse show" id="level3">

    <h5>Artificer Specialist<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature13" aria-expanded="true" aria-controls="feature13">[-]</button></span></h5>
    <hr>

    <h2 class="text-center">Level 3<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level3" aria-expanded="true" aria-controls="level3">[-]</button></span></h2>
    <div class="collapse show" id="level3">

        <h5>Artificer Specialist<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature13" aria-expanded="true" aria-controls="feature13">[-]</button></span></h5>
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

        <h5>The Right Tool for the Job<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature14" aria-expanded="true" aria-controls="feature14">[-]</button></span></h5>
        <hr>

        <div class="collapse show" id="feature14">
            <p>At 3rd level, you learn how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires
                1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>
        </div>
    </div>

    <h5>The Right Tool for the Job<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature14" aria-expanded="true" aria-controls="feature14">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature14">
        <p>At 3rd level, you learn how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of
            uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>
    </div>
</div>`, `<h2 class="text-center">Level 4<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level4" aria-expanded="true" aria-controls="level4">[-]</button></span></h2>
<div class="collapse show" id="level4">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature19" aria-expanded="true" aria-controls="feature19">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature19">
        <p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>
        <p>If your DM allows the use of feats, you may instead take a feat.</p>
        <p><b><em>You will be able to make your choice regarding this feature on the next page.</em></b></p>
    </div>

    <h5>Proficiency Versatility<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature20" aria-expanded="true" aria-controls="feature20">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature20">
        <p>When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).</p>
        <p>This change represents one of your skills atrophying as you focus on a different skill.</p>
    </div>
</div>`, `<h2 class="text-center">Level 5<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level5" aria-expanded="true" aria-controls="level5">[-]</button></span></h2>
<div class="collapse show" id="level5">

    <h5>Artificer Specialist Feature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature25" aria-expanded="true" aria-controls="feature25">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature25">
        <p>At 5th level, you gain a feature granted by your Artificer Specialist choice.</p>
    </div>
</div>`, `<h2 class="text-center">Level 6<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level6" aria-expanded="true" aria-controls="level6">[-]</button></span></h2>
<div class="collapse show" id="level6">

    <h5>Tool Expertise<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature31" aria-expanded="true" aria-controls="feature31">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature31">
        <p>Starting at 6th level, your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool.</p>
    </div>
</div>`, `<h2 class="text-center">Level 7<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level7" aria-expanded="true" aria-controls="level7">[-]</button></span></h2>
<div class="collapse show" id="level7">

    <h5>Flash of Genius<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature37" aria-expanded="true" aria-controls="feature37">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature37">
        <p>Starting at 7th level, you gain the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier
            to the roll.</p>
        <p>You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.</p>
    </div>
</div>`, `<h2 class="text-center">Level 8<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level8" aria-expanded="true" aria-controls="level8">[-]</button></span></h2>
<div class="collapse show" id="level8">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature43" aria-expanded="true" aria-controls="feature43">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature43">
        <p>When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>
        <p>If your DM allows the use of feats, you may instead take a feat.</p>
        <p><b><em>You will be able to make your choice regarding this feature on the next page.</em></b></p>
    </div>

    <h5>Proficiency Versatility<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature44" aria-expanded="true" aria-controls="feature44">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature44">
        <p>When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).</p>
        <p>This change represents one of your skills atrophying as you focus on a different skill.</p>
    </div>
</div>`, `<h2 class="text-center">Level 9<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level9" aria-expanded="true" aria-controls="level9">[-]</button></span></h2>
<div class="collapse show" id="level9">

    <h5>Artificer Specialist Feature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature49" aria-expanded="true" aria-controls="feature49">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature49">
        <p>At 9th level, you gain a feature granted by your Artificer Specialist choice.</p>
    </div>
</div>`, `<h2 class="text-center">Level 10<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level10" aria-expanded="true" aria-controls="level10">[-]</button></span></h2>
<div class="collapse show" id="level10">

    <h5>Magic Item Adept<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature55" aria-expanded="true" aria-controls="feature55">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature55">
        <p>When you reach 10th level, you achieve a profound understanding of how to use and make magic items:</p>
        <ul>
            <li>You can attune to up to four magic items at once.</li>
            <li>If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.</li>
        </ul>
    </div>
</div>`, `<h2 class="text-center">Level 11<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level11" aria-expanded="true" aria-controls="level11">[-]</button></span></h2>
<div class="collapse show" id="level11">

    <h5>Spell-Storing Item<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature61" aria-expanded="true" aria-controls="feature61">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature61">
        <p>At 11th level, you learn how to store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1st- or 2nd-level
            spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared).</p>
        <p>While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell stays in the object until it's
            been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.</p>
    </div>
</div>`, `<h2 class="text-center">Level 12<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level12" aria-expanded="true" aria-controls="level12">[-]</button></span></h2>
<div class="collapse show" id="level12">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature67" aria-expanded="true" aria-controls="feature67">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature67">
        <p>When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>
        <p>If your DM allows the use of feats, you may instead take a feat.</p>
        <p><b><em>You will be able to make your choice regarding this feature on the next page.</em></b></p>
    </div>

    <h5>Proficiency Versatility<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature68" aria-expanded="true" aria-controls="feature68">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature68">
        <p>When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).</p>
        <p>This change represents one of your skills atrophying as you focus on a different skill.</p>
    </div>
</div>`, `<h2 class="text-center">Level 13<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level13" aria-expanded="true" aria-controls="level13">[-]</button></span></h2>
<div class="collapse show" id="level13">

    <p>For this level, you get "regular" increases such as a boost in hit points, spell slots, and one spell slot for 4th level spells.</p>

</div>`, `<h2 class="text-center">Level 14<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level14" aria-expanded="true" aria-controls="level14">[-]</button></span></h2>
<div class="collapse show" id="level14">

    <h5>Magic Item Savant<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature79" aria-expanded="true" aria-controls="feature79">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature79">
        <p>At 14th level, your skill with magic items deepens more:</p>
        <ul>
            <li>You can attune to up to five magic items at once.</li>
            <li>You ignore all class, race, spell, and level requirements on attuning to or using a magic item.</li>
        </ul>
    </div>
</div>`, `<h2 class="text-center">Level 15<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level15" aria-expanded="true" aria-controls="level15">[-]</button></span></h2>
<div class="collapse show" id="level15">

    <h5>Artificer Specialist Feature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature85" aria-expanded="true" aria-controls="feature85">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature85">
        <p>At 15th level, you gain a feature granted by your Artificer Specialist choice.</p>
    </div>
</div>`, `<h2 class="text-center">Level 16<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level16" aria-expanded="true" aria-controls="level16">[-]</button></span></h2>
<div class="collapse show" id="level16">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature91" aria-expanded="true" aria-controls="feature91">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature91">
        <p>When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>
        <p>If your DM allows the use of feats, you may instead take a feat.</p>
        <p><b><em>You will be able to make your choice regarding this feature on the next page.</em></b></p>
    </div>

    <h5>Proficiency Versatility<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature92" aria-expanded="true" aria-controls="feature92">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature92">
        <p>When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).</p>
        <p>This change represents one of your skills atrophying as you focus on a different skill.</p>
    </div>
</div>`, `<h2 class="text-center">Level 17<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level17" aria-expanded="true" aria-controls="level17">[-]</button></span></h2>
<div class="collapse show" id="level17">

    <hr>

    <div class="collapse show" id="feature97">
        <p>For this level, you get "regular" increases such as a boost in hit points, spell slots, and one spell slot for 5th level spells.</p>
    </div>
</div>`, `<h2 class="text-center">Level 18<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level18" aria-expanded="true" aria-controls="level18">[-]</button></span></h2>
<div class="collapse show" id="level18">

    <h5>Magic Item Master<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature103" aria-expanded="true" aria-controls="feature103">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature103">
        <p>Starting at 18th level, you can attune to up to six magic items at once.</p>
    </div>
</div>`, `<h2 class="text-center">Level 19<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level19" aria-expanded="true" aria-controls="level19">[-]</button></span></h2>
<div class="collapse show" id="level19">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature109" aria-expanded="true" aria-controls="feature109">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature109">
        <p>When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>
        <p>If your DM allows the use of feats, you may instead take a feat.</p>
        <p><b><em>You will be able to make your choice regarding this feature on the next page.</em></b></p>
    </div>


    <h5>Proficiency Versatility<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature110" aria-expanded="true" aria-controls="feature110">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature110">
        <p>When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).</p>
        <p>This change represents one of your skills atrophying as you focus on a different skill.</p>
    </div>
</div>`, `<h2 class="text-center">Level 20<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level20" aria-expanded="true" aria-controls="level20">[-]</button></span></h2>
<div class="collapse show" id="level20">

    <h5>Soul of Artifice<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature115" aria-expanded="true" aria-controls="feature115">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature115">
        <p>At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection:</p>
        <ul>
            <li>You gain a +1 bonus to all saving throws per magic item you are currently attuned to.</li>
            <li>If you're reduced to 0 hit points but not killed outright, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.</li>
        </ul>
    </div>
</div>`];
const artificerFeaturesList = [
    [`<li>
        Magical Tinkering
    </li><li>
        Spellcasting
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


/*###################################################################
######################### Barbarian ##################################
#####################################################################*/
const barbarianFeaturesByLevel = [`<h1 class="text-center">Barbarian<span class="ml-2"><button class="collapseButton" type="button"
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
<p>A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs
    as he charges toward the frost giant who dared poach his people's elk herd.</p>
<p>A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to
    break his neck with her bare hands as she did to the last six rivals.</p>
<p>Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to
    drive his armored elbow into the gut of another.</p>
<p>These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable,
    and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered
    predator, the unrelenting assault of a storm, the churning
    turmoil of the sea.</p>
<p>For some, their rage springs from a communion with fierce animal spirits. Others draw from a
    roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that
    fuels not just a battle frenzy but also uncanny reflexes,
    resilience, and feats of strength.</p>

<h5>Primal Instinct</h5>
<p>People of towns and cities take pride in how their civilized ways set them apart from animals, as
    if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is
    no virtue, but a sign of weakness. The strong
    embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians
    are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their
    homelands: the tundra, jungle, or grasslands where their
    tribes live and hunt.</p>
<p>Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes
    over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of
    fury only a few times without resting, but those
    few rages are usually sufficient to defeat whatever threats arise.</p>

<h5>A Life of Danger</h5>
<p>Not every member of the tribes deemed "barbarians" by scions of civilized society has the
    barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a
    town, and he or she plays a similar role as a protector
    of the people and a leader in times of war. Life in the wild places of the world is fraught with
    peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into
    that danger so that their people don't have
    to.
</p>
<p>Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering
    is often a way of life for their native tribes, and the rootless life of the adventurer is
    little hardship for a barbarian. Some barbarians miss
    the close-knit family structures of the tribe, but eventually find them replaced by the bonds
    formed among the members of their adventuring parties.</p>

<i>I have witnessed the indomitable performance of barbarians on the field of battle, and it makes
    me wonder what force lies at the heart of their rage.</i>
<p>— Seret, Arch wizard</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr>
            <!-- row so table striped coloring doesnt start with Black-->
        </tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th><div>Rages</div></th>
            <th><div>Rage Damage</div></th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td><span>Rage, </span><span>Unarmored Defense</span></td>
            <td>2</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>2nd</td>
            <td>+2</td>
            <td>
                <span>Danger Sense,</span>
                <span>Reckless Attack</span>
            </td>
            <td>2</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>3rd</td>
            <td>+2</td>
            <td>
                <span>Primal Path</span>
            </td>
            <td>3</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>+2</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>3</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>+3</td>
            <td>
                <span>Extra Attack,</span>
                <span>Fast Movement</span>
            </td>
            <td>3</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>6th</td>
            <td>+3</td>
            <td>
                <span>Path Feature</span>
            </td>
            <td>4</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>7th</td>
            <td>+3</td>
            <td>
                <span>Feral Instinct</span>
            </td>
            <td>4</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>8th</td>
            <td>+3</td>
            <td>
                <span>Ability Score
                    Improvement</span>
            </td>
            <td>4</td>
            <td>+2</td>
        </tr>
        <tr>
            <td>9th</td>
            <td>+4</td>
            <td>
                <span>Brutal Critical (1 die)</span>
            </td>
            <td>4</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>10th</td>
            <td>+4</td>
            <td>
                <span>Path feature</span>
            </td>
            <td>4</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>11th</td>
            <td>+4</td>
            <td>
                <span>Relentless Rage</span>
            </td>
            <td>4</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>12th</td>
            <td>+4</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>5</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>13th</td>
            <td>+5</td>
            <td>
                <span>Brutal Critical (2 dice)</span>
            </td>
            <td>5</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>14th</td>
            <td>+5</td>
            <td>
                <span>Path feature</span>
            </td>
            <td>5</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>15th</td>
            <td>+5</td>
            <td>
                <span>Persistent Rage</span>
            </td>
            <td>5</td>
            <td>+3</td>
        </tr>
        <tr>
            <td>16th</td>
            <td>+5</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>5</td>
            <td>+4</td>
        </tr>
        <tr>
            <td>17th</td>
            <td>+6</td>
            <td>
                <span>Brutal Critical (3 dice)</span>
            </td>
            <td>6</td>
            <td>+4</td>
        </tr>
        <tr>
            <td>18th</td>
            <td>+6</td>
            <td>
                <span>Indomitable Might</span>
            </td>
            <td>6</td>
            <td>+4</td>
        </tr>
        <tr>
            <td>19th</td>
            <td>+6</td>
            <td>
                <span>Ability Score Improvement</span>
            </td>
            <td>6</td>
            <td>+4</td>
        </tr>
        <tr>
            <td>20th</td>
            <td>+6</td>
            <td>
                <span>Primal Champion</span>
            </td>
            <td>Unlimited</td>
            <td>+4</td>
        </tr>
    </tbody>
</table>
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

    <h5>Rage<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p>
        <p>While raging, you gain the following benefits if you aren't wearing heavy armor:</p>
        <ul>
            <li>You have advantage on Strength checks and Strength saving throws.</li>
            <li>When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.</li>
            <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
        </ul>
        <p>If you are able to cast spells, you can't cast them or concentrate on them while raging.</p>
        <p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus
            action.
        </p>
        <p>Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.</p>
    </div>

    <h5>Unarmored Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature2">
        <p>While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
    </div>
</div>`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 4`, `<p>barbarian 5`, `<p>barbarian 6`, `<p>barbarian 7`, `<p>barbarian 8`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 1`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`, `<p>barbarian 3`, `<p>barbarian 2`];
const barbarianFeaturesList = [
    [`<li>
    Rage
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

barbarianFeatureChoice = [` `, ` `, ` `, `<br><h2 class="text-center">Level 4<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level4" aria-expanded="true" aria-controls="level4">[-]</button></span></h2>
<div class="collapse show" id="level4">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature19" aria-expanded="true" aria-controls="feature19">[-]</button></span></h5>
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
</div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 8<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level8" aria-expanded="true" aria-controls="level8">[-]</button></span></h2>
<div class="collapse show" id="level8">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature20" aria-expanded="true" aria-controls="feature20">[-]</button></span></h5>
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
</div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 12<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level12" aria-expanded="true" aria-controls="level12">[-]</button></span></h2>
<div class="collapse show" id="level12">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature21" aria-expanded="true" aria-controls="feature21">[-]</button></span></h5>
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
</div>`, ` `, ` `, ` `, `<br><h2 class="text-center">Level 16<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level16" aria-expanded="true" aria-controls="level16">[-]</button></span></h2>
<div class="collapse show" id="level16">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature22" aria-expanded="true" aria-controls="feature22">[-]</button></span></h5>
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
</div>`, ` `, ` `, `<br><h2 class="text-center">Level 19<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level19" aria-expanded="true" aria-controls="level19">[-]</button></span></h2>
<div class="collapse show" id="level19">

    <h5>Ability Score Improvement<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature23" aria-expanded="true" aria-controls="feature23">[-]</button></span></h5>
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
</div>`, ` `]

/*###################################################################
######################### Bard ##################################
#####################################################################*/
const bardFeaturesByLevel = [`<h1 class="text-center">Bard<span class="ml-2"><button class="collapseButton" type="button"
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
                    <p>Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song—knowledge of the people who constructed the
                        monument and the mythic saga it depicts.</p>
                    <p>A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them.</p>
                    <p>Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions' words will be well received.</p>
                    <p>Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.</p>
                
                    <h5>Music and Magic</h5>
                    <p>In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that
                        the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.</p>
                
                    <p>The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves
                        in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude
                        that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge.</p>
                
                    <h5>Learning from Experience</h5>
                    <p>True bards are not common in the world. Not every minstrel singing in a tavern or jester cavorting in a royal court is a bard. Discovering the magic hidden in music requires hard study and some measure of natural talent that most troubadours
                        and jongleurs lack. It can be hard to spot the difference between these performers and true bards, though. A bard's life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much
                        like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows.</p>
                
                    <p>Only rarely do bards settle in one place for long, and their natural desire to travel—to find new tales to tell, new skills to learn, and new discoveries beyond the horizon—makes an adventuring career a natural calling. Every adventure is
                        an opportunity to learn, practice a variety of skills, enter long-forgotten tombs, discover lost works of magic, decipher old tomes, travel to strange places, or encounter exotic creatures. Bards love to accompany heroes to witness their
                        deeds firsthand. A bard who can tell an awe-inspiring story from personal experience earns renown among other bards. Indeed, after telling so many stories about heroes accomplishing mighty deeds, many bards take these themes to heart and
                        assume heroic roles themselves.</p>
                    <i>“Music is the fruit of the divine tree that vibrates with the Words of Creation. But the question I ask you is, can a bard go to the root of this tree? Can one tap into the source of that power? Ah, then what manner of music they would bring to this world!”</i>
                    <p>— Fletcher Danairia, master bard</p>
                </div><!-- -------------------------------------------------------------end description div-->

                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <!-- -------------------------beginning table div-->
                    <table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
                        <tbody>
                            <tr></tr> <!-- row so that  the table wont start with black -->
                            <tr>
                                <th colspan="3"></th>
                                <!-- spacer to match the 3 default cols (level, prof, features) -->
                                <th colspan="2"></th>
                                <th colspan="9">Spell Slots per Spell Level</th>
                            </tr>
                            <tr></tr> <!-- row so that  the table wont start with black -->
                            <tr>
                                <th>Level</th>
                                <th>Proficiency Bonus</th>
                                <th>Features</th>
                                <th><div>Cantrips Known</div></th>
                                <th><div>Spells Known</div></th>
                                <th><div>1st</div></th>
                                <th><div>2nd</div></th>
                                <th><div>3rd</div></th>
                                <th><div>4th</div></th>
                                <th><div>5th</div></th>
                                <th><div>6th</div></th>
                                <th><div>7th</div></th>
                                <th><div>8th</div></th>
                                <th><div>9th</div></th>
                            </tr>
                            <tr>
                                <td>1st</td>
                                <td>+2</td>
                                <td>
                                    <span>Bardic Inspiration,</span>
                                    <span>Spellcasting</span>
                                </td>
                                <td>2</td>
                                <td>4</td>
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
                                <td>
                                    <span>Jack of All Trades,</span>
                                    <span>Song of Rest (d6)</span>
                                </td>
                                <td>2</td>
                                <td>5</td>
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
                                <td>
                                    <span>Bard College,</span>
                                    <span>Expertise</span>
                                </td>
                                <td>2</td>
                                <td>6</td>
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
                                <td>
                                    <span>Ability Score Improvement</span>
                                </td>
                                <td>3</td>
                                <td>7</td>
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
                                <td>
                                    <span>Bardic Inspiration (d8),</span>
                                    <span>Font of Inspiration</span>
                                </td>
                                <td>3</td>
                                <td>8</td>
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
                                <td>
                                    <span>Countercharm,</span>
                                    <span>Bard College feature</span>
                                </td>
                                <td>3</td>
                                <td>9</td>
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
                                <td>3</td>
                                <td>10</td>
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
                                <td>
                                    <span>Ability Score Improvement</span>
                                </td>
                                <td>3</td>
                                <td>11</td>
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
                                <td>
                                    <span>Song of Rest (d8)</span>
                                </td>
                                <td>3</td>
                                <td>12</td>
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
                                <td>
                                    <span>Bardic Inspiration (d10),</span>
                                    <span>Expertise,</span>
                                    <span>Magical Secrets</span>
                                </td>
                                <td>4</td>
                                <td>14</td>
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
                                <td>4</td>
                                <td>15</td>
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
                                <td>
                                    <span>Ability Score Improvement</span>
                                </td>
                                <td>4</td>
                                <td>15</td>
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
                                <td>
                                    <span>Song of Rest (d10)</span>
                                </td>
                                <td>4</td>
                                <td>16</td>
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
                                <td>
                                    <span>Magical Secrets,</span>
                                    <span>Bard College feature</span>
                                </td>
                                <td>4</td>
                                <td>18</td>
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
                                <td>
                                    <span>Bardic Inspiration (d12)</span>
                                </td>
                                <td>4</td>
                                <td>19</td>
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
                                <td>
                                    <span>Ability Score Improvement</span>
                                </td>
                                <td>4</td>
                                <td>19</td>
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
                                <td>
                                    <span>Song of Rest (d12)</span>
                                </td>
                                <td>4</td>
                                <td>20</td>
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
                                <td>
                                    <span>Magical Secrets</span>
                                </td>
                                <td>4</td>
                                <td>22</td>
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
                                <td>
                                    <span>Ability Score Improvement</span>
                                </td>
                                <td>4</td>
                                <td>22</td>
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
                                <td>
                                    <span>Superior Inspiration</span>
                                </td>
                                <td>4</td>
                                <td>22</td>
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
                </div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

    <h5>Bardic Inspiration<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a
            d6.
        </p>
        <p>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic
            Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p>
        <p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p>
        <p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>
        <h6><b>Magical Inspiration</b></h6>
        <p>If a creature has a Bardic Inspiration die from you and casts a spell, the creature can roll that die and add the number rolled to one damage or healing roll of the spell. The Bardic Inspiration die is then lost.</p>
    </div>

    <h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature3">
        <p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See chapter 10 for the general rules of
            spellcasting and chapter 11 for the bard spell list.</p>

        <h6><b>Cantrips</b></h6>
        <p>You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level.</p>

        <h6><b>Spell Slots</b></h6>
        <p>The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish
            a long rest.</p>
        <p>For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.</p>

        <h6><b>Spells Known of 1st Level and Higher</b></h6>
        <p>You know four 1st-level spells of your choice from the bard spell list.</p>
        <p>You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn
            one new spell of 1st or 2nd level.</p>
        <p>Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.</p>

        <h6><b>Spellcasting Ability</b></h6>
        <p>Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In
            addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.</p>

        <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
        <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>

        <h6><b>Ritual Casting</b></h6>
        <p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p>

        <h6><b>Spellcasting Focus</b></h6>
        <p>You can use a musical instrument as a spellcasting focus for your bard spells.</p>

        <h6><b>Spell Versatility</b></h6>
        <p>Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the bard spell list. The new spell must be the same level as the spell you replace.</p>

    </div>
</div>`, `<p>bard 2`, `<p>bard 3`, `<p>bard 4`, `<p>bard 5`, `<p>bard 6`, `<p>bard 7`, `<p>bard 8`, `<p>bard 3`, `<p>bard 2`, `<p>bard 3`, `<p>bard 2`, `<p>bard 3`, `<p>bard 2`, `<p>bard 3`, `<p>bard 2`, `<p>bard 3`, `<p>bard 2`, `<p>bard 3`, `<p>bard 2`];
const bardFeaturesList = [
    [`<li>
    Bardic Inspiration
    </li><li>
    Spellcasting
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



/*###################################################################
######################### Cleric ##################################
#####################################################################*/
const clericFeaturesByLevel = [`<h1 class="text-center">Cleric<span class="ml-2"><button class="collapseButton" type="button"
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
<p>Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an
    inner light that spills out to heal his battle-worn companions.</p>
<p>Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs
    arrayed against him, shouting praise to the gods with every foe's fall.</p>
<p>Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours
    from it to drive back the zombies crowding in on her companions.</p>
<p>Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied
    as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary
    priest, a cleric is imbued with divine magic.</p>

<h5>Healers and Warriors</h5>
<p>Divine magic, as the name suggests, is the power of the gods, flowing from them into the world.
    Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant
    this power to everyone who seeks it, but only to those chosen to fulfill a high calling.</p>
<p>Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers
    and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive
    sense of a deity's wishes.</p>
<p>Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and
    hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down
    flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their
    combat training to let them wade into melee with the power of the gods on their side.</p>

<h5>Divine Agents</h5>
<p>Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a
    simple life of temple service, carrying out their gods' will through prayer and sacrifice, not
    by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and
    involving no communion with a god at all. True clerics are rare in most hierarchies.</p>

<p>When a cleric takes up an adventuring life, it is usually because his or her god demands it.
    Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization,
    smiting evil or seeking holy relics in ancient tombs.
    Many clerics are also expected to protect their deities' worshipers, which can mean fighting
    rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow
    a demon prince to enter the world.</p>
<p>Most adventuring clerics maintain some connection to established temples and orders of their
    faiths. A temple might ask for a cleric's aid, or a high priest might be in a position to demand
    it.</p>

<p>Almost all the folk in the world who revere a deity live their lives without ever being directly
    touched by a divine being. As such, they can never know what it feels like to be a
    cleric—someone who is not only a devout worshiper, but who
    has also been invested with a measure of a deity's power.</p>
<p>The question has long been debated: Does a mortal become a cleric as a consequence of deep
    devotion to one's deity, thereby attracting the god's favor? Or is it the deity who sees the
    potential in a person and calls that individual into service?
    Ultimately, perhaps, the answer doesn't matter. However clerics come into being, the world needs
    clerics as much as clerics and deities need each other.</p>
<p>If you're playing a cleric character, the following sections offer ways to add some detail to
    that character's history and personality.</p>

<i>“To become a cleric is to become a messenger of the gods. The power the divine offers is great,
    but it always comes with tremendous responsibility.”</i>
<p>— Riggby the patriarch</p>
</div><!-- -------------------------------------------------------------end description div-->

<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<!-- -------------------------beginning table div-->
<table class="table-striped table-hover cls-tbl shadow-big w-100 mb-2">
    <tbody>
        <tr></tr>
        <tr>
            <th colspan="3"></th>
            <!-- spacer to match the 3 default cols (level, prof, features) -->
            <th colspan="1"></th>
            <th colspan="9">Spell Slots per Spell Level</th>
        </tr>
        <tr></tr>
        <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
            <th>
                <div>Cantrips Known</div>
            </th>
            <th>
                <div>1st</div>
            </th>
            <th>
                <div>2nd</div>
            </th>
            <th>
                <div>3rd</div>
            </th>
            <th>
                <div>4th</div>
            </th>
            <th>
                <div>5th</div>
            </th>
            <th>
                <div>6th</div>
            </th>
            <th>
                <div>7th</div>
            </th>
            <th>
                <div>8th</div>
            </th>
            <th>
                <div>9th</div>
            </th>
        </tr>
        <tr>
            <td>1st</td>
            <td>+2</td>
            <td>
                <span>Spellcasting,</span>
                <span>Divine Domain</span>
            </td>
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
            <td>
                <span>Channel Divinity (1/rest),</span>
                <span>Divine Domain feature</span>
            </td>
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
            <td>
                <span>Ability Score Improvement</span>
            </td>
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
            <td>
                <span>Destroy Undead (CR 1/2)</span>
            </td>
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
            <td>
                <span>Channel Divinity (2/rest),</span>
                <span>Divine Domain feature</span>
            </td>
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
            <td>
                <span>Ability Score Improvement,</span>
                <span>Destroy Undead (CR 1),</span>
                <span>Divine Domain feature</span>
            </td>
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
            <td>
                <span>Divine Intervention</span>
            </td>
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
            <td>
                <span>Destroy Undead (CR 2)</span>
            </td>
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
            <td>
                <span>Ability Score Improvement</span>
            </td>
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
            <td>
                <span>Destroy Undead (CR 3)</span>
            </td>
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
            <td>
                <span>Ability Score Improvement</span>
            </td>
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
            <td>
                <span>Destroy Undead (CR 4),</span>
                <span>Divine Domain feature</span>
            </td>
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
            <td>
                <span>Channel Divinity (3/rest)</span>
            </td>
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
            <td>
                <span>Ability Score Improvement</span>
            </td>
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
            <td>
                <span>Divine Intervention Improvement</span>
            </td>
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
</div><!-- -------------------------end table div-->



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h3>Divine Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
            data-target="#featureDomain" aria-expanded="true" aria-controls="featureDomain">[-]</button></span></h3>
        <hr>

        <div class="collapse show mb-3" id="featureDomain">
            <p>Choose one domain related to your deity from the list of available domains. Each domain is detailed in their own feature, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when
                you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.</p>
            <div class="d-flex justify-content-around row mb-3">
                <button type="button" class="btn btn-secondary" id="arcana">Arcana</button>
                <button type="button" class="btn btn-secondary" id="death">Death</button>
                <button type="button" class="btn btn-secondary" id="forge">Forge</button>
                <button type="button" class="btn btn-secondary" id="grave">Grave</button>
                <button type="button" class="btn btn-secondary" id="knowledge">Knowledge</button>
                <button type="button" class="btn btn-secondary" id="life">Life</button>
                <button type="button" class="btn btn-secondary" id="light">Light</button>
                <button type="button" class="btn btn-secondary" id="nature">Nature</button>
                <button type="button" class="btn btn-secondary" id="order">Order</button>
                <button type="button" class="btn btn-secondary" id="peace">Peace</button>
                <button type="button" class="btn btn-secondary" id="protection">Protection</button>
                <button type="button" class="btn btn-secondary" id="tempest">Tempest</button>
                <button type="button" class="btn btn-secondary" id="trickery">Trickery</button>
                <button type="button" class="btn btn-secondary" id="twilight">Twilight</button>
                <button type="button" class="btn btn-secondary" id="war">War</button>
            </div>
            <div id="clericDomain" class="choiceBG"></div>
        </div>

    <h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>As a conduit for divine power, you can cast cleric spells.</p>


        <h6><b>Cantrips</b></h6>
        <p>At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.</p>

        <h6><b>Preparing and Casting Spells</b></h6>
        <p>The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish
            a long rest.</p>
        <p>You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The
            spells must be of a level for which you have spell slots.</p>
        <p>For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level
            spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
        <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>

        <h6><b>Spellcasting Ability</b></h6>
        <p>Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom
            modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.</p>
        <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p>
        <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</p>

        <h6><b>Ritual Casting</b></h6>
        <p>You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>

        <h6><b>Spellcasting Focus</b></h6>
        <p>You can use a holy symbol as a spellcasting focus for your cleric spells.</p>

        <h6><b>Cantrip Versatility</b></h6>
        <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the cleric spell list.</p>
    </div>

</div>`, `<p>cleric 2`, `<p>cleric 3`, `<p>cleric 4`, `<p>cleric 5`, `<p>cleric 6`, `<p>cleric 7`, `<p>cleric 8`, `<p>cleric 3`, `<p>cleric 2`, `<p>cleric 3`, `<p>cleric 2`, `<p>cleric 3`, `<p>cleric 2`, `<p>cleric 3`, `<p>cleric 2`, `<p>cleric 3`, `<p>cleric 2`, `<p>cleric 3`, `<p>cleric 2`];
const clericFeaturesList = [
    [`<li>
    Divine Domain <span id="domain">TEST</span>
    </li><li>
    Spellcasting
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
const arcanaDomain = `<h4 class="text-center">Arcana Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#arcanaCollapse" aria-expanded="true" aria-controls="arcanaCollapse">[-]</button></span></h4>
        <div class="collapse show" id="arcanaCollapse">
            <p>Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility
                that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.</p>
            <p>The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other
                worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and WeeJas of Greyhawk.</p>
            <p>At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.</p>

            <table class="table-striped table-hover mb-2">
                <thead>
                    <tr>
                        <th class="col-2 text-center" data-rd-isroller="false">Cleric Level</th>
                        <th class="col-10" data-rd-isroller="false">Spells</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-2 text-center">1st</td>
                        <td class="col-10">detect magic, magic missile</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">3rd</td>
                        <td class="col-10">magic weapon, Nystul's magic aura</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">5th</td>
                        <td class="col-10">dispel magic, magic circle</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">7th</td>
                        <td class="col-10">arcane eye, Leomund's secret chest</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">9th</td>
                        <td class="col-10">planar binding, teleportation circle</td>
                    </tr>
                </tbody>
            </table>

            <h5>Arcane Initiate<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArcaneInitiate" aria-expanded="true" aria-controls="featureArcaneInitiate">[-]</button></span></h5>
            <hr>

            <div class="collapse show" id="featureArcaneInitiate">
                <p>When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.</p>
            </div>


            <h5>Channel Divinity: Arcane Abjuration<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArcaneAbjuration" aria-expanded="true" aria-controls="featureArcaneAbjuration">[-]</button></span></h5>
            <hr>

            <div class="collapse show" id="featureArcaneAbjuration">
                <p>Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.</p>
                <p>As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails
                    its saving throw, it is turned for 1 minute or until it takes any damage.</p>
                <p>A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or
                    try to escape from an effect that prevents it from moving. If there's nowhere to move, then the creature can use the Dodge action.</p>
                <p>After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the banishment spell, no concentration required) if it isn't on its plane of origin,
                    and its challenge rating is at or below a certain threshold, as shown below.</p>
                <table class="table-striped table-hover mb-2">
                    <thead>
                        <tr>
                            <th class="col-2 text-center" data-rd-isroller="false">Cleric Level</th>
                            <th class="col-10" data-rd-isroller="false">Banishes Creatures of CR...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-2 text-center">5th</td>
                            <td class="col-10">1/2 or lower</td>
                        </tr>
                        <tr>
                            <td class="col-2 text-center">8th</td>
                            <td class="col-10"> 1 or lower</td>
                        </tr>
                        <tr>
                            <td class="col-2 text-center">11th</td>
                            <td class="col-10">2 or lower</td>
                        </tr>
                        <tr>
                            <td class="col-2 text-center">14th</td>
                            <td class="col-10"> 3 or lower</td>
                        </tr>
                        <tr>
                            <td class="col-2 text-center">17th</td>
                            <td class="col-10">4 or lower</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5 class="mt-2">Spell Breaker<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSpellBreaker" aria-expanded="true" aria-controls="featureSpellBreaker">[-]</button></span></h5>
            <hr>

            <div class="collapse show" id="featureSpellBreaker">
                <p>Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the
                    spell slot you use to cast the healing spell.</p>
            </div>

            <h5>Potent Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePotent" aria-expanded="true" aria-controls="featurePotent">[-]</button></span></h5>
            <div class="collapse show" id="featurePotent">
                <p>Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.</p>
            </div>

            <h5>Arcane Mastery<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureMastery" aria-expanded="true" aria-controls="featureMastery">[-]</button></span></h5>
            <hr>

            <div class="collapse show" id="featureMastery">
                <p>At 17th level, you choose four spells from the Wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count
                    as cleric spells for you.</p>
            </div>
        </div>`;
const deathDomain = `<h4 class="text-center">Death Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#deathCollapse" aria-expanded="true" aria-controls="deathCollapse">[-]</button></span></h4>
<div class="collapse show" id="deathCollapse">
    <p>The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and WeeJas are patrons of necromancers, death knights, liches, mummy lords,
        and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and Hel).</p>
    <p>At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">false life, ray of sickness</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">blindness/deafness, ray of enfeeblement</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">animate dead, vampiric touch</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">blight, death ward</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">antilife shell, cloudkill</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiency<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBonusProf" aria-expanded="true" aria-controls="featureBonusProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBonusProf">
        <p>When the cleric chooses this domain at 1st level, he or she gains proficiency with martial weapons.</p>
    </div>

    <h5>Reaper<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureReaper" aria-expanded="true" aria-controls="featureReaper">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureReaper">
        <p>At 1st level, the cleric learns one necromancy cantrip of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range
            and within 5 feet of each other.</p>
    </div>


    <h5>Channel Divinity: Touch of Death<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureTouchDeath" aria-expanded="true" aria-controls="featureTouchDeath">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureTouchDeath">
        <p>Starting at 2nd level, the cleric can use Channel Divinity to destroy another creature's life force by touch.</p>
        <p>When the cleric hits a creature with a melee attack, the cleric can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice his or her cleric level.</p>
    </div>

    <h5>Inescapable Destruction<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDestruction" aria-expanded="true" aria-controls="featureDestruction">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDestruction">
        <p>Starting at 6th level, the cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the character's cleric spells and Channel Divinity options ignores resistance to necrotic damage.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra
            1d8 necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Improved Reaper<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureImpReaper" aria-expanded="true" aria-controls="featureImpReaper">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureImpReaper">
        <p>Starting at 17th level, when the cleric casts a Necromancy spell of 1st through 5th-level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its
            material components, the cleric must provide them for each target.</p>
    </div>
</div>`;
const forgeDomain = `<h4 class="text-center">Forge Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#forgeCollapse" aria-expanded="true" aria-controls="forgeCollapse">[-]</button></span></h4>
<div class="collapse show" id="forgeCollapse">
    <p>The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods
        of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate
        mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect
        them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.</p>
    <p>At each indicated cleric level, add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">identify, searing smite</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">heat metal, magic weapon</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">elemental weapon, protection from energy</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">fabricate, wall of fire</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">animate objects, creation</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiency<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBonusProf" aria-expanded="true" aria-controls="featureBonusProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBonusProf">
        <p>When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.</p>
    </div>

    <h5>Blessing of the Forge<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#Blessing" aria-expanded="true" aria-controls="Blessing">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="Blessing">
        <p>At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until
            you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.</p>
        <p>Once you use this feature, you can't use it again until you finish a long rest.</p>
    </div>


    <h5>Channel Divinity: Artisan's Blessing<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArtisan" aria-expanded="true" aria-controls="featureArtisan">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArtisan">
        <p>Starting at 2nd level, you can use your Channel Divinity to create simple items.</p>
        <p>You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object (see chapter 5, "Equipment," in
            the Player's Handbook for examples of these items). The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.</p>
        <p>The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into
            the creation at the ritual's end, magically forming even nonmetal parts of the creation. The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.</p>
    </div>

    <h5>Soul of the Forge<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSoul" aria-expanded="true" aria-controls="featureSoul">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureSoul">
        <p>Starting at 6th level, your mastery of the forge grants you special abilities:</p>
        <ul>
            <li>You gain resistance to fire damage.</li>
            <li>While wearing heavy armor, you gain a +1 bonus to AC.</li>
        </ul>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra
            1d8 fire damage to the target. When the cleric reaches 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Saint of Forge and Fire<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSaint" aria-expanded="true" aria-controls="featureSaint">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureSaint">
        <p>At 17th level, your blessed affinity with fire and metal becomes more powerful:</p>
        <ul>
            <li>You gain immunity to fire damage</li>
            <li>While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.</li>
        </ul>
    </div>
</div>`;
const graveDomain = `<h4 class="text-center">Grave Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse. To desecrate the peace of the dead is an abomination. Deities of the grave include Kelemvor,
        Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. Followers of these deities seek to put wandering spirits to rest, destroy the undead, and ease the suffering of the dying. Their magic also allows them to
        stave off death for a time, particularly for a person who still has some great work to accomplish in the world. This is a delay of death, not a denial of it, for death will eventually get its due.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">bane, false life</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">gentle repose, ray of enfeeblement</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">revivify, vampiric touch</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">blight, death ward</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">antilife shell, raise dead</td>
            </tr>
        </tbody>
    </table>

    <h5>Circle of Mortality<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBonusProf" aria-expanded="true" aria-controls="featureBonusProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBonusProf">
        <p>At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible
            for each die.</p>
        <p>In addition, you learn the spare the dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.</p>
    </div>

    <h5>Eyes of the Grave<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureEyes" aria-expanded="true" aria-controls="featureEyes">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureEyes">
        <p>At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your
            next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.</p>
    </div>


    <h5>Channel Divinity: Path to the Grave<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePath" aria-expanded="true" aria-controls="featurePath">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePath">
        <p>Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination.</p>
        <p>As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of
            that attack's damage, and then the curse ends.</p>
    </div>

    <h5>Sentinel at Death's Door<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSentinel" aria-expanded="true" aria-controls="featureSentinel">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureSentinel">
        <p>At 6th level, you gain the ability to impede death's progress. As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical
            hit are canceled.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.</p>
    </div>

    <h5>Potent Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePotent" aria-expanded="true" aria-controls="featurePotent">[-]</button></span></h5>
    <div class="collapse show" id="featurePotent">
        <p>Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.</p>
    </div>

    <h5>Keeper of Souls<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureKeeper" aria-expanded="true" aria-controls="featureKeeper">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureKeeper">
        <p>Starting at 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains
            hit points equal to the enemy's number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn.</p>
    </div>
</div>`;
const knowledgeDomain = `<h4 class="text-center">Knowledge Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of
        craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric
        lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus,
        and Goibhniu.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">command, identify</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">augury, suggestion</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">nondetection, speak with dead</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">arcane eye, confusion</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">legend lore, scrying</td>
            </tr>
        </tbody>
    </table>

    <h5>Blessings of Knowledge<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBlessing" aria-expanded="true" aria-controls="featureBlessing">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBlessing">
        <p>At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.</p>
        <p>Your proficiency bonus is doubled for any ability check you make that uses either of those skills.</p>
    </div>

    <h5>Channel Divinity: Knowledge of the Ages<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureAges" aria-expanded="true" aria-controls="featureAges">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureAges">
        <p>Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.</p>
    </div>


    <h5>Channel Divinity: Read Thoughts<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePath" aria-expanded="true" aria-controls="featurePath">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePath">
        <p>At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.</p>
        <p>As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.</p>
        <p>If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.</p>
        <p>During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.</p>
    </div>

    <h5>Potent Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePotent" aria-expanded="true" aria-controls="featurePotent">[-]</button></span></h5>
    <div class="collapse show" id="featurePotent">
        <p>Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.</p>
    </div>

    <h5>Visions of the Past<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureVisions" aria-expanded="true" aria-controls="featureVisions">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureVisions">
        <p>Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events.
            You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.</p>
        <p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
        <p><b>Object Reading.</b> Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event
            involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information
            about that creature.
        </p>
        <p><b>Area Reading.</b> As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute
            you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might
            also include more mundane events that are nevertheless important in your current situation.</p>
    </div>
</div>`;
const lifeDomain = `<h4 class="text-center">Life Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving
        away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods
        of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei).</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10"> bless, cure wounds</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">lesser restoration, spiritual weapon</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">beacon of hope, revivify</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">death ward, guardian of faith</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">mass cure wounds, raise dead</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiency<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureProf" aria-expanded="true" aria-controls="featureProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureProf">
        <p>When you choose this domain at 1st level, you gain proficiency with heavy armor.</p>
    </div>

    <h5>Disciple of Life<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDisciple" aria-expanded="true" aria-controls="featureDisciple">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDisciple">
        <p>Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.</p>
    </div>

    <h5>Channel Divinity: Preserve Life<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePreserve" aria-expanded="true" aria-controls="featurePreserve">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePreserve">
        <p>Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.</p>
        <p>As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This
            feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.</p>
    </div>


    <h5>Blessed Healer<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBlessed" aria-expanded="true" aria-controls="featureBlessed">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBlessed">
        <p>Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When
            you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Supreme Healing<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSupreme" aria-expanded="true" aria-controls="featureSupreme">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureSupreme">
        <p>Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore
            12.
        </p>
    </div>
</div>`;
const lightDomain = `<h4 class="text-center">Light Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods
        are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that
        art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">burning hands, faerie fire</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">flaming sphere, scorching ray</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">daylight, fireball</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">guardian of faith, wall of fire</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">flame strike, scrying</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Cantrip<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureLight" aria-expanded="true" aria-controls="featureLight">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureLight">
        <p>When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.</p>
    </div>

    <h5>Warding Flare<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureFlare" aria-expanded="true" aria-controls="featureFlare">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureFlare">
        <p>Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll,
            causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>
    </div>

    <h5>Channel Divinity: Radiance of the Dawn<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureRadiance" aria-expanded="true" aria-controls="featureRadiance">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureRadiance">
        <p>Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.</p>
        <p>As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal
            to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.</p>
    </div>


    <h5>Improved Flare<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBlessed" aria-expanded="true" aria-controls="featureBlessed">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBlessed">
        <p>Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.</p>
    </div>

    <h5>Potent Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePotent" aria-expanded="true" aria-controls="featurePotent">[-]</button></span></h5>
    <div class="collapse show" id="featurePotent">
        <p>Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.</p>
    </div>

    <h5>Corona of Light<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureCorona" aria-expanded="true" aria-controls="featureCorona">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureCorona">
        <p>Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies
            in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.</p>
    </div>
</div>`;
const natureDomain = `        <h4 class="text-center">Nature Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath).
        Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more
        active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">animal friendship, speak with animals</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">barkskin, spike growth</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">plant growth, wind wall</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">dominate beast, grasping vine</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">insect plague, tree stride</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiency<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureLight" aria-expanded="true" aria-controls="featureLight">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureLight">
        <p>Also at 1st level, you gain proficiency with heavy armor.</p>
    </div>

    <h5>Acolyte of Nature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureFlare" aria-expanded="true" aria-controls="featureFlare">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureFlare">
        <p>At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.</p>
    </div>

    <h5>Channel Divinity: Charm Animals and Plants<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureCharm" aria-expanded="true" aria-controls="featureCharm">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureCharm">
        <p>Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.</p>
        <p>As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by
            you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.</p>
    </div>


    <h5>Dampen Elements<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDampen" aria-expanded="true" aria-controls="featureDampen">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDampen">
        <p>Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage
            (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Master of Nature<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureMaster" aria-expanded="true" aria-controls="featureMaster">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureMaster">
        <p>At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures
            will do on its next turn.</p>
    </div>
</div>`;
const orderDomain = `<h4 class="text-center">Order Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>The Order Domain represents discipline, as well as devotion to a society or an institution and strict obedience to the laws governing it. On Ravnica, the domain is favored by clerics of the Azorius Senate, who use it to maintain and enforce
        the law, and of the Orzhov Syndicate, who exploit law and order for their personal gain. On other worlds, gods who grant access to this domain include Bane, Tyr, Majere, Erathis, Pholtus, Wee Jas, Aureon, Maglubiyet, Nuada, Athena, Anubis,
        Forseti, and Asmodeus.</p>
    <p>The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an
        action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their guilds or deities.</p>
    <p>Law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security
        in a chaotic multiverse.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">command, heroism</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">hold person, zone of truth</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">mass healing word, slow</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">compulsion, locate creature</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">commune, dominate person</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiencies<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureLight" aria-expanded="true" aria-controls="featureLight">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureLight">
        <p>When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice). <b>INSERT SKILLS CHOICE HERE!!!!!!!!</b></p>
    </div>

    <h5>Voice of Authority<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureVoice" aria-expanded="true" aria-controls="featureVoice">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureVoice">
        <p>Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell
            to make one weapon attack against a creature of your choice that you can see.</p>
        <p>If the spell targets more than one ally, you choose the ally who can make the attack.</p>
    </div>

    <h5>Channel Divinity: Order's Demand<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDemand" aria-expanded="true" aria-controls="featureDemand">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDemand">
        <p>Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.</p>
        <p>As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed
            creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.</p>
    </div>

    <h5>Embodiment of the Law<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDampen" aria-expanded="true" aria-controls="featureDampen">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDampen">
        <p>At 6th level, you become remarkably adept at channeling magical energy to compel others.</p>
        <p>If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When
            you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Order's Wrath<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureCorona" aria-expanded="true" aria-controls="featureCorona">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureCorona">
        <p>Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your
            next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.</p>
    </div>
</div>`;
const peaceDomain = `<h4 class="text-center">Peace Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to
        prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain.</p>
    <p>Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those
        who are driven to fight for the way of peace.</p>
    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-6 text-center">Example Deity</th>
                <th class="col-6 text-center">Pantheon</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-6 text-center">Angharradh</td>
                <td class="col-6 text-center">Elven</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Berronar Truesilver</td>
                <td class="col-6 text-center">Dwarven</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Boldrei</td>
                <td class="col-6 text-center">Eberron</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Cyrrollalee</td>
                <td class="col-6 text-center">Halfling</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Eldath</td>
                <td class="col-6 text-center">Forgotten Realms</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Gaerdal</td>
                <td class="col-6 text-center">Ironhand Gnomish</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Paladine</td>
                <td class="col-6 text-center">Dragonlance</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Rao</td>
                <td class="col-6 text-center">Greyhawk</td>
            </tr>
        </tbody>
    </table>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">heroism, sanctuary</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">aid, warding bond</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">beacon of hope, sending</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10"> aura of purity, Otiluke's resilient sphere</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">greater restoration, Rary's telepathic bond</td>
            </tr>
        </tbody>
    </table>

    <h5>Implement of Peace<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureImplement" aria-expanded="true" aria-controls="featureImplement">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureImplement">
        <p>You gain proficiency in the Insight, Performance, or Persuasion skill (your choice).<b>INSERT SKILLS CHOICE HERE!!!!!!!!</b></p>
    </div>

    <h5>Emboldening Bond<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureEmboldening" aria-expanded="true" aria-controls="featureEmboldening">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureEmboldening">
        <p>You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical
            bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw
            it makes. Each creature can add the d4 no more than once per turn.</p>
        <p>You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>
    </div>

    <h5>Channel Divinity: Balm of Peace<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBalm" aria-expanded="true" aria-controls="featureBalm">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBalm">
        <p>You can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action,
            you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.</p>
    </div>

    <h5>Protective Bond<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBond" aria-expanded="true" aria-controls="featureBond">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBond">
        <p>The bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to
            an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.</p>
    </div>

    <h5>Potent Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePotent" aria-expanded="true" aria-controls="featurePotent">[-]</button></span></h5>
    <div class="collapse show" id="featurePotent">
        <p>Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.</p>
    </div>

    <h5>Expansive Bond<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureExpansive" aria-expanded="true" aria-controls="featureExpansive">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureExpansive">
        <p>The benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance
            to that damage.</p>
    </div>
</div>`;
const protectionDomain = `<h4 class="text-center">Protection Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods' faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat.
        These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind. Deities who grant this domain include Helm, Ilmater, Torm, Tyr, Heironeous,
        St. Cuthbert, Paladine, Dol Dorn, the Silver Flame, Bahamut, Yondalla, Athena, and Odin.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">compelled duel, protection from evil and good</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10"> aid, protection from poison</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">protection from energy, slow</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">guardian of faith, Otiluke's resilient sphere</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">antilife shell, wall of force</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiency<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBonusProf" aria-expanded="true" aria-controls="featureBonusProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBonusProf">
        <p>When you choose this domain at 1st level, you gain proficiency with heavy armor.</p>
    </div>

    <h5>Shield of the Faithful<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureShield" aria-expanded="true" aria-controls="featureShield">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureShield">
        <p>Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do
            so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target.</p>
    </div>

    <h5>Channel Divinity: Radiant Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureRadiant" aria-expanded="true" aria-controls="featureRadiant">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureRadiant">
        <p>Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor.</p>
        <p>As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your cleric level.</p>
    </div>

    <h5>Blessed Healer<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBlessed" aria-expanded="true" aria-controls="featureBlessed">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBlessed">
        <p>Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When
            you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Indomitable Defense<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureExpansive" aria-expanded="true" aria-controls="featureExpansive">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureExpansive">
        <p>At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose.</p>
        <p>As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action.</p>
    </div>
</div>`;
const tempestDomain = `<h4 class="text-center">Tempest Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>Gods whose portfolios include the Tempest domain—including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain
        gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are
        ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine
        wrath.
    </p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10"> fog cloud, thunderwave</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">gust of wind, shatter</tr>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">call lightning, sleet storm</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">control water, ice storm</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">destructive wave, insect plague</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiency<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBonusProf" aria-expanded="true" aria-controls="featureBonusProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBonusProf">
        <p>When you choose this domain at 1st level, you gain proficiency with heavy armor and martial weapons.</p>
    </div>

    <h5>Wrath of the Storm<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureWrath" aria-expanded="true" aria-controls="featureWrath">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureWrath">
        <p>Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes
            2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.</p>
        <p>You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>
    </div>

    <h5>Channel Divinity: Destructive Wrath<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDestructive" aria-expanded="true" aria-controls="featureDestructive">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDestructive">
        <p>Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.</p>
        <p>When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.</p>
    </div>

    <h5>Thunderbolt Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureThunderbolt" aria-expanded="true" aria-controls="featureThunderbolt">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureThunderbolt">
        <p>At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When
            you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Stormborn<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStormborn" aria-expanded="true" aria-controls="featureStormborn">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureStormborn">
        <p>At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.</p>
    </div>
</div>`;
const trickeryDomain = `<h4 class="text-center">Trickery Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves,
        scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks,
        deception, and theft rather than direct confrontation.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">charm person, disguise self</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">mirror image, pass without trace</tr>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">blink, dispel magic</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">dimension door, polymorph</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">dominate person, modify memory</td>
            </tr>
        </tbody>
    </table>

    <h5>Blessing of the Trickster<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureBonusTrick" aria-expanded="true" aria-controls="featureBonusTrick">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureBonusTrick">
        <p>Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature
            again.
        </p>
    </div>

    <h5>Invoke Duplicity<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureDuplicity" aria-expanded="true" aria-controls="featureDuplicity">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureDuplicity">
        <p>Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.</p>
        <p>As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet
            of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.</p>
        <p>For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage
            on attack rolls against that creature, given how distracting the illusion is to the target.</p>
    </div>

    <h5>Channel Divinity: Cloak of Shadows<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureCloak" aria-expanded="true" aria-controls="featureCloak">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureCloak">
        <p>Starting at 6th level, you can use your Channel Divinity to vanish.</p>
        <p>As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When
            you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Improved Duplicity<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureImpro" aria-expanded="true" aria-controls="featureImpro">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureImpro">
        <p>At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.</p>
    </div>
</div>`;
const twilightDomain = `<h4 class="text-center">Twilight Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night.</p>
    <p>Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.</p>

    <table class="table-striped table-hover mb-2">
        <caption>Twilight Deities</caption>
        <thead>
            <tr>
                <th class="col-6 text-center">Example Deity</th>
                <th class="col-6 text-center">Pantheon</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-6 text-center">Boldrei</td>
                <td class="col-6 text-center">Eberron</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Celestian</td>
                <td class="col-6 text-center">Greyhawk</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Dol Arrah</td>
                <td class="col-6 text-center">Eberron</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Helm</td>
                <td class="col-6 text-center">Forgotten Realms</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Ilmater</td>
                <td class="col-6 text-center">Forgotten Realms</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Mishakal</td>
                <td class="col-6 text-center">Dragonlance</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Selûne</td>
                <td class="col-6 text-center">Forgotten Realms</td>
            </tr>
            <tr>
                <td class="col-6 text-center">Yondalla</td>
                <td class="col-6 text-center">Halfling</td>
            </tr>
        </tbody>
    </table>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">faerie fire, sleep</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">moonbeam, see invisibility</tr>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">aura of vitality, Leomund's tiny hut</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10"> aura of life, greater invisibility</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">circle of power, mislead</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiencies<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureProf" aria-expanded="true" aria-controls="featureProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureProf">
        <p>You gain proficiency with martial weapons and heavy armor.</p>
    </div>

    <h5>Eyes of Night<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureEyes" aria-expanded="true" aria-controls="featureEyes">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureEyes">
        <p>You can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.</p>
        <p>As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts
            for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.</p>
    </div>

    <h5>Vigilant Blessing<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureVigilant" aria-expanded="true" aria-controls="featureVigilant">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureVigilant">
        <p>The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this
            feature again.</p>
    </div>

    <h5>Channel Divinity: Twilight Sanctuary<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSanctuary" aria-expanded="true" aria-controls="featureSanctuary">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureSanctuary">
        <p>You can use your Channel Divinity to refresh your allies with soothing twilight.</p>
        <p>As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you
            are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:</p>
        <ul>
            <li>You grant it temporary hit points equal to 1d6 plus your cleric level.</li>
            <li>You end one effect on it causing it to be charmed or frightened.</li>
        </ul>
    </div>

    <h5>Steps of Night<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSteps" aria-expanded="true" aria-controls="featureSteps">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureSteps">
        <p>You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus
            action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When
            you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Twilight Shroud<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureShroud" aria-expanded="true" aria-controls="featureShroud">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureShroud">
        <p>The twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary.</p>
    </div>
</div>`;
const warDomain = `<h4 class="text-center">War Domain<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#domainCollapse" aria-expanded="true" aria-controls="domainCollapse">[-]</button></span></h4>
<div class="collapse show" id="domainCollapse">
    <p>War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and
        reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous,
        and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take
        a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.</p>
    <p>At each indicated cleric level, you add the listed spells to your spells prepared.</p>

    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center">Cleric Level</th>
                <th class="col-10">Spells</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1st</td>
                <td class="col-10">divine favor, shield of faith</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3rd</td>
                <td class="col-10">magic weapon, spiritual weapon</tr>
            </tr>
            <tr>
                <td class="col-2 text-center">5th</td>
                <td class="col-10">crusader's mantle, spirit guardians</td>
            </tr>
            <tr>
                <td class="col-2 text-center">7th</td>
                <td class="col-10">freedom of movement, stoneskin</td>
            </tr>
            <tr>
                <td class="col-2 text-center">9th</td>
                <td class="col-10">flame strike, hold monsters</td>
            </tr>
        </tbody>
    </table>

    <h5>Bonus Proficiencies<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureProf" aria-expanded="true" aria-controls="featureProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureProf">
        <p>You gain proficiency with martial weapons and heavy armor.</p>
    </div>

    <h5>War Priest<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePriest" aria-expanded="true" aria-controls="featurePriest">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePriest">
        <p>From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom
            modifier (a minimum of once). You regain all expended uses when you finish a long rest.</p>
    </div>

    <h5>Channel Divinity: Guided Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureGuided" aria-expanded="true" aria-controls="featureGuided">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureGuided">
        <p>Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll,
            but before the DM says whether the attack hits or misses.</p>
    </div>

    <h5>Channel Divinity: War God's Blessing<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureSanctuary" aria-expanded="true" aria-controls="featureSanctuary">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureSanctuary">
        <p>At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the
            DM says whether the attack hits or misses.</p>
    </div>

    <h5>Divine Strike<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureStrike" aria-expanded="true" aria-controls="featureStrike">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureStrike">
        <p>At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by
            the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.</p>
    </div>

    <h5>Avatar of Battle<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureShroud" aria-expanded="true" aria-controls="featureShroud">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureShroud">
        <p>At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.</p>
    </div>
</div>`;
document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    if (event.target && event.target.matches("#arcana")) {
        document.getElementById("clericDomain").innerHTML = arcanaDomain;
        characterSubClass = "(Arcana)";
    } else if (event.target && event.target.matches("#death")) {
        document.getElementById("clericDomain").innerHTML = deathDomain;
        characterSubClass = "(Death)";
    } else if (event.target && event.target.matches("#forge")) {
        document.getElementById("clericDomain").innerHTML = forgeDomain;
        characterSubClass = "(Forge)";
    } else if (event.target && event.target.matches("#grave")) {
        document.getElementById("clericDomain").innerHTML = graveDomain;
        characterSubClass = "(Grave)";
    } else if (event.target && event.target.matches("#knowledge")) {
        document.getElementById("clericDomain").innerHTML = knowledgeDomain;
        characterSubClass = "(Knowledge)";
    } else if (event.target && event.target.matches("#life")) {
        document.getElementById("clericDomain").innerHTML = lifeDomain;
        characterSubClass = "(Life)";
    } else if (event.target && event.target.matches("#light")) {
        document.getElementById("clericDomain").innerHTML = lightDomain;
        characterSubClass = "(Light)";
    } else if (event.target && event.target.matches("#nature")) {
        document.getElementById("clericDomain").innerHTML = natureDomain;
        characterSubClass = "(Nature)";
    } else if (event.target && event.target.matches("#order")) {
        document.getElementById("clericDomain").innerHTML = orderDomain;
        characterSubClass = "(Order)";
    } else if (event.target && event.target.matches("#peace")) {
        document.getElementById("clericDomain").innerHTML = peaceDomain;
        characterSubClass = "(Peace)";
    } else if (event.target && event.target.matches("#protection")) {
        document.getElementById("clericDomain").innerHTML = protectionDomain;
        characterSubClass = "(Protection)";
    } else if (event.target && event.target.matches("#tempest")) {
        document.getElementById("clericDomain").innerHTML = tempestDomain;
        characterSubClass = "(Tempest)";
    } else if (event.target && event.target.matches("#trickery")) {
        document.getElementById("clericDomain").innerHTML = trickeryDomain;
        characterSubClass = "(Trickery)";
    } else if (event.target && event.target.matches("#twilight")) {
        document.getElementById("clericDomain").innerHTML = twilightDomain;
        characterSubClass = "(Twilight)";
    } else if (event.target && event.target.matches("#war")) {
        document.getElementById("clericDomain").innerHTML = warDomain;
        characterSubClass = "(War)";
    }
    document.getElementById("summarySubClass").textContent = characterSubClass;
});


/*###################################################################
######################### Druid ##################################
#####################################################################*/
const druidFeaturesByLevel = [`<h1 class="text-center">Druid<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span></h1>

<div class="collapse show" id="collapseIntro">
    <p>Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.</p>
    <p>Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists' activities.</p>
    <p>Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.</p>
    <p>Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions
        of nature's indomitable will.</p>

    <h5>Power of Nature</h5>
    <p>Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to
        a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.</p>

    <p>Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the
        point where they prefer animal form to their natural form.</p>

    <h5>Preserve the Balance</h5>
    <p>For druids, nature exists in a precarious balance. The four elements that make up a world—air, earth, fire, and water—must remain in equilibrium. If one element were to gain power over the others, the world could be destroyed, drawn into one
        of the elemental planes and broken apart into its component elements. Thus, druids oppose cults of Elemental Evil and others who promote one element to the exclusion of others.</p>
    <p>Druids are also concerned with the delicate ecological balance that sustains plant and animal life, and the need for civilized folk to live in harmony with nature, not in opposition to it. Druids accept that which is cruel in nature, and they
        hate that which is unnatural, including aberrations (such as beholders and mind flayers) and undead (such as zombies and vampires). Druids sometimes lead raids against such creatures, especially when the monsters encroach on the druids'
        territory.
    </p>
    <p>Druids are often found guarding sacred sites or watching over regions of unspoiled nature. But when a significant danger arises, threatening nature's balance or the lands they protect, druids take on a more active role in combating the threat,
        as adventurers.</p>

    <p>Druids are the caretakers of the natural world, and it is said that in time a druid becomes the voice of nature, speaking the truth that is too subtle for the general populace to hear. Many who become druids find that they naturally gravitate
        toward nature; its forces, cycles, and movements fill their minds and spirits with wonder and insight. Many sages and wise folk have studied nature, writing volumes about its mystery and power, but druids are a special kind of being: at
        some point, they begin to embody these natural forces, producing magical phenomena that link them to the spirit of nature and the flow of life. Because of their strange and mysterious power, druids are often revered, shunned, or considered
        dangerous by the people around them.</p>

    <i>“Even in death, each creature plays its part in maintaining the Great Balance. But now an imbalance grows, a force that seeks to hold sway over nature. This is the destructive behavior of the mortal races. The farther away from nature their actions take them, the more corrupting their influence becomes. As druids, we seek mainly to protect and educate, to preserve the Great Balance, but there are times when we must rise up against danger and eradicate it.”</i>
    <p class="text-right">— Safhran, Arch druid</p>
</div>



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

    <h5>Druidic<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature1">
        <p>You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful
            DC 15 Wisdom (Perception) check but can't decipher it without magic.</p>
    </div>

    <h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature3">
        <p>Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See chapter 10 for the general rules of spellcasting and chapter 11 for the druid spell list.</p>

        <h6><b>Cantrips</b></h6>
        <p>At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.</p>

        <h6><b>Preparing and Casting Spells</b></h6>
        <p>The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you
            finish a long rest.</p>
        <p>You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells
            must be of a level for which you have spell slots.</p>
        <p>For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level
            spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.</p>
        <p>You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>

        <h6><b>Spellcasting Ability</b></h6>
        <p>Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier
            when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.</p>
        <p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Wisdom modifier</p>
        <p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Wisdom modifier</p>

        <h6><b>Ritual Casting</b></h6>
        <p>You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>

        <h6><b>Spellcasting Focus</b></h6>
        <p>You can use a druidic focus as a spellcasting focus for your druid spells</p>

        <h6><b>Cantrip Versatility</b></h6>
        <p>Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the druid spell list.</p>
    </div>

</div>`, `<p>druid 2`, `<p>druid 3`, `<p>druid 4`, `<p>druid 5`, `<p>druid 6`, `<p>druid 7`, `<p>druid 8`, `<p>druid 3`, `<p>druid 2`, `<p>druid 3`, `<p>druid 2`, `<p>druid 3`, `<p>druid 2`, `<p>druid 3`, `<p>druid 2`, `<p>druid 3`, `<p>druid 2`, `<p>druid 3`, `<p>druid 2`];
const druidFeaturesList = [
    [`<li>
    Druidic
    </li><li>
    Spellcasting
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


/*###################################################################
######################### Fighter ##################################
#####################################################################*/
const fighterFeaturesByLevel = [`<h1 class="text-center">Fighter<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span></h1>

<div class="collapse show" id="collapseIntro">
    <p>A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts
        orders, helping the two combatants coordinate their assault to the best advantage.</p>
    <p>A dwarf in chain mail interposes his shield between the ogre's club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for
        a blind spot in its defenses.</p>
    <p>A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd's delight—and his own tactical advantage. His opponent's sword flares with blue light an instant before
        she sends lightning flashing forth to smite him.</p>
    <p>All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters,
        they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.</p>

    <h5>Well-Rounded Specialists</h5>
    <p>Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields
        and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills
        with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike.</p>

    <h5>Trained for Danger</h5>
    <p>Not every member of the city watch, the village militia, or the queen's army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards,
        dedicated knights, and similar figures are fighters.</p>

    <p>Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind.
        There are greater risks, perhaps, but also much greater rewards—few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example.</p>

    <p>Of all the adventurers in the worlds of D&D, the fighter is perhaps the greatest paradox. On the one hand, a singular feature of the class is that no two fighters ply their craft in quite the same way; their weapons, armor, and tactics differ
        across a vast spectrum. On the other hand, regardless of the tools and methods one uses, at the heart of every fighter's motivation lies the same basic truth: it is better to wound than to be wounded.</p>
    <p>Although some adventuring fighters risk their lives fighting for glory or treasure, others are primarily concerned with the welfare of others. They put more value on the well-being of the society, the village, or the group than on their own
        safety. Even if there's gold in the offing, the true reward for most fighters comes from sending enemies to their doom.</p>

    <i>“Let me know when you're all done talking.”</i>
    <p>— Tordek</p>
</div>



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

           <h5>Fighting Style<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
        data-target="#featureStyle" aria-expanded="true" aria-controls="featureStyle">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureStyle">
        <p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take the same Fighting Style option more than once, even if you get to choose again.</p>
        <div class="d-flex justify-content-around row mb-3">
            <button type="button" class="btn btn-secondary" id="archery">Archery</button>
            <button type="button" class="btn btn-secondary" id="blind">Blind fighting</button>
            <button type="button" class="btn btn-secondary" id="closeQuarter">Close Quarter Shooter</button>
            <button type="button" class="btn btn-secondary" id="defense">Denfense</button>
            <button type="button" class="btn btn-secondary" id="dueling">Dueling</button>
            <button type="button" class="btn btn-secondary" id="great">Great Weapong Fighting</button>
            <button type="button" class="btn btn-secondary" id="interception">Interception</button>
            <button type="button" class="btn btn-secondary" id="mariner">Mariner</button>
            <button type="button" class="btn btn-secondary" id="protectionStyle">Protection</button>
            <button type="button" class="btn btn-secondary" id="superior">Superior Technique</button>
            <button type="button" class="btn btn-secondary" id="thrown">Thrown Weapon Fighting</button>
            <button type="button" class="btn btn-secondary" id="tunnel">Tunnel Fighter</button>
            <button type="button" class="btn btn-secondary" id="twoWeapon">Two-Weapon-Fighting</button>
            <button type="button" class="btn btn-secondary" id="unarmed">Unarmored Fighting</button>
        </div>
        <div id="fightingStyle" class="choiceBG"></div>
        <hr>
        <h6><b>Martial Versatility</b></h6>
        <p>Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits
            of one style and gain the benefits of another style.</p>
    </div>
        

        

        
    </div>

    <h5>Second Wind<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="feature2">
        <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>
        <p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>
    </div>
</div>`, `<p>fighter 2`, `<p>fighter 3`, `<p>fighter 4`, `<p>fighter 5`, `<p>fighter 6`, `<p>fighter 7`, `<p>fighter 8`, `<p>fighter 3`, `<p>fighter 2`, `<p>fighter 3`, `<p>fighter 2`, `<p>fighter 3`, `<p>fighter 2`, `<p>fighter 3`, `<p>fighter 2`, `<p>fighter 3`, `<p>fighter 2`, `<p>fighter 3`, `<p>fighter 2`];
const archery = `    <h6 class="text-center"><b>Archery</b></h6>
<p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p>`;
const blindFighting = `<h6 class="text-center"><b>Blind Fighting</b></h6>
<p>You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless
    the creature successfully hides from you.</p>`;
const closeQuartersShooter = `<h6 class="text-center"><b>Close Quarters Shooter</b></h6>
<p>When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have
    a +1 bonus to attack rolls on ranged attacks.</p>`;
const defense = `<h6 class="text-center"><b>Defense</b></h6>
<p>While you are wearing armor, you gain a +1 bonus to AC.</p>`;
const dueling = `<h6 class="text-center"><b>Dueling</b></h6>
<p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p>`;
const greatWeaponFighting = `<h6 class="text-center"><b>Great Weapon Fighting</b></h6>
<p>When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed
    or versatile property for you to gain this benefit.</p>`;
const interception = `<h6 class="text-center"><b>Interception</b></h6>
<p>When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding
    a shield or a simple or martial weapon to use this reaction.</p>`;
const mariner = `<h6 class="text-center"><b>Mariner</b></h6>
<p>As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to AC.</p>`;
const protection = `<h6 class="text-center"><b>Protection</b></h6>
<p>When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</p>`;
const superiorTechnique = `<h6 class="text-center"><b>Superior Technique</b></h6>
<p>You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency
    bonus + your Strength or Dexterity modifier (your choice).</p>
<p>You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority
    dice when you finish a short or long rest.</p>`;
const thrownWeaponFighting = `<h6 class="text-center"><b>Thrown Weapon Fighting</b></h6>
<p>You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.</p>`;
const tunnelFighter = `<h6 class="text-center"><b>Tunnel Fighter</b></h6>
<p>As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee
    attack against a creature that moves more than 5 feet while within your reach.</p>`;
const twoWeaponFighting = `<h6 class="text-center"><b>Two-Weapon Fighting</b></h6>
<p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p>`;
const unarmedFighting = `<h6 class="text-center"><b>Unarmed Fighting</b></h6>
<p>Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8.</p>
<p>At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.</p>`;
document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    if (event.target && event.target.matches("#archery")) {
        document.getElementById("fightingStyle").innerHTML = archery;
    } else if (event.target && event.target.matches("#blind")) {
        document.getElementById("fightingStyle").innerHTML = blindFighting;
    } else if (event.target && event.target.matches("#closeQuarter")) {
        document.getElementById("fightingStyle").innerHTML = closeQuartersShooter;
    } else if (event.target && event.target.matches("#defense")) {
        document.getElementById("fightingStyle").innerHTML = defense;
    } else if (event.target && event.target.matches("#dueling")) {
        document.getElementById("fightingStyle").innerHTML = dueling;
    } else if (event.target && event.target.matches("#great")) {
        document.getElementById("fightingStyle").innerHTML = greatWeaponFighting;
    } else if (event.target && event.target.matches("#interception")) {
        document.getElementById("fightingStyle").innerHTML = interception;
    } else if (event.target && event.target.matches("#mariner")) {
        document.getElementById("fightingStyle").innerHTML = mariner;
    } else if (event.target && event.target.matches("#protectionStyle")) {
        document.getElementById("fightingStyle").innerHTML = protection;
    } else if (event.target && event.target.matches("#superior")) {
        document.getElementById("fightingStyle").innerHTML = superiorTechnique;
    } else if (event.target && event.target.matches("#thrown")) {
        document.getElementById("fightingStyle").innerHTML = thrownWeaponFighting;
    } else if (event.target && event.target.matches("#tunnel")) {
        document.getElementById("fightingStyle").innerHTML = tunnelFighter;
    } else if (event.target && event.target.matches("#twoWeapon")) {
        document.getElementById("fightingStyle").innerHTML = twoWeaponFighting;
    } else if (event.target && event.target.matches("#unarmed")) {
        document.getElementById("fightingStyle").innerHTML = unarmedFighting;
    }
});
const fighterFeaturesList = [
    [`<li>
    Fighting style <span id="fStyle">TEST</span>
    </li><li>
    Second Wind
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

/*###################################################################
######################### Monk ##################################
#####################################################################*/
const monkFeaturesByLevel = [`<h1 class="text-center">Monk<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span></h1>

<div class="collapse show" id="collapseIntro">
    <p>Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling,
        until at last she stands alone.</p>
    <p>Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.</p>
    <p>Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade free of its cloth-wrapped scabbard and peers through
        the open window at the tyrant prince, so vulnerable in the grip of sleep.</p>
    <p>Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy
        infuses all that a monk does.</p>

    <h5>The Magic of Ki</h5>
    <p>Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within
        themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their
        unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.</p>

    <h5>Training and Asceticism</h5>
    <p>Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many
        entered the monastery as children, sent to live there when their parents died, when food couldn't be found to support them, or in return for some kindness that the monks had performed for their families.</p>
    <p>Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader,
        a noble patron, or some other mortal or divine power.</p>
    <p>The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters
        or tyrants.</p>
    <p>For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching
        their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure.</p>

    <p>Monks walk a path of contradiction. They study their art as a wizard does, and like a wizard, they wear no armor and typically eschew weapons. Yet they are deadly combatants, their abilities on a par with those of a raging barbarian or a superbly
        trained fighter. Monks embrace this seeming contradiction, for it speaks to the core of all monastic study. By coming to know oneself completely, one learns much of the wider world.</p>
    <p>A monk's focus on inner mastery leads many such individuals to become detached from society, more concerned with their personal experience than with happenings elsewhere. Adventuring monks are a rare breed of an already rare type of character,
        taking their quest for perfection beyond the walls of the monastery into the world at large.</p>

    <i>“Do not mistake my silence for acceptance of your villainy. While you blustered and threatened, I've planned four different ways to snap your neck with my bare hands.”</i>
    <p class="text-right">— Ember, grand master of flowers</p>
</div>



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
const monkFeaturesList = [
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


/*###################################################################
######################### mystic ##################################
#####################################################################*/
const mysticFeaturesByLevel = [`<h1 class="text-center">Mystic<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span>
</h1>

<div class="collapse show" id="collapseIntro">
<p>A human clad in simple robes walks along a forest path. A gang of goblins emerges from the brush, arrows trained on him, their smiles wide at their good fortune of finding such easy prey for the legion's slave pens. Their smiles turn to shrieks of terror as the traveler grows to giant size and leaps at them, his staff now a deadly cudgel.</p>
<p>The militia forms in ranks to prepare for the orcs' charge. The growling brutes howl their battle cries and surge forward. To their surprise, the human rabble holds its ground and fights with surprising ferocity. Suddenly, mindless fear clings to the orcs' minds and they, despite facing a far inferior foe, turn and run, never noticing the calm half-elf standing amid the militia and directing its efforts.</p>
<p>Baron von Ludwig was always proud of his grand library. Little did he know that each evening, a gnome laden with blank scrolls slipped past his guards each night and dutifully copied his most heavily guarded archives. When the duke's men arrived to arrest him for dealing with demons, he never guessed that the gnome scribe traveling with them had spent more time in his keep than he had over the past year.</p>
<p>These heroes are all mystics, followers of a strange and mysterious form of power. Mystics shun the world to turn their eyes inward, mastering the full potential of their minds and exploring their psyches before turning to face the world. Mystics are incredibly rare, and most prefer to keep the nature of their abilities secret. Using their inner, psychic strength, they can read minds, fade into invisibility, transform their bodies into living iron, and seize control of the physical world and bend it to their will.</p>

<h5>Hermits and Outcasts</h5>
<p>Mystics are loners. Most discover the secrets of their power through vague references in tomes of lore or by ingratiating themselves to a master of the power.</p>
<p>In order to master their power, mystics must first master themselves. They spend months and years in quiet contemplation, exploring their minds and leaving nothing uncovered. During this time, they shun society and typically live as hermits at the edge of society. A mystic who studied under a master worked as a virtual slave, toiling away at mundane tasks in return for the occasional lesson or cryptic insight.</p>
<p>When mystics finally master their power, they return to the world to broaden their horizons and practice their craft. Some mystics prefer to remain isolated, but those who become adventurers aren't content to remain on the fringe of the world.</p>

<h5>Eccentric Minds</h5>
<p>In order to maintain the strict discipline and intense self-knowledge needed to tap into their power, mystics develop a variety of practices to keep their focus sharp.</p>
<p>These practices are reflected in taboos and quirks, strange little behaviors that govern a mystic's actions. These quirks are oaths or behavioral tics that help keep mystics in the proper frame of mind while maintaining perfect control over their minds and bodies.</p>

<P>While these taboos are harmless, they help cast mystics as outsiders. Few feel accepted by society, and fewer still care to become integrated with it. To mystics, the life of the mind is where they feel most at home.</P>
</div>

<h2 class="text-center">Features</h2>
        <hr class="class-2">


        <h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
                    data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
        <div class="collapse show" id="level1">

<h5>Psionics<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
    <p>As a student of psionics, you can master and use psionic talents and disciplines, the rules for which appear at the end of this document. Psionics is a special form of magic use, distinct from spellcasting.</p>

    <h6><b>Psionic Talents</b></h6>
    <p>A psionic talent is a minor psionic effect you have mastered. At 1st level, you know one psionic talent of your choice. You learn additional talents of your choice at higher levels. The Talents Known column of the Mystic table shows the
        total number of talents you know at each level; when that number goes up for you, choose a new talent.</p>

    <h6><b>Psionic Disciplines</b></h6>
    <p>A psionic discipline is a rigid set of mental exercises that allows a mystic to manifest psionic power. A mystic masters only a few disciplines at a time.</p>
    <p>At 1st level, you know one psionic discipline of your choice. The Disciplines Known column of the Mystic table shows the total number of disciplines you know at each level; when that number goes up for you, choose a new discipline.</p>
    <p>In addition, whenever you gain a level in this class, you can replace one discipline you know with a different one of your choice.</p>

    <h6><b>Psi Points</b></h6>
    <p>You have an internal reservoir of energy that can be devoted to psionic disciplines you know. This energy is represented by psi points. Each psionic discipline describes effects you can create with it by spending a certain number of psi
        points. A psionic talent requires no psi points.</p>
    <p>The number of psi points you have is based on your mystic level, as shown in the Psi Points column of the Mystic table. The number shown for your level is your psi point maximum. Your psi point total returns to its maximum when you finish
        a long rest. The number of psi points you have can't go below 0 or over your maximum.</p>

    <h6><b>Psi Limit</b></h6>
    <p>Though you have access to a potent amount of psionic energy, it takes training and practice to channel that energy. There is a limit on the number of psi points you can spend to activate a psionic discipline. The limit is based on your
        mystic level, as shown in the Psi Limit column of the Mystic table. For example, as a 3rd-level mystic, you can spend no more than 3 psi points on a discipline each time you use it, no matter how many psi points you have.
    </p>

    <h6><b>Psychic Focus</b></h6>
    <p>You can focus psionic energy on one of your psionic disciplines to draw ongoing benefits from it. As a bonus action, you can choose one of your psionic disciplines and gain its psychic focus benefit, which is detailed in that discipline's
        description. The benefit lasts until you are incapacitated or until you use another bonus action to choose a different focus benefit.</p>
    <p>You can have only one psychic focus benefit at a time, and using the psychic focus of one discipline doesn't limit your ability to use other disciplines.</p>

    <h6><b>Psionic Ability</b></h6>
    <p>Intelligence is your psionic ability for your psionic disciplines. You use your Intelligence modifier when setting the saving throw DC for a psionic discipline or when making an attack roll with one.</p>
    <p><b>Discipline save DC</b> = 8 + your proficiency bonus + your Intelligence modifier</p>
    <p><b>Discipline attack modifier</b> = your proficiency bonus + your Intelligence modifier</p>
</div>

<h5>Psionic Disciplines and Talents<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature2">
    <p>Psionic talents and disciplines are the heart of a mystic's craft. They are the mental exercises and psionic formulae used to forge will into tangible, magical effects.</p>
    <p>Psionic disciplines were each discovered by different orders and tend to reflect their creators' specialties. However, a mystic can learn any discipline regardless of its associated order.</p>
</div>

<h5>Using a Discipline<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature3" aria-expanded="true" aria-controls="feature3">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature3">
    <p>Each psionic discipline has several ways you can use it, all contained in its description. The discipline specifies the type of action and number of psi points it requires. It also details whether you must concentrate on its effects, how
        many targets it affects, what saving throws it requires, and so on.</p>
    <p>The following sections go into more detail on using a discipline. Psionic disciplines are magical and function similarly to spells.</p>

    <h6><b>Psychic Focus</b></h6>
    <p>The Psychic Focus section of a discipline describes the benefit you gain when you choose that discipline for your psychic focus.</p>

    <h6><b>Effect Options and Psi Points</b></h6>
    <p>A discipline provides different options for how to use it with your psi points. Each effect option has a name, and the psi point cost of that option appears in parentheses after its name. You must spend that number of psi points to use
        that option, while abiding by your psi limit. If you don't have enough psi points left, or the cost is above your psi limit, you can't use the option.</p>
    <p>Some options show a range of psi points, rather than a specific cost. To use that option, you must spend a number of points within that point range, still abiding by your psi limit. Some options let you spend additional psi points to increase
        a discipline's potency. Again, you must abide by your psi limit, and you must spend all the points when you first use the discipline; you can't decide to spend additional points once you see the discipline in action.</p>
    <p>Each option notes specific information about its effect, including any action required to use it and its range.</p>

    <h6><b>Components</b></h6>
    <p>Disciplines don't require the components that many spells require. Using a discipline requires no spoken words, gestures, or materials. The power of psionics comes from the mind.</p>

    <h6><b>Duration</b></h6>
    <p>An effect option in a discipline specifies how long its effect lasts.</p>
    <p> <b>Instantaneous.</b> If no duration is specified, the effect of the option is instantaneous.</p>
    <p> <b>Concentration.</b> Some options require concentration to maintain their effects. This requirement is noted with "conc." after the option's psi point cost. The "conc." notation is followed by the maximum duration of the concentration.
        For example, if an option says "conc., 1 min.," you can concentrate on its effect for up to 1 minute. Concentrating on a discipline follows the same rules as concentrating on a spell. This rule means you can't concentrate on a spell
        and a discipline at the same time, nor can you concentrate on two disciplines at the same time. See chapter 10, "Spellcasting," in the Player's Handbook for how concentration works.</p>

    <h6><b>Targets and Areas of Effect</b></h6>
    <p>Psionic disciplines use the same rules as spells for determining targets and areas of effect, as presented in chapter 10, "Spellcasting," of the Player's Handbook.</p>

    <h6><b>Saving Throws and Attack Rolls</b></h6>
    <p>If a discipline requires a saving throw, it specifies the type of save and the results of a successful or failed saving throw. The DC is determined by your psionic ability.</p>
    <p>Some disciplines require you to make an attack roll to determine whether the discipline's effect hits its target. The attack roll uses your psionic ability.</p>

    <h6><b>Combining Psionic Effects</b></h6>
    <p>The effects of different psionic disciplines add together while the durations of the disciplines overlap. Likewise, different options from a psionic discipline combine if they are active at the same time. However, a specific option from
        a psionic discipline doesn't combine with itself if the option is used multiple times. Instead, the most potent effect—usually dependent on how many psi points were used to create the effect—applies while the durations of the effects
        overlap.
    </p>
    <p>Psionics and spells are separate effects, and therefore their benefits and drawbacks overlap. A psionic effect that reproduces a spell is an exception to this rule.</p>
</div>
<h5>Mystic Order<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#feature4" aria-expanded="true" aria-controls="feature4">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature4">
    <p>At 1st level, you choose a Mystic Order from the list of available orders. Each order specializes in a specific approach to psionics.</p>
    <p>Your order gives you features when you choose it at 1st level and additional features at 3rd, 6th, and 14th level.</p>
</div>
</div>`, `<p>mystic 2`, `<p>mystic 3`, `<p>mystic 4`, `<p>mystic 5`, `<p>mystic 6`, `<p>mystic 7`, `<p>mystic 8`, `<p>mystic 3`, `<p>mystic 2`, `<p>mystic 3`, `<p>mystic 2`, `<p>mystic 3`, `<p>mystic 2`, `<p>mystic 3`, `<p>mystic 2`, `<p>mystic 3`, `<p>mystic 2`, `<p>mystic 3`, `<p>mystic 2`];


/*###################################################################
######################### Paladin ##################################
#####################################################################*/
const paladinFeaturesByLevel = [`<h1 class="text-center">Paladin<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span></h1>

<div class="collapse show" id="collapseIntro">
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
    <p class="text-right">— Isteval</p>
</div>



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
const paladinFeaturesList = [
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

/*###################################################################
######################### Ranger ##################################
#####################################################################*/
const rangerFeaturesByLevel = [`<h1 class="text-center">Ranger<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span>
</h1>

<div class="collapse show" id="collapseIntro">
<p>Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are
planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel,
cutting down one enemy after another.</p>
<p>Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back
to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends
the hawk to distract the creature while he readies his bow.</p>
<p>Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the
terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains,
rangers keep their unending watch.</p>

<h5>Deadly Hunters</h5>
<p>Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of
civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons.
They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding
themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly
useful against their specific favored foes.</p>
<p>Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness
nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed,
stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of
protecting the borderlands.</p>

<h5>Independent Adventurers</h5>
<p>Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to
defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from
the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many
rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs
attacks, a ranger might be the first—and possibly the last—line of defense.</p>
<p>This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far
from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine
about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and
compassion. But they quickly learn that other adventurers who can carry their own weight in a fight
against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed
themselves or find fresh water in the wild, but they make up for it in other ways.</p>

<P>Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back
the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood
and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the
world a safer place.</P>
<p>A relationship with civilization informs every ranger's personality and history. Some rangers see
themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no
sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to
keep themselves safe while they live in and travel through the perilous wild areas of the world. If
their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.</p>

<i>“I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that
because I don't bend the knee to your king that I haven't done more to protect him than all his knights
put together.”</i>
<p class="text-right">— Soveliss</p>
</div>



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Favored Enemy<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
    <p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy commonly encountered in the wilds.</p>

    <p>Choose a type of favored enemy:
        <select class="custom-select-sm">
        <option value="Beasts">Beasts</option>
        <option value="Fey">Fey</option>
        <option value="Humanoids">Humanoids</option>
        <option value="Monstrosities">Monstrosities</option>
        <option value="Undead">Undead</option>
      </select>. You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence
        checks to recall information about them.</p>
    <p>When you gain this feature, you also learn one language of your choice, typically one spoken by your favored enemy or creatures associated with it. However, you are free to pick any language you wish to learn. <select class="custom-select-sm">
        <option value="Abyssal">Abyssal</option>
        <option value="Celestial">Celestial</option>
        <option value="DeepSpeech">Deep Speech</option>
        <option value="Draconic">Draconic</option>
        <option value="Dwarvish">Dwarvish</option>
        <option value="Elvish">Elvish</option>
        <option value="Giant">Giant</option>
        <option value="Gnomish">Gnomish</option>
        <option value="Goblin">Goblin</option>
        <option value="Halfling">Halfling</option>
        <option value="Infernal">Infernal</option>
        <option value="Orc">Orc</option>
        <option value="Primordial">Primordial</option>
        <option value="Sylvan">Sylvan</option>
        <option value="Undercommon">Undercommon</option>
      </select></p>
</div>

<h5>Natural Explorer<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature2" aria-expanded="true" aria-controls="feature2">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature2">
<p>You are a master of navigating the natural world, and you react with swift and decisive action when
attacked. This grants you the following benefits:</p>
<ul>
<li>You ignore difficult terrain.</li>
<li>You have advantage on initiative rolls.</li>
<li>On your first turn during combat, you have advantage on attack rolls against creatures that have
    not yet acted.</li>
</ul>
<p>In addition, you are skilled at navigating the wilderness. You gain the following benefits when
traveling for an hour or more:</p>
<ul>
<li>Difficult terrain doesn't slow your group's travel.</li>
<li>Your group can't become lost except by magical means.</li>
<li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or
    tracking), you remain alert to danger.</li>
<li>If you are traveling alone, you can move stealthily at a normal pace.</li>
<li>When you forage, you find twice as much food as you normally would.</li>
<li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago
    they passed through the area.</li>
</ul>
</div>
</div>`, `<p>ranger 2`, `<p>ranger 3`, `<p>ranger 4`, `<p>ranger 5`, `<p>ranger 6`, `<p>ranger 7`, `<p>ranger 8`, `<p>ranger 3`, `<p>ranger 2`, `<p>ranger 3`, `<p>ranger 2`, `<p>ranger 3`, `<p>ranger 2`, `<p>ranger 3`, `<p>ranger 2`, `<p>ranger 3`, `<p>ranger 2`, `<p>ranger 3`, `<p>ranger 2`];
const rangerFeaturesList = [
    [`<li>
    Fighting style <span id="enemy">TEST</span>
    </li><li>
    Natural Explorer
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

/*###################################################################
######################### Rogue ##################################
#####################################################################*/
const rogueFeaturesByLevel = [`<h1 class="text-center">Rogue<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span>
</h1>

<div class="collapse show" id="collapseIntro">
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
<p class="text-right">— Barnabas Bladecutter</p>
</div>



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
const rogueFeaturesList = [
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


/*###################################################################
######################### Sorcerer ##################################
#####################################################################*/
const sorcererFeaturesByLevel = [`<h1 class="text-center">Sorcerer<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span>
</h1>

<div class="collapse show" id="collapseIntro">
<p>Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air.</p>
<p>Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning.</p>
<p>Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned
her skin bright blue.</p>
<p>Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary
life. No one chooses sorcery; the power chooses the sorcerer.</p>

<h5>Raw Magic</h5>
<p>Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled
magic within them, a chaotic storm that manifests in unexpected ways.</p>
<p>The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear
as apparent flukes. Some sorcerers can't name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby's birth, or a taste of the water from a mysterious
spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.</p>
<p>Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover
new and staggering ways to unleash that power.</p>

<h5>Unexplained Powers</h5>
<p>Sorcerers are rare in the world, and it's unusual to find a sorcerer who is not involved in the adventuring life in some way. People with magical power seething in their veins soon discover that the power doesn't like to stay quiet. A sorcerer's
magic wants to be wielded, and it has a tendency to spill out in unpredictable ways if it isn't called on.</p>
<p>Sorcerers often have obscure or quixotic motivations driving them to adventure. Some seek a greater understanding of the magical force that infuses them, or the answer to the mystery of its origin. Others hope to find a way to get rid of it,
or to unleash its full potential. Whatever their goals, sorcerers are every bit as useful to an adventuring party as wizards, making up for a comparative lack of breadth in their magical knowledge with enormous flexibility in using the
spells they know.</p>
<p>When it comes to drawing forth their abilities in times of need, sorcerers have it easy compared to other characters. Their power not only rests within them, but it likely takes some effort to keep it at bay. Every sorcerer is born to the
role, or stumbles into it through cosmic chance. Unlike other characters, who must actively learn, embrace, and pursue their talents, sorcerers have their power thrust upon them.</p>
<p>Because the idea of an innately magical being traveling among them does not sit well with many folk, sorcerers tend to breed mistrust and suspicion in others they come across. Nonetheless, many sorcerers succeed in overcoming that prejudice
through deeds that benefit their less magically gifted contemporaries.</p>
<p>Sorcerers are often defined by the events surrounding the manifestation of their power. For those who receive it as an expected birthright, its appearance is a cause for celebration. Other sorcerers are treated as outcasts, banished from their
homes after the sudden, terrifying arrival of their abilities.</p>

<i>“Practice and study are for amateurs. True power is a birthright.”</i>
<p class="text-right">— Hennet, scion of Tiamat</p>
</div>



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Sorcerous Origin<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
            data-target="#featureOrigin" aria-expanded="true" aria-controls="featureOrigin">[-]</button></span></h5>
        <hr>

        <div class="collapse show mb-2" id="featureOrigin">
            <p>Choose a sorcerous origin, which describes the source of your innate magical power, from the list of available origins. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.</p>
            <div class="d-flex justify-content-around row">
                <button type="button" class="btn btn-secondary" id="aberrant">Aberrant Mind</button>
                <button type="button" class="btn btn-secondary" id="clockwork">Clockwork soul</button>
                <button type="button" class="btn btn-secondary" id="divine">Divine Soul</button>
                <button type="button" class="btn btn-secondary" id="draconic">Draconic</button>
                <button type="button" class="btn btn-secondary" id="giant">Giant Soul</button>
                <button type="button" class="btn btn-secondary" id="phoenix">Phoenix</button>
                <button type="button" class="btn btn-secondary" id="sea">Sea</button>
                <button type="button" class="btn btn-secondary" id="shadow">Shadow</button>
                <button type="button" class="btn btn-secondary" id="storm">Storm</button>
                <button type="button" class="btn btn-secondary" id="wild">Wild magic</button>
            </div>
            <div id="sorcOrigin" class="choiceBG"></div>
        </div>

<h5>Spellcasting<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
<p>An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.</p>

<h6><b>Cantrips</b></h6>
<p>At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn an additional sorcerer cantrip of your choice at 4th level and another at 10th level.</p>

<h6><b>Spell Slots</b></h6>
<p>The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots
when you finish a long rest.</p>
<p>For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.</p>

<h6><b>Spells Known of 1st Level and Higher</b></h6>
<p>You know two 1st-level spells of your choice from the sorcerer spell list.</p>
<p>You learn an additional sorcerer spell of your choice at each level except 12th, 14th, 16th, 18th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class,
you can learn one new spell of 1st or 2nd level.</p>
<p>Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.</p>

<h6><b>Spellcasting Ability</b></h6>
<p>Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition,
you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.</p>
<p class="text-center"><b>Spell save DC</b> = 8 + your proficiency bonus + your Charisma modifier</p>
<p class="text-center"><b>Spell attack modifier</b> = your proficiency bonus + your Charisma modifier</p>


<h6><b>Spellcasting Focus</b></h6>
<p>You can use an arcane focus as a spellcasting focus for your sorcerer spells.</p>

<h6><b>Spell Versatility</b></h6>
<p>Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the sorcerer spell list. The new spell must be the same level as the spell you replace.</p>
</div>

</div>`, `<p>sorcerer 2`, `<p>sorcerer 3`, `<p>sorcerer 4`, `<p>sorcerer 5`, `<p>sorcerer 6`, `<p>sorcerer 7`, `<p>sorcerer 8`, `<p>sorcerer 3`, `<p>sorcerer 2`, `<p>sorcerer 3`, `<p>sorcerer 2`, `<p>sorcerer 3`, `<p>sorcerer 2`, `<p>sorcerer 3`, `<p>sorcerer 2`, `<p>sorcerer 3`, `<p>sorcerer 2`, `<p>sorcerer 3`, `<p>sorcerer 2`];
const aberrant = `<h4 class="text-center">Aberrant Mind<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#Origin" aria-expanded="true" aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
    <p>An alien influence has wrapped its tendrils around your mind, giving you psionic power. You can now touch other minds with that power and alter the world around you by using it to control the magical energy of the multiverse. Will this power
        shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the strange manifestations of your might?</p>
    <p>As an Aberrant Mind sorcerer, you decide how you acquired your powers. Were you born with them? Or did an event later in life leave you shining with psionic awareness? Consult the Aberrant Origins table for a possible origin of your power.</p>
    <table class="table-striped table-hover mb-2">
        <thead>
            <tr>
                <th class="col-2 text-center"><span>d6</span></th>
                <th class="col-10">Origin</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-2 text-center">1</td>
                <td class="col-10">You were exposed to the Far Realm's warping influence. You are convinced that a tentacle is now growing on you, but no one else can see it.</td>
            </tr>
            <tr>
                <td class="col-2 text-center">2</td>
                <td class="col-10">A psychic wind from the Astral Plane carried psionic energy to you. When you use your powers, faint motes of light sparkle around you.</td>
            </tr>
            <tr>
                <td class="col-2 text-center">3</td>
                <td class="col-10">You once suffered the dominating powers of an aboleth, leaving a psychic splinter in your mind.</td>
            </tr>
            <tr>
                <td class="col-2 text-center">4</td>
                <td class="col-10">You were implanted with a mind flayer tadpole, but the ceremorphosis never completed. And now its psionic power is yours. When you use it, your flesh shines with a strange mucus.</td>
            </tr>
            <tr>
                <td class="col-2 text-center">5</td>
                <td class="col-10">As a child, you had an imaginary friend that looked like a flumph or a strange platypus-like creature. One day, it gifted you with psionic powers, which have ended up being not so imaginary.</td>
            </tr>
            <tr>
                <td class="col-2 text-center">6</td>
                <td class="col-10">Your nightmares whisper the truth to you: your psionic powers are not your own. You draw them from your parasitic twin!</td>
            </tr>
        </tbody>
    </table>

    <h5>Psionic Spells<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePsionic" aria-expanded="true" aria-controls="featurePsionic">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePsionic">
        <p>You learn additional spells when you reach certain levels in this class, as shown on the Psionic Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.</p>
        <p>Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. <b>The new spell must be a divination or an enchantment spell from the sorcerer, warlock, or wizard spell list.</b></p>
        <table class="table-striped table-hover mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center" data-rd-isroller="false">Sorcerer Level</th>
                    <th class="col-10" data-rd-isroller="false">Spells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">1st</td>
                    <td class="col-10">arms of Hadar, dissonant whispers, mind sliver</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-10">calm emotions, detect thoughts</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-10">hunger of Hadar, sending</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">7th</td>
                    <td class="col-10">Evard's black tentacles, summon aberration</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-10">Rary's telepathic bond, telekinesis</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5>Telepathic Speech<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureTelepathic" aria-expanded="true" aria-controls="featureTelepathic">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureTelepathic">
        <p>You can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see within 30 feet of you. You and the chosen creature can speak telepathically with each other while the two
            of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must speak mentally in a language the other knows.</p>
        <p>The telepathic connection lasts for a number of minutes equal to your sorcerer level. It ends early if you are incapacitated or die or if you use this ability to form a connection with a different creature.</p>
    </div>

    <h5>Psionic Sorcery<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePsiSorcery" aria-expanded="true" aria-controls="featurePsiSorcery">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePsiSorcery">
        <p>Starting at 6th level, when you cast any spell of 1st level or higher from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level.</p>
        <p>If you cast the spell using sorcery points, it requires no verbal or somatic components, and it requires no material components, unless they are consumed by the spell.</p>
    </div>

    <h5 class="mt-2">Psychic Defenses<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePsychicDefenses" aria-expanded="true" aria-controls="featurePsychicDefenses">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePsychicDefenses">
        <p>At 6th level you gain resistance to psychic damage, and you have advantage on saving throws against being charmed or frightened.</p>
    </div>

    <h5>Revelation in Flesh<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureRevelation" aria-expanded="true" aria-controls="featureRevelation">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureRevelation">
        <p>Starting at 14th level, you can unleash the aberrant truth hidden within yourself. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain
            one of the following benefits of your choice, the effects of which last until the transformation ends:</p>
        <ul>
            <li>You can see any invisible creature within 60 feet of you, provided it isn't behind total cover. Your eyes also turn black or become writhing sensory tendrils.</li>
            <li>You gain a flying speed equal to your walking speed, and you can hover. As you fly, your skin glistens with mucus or shines with an otherworldly light.</li>
            <li>You gain a swimming speed equal to twice your walking speed, and you can breathe underwater. Moreover, gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow writhing cilia that extend through
                your clothing.</li>
            <li>Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints
                or being grappled.</li>
        </ul>
    </div>

    <h5>Warping Implosion<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureWarping" aria-expanded="true" aria-controls="featureWarping">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureWarping">
        <p>Starting at 18th level, you can unleash your aberrant power as a space-warping anomaly. As an action, you can teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30
            feet of the space you left must make a Strength saving throw. On a failed save, a creature takes 3d10 force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible.
            On a successful save, the creature takes half as much damage and isn't pulled.</p>
        <p>Once you use this feature, you can't do so again until you finish a long rest, unless you spend 5 sorcery points to use it again.</p>
    </div>
</div>
</div>`;
const clockwork = `<h4 class="text-center">Clockwork Soul<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>The cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like
it-a plane of existence shaped entirely by clockwork efficiency. You, or someone from your lineage,
might have become entangled in the machinations of the modrons, the orderly beings who inhabit Mechanus.
Perhaps your ancestor even took part in the Great Modron March. Whatever its origin within you, the
power of order can seem strange to others, but for you, it is part of a vast and glorious system.</p>

<h5>Clockwork Magic<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureClockMagic" aria-expanded="true"
    aria-controls="featureClockMagic">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureClockMagic">
<p>You learn additional spells when you reach certain levels in this class, as shown on the Psionic
Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against
the number of sorcerer spells you know.</p>
<p>Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with
another spell of the same level.<b>The new spell must be an abjuration or a transmutation spell
    from the sorcerer, warlock, or wizard spell list.</b></p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center" data-rd-isroller="false">Sorcerer Level</th>
        <th class="col-10" data-rd-isroller="false">Spells</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1st</td>
        <td class="col-10">alarm, protection from evil and good</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3rd</td>
        <td class="col-10">aid, lesser restoration</td>
    </tr>
    <tr>
        <td class="col-2 text-center">5th</td>
        <td class="col-10"> dispel magic, protection from energy</td>
    </tr>
    <tr>
        <td class="col-2 text-center">7th</td>
        <td class="col-10">freedom of movement, summon construct</td>
    </tr>
    <tr>
        <td class="col-2 text-center">9th</td>
        <td class="col-10">greater restoration, wall of force</td>
    </tr>
</tbody>
</table>
<p>In addition, consult the Manifestations of Order table and choose or randomly determine a way your
connection to order manifests while you are casting any of your sorcerer spells.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-2 text-center"><span>d6</span>
        </th>
        <th class="col-10">Manifestation</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-2 text-center">1</td>
        <td class="col-10">Spectral cogwheels hover behind you.</td>
    </tr>
    <tr>
        <td class="col-2 text-center">2</td>
        <td class="col-10">The hands of a clock spin in your eyes.</td>
    </tr>
    <tr>
        <td class="col-2 text-center">3</td>
        <td class="col-10">Your skin glows with a brassy sheen.</td>
    </tr>
    <tr>
        <td class="col-2 text-center">4</td>
        <td class="col-10">Floating equations and geometric objects overlay your body.</td>
    </tr>
    <tr>
        <td class="col-2 text-center">5</td>
        <td class="col-10">Your spellcasting focus temporarily takes the form of a Tiny clockwork
            mechanism.</td>
    </tr>
    <tr>
        <td class="col-2 text-center">6</td>
        <td class="col-10">The ticking of gears or ringing of a clock can be heard by you and those
            affected by your magic.</td>
    </tr>
</tbody>
</table>
</div>

<h5>Restore Balance<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRestore" aria-expanded="true"
    aria-controls="featureRestore">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureRestore">
<p>Your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage.</p>
<p>You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</p>
</div>

<h5>Bastion of Law<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureBastion" aria-expanded="true"
    aria-controls="featureBastion">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureBastion">
<p>Starting at 6th level, you can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.</p>
<p>The ward is represented by a number of d8s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.</p>
</div>

<h5 class="mt-2">Trance of Order<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureTrance" aria-expanded="true"
    aria-controls="featureTrance">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureTrance">
<p>At 14th level you gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10.</p>
<p>Once you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again.</p>
</div>

<h5>Clockwork Cavalcade<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureCavalcade" aria-expanded="true"
    aria-controls="featureCavalcade">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureCavalcade">
<p>Starting at 18th level, You summon spirits of order to expunge disorder around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, and they create the following effects within the cube before vanishing:</p>
<ul>
<li>The spirits restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.</li>
<li>Any damaged objects entirely in the cube are repaired instantly.</li>
<li>Every spell of 6th level or lower ends on creatures and objects of your choice in the cube.</li>
</ul>
<p>Once you use this action, you can't use it again until you finish a long rest, unless you spend 7 sorcery points to use it again.</p>
</div>
</div>
</div>`;
const divine = `<h4 class="text-center">Divine Soul<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the
soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful
familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and
sent to fight in a god's name.</p>
<p>Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen
vessel of divine magic.</p>
<p>A Divine Soul, with a natural magnetism, is seen as a threat by some religious hierarchies. As an
outsider who commands sacred power, a Divine Soul can undermine an existing order by claiming a direct
tie to the divine.</p>
<p>In some cultures, only those who can claim the power of a Divine Soul may command religious power. In
these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.
</p>

<h5>Divine Magic<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureDivine" aria-expanded="true"
    aria-controls="featureDivine">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureDivine">
<p>Your link to the divine allows you to learn spells from the cleric class. When your Spellcasting
feature lets you learn or replace a sorcerer cantrip or a sorcerer spell of 1st level or higher, you
can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise
obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.</p>
<p>In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or
neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer
spell for you, but it doesn't count against your number of sorcerer spells known. If you later
replace this spell, you must replace it with a spell from the cleric spell list. <b>If you later
    replace this spell, you must replace it with a spell from the cleric spell list.</b></p>

<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-5" data-rd-isroller="false">Affinity</th>
        <th class="col-7" data-rd-isroller="false">Spell</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-5">Good</td>
        <td class="col-7">cure wounds</td>
    </tr>
    <tr>
        <td class="col-5">Evil</td>
        <td class="col-7">inflict wounds</td>
    </tr>
    <tr>
        <td class="col-5">Law</td>
        <td class="col-7">bless</td>
    </tr>
    <tr>
        <td class="col-5">Chaos</td>
        <td class="col-7">bane</td>
    </tr>
    <tr>
        <td class="col-5">Neutrality</td>
        <td class="col-7">protection from evil and good</td>
    </tr>
</tbody>
</table>
</div>

<h5>Favored by the Gods<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureFavored" aria-expanded="true"
    aria-controls="featureFavored">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureFavored">
<p>Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5>Empowered Healing<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureEmpowered" aria-expanded="true"
    aria-controls="featureEmpowered">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureEmpowered">
<p>Starting at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn.</p>
</div>

<h5 class="mt-2">Otherworldly Wings<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWings" aria-expanded="true"
    aria-controls="featureWings">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureWings">
<p>Starting at 14th level, you can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.</p>
<p>The affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality.</p>
</div>

<h5>Unearthly Recovery<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRecovery" aria-expanded="true"
    aria-controls="featureRecovery">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureRecovery">
<p>At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.</p>
<p>Once you use this feature, you can't use it again until you finish a long rest.</p>
</div>
</div>
</div>`;
const draconic = `<h4 class="text-center">Draconic Bloodline<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors.
Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times
who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these
bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the
first of a new bloodline, as a result of a pact or some other exceptional circumstance.</p>

<h5>Dragon Ancestor<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureAncestor" aria-expanded="true"
    aria-controls="featureAncestor">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureAncestor">
<p>At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each
dragon is used by features you gain later.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-6 text-center" data-rd-isroller="false">Dragon</th>
        <th class="col-6 text-center" data-rd-isroller="false">Damage Type</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-6 text-center">Black</td>
        <td class="col-6 text-center">Acid</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Blue</td>
        <td class="col-6 text-center">Lightning</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Brass</td>
        <td class="col-6 text-center">Fire</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Bronze</td>
        <td class="col-6 text-center">Lightning</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Copper</td>
        <td class="col-6 text-center">Acid</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Gold</td>
        <td class="col-6 text-center">Fire</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Green</td>
        <td class="col-6 text-center">Poison</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Red</td>
        <td class="col-6 text-center">Fire</td>
    </tr>
    <tr>
        <td class="col-6 text-center">Silver</td>
        <td class="col-6 text-center">Cold</td>
    </tr>
    <tr>
        <td class="col-6 text-center">White</td>
        <td class="col-6 text-center">Cold</td>
    </tr>
</tbody>
</table>
<p>You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.</p>
</div>

<h5>Elemental Affinity<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureAffinity" aria-expanded="true"
    aria-controls="featureAffinity">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureAffinity">
<p>Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.</p>
</div>

<h5>Dragon Wings<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWings" aria-expanded="true"
    aria-controls="featureWings">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureWings">
<p>At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.</p>
<p>You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.</p>
</div>

<h5 class="mt-2">Draconic Presence<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featurePresence" aria-expanded="true"
    aria-controls="featurePresence">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featurePresence">
<p>Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.</p>
</div>
</div>`;
const giant = `<h4 class="text-center">Giant Soul<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>The giants once dwelled in a fabled realm known as Ostoria, a paradise for their folk that reflected
their mastery of the mortal realm. In time, Ostoria fell, and the giants were scattered and broken.
During that mythic era, the giants granted a few chosen individuals among the small folk a shard of
their great power. These favored people were caught in the same tragedy that sundered Ostoria. Since
that time, they have spread across the many worlds of the multiverse. Now and again, one of their
descendants manifests the gifts imparted by the giants, granting them sorcerous magic that allows them
to command the elements and gain the might of a giant.</p>

<h5>Jotun Resilience<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureJotun" aria-expanded="true"
    aria-controls="featureJotun">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureJotun">
<p>At 1st level, you discover innate magical abilities within yourself that are based on your giant
heritage. Select one of the giant types from the Mark of the Ordning table. At 1st and 3rd level,
you learn the spells associated with your choice, as shown in the table. These spells count as
sorcerer spells for you, but they don't count against your number of sorcerer spells known.</p>
</div>

<h5>Mark of the Ordning<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureMark" aria-expanded="true"
    aria-controls="featureMark">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureMark">
<p>Starting at 6th level, when you cast a spell that deals damage of the type associated with your
draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same
time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-3">Giant Type</th>
        <th class="col-3">Spells at 1st Level</th>
        <th class="col-3">Spells at 3rd Level</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-3">Cloud Giant</td>
        <td class="col-3">fog cloud, minor illusion</a>
        </td>
        <td class="col-3">invisibility</td>
    </tr>
    <tr>
        <td class="col-3">Fire Giant</td>
        <td class="col-3">burning hands, fire bolt</td>
        <td class="col-3">flaming sphere</td>
    </tr>
    <tr>
        <td class="col-3">Frost Giant</td>
        <td class="col-3">armor of Agathys, ray of frost</td>
        <td class="col-3">hold person</td>
    </tr>
    <tr>
        <td class="col-3">Hill Giant</td>
        <td class="col-3">heroism, shillelagh</td>
        <td class="col-3">enlarge/reduce</td>
    </tr>
    <tr>
        <td class="col-3">Stone Giant</td>
        <td class="col-3">entangle, resistance</td>
        <td class="col-3">spike growth</td>
    </tr>
    <tr>
        <td class="col-3">Storm Giant</td>
        <td class="col-3">shocking grasp, thunderwave</td>
        <td class="col-3">gust of wind</td>
    </tr>
</tbody>
</table>
</div>

<h5>Soul of Lost Ostoria<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureOstoria" aria-expanded="true"
    aria-controls="featureOstoria">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureOstoria">
<p>Starting at 6th level, you gain a benefit whenever you cast one of the spells granted by your Mark of
the Ordning Feature.</p>
<p><b>Cloud Giant.</b> Immediately after you cast any of your Mark of the Ordning spells, you can
magically teleport as a bonus action. You teleport to an unoccupied space you can see that is no
farther away than a number of feet equal to 10 + your Constitution modifier.</p>

<p><b>Fire Giant.</b> You gain a bonus to the damage rolls of your Mark of the Ordning spells. The bonus
equals your Constitution modifier (minimum of +1).</p>

<p><b>Frost Giant.</b> Immediately after you cast any of your Mark of the Ordning spells, you gain
temporary hit points equal to your Constitution modifier (minimum of 1). But if the spell is armor
of Agathys, you instead increase its temporary hit points by an amount equal to your Constitution
modifier (minimum of 1).</p>

<p><b>Hill Giant.</b> Immediately after you cast any of your Mark of the Ordning spells, you can target
up to two creatures within 5 feet of you that you can see. Each target must succeed on a Strength
saving throw against your spell save DC or be pushed a number of feet away from you equal to 5 +
your Constitution modifier (minimum of +1). A target can choose to fail this save.</p>

<p><b>Stone Giant.</b> Immediately after you cast any of your Mark of the Ordning spells, you gain a
bonus to AC equal to your Constitution modifier (minimum of +1) until the end of your next turn.</p>

<p><b>Storm Giant.</b> Immediately after you cast any of your Mark of the Ordning spells, up to three
creatures of your choice that you can see within 30 feet of you take lightning damage equal to your
Constitution modifier (minimum of 1).</p>
</div>

<h5>Rage of Fallen Ostoria<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRage" aria-expanded="true"
    aria-controls="featureRage">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureRage">
<p>Starting at 14th level, you gain the ability to channel the souls of your ancestors into your
physical form. When you start casting a sorcerer spell on your turn and expend a spell slot, you can
increase your size by one category—from Medium to Large, for example.</p>
<p>This increase lasts for 1 minute. It ends early if you die or are incapacitated. Until it ends, you
enjoy the following benefits:</p>
<ul>
<li>Your current hit points and your hit point maximum both increase by 1 per sorcerer level.</li>
<li>Your reach increases by 5 feet.</li>
<li>Your walking speed increases by 5 feet</li>
<li>You have advantage on Strength checks and Strength saving throws.</li>
<li>You gain a bonus to the damage rolls of your melee weapon attacks; the bonus equals your
    Constitution modifier (minimum of +1).</li>
</ul>
<p>Once you use this feature, you can't use it again until you finish a short or long rest.</p>
</div>

<h5 class="mt-2">Blessing of the All Father<span class="ml-2"><button class="collapseButton"
    type="button" data-toggle="collapse" data-target="#featureBlessing" aria-expanded="true"
    aria-controls="featureBlessing">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureBlessing">
<p>At 18th level, your Constitution score increases by 2, up to a maximum of 22.</p>
<p>In addition, you can now use Rage of Fallen Ostoria twice between rests, but no more than once on a
turn. If you use that feature while under its effects, its increases to your size, hit points,
reach, and walking speed are cumulative.</p>
</div>
</div>`;
const phoenix = `<h4 class="text-center">Phoenix Sorcery<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>Your power draws from the immortal flame that fuels the legendary phoenix. You or your ancestors perhaps
rendered a phoenix a great service, or you were born in its presence. Whatever the cause, a shard of the
phoenix's power dwells within you.</p>
<p>That power is a mixed blessing. Like the mythical creature, you can invoke fiery energy and gain the
ability to cheat death itself. This power comes at a cost. The fire within you seethes, demanding to be
unleashed. You sometimes find yourself absentmindedly feeding fires. You can't bear to allow a fire to
sputter out. You feel most comfortable while holding a lit torch or sitting in front of a campfire.</p>
<p>More importantly, this gift comes with no special protection from fire. You are as vulnerable as any
other creature to fiery magic, including your own. Phoenix sorcerers can use their powers to pull
themselves back from the brink of death, and all too often their own, rash nature or reliance on
destructive magic is what puts them there in the first place.</p>
<p>Such sorcerers are wanderers by necessity. The volatile nature of their magic makes other folk nervous.
If a fire breaks out in town, a phoenix sorcerer had best flee, whether guilty or not. Fire is a
dangerous force, and phoenix sorcerers have a reputation (deserved or not) for reckless behavior,
confident that the essence of the phoenix can save them.</p>
<table class="table-striped table-hover mb-2">
<thead>
<tr>
    <th class="col-1 text-center">d6</span>
    </th>
    <th class="col-11">Phoenix Soul</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="col-1 text-center">1</td>
    <td class="col-11">You absentmindedly ignite small fires that quickly sputter out.</td>
</tr>
<tr>
    <td class="col-1 text-center">2</td>
    <td class="col-11">You cackle like a fiend when you unleash your fire spells.</td>
</tr>
<tr>
    <td class="col-1 text-center">3</td>
    <td class="col-11">You admire fire, even if it burns your friends.</td>
</tr>
<tr>
    <td class="col-1 text-center">4</td>
    <td class="col-11">You are covered in burns that mark the first time your power manifested.</td>
</tr>
<tr>
    <td class="col-1 text-center">5</td>
    <td class="col-11">You like your food charred.</td>
</tr>
<tr>
    <td class="col-1 text-center">6</td>
    <td class="col-11">You are brave to the point of recklessness.</td>
</tr>
</tbody>
</table>

<h5>Ignite<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#featureIgnnite" aria-expanded="true"
    aria-controls="featureIgnnite">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureIgnnite">
<p>At 1st level, you gain the ability to start fires with a touch. As an action, you can magically
ignite a flammable object you touch with your hand—an object such as a torch, a piece of tinder, or the hem of drapes.</p>
</div>

<h5>Mantle of Flame<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureMantle" aria-expanded="true"
    aria-controls="featureMantle">[-]</button></span>
</h5>
<hr>

<div class="collapse show" id="featureMantle">
<p>Starting at 1st level, you can unleash the phoenix fire that blazes within you.</p>
<p>As a bonus action, you magically wreathe yourself in swirling fire, as your eyes glow like hot coals.
For
1 minute, you gain the following benefits:</p>
<ul>
<li>You shed bright light in a 30-foot radius and dim light for an additional 30 feet.</li>
<li>Any creature takes fire damage equal to your Charisma modifier if it hits you with a melee
    attack
    from within 5 feet of you or if it touches you.</li>
<li>Whenever you roll fire damage on your turn, the roll gains a bonus to equal to your Charisma
    modifier.</li>
</ul>
<p>Once you use this feature, you can't use it again until you finish a long rest.</p>
</div>

<h5>Phoenix Spark<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpark" aria-expanded="true"
    aria-controls="featureSpark">[-]</button></span>
</h5>
<hr>

<div class="collapse show" id="featureSpark">
<p>Starting at 6th level, the fiery energy within you grows restless and vengeful. In the face of
defeat, it surges outward to preserve you in a fiery roar.</p>
<p>If you are reduced to 0 hit points, you can use your reaction to draw on the spark of the phoenix.
You are instead reduced to 1 hit point, and each creature within 10 feet of you takes fire damage
equal to half your sorcerer level + your Charisma modifier.</p>
<p>If you use this feature while under the effects of your Mantle of Flame, this feature instead deals
fire damage equal to your sorcerer level + double your Charisma modifier, and your Mantle of Flame
immediately ends.</p>
<p>Once you use this feature, you can't use it again until you finish a long rest.</p>

</div>

<h5>Nourishing Fire<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureRage" aria-expanded="true"
    aria-controls="featureRage">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureRage">
<p>Starting at 14th level, your fire spells soothe and restore you. When you expend a spell slot to cast
a spell that includes a fire damage roll, you regain hit points equal to the slot's level + your
Charisma modifier.</p>
</div>

<h5 class="mt-2">Form of the Phoenix<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureBlessing" aria-expanded="true"
    aria-controls="featureBlessing">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureBlessing">
<p>At 18th level, you finally master the spark of fire that dances within you. While under the effect of
your Mantle of Flame feature, you gain additional benefits:</p>
<ul>
<li>You have a flying speed of 40 feet and can hover.</li>
<li>You have resistance to all damage.</li>
<li>If you use your Phoenix Spark, that feature deals an extra 20 fire damage to each creature.</li>
</ul>
</div>
</div>`;
const sea = `<h4 class="text-center">Sea Sorcery<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>The power of water is the strength of flexibility, resilience, and a relentless nature. Water parts to
allow a ship to sail over it or a diver to plunge into it, but their passing leaves no mark. Water
flowing down a mountain reaches the sea. It might bend and turn across valleys and down hillsides, but
it slowly and steadily returns to the waves. Those whose souls are touched by the power of elemental
water command a similar power.</p>
<p>Your heritage ties to powerful creatures of the sea, such as nereids, the lords of the merfolk, and
elemental powers. Like a river, you feel the call of the ocean. The call is ever present in your heart,
and you are never completely at peace until you are near the sea.</p>

<h5>Soul of the Sea<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSoul" aria-expanded="true"
    aria-controls="featureSoul">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSoul">
<p>At 1st level, your tie to the sea grants you the ability to breathe underwater, and you have a swim
speed equal to your walking speed.</p>
</div>

<h5>Curse of the Sea<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureCurse" aria-expanded="true"
    aria-controls="featureCurse">[-]</button></span>
</h5>
<hr>

<div class="collapse show" id="featureCurse">
<p>When you choose this origin at 1st level, you learn the secret of infusing your spells with a watery
curse.</p>
<p>When you hit a creature with a cantrip's attack or when a creature fails a saving throw against your
cantrip, you can curse the target until the end of your next turn or until you curse a different
creature with this feature.</p>
<p>Once per turn when you cast a spell, you can trigger the curse if that spell deals cold or lightning
damage to the cursed target or forces it to move. Doing so subjects the target to the appropriate
additional effect below, and then the curse ends if the spell isn't a cantrip (you choose the effect
to use if more than one effect applies):</p>
<p><b>Cold damage.</b> If the affected target takes cold damage from your spell, the target's speed is also reduced by 15 feet until the end of your next turn. If the spell already reduces the target's speed, use whichever reduction is greater.</p>
<p><b>Lightning Damage.</b> If the affected target takes lightning damage from your spell, the target takes additional lightning damage equal to your Charisma modifier.</p>
<p><b>Forced Movement.</b> If the target is moved by your spell, increase the distance it is moved by 15 feet.</p>
</div>

<h5>Watery Defense<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureDefense" aria-expanded="true"
    aria-controls="featureDefense">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureDefense">
<p>At 6th level, you gain resistance to fire damage.</p>
<p>You also gain the ability to defend yourself by momentarily assuming a watery form. As a reaction when you are hit by an attack and take bludgeoning, piercing, or slashing damage from it, you can reduce that damage by an amount equal to your sorcerer level plus your Charisma score, and then you can move up to 30 feet without provoking opportunity attacks. Once you use this special reaction, you can't use it again until you finish a short or long rest.</p>

</div>

<h5>Shifting Form<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureShifting" aria-expanded="true"
    aria-controls="featureShifting">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureShifting">
<p>Starting at 14th level, you gain the ability to enter a liquid state while moving.</p>
<p>When you move on your turn, you take only half damage from opportunity attacks, and you can move through any enemy's space but can't willingly end your move there.</p>
<p>On your turn, you can move through any space that is at least 3 inches in diameter and do so without squeezing. When you stop moving, the regular squeezing rules apply if you're in a space one size smaller than you. You can't willingly stop in a space smaller than that, and if you're forced to do so, you immediately flow to the nearest space that can fit you, back along the path of your movement.</p>
</div>

<h5 class="mt-2">Water Soul<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWaterSoul" aria-expanded="true"
    aria-controls="featureWaterSoul">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureWaterSoul">
<p>Starting at 18th level, your being is altered by the power of the sea. You gain the following benefits:</p>
<ul>
<li>You no longer need to eat, drink, or sleep.</li>
<li>A critical hit against you becomes a normal hit.</li>
<li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
</ul>
</div>
</div>`;
const shadow = `<h4 class="text-center">Shadow Magic<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace
your lineage to an entity from that place, or perhaps you were exposed to its fell energy and
transformed by it.</p>
<p>The power of shadow magic casts a strange pall over your physical presence. The spark of life that
sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your
soul. At your option, you can pick from or roll on the Shadow Sorcerer Quirks table to create a quirk
for your character.</p>
<table class="table-striped table-hover mb-2">
<thead>
<tr>
    <th class="col-2 text-center"><span>d6</span>
    </th>
    <th class="col-10">Quirk</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="col-2 text-center">1</td>
    <td class="col-10">You are always icy cold to the touch.</td>
</tr>
<tr>
    <td class="col-2 text-center">2</td>
    <td class="col-10">When you are asleep, you don't appear to breathe (though you must still
        breathe to survive).</td>
</tr>
<tr>
    <td class="col-2 text-center">3</td>
    <td class="col-10">You barely bleed, even when badly injured.</td>
</tr>
<tr>
    <td class="col-2 text-center">4</td>
    <td class="col-10">Your heart beats once per minute. This event sometimes surprises you.</td>
</tr>
<tr>
    <td class="col-2 text-center">5</td>
    <td class="col-10">You have trouble remembering that living creatures and corpses should be
        treated differently.</td>
</tr>
<tr>
    <td class="col-2 text-center">6</td>
    <td class="col-10">You blinked. Once. Last week.</td>
</tr>
</tbody>
</table>

<h5>Eyes of the Dark<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureEyes" aria-expanded="true"
    aria-controls="featureEyes">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureEyes">
<p>Starting at 1st level, you have darkvision with a range of 120 feet.</p>
<p>When you reach 3rd level in this class, you learn the darkness spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the darkness created by the spell.</p>
</div>

<h5>Strength of the Grave<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureGrave" aria-expanded="true"
    aria-controls="featureGrave">[-]</button></span>
</h5>
<hr>

<div class="collapse show" id="featureGrave">
<p>Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.</p>
<p>After the saving throw succeeds, you can't use this feature again until you finish a long rest.</p>
</div>

<h5>Hound of Ill Omen<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHound" aria-expanded="true"
    aria-controls="featureHound">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHound">
<p>At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to magically summon a hound of ill omen to target one creature you can see within 120 feet of you. The hound uses the dire wolf's statistics (see the Monster Manual or appendix C in the Player's Handbook), with the following changes:</p>
<ul>
<li>The hound is size Medium, not Large, and it counts as a monstrosity, not a beast.</li>
<li>It appears with a number of temporary hit points equal to half your sorcerer level.</li>
<li>It can move through other creatures and objects as if they were difficult terrain. The hound takes 5 force damage if it ends its turn inside an object.</li>
<li>At the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound.</li>
</ul>
<p>The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound can make opportunity attacks, but only against its target. Additionally, while the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes.</p>

</div>

<h5>Shadow Walk<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWalk" aria-expanded="true"
    aria-controls="featureWalk">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureWalk">
<p>At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can magically teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.</p>
</div>

<h5 class="mt-2">Umbral Form<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureUmbral" aria-expanded="true"
    aria-controls="featureUmbral">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureUmbral">
<p>Starting at 18th level, you can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object.</p>
<p>You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action.</p>
</div>
</div>`;
const storm = `<h4 class="text-center">Storm Sorcery<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>Your innate magic comes from the power of elemental air. Many with this power can trace their magic back
to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so
powerful that folk still tell stories of it, or your lineage might include the influence of potent air
creatures such as djinn. Whatever the case, the magic of the storm permeates your being.</p>
<p>Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over
wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by
sahuagin, pirates, and other waterborne threats.</p>


<h5>Wind Speaker<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSpeaker" aria-expanded="true"
    aria-controls="featureSpeaker">[-]</button></span></h5>
<hr>

<div class="collapse show" id="featureSpeaker">
<p>The arcane magic you command is infused with elemental air. You can speak, read, and write
Primordial. Knowing this language allows you to understand and be understood by those who speak its
dialects: Aquan, Auran, Ignan, and Terran.</p>
</div>

<h5>Tempestuous Magic<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureTempest" aria-expanded="true"
    aria-controls="featureTempest">[-]</button></span>
</h5>
<hr>

<div class="collapse show" id="featureTempest">
<p>Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental
air to briefly surround you, immediately before or after you cast a spell of 1st level or higher.
Doing so allows you to fly up to 10 feet without provoking opportunity attacks.</p>
</div>

<h5>Heart of the Storm<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureHeart" aria-expanded="true"
    aria-controls="featureHeart">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureHeart">
<p>At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you start
casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts
from you. This eruption causes creatures of your choice that you can see within 10 feet of you to
take lightning or thunder damage (choose each time this ability activates) equal to half your
sorcerer level.</p>
</div>

<h5>Storm Guide<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#featureWalk" aria-expanded="true" aria-controls="featureWalk">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureWalk">
<p>At 6th level, you gain the ability to subtly control the weather around you.</p>
<p>If it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere
centered on you. You can end this effect as a bonus action.</p>
<p>If it is windy, you can use a bonus action each round to choose the direction that the wind blows in
a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your
next turn. This feature doesn't alter the speed of the wind.</p>
</div>

<h5 class="mt-2">Storm's Fury<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureFury" aria-expanded="true"
    aria-controls="featureFury">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureFury">
<p>Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal
lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make
a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is
pushed in a straight line up to 20 feet away from you.</p>
</div>

<h5 class="mt-2">Wind Soul<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureWind" aria-expanded="true"
    aria-controls="featureWind">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureWind">
<p>At 18th level, you gain immunity to lightning and thunder damage.</p>
<p>You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest.</p>
</div>
</div>`;
const wild = `<h4 class="text-center">Wild Magic<span class="ml-2"><button class="collapseButton" type="button"
data-toggle="collapse" data-target="#Origin" aria-expanded="true"
aria-controls="Origin">[-]</button></span></h4>
<div class="collapse show" id="Origin">
<p>Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have
endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the
Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or
marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason.
However it came to be, this chaotic magic churns within you, waiting for any outlet.</p>


<h5>Wild Magic Surge<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureSurge" aria-expanded="true"
    aria-controls="featureSurge">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureSurge">
<p>TStarting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed
magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll
a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect. A Wild
Magic Surge can happen once per turn.</p>
<p>If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires
concentration, it doesn't require concentration in this case; the spell lasts for its full duration.
</p>
<table class="table-striped table-hover mb-2">
<thead>
    <tr>
        <th class="col-1 text-center"><span>d100</span>
        </th>
        <th class="col-11">Effect</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-1 text-center">01-02</td>
        <td class="col-11">Roll on this table at the start of each of your turns for the next
            minute, ignoring this result on subsequent rolls.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">03-04</td>
        <td class="col-11">For the next minute, you can see any invisible creature if you have line of sight to it.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">05-06</td>
        <td class="col-11">A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">07-08</td>
        <td class="col-11">You cast fireball as a 3rd-level spell centered on yourself.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">09-10</td>
        <td class="col-11">You cast magic missile as a 5th-level spell.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">11-12</td>
        <td class="col-11">Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">13-14</td>
        <td class="col-11">You cast confusion centered on yourself.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">15-16</td>
        <td class="col-11">For the next minute, you regain 5 hit points at the start of each of your
            turns.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">17-18</td>
        <td class="col-11">You grow a long beard made of feathers that remains until you sneeze, at
            which point the feathers explode out from your face.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">19-20</td>
        <td class="col-11">You cast grease centered on yourself.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">21-22</td>
        <td class="col-11">Creatures have disadvantage on saving throws against the next spell you
            cast in the next minute that involves a saving throw.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">23-24</td>
        <td class="col-11">Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">25-26</td>
        <td class="col-11">An eye appears on your forehead for the next minute. During that time,
            you have advantage on Wisdom (Perception) checks that rely on sight.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">27-28</td>
        <td class="col-11">For the next minute, all your spells with a casting time of 1 action have
            a casting time of 1 bonus action.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">29-30</td>
        <td class="col-11">You teleport up to 60 feet to an unoccupied space of your choice that you
            can see.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">31-32</td>
        <td class="col-11">You are transported to the Astral Plane until the end of your next turn,
            after which time you return to the space you previously occupied or the nearest
            unoccupied space if that space is occupied.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">33-34</td>
        <td class="col-11">Maximize the damage of the next damaging spell you cast within the next
            minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">35-36</td>
        <td class="col-11">Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">37-38</td>
        <td class="col-11">1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">39-40</td>
        <td class="col-11">You regain 2d10 hit points.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">41-42</td>
        <td class="col-11">You turn into a potted plant until the start of your next turn. While a
            plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">43-44</td>
        <td class="col-11">For the next minute, you can teleport up to 20 feet as a bonus action on
            each of your turns.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">45-46</td>
        <td class="col-11">You cast levitate on yourself.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">47-48</td>
        <td class="col-11">A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">49-50</td>
        <td class="col-11">You can't speak for the next minute. Whenever you try, pink bubbles float
            out of your mouth.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">51-52</td>
        <td class="col-11">A spectral shield hovers near you for the next minute, granting you a +2
            bonus to AC and immunity to magic missile.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">53-54</td>
        <td class="col-11">You are immune to being intoxicated by alcohol for the next 5d6 days.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">55-56</td>
        <td class="col-11">Your hair falls out but grows back within 24 hours.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">57-58</td>
        <td class="col-11">For the next minute, any flammable object you touch that isn't being worn
            or carried by another creature bursts into flame.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">59-60</td>
        <td class="col-11">You regain your lowest-level expended spell slot.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">61-62</td>
        <td class="col-11">For the next minute, you must shout when you speak.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">63-64</td>
        <td class="col-11">You cast fog cloud centered on yourself.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">65-66</td>
        <td class="col-11">Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">67-68</td>
        <td class="col-11">You are frightened by the nearest creature until the end of your next turn.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">69-70</td>
        <td class="col-11">Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">71-72</td>
        <td class="col-11">You gain resistance to all damage for the next minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">73-74</td>
        <td class="col-11">A random creature within 60 feet of you becomes poisoned for 1d4 hours.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">75-76</td>
        <td class="col-11">You glow with bright light in a 30-foot radius for the next minute. Any
            creature that ends its turn within 5 feet of you is blinded until the end of its next turn.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">77-78</td>
        <td class="col-11">You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.
        </td>
    </tr>
    <tr>
        <td class="col-1 text-center">79-80</td>
        <td class="col-11">Illusory butterflies and flower petals flutter in the air within 10 feet
            of you for the next minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">81-82</td>
        <td class="col-11">You can take one additional action immediately.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">83-84</td>
        <td class="col-11">Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.
        </td>
    </tr>
    <tr>
        <td class="col-1 text-center">85-86</td>
        <td class="col-11">You cast mirror image.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">87-88</td>
        <td class="col-11">You cast fly on a random creature within 60 feet of you.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">89-90</td>
        <td class="col-11">You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">91-92</td>
        <td class="col-11">If you die within the next minute, you immediately come back to life as
            if by the reincarnate spell.
        </td>
    </tr>
    <tr>
        <td class="col-1 text-center">93-94</td>
        <td class="col-11">Your size increases by one size category for the next minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">95-96</td>
        <td class="col-11">You and all creatures within 30 feet of you gain vulnerability to
            piercing damage for the next minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">97-98</td>
        <td class="col-11">You are surrounded by faint, ethereal music for the next minute.</td>
    </tr>
    <tr>
        <td class="col-1 text-center">99-00</td>
        <td class="col-11">You regain all expended sorcery points.</td>
    </tr>
</tbody>
</table>
</div>

<h5>Tides of Chaos<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureTides" aria-expanded="true"
    aria-controls="featureTides">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureTides">
<p>Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.</p>
<p>Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.</p>
</div>

<h5>Bend Luck<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureLuck" aria-expanded="true"
    aria-controls="featureLuck">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureLuck">
<p>Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.</p>
</div>

<h5>Controlled Chaos<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#featureChaos" aria-expanded="true" aria-controls="featureChaos">[-]</button></span>
</h5>
<hr>
<div class="collapse show" id="featureChaos">
<p>At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.</p>
</div>

<h5 class="mt-2">Spell Bombardment<span class="ml-2"><button class="collapseButton" type="button"
    data-toggle="collapse" data-target="#featureBombardment" aria-expanded="true"
    aria-controls="featureBombardment">[-]</button></span></h5>
<hr>
<div class="collapse show" id="featureBombardment">
<p>Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.</p>
</div>
</div>`;
//Sorcerer origins
document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    if (event.target && event.target.matches("#aberrant")) {
        characterSubClass = "(Aberrant Mind)";
        document.getElementById("sorcOrigin").innerHTML = aberrant;
    } else if (event.target && event.target.matches("#clockwork")) {
        characterSubClass = "(Clockwork Soul)";
        document.getElementById("sorcOrigin").innerHTML = clockwork;
    } else if (event.target && event.target.matches("#divine")) {
        characterSubClass = "(Divine Soul)";
        document.getElementById("sorcOrigin").innerHTML = divine;
    } else if (event.target && event.target.matches("#draconic")) {
        characterSubClass = "(Draconic)";
        document.getElementById("sorcOrigin").innerHTML = draconic;
    } else if (event.target && event.target.matches("#giant")) {
        characterSubClass = "(Giant Soul)";
        document.getElementById("sorcOrigin").innerHTML = giant;
    } else if (event.target && event.target.matches("#phoenix")) {
        characterSubClass = "(Phoenix)";
        document.getElementById("sorcOrigin").innerHTML = phoenix;
    } else if (event.target && event.target.matches("#sea")) {
        characterSubClass = "(Sea)";
        document.getElementById("sorcOrigin").innerHTML = sea;
    } else if (event.target && event.target.matches("#shadow")) {
        characterSubClass = "(Shadow)";
        document.getElementById("sorcOrigin").innerHTML = shadow;
    } else if (event.target && event.target.matches("#storm")) {
        characterSubClass = "(Storm)";
        document.getElementById("sorcOrigin").innerHTML = storm;
    } else if (event.target && event.target.matches("#wild")) {
        characterSubClass = "(Wild Magic)";
        document.getElementById("sorcOrigin").innerHTML = wild;
    }
    document.getElementById("summarySubClass").textContent = characterSubClass;
});
const sorcererFeaturesList = [
    [`<li>
    Sorcerous Origin <span id="origin">TEST</span>
    </li><li>
    Spellcasting</li>`],
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


/*###################################################################
######################### Warlock ##################################
#####################################################################*/
const warlockFeaturesByLevel = [`<h1 class="text-center">Warlock<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span>
</h1>

<div class="collapse show" id="collapseIntro">
<p>With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.</p>
<p>As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.</p>
<p>Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.</p>
<p>Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge
of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.</p>

<h5>Sworn and Beholden</h5>
<p>A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead
a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows
in power, at the cost of occasional services performed on the patron's behalf.</p>
<p>The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their
magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons.</p>

<h5>Delvers into Secrets</h5>
<p>Warlocks are driven by an insatiable need for knowledge and power, which compels them into their pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their later careers as well.</p>
<p>Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles into
a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden lore, a brilliant but crazed student's mind is opened to realities beyond the material world and to the alien beings that dwell in the outer void.</p>
<p>Warlocks are finders and keepers of secrets. They push at the edge of our understanding of the world, always seeking to expand their expertise. Where sages or wizards might heed a clear sign of danger and end their research, a warlock plunges
ahead, heedless of the cost. Thus, it takes a peculiar mixture of intelligence, curiosity, and recklessness to produce a warlock. Many folk would describe that combination as evidence of madness. Warlocks see it as a demonstration of bravery.</p>
<p>Warlocks are defined by two elements that work in concert to forge their path into this class. The first element is the event or circumstances that led to a warlock's entering into a pact with a planar entity. The second one is the nature
of the entity a warlock is bound to. Unlike clerics, who typically embrace a deity and that god's ethos, a warlock might have no love for a patron, or vice versa.</p>

<i>“You think me mad? I think true insanity is being content to live a life of mortal drudgery when knowledge and power is there for the taking in the realm beyond.”</i>
<p class="text-right">— Xarren, herald of Acamar</p>
</div>



<h2 class="text-center">Level 1<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#level1" aria-expanded="true" aria-controls="level1">[-]</button></span></h2>
<div class="collapse show" id="level1">

<h5>Otherworldly Patron<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
            data-target="#featurePatron" aria-expanded="true" aria-controls="featurePatron">[-]</button></span></h5>
        <hr>

        <div class="collapse show mb-2" id="featurePatron">
            <p>At 1st level, you have struck a bargain with an otherworldly being chosen from the list of available patrons. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.</p>
            <div class="d-flex justify-content-around row">
                <button type="button" class="btn btn-secondary" id="archfey">Archfey</button>
                <button type="button" class="btn btn-secondary" id="celestial">Celestial</button>
                <button type="button" class="btn btn-secondary" id="fathomless">Fathomless</button>
                <button type="button" class="btn btn-secondary" id="fiend">Fiend</button>
                <button type="button" class="btn btn-secondary" id="genie">Genie</button>
                <button type="button" class="btn btn-secondary" id="greatOldOne">Great Old One</button>
                <button type="button" class="btn btn-secondary" id="hexBlade">Hexblade</button>
                <button type="button" class="btn btn-secondary" id="ravenQueen">Raven Queen</button>
                <button type="button" class="btn btn-secondary" id="seeker">Seeker</button>
                <button type="button" class="btn btn-secondary" id="undead">Undead</button>
                <button type="button" class="btn btn-secondary" id="undying">Undying</button>
            </div>
            <div id="warlockOrigin" class="choiceBG"></div>
        </div>

<h5>Pact Magic<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
    data-target="#feature1" aria-expanded="true" aria-controls="feature1">[-]</button></span></h5>
<hr>

<div class="collapse show" id="feature1">
<p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the warlock spell list.</p>

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
const archfey = `<h4 class="text-center">The Archfey<span class="ml-2"><button class="collapseButton" type="button"
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
const celestial = `<h4 class="text-center">The Celestial<span class="ml-2"><button class="collapseButton" type="button"
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
const fathomless = `<h4 class="text-center">The Fathomless<span class="ml-2"><button class="collapseButton" type="button"
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
const fiend = `<h4 class="text-center">The Fiend<span class="ml-2"><button class="collapseButton" type="button"
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
const genie = `<h4 class="text-center">The Genie<span class="ml-2"><button class="collapseButton" type="button"
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
<caption>Genie Kind</caption>
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
const greatOldOne = `<h4 class="text-center">The Great Old One<span class="ml-2"><button class="collapseButton" type="button"
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
const hexBlade = `<h4 class="text-center">The Hexblade<span class="ml-2"><button class="collapseButton" type="button"
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
const ravenQueen = `<h4 class="text-center">The Raven Queen<span class="ml-2"><button class="collapseButton" type="button"
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
const seeker = `<h4 class="text-center">The Seeker<span class="ml-2"><button class="collapseButton" type="button"
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
const undead = `<h4 class="text-center">The Undead<span class="ml-2"><button class="collapseButton" type="button"
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
const undying = `<h4 class="text-center">The Undying<span class="ml-2"><button class="collapseButton" type="button"
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
document.getElementById("displayContent").addEventListener('click', function(event) { //to pin the eventlistener to the parent node
    if (event.target && event.target.matches("#archfey")) {
        characterSubClass = "(Archfey)";
        document.getElementById("warlockOrigin").innerHTML = archfey;
    } else if (event.target && event.target.matches("#celestial")) {
        characterSubClass = "(Celestial)";
        document.getElementById("warlockOrigin").innerHTML = celestial;
    } else if (event.target && event.target.matches("#fathomless")) {
        characterSubClass = "(Fathomless)";
        document.getElementById("warlockOrigin").innerHTML = fathomless;
    } else if (event.target && event.target.matches("#fiend")) {
        characterSubClass = "(Fiend)";
        document.getElementById("warlockOrigin").innerHTML = fiend;
    } else if (event.target && event.target.matches("#genie")) {
        characterSubClass = "(Genie)";
        document.getElementById("warlockOrigin").innerHTML = genie;
    } else if (event.target && event.target.matches("#greatOldOne")) {
        characterSubClass = "(Great Old One)";
        document.getElementById("warlockOrigin").innerHTML = greatOldOne;
    } else if (event.target && event.target.matches("#hexBlade")) {
        characterSubClass = "(Hexblade)";
        document.getElementById("warlockOrigin").innerHTML = hexBlade;
    } else if (event.target && event.target.matches("#ravenQueen")) {
        characterSubClass = "(Raven Queen)";
        document.getElementById("warlockOrigin").innerHTML = ravenQueen;
    } else if (event.target && event.target.matches("#seeker")) {
        characterSubClass = "(Seeker)";
        document.getElementById("warlockOrigin").innerHTML = seeker;
    } else if (event.target && event.target.matches("#undead")) {
        characterSubClass = "(Undead)";
        document.getElementById("warlockOrigin").innerHTML = undead;
    } else if (event.target && event.target.matches("#undying")) {
        characterSubClass = "(Undying)";
        document.getElementById("warlockOrigin").innerHTML = undying;
    }
    document.getElementById("summarySubClass").textContent = characterSubClass;
});
const warlockFeaturesList = [
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

/*###################################################################
######################### Wizard ##################################
#####################################################################*/
const wizardFeaturesByLevel = [`<h1 class="text-center">Wizard<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse"
data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">[-]</button></span>
</h1>

<div class="collapse show" id="collapseIntro">
<p>Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire
toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.</p>
<p>Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole
opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.</p>
<p>Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens
his eyes and points down the passage to his left.</p>
<p>Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force
mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals
to other worlds.</p>

<h5>Scholars of the Arcane</h5>
<p>Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance
of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.</p>
<p>Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures
(such as the fey) that are steeped in magic.</p>

<h5>The Lure of Knowledge</h5>
<p>Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as
diviners, serve in military forces, or pursue lives of crime or domination.</p>
<p>But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations
knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age.</p>
<p>Only a select few people in the world are wielders of magic. Of all those, wizards stand at the pinnacle of the craft. Even the least of them can manipulate forces that flout the laws of nature, and the most accomplished among them can cast
spells with world-shaking effects.</p>
<p>The price that wizards pay for their mastery is that most valuable of commodities: time. It takes years of study, instruction, and experimentation to learn how to harness magical energy and carry spells around in one's own mind. For adventuring
wizards and other spellcasters who aspire to the highest echelons of the profession, the studying never ends, nor does the quest for knowledge and power.</p>

<i>“Wizardry requires understanding. The knowledge of how and why magic works, and our efforts to broaden that understanding, have brought about the key advances in civilization over the centuries.”</i>
<p class="text-right">— Gimble the illusionist</p>
</div>



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
const wizardFeaturesList = [
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