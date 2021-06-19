import react from "react"; 
import Sdata from "../Sdata";
import Card from "../components/Card";

const Doctor =() => {
  return(
    <>
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-md-12">
            <div className="row gy-4">
              {
                Sdata.map((val, ind) => {
                   return <Card key={ind}
                      image={val.image}
                      title={val.title}
                      para={val.para}
                   />
                })
              }
            </div> 
          </div>
        </div>
      </div>

    </>
  );
};
export default Doctor;