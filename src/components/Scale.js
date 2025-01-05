function Scale(data) {
    
    const cost = data.cost;
    
    const rangeElem = [1, 2, 3, 4, 5];
  return (
    <div>
      {rangeElem.map((elemActual) => (
        <span key={elemActual}>
          {cost === elemActual ? "€".repeat(elemActual) : null}
        </span>
      ))}
    </div>
  );
}

export default Scale;
