
export const Card = (props) => {
    return (
        <div className='card' onClick={() => props.onClick ? props.onClick() : undefined}>
            <p>Name {props.name}</p>
            <p>ID {props.id}</p>
            <p>{props.status}</p>
        </div>
    )
}