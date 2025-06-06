export default function Button({onClickFunc, btnType, children}) {
    return (
        <>
            <button onClick={onClickFunc} type={btnType}>{children}</button>
        </>
    )
    
}