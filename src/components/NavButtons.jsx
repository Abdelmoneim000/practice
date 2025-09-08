export default function NavButtons(props) {
    return (
        <>
            {props.page > 1 && <button className="prev">Previous</button>}
            {props.page < props.pages && <button className="next">Next</button>}
            {props.page === props.pages && <button className="submit">Submit</button>}
        </>
    )
}