import Button from './Button';
import SecondButton from '../components/Button';
import Header from './Header';

function Footer(props) {
    return (
        <div style={{ border: 'solid', padding: '8px', margin: '8px 0' }}>
            Créé par le grand marnier. {props.text}
        </div>
    )
}

function ExoHook1() {
    return (
        <div>
            <div>
                <p>
                    Voici un composant de fonction Footer
                </p>
                <Footer text="Avec Amour" />
            </div>
            <div>
                <p>
                    <a href="https://fr.reactjs.org/docs/hooks-intro.html">Composants fonctionnels</a>
                </p>
                <p>
                    Créer un composant fonctionnel Header qui renvoie un h1 avec le texte "Baba".
                </p>
                <Header />
                <p>
                    Créer un composant fonctionnel Button qui renvoie un button avec un texte reçu en props.
                </p>
                <Button className="btn" text="Mon bouton" />
                <SecondButton>Toto</SecondButton>
            </div>
        </div>
    )
}

export default ExoHook1;
