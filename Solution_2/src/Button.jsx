function Button({text, onClick}){
    return (
        <>
        <button onClick={onClick} style={{fontSize: "17px", display:"flex", margin: "250px auto"}}>
            {text}
        </button>
        </>
    )
}
export default Button;