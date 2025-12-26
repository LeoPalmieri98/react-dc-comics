import comics from "./data/comics";
function Main() {
    return (
        <header id="content-here" className="bg-black text-white text-center py-5">
            <div>
                <img id="bg-jumbotron" src="/jumbotron.jpg" alt="jumbotronimg" />
                <div>
                    {comics.map(comics => {
                        return <div><img src={comics.thumb} alt={comics.series} />
                            <h5>{comics.series}</h5>
                        </div>
                    })}
                </div>
            </div>
        </header >
    );
}

export default Main;