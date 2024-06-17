"use client";
// import "tailwindcss";
import { useState, useEffect } from "react";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
    CollectionHook,
    useCollectionData,
} from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/components/firebase";
import Image from "next/image";
import Link from "next/link";
import ProductsList from "@/components/ProductsList";

interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    rating: Float32Array;
    price: number;
    title: string;
}
interface Data {
    description: String;
    img: String;

    price: number;
    title: String;
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    // const q = query(
    //     collection(db, "Products"),
    //     orderBy("createdAt", "desc"),
    //     limit(25)
    // );
    const colref = collection(db, "products");

    const [data, loading, error] = useCollectionData(colref);
    if (data) {
        // console.log(data);
    }
    if (error) {
        console.log(error);
    }
    const productss = data;
    // console.log(productss);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            // .then((json) => console.log(json));
            .then((json) => setProducts(json));
    }, []);
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
        },
    };
    console.log(data);
    return (
        <main className="bg-gray-900">
            {/* // className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"> */}
            <BeakerIcon className="h-6 w-6 text-blue-500">
                <motion.path
                    d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                />
            </BeakerIcon>

            {/* <section className="bg-gray-900 text-white"> */}
            <div className="mx-auto  max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        // className="col-span-8 place-self-centerfrom-green-300 via-blue-500 to-purple-600 text-center sm:text-left justify-self-start"
                    >
                        <h1 className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            Welcome To
                            <span className="sm:block"> Made in Heaven . </span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Get the best quality anime clothing right here.
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* </section> */}
            <section className="flex bg-gray-900 text-white justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-x-16 gap-y-6 ">
                    {products.map((product) => {
                        const id = product.id;
                        const slug = id;
                        // stuff.push(product);

                        // const slug = id.toLowerCase().replace(/\s+/g, "-");
                        return (
                            <div key={product.id}>
                                <Link
                                    href={{
                                        pathname: `/${slug}`,
                                        query: {
                                            title: product.title,
                                            description: product.description,
                                            price: product.price,
                                            // stuffs: stuff[id],
                                            image: product.image,
                                        },
                                    }}
                                    // as={slug}
                                >
                                    <div
                                        className="flex items-center justify-center text-gray-900 border-2 h-64 w-48 rounded-t-lg  border-white product-img bg-cat"
                                        // className=``
                                        style={{
                                            backgroundImage: `url(${product.image})`,
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        {/* <p>{product.title}</p> */}
                                        {/* <Image
                                        height={100}
                                        width={100}
                                        src={product.image}
                                    /> */}
                                    </div>
                                    <div className=" bg-white text-black over-text self-end  w-48">
                                        <span>{product.title}</span>
                                        <span>{product.price}</span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                    {loading ? (
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {error ? (
                        <div className="bg-red-700">
                            <h1>
                                An error occoured please refresh the browser
                            </h1>
                        </div>
                    ) : (
                        <></>
                    )}
                    {data ? (
                        productss.map((product) => {
                            const id = product.title;
                            const slug = id;
                            // stuff.push(product);

                            // const slug = id.toLowerCase().replace(/\s+/g, "-");
                            return (
                                <div key={product.title}>
                                    <Link
                                        href={{
                                            pathname: `/${slug}`,
                                            query: {
                                                title: product.title,
                                                description:
                                                    product.description,
                                                price: product.price,
                                                // stuffs: stuff[id],
                                                image: `/products/${product.img}`,
                                                // image: product.img,
                                            },
                                        }}
                                        // as={slug}
                                    >
                                        <div
                                            className="flex items-center justify-center text-gray-900 border-2 h-64 w-48 rounded-t-lg  border-white product-img bg-cat"
                                            // className=``
                                            style={{
                                                backgroundImage: `url("/products/${product.img}")`,
                                                // backgroundImage: `url(${product.img})`,
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                            }}
                                        >
                                            {/* <p>{product.title}</p> */}
                                            {/* <Image
                                                alt="img failed to load"
                                                height={500}
                                                width={500}
                                                layout="responsive"
                                                src={product.img}
                                            /> */}
                                        </div>
                                        <div className=" bg-white text-black over-text self-end  w-48">
                                            <span>{product.title}</span>
                                            {/* <span>{product.price}</span> */}
                                        </div>
                                    </Link>
                                </div>
                            );
                        })
                    ) : (
                        <></>
                    )}

                    {}
                    {/* {data ? console.log(data) : (<></>)} */}
                </div>
            </section>
            <ProductsList></ProductsList>
        </main>
    );
}

// import Image from "next/image";
// import Link from "next/link";

//   ) : (
//       <></>
//   )}
// export default function Home() {
//     return (
//         <main>
//             <header className="bg-gray-800 text-white py-4">
//                 <Link href="google.com">
//                     <span>brooo</span>
//                 </Link>
//                 <h1 className="text-2xl font-bold text-center">
//                     Welcome to Our Clothing Shop
//                 </h1>
//             </header>
//         </main>
//     );
// }
