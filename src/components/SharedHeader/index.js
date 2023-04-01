import classes from "./index.module.css";
import { useSelector } from "react-redux";
const SharedHeader = ({ name, pancard ,flagged}) => {
  const user=useSelector(state=>state.auth.user);
  return (
    
      <section className={classes["shared_header"]}>
        <div className={classes["overlay"]}>
          <div className={classes["container"]}>
            <div className={classes["row"]}>
              <div
                className="col"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className={classes["fadeInUp"]}>
                  <h2 className="text-center mb-4">Welcome {name?name:"user"} !</h2>
                  <p className="text-center mt-3">
                    Here are your {flagged} bank accounts linked with {pancard?pancard:user?.pancard}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};
export default SharedHeader;
