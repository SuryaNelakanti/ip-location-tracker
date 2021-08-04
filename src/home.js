import React from "react"
import "./home.css"

function home(){
    return(
        <div>
            <div id="heroSection">
                <h1 id="heroHeader">IP Address Tracker</h1>
                <form id="formMain">
                    <label>
                    <input type="text" name="name" placeholder="Search for any IP address or Domain" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div id="boxResults">
                <div><h2>IP Address</h2></div>
                <div><h2>Location</h2></div>
                <div><h2>Timezone</h2></div>
                <div><h2>ISP</h2></div>
            </div>
            <div id="map"></div>
        </div>
    )
}
