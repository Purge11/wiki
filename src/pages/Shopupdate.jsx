import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    New Fortune Wheel update is alive. [21.05.2022]
                    <br />
                    <br />
                    <h3>What can i get from the Fortune Wheel?</h3>
                    <br />

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Into The Void Title </th>
                                    <th scope="col"><img src="asset/shop/tittle.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - All attacks are increased by 5%.
                                    <br />
                                    - All defences are increased by 5%.
                                    <br />
                                    - Your specialist's overall skill points are increased by 4.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Caligor's Golden Horn (New)</th>
                                    <th scope="col"><img src="asset/shop/caligorhelmet.png" alt="" /></th>
                                    
                                </tr>
                                <d className="item-effect-shell">
                                    - Increases PvP attack power by 10%.
                                    <br />
                                    - Up to level 4 there is a 15% chance of never getting a bad effect.
                                    <br />
                                    - Reduces damage received in PvP by 10%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Koala Pet</th>
                                    <th scope="col"><img src="asset/shop/Koala.png" alt="" /></th>
                                    <th scope="col"><img src="asset/shop/KoalaBuff.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When raid is finished, there's a 5% chance that box drops second time.
                                    <br />
                                    - When you finish Act4 and Caligor Raid you have 10% chance to get additional box.
                                    <br />
                                    - Increases Gold earned by 15%.
                                    <br />
                                   - Increases fame received by 15%.
                                    <br />
                                   - Damage in Raids is increased by 5%.
                                </d>
                            </thead>
                        </table>
                    </div>

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Lucy Lopear (S Buff)</th>
                                    <th scope="col"><img src="asset/EasterEvent/lucy.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage in Raids is increased by 15%.<br />
                                    - Reduces the enemy's elemental resistances by 10.<br />
                                    - The equipped fairy's element increases by 10.<br />
                                    - Movement speed is increased by 1.
                                </d>
                            </thead>
                        </table>
                    </div>

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Barni (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/barni.webp" alt="" /></th>                                 
                                </tr>
                                <d className="item-effect-shell">
                                    - Ranged attacks are increased by 12%.<br />
                                    - Increases damage from critical hits by 15%.<br />
                                    - Increases damage in Christmas Raid by 5%.<br />
                                    - Dodge is increased by 80.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Mad March (S Buff)</th>
                                    <th scope="col"><img src="asset/EasterEvent/march.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There is 5% chance that picked up gold will be doubled.<br />
                                    - Increases Gold earned by 20%.<br />
                                    - Damage to all monsters is increased by 20%.<br />
                                    - Movement Speed is increased by 1.
                                </d>
                            </thead>
                        </table>
                    </div>

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Betting Costume</th>
                                    <th scope="col"><img src="asset/shop/beting.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There's 10% more chance of getting rarity 7-8 while betting.
                                </d>
                            </thead>
                        </table>
                    </div>

                    

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Knight Costume Set</th>
                                    <th scope="col"><img src="asset/shop/KnightCostume.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    Hat:<br />
                                    - All attacks are increased by 6%.<br />
                                    - Hit rate of all attacks is increased by 100.<br />
                                    - Chance of inflicting critical hits is increased by 3%.<br />
                                    <br />
                                    Costume:<br />
                                    - All defences are increased by 8%.<br />
                                    - Movement Speed is increased by 1.<br />
                                    - Up to level 4 there is a 8% chance of never getting a bad effect.<br />
                                    <br />
                                    Costume Wings:<br />
                                    - All attacks are increased by 85.<br />
                                    - Your specialist's overall skill points are increased by 3.<br />
                                    - There is a 4% chance of causing Last Hope.<br />
                                    <br />
                                    < d className="text-success">
                                    Last Hope :<br />
                                    - Up to level 5 there is a 25% chance of never getting a bad effect.
                                    </d>
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
