//TODO @YoungSang -- is this just a notification to a user that a restaurant has been chosen or is it displaying the chosen restaurant? If it's just a notification letting the user know, let's move it to partials as a "popup" upon sign in and then when the user clicks on it, it takes them to the results page

const Notice = (props) => {
  return (
    <div>
      <h3>Notification page from friend's choice</h3>
      <button>✅</button>
      <button>❌</button>
      <p>user send/get notification to friend, make decision, then move on the the <a href="/result">result page</a></p>
    </div>
  );
}
export default Notice;