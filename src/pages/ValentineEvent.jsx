import React from 'react'

export default function ValentineEvent() {
    return (
        <div className='valentineevent'>
            <div class="container">
                <h1 class="nosvoid-color d-flex justify-content-center">Valentine's Day Event Guide</h1>
                <br />
                <h4><b class="nosvoid-color">Defend Amora with your partner!</b></h4>
                <br />
                <h4>How it works?</h4>
                You need to click on a person and then click on the item, the person you clicked will receive an invite, for example:
                <br />
                <i>Purge want to protect Romeo and Juliet with you!</i>
                <br /><br />
                <h4>What are the rewards?</h4>
                You will receive 1x <b>Heart</b> after completing the event.
                <br />
                And you will be able to craft the <b>Valentine's Heart Box</b> with Hearts.
                <br /><br />
                <th scope="col">
                    Evolution Event box info:
                </th>
                <img src="asset/ValentineEvent/ValentineBox.png" alt="" />

                <div class="row series-image-list">
                    <div className='mt-5'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">New Wedding Costume Set</th>
                                    <th scope="col"><img src="asset/shop/--.png" alt="" /></th>
                                </tr>

                                <br />
                                Hairstyle:
                                <hr />
                                <d class="item-effect-shell">
                                    - All attacks are increased by 4%.
                                    <br />
                                    - Dodge is increased by 95.
                                </d>

                                <br />
                                <br />
                                Clothes:
                                <hr />
                                <d class="item-effect-shell">
                                    - All defences are increased by 6%.
                                    <br />
                                    - Up to level 4 there is a 10% chance of never getting a bad effect.
                                    <br />
                                    - Movement Speed is increased by 1.

                                </d>

                                <br />
                                <br />
                                Costume Wings:
                                <hr />
                                <d class="item-effect-shell">
                                    - Light element is increased by 50.
                                    <br />
                                    - Movement speed is increased by 1.
                                    <br />
                                    - There is a 5% chance of causing Bind.
                                </d>
                                <hr />
                                <d class="text-danger">
                                    Bind Debuff <i>(3 seconds)</i>:
                                    <br />
                                    - No defence possible
                                </d>
                                <br/><br/>
                                <div class="d-flex p-0"><div class="alert alert-secondary" role="alert">
                                    <i>Obtained: Fortune Wheel</i>
                                </div></div>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}