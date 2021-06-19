import react from "react";  
const Card =(props) => {
  return(
    <>
      <div className="col-md-6 mt-5">
       <div className="card d-flex justify-content-center text-center">
          <img src={props.image} className="card-img-top mt-5"/>
          <div className="card-block">
            <h5 className="text-bold title mt-3 ">{props.title}</h5>
             <p className="text-bold paragraph text-center para mb-5 ml-5">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;