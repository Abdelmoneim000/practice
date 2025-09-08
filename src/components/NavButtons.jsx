export default function NavButtons(props) {
    
    return (
        <>
            {props.page > 1 && <button className="prev" onClick={props.handlePrev}>Previous</button>}
            {props.page < props.pages && <button className="next" onClick={props.handleNext}>Next</button>}
        </>
    )
}