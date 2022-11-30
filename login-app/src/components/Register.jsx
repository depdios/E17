import React, { useState } from "react";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        
    }

    return (
        
        <div className="auth-form-container">

            <form className="register-form"onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={name} type="name" placeholder="Nombre" id="name" name="name"/>

                <label htmlFor="phone">Phone</label>
                <input value={phone} type="phone" placeholder="645129823" id="phone" name="phone"/>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <label htmlfor="password">Retype password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>

                <button type="submit">Sign up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tiene una cuenta? Inicie sesión aquí</button>

        </div>

    )
}