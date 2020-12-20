class Character {
    name = "Character";
    hitDice;
    armorProficiencies; //0=none,1=light armor 2=medium armor 3=medium armor+shield 4 Heavy armor+shields------
    weaponProficiencies = [];
    //0= simple weapons, 1=Martial weapons, 3= club 4=dagger, 5=Greatclub, 6=Handaxe, 7= Javelin, 8=Light Hammer, 9= Mace, 10=Quarterstaff, 11= Sickle, 12= Spear, 13=Light Crossbow, 14=Dart, 15=Shortbow, 16= Sling, 17= Battleaxe, 18=Flail, 19=Glaive, 20=Greataxe, 21=Greatsword, 22=Halberd, 23=Lance, 24=Longsword, 25=Maul, 26= Morningstar, 27=Pike, 28=Rapier, 29= Scimitar, 30=Shortsword, 31=Trident, 32=Warpick, 33=Warhammer, 34=Whip, 35=Blowgun, 36=Hand Crossbow, 37=Heavy Crossbow, 38=Longbow, 39=Net, 40=Fire arms----

    toolProficiencies = [];
    //0=Alchemist's supplies 1=Brewer's supplies 2=Calligrapher's supplies 3=Carpenter's tools 4=Cartographer's tools 5= Cobbler's tools 6=Cook's utensils 7=Glassblower's tools 8=Jeweler's tools 9=Leatherworker's tools 10=Mason's tools 11=Painter's supplies 12=Potter's tools 13=Smith's tools 14=Tinker's tools 15=Weaver's tools 16=Woodcarver's tools 17=Disguise Kit 18=Forgery kit 19=Herbalism kit 20=Navigator's tools 21=Poisoner's kit 22=Thieves' tools 23=Vehicles (land or water) 24=Dice set 25=Dragonchess set 25= Playing card set 26=Three-Dragon Ante set 27=Bagpipes 28=Drum 29=Dulcimer 30=Flute 31=Lute 32=Lyre 33=Horn 34=Pan flute 35=Shawm 36=Viol----------------

    savingThrowProficiencies = []; //0=Strength 1=Dex 2=Con 3=Int 4= Wis 5=Cha


    classSkills = []; // 0=Acrobatics 1=Animal Handling 2=Arcana 3= Athletics 4= Deception 5= History 6= Insight 7=Intimidation 8=Investigation 9= Medicine 10=Nature 11= Perception 12=Performance 13=Persuation 14=Religion 15=Sleight of Hand 16=Stealth 17=Survival------------


    spellCaster;
    spellCastingAbility; // 0=Int 1=Wis 2=Cha---------
    spellSaveDC = 8 + mod + proficiencyBonus;
    spellAttackBonus = mod + proficiencyBonus;
    source; //0=PHB, 1=TCE, 2= UAMy----------

    /*###################################################################
    ######################### Multiclassing ##############################
    ######################################################################*/

    multiClassAbilityScore = [];
    multiClassWeaponProficiencies = [];
    //0= simple weapons, 1=Martial weapons, 3= club 4=dagger, 5=Greatclub, 6=Handaxe, 7= Javelin, 8=Light Hammer, 9= Mace, 10=Quarterstaff, 11= Sickle, 12= Spear, 13=Light Crossbow, 14= Dart, 15=Shortbow, 16= Sling, 17= Battleaxe, 18=Flail, 19=Glaive, 20=Greataxe, 21=Greatsword, 22=Halberd, 23=Lance, 24=Longsword, 25=Maul, 26= Morningstar, 27=Pike, 28=Rapier, 29= Scimitar, 30=Shortsword, 31=Trident, 32=Warpick, 33=Warhammer, 34=Whip, 35=Blowgun, 36=Hand Crossbow, 37=Heavy Crossbow, 38=Longbow, 39=Net, 40=Fire arms----
    multiClassArmorProficiencies = []; //0=none,1=light armor 2=medium armor 3=medium armor+shield 4 Heavy armor+shields------
    multiClassToolProficiencies = []; //0=Alchemist's supplies 1=Brewer's supplies 2=Calligrapher's supplies 3=Carpenter's tools 4=Cartographer's tools 5= Cobbler's tools 6=Cook's utensils 7=Glassblower's tools 8=Jeweler's tools 9=Leatherworker's tools 10=Mason's tools 11=Painter's supplies 12=Potter's tools 13=Smith's tools 14=Tinker's tools 15=Weaver's tools 16=Woodcarver's tools 17=Disguise Kit 18=Forgery kit 19=Herbalism kit 20=Navigator's tools 21=Poisoner's kit 22=Thieves' tools 23=Vehicles (land or water) 24=Dice set 25=Dragonchess set 25= Playing card set 26=Three-Dragon Ante set 27=Bagpipes 28=Drum 29=Dulcimer 30=Flute 31=Lute 32=Lyre 33=Horn 34=Pan flute 35=Shawm 36=Viol----------------


    /*###################################################################
    ######################### Methods ##############################
    ######################################################################*/
    getProficiencyBonus() { //function for proficiency bonus
        if (characterLevel <= 4) {
            proficiencyBonus = 2;
            return proficiencyBonus;
        } else if (characterLevel >= 5 && characterLevel <= 8) {
            proficiencyBonus = 3;
            return proficiencyBonus;
        } else if (characterLevel >= 9 && characterLevel <= 12) {
            proficiencyBonus = 4;
            return proficiencyBonus;
        } else if (characterLevel >= 13 && characterLevel <= 16) {
            proficiencyBonus = 5;
            return proficiencyBonus;
        } else {
            proficiencyBonus = 6;
            return proficiencyBonus;
        }
    }
}

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
    alchemist = `<h4 class="text-center">Alchemist<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#alchemistCollapse" aria-expanded="true" aria-controls="alchemistCollapse">[-]</button></span></h4>
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

    armorer = `<h4 class="text-center">Armorer<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#armorerCollapse" aria-expanded="true" aria-controls="armorerCollapse">[-]</button></span></h4>
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

    artillerist = `<h4 class="text-center">Artillerist<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#armorerCollapse" aria-expanded="true" aria-controls="armorerCollapse">[-]</button></span></h4>
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

    battlesmith = `<h4 class="text-center">Battle Smith<span class="ml-2"><button class="collapseButton" type="button" data-toggle="collapse" data-target="#armorerCollapse" aria-expanded="true" aria-controls="armorerCollapse">[-]</button></span></h4>
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
    getAC = () => {
        if (hasShield && armorType == "Medium") {
            characterArmorClass = armorClass + Math.min(Math.max(-4, dexterityMod), 2) + 2;
            return characterArmorClass;
        } else if (hasShield && armorType == "Light") {
            characterArmorClass = armorClass + dexterityMod + 2;
            return characterArmorClass;
        } else {
            characterArmorClass = 10 + dexterityMod;
            return characterArmorClass;
        }
    };

    getHitpointsFirstLvl = () => {};
    getHitpointsLvl = () => {};
    getMaxSpellLvl = () => {};
    getSpellSlots = () => {};
    getSpellSaveDC = () => {};
    getInfusionsCount = () => {};

}, {
    name: "Barbarian",
    proficiency: 2,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Bard",
    proficiency: 3,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Cleric",
    proficiency: 0,
    calcStat: strengthMod,
    mod: 0,
}, {
    name: "Druid",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Fighter",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Monk",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Mystic",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Paladin",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Ranger",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Rogue",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Sorcerer",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Warlock",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Wizard",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}];

class Subclass {}




let armorType = armor[4].armorType; // to save specific armor's type for AC calc
//console.log(armorType);
let armorClass = armor[4].armorClass; // to save specific armor's class for AC calc
//console.log(armorClass);

/* for (let i = 0; i < armor.length; i++) {
    console.table(armor[i]);
} */ //for iterating through the armor array!!!


/* let skills = [{
    name: "Acrobatics",
    proficiency: 0, // 0=unproficient, 1=halfproficient, 2=proficient, 3=Expertise
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Animal Handling",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Arcana",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Athletics",
    proficiency: 0,
    calcStat: strengthMod,
    mod: 0,
}, {
    name: "Deception",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "History",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Insight",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Intimidation",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Investigation",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Medicine",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Nature",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Perception",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}, {
    name: "Performance",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Persuasion",
    proficiency: 0,
    calcStat: charismaMod,
    mod: 0,
}, {
    name: "Religion",
    proficiency: 0,
    calcStat: intelligenceMod,
    mod: 0,
}, {
    name: "Sleight of Hand",
    proficiency: 0,
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Stealth",
    proficiency: 0,
    calcStat: dexterityMod,
    mod: 0,
}, {
    name: "Survival",
    proficiency: 0,
    calcStat: wisdomMod,
    mod: 0,
}]; */