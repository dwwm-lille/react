import { useState } from "react";

/**
 * Dispose d'un state User utilisant le hook d'état, avec un objet vide {} comme valeur par défaut
 * User est un objet avec deux propriétés : firstname, et mail
 * User est mis à jour à travers une méthode setUser
 * Le composant affiche les informations de l'utilisateur et un formulaire
 * Le formulaire propose de changer les informations de l'utilisateur (firstname et mail).
 */
function EditProfile() {
    let [user, setUser] = useState({ firstname: '', mail: '' });

    let handleChangeFirstname = (event) => {
        // user.firstname = event.target.value;
        // setUser({ ...user });

        setUser({ ...user, firstname: event.target.value });
    };

    let handleChangeMail = (event) => {
        setUser({ firstname: user.firstname, mail: event.target.value });
    };

    let handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        let { name, value } = event.target;

        // name sera soit firstname soit mail...
        setUser({ ...user, [name]: value });
    };

    return (
        <div>
            <h1>{user.firstname} {user.mail}</h1>
            <div>
                <h2>Version 1</h2>
                <input type="text" value={user.firstname} onChange={(e) => handleChangeFirstname(e)} />
                <input type="text" value={user.mail} onChange={(e) => handleChangeMail(e)} />

                <h2>Version 2</h2>
                <input type="text" name="firstname" value={user.firstname} onChange={(e) => handleChange(e)} />
                <input type="text" name="mail" value={user.mail} onChange={handleChange} />

                <h2>Version 3</h2>
                <input type="text" value={user.firstname} onChange={(e) => setUser({ ...user, firstname: e.target.value })} />
                <input type="text" value={user.mail} onChange={(e) => setUser({ ...user, mail: e.target.value })} />
            </div>
        </div>
    );
}

export default EditProfile;
