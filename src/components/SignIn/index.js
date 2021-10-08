import "./style.css"

function SignIn () {
    return (
        <div>
            <form className="MyForm">
                <input className="MyInput" placeholder="Username">

                </input>
                <input className="MyInput" placeholder="Password">
                </input>
                <button className="SingInButton" type="submit">SIGN IN</button>
            </form>
        </div>
    )
}


export default SignIn