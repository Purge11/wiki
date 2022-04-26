import React from 'react'

export default function Faires() {
    return (
        <div className='books'>
            <div className="container">
                <div className="row mt-5 ">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Faires</th>
                                <th scope="col">Max%</th>
                                <th scope="col">Design</th>
                                <th scope="col">Where u find this</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Standard</th>
                                <td>50</td>
                                <td ><img src="asset/faires/faires1.png" alt="" /></td>
                                <td>You can get normal looking fairies from the starting NPC</td>

                            </tr>
                            <tr>
                                <th scope="row">Varik,Rumial, Elkaim,Ladine</th>
                                <td>70</td>
                                <td ><img src="asset/faires/faires2.png" alt="" /></td>
                                <td>
                                    $Warp from P1 NPC You can craft with "Lucky Stone Necklace''(Drop $Warp P1 map
                                    mobs)</td>

                            </tr>
                            <tr>
                                <th scope="row">Zenas Fairy</th>
                                <td>80</td>
                                <td ><img src="asset/faires/faires3.png" alt="" /></td>
                                <td>Zenas raid box</td>

                            </tr>
                            <tr>
                                <th scope="row">Erenia Fairy</th>
                                <td>80</td>
                                <td ><img src="asset/faires/faires4.png" alt="" /></td>
                                <td>Erenia raid box</td>

                            </tr>
                            <tr>
                                <th scope="row">Fernon Fairy</th>
                                <td>90</td>
                                <td ><img src="asset/faires/faires5.png" alt="" /></td>
                                <td>You can craft in $Warp P5 with x100 "Fernon Egg"(1 item will be in your
                                    inventory when you complete the Fernon Raid)</td>

                            </tr>
                            <tr>
                                <th scope="row">Infinity Fernon Fairy</th>
                                <td>100</td>
                                <td ><img src="asset/faires/fairies6.png" alt="" /></td>
                                <td>You can craft in A4 (Tundra Bitoren NPC) for 5x Fairy Powder, 5x Fafnir Essence, Fernon Fairy and 12x a4 raid essence)</td>

                            </tr>

                        </tbody>
                    </table>

                    <div className='borderoLP'>  <p class="text-center"><div class="p-3 mb-2 bg-warning text-dark borderoLP table-void text-white"><h5>Infinity Fernon - bonuses<img src="asset/faires/fairies6.png" alt="" /></h5></div></p>

                    <div className='borderoLP'>
<ul class="list-group">
  <li class="list-group-item">Damage in Raids is increased by 5%.</li>
  <li class="list-group-item">Reduces damage recieved in PvP by 5%.</li>
  <li class="list-group-item">Increases PvP attack power by 5%.</li>
  <li class="list-group-item">Fire/Water/Light/Shadow element is increased by 10. (depend of fairy element)</li>
  <li class="list-group-item">Fire/Water/Light/Shadow resistance is increased by 10. (depend of fairy element)</li></ul>
</div>
</div>
<div className='borderoLP'>  <p class="text-center"><div class="p-3 mb-2 bg-warning text-dark borderoLP table-void text-white"><h5>Fernon Fairy - bonuses<img src="asset/faires/faires5.png" alt="" /></h5></div></p>

                    <div className='borderoLP'>
<ul class="list-group">
  <li class="list-group-item">Increases PvP attack power by 3%.</li>
  <li class="list-group-item">Fire/Water/Light/Shadow element is increased by 5. (depend of fairy element)</li>
  <li class="list-group-item">Fire/Water/Light/Shadow resistance is increased by 5. (depend of fairy element)</li></ul>
</div>
</div>
<div className='borderoLP'>  <p class="text-center"><div class="p-3 mb-2 bg-warning text-dark borderoLP table-void text-white"><h5>Zenas Fairy - bonuses<img src="asset/faires/faires3.png" alt="" /></h5></div></p>

                    <div className='borderoLP'>
<ul class="list-group">
  <li class="list-group-item">Increases damage against players of the Demon faction by 10%.</li>
  <li class="list-group-item">Reduces damage recieved in PvP by 2%.</li>
  <li class="list-group-item">Fire/Water/Light/Shadow element is increased by 5. (depend of fairy element)</li></ul>
</div>
</div>
<div className='borderoLP'>  <p class="text-center"><div class="p-3 mb-2 bg-warning text-dark borderoLP table-void text-white"><h5>Erenia Fairy - bonuses<img src="asset/faires/faires4.png" alt="" /></h5></div></p>

                    <div className='borderoLP'>
<ul class="list-group">
  <li class="list-group-item">Increases damage against players of the Angel faction by 10%.</li>
  <li class="list-group-item">Reduces damage recieved in PvP by 2%.</li>
  <li class="list-group-item">Fire/Water/Light/Shadow element is increased by 5. (depend of fairy element)</li></ul>
</div>
</div>

                </div>
            </div>

        </div>
    )
}
