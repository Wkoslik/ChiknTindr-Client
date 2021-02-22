//About the RESTaurateurs

const About = (props) => {
  return (
    //TODO: if user is at about page, change contents
    <div>
      <ul>
        <li>Young, link to LinkedIn, link to resume</li>
        <li>Whitney, link to LinkedIn, link to resume</li>
        <li>Sean, link to LinkedIn, link to resume</li>
      </ul>
      <div>
      {/* TODO get images of everyone */}
        <a href="https://www.linkedin.com/in/youngsang-kim/" target="_blank"><img src='' alt='Youngsang Kim' /></a>
        <a href="https://www.linkedin.com/in/wkoslik/" target="_blank"><img src='' alt='Whitney Koslik' /></a>
        <a href="https://www.linkedin.com/in/seanmichael-feiner/" target="_blank"><img src='' alt='Sean Feiner' /></a>
      </div>
    </div>
  );
}
export default About;