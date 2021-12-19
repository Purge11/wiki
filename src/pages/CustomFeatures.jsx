import React from 'react'

export default function CustomFeatures() {
    return (
        <div className='customfeatures'>
            <div class="container">
                <div class="row  ">

                    <div class="d-flex justify-content-center mt-5">

                        <h4 class="nosvoid-color ">FPS unlock</h4>
                    </div>
                    <div class="d-flex justify-content-center">
                    <p class="nosvoid-color">The FPS Unlock feature allows you to ''unlock'' the Nostale frame rate, increasing it to above the default of 60 FPS which may reduce the input lag and allow players to make the most out of monitors with a 60hz+ refresh rate which will make NosTale so much more enjoyable for players!</p>
                    </div>
               

                    <div class="d-flex justify-content-center mt-2 ">
                        <img src="asset/feature/fps.gif" alt=""/>
                    </div>

                    <div class="d-flex justify-content-center mt-5 pt-5">

                        <h4 class="nosvoid-color ">CD on skills</h4>
                    </div>
                  
                    <div class="d-flex justify-content-center">
                    <p class="nosvoid-color">The CD on skills will have a new feature, the bar will show the seconds missing for the skill to be avaiable again.
Are your friends asking how many seconds are missing for your buff? Now you know!</p>
                    </div>

                    <div class="d-flex justify-content-center mt-2">
                        <img src="asset/feature/feature1.gif" alt=""/>
                    </div>
                    <div class="d-flex justify-content-center mt-5 pt-5">

                        <h4 class="nosvoid-color ">Searchbar Inventory</h4>
                    </div>
                   
                    <div class="d-flex justify-content-center mt-2">
                    <p class="nosvoid-color">The search bar is a new feature, that will make the item search easier. Are you looking for something in particular?
Just write it in the bar and it will show you your item!</p>
                    </div>

                    <div class="d-flex justify-content-center mt-2">
                        <img src="asset/feature/feature2.gif" alt=""/>
                    </div>

                </div>
            </div>

            <div className="footer">
                <div className="p-3"></div>
            </div>
        </div>
    )
}
