/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

export default function rune() {
    return (
        <div className='rune'>
            <div class="container">
                <div class="row  ">

                    You can make your weapon even more powerful by visiting Martas. You can carve up
                    to 21 runes of 21, but only to a level 80 or higher main weapon that is attached
                    to your character or not attached to anyone (after carving your first rune it
                    will automatically bind to your character)..
                    <br/>
                    <br/>
                    Each rune has a different effect. If you get the same effect multiple times, the
                    effect will increase. You cannot choose a Rune, you will only receive a random
                    one. If you are not satisfied with the Rune you have, you can delete all the
                    runes you have with the Rune removal hamme
                    <br/>
                    <br/>
                    <table class="table  ">
                        <thead>
                            <tr>
                                <th scope="col">Runes Stats</th>
                                <th scope="col">1lv</th>
                                <th scope="col">2lv</th>
                                <th scope="col">3lv</th>
                                <th scope="col">4lv</th>
                                <th scope="col">5lv</th>
                                <th scope="col">6lv</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">All attack powers are increased by X.</th>
                                <td >20</td>
                                <td >40</td>
                                <td >80</td>
                                <td >150</td>
                                <td >200</td>
                                <td >250</td>

                            </tr>
                            <tr>
                                <th scope="row">All defence powers are increased by X.</th>
                                <td >20</td>
                                <td >40</td>
                                <td >80</td>
                                <td >150</td>
                                <td >200</td>
                                <td >250</td>

                            </tr>
                            <tr>
                                <th scope="row">All defence powers are increased by X%.</th>
                                <td >1</td>
                                <td >2</td>
                                <td >4</td>
                                <td >7</td>
                                <td >10</td>
                                <td >13</td>

                            </tr>
                            <tr>
                                <th scope="row">Hit rate of all attacks is increased by X. or Concentration is
                                    increased by X during the magic attack.</th>
                                <td >20/1</td>
                                <td >40/3</td>
                                <td >70/5</td>
                                <td >110/7</td>
                                <td >150/15</td>
                                <td >190/22</td>

                            </tr>
                            <tr>
                                <th scope="row">Hit rate is increased by X%</th>
                                <td >1</td>
                                <td >2</td>
                                <td >4</td>
                                <td >7</td>
                                <td >10</td>
                                <td >13</td>

                            </tr>
                            <tr>
                                <th scope="row">All element energies are increased by X.</th>
                                <td >10</td>
                                <td >15</td>
                                <td >20</td>
                                <td >30</td>
                                <td >50</td>
                                <td >60</td>

                            </tr>
                            <tr>
                                <th scope="row">All elemental resistance is increased by X.</th>
                                <td >3</td>
                                <td >5</td>
                                <td >7</td>
                                <td >10</td>
                                <td >15</td>
                                <td >20</td>

                            </tr>
                            <tr>
                                <th scope="row">Maximum HP is increased by X.</th>
                                <td >200</td>
                                <td >400</td>
                                <td >800</td>
                                <td >1300</td>
                                <td >2000</td>
                                <td >2700</td>

                            </tr>
                            <tr>
                                <th scope="row">Maximum HP is increased by X%.</th>
                                <td >1</td>
                                <td >2</td>
                                <td >4</td>
                                <td >7</td>
                                <td >10</td>
                                <td >13</td>

                            </tr>
                            <tr>
                                <th scope="row">Maximum MP is increased by X.</th>
                                <td >200</td>
                                <td >400</td>
                                <td >800</td>
                                <td >1300</td>
                                <td >2000</td>
                                <td >2500</td>

                            </tr>
                            <tr>
                                <th scope="row">Maximum MP is increased by X%.</th>
                                <td >1</td>
                                <td >2</td>
                                <td >4</td>
                                <td >7</td>
                                <td >10</td>
                                <td >13</td>

                            </tr>

                        </tbody>
                    </table>
                    <br/>
                    For every 3 runes you carve, there is a chance for a rune power to be applied to
                    your weapon instead of an effect. Just like rune effects, rune powers can stack
                    when you get the same power more than once. There are 10 rune powers, below you
                    can find a list of them. Please note that chances to cast a rune power buff or
                    debuff correspond their levels (which means if you have a level 3 rune power,
                    you have a 3% chance to receive or inflict their buff or debuff). All their
                    buffs and debuffs are level 3.
                    <br/>
                    <br/>
                    <div>
                        - Rune materials can be obtained from your world boss..
                        <a href="schedule">《🔔》schedule</a>
                    </div>
                    <br/>
                    <br/>
                    <img src="asset/runes/runes2.png" alt=""/>
                    <img src="asset/runes/runes3.png" alt=""/>
                    <img src="asset/runes/runes4.png" alt=""/>

                </div>
            </div>
            <div className="footer">
                <div className="p-3">
                  
                   
                </div>
            </div>
        </div>
    )
}
