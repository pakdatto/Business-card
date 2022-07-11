import React from "react"

export default function Main() {
    return (
        <main className="kaikki">
            
            
            <div className="otsikot">
            <h1 className="nav--name">Pak Dat To</h1>
            <h4 className="nav--jobtitle">DevOps engineer </h4>
            <h5 className="nav--website">www.pakdatto.com</h5>
            <div className="nappi">
                <img className="posti" src={require('../images/message.png')} />
                <h4 className="email">Email</h4>
                
            </div>            
            </div>

            

            <p className="tietoa">
                <h4 className="otsikko1">About</h4>
                <p className="teksti1">My name is Pak and I have just started my DevOps career. Basically
                I am freaking out, but I think that eventually it will work out and 
                I'm going to be good at what I do. I know that I'm not the brightest star
                in the room, but I learn quickly. As Alber Einstein used to say 
                - “I am neither especially clever nor especially gifted. I am only very, 
                very curious” and I approve this.  </p>
                <h4 className="otsikko2">Interests</h4>
                <p className="teksti2">Asian cuisine is close to my heart, modern technology is freakin 
                interesting and especially VR/AR technology. Sports and travelling 
                are close to my heart and I just love spending time with my friends. </p>
            </p>
            
        </main>
    )
}
