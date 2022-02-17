import React from 'react'
import { Player } from 'video-react';

export default function EvolutionEvent() {
    return (
        <div className='evolutionevent'>
            <div class="container">
                <h1 class="nosvoid-color d-flex justify-content-center">Evolution Event Guide</h1>
                <br />
                After finishing <b>Evolution Raid</b> you will get Event Box!
                <br /><br />
                <th scope="col">
                    Evolution Event box info:
                </th>
                <img src="asset/EvolutionEvent/EventBoxInfo.png" alt="" />
                <br /><br />
                <h3><b>Information about Rings</b></h3>
                <div className='col-sm-3 banner-image imgContainer'>
                    <div class="d-flex flex-row">
                        <div class="p-1"><b class="youtube-color">Red Ring</b> ______________________________________________________<Player>
                            <source src="asset/EvolutionEvent/redring.mp4" />
                        </Player></div>
                        <div class="p-1"><b class="web-dev-color">Blue Ring</b> ______________________________________________________<Player>
                            <source src="asset/EvolutionEvent/bluering.mp4" />
                        </Player></div>
                        <div class="p-1"><b class="nosvoid-color">Purple Ring</b> ______________________________________________________<Player>
                            <source src="asset/EvolutionEvent/purplering.mp4" />
                        </Player></div>
                    </div>
                </div>
                <br /><br />
                <h1 class="nosvoid-color d-flex justify-content-center">Craft Items Guide:</h1>
                <br />
                You will be able to craft the following items:
                <img src="asset/EvolutionEvent/CraftEvent.png" alt="" />
                <div class="row series-image-list ">
                    <div className='mt-5'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Raid Ring</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/RaidRing.png" alt="" /></th>
                                </tr>
                                <d class="item-effect-shell">
                                    - When raid is finished, there's a 7% chance that box drops second time.<br />
                                    <d class="white-color">___________________________________________________________________________________________</d>
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Act4 Bracelet</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/Act4Bracelet.png" alt="" /></th>
                                </tr>
                                <d class="item-effect-shell">
                                    - When you finish Act4 and Caligor Raid you have a 7% chance to get 2 boxes.<br />
                                    <d class="white-color">___________________________________________________________________________________________</d>
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Act4 Bracelet</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/BettingNecklace.png" alt="" /></th>
                                </tr>
                                <d class="item-effect-shell">
                                    - There is 7% more of getting rarity 7-8 while betting.<br />
                                    <d class="white-color">___________________________________________________________________________________________</d>

                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Sorcerer Tittle</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/Tittle.png" alt="" /></th>
                                </tr>
                                <d class="item-effect-shell">
                                    - Reduces the enemy's elemental resistances by 7.<br />
                                    <d class="white-color">___________________________________________________________________________________________</d>
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
                <br/>
                To craft this objets you will need:
                <hr/>
                <div class="d-flex flex-row">
                    <div class="p-0"><b>Black Gemstone</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/BlackGemstone.png" alt="" /></div>
                    <div class="p-1"><i>Obtained from every monsters</i></div>
                </div>
                <div class="d-flex flex-row">
                    <div class="p-0"><b>Diamond</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/Diamond.png" alt="" /></div>
                    <div class="p-1"><i>Obtained from Event Box</i></div>
                </div>
                <div class="d-flex flex-row">
                    <div class="p-0"><b>Golden Fruit</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/GoldenFruit.png" alt="" /></div>
                    <div class="p-1"><i>Obtained from Event Box and Apple Trees</i></div>
                </div>
                <br/>
                In NosVille Apple Trees will be spawned each 10 minutes. You will get Golden Apple when you kill it.
                <div class="p-8"><img src="asset/EvolutionEvent/GoldenAppleTree.png" alt="" /></div>
                <br /><br />
                <h1 class="nosvoid-color d-flex justify-content-center">Pet Evolution Guide:</h1>
                <br />
                <div class="d-flex flex-row">
                    <div class="p-0">To hatch the egg and get the pet, you will need to increase the HP of the <b>Mysterious Egg</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/MysteriousEgg.png" alt="" /></div>
                </div>
                You have two ways to do that: <br />
                1-. Wait for 10 hours to the egg breeding. <br />
                <div class="d-flex flex-row">
                    <div class="p-0">2-. You can use <b> Growth Fruit</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/BlueFruit.png" alt="" /></div>
                    <div class="p-1"><i>Obtained from event box</i></div>
                </div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/EvolutionEvent/growthfruit.mp4" />
                    </Player>
                </div>
                <hr />
                After your Mysterious Egg got full HP, you will get one random pet. <br />
                <div class="d-flex flex-row">
                    <div class="p-0">And you will need to use <b>Evolution Fruit</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/GreenFruit.png" alt="" /></div>
                    <div class="p-1"><i>Obtained from event box</i></div>
                </div>
                <i class="text-danger">Every pet can be evolved max 2 times. (to get lvl 3 evolution pet)</i>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/EvolutionEvent/evolutionfruit.mp4" />
                    </Player>
                </div>
                <hr />
                <div class="d-flex flex-row">
                    <div class="p-0">When you are done with 2 evolves, you have to use <b>Shadow Evolution Fruit</b></div>
                    <div class="p-8"><img src="asset/EvolutionEvent/ShadowFruit.png" alt="" /></div>
                    <div class="p-1"><i>Obtained from VoidMall</i></div>
                </div>
                And you will get <b>Shadow</b> version of your Pet, with stronger buffs.
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/EvolutionEvent/shadowfruit.mp4" />
                    </Player>
                </div>
                <br /><br />
                <h1 class="nosvoid-color d-flex justify-content-center">Pet Guide:</h1>
                <br/>
                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Inferno</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    All attacks are increased by 3%.
                                    <br />
                                    All defences are increased by 3%.
                                    <br />
                                    Hit rate of attacks is increased by 75.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    All attacks are increased by 4%
                                    <br />
                                    All defences are increased by 4%
                                    <br />
                                    Hit rate of attacks is increased by 200
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Titan Hamster</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Increases fame received by 10%.
                                    <br />
                                    When you finish Act4 and Caligor Raid you have 5% chance to get 2 boxes.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Increases fame received by 15%.
                                    <br />
                                    When you finish Act4 and Caligor Raid you have 8% chance to get 2 boxes.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Chick Norris</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    All attacks are increased by 2%.
                                    <br />
                                    All defences are increased by 2%.
                                    <br />
                                    Increases Gold earned by 5%.
                                    <br />
                                    The equipped fairy's element increases by 3.
                                    <br />
                                    Hit rate of all attacks is increased by 50.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    All attacks are increased by 3%.
                                    <br />
                                    All defences are increased by 3%.
                                    <br />
                                    Increases Gold earned by 10%.
                                    <br />
                                    The equipped fairy's element increases by 5.
                                    <br />
                                    Hit rate of all attacks is increased by 100.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Seraphim</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Increases Gold earned by 12%.
                                    <br />
                                    When raid is finished, there's a 5% chance that box drops second time.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Increases Gold earned by 25%.
                                    <br />
                                    When raid is finished, there's a 8% chance that box drops second time.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Golden Fleece</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    All defences are increased by 5%.
                                    <br/>
                                    Maximum HP is increased by 1000.
                                    <br/>
                                    Increase crit chance in Act4 by 3%.
                                    <br />
                                    There is a 3% chance to reduce 80% damage taken in Act4.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    All defences are increased by 7%.
                                    <br/>
                                    Maximum HP is increased by 1500.
                                    <br/>
                                    Increase crit chance in Act4 by 5%.
                                    <br />
                                    There is a 5% chance to reduce 80% damage taken in Act4.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Blizzard Wolf</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    All attacks are increased by 4%.
                                    <br />
                                    Damage in Act4 is increased by 3%.
                                    <br />
                                    There is 5% chance to recover 3% max HP in act4.
                                    <br />
                                    Hir rate of all attacks is increased by 75 in act4.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    All attacks are increased by 6%.
                                    <br />
                                    Damage in Act4 is increased by 6%.
                                    <br />
                                    There is 5% chance to recover 5% max HP in act4.
                                    <br />
                                    Hir rate of all attacks is increased by 150 in act4.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Spooky Imp</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Dodge is increased by 75.
                                    <br />
                                    Ranged attacks are increased by 4%.
                                    <br />
                                    Increases crit chance in Act4 by 3%.
                                    <br />
                                    Increases movement speed by 1 in Act4.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Dodge is increased by 150.
                                    <br />
                                    Ranged attacks are increased by 6%.
                                    <br />
                                    Increases crit chance in Act4 by 5%.
                                    <br />
                                    Increases movement speed by 1 in Act4.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">New Fishing Pet</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    The probability of catching a fish is increased by 10%.
                                    <br />
                                    There's a 10% chance of catching a bigger fish.
                                    <br />
                                    There's 50% chance to not consume a fish bait.
                                    <br />
                                    The fishing experience points you receive are increased by 5%.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    The probability of catching a fish is increased by 15%.
                                    <br />
                                    There's a 20% chance of catching a bigger fish.
                                    <br />
                                    There's 50% chance to not consume a fish bait.
                                    <br />
                                    The fishing experience points you receive are increased by 10%.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">New Perfection Pet</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Increase 6% success rate while perfecting SPs.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Increase 10% success rate while perfecting SPs.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">New Betting Pet</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    There's 5% more of getting rarity 7-8 while betting.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    There's 5% more of getting rarity 7-8 while betting.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">New Magic PvE Pet</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Damage in Raids is increased by 5%.
                                    <br/>
                                    Increases fame received by 8%.
                                    <br/>
                                    Magic damage is increased by 3% in raids.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Damage in Raids is increased by 7%.
                                    <br/>
                                    Increases fame received by 10%.
                                    <br/>
                                    Magic damage is increased by 5% in raids.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">New Melee PvE Pet</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Damage in Raids is increased by 5%.
                                    <br/>
                                    Increases fame received by 8%.
                                    <br/>
                                    melee damage increased by 3% in raids.
                                    <br/>
                                    Increase 3% crit chance in raids.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Damage in Raids is increased by 7%.
                                    <br/>
                                    Increases fame received by 10%.
                                    <br/>
                                    melee damage increased by 5% in raids.
                                    <br/>
                                    Increase 5% crit chance in raids.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>

                <table class="table  text-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">New Ranged PvE Pet</th>
                            <th scope="col ">Shadow Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d class="item-effect-shell">
                                    Damage in Raids is increased by 5%.
                                    <br/>
                                    Increases fame received by 8%.
                                    <br/>
                                    melee damage increased by 3% in raids.
                                    <br/>
                                    Increase 10% crit damage in raids.
                                </d>
                            </td>
                            <td>
                                <b class="item-effect-shell">
                                    Damage in Raids is increased by 7%.
                                    <br/>
                                    Increases fame received by 10%
                                    <br/>
                                    melee damage increased by 5% in raids.
                                    <br/>
                                    Increase 20% crit damage in raids.
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
            </div>
        </div >
    )
}