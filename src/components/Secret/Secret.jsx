import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import "./Secret.css"

function Secret() {
    // const [textObj, setTextObj] = useState([])


    const [textObj, setTextObj] = useState([]);

    const fetchData = async () => {
      try {


        axios.get('http://dotemus.xyz:80/uklon/').then(res => {
                const data = res.data;
                setTextObj(data);
            })
        // const data = await API.get('uklonapi', '/uklon');
        // console.log(data)
        // setTextObj(data);
      } catch (error) {
        console.log(error);
      }
  };
  useEffect(() => {
    fetchData();
  }, [
      textObj
    ]);
  
    // let textObj = [{ 'Secret': "dslkkdslkd" }, { 'Secret': "dslkkdwefafslkd" }, { 'Secret': "dslkkdslkd" }, { 'Secret': "dslkkdwefafslkd" }, { 'Secret': "dslkkdslkd" }, { 'Secret': "dslkkdwefafslkd" }, { 'Secret': "dslkr3qrqfkdslkd" }, { 'Secret': "1234dslkkdslkd" }, { 'Secret': "dslkkdslkddvsvdd" }]
    return (
        <>
            <div style={{ margin: "0rem 2rem" }}>
                <div className="header-secret">
                    <img style={{ margin: "0rem 0rem 0rem 1rem" }} src="https://img.icons8.com/ios/70/000000/book-shelf.png" />
                    <div style={{ display: "flex", margin: "1rem 0rem" }}>
                        <h1 className="heder-text-secret">S.C.S.S.</h1>
                        <h6 style={{ display: "flex", alignItems: 'flex-end' }}>by Denys</h6>
                    </div>

                    <h2 style={{ textDecoration: "no", cursor: "pointer", display: "flex", margin: "0rem 1rem 0rem 0rem", fontFamily: "'Courier New', Courier, monospace", alignItems: "center" }}>
                        <Link to="/secret-new" style={{ color: "black", fontFamily: "'Courier New', Courier, monospace" }}>Write new Uklon data?  </Link></h2>

                </div>
                {/* a secret collection of strange stories */}

                <div className="main-section-secret">

                    {textObj.map((obj) => (<>
                        
                        <div className="element-secret" style={{ display: "flex", margin: "0.5rem", padding: "0.5rem" }}>
                            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div style={{ height: "370px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <span style={{}}>
                                        Водій: {obj.responsible_person.S}
                                    </span>
                                    <span style={{}}>

                                        Марка автомобіля: {obj.sensor_model.S}
                                    </span>
                                    <span style={{}}>
                                        Номер машини: {obj.sensor_id.S}
                                    </span>
                                    <span style={{}}>
                                        Останнє замовлення: {obj.timestamp.S}
                                    </span>
                                    <span style={{}}>
                                        Зараз виконує замовлення: {obj.smoke_sensor.S}
                                    </span>
                                    <span style={{}}>
                                    Тип замовлення: {obj.sensor_type.S}
                                    </span>

                                 <div style={{display:"flex",flexDirection:"row"}}>
                                    <Link
                                 onClick={()=>localStorage.setItem("selectedItem",obj.id.S)}
                                 to="/secret-edit"> <img style={{margin:"0.5rem", cursor: "pointer" }} width="60px" height="60px" src="https://img.icons8.com/ios/50/000000/edit--v3.png" /></Link>
<img src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png" style={{width:"50px", height:"50px",margin:"0.5rem" }} onClick={()=>deleteObj(obj.id.S)}/>
</div>
                                </div>
                             
                                <iframe src="https://assets.pinterest.com/ext/embed.html?id=519110294546533477" height="193" width="200" frameborder="0" scrolling="no" ></iframe>
                            </div>
                        </div>
                    </>))}
                </div>
                <div></div>

            </div>
        </>
    )

}

async function  deleteObj (id){

axios.delete(`http://dotemus.xyz:80/uklon/${id}`)
    // const del=await API.del('uklonapi', `/uklon/${id}`)
    // console.log(del);
}
function SaveSecret(Secret, SecretOne, SecretTwo) {
    localStorage.setItem("Secret", Secret)
    localStorage.setItem("SecretOne", SecretOne)
    localStorage.setItem("SecretTwo", SecretTwo)
}

export default Secret
