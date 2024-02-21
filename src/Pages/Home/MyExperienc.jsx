import data from "../../data/index.json";

export default function MyExperienc() {
  return (
    <section className="testimonial--section" id="myexperience" style={{background:'#E6E6FA'}}>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title" style={{color:"darkblue"}}>My Experiences</p>
          <h2 className="sections--heading" style={{color:"darkmagenta"}}>Professional Experiences</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
      <div className="portfolio--section--container">
        {data?.experiences?.map((item, index) => (
          <div key={index} className="testimonial--section--card" style={{maxHeight:"140px" ,background:'wheat',borderColor:'orange'}}>
            <div className="testimonial--section--card--author--detail" style={{margin:0}}>
              <div>
              <h3 className="text-lg" style={{fontWeight:"bold",display:"flex" ,alignItems:"center" ,justifyContent:"start"}}>
                <img width={50} src={item.image}/>
                <span style={{marginLeft:"10px"}} >{item.role}</span>
              
              </h3>
                <p className="text-md testimonial--author--name" >
                  {item.date} {" "}
                </p>
                <p className="text-sm testimonial--author--name">
                  {item.company} {" "}
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
