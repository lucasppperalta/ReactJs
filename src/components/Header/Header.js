const Header = (props) => {
    return(
        <>
        <h3>Header😎</h3>
        <p>Esto es mi Header</p>
        <p>Estoy así 😵 de estudiar ReactJs</p>
        <h1>Mi nombre es {props.name}  </h1>
        <p>{props.title}</p>
        </>
    )
}

export default Header;