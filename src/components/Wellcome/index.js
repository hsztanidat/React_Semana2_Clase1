import "./style.css"

function Wellcome ({name}) {
    return (
        <div className="CenterGreeting">
            <p className="Greeting">Welcome home, {name}</p>
        </div>
    )
}

export default Wellcome