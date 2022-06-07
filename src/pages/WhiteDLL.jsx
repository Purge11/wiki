import React from 'react'

export default function WhiteDLL() {
    return (
        <div className='p8'>
            <div className="container">

                <h1 className="nosvoid-color d-flex justify-content-center">Whitelist DLL guide</h1>
                <br />

                <p className="d-flex justify-content-center">Since we changed our launcher and we added some new client changes, some of you can get this error after updating the launcher</p>
                <p className="d-flex justify-content-center"><img src="asset/WhitelistDLL/Img1.png" alt="" /></p>
                <br />
                <br />
                <h3>How to fix this error:</h3>
                You need to whitelist whole NosVoid Folder.<br/>
                For that, go to your PC settings -> Update & Security -> Windows Security -> Virus & threat protection <i>[click on it]</i><br /> 
                <img src="asset/WhitelistDLL/Img2.png" alt="" />
                <br /> 
                Once here, click on "Manage Settings" option:
                <img src="asset/WhitelistDLL/Img3.png" alt="" />
                <br/>
                Scroll down a bit and click on the "Add or remove exclusions" <i>[click on it]</i>
                <img src="asset/WhitelistDLL/Img4.png" alt="" />
                <br/>
                Then put your NosVoid Folder into that, after that error will be fixed!
                <img src="asset/WhitelistDLL/Whitelist.gif" alt="" />
            </div>
        </div>

    )
}
