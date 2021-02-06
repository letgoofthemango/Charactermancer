class Artificer extends Character {
    name = "Artificer";
    hitDice = 8;
    healthPoints = hitDice + constitutionMod;
    armorProficiencies = 2;
    weaponProficiencies = [0, 40];
    toolproficiencies = [22, 14]; //plus one one type of artisan's tools of your choice
    savingThrowProficiencies = [2, 3];
    classSkillsSelection = [2, 5, 8, 9, 10, 11, 15]; //------------choose 2
    spellcaster = true;
    spellCastingAbility = 0;
    spellSaveDC = 8 + intelligenceMod + proficiencyBonus;
    spellAttackBonus = intelligenceMod + proficiencyBonus;
    source = 2;
    static alchemist = `<h4 class="text-center">Alchemist<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#alchemistCollapse" aria-expanded="true" aria-controls="alchemistCollapse">[-]</button></span></h4>
<div class="collapse show" id="alchemistCollapse">
    <p>An Alchemist is an expert at combining reagents to produce mystical effects. Alchemists use their creations to give life and to leech it away. Alchemy is the oldest of artificer traditions, and its versatility has long been valued during times
        of war and peace.</p>

    <h5><u>Tool Proficiency</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureToolProf" aria-expanded="true" aria-controls="featureToolProf">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureToolProf">
        <p>When you adopt this specialization at 3rd level, you gain proficiency with alchemist's supplies. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice</p>
    </div>

    <h5><u>Alchemist Spells</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureAlchemistSpells" aria-expanded="true" aria-controls="featureAlchemistSpells">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureAlchemistSpells">
        <p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table. These spells count as artificer spells for you, but they don't count against the number
            of artificer spells you prepare.</p>

        <table class="table-striped mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Artificer Level</th>
                    <th class="col-5">Spell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-5">healing word, ray of sickness</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-5">flaming sphere, Melf's acid arrow</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-5">gaseous form, mass healing word</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">13th</td>
                    <td class="col-5">blight, death ward</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">17th</td>
                    <td class="col-5">cloudkill, raise dead</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h5><u>Experimental Elixir</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureExperimentalElixier" aria-expanded="true" aria-controls="featureExperimentalElixier">[-]</button></span></h5>
        <div class="collapse show" id="featureExperimentalElixier">
            <p>Beginning at 3rd level, whenever you finish a long rest, you can magically produce an <i>experimental elixir</i> in an empty flask you touch. Roll on the Experimental Elixir table for the elixir's effect, which is triggered when someone
                drinks the elixir. As an action, a creature can drink the elixir or administer it to an incapacitated creature.</p>
            <p>Creating an <i>experimental elixir</i> requires you to have alchemist's supplies on your person, and any elixir you create with this feature lasts until it is drunk or until the end of your next long rest.</p>
            <p>When you reach certain levels in this class, you can make more elixirs at the end of a long rest: two at 6th level and three at 15th level. Roll for each elixir's effect separately. Each elixir requires its own flask.</p>
            <p>You can create additional <i>experimental elixirs</i> by expending a spell slot of 1st level or higher for each one. When you do so, you use your action to create the elixir in an empty flask you touch, and you choose the elixir's
                effect from the Experimental Elixir table.</p>
            <table class="mb-2">
                <thead>
                    <tr>
                        <th class="col-2 text-center"><span>d6</span></th>
                        <th class="col-10" data-rd-isroller="false">Effect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-2 text-center">1</td>
                        <td class="col-10"><b>Healing</b>. The drinker regains a number of hit points equal to <span>2d4</span> + your Intelligence modifier.</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">2</td>
                        <td class="col-10"><b>Swiftness</b>. The drinker's walking speed increases by 10 feet for 1 hour.</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">3</td>
                        <td class="col-10"><b>Resilience</b>. The drinker gains a +1 bonus to AC for 10 minutes.</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">4</td>
                        <td class="col-10"><b>Boldness</b>. The drinker can roll a <span>d4</span> and add the number rolled to every attack roll and saving throw they make for the next minute.</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">5</td>
                        <td class="col-10"><b>Flight</b>. The drinker gains a flying speed of 10 feet for 10 minutes.</td>
                    </tr>
                    <tr>
                        <td class="col-2 text-center">6</td>
                        <td class="col-10"><b>Transformation</b>. The drinker's body is transformed as if by the alter self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <h5><u>Alchemical Savant</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureAlchemicalSavant" aria-expanded="true" aria-controls="featureAlchemicalSavant">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureAlchemicalSavant">
        <p>At 5th level, you develop masterful command of magical chemicals, enhancing the healing and damage you create through them. Whenever you cast a spell using your alchemist's supplies as the spellcasting focus, you gain a bonus to one roll
            of the spell. That roll must restore hit points or be a damage roll that deals acid, fire, necrotic, or poison damage, and the bonus equals your Intelligence modifier (minimum of +1).</p>
    </div>

    <h5><u>Restorative Reagents</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureRestorativeReagents" aria-expanded="true" aria-controls="featureRestorativeReagents">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureRestorativeReagents">
        <p>Starting at 9th level, you can incorporate restorative reagents into some of your works:</p>
        <ul>
            <li>Whenever a creature drinks an experimental elixir you created, the creature gains temporary hit points equal to 2d6 + your Intelligence modifier (minimum of 1 temporary hit point).</li>
            <li>You can cast lesser restoration without expending a spell slot and without preparing the spell, provided you use alchemist's supplies as the spellcasting focus. You can do so a number of times equal to your Intelligence modifier (minimum
                of once), and you regain all expended uses when you finish a long rest.</li>
        </ul>
    </div>
    <h5><u>Chemical Mastery</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureChemicalMastery" aria-expanded="true" aria-controls="featureChemicalMastery">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureChemicalMastery">
        <p>By 15th level, you have been exposed to so many chemicals that they pose little risk to you, and you can use them to quickly end certain ailments:</p>
        <ul>
            <li>You gain resistance to acid damage and poison damage, and you are immune to the poisoned condition. </li>
            <li>You can cast greater restoration and heal without expending a spell slot, without preparing the spell, and without material components, provided you use alchemist's supplies as the spellcasting focus. Once you cast either spell with
                this feature, you can't cast that spell with it again until you finish a long rest.</li>
        </ul>
    </div>
</div>`;

    static armorer = `<h4 class="text-center">Armorer<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#armorerCollapse" aria-expanded="true" aria-controls="armorerCollapse">[-]</button></span></h4>
<div class="collapse show" id="armorerCollapse">
    <p>An artificer who specializes as an Armorer modifies armor to function almost like a second skin. The armor is enhanced to hone the artificer's magic, unleash potent attacks, and generate a formidable defense. The artificer bonds with this
        armor, becoming one with it even as they experiment with it and refine its magical capabilities.</p>

    <h5><u>Tools of the Trade</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureToolTrade" aria-expanded="true" aria-controls="featureToolTrade">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureToolTrade">
        <p>You gain proficiency with heavy armor. You also gain proficiency with smith's tools. If you already have this tool proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>
    </div>

    <h5><u>Armorer Spells</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorerSpells" aria-expanded="true" aria-controls="featureArmorerSpells">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorerSpells">
        <p>You always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells
            you prepare.</p>

        <table class="table-striped mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Artificer Level</th>
                    <th class="col-5">Spell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-5">magic missile, thunderwave</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-5">mirror image, shatter</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-5">hypnotic pattern, lightning bolt</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">13th</td>
                    <td class="col-5">fire shield, greater invisibility</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">17th</td>
                    <td class="col-5">passwall, wall of force</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5><u>Arcane Armor</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArcaneArmor" aria-expanded="true" aria-controls="featureArcaneArmor">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureArcaneArmor">
        <p>Your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand. You gain the following benefits while
            wearing this armor:</p>
        <ul>
            <li>If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.</li>
            <li>You can use the arcane armor as a spellcasting focus for your artificer spells.</li>
            <li>The armor attaches to you and can't be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically
                to a limb it replaces.</li>
            <li>You can doff or don the armor as an action. The armor continues to be Arcane Armor until you don another suit of armor or you die.</li>
        </ul>
    </div>


    <h5><u>Armor Model</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorModel" aria-expanded="true" aria-controls="featureArmorModel">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorModel">
        <p>You can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.</p>
        <p>Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.</p>
        <p>You can change the armor's model whenever you finish a short or long rest, provided you have smith's tools in hand.</p>

        <p><b>Guardian.</b> You design your armor to be in the front line of conflict. It has the following features:</p>
        <ul>
            <li><b>Thunder Gauntlets.</b>Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls
                against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.</li>
            <li><b>Defensive Field.</b> As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can
                use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.</li>
        </ul>
        <p> <b>Infiltrator.</b> You customize your armor for subtle undertakings. It has the following features:</p>
        <ul>
            <li><b>Lightning Launcher.</b> A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals 1d6 lightning
                damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra 1d6 lightning damage to that target.</li>
            <li><b>Powered Steps.</b> Your walking speed increases by 5 feet.</li>
            <li><b>Dampening Field.</b> You have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal.</li>
        </ul>
    </div>

    <h5><u>Extra Attack</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureExtraAttack" aria-expanded="true" aria-controls="featureExtraAttack">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureExtraAttack">
        <p>You can attack twice, rather than once, whenever you take the Attack action on your turn.</p>
    </div>

    <h5><u>Armor Modifications</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorModifications" aria-expanded="true" aria-controls="featureArmorModifications">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorModifications">
        <p>You learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special
            weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by
            2, but those extra items must be part of your Arcane Armor.</p>
        <ul>
            <li>You gain resistance to acid damage and poison damage, and you are immune to the poisoned condition. </li>
            <li>You can cast greater restoration and heal without expending a spell slot, without preparing the spell, and without material components, provided you use alchemist's supplies as the spellcasting focus. Once you cast either spell with
                this feature, you can't cast that spell with it again until you finish a long rest.</li>
        </ul>
    </div>

    <h5><u>Perfected Armor</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePerfectedArmor" aria-expanded="true" aria-controls="featurePerfectedArmor">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePerfectedArmor">
        <p>Your Arcane Armor gains additional benefits based on its model, as shown below.</p>
        <p><b>Guardian.</b> When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force the creature to make a Strength saving throw against your spell save DC, pulling the creature
            up to 30 feet toward you to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction. You can use this reaction a number of times equal to your
            proficiency bonus, and you regain all expended uses of it when you finish a long rest.</p>
        <p><b>Infiltrator.</b> Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage
            on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage.</p>
    </div>
</div>`;

    static artillerist = `<h4 class="text-center">Artillerist<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#armorerCollapse" aria-expanded="true" aria-controls="armorerCollapse">[-]</button></span></h4>
<div class="collapse show" id="armorerCollapse">
    <p>An Artillerist specializes in using magic to hurl energy, projectiles, and explosions on a battlefield. This destructive power was valued by all the armies of the Last War. Now that the war is over, some members of this specialization have
        sought to build a more peaceful world by using their powers to fight the resurgence of strife in Khorvaire. The gnome artificer Vi, an unlikely yet key member of House Cannith's warforged project, has been especially vocal about making
        things right: "It's about time we fixed things instead of blowing them all to hell."</p>

    <h5><u>Tool Proficiency</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureToolTrade" aria-expanded="true" aria-controls="featureToolTrade">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureToolTrade">
        <p>When you adopt this specialization at 3rd level, you gain proficiency with woodcarver's tools. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>
    </div>

    <h5><u>Artillerist Spells</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorerSpells" aria-expanded="true" aria-controls="featureArmorerSpells">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorerSpells">
        <p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Artillerist Spells table. These spells count as artificer spells for you, but they don't count against the
            number of artificer spells you prepare.</p>

        <table class="table-striped mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Artificer Level</th>
                    <th class="col-5">Spell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-5">shield, thunderwave</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-5">mirror image, shatter</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-5">fireball, wind wall</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">13th</td>
                    <td class="col-5">ice storm, wall of fire</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">17th</td>
                    <td class="col-5">cone of cold, wall of force</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5><u>Eldritch Cannon</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArcaneArmor" aria-expanded="true" aria-controls="featureArcaneArmor">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureArcaneArmor">
        <p>At 3rd level, you learn how to create a magical cannon. Using woodcarver's tools or smith's tools, you can take an action to magically create a Small or Tiny eldritch cannon in an unoccupied space on a horizontal surface within 5 feet
            of you. A Small eldritch cannon occupies its space, and a Tiny one can be held in one hand.</p>
        <p>Once you create a cannon, you can't do so again until you finish a long rest or until you expend a spell slot of 1st level or higher. You can have only one cannon at a time and can't create one while your cannon is present.</p>
        <p>The cannon is a magical object. Regardless of size, the cannon has an AC of 18 and a number of hit points equal to five times your artificer level. It is immune to poison damage and psychic damage, and all conditions. If it is forced to
            make an ability check or a saving throw, treat all its ability scores as 10 (+0). If the mending spell is cast on it, it regains 2d6 hit points. It disappears if it is reduced to 0 hit points or after 1 hour. You can dismiss it early
            as an action.</p>
        <p>When you create the cannon, you determine its appearance and whether it has legs. You also decide which type it is, choosing from the options on the Eldritch Cannons table. On each of your turns, you can take a bonus action to cause the
            cannon to activate if you are within 60 feet of it. As part of the same bonus action, you can direct the cannon to walk or climb up to 15 feet to an unoccupied space, provided it has legs.</p>
        <table class="table-striped">
            <thead>
                <tr>
                    <th class="col-2" data-rd-isroller="false">Cannon</th>
                    <th class="col-10" data-rd-isroller="false">Activation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2">Flamethrower</td>
                    <td class="col-10">The cannon exhales fire in an adjacent 15-foot cone that you designate. Each creature in that area must make a Dexterity saving throw against your spell save DC, taking 2d8 fire damage on a failed save or half as much damage
                        on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.</td>
                </tr>
                <tr>
                    <td class="col-2">Force Ballista</td>
                    <td class="col-10">Make a ranged spell attack, originating from the cannon, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the
                        cannon.
                    </td>
                </tr>
                <tr>
                    <td class="col-2">Protector</td>
                    <td class="col-10">The cannon emits a burst of positive energy that grants itself and each creature of your choice within 10 feet of it a number of temporary hit points equal to 1d8 + your Intelligence modifier (minimum of +1).</td>
                </tr>
            </tbody>
        </table>

    </div>


    <h5><u>Arcane Firearm</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorModel" aria-expanded="true" aria-controls="featureArmorModel">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorModel">
        <p>At 5th level, you know how to turn a wand, staff, or rod into an arcane firearm, a conduit for your destructive spells. When you finish a long rest, you can use woodcarver's tools to carve special sigils into a wand, staff, or rod and
            thereby turn it into your arcane firearm. The sigils disappear from the object if you later carve them on a different item. The sigils otherwise last indefinitely.</p>
        <p>You can use your arcane firearm as a spellcasting focus for your artificer spells. When you cast an artificer spell through the firearm, roll a d8, and you gain a bonus to one of the spell's damage rolls equal to the number rolled.</p>
    </div>

    <h5><u>Explosive Cannon</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureExtraAttack" aria-expanded="true" aria-controls="featureExtraAttack">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureExtraAttack">
        <p>Starting at 9th level, every eldritch cannon you create is more destructive:</p>
        <ul>
            <li>The cannon's damage rolls all increase by 1d8.</li>
            <li>As an action, you can command the cannon to detonate if you are within 60 feet of it. Doing so destroys the cannon and forces each creature within 20 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d8
                force damage on a failed save or half as much damage on a successful one.</li>
        </ul>
    </div>

    <h5><u>Armor Modifications</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorModifications" aria-expanded="true" aria-controls="featureArmorModifications">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorModifications">
        <p>You learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special
            weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by
            2, but those extra items must be part of your Arcane Armor.</p>
        <ul>
            <li>You gain resistance to acid damage and poison damage, and you are immune to the poisoned condition. </li>
            <li>You can cast greater restoration and heal without expending a spell slot, without preparing the spell, and without material components, provided you use alchemist's supplies as the spellcasting focus. Once you cast either spell with
                this feature, you can't cast that spell with it again until you finish a long rest.</li>
        </ul>
    </div>

    <h5><u>Fortified Position</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePerfectedArmor" aria-expanded="true" aria-controls="featurePerfectedArmor">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePerfectedArmor">
        <p>Starting at 15th level, you're a master at forming well-defended emplacements using Eldritch Cannon:</p>
        <ul>
            <li>You and your allies have half cover while within 10 feet of a cannon you create with Eldritch Cannon, as a result of a shimmering field of magical protection that the cannon emits.</li>
            <li>You can now have two cannons at the same time. You can create two with the same action (but not the same spell slot), and you can activate both of them with the same bonus action. You determine whether the cannons are identical to
                each other or different. You can't create a third cannon while you have two.</li>
        </ul>
    </div>
</div>`

    static battlesmith = `<h4 class="text-center">Battle Smith<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#armorerCollapse" aria-expanded="true" aria-controls="armorerCollapse">[-]</button></span></h4>
<div class="collapse show" id="armorerCollapse">
    <p>Armies require protection, and someone has to put things back together if defenses fail. A combination of protector and medic, a Battle Smith is an expert at defending others and repairing both material and personnel. To aid in their work,
        Battle Smiths are usually accompanied by a steel defender, a protective companion of their own creation. Many soldiers tell stories of nearly dying before being saved by a Battle Smith and a steel defender.</p>
    <p>Battle Smiths played a key role in House Cannith's work on battle constructs and the original warforged, and after the Last War, these artificers led efforts to aid those who were injured in the war's horrific battles.</p>

    <h5><u>Tool Proficiency</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureToolTrade" aria-expanded="true" aria-controls="featureToolTrade">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureToolTrade">
        <p>When you adopt this specialization at 3rd level, you gain proficiency with smith's tools. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.</p>
    </div>

    <h5><u>Battle Smith Spells</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorerSpells" aria-expanded="true" aria-controls="featureArmorerSpells">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorerSpells">
        <p>Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table. These spells count as artificer spells for you, but they don't count against the
            number of artificer spells you prepare.</p>

        <table class="table-striped col-5 mb-2">
            <thead>
                <tr>
                    <th class="col-2 text-center">Artificer Level</th>
                    <th class="col-4">Spell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="col-2 text-center">3rd</td>
                    <td class="col-4">heroism, shield</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">5th</td>
                    <td class="col-4">branding smite, warding bond</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">9th</td>
                    <td class="col-4">aura of vitality, conjure barrage</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">13th</td>
                    <td class="col-4">aura of purity, fire shield</td>
                </tr>
                <tr>
                    <td class="col-2 text-center">17th</td>
                    <td class="col-4">banishing smite, mass cure wounds</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h5><u>Battle Ready</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArcaneArmor" aria-expanded="true" aria-controls="featureArcaneArmor">[-]</button></span></h5>
    <hr>
    <div class="collapse show" id="featureArcaneArmor">
        <p>When you reach 3rd level, your combat training and your experiments with magic have paid off in two ways:</p>
        <ul>
            <li>You gain proficiency with martial weapons.</li>
            <li>When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.</li>
        </ul>
        <table class="table-striped">
            <thead>
                <tr>
                    <th class="col-2" data-rd-isroller="false">Cannon</th>
                    <th class="col-10" data-rd-isroller="false">Activation</th>
                </tr>
    </div>


    <h5><u>Steel Defender</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorModel" aria-expanded="true" aria-controls="featureArmorModel">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorModel">
        <p>By 3rd level, your tinkering has borne you a faithful companion, a steel defender. It is friendly to you and your companions, and it obeys your commands. <em><u>See this creature's game statistics in the steel defender stat block, which uses your proficiency bonus (PB) in several places.</u>
        </em> You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics.</p>
        <p>In combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action
            on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the defender can take any action of its choice, not just Dodge.</p>
        <p>If the mending spell is cast on it, it regains 2d6 hit points. If it has died within the last hour, you can use your smith's tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level
            or higher. The steel defender returns to life after 1 minute with all its hit points restored.</p>
        <p>At the end of a long rest, you can create a new steel defender if you have your smith's tools with you. If you already have a steel defender from this feature, the first one immediately perishes. The defender also perishes if you die.</p>
    </div>

    <h5><u>Extra Attack</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureExtraAttack" aria-expanded="true" aria-controls="featureExtraAttack">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureExtraAttack">
        <p>Starting at 5th level, you can attack twice, rather than once, whenever you take the Attack action on your turn.</p>
    </div>

    <h5><u>Arcane Jolt</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featureArmorModifications" aria-expanded="true" aria-controls="featureArmorModifications">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featureArmorModifications">
        <p>At 9th level, you learn new ways to channel arcane energy to harm or heal. When either you hit a target with a magic weapon attack or your steel defender hits a target, you can channel magical energy through the strike to create one of
            the following effects:</p>
        <ul>
            <li>The target takes an extra 2d6 force damage.</li>
            <li>Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring 2d6 hit points to it.</li>
        </ul>
        <p>You can use this energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses when you finish a long rest.</p>
    </div>

    <h5><u>Improved Defender</u><span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#featurePerfectedArmor" aria-expanded="true" aria-controls="featurePerfectedArmor">[-]</button></span></h5>
    <hr>

    <div class="collapse show" id="featurePerfectedArmor">
        <p>At 15th level, your Arcane Jolt and steel defender become more powerful:</p>
        <ul>
            <li>The extra damage and the healing of your Arcane Jolt both increase to 4d6.</li>
            <li>Your steel defender gains a +2 bonus to Armor Class.</li>
            <li>Whenever your steel defender uses its Deflect Attack, the attacker takes force damage equal to 1d4 + your Intelligence modifier.</li>
        </ul>
    </div>
</div>`;

    static artificerFeaturesByLevel = [`<h1 class="text-center">Artificer<span class="ml-2"><button class="collapseButton" type="button"
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
<p>— Tasha</p>
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
    static artificerFeaturesList = [
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
    ######################### Multiclassing ##############################
    ######################################################################*/
    multiClassAbilityScore = [intelligence];
    multiClassWeaponProficiencies = [];
    multiClassArmorProficiencies = [3];
    multiClassToolProficiencies = [14, 22];
    /*###################################################################
    ######################### Methods ##############################
    ######################################################################*/
    getAC = function () {
        if (hasShield && armorType == "Medium") {
            characterArmorClass = armorClass + Math.min(Math.max(-4, dexterityMod), 2) + 2;
        } else if (hasShield && armorType == "Light") {
            characterArmorClass = armorClass + dexterityMod + 2;
        } else {
            characterArmorClass = 10 + dexterityMod;
        }
    };

    getHitpointsFirstLvl = function () { };
    getHitpointsLvl = function () { };
    getMaxSpellLvl = function () { };
    getSpellSlots = function () { };
    getSpellSaveDC = function () { };
    getInfusionsCount = function () { };

}