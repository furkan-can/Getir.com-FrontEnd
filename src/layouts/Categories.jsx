import { useEffect, useState } from "react"
import Category from "@/components/Category"
import categoryData from "@/api/categories.json"
import Title from "../components/Title";


const Categories = () => {
    const [categories, setCategories] = useState([...categoryData]);

    useEffect(() => {
        setCategories(categoryData);
    }, []);

    return (
        <div className="bg-white py-10 shadow-sm">
            <div className="container mx-auto max-w-7xl">
                <Title title="Kategoriler" />
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
                    {!categories.length && <div>Yükleniyor...</div>}
                    {
                        categories && categories.map(
                            (category, index) => (
                                <Category key={index} category={category} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
