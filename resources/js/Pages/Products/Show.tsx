import MainLayout from "@/Components/Layout/MainLayout";
import { Product } from "@/types"
import {Head} from "@inertiajs/react"

interface ProductShowProps{
    product: Product;
    relatedProducts: Product[];
}

const ProductShow = ({product, relatedProducts}: ProductShowProps) => {
  return (
    <MainLayout>
        <Head title={product.name} />
    </MainLayout>
  )
}

export default ProductShow