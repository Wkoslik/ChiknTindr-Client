import Infocard from './Infocard'

const Restaurants = (props) => {
  return (
    <div>
      <h3>Restaurants page, user makes a choice here</h3>
      {/* TODO remove styling */}
      <div className="restaurants">
        <button>❌</button>
        <Infocard />
        <button>✅</button>
      </div>
      <p>user make choices above buttons, then move on to <a href="/notification">notice page</a></p>
    </div>
  );
}
export default Restaurants;