import React from 'react'

export default function SpUpgrade() {
    return (
        <div className='p8'>
            <div className="container">
                <h1 className="nosvoid-color d-flex justify-content-center">SP Upgrade Guide:</h1>
                <br />
                <d>
                    When your specialist card has reached Job Level 21/41/51/61 it is possible
                    to start upgrading your specialist card.
                    <br />
                    You can upgrade them at an alchemist <i>like Malcolm Mix in Nosville</i>,
                    or by using a scroll from your inventory to make your specialist cards even more powerful.
                    <br />
                    The highest upgrade level that you will be able to reach after the new update will be +20.
                </d>
                <br />
                <d>
                    Uprading a specialist card can have the following outcomes: successful, failure, or soul destroyed.
                    <br />
                    If your specialist card has it's soul destroyed, you won't be able to upgrade it any more.
                    <div className="d-flex flex-row">
                        <div className="p-0">
                            In order to fix that, you'll need an item called Soul Revival Stone.
                        </div>
                        <div className="p-8 miniimg"><img src="asset/SpUpgrade/revstone.png" alt="" /></div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-8"><img src="asset/SpUpgrade/bluescroll.png" alt="" /></div>
                        <div className="p-1"><b>Lower SP Protection Scroll</b>, protects your specialist card from having it's soul destroyed and can be
                            used from +0 to +10.
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-8"><img src="asset/SpUpgrade/redscroll.png" alt="" /></div>
                        <div className="p-1"><b>Higher SP Protection Scroll</b>, protects your specialist card from having it's soul destroyed and can be
                            used from +10 to +15.
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="p-8"><img src="asset/SpUpgrade/goldscroll.png" alt="" /></div>
                        <div className="p-1"><b>Dragon Card Protection Scroll</b> is the newest addition, protects your specialist card
                            from having it's soul destroyed from +15 to +20.
                        </div>
                    </div>
                </d>
                <br />
                <h3><b>Materials from +0 to +20</b></h3>
                <div className='img75p'>
                    <img src="asset/SpUpgrade/Table1.png" alt="" />
                </div>
                <br />
                <d>
                    With every Job level after 20, you acquire more Sp Card Points that you can use to skill up your
                    different stats.
                    <br />
                    The same goes for every upgrade level that you achieve. After each milestone you will receive bonus abilities.
                    <br />
                    The expansion of the SP System now allows you to skill up to 120 points into one stat.
                    <br />
                    With every upgrade after +15 you'll unlock the ability to skill your SPs further than 100.
                    <br />
                    With +16 you'll be able to skill 105 points in one stat, with +17 you'll be able to skill 110 points
                    into one stat etc.
                    <br />
                    There are 4 different stats that you can use your points on, each one granting
                    different bonus abilities.
                    <br />
                    If you are not happy with your current point distribution or you want to
                    try something else, you can remove it with Point Initialisation Potion.
                    <br />
                    <i className='text-danger'>Note: this item removes all points distributed.</i>
                    <br />
                    Bonus abilities that have been mentioned more than once will be replaced by the
                    ability with a higher number. For simplicity reasons and a better overview the table will only show
                    the bonus abilities every 10 steps.
                </d>
                <br /><br />
                <h3><b>Bonus from 0 to 120 points</b></h3>
                <div className='img75p'>
                    <img src="asset/SpUpgrade/Table2.png" alt="" />
                </div>
                <br />
                <d>
                    After reaching upgrade level 20 with your specialist card, you are able to enchant them with
                    elemental gemstones, which you can craft in A4.
                    <br/>
                    These gemstones are able to bestow an extra buff for you with a certain chance. 
                    <br/>
                    <i className='text-danger'>After putting your specialist card into a Golden Specialist Card Holder the extra effect from 
                    these elemental gemstones will disappear from your specialist card.</i>
                </d>
                <br/><br/>
                <div className='img75p'>
                    <img src="asset/SpUpgrade/20lvlbuff.png" alt="" />
                </div>
            </div>
        </div>
    )
}
