import "../styles/DestinationList.css";
import Scale from "./Scale.js";

function DestinationList({ list }) {
  const destinations = list;

  return (
    <div className="list-country">
      {destinations.map((destination) => (
        <div className="destination" key={destination.id}>
          <p>{destination.name}</p>
          <img className="img-cover" src={destination.cover}  alt="cover"></img>
          <p>{destination.category}</p>
          {destination.isTendency ? <p>Tendance 🔥</p> : null}
          <Scale cost={destination.cost} />
        </div>
      ))}
    </div>
  );
}

export default DestinationList;
