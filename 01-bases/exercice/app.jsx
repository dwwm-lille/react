class Exo1 extends React.Component {
    render() {
        const song = 'Chachacha';
        const numberOfGoodReasonsToBeHere = 150;
        const disabledButton = <button disabled>Bouton</button>

        return (
            <div>
                <p>Afficher ici le contenu de la variable song {song}</p>
                <p>Afficher ici le contenu de numberOfGoodReasonsToBeHere {numberOfGoodReasonsToBeHere * 10}</p>
                <p>Afficher ici le contenu de disabledButton {disabledButton}</p>
            </div>
        )
    }
}

class Exo2 extends React.Component {
    render() {
        const notes = [0, 4, 10, 20, 15];

        const person = {
            firstname: 'Boulette',
            lastname: 'Fromage',
            age: 15,
        };

        const actionsList = (
            <div>
                <button>Modifier</button>
                <button>Annuler</button>
            </div>
        );

        return (
            <div>
                <p>
                    Afficher le contenu du tableau notes sous forme de liste
                    <a href="https://fr.reactjs.org/docs/lists-and-keys.html">Documentation sur l'affichage des listes</a>
                </p>
                <ul>
                    {notes.map((note, index) => <li key={index}>{note}</li>)}
                </ul>
                <p>Afficher le contenu de la constante person sous la forme person.value</p>
                <p>{person.firstname} {person.lastname} a {person.age} ans</p>
                <p>Afficher le contenu de la constante actionsList</p>
                {actionsList}
            </div>
        )
    }
}

class Exo3 extends React.Component {
    render() {
        const person = {
            name: 'Charly',
            age: 66,
            job: {
                name: 'Styliste',
                since: '29 Avril 2020',
            }
        };

        const shoppingCart = [
            {
                name: 'Concombre',
                type: 'Legume'
            },
            {
                name: 'Courgette',
                type: 'Legume',
            },
            {
                name: 'Endive',
                type: 'Beurk',
            },
            {
                name: 'Steak',
                type: 'Frais',
            },
            {
                name: 'Sanglier',
                type: null,
            }
        ];

        const series = this.catalogSeries();

        return (
            <div>
                {this.someDiv()}
                <p>Consulter la méthode someDiv. En vous basant sur le même modèle, remplissez la méthode validateButton</p>
                <p>Appeler la fonction validateButton pour générer le bouton en dessous de ce paragraphe</p>
                {this.validateButton()}
                <p>Afficher toutes les propriétés de la variable person</p>
                <p>{person.name} a {person.age} ans. Il est {person.job.name.toLowerCase()} depuis le {person.job.since}.</p>
                <p>Afficher toutes les propriétés du panier de courses</p>
                <ul>
                    {shoppingCart.map((product, index) =>
                        <li key={index}>
                            {product.name} ({product.type || 'Aucun type'})
                        </li>
                    )}
                </ul>

                {/* Pour debug, on peut utiliser le console.log ou le JSON.stringify */}
                {shoppingCart.map(product => console.log(product))}
                {JSON.stringify(shoppingCart)}

                <p>Afficher toutes les propriétés du catalogue de séries</p>
                {series.map((serie, index) =>
                    <div key={index}>
                        <h2 className={'MaClasse'} style={{ color: 'red', backgroundColor: 'black' }}>{serie.name}</h2>
                        <p>Épisodes: {serie.episodes}</p>
                        <p>Note: {serie.note}</p>
                    </div>
                )}
            </div>
        )
    }

    /**
     * Cette méthode renvoie une div au format JSX
     */
    someDiv() {
        return <div>Je suis une div</div>
    }

    /**
     * Cette méthode renvoie un bouton Valider au format JSX
     */
    validateButton() {
        return <button>Valider</button>
    }

    /**
     * Cette méthode renvoie une liste des séries à regarder pendant le confinement
     */
    catalogSeries() {
        return [
            {
                name: 'One Sheep',
                episodes: 999999,
                note: 5,
            },
            {
                name: 'Vikongs',
                episodes: 5,
                note: 19,
            },
            {
                name: 'Spartakis, au bon lait de brebis',
                episodes: 15,
                note: 12,
            }
        ];
    }
}

class Exo4 extends React.Component {
    render() {
        const cat = '';

        const persons = [
            {
                name: 'Charly',
                age: 66,
                job: {
                    name: 'Styliste',
                    since: '29 Avril 2020',
                },
            },
            {
                name: 'Charly',
                age: 25,
                job: {
                    name: 'Barman',
                    since: '29 Avril 5050',
                },
            }
        ];

        const shoppingCart = [
            {
                name: 'Concombre',
                type: 'Legume',
                warehouse: {
                    name: 'MisterEpices',
                    size: 'petit',
                }
            },
            {
                name: 'Courgette',
                type: 'Legume',
                warehouse: {
                    name: 'MisterEpices',
                    size: 'petit',
                }
            },
            {
                name: 'Endive',
                type: 'Beurk',
                warehouse: {
                    name: 'Parking Souterrain',
                    size: 'Grand',
                }
            },
            {
                name: 'Steak',
                type: 'Frais',
            },
            {
                name: 'Sanglier',
                type: null,
                warehouse: null,
            }
        ];

        return (
            <div>
                <p>
                    <a href="https://fr.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator">
                        Documentation sur le rendu conditionnel à la volée en JSX
                    </a>
                </p>
                <p>
                    Après avoir consulté la documentation, afficher chat de manière conditionnelle seulement
                    si son nom est différent de "Ronron" et qu'il n'est pas nul et avec la notation &&
                </p>
                {cat != 'Ronron' && cat && <p style={{ border: '1px solid #000' }}>{cat}</p>}
                <p>
                    Afficher les propriétés de chaque personne à l'aide de map
                    Pour chaque personne afficher son âge de manière conditionnelle en utilisant ? et :
                </p>
                <p>
                    Afficher les propriétés de chaque personne à l'aide de map
                    Pour chaque personne afficher son âge de manière conditionnelle en utilisant ||
                </p>
                <ul>
                    <li>
                        Si l'âge de la personne est supérieur à 65, alors afficher "Senior"
                    </li>
                    <li>
                        Sinon, afficher l'âge de la personne
                    </li>
                </ul>
                {persons.map((person, index) =>
                    <div key={index}>
                        <h2>{person.name}</h2>
                        <p>{person.job.name} depuis le {person.job.since}</p>
                        {person.age > 65 ? <p>Senior</p> : <p>{person.age} ans</p>}
                        {person.age > 65 && <p>Senior</p> || <p>{person.age} ans</p>}
                        <p>{person.age > 65 ? 'Senior' : `${person.age} ans`}</p>
                    </div>
                )}
                <p>Afficher tous les légumes dans une boucle map</p>
                <p>Pour chaque légume, afficher son magasin de manière conditionnelle avec &&</p>

                {shoppingCart.map((product, index) =>
                    /*product.type == 'Legume' &&*/ <div key={index}>
                        <h2>{product.name}</h2>
                        <p style={{ color: product.type == 'Legume' ? 'green' : 'black' }}>{product.type}</p>
                        {product.warehouse &&
                            <div>
                                <p>{product.warehouse.name}</p>
                                <p>{product.warehouse.size}</p>
                            </div>
                        }
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Exo1 />
        <Exo2 />
        <Exo3 />
        <Exo4 />
    </div>,
    document.querySelector('#root')
);
