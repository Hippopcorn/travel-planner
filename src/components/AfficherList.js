const listTravel = [
    'Perou',
    'Russie',
    'Mexique',
    'Jordanie',
    'Kirgistan',
    'Italie',
    'Irlande',
    'Japon'
]

function AfficherList() {
    return(
        <ul>
            {listTravel.map((pays, index) => (
                <li key={`${pays}-${index}`}>{ pays }</li>  //key : crée une combinaison entre l'index et le nom de la plante qui est une string  (la key permet d'associer une donnée au composant correspondant dans le DOM virtuel )
            ))} 
        </ul>
    )
}

export default AfficherList