"use client";
import Image from "next/image";

// import PayPalButton from "@/components/PayPalButton";
import { useRouter } from "next/navigation";
import { TextInput, Navbar, NavbarBrand, NavbarLink } from "flowbite-react";
import { useSearchParams } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {  XMarkIcon } from "@heroicons/react/24/solid";

// import Checkout from "@/components/Checkout";
import { useState, useEffect } from "react";
import Form from "@/components/form";
// interface Params {
//     title: string;
//     price: string;
//     description: string;
//     image: string;
// }
const initialOptions = {
    "client-id":
        "ATD8n3IfbhNYPl7czkKaVCsPnBJ31gWLMLqQ8YViGYmUZK4BLrXQEHbor9h0kJCM_YKnUN9Y88At4yvm",
    "currency": "USD",
    "intent": "capture",
};
function ProductDetails() {
    const [eff, setEff] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
    });

    const [showForm, setForm] = useState(false);
    const title = useSearchParams().get("title");
    const price = useSearchParams().get("price");
    const description = useSearchParams().get("description");
    const image = useSearchParams().get("image");

    return (
        <>
            <section className="bg-gray-900 w-100 h-screen">
                {showForm ? (
                    <div className="flex flex-col items-center justify-center backdrop-blur-sm  w-screen h-screen  fixed">
                        <div className="flex flex-col items-center justify-center w-full"><XMarkIcon className="justify-self-end h-6 w-6 text-blue-500" onClick={() => setForm(false)}></XMarkIcon></div>
                        <Form price={price} title={title}/>
                    </div>
                ) : (
                    <></>
                )}
                <Navbar fluid rounded className="bg-gray-900"> <NavbarLink href="./"><span className="text-white">Home</span></NavbarLink> </Navbar>
                <div className="container mx-auto px-4 py-8">
                    <div className="h-5/6 bg-white  rounded-lg shadow-md overflow-hidden">
                        <div className="flex  flex-col sm:flex-row ">
                            <div className="w-3/4">
                                <Image
                                    alt="product image"
                                    src={`${image}`}
                                    layout="responsive"
                                    objectFit="cover"
                                    height={100}
                                    width={100}
                                />
                                {/* <img src="https://via.placeholder.com/400" alt="Product Image" className="w-full"> */}
                            </div>
                            <div className="w-100 p-8">
                                <h1 className="text-3xl font-bold mb-4">
                                    {title}
                                </h1>
                                <p className="text-gray-700 text-lg mb-4">
                                    {description}
                                </p>
                                <div className="flex items-center mb-4">
                                    <span className="text-gray-700 mr-2">
                                        Price:
                                    </span>
                                    <span className="text-green-600 font-semibold">
                                        ${price}
                                    </span>
                                </div>
                                <button>

                                {/* <PayPalScriptProvider options={initialOptions}>
                                    <PayPalButtons></PayPalButtons>
                                </PayPalScriptProvider> */}
                                    {/* <Checkout price={price}></Checkout> */}
                                </button>

                                <button
                                    onClick={() => {
                                        setForm((prev) => !prev);
                                    }}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{description}</h1>
            {stuff.map} */}
        </>
    );
}

export default ProductDetails;
