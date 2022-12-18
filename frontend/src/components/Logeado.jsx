import React, { useState } from "react";

export const Logeado = (props) => {

    const showProfile = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/app/users/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            
        })
        .then(res => { 
            res.json()
            console.log(res.status)
            if (res.status === 200) document.getElementById("perfil").innerHTML = res.body;
          })
        .then(res=> {
              console.log(res.message);
        });
        
    }

    return (

        <div className="auth-form-container">
            <h1>Has iniciado sesión correctamente</h1>
            <button onClick={showProfile}>Mostrar perfil</button>
            <div class="perfil"></div>
        </div>

    )
}