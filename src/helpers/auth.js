import React from 'react';
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'
import { useState } from 'react';
import { getAuth } from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const firebase = useFirebaseApp();

    const handleSubmit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <form className='m-5'>
                <div className="mb-3">
                    <label className="form-label">Correo electronico:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Auth