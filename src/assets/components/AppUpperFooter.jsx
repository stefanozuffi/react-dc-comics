import menu from "../../data/footerMenu"

export default function AppUpperFooter() {
    return(
        <div className="UpperFooter container">
            <div className="row">
            {menu.map(ul => {
                return (
                    <div className="col" key={ul.id}>
                        <h5>{ul.title}</h5>
                        <ul>
                            {ul.links.map(item => (
                                <li key={item.id}> 
                                    <a href={item.href}>{item.text}</a>
                                </li>))}
                        </ul>
                    </div>
                )
            })}
            </div>
            <div className="bigLogo">
                {/* Empty */}
            </div>
        </div>
    )
}