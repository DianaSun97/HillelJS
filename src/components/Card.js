
export const Card = (props) => {
    return (
        <div className='card' onClick={() => props.onClick()}>
            <p>Name {props.name}</p>
            <p>ID {props.id}</p>
            <p>{props.status}</p>
        </div>
    )
}