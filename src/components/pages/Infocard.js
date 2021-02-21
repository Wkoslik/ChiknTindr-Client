
const Infocard = (props) => {
  //TODO The buttons needed to move to the infocard.js file considering the restaurant info will be living there
  const likeIt = () =>{
    //TODO like it function
    console.log("like it!")
    //this will push the selected restaurant information to the DB
    //this will render the next infoCard.
  }

  const dislikeIt = () =>{
    //TODO dislike it function
    console.log("DO NOT WANT!")
    //this will push the selected restaurant information to the DB
    //this will render the next infoCard.
  }

  return (
    // TODO remove styling
    <div id="info">        
    <button onClick={dislikeIt}>❌</button>
    <div className="info-card">
      <h3>Restaurant name</h3>
      <img src="https://arlingtonva.s3.amazonaws.com/wp-content/uploads/sites/25/2013/12/restaurant.jpeg" alt="holding image" />
      <p>description -- this are just words to hold so we can see what a short description would look like.</p>
      <div id='money-star'>
        <span>$$$</span>
        <span>⭐️⭐️⭐️⭐️</span>
      </div>
    </div>
    <button onClick={likeIt}>✅</button>
    </div>
  );
}

export default Infocard;