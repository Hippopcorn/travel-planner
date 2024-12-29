import { travelList } from "../datas/travelList"
import "../styles/ListCountry.css"



function ListCountry () {
    return(
        <div className="list-country">
            {travelList.map((country, index) => (
                <p className="country" key={`${country.name}-${index}`}>{ country.name }</p>  //key : crée une combinaison entre l'index et le nom de la plante qui est une string  (la key permet d'associer une donnée au composant correspondant dans le DOM virtuel )
            ))} 
        </div>
    )
}

export default ListCountry