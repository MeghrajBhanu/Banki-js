import classes from "./CardsShimmer.module.css"
/**
 * CardShimmer is a skeleton of BankAccountsMap
 *
 * @returns {React.FunctionComponent}
 */
const CardsShimmer=()=>{
    return(
    <>
        <div className={classes["sort_bar"]}></div>
        <div className={classes["title"]}></div>
        <div className={classes["cards"]}>
            {Array(10).fill(0).map((i,j)=>{
            return <div className={classes["card"]} key={j}>loading..</div>
        })}
        </div>
    </>
    )
}
export default CardsShimmer;