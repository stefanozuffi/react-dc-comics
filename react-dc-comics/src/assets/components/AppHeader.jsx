import DC_Logo from '../img/dc-logo.png'
import navbar from '../../data/navbar'

export default function AppHeader() {
    return (
        <header className='container'>
        <img src={DC_Logo} alt="Small-Logo"/>
        <nav>
            {navbar.map(item => (<a href={item.href} className={item.is_active && 'active'}>{item.text}</a>))}
        </nav>
    </header>
    )
   
}