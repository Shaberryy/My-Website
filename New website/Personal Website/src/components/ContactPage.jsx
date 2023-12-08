import NavBar from "./NavBar";

export default function ContactPage() {
  return (
    <>
      <div>
        <NavBar />
        <h1>My socials</h1>
        <span>
          <div className="socialbox">
            <a href="https://www.linkedin.com/in/hali-rodriguez-882007229/">
              {" "}
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                className="socials"
              />
            </a>
            <a href="https://www.instagram.com/ayeitshali/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                className="socials"
              />
            </a>

            <a href="https://github.com/Shaberryy">
              <img
                src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
                className="socials"
              />
            </a>
            <a href="https://www.artstation.com/jaden_png"></a>
          </div>
        </span>
      </div>
    </>
  );
}
