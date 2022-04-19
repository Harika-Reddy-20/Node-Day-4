import React, {useEffect} from 'react'
import axios from 'axios';

function Febe() {

    useEffect(()=>{
        axios.get("http://localhost:3000/").then((res)=>{
            console.log(res);
        })

        axios.post("http://localhost:3001/addUser", {name:"ABC", class: "XYZ"}).then((res)=>{
            console.log(res);
        })
    })
  return (
    <div>
        <h1>Frontend + Backend</h1>
        <p>Sending data in console through backend using cors & axios.</p>
    </div>
  )
}

export default Febe;