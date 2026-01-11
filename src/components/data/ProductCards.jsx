function ProductCards(props) {

    const comics = props.prodotto;
    return <div className="col-2 comic-card" key={comics.id}><img src={comics.thumb} alt={comics.series} />
        <h5>{comics.series}</h5>
    </div>
}

export default ProductCards;