import React from 'react';

function Badge() {
    return (
        <div className='badgee'>
            <div class="container">
            
                <div class="row  ">

                    <h3 class=" nosvoid-color d-flex justify-content-center">What is Badge? </h3><div className='text-danger mt-2'>(you can buy only two badges per character!)</div>
                   
                    <br/>

                    The Badge is a special equipment item that you can purchase for 1b in the Badge
                    Room. It helps you a lot in PVP or PVE (depending on stats) if you rarify and
                    increase its upgrade...
                    <br/>
                    <br/>
                    <img src="asset/badge/badge1.png" alt=""/>
                    <h3 class=" nosvoid-color d-flex justify-content-center mt-3">How can I create and use rarify items?</h3>
                    <br/>

                    To craft 3x Rarify items, you need:
                    <br/>
                    <br/>
                    <h5>Zenas Fairies for Rarify</h5>
                    You can get them from the Zenas Raid box (P2) and trade them in the Badge Room.
                    All elements have a special NPC in the room.
                    <br/>
                    <br/>
                    <h5>Erenia Fairys for the Essences</h5>
                    You can get them from the Erenia Raid box (P3) and they are the same as in Zenas
                    Fairys. You need the same element Erenia and the Fairy of Zenas to create Rarify
                    items. 20x Fernon Eggs for
                    <br/>
                    <br/>
                    <h5>Fairy King's Essence</h5>
                    You get them in Fernon Raid (1 Raid x1 Egg) and you can craft Essence in every
                    elemental NPC in the badge room..
                    <br/>
                    <h5 class="mt-3">To craft x5 upgrade items, you need:</h5>
                    1x Grail's Pattern - Lord Draco Raid Box
                    <br/>
                    1x Broken Key - Glacerus Raid Box
                    <br/>
                    1x Upgrade Stone - Maru Raid Box
                    <br/>
                    1x Soul of Innocence - Laurena Raid Box
                    <br/>
                    <h5 class="mt-3">How are my chances to upgrade and upgrade badges?</h5>
                    Badge can be upgraded 10 times and you can upgrade up to r8 (Phenomenal).
                    <br/>
                    Rare chance = 20%
                    <br/>
                    Chance to upgrade = (29 - current upgrade * 3%)
                    <br/>
                    Once you have the r8 the item for rarify becomes the mussel modifier which will
                    randomize your options. It will no longer fail.
                    <br/>
                    Effect values ​​scale with effect level (C, B, A, S) and item upgrade.
                    <br/>
                    <br/>
                    <h1 className='d-flex justify-content-center mt-5 mb-5 nosvoid-color '>Perfect badge bonuses<div class="youtube-icn"></div> </h1>

                    <ul class="list-group mt-3">
                                         
                        
                                         <li class="list-group-item d-flex justify-content-center bg-danger text-white">PVP Badge</li>
                                         <li class="list-group-item d-flex justify-content-center  text-success">A/S-Increased Damage while enemy is stunned: ?%</li>
                                         <li class="list-group-item d-flex justify-content-center  text-success">A/S-Chance to heal ?% of your Max Hp: ?%</li>
                                         <li class="list-group-item d-flex justify-content-center text-warning">A/S-Increase all Perfection Points by: ?</li>
                                         <li class="list-group-item d-flex justify-content-center text-warning">C/B-Chance to reflect 2000 Damage: ?%</li>
                                         <li class="list-group-item d-flex justify-content-center tr8">PVP stat: S-Increase attack and defense in PVP by: 12%</li>
                                     </ul>

                                     <ul class="list-group mt-5">
                                         
                        
                                         <li class="list-group-item d-flex justify-content-center bg-danger text-white">PVE Badge</li>
                                         <li class="list-group-item d-flex justify-content-center  text-success">S - Increased Damage to opposed element of your fairy</li>
                                         <li class="list-group-item d-flex justify-content-center  text-success">A - Increased Damage against Water and Fire element or Increased Damage against Light and Shadow Element (depends on which raids you focus on)</li>
                                         <li class="list-group-item d-flex justify-content-center text-warning">B/C - Increased fairy element</li>
                                         <li class="list-group-item d-flex justify-content-center text-warning">C/B - Increase all Perfection points</li>
                                        
                                     </ul>
                   
                    
                    <img class="mt-5" src="asset/badge/badge1.gif" alt=""/>
                    <br/>
                    <img src="asset/badge/badge2.gif" alt=""/>
                    <br/>
                    <br/>
                    <img src="asset/badge/badge2.png" alt=""/>
                    <br/>
                    <br/>
                    <img src="asset/badge/badge3.png" alt=""/>
                    <br/>
                    <br/>
                    <img src="asset/badge/badge4.png" alt=""/>
                    <br/>

                
            </div>
            </div>
            <div className="footer">
                <div className="p-3">
                  
                   
                </div>
            </div>
        </div>
    );
}

export default Badge;
