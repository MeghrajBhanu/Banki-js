import image_map from "../../utils/images"
const Banks=()=>{
    return(
        <>
            <div className="vh-100 d-flex flex-wrap  justify-content-around">
            {Object.keys(image_map).map((item)=>{
                return(
                    <>
                        <img src={image_map[item]} alt="bank logo" className=""></img>
                    </>
                )
            })}
            </div>
        </>
    );
}
export default Banks;