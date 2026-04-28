import Link from "next/link";
import Image from "next/image";
import Button from "../../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
    {
        name: "SportOn Product 1",
        category: "Running",
        price: 450000,
        imgUrl: "./product-3.png",
    },
    {
        name: "SportOn Product 2",
        category: "Running",
        price: 250000,
        imgUrl: "./product-2.png",
    },
    {
        name: "SportOn Product 3",
        category: "Running",
        price: 230000,
        imgUrl: "./product-1.png",
    },
    {
        name: "SportOn Product 4",
        category: "Running",
        price: 440000,
        imgUrl: "./product-4.png",
    },
    {
        name: "SportOn Product 5",
        category: "Running",
        price: 550000,
        imgUrl: "./product-5.png",
    },
    {
        name: "SportOn Product 6",
        category: "Running",
        price: 650000,
        imgUrl: "./product-6.png",
    },
    {
        name: "SportOn Product 7",
        category: "Running",
        price: 750000,
        imgUrl: "./product-7.png",
    },
    {
        name: "SportOn Product 8",
        category: "Running",
        price: 850000,
        imgUrl: "./product-8.png",
    }
];

const Products = () => {
    return (
        <section id="product-section" className="container mx-auto mt-32">
           <h2 className="font-bold italic text-4xl text-center mb-11">
            <span className="text-primary">OUR</span> PRODUCTS
           </h2>

           <div className="grid grid-cols-4 gap-5">
            {
                productList.map((product, index) => (
                 <Link href="#" key={index} className="p-1.5 bg-white hover:drop-shadow-xl duration-300 ">
                   <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                    <Image src={`/product/${product.imgUrl}`} width={300} height={300} alt={product.name} className="aspect-square object-contain" />
                    <Button size="small" className="!p-2 absolute right-3 top-3"><FiPlus size={20} /></Button>
                   </div>
                   <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                   <div className="flex justify-between mb-8">
                        <div className="text-gray-500">{product.category}</div>
                        <div className="font-medium text-primary">{new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumSignificantDigits: 3,
                        }).format(product.price)}</div>
                   </div>
                 </Link>
                ))
            }
           </div>
        </section>
    )
};

export default Products;