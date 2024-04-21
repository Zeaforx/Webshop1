"use client";
import Image from "next/image";

// import PayPalButton from "@/components/PayPalButton";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Checkout from "@/components/Checkout";
import { useState, useEffect } from "react";
import Form from "@/components/form";
const initialOptions = {
    clientId:
        "ATD8n3IfbhNYPl7czkKaVCsPnBJ31gWLMLqQ8YViGYmUZK4BLrXQEHbor9h0kJCM_YKnUN9Y88At4yvm",
    currency: "USD",
    intent: "capture",
};
function ProductDetails() {
    const [eff, setEff] = useState();

    const [showForm, setForm] = useState(false);
    const title = useSearchParams().get("title");
    const price = useSearchParams().get("price");
    const description = useSearchParams().get("description");
    const image = useSearchParams().get("image");
    const stuff = useSearchParams().get("stuffs");
    // console.log(stuff);
    useEffect(() => {
        // fetch("https://countriesnow.space/api/v0.1/countries/population")
        //     .then((response) => response.json())
        //     .then((json) => setEff(json))
        //     .catch((error) => console.error(error));
        // console.log(eff);
        fetch("https://api.countrystatecity.in/v1/countries")
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    }, []);
    function displayForm() {
        if (showForm) {
            return <Form />;
        }
    }
    return (
        <>
            <section className="bg-gray-900 w-100 h-100">
                {showForm ? (
                    <div className="flex items-center justify-center backdrop-blur-sm  w-screen h-screen  fixed">
                        <Form />
                    </div>
                ) : (
                    <></>
                )}
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="flex">
                            <div className="w-1/2">
                                <Image
                                    alt="product image"
                                    src={`/${image}`}
                                    layout="responsive"
                                    objectFit="cover"
                                    height={100}
                                    width={100}
                                />
                                {/* <img src="https://via.placeholder.com/400" alt="Product Image" className="w-full"> */}
                            </div>
                            <div className="w-1/2 p-8">
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
                                    <PayPalScriptProvider
                                        options={initialOptions}
                                    >
                                        <Checkout price={price}></Checkout>
                                    </PayPalScriptProvider>
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
