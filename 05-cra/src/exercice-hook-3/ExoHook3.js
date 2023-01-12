/**
 * Dispose d'un state User utilisant le hook d'état, avec un objet vide {} comme valeur par défaut
 * User est un objet avec deux propriétés : firstname, et mail
 * User est mis à jour à travers une méthode setUser
 * Le composant affiche les informations de l'utilisateur et un formulaire
 * Le formulaire propose de changer les informations de l'utilisateur (firstname et mail).
 */
function EditProfile() {
}

/**
 * Dispose d'un state animals mis à jour avec setAnimals
 * animals est un tableau de chaîne de caractères, vide par défaut
 * Le composant affiche la liste des animaux et un formulaire.
 * Devant chaque animal, afficher un bouton "Supprimer" qui permettra de supprimer un animal
 * Le formulaire propose d'ajouter un nouvel animal à la liste
 */
function AnimalsList() {
}

/**
 * Dispose d'un state notes, mis à jour avec setNotes
 * notes est un tableau d'entiers positifs, vide par défaut
 * Le composant affiche la liste des notes, ainsi que la moyenne des notes, et un formulaire
 * Le formulaire propose d'ajouter une nouvelle note à la liste en utilisant setNotes
 */
function Notes() {
}

function ExoHook3() {
    return (
        <div>
            <h3>Attention à bien utiliser le Spread opérator <pre>...</pre> pour ré-assigner vos objets et arrays !</h3>
            <div>
                <p><a href="https://medium.com/@thejasonfile/using-the-spread-operator-in-react-setstate-c8a14fc51be1">Article sur le Spread opérator</a></p>

                <p>Incorrect : </p>
                <pre>
                    const updatedNotes = notes;
                    Manipulation des notes
                    this.setNotes(updatedNotes);
                </pre>

                <p>Correct</p>
                <pre>
                    const updatedNotes = [...notes];
                    Manipulation des notes
                    this.setNotes(updatedNotes);
                </pre>

                <p>Pour les objets</p>
                <p>Correct : </p>
                <pre>
                    const updatedUser = {'{...User}'};
                    Manipulation de updatedUser
                    this.setUser(updatedUser);
                </pre>
            </div>
            <div>
                <p>Remplir le composant EditProfile</p>
                <p>Remplir le composant AnimalsList</p>
                <p>Remplir le composant Notes</p>
            </div>
        </div>
    )
}

export default ExoHook3;
