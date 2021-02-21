import Infocard from './Infocard'

const Restaurants = (props) => {
//TODO The buttons needed to move to the infocard.js file considering the restaurant info will be living there
  return (
    <div>
      <h3>Restaurants page, user makes a choice here</h3>
      {/* TODO remove styling */}
      <div className="restaurants">
        <Infocard />
      </div>
      <p>user make choices above buttons, then move on to <a href="/notification">notice page</a></p>
    </div>
  );
}
export default Restaurants;