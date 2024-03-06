// eslint-disable-next-line react/prop-types
function Button({bref,style,type,text, handleClick}){

    return( 
        <button ref={bref} className={style} type={type} onClick={handleClick}>{text}</button>
    )
}

export default Button