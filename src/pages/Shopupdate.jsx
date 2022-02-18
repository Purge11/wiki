import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    <br />
                    New Fortune Wheel update is alive. [18.02.2022]
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
                                    <br/>
                                    - All elemental resistance is increased by 7.
                                    <br/>
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
                                    <br/>
                                    - Damage in Raids is increased by 10%.
                                    <br/>
                                    - Increases Gold earned by 7%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Frankestein Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/frank.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Increases fame received by 10.
                                    <br/>
                                    - When you finish Act4 and Caligor Raid you have 5% chance to get additional box.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">14th Anniversary Boxer Kangaroo Mount</th>
                                    <th scope="col"><img src="asset/shop/Kangaroo.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Speed: 31.
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
                                    <br/>
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
                                    <br/>
                                    - No defence possible
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Mini Blue Amora Pet (New)</th>
                                    <th scope="col"><img src="asset/shop/amorablue.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - All attacks increased by 5%.
                                    <br/>
                                    - All defences are increased by 6%.
                                    <br/>
                                    - Movement speed is increased by 1.
                                    <br/>
                                    - There is a 5% chance of causing "Amora's Heal"
                                </d>
                                <hr />
                                <d className="text-danger">
                                    Amora Heal buff <i>(4 seconds)</i>:
                                    <br/>
                                    - HP is increased by 5% of damage given.
                                    - MP is increased by 5% of damage given.
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
