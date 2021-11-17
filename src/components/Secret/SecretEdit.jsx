import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { API } from 'aws-amplify'

function SecretEdit(params) {
    const [username, setUsername] = useState("Vlad Usyk edit")
    const [carModel, setCarModel] = useState("Kurvik S3")
    const [carNumber, setCarNumber] = useState("BCIOT3AA")
    const [lastOrderComplete, setLastOrderComplete] = useState("26.04.2021-Shafaryka6")
    const [isActive, setIsActive] = useState("false")
    const [sensorType, setSensorType] = useState("false")
    const [apiKey, setApiKey] = useState("false")
    return (<>

        <div style={{ margin: "0rem 2rem" }}>
            <div className="header-secret">
                <img style={{ margin: "0rem 0rem 0rem 1rem" }} src="https://img.icons8.com/ios/90/000000/book-shelf.png" />
                <div style={{ display: "flex", margin: "1rem 0rem" }}>
                    <h1 className="heder-text-secret">S.C.S.S.</h1>
                    <h6 style={{ display: "flex", alignItems: 'flex-end' }}>by Denys</h6>
                </div>

                <h2 style={{ textDecoration: "no", cursor: "pointer", display: "flex", margin: "0rem 1rem 0rem 0rem", fontFamily: "'Courier New', Courier, monospace", alignItems: "center" }}>
                    <Link to="/" style={{ color: "black", fontFamily: "'Courier New', Courier, monospace" }}>Go to story list</Link></h2>

            </div>


            <div className="main-section-secret-second" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>



                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}>
                    Enter user name
                </span>
                <TextField onChange={(e) => setUsername(e.target.value)} style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />
                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}>
                    Enter car model
                </span>
                <TextField onChange={(e) => setCarModel(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />

                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> Enter car number</span>
                <TextField onChange={(e) => setCarNumber(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />

                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> Enter last order complete</span>
                <TextField onChange={(e) => setLastOrderComplete(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />

                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> Enter status of actitvity</span>
                <TextField onChange={(e) => setIsActive(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />

                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> Enter type of order </span>
                <TextField onChange={(e) => setSensorType(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />

                <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> Enter api key</span>
                <TextField onChange={(e) => setApiKey(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 1.5rem 0rem", width: "20%" }} type="text" />
                    
                <Link
                    to="/"
                    onClick={() => EditUklon(username, carModel, carNumber, lastOrderComplete, isActive, sensorType, apiKey)}
                    class="link-protocol-secret create_template_button_t-secret btn-background-slide row "
                    style={{ width: '7%' }}
                >
                    <span className="text_decoration" style={{ display: "flex" }}>Save story</span>
                </Link>
            </div>

            <div></div>

        </div>


    </>)
}
async function EditUklon(username, carModel, carNumber, lastOrderComplete, isActive, sensorType, apiKey) {

    const data = await API.put('uklonapi', `/uklon/${localStorage.getItem("selectedItem")}`, {

        body: {

            timestamp: lastOrderComplete,
            sensor_id: carNumber,
            sensor_type: sensorType,
            smoke_sensor: isActive,
            sensor_model: carModel,
            responsible_person: username,
            API_KEY: apiKey
        }

    })
    console.log(data)
}




export default SecretEdit
