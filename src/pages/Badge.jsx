import React from 'react';

function Badge() {
    return (
        <div className='badgee'>
            <div className="container">

                <div className="row  ">

                <d className="mcc d-flex justify-content-center"> How to craft Rarify Item ?</d>
                            <hr />
                            <p>
                                - Fairy King's Essence : You can craft it with 20x Fernon Eggs. You can get Fernon Egg after completing a Fernon Raid. (1 raid = 1 egg)
                                <br />
                                - Turik's Essence : You can craft it with 1x Zenas Fairy (You have different NPC's for each elements)
                                <br />
                                - Varik's Essence : You can craft it with 1x Erenia Fairy (You have different NPC's for each elements)
                                <br />

                            </p>

                            <d className="text-danger d-flex justify-content-center">
                                <i>You will be able to craft 3x Rarify Items after you got materials that mentioned above.
                                    </i>
                            </d>

                            <d className="mcc d-flex justify-content-center"> How to craft Upgrade Item ?</d>
                            <hr />
                            <p>
                                - Grail's Pattern : You can get them from Lord Draco Raid Boxes
                                <br />
                                - Broken Key : You can get them from Glacerus Raid Boxes
                                <br />
                                - Upgrade Stone : You can get them from Maru Raid Boxes
                                <br />
                                - Soul of Innocence : You can get them from Laurena Raid Boxes
                                <br />

                            </p>

                            <d className="text-danger d-flex justify-content-center">
                                <i>You will be able to craft 5x Upgrade Items after you got materials that mentioned above.
                                    </i>
                            </d>

                            <d className="mcc d-flex justify-content-center"> Whats chances of upgrade and rarify?</d>
                            <hr />
                            <p>
                                - Badge can be upgraded 10 times and you can upgrade up to r8 (Phenomenal).
                                <br />
                                - Rare Chance = 20%
                                <br />
                                - Chance to upgrade = (29 - current upgrade * 3%)
                                <br />
                                - Once you have the r8 the item for rarify becomes the mussel modifier which will randomize your options. It will no longer fail.
                               Effect values ​​scale with effect level (C, B, A, S) and item upgrade.
                                <br />

                            </p>

                    <ul className="list-group mt-3 ">


                        <li className="list-group-item   bg-danger text-white">PVP Badge</li>
                        <li className="list-group-item  text-success">A/S-Increased Damage while enemy is stunned: ?%</li>
                        <li className="list-group-item   text-success">A/S-Chance to heal ?% of your Max Hp: ?%</li>
                        <li className="list-group-item  text-warning">A/S-Increase all Perfection Points by: ?</li>
                        <li className="list-group-item  text-warning">C/B-Chance to reflect 2000 Damage: ?%</li>
                        <li className="list-group-item  tr8">PVP stat: S-Increase attack and defense in PVP by: 12%</li>
                    </ul>

                    <ul className="list-group mt-5">


                        <li className="list-group-item  bg-danger text-white">PVE Badge</li>
                        <li className="list-group-item   text-success">S - Increased Damage to opposed element of your fairy</li>
                        <li className="list-group-item   text-success">A - Increased Damage against Water and Fire element or Increased Damage against Light and Shadow Element (depends on which raids you focus on)</li>
                        <li className="list-group-item  text-warning">B/C - Increased fairy element</li>
                        <li className="list-group-item  text-warning">C/B - Increase all Perfection points</li>

                    </ul>


                    <img className="mt-5" src="asset/badge/badge1.gif" alt="" />
                    <br />
                    <img src="asset/badge/badge2.gif" alt="" />
                    <br />
                    <br />
                    <img src="asset/badge/badge2.png" alt="" />
                    <br />
                    <br />
                    <img src="asset/badge/badge3.png" alt="" />
                    <br />
                    <br />
                    <img src="asset/badge/badge4.png" alt="" />
                    <br />


                </div>
            </div>

        </div>
    );
}

export default Badge;
