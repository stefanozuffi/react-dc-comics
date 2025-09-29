const randomArray = ['bibo', 'frqanco', 'frate']

export default function AppUpperFooter() {
    return(
        <div className="UpperFooter container">
            <ul className="gridList">
                Griglia {randomArray.map(name => (<li>{name}</li>))}
            </ul>
            <div className="bigLogo">
                {/* Empty */}
            </div>
        </div>
    )
}