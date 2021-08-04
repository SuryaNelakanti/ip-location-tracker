import React, { useEffect, useState } from "react";
import "./App.css";
import Sawo from "sawo";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
L.Icon.Default.imagePath = "/";

function App() {
  // state values
  const [userPayload, setUserPayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sawoConfig = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: "d592e239-0993-4fe7-a35e-55c4b6b05bc6",
      onSuccess: onSuccessLogin
    };

    // creating instance
    let sawo = new Sawo(sawoConfig);

    // calling method to show form
    sawo.showForm();
  }, []);

  // OnSuccess Callback method
  const onSuccessLogin = async (payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);

  };

  return (
    <React.Fragment>
      <div>
        <section>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            // <React.Fragment>
            //   <div>
            //     <h2>User Successfull login</h2>
            //     <div>UserId: {userPayload.user_id}</div>
            //     <div>Verification Token: {userPayload.verification_token}</div>
            //   </div>
            // </React.Fragment>
        <div>
        <div id="heroSection">
                <h1 id="heroHeader">IP Address Tracker</h1>
                <form id="formMain">
                    <label>
                    <input id="textType" type="text" name="name" placeholder="Search for any IP address or Domain" />
                    </label>
                    <input id="submitButton" type="submit" value="Submit"  />
                </form>
            </div>
            <div id="boxResults">
                <div class="resultBox" id="borderRight"><p>IP Address</p><h2>placeholder</h2></div>
                <div class="resultBox" id="borderRight"><p>Location</p><h2>placeholder</h2></div>
                <div class="resultBox" id="borderRight"><p>Timezone</p><h2>placeholder</h2></div>
                <div class="resultBox"><p>ISP</p><h2>placeholder</h2></div>
            </div>
            <div id="map">
            <MapContainer style={{ height: "600px", width: "100%" }} center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
            </MapContainer>
            </div>
        </div>

          )}

          {/* Showing login form */}
          {!isLoggedIn && (

            <div id="sawo-container" style={{width:"500px",height:"300px",margin:"0 auto", marginTop:"100px"}}>
              {/* Sawo form will appear here */}
              <h1>Login using Sawo</h1>
            </div>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
