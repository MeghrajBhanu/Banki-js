import image_map from "../../utils/images";
import classes from "./index.module.css"
import SharedHeader from "../../components/SharedHeader/index"
import { useNavigate } from "react-router";
import { useState } from "react";
import { Outlet } from "react-router";
/**
 * Banks Page Shows all the Banks User has Accounts in.
 * @returns {React.FunctionComponent}
 */
const Banks = () => {
  const Navigate=useNavigate();
  const [clicked,setClicked]=useState(false)
  
  const handleImageClick=(e)=>{
    
    setClicked(!clicked)
    Navigate("/login/banks/"+e.target.name);
  }
  return (
    <>
      {clicked && <Outlet />}
      {!clicked && 
      <>
      <SharedHeader />
      <div className="d-flex flex-wrap justify-content-around mt-5">
        {Object.keys(image_map).map((item) => {
          return (
            
              <img
                src={image_map[item]}
                name={item}
                alt="bank logo"
                className=" rounded img-thumbnail"
                id={classes["image"]}
                key={item}
                onClick={handleImageClick}
                style={{ width: "400px" ,margin:"1em" ,background: "rgba(0, 0, 0, 0.4)",transition: "all ease 1s"}}
              ></img>
            
          );
        })}
      </div>
      </>}
    </>
  );
};
export default Banks;
