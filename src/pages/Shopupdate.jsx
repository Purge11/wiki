import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    <br />
                    New Fortune Wheel update is alive. [03.03.2022]
                    <br />
                    <br />
                    <h3>What can i get from the Fortune Wheel?</h3>
                    <br />

                    <div className='mt-5'></div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Shadow King's Helmet</th>
                                    <th scope="col"><img src="asset/shop/shadowhelmet.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage in Raids is increased by 8%.
                                    <br />
                                    - All elemental resistance is increased by 7.
                                    <br />
                                    - The chance of receiving a critical hit is increased by 3%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Shadow King's Mask</th>
                                    <th scope="col"><img src="asset/shop/shadowmask.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage to all monsters is increased by 7%.
                                    <br />
                                    - Damage in Raids is increased by 10%.
                                    <br />
                                    - Increases Gold earned by 7%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Venus Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/venus.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When raid is finished, there's a 5% chance that box drops second time.
                                    <br />
                                    - Damage in Raids is increased by 10%.
                                    <br />
                                    - Increases champion experience received by 15%.
                                    <br />
                                    - Movement speed is increased by 1.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Aegir Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/aegir.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Meele attacks are increased by 8%.
                                    <br />
                                    - All defence powers are increased by 150.
                                    <br />
                                    - Increases damage in Christmas Raid by 5%.
                                    <br />
                                    - There is a 1% chance of causing Severe Electric Shock.
                                </d>
                                <hr />
                                <d className="text-danger">
                                    Severe Electric Shock debuff <i>(4 seconds)</i>:
                                    <br />
                                    - Movement Impossible
                                    <br />
                                    - No attack possible
                                    <br />
                                    - Every 2 seconds : HP is reduced by 396(Player level*4).
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Special Wedding Costume Set (New)</th>
                                    <th scope="col"><img src="asset/shop/SpecialWeddingSet.png" alt="" /></th>
                                </tr>
                                <br />
                                Hat:
                                <hr />
                                <d className="item-effect-shell">
                                    - All attacks are increased by 4%.
                                    <br />
                                    - Dodge is increased by 95.
                                </d>
                                <br />
                                <br />
                                Costume:
                                <hr />
                                <d className="item-effect-shell">
                                    - All defences are increased by 6%.
                                    <br />
                                    - Up to level 4 there is a 10% chance of never getting a bad effect.
                                    <br />
                                    - Movement speed is increased by 1.
                                </d>
                                <br />
                                <br />
                                Costume Wings:
                                <hr />
                                <d className="item-effect-shell">
                                    - Light element is increased by 50.
                                    <br />
                                    - Movement speed is increased by 1.
                                    <br />
                                    - There is a 5% chance of causing "Bind"
                                </d>
                                <hr />
                                <d className="text-danger">
                                    Bind Debuff <i>(4 seconds)</i>:
                                    <br />
                                    - No defence possible
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Frost Warrior Costume Set</th>
                                    <th scope="col"><img src="asset/shop/frosty.png" alt="" /></th>
                                </tr>
                                <br />
                                Hat:
                                <hr />
                                <d className="item-effect-shell">
                                    - All attacks are increased by 4%.
                                    <br />
                                    - Increases damage from critical hits by 10%.
                                </d>
                                <br />
                                <br />
                                Costume:
                                <hr />
                                <d className="item-effect-shell">
                                    - All defences are increased by 4%.
                                    <br />
                                    - Dodge is increased by 50.
                                </d>
                                <br />
                                <br />
                                Costume Wings:
                                <hr />
                                <d className="item-effect-shell">
                                    - Shadow element is increased by 30.
                                    <br />
                                    - Movement speed is increased by 1.
                                    <br />
                                    - There is a 1% chance of causing Shivering Frost.
                                </d>
                                <hr />
                                <d className="text-danger">
                                    Shivering Frost Debuff <i>(4 seconds)</i>:
                                    <br />
                                    - Movement speed is decreased by 5.
                                    <br />
                                    - No attack possible
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
