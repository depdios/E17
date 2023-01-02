import React, { useState } from "react";

// definimos que es showProfile

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


export const Carrito = (props) => {
    // hacemos el apartado de carro de compra
    // hará fetch de fetch('http://localhost:3000/app/carro/'

    // mostrará el producto que se añadió al carrito
    // mostrará el precio total del carrito
    // mostrará el precio total de los productos que se añadieron al carrito

    // mostrará el botón de pagar
    // mostrará el botón de vaciar carrito

    return (
        <div className="auth-form-container">
            <h1>Carrito de compra</h1>
            <div class="carrito"></div>
            <div class="total"></div>
            <button onClick={showProfile}>Pagar</button>
            <button onClick={showProfile}>Vaciar carrito</button>
        </div>
    )
}
