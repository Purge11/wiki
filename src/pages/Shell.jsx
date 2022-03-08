import React from 'react'

export default function Shell() {
    return (
        <div className='shell'>
            <div className="container">
                <div className="row  ">

                    <h4 className=" nosvoid-color d-flex justify-content-center"> What are shells good for?</h4>  <br /> <br /> Shells give unique abilities to our weapon/armor.
                    <br />
                    There are red shells for weapons, and orange for armor.
                    <br />
                    <br />
                    <h4 className=" nosvoid-color d-flex justify-content-center">Shell and rarity</h4>
                    <br />
                    <br />
                    What does the level do?
                    <br />
                    <br />
                    The shell level specifies the minimum level of our equipment to add features to
                    our equipment. High level shells have more effective properties.
                    <br />
                    The rarity level of the shell indicates the minimum required level of the
                    equipment. Also, the rarity level is important when adding multiple shells.
                    <br />
                    <br />
                    <h4 className=" nosvoid-color d-flex justify-content-center">Shell Bonuses</h4>
                    <br />
                    <br />
                    What do the letters S / A / B / C on the shells mean, what are they?
                    <br />
                    Each option has a letter at the beginning. These mean classification options
                    from the best (the S option can only be found at the highest rarity) to the
                    worst (S A B C)..
                    <br />
                    <br />
                    Can I add multiple shells to the same weapon/armor?
                    <br />
                    <br />
                    Yes you can add. If you want to add a new shell for equipment with an existing
                    shell, the old shell bonus is deleted and a new shell bonus is added.
                    <br />
                    A shell with a lower rarity level can be added to equipment already equipped
                    with a shell. When you try to add a new shell to a shelled equipment, you have a
                    50% chance of success, the shell will be destroyed on failure. However, the
                    Magic Eraser will give a 100% chance to add a second shell to the equipment.

                    <br />
                    <br />
                    Are there any downsides to adding shells to equipment?
                    <br />
                    Equipment equipped with a shell becomes exclusive to the owner, only the owner
                    of this weapon can equip it. If you give the gun to someone else, that person
                    cannot use the weapon.
                    <br />
                    Shell equipment cannot be converted into partner equipment.
                    <br />
                    <br />

                    Is there a possibility to use the shell weapon sold / given to someone else?
                    <br />
                    <br />
                    Yes, it is possible to transform the owner of the equipment into yourself by
                    using Perfume. The current shell bonus remains. Perfume can be purchased from
                    NosMall.
                    <br />
                    <br />
                    <h4 className=" nosvoid-color d-flex justify-content-center" >PERFUME</h4>
                    <br />
                    <br />
                    What does perfume do?

                    <br />
                    <br />
                    Allows you to change the shell equipment owner.
                    <br />
                    <br />
                    After the perfume is used on the equipment, the new owner of this equipment
                    becomes the person using the perfume.
                    <br />
                    <br />
                    What does this shell option do?
                    <br />
                    <br />
                    <h4 className=" nosvoid-color d-flex justify-content-center">Status Effects Options</h4>
                    <br />
                    <br />

                    [Status effect]: <p className="item-effect"> Causes [Status effect] during x% attack with a x% chance.</p>
                    <br />
                    <br />
                    [Status Effect] reduced chance:<p className="item-effect">  x% chance to prevent the enemy from inflicting</p>
                    x% [Status Effect] on you.
                    <br />
                    <br />
                    Fatal Fainting: <p className="item-effect"> Fatal Fainting.</p>
                    <br />
                    <br />
                    Fainting: <p className="item-effect"> Fainting.</p>
                    <br />
                    <br />
                    Dead Man's Hand:<p className="item-effect">  Movement/attack is not possible.</p>
                    <br />
                    <br />
                    Blindness:<p className="item-effect">  Remote attack not allowed.</p>
                    <br />
                    <br />
                    Freeze:<p className="item-effect">  Movement/attack is not possible.</p>
                    <br />
                    <br />
                    Shock:<p className="item-effect">  Attack is not possible.</p>
                    <br />
                    <br />
                    Open Wound: <p className="item-effect"> Bleeding.</p>
                    <br />
                    <br />
                    Small Open Wound:<p className="item-effect">  Minor Bleeding.</p>
                    <br />
                    <br />
                    Paralyzing Poison:<p className="item-effect">  No movement possible.</p>
                    <br />
                    <br />
                    Spasm: <p className="item-effect"> Removes good effects.</p>
                    <br />
                    <br />
                    <h4 className=" nosvoid-color d-flex justify-content-center">Damage Boost Options</h4>
                    <br />
                    <br />
                    [Creature type] damage amplification:<p className="item-effect">  %s chance to increase damage to [Creature
                        type] monsters by x%. </p>
                    <br />
                    <br />
                    Large [Creature type]: <p className="item-effect">High Level [Creature type] </p>
                    <br />
                    <br />
                    Sub-Society [Creature type]: Like <br /><br /><p className="item-effect">Kovolt</p>  <br /><p className="item-effect"> Catsy</p>
                    <br />
                    <p className="item-effect"> Plant</p>
                    <br />
                    <p className="item-effect"> Enemy</p>
                    <br />
                    <p className="item-effect"> Animal</p>
                    <br />
                    <p className="item-effect"> Undead</p>
                    <br />
                    Devils:

                    <p className="item-effect">Low Level [Mob Type] </p>
                    <br />
                    <br />
                    <p className="text-danger"> Please note, this is not related to the actual level of the beast. Even if a
                        monster is level 99, it can be considered low-level, or a level 1 monster can be
                        considered high-level. Typically dominant bosses and minor bosses are considered
                        high-level and the rest are considered low-level. There may be exceptions to
                        these too.. Statistical bonus increases</p>
                    <br />

                    Enhanced SL [Property ] stat:<p className="item-effect">- Treats as increased [Property] stat on SP card
                        <br /></p>
                    <br />
                    Increased Critical Damage: <p className="item-effect">Increases the critical damage from your current
                        weapon by x%</p>
                    <br />
                    <br />
                    Increased Chance for Critical Hits: <p className="item-effect">Increases the critical strike chance of your
                        current weapon by x%</p>
                    <br />
                    <br />
                    Reducing Critical Hit Chance:<p className="item-effect">x% chance to reduce critical hit by the enemy by
                        x%</p>

                    <br />
                    <br />
                    BP / HP Regen per earn:<p className="item-effect">x BP / HP is increased when defeating monsters of +10 /
                        -10 levels of character's level</p>
                    <br />
                    <br />
                    Increase BP / HP recovery Rate at Rest: <p className="item-effect">BP / HP regen is increased by x% while at
                        rest.</p>
                    rest.
                    <br />
                    <br />
                    Increase of normal BP / HP Heal Rate:<p className="item-effect">Increases normal BP / HP regen by x%
                        <br />
                        Increase in BP / HP Recovery</p> Increases normal BP / HP regen by x%
                    <br />
                    Increase in BP / HP Recovery
                    <br />
                    <br />
                    Rate During Defense: <p className="item-effect">BP / HP regen increases by x% during battle (Available in
                        Option S only)</p>
                    <br />
                    <br />
                    Increased Re-Matter Production:<p className="item-effect">x% increases potion, snacks, and meal potency
                        For example, Great healing potion gives 1k BP / HP, player receives 1k + 500 HP
                        / BP under the effect of "50% Increased Regeneration".</p>
                    <br />
                    <br />
                    Increased [Element] energy: <p className="item-effect">[Element] increases by x when attacking</p>
                    <br />
                    <br />
                    Reduced BPConsumption:<p className="item-effect">Decreased BP requested by skills used by x%</p>
                    <br />
                    Enhanced damage: <p className="item-effect">increases basic attack damage whe attacking.</p>
                    <br />
                    <br />
                    Melee / Long Range / Magic deffence rate:
                    <br />
                    <p className="item-effect"> Melee / Long Range / Magic defance rate is increased by x%</p>
                    <br />
                    <br />
                    <h4 className=" nosvoid-color d-flex justify-content-center">Special bonuses</h4>
                    <br />
                    <br />

                    (Main weapon only) Higher Gold Gain: <p className="item-effect">Increases gold collected by x%</p>
                    <br />
                    <br />
                    (Main weapon only) High HP Gain: <p className="item-effect">Combat and job level experience increased by x%</p>
                    <br />
                    <br />
                    (Main weapon only) High XP Gain: <p className="item-effect">Job level experience increased by x%</p>
                    <br />
                    <br />
                    Reduced Production Points Spend: <p className="item-effect">Production points spent while playing minigames
                        cost x% less.</p>
                    <br />
                    <br />
                    Increased Chance of Crafting: <em className="item-effect-shell">X% more wins on minigame rewards</em>
                    <br />
                    <br />
                    (*)
                    <br />
                    <br />For example, the Gift of the Full Moon Crystal is obtained three instead of
                    two. This option does not apply to the owner of the MiniGame. Decreasing
                    Nobility Meltdown: Repute level drops by x% when player dies.
                    <br />
                    <br />

                </div>
            </div>

        </div>
    )
}
