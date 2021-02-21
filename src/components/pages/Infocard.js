
const Infocard = (props) => {

  return (
    // TODO remove styling
    <div className="info-card">
      <h3>Restaurant name</h3>
      <img src="https://arlingtonva.s3.amazonaws.com/wp-content/uploads/sites/25/2013/12/restaurant.jpeg" alt="holding image" />
      <p>description -- this are just words to hold so we can see what a short description would look like.</p>
      <div id='money-star'>
        <span>$$$</span>
        <span>⭐️⭐️⭐️⭐️</span>
      </div>
    </div>
  );
}

export default Infocard;