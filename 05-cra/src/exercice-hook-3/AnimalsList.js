import { useState } from "react";

/**
 * Dispose d'un state animals mis à jour avec setAnimals
 * animals est un tableau de chaîne de caractères, vide par défaut
 * Le composant affiche la liste des animaux et un formulaire.
 * Devant chaque animal, afficher un bouton "Supprimer" qui permettra de supprimer un animal
 * Le formulaire propose d'ajouter un nouvel animal à la liste
 */
function AnimalsList() {
    let [animals, setAnimals] = useState([]);
}

export default AnimalsList;
