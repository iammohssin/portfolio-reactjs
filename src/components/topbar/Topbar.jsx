import "./topbar.scss"



export default function Topbar({menuOpen , setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">genius.</a>
                <div className="itenContainer">
                <span>+92 323 1411480</span>
                </div>
                <div className="itenContainer">
                <span>muhsanjavaid@gmail.com</span>
                </div>
            </div>
            <div className="right">
               <div className="humburger" onClick={()=> setMenuOpen(!menuOpen)}>
                   <span className='line1'></span>
                   <span className='line2'></span>
                   <span className='line3'></span>
               </div>
            </div>

            </div>
           
        </div> 
    )
}
