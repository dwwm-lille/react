import AnimalsList from "./AnimalsList";
import EditProfile from "./EditProfile";
import Notes from "./Notes";

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
                <EditProfile />
                <p>Remplir le composant AnimalsList</p>
                <AnimalsList />
                <p>Remplir le composant Notes</p>
                <Notes />
            </div>
        </div>
    )
}

export default ExoHook3;
