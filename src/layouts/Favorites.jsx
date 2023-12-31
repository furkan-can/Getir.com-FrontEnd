import { useEffect, useState } from "react"
import Title from "../components/Title"
import FavoritePoductsData from "@/api/favorite-products.json"
import Product from "../components/Product";

const Favorites = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([...FavoritePoductsData]);

    useEffect(() => {
        setFavoriteProducts(FavoritePoductsData);
    }, []);

    return (
        <div className="container mx-auto max-w-7xl">
            <Title title="Favoriler" />
            <div className="grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-0.1 rounded-lg overflow-hidden">
                {!favoriteProducts.length && <div>Yükleniyor...</div>}
                {
                    favoriteProducts.length && favoriteProducts.map((product, index) => (
                        <Product key={index} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites
