import './About.css'

export default function About() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About HITS</h1>

      <div className="title-box">
        <p className="about-text">What is HITS?</p>
      </div>

      <div className="break"></div>

      <div className="ans-box">
        <p className="about-text">
          HelpIsThisAScam is an online tool designed to help users quickly determine whether a text message or email contains suspicious or malicious content. It analyzes the uploaded text for common scam indicators, phishing patterns, and high-risk phrases, then provides clear guidance on what to watch out for.
          </p>
          <p className="about-text"><br />The platform also generates a Cyberthreat Score, giving you an easy-to-understand rating of how likely the message is to be a potential threat. This empowers users to make informed decisions and stay protected against scams and cyberattacks.</p>    
      </div>

      
      <div className="break"></div>
      <div className="title-box">
        <p className="about-text">Behind HITS</p>
      </div>
      
      <div className="break"></div>

      <div className="ans-box">
        <p className="about-text">
          Hi, I'm Salma! At the time of making this, I'm a second year student at the University of Calgary studying Computer Science with an interest in Cybersecutiy.
          </p>
          
          <p className="about-text"><br />I created HelpIsThisAScam to help non-technical people identify threats better in an ever-evolving threat landscape. I had the idea after my older brother got scammed on Facebook Marketplace trying to buy a couch. Safe to say he never got his money back, and I was left with a project idea that wouldn't leave me alone.</p>    
      </div>


</div>
  )
}
