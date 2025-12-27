import comics from "./data/comics";
function Main() {
    return (
        <header id="content-here" className="text-white text-center">
            <div>
                <img id="bg-jumbotron" src="/jumbotron.jpg" alt="jumbotronimg" />
                <div class="current-series-label">
                    Current Series
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    {comics.map(comics => {
                        return <div className="col-2 comic-card"><img src={comics.thumb} alt={comics.series} key={comics.id} />
                            <h5>{comics.series}</h5>
                        </div>
                    })}
                </div>
            </div>
            <div class="text-center pb-5">
                <button class="btn btn-load-more ">Load More</button>
            </div>
        </header >
    );
}

export default Main;