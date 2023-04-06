import { createSignal } from "solid-js";

const MouseCursor = ({pos}) => {
    const [position, setPosition] = createSignal(pos);
    return(
        <>
        {JSON.stringify(pos)}
        <div className="mouse-cursor" style={{'position': 'absolute', 'left': position.x + 'px', 'top': position.y + 'px'}}></div>
        </>
    )
}

export default MouseCursor;