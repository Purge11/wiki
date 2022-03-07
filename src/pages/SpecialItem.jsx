import React from 'react'
import { Player } from 'video-react';

export default function SpecialItem() {
    return (
        <div className='specialitem'>
            <div className="container">
                <h1 className=" nosvoid-color d-flex justify-content-center">Special Items</h1>
                <br />
                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/FamilyHorn.png" alt="" /></div>
                    <h4 className="p-1"><b>Family Summoning Horn </b></h4>
                </div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/FamilyHorn.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/ChangeSP.png" alt="" /></div>
                    <h4 className="p-1"><b>Change SP Item</b> <i>(Can be used once)</i> </h4>
                </div>
                <div className="d-flex p-3" ><div className="alert alert-secondary" role="alert">
                    You can change another class SPs to your own class. <i>(With same stats, perfection, wings.)</i><br />
                    SP1 to SP1<br />
                    SP2 to SP2<br />
                    SP3 to SP3...<br />
                </div></div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/SPChange.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/ResetPerfection.png" alt="" /></div>
                    <h4 className="p-1"><b>Reset Perfection Item</b> <i>(Can be used once)</i> </h4>
                </div>
                <div className="d-flex p-3"><div className="alert alert-secondary" role="alert">
                    You Can Reset your Perfection with this Item
                </div></div>


                <hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/ChangeWings.png" alt="" /></div>
                    <h4 className="p-1"><b>Change Wings Item</b> <i>(Can be used once and the item is permanently)</i> </h4>
                </div>
                <div className="d-flex p-3"><div className="alert alert-secondary" role="alert">
                    You can change morph of your wings with that item. <i>You need to write $wings and any wings name</i><br />
                    $Wings zephyr<br />
                    $Wings crystal<br />
                    $Wings onyx<br />
                </div></div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/Wingschange.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/AnglerSkin.png" alt="" /></div>
                    <h4 className="p-1"><b>Professional Angler Skin</b> <i className='text-danger'>[The skin will be deleted if you put Specialist into Card Holder]</i> </h4>
                </div>
                <div className="d-flex p-3"><div className="alert alert-secondary" role="alert">
                    <d className="item-effect-shell">
                        The probability of catching a fish is incresed by 20%.
                        <br />
                        There's a 15% chance of catching a bigger fish.
                        <br />
                        There's 30% chance to not consume a fish bait.
                    </d>
                </div></div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/AnglerSkin.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/SpecialistSkinPotion.png" alt="" /></div>
                    <h4 className="p-1"><b>Specialist Skin Potion</b> <i className='text-danger'>[The skin will be deleted if you put Specialist into Card Holder]</i> </h4>
                </div>
                <div className="d-flex p-3"><div className="alert alert-secondary" role="alert">
                    Change skin of your Archer SP1, Swordsman SP2, Mage SP3 Specialist.
                </div></div>
                <div className='col-sm-4 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/Skins.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/ChangeSteamSkin.png" alt="" /></div>
                    <h4 className="p-1"><b>Change Skin Item </b> <i>(Works only for Steampunk Skins)</i> </h4>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/0.png" alt="" /></div>
                    <h4 className="p-1"><b>Change Skin 2 Item </b> <i>(Works only for Prestige 8 Skins)</i> </h4>
                </div>
                <div className="d-flex p-3"><div className="alert alert-secondary" role="alert">
                    You can change another class skin to your own class.
                </div></div>
                <div className='col-sm-5 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/ChangeSkin.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/UpgradeWeaponSkin.png" alt="" /></div>
                    <h4 className="p-1"><b>Upgrade Weapon Skin</b></h4>
                </div>
                <div className="d-flex p-3"><div className="alert alert-secondary" role="alert">
                    Works only for prestige 8 and christmas skins.
                </div></div>
                <div className='col-sm-5 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/SkinUpgrade.mp4" />
                    </Player>
                </div>


                <br /><hr />
                <br />


                <div className="d-flex flex-row">
                    <div className="p-8"><img src="asset/SpecialItem/ResetAct4.png" alt="" /></div>
                    <h4 className="p-1"><b>Reset your Act4 Score Item</b></h4>
                </div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/SpecialItem/ResetA4Score.mp4" />
                    </Player>
                </div>
            </div>
        </div>
    )
}
