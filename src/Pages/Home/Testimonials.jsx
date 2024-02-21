import data from "../../data/index.json";

export default function Testimonial() {

    const DownoaldCertificate=(id)=>{
      const url = process.env.PUBLIC_URL + `/img/cr${id}.pdf`;
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `cr${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Education</p>
          <h2 className="sections--heading">Certifications & Diplomas</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} style={{cursor:"pointer"}} className="testimonial--section--card" onClick={()=>DownoaldCertificate(item.id)}>
            <div className="testimonial--section--card--author--detail" style={{margin:0}}>
              <div>
              <h3 className="text-lg" style={{fontWeight:"bold",display:"flex" ,alignItems:"center" ,justifyContent:"start"}}>
                <img width={50} src="https://www.svgrepo.com/show/263172/diploma-certificate.svg"/>
                <span style={{marginLeft:"10px"}} >{item.name}</span>
              
              </h3>
                <p className="text-md testimonial--author--name" >
                  {item.date} {" "}
                </p>
                <p className="text-sm testimonial--author--name">
                  {item.school} {" "}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
