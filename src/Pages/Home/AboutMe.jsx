export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero1.svg" alt="About Me" style={{width:"80%"}} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title" style={{color:"var(--primary)"}}>About</p>
          <h1 className="skills-section--heading" style={{color:' #9ce4e3'}}>About Me</h1>
          <p className="hero--section-description" style={{color:"black"}}>
          My name is Griach Tahar, a Full Stack Developer from Larache, Morocco. I hold a specialized technician diploma in full stack web development from ISTA Larache OFPPT. Additionally, I have Cisco PCPA. 
          </p>
          <p className="hero--section-description"  style={{color:"black"}}>
           I specialize in building responsive and fast websites and apps using tools like React, Laravel, Express.js, HTML, CSS, and desktop applications with Python Tkinter

          </p>
        </div>
      </div>
    </section>
  );
}
