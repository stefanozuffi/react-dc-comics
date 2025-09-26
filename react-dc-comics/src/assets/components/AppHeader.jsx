import DC_Logo from '../img/dc-logo.png'

export default function AppHeader() {
    return (
        <header className='container'>
        <img src={DC_Logo} alt="Small-Logo"/>
        <nav>
            <a href="#">CHARACTERS</a>
            <a href="#" className="active">COMICS</a>
            <a href="#">MOVIES</a>
            <a href="#">TV</a>
            <a href="#">GAMES</a>
            <a href="#">COLLECTIBLES</a>
            <a href="#">VIDEOS</a>
            <a href="#">FANS</a>
            <a href="#">NEWS</a>
            <a href="#">SHOPS</a>
        </nav>
    </header>
    )
   
}