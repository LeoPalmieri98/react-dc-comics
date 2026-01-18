import comics from "./data/comics";
import ProductCards from "./data/ProductCards";
function Main() {
    return (
        <header id="content-here" className="bg-black text-white text-center">
            <div>
                <div id="bg-jumbotron" >
                    <p className="current-series-label"> Current Series</p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    {comics.map(comics => {
                        return <ProductCards key={comics.id} prodotto={comics} />
                    })}
                </div>
            </div>
            <div className="text-center pb-5">
                <button className="btn btn-load-more ">Load More</button>
            </div>
        </header >
    );
}

export default Main;