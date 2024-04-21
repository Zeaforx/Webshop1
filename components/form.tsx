import { Button, Checkbox, Label, TextInput, Select } from "flowbite-react";
import { db } from "./firebase";
import data from "../components/place.json";

import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
export default function Form() {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        zipcode: "",
        phone: "",
        address: "",
        city: " ",
    });
    //  async function handleSubmit(event) {
    //      try {
    //         event.preventDefault();

    //         await addDoc(collection(db, "messages"), {
    //             text: form.text,
    //             createdAt: serverTimestamp(),
    //             uid: props.uid,
    //             photoURL: props.photoURL,
    //         });

    //         setForm((texts) => ({
    //             ...texts,
    //             text: "",
    //         }));
    //     } catch {
    //         localStorage.clear();
    //         window.location.reload();
    //     }
    // }

    // const countries = data.place.map((country) => (
    //     <option  onChange={handleChange}>{country}</option>
    // ));
    // const x = data.
    function handleChange(event) {
        setForm((prevform) => {
            return {
                ...prevform,
                [event.target.name]: event.target.value,
            };
        });
        console.log(event.target.value);
    }
    return (
        <>
            <div
                className="flex items-center justify-center bg-white overflow-y-scroll w-4/5 h-full rounded-md backdrop-blur-md form-popup"
                id="myForm"
            >
                <form className=" w-4/5 my-6 grid grid-cols-6  max-w-md flex-col gap-4">
                    <div className="col-span-3">
                        <div className="mb-2 block">
                            <Label htmlFor="fname" value="Firstname" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            name="fname"
                            value={form.fname}
                            id="fname"
                            type="text"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div className="col-span-3">
                        <div className="mb-2 block">
                            <Label htmlFor="lname" value="Lastname" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            name="lname"
                            value={form.lname}
                            id="lname"
                            type="text"
                            required
                        />
                    </div>
                    <div className="col-span-4">
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="email" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            name="email"
                            value={form.email}
                            id="email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="col-span-5  ">
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="Address" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            id="address"
                            type="text"
                            sizing="lg"
                            name="address"
                            value={form.address}
                            required
                        />
                    </div>
                    <div className="col-span-4">
                        <div className="mb-2 block">
                            <Label htmlFor="city" value="City" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            id="city"
                            type="text"
                            required
                        />
                    </div>
                    <div className="col-span-4">
                        <div className="mb-2 block ">
                            <Label htmlFor="zipcode" value="zipcode" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            name="phone"
                            value={form.zipcode}
                            id="zipcode"
                            type="text"
                            required
                        />
                    </div>
                    <div className="col-span-4">
                        <div className="mb-2 block ">
                            <Label htmlFor="phone" value="phone" />
                        </div>
                        <TextInput
                            onChange={handleChange}
                            name="phone"
                            value={form.phone}
                            type="number"
                            id="phone"
                            required
                        />
                    </div>
                    <div className="max-w-md col-span-4">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="countries"
                                value="Select your country"
                            />
                        </div>
                        <Select id="countries" required>
                            {countries}
                        </Select>
                    </div>

                    <Button className="col-span-6" type="submit">
                        Submit
                    </Button>
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
