class Bard extends Character {
    static bardFeaturesByLevel = [`<h1 class="text-center">Bard<span class="ml-2"><button class="collapseButton" type="button"
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
        <p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See chapter 10 of the Players Handbook for the general rules of
            spellcasting.</p>

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
    static bardFeaturesList = [
        [`<li>Bardic Inspiration (d6)</li>
        <li>Spellcasting</li>`],
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

    static displayBardFeaturesByLevel() {
        const classDetailsNode = document.getElementById("showClassDetails");
        for (let i = 0; i < characterLevel; i++) {
            classDetailsNode.innerHTML += Bard.bardFeaturesByLevel[i];
        }
    }


    // Full character actions----------------------------------------------------------------------------------------------------------------------
    static setBardClass() {
        characterClass = BARD;
        Character.setCharacterHitdice(8);
        Character.setCharacterSavingThrows("Dexterity", "Charisma");
        Character.setClassSkills("Acrobatics", "AnimalHandling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight", "Stealth", "Survival");
        Character.setCharacterSkillsNumberToChoose(3);
        Character.setCharacterFeatures("Bardic Inspiration", "Spellcasting");
        Character.setCharacterWeaponProficiencies("SimpleWeapons", "HandCrossbow", "Longsword", "Rapier", "Shortsword");
        Character.setCharacterArmorProficiency("light");
        Character.setCharacterSpellsKnown(2, 4, 0, 0, 0, 0, 0, 0, 0, 0);
        Character.setClassSpells(1);
        Character.setCharacterSpellSlots(2, 0, 0, 0, 0, 0, 0, 0, 0);
    }


}