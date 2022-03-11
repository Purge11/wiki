import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    <br />
                    New Fortune Wheel update is alive. [11.03.2022]
                    <br />
                    <br />
                    <h3>What can i get from the Fortune Wheel?</h3>
                    <br />

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Ceremonial Helmet</th>
                                    <th scope="col"><img src="asset/shop/ceremonial.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Up to 4 level there is a 15% chance of never getting a bad effect.
                                    <br />
                                    - Increases PvP attack power by 10%.
                                    <br />
                                    - Reduces damage received in PvP by 5%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Betting Costume</th>
                                    <th scope="col"><img src="asset/shop/beting.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There's 10% more of getting rarity 7-8 while betting.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">King of Void Tittle</th>
                                    <th scope="col"><img src="asset/shop/tittle.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - All attacks are increased by 5%.
                                    <br />
                                    - All defences are increased by 5%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Amora Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/amora.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Chance of inflicting critical hits is increased by 5%.
                                    <br />
                                    - Increases damage from critical hits by 5%.
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
                                    <th scope="col">Barni Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/barni.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Ranged attacks are increased by 8%.
                                    <br />
                                    - Increases damage from critical hits by 15%.
                                    <br />
                                    - Increases damage in Christmas Raid by 5%.
                                    <br />
                                    - There is a 1% chance of causing Paralysing Toxin.
                                </d>
                                <hr />
                                <d className="text-danger">
                                    Paralysing Toxin <i>(4 seconds)</i>:
                                    <br />
                                    - No attack possible
                                    <br />
                                    - Blackout occurs, in releasing at the probability of 40%
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Plague Doctor/Nurse Costume Set</th>
                                    <th scope="col"><img src="asset/shop/plague.webp" alt="" /></th>
                                </tr>
                                <br />
                                Hat:
                                <hr />
                                <d className="item-effect-shell">
                                    - All attacks are increased by 4%.
                                    <br />
                                    - Hit rate of all attacks is increased by 100.
                                </d>
                                <br />
                                <br />
                                Costume:
                                <hr />
                                <d className="item-effect-shell">
                                    - All defences are increased by 4%.
                                    <br />
                                    - There is a 3% chance of causing Vaccine.
                                </d>
                                <hr />
                                <d className="text-success">
                                    Vaccine Buff <i>(4 seconds)</i>:
                                    <br />
                                    - Up to 4 level there is a 100% chance of never getting a bad effect.
                                    <br />
                                    - Every 2 seconds: Restores (Player Level*10) HP.
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
