import comics from "./data/comics";
function Main() {
    return (
        <header id="content-here" className="bg-black text-white text-center py-5">
            <div id="bg-jumbotron"><img id="bg-jumbotron" src="/jumbotron.jpg" alt="jumbotronimg" />
                <div class="current-series-label mb-5">
                    Current Series
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    {comics.map(comics => {
                        return <div className="col-2 comic-card"><img src={comics.thumb} alt={comics.series} />
                            <h5>{comics.series}</h5>
                        </div>
                    })}
                </div>
            </div>
            <div class="text-center mt-5">
                <button class="btn btn-load-more">Load More</button>
            </div>
        </header >
    );
}

export default Main;