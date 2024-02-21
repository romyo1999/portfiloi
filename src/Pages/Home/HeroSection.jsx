export default function HeroSection() {
  const handleDownload = () => {
    const url = process.env.PUBLIC_URL + '/img/GRIACH-TAHAR-CV.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'GRIACH-TAHAR-CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tahar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Hi! I'm a Full Stack developer with extensive experience in both frontend and backend development
            <br />   I'm passionate about crafting seamless digital experiences. Let's build together
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownload}>Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/about.svg" alt="Hero Section" />
      </div>
    </section>
  );
}
