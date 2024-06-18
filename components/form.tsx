import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { db } from "./firebase";
import data from "../components/place.json";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Country, State, City } from "country-state-city";
// import Checkout from "./Checkout";
import Checkout from "./Checkout";
import { title } from "process";
const initialOptions = {
    clientId:
        "ATD8n3IfbhNYPl7czkKaVCsPnBJ31gWLMLqQ8YViGYmUZK4BLrXQEHbor9h0kJCM_YKnUN9Y88At4yvm",
    currency: "USD",
    intent: "capture",
};
interface Country {
    name: string;
    isocode: string;
}
interface Prop {
    price: string;
}
export default function Form(props) {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        zipcode: "",
        phone: "",
        address: "",
        city: " ",
        state: "",
        country: " ",
        title: props.title,
    });
    const [effect, setEffect] = useState(false);
    const [countryCode, setCountryCode] = useState("");
    const [stateCode, setStateCode] = useState();
    const countrydata = data.place;
    function handleApprove(orderId) {
        setEffect(true);
        console.log(effect);
    }
    // console.log(Country.getAllCountries());
    // useEffect(() => {
    //     setCountryCode(form.count.slice(-3));
    // }, [effect]);

    const states = State.getStatesOfCountry(form.country).map((state) => (
        <>
            <option value={state.isoCode} key={state.isoCode}>
                {state.name} - {state.isoCode}
            </option>
        </>
    ));
    const cities = City.getCitiesOfState(form.country, form.state).map(
        (city) => (
            <>
                <option value={city.name} key={city.name}>
                    {city.name}
                </option>
            </>
        )
    );
    async function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        //  try {
        //     event.preventDefault();

        // await addDoc(collection(db, "Addresses"), {
        //     fname: form.fname,
        //     lname: form.lname,
        //     email: form.email,
        //     zipcode: form.zipcode,
        //     phone: form.phone,
        //     address: form.address,
        //     city: form.city,
        //     state: form.state,
        //     country: form.country,
        // });
        alert(`Transaction completed by `);
        setEffect((prev) => !prev);
        // return <Checkout></Checkout>
        // await setDoc(doc(db, "Addresses"), {
        //     fname: form.fname,
        //     lname: form.lname,
        //     email: form.email,
        //     zipcode: form.zipcode,
        //     phone: form.phone,
        //     address: form.address,
        //     city: form.city,
        //     state: form.state,
        //     country: form.country,
        // });

        //     setForm((texts) => ({
        //         ...texts,
        //         text: "",
        //     }));
        // } catch {
        //     localStorage.clear();
        //     window.location.reload();
        // }
    }

    // const countries = data.place.map((country) => (
    //     <option  onChange={handleChange}>{country}</option>
    // ));
    // const x = data.
    function handleChange(event: { target: { name: any; value: any } }) {
        setForm((prevform) => {
            return {
                ...prevform,
                [event.target.name]: event.target.value,
            };
        });

        // console.log(props.price);
    }
    // const price = price

    return (
        <>
            <div
                className="flex items-center justify-center bg-white overflow-y-scroll w-11/12 h-full rounded-md backdrop-blur-md form-popup"
                id="myForm"
            >
                <form
                    className=" w-11/12 my-6 flex items-center justify-center max-w-md flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="max-w-md col-span-4">
                            <span>Select your country</span>
                            <Select
                                onChange={handleChange}
                                id="countries"
                                name="country"
                                value={form.country}
                                required
                            >
                                {Country.getAllCountries().map((country) => (
                                    <>
                                        {countrydata.includes(country.name) ? (
                                            <option
                                                key={country.isoCode}
                                                value={country.isoCode}
                                            >
                                                {country.name} -{" "}
                                                {country.isoCode}
                                            </option>
                                        ) : null}
                                    </>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="grid gap-4 gap-x-8 grid-cols-4">
                        <span className="col-span-4">Contact information</span>
                        <div className="col-span-2">
                            {/* <span>contact info</span> */}
                            {/* <div className="mb-2 block">
                                <Label htmlFor="fname" value="contact info" />
                            </div> */}
                            <TextInput
                                onChange={handleChange}
                                name="fname"
                                value={form.fname}
                                id="fname"
                                type="text"
                                placeholder="firstname"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                onChange={handleChange}
                                name="lname"
                                value={form.lname}
                                id="lname"
                                type="text"
                                placeholder="lastname"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                onChange={handleChange}
                                name="email"
                                value={form.email}
                                id="email"
                                type="email"
                                placeholder="email"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <TextInput
                                onChange={handleChange}
                                name="phone"
                                value={form.phone}
                                type="number"
                                id="phone"
                                placeholder="phone"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid gap-4 gap-x-8 grid-cols-6">
                        <span>Address</span>
                        <div className="col-span-6  ">
                            {/* <div className="mb-2 block">
                                <Label htmlFor="address" value="Address" />
                            </div> */}
                            <TextInput
                                onChange={handleChange}
                                id="address"
                                type="text"
                                sizing="lg"
                                name="address"
                                value={form.address}
                                placeholder="House number, Street name"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <Select
                                onChange={handleChange}
                                id="states"
                                name="state"
                                value={form.state}
                                required
                            >
                                {states}
                            </Select>
                            {/* <TextInput
                                onChange={handleChange}
                                id="state"
                                type="text"
                                placeholder="state"
                                required
                            /> */}
                        </div>
                        <div className="col-span-2">
                            <Select
                                onChange={handleChange}
                                id="cities"
                                name="city"
                                value={form.city}
                                required
                            >
                                {cities}
                            </Select>
                            {/* <TextInput
                                onChange={handleChange}
                                id="state"
                                type="text"
                                placeholder="state"
                                required
                            /> */}
                        </div>
                        {/* <div className="col-span-2">
                            <TextInput
                                onChange={handleChange}
                                id="city"
                                type="text"
                                placeholder="city"
                                required
                            />
                        </div> */}
                        <div className="col-span-2">
                            <TextInput
                                onChange={handleChange}
                                name="zipcode"
                                value={form.zipcode}
                                id="zipcode"
                                type="text"
                                placeholder="zipcode"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <PayPalScriptProvider options={initialOptions}>
                            {/* <Checkout price={props.price}></Checkout> */}
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        intent: "CAPTURE",
                                        purchase_units: [
                                            {
                                                amount: {
                                                    currency_code: "USD",
                                                    // value: "56",
                                                    value: `${props.price}`,
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={async (data, actions) => {
                                    const details =
                                        await actions.order.capture();
                                    const name = details.payer.name.given_name;
                                    alert(`Transaction completed by ${name}`);
                                    handleApprove(data.orderID);
                                }}
                            ></PayPalButtons>
                        </PayPalScriptProvider>
                    </div>
                    {effect ? (
                        <Button className="btn " type="submit">
                            Submit
                        </Button>
                    ) : (
                        <Button
                            className="btn cursor-not-allowed opacity-50"
                            type="submit"
                        >
                            Submit
                        </Button>
                    )}
                </form>
            </div>
        </>
    );
}

// <form action="#" method="post">
//     <div className="gap-7 grid grid-cols-6 grid-rows-5">
//         <div className="col-span-3 mb-4">
//             <label
//                 htmlFor="fname"
//                 className="block font-medium"
//             >
//                 First Name
//             </label>
//             <input
//                 type="text"
//                 id="fname"
//                 name="firstname"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 required
//             />
//         </div>
//         <div className="col-span-3 mb-4">
//             <label
//                 htmlFor="lname"
//                 className="block font-medium"
//             >
//                 Last Name
//             </label>
//             <input
//                 type="text"
//                 id="lname"
//                 name="lastname"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 required
//             />
//         </div>
//         <div className="mb-4">
//             <label
//                 htmlFor="email"
//                 className="block font-medium"
//             >
//                 Email
//             </label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 required
//             />
//         </div>
//         <div className="mb-4">
//             <label
//                 htmlFor="address"
//                 className="block font-medium"
//             >
//                 Address
//             </label>
//             <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 required
//             />
//         </div>
//         <div className="mb-4">
//             <label htmlFor="city" className="block font-medium">
//                 City
//             </label>
//             <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 className="form-input mt-1 block w-full"
//                 required
//             />
//         </div>
//         <div className="mb-4">
//             <label
//                 htmlFor="country"
//                 className="block font-medium"
//             >
//                 Country
//             </label>
//             <select
//                 id="country"
//                 name="country"
//                 className="form-select mt-1 block w-full"
//                 required
//             >
//                 <option value="">Select Country</option>
//                 <option value="USA">USA</option>
//                 <option value="Canada">Canada</option>
//                 <option value="UK">UK</option>
//                 {/* <!-- Add more options as needed --> */}
//             </select>
//         </div>
//         <div className="mb-4">
//             <label htmlFor="zip" className="block font-medium">
//                 Zip Code
//             </label>
//             <input
//                 type="text"
//                 id="zip"
//                 name="zip"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 required
//             />
//         </div>
//         <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//         >
//             Place Order
//         </button>
//     </div>
// </form>
