import classes from "./CardsShimmer.module.css"

const CardsShimmer=()=>{
    return(
    <>
        <div className={classes["sort_bar"]}></div>
        <div className={classes["title"]}></div>
        <div className={classes["card"]}>
            {Array(10).fill(0).map((i,j)=>{
            return <div className={classes["shimmer_card"]} key={j}>loading..</div>
        })}
        </div>
    </>
    )
}
export default CardsShimmer;