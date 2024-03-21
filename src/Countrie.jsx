const Countrie = ({name , flags}) => {
    return (
        <div>
            <li>
                <p>{name.common}</p>
                <img src= {flags.png}></img>
            </li>
        </div>
    )
}
export default Countrie