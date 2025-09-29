import ProductCard from "./ProductCard"
import comics from "../../data/comics"

export default function AppMainContent() {
    return(

        
        <div className="Content-C">
    
            <div className="container">
                <div className="row">

                    {comics.map(comic => {
                        return (
                            <div className="col-4">
                                <ProductCard 
                                image={comic.thumb}
                                title={comic.title}
                                description={comic.description}
                                artists={comic.artists}
                                writers={comic.writers}/>
                            </div>
                        )
                    })}

                    
                </div>
            </div>
            
        </div>
    )
    
}