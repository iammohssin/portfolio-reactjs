import "./intro.scss"

export default function Intro() {
    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="men"/>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I am</h2>
                    <h1>Mohsin Javaid</h1>
                    <h3>Freelance<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down"></img>
                </a>
            </div>
        </div>
    )
}
