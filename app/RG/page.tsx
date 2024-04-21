"use client";
// export default function RC() {
//     return (
//         <body className="bg-gray-100 min-h-screen flex items-center justify-center">
//             <div className="max-w-lg p-8 bg-white rounded-lg shadow-md text-center">
//                 <h1 className="text-3xl font-bold mb-4">
//                     Thank You for Your Purchase!
//                 </h1>
//                 <p className="text-lg mb-4">
//                     We are grateful for your support and hope you enjoy your new
//                     items.
//                 </p>
//                 <p className="text-lg mb-4">
//                     If you have any questions or concerns, please feel free to{" "}
//                     {/* <a href="contact.html" className="text-blue-500">
//                         contact us
//                     </a> */}
//                     .
//                 </p>
//                 <p className="text-lg">Best regards,</p>
//                 <p className="text-lg">The [Your Company Name] Team</p>
//             </div>
//         </body>
//     );
// }
import { Country, State } from "country-state-city";
import { useEffect, useState } from "react";
// import Dropdown from './Commons/Dropdown'

function RC() {
    const [datas, setData] = useState();
    const [countryISO, setCountryISO] = useState();

    const countrymetadatas = Country.getAllCountries().map((country) => (
        <option
            onClick={() => setCountryISO(country.isoCode)}
            key={country.isoCode}
        >
            {country.name} - {country.isoCode}
        </option>
    ));
    // const statemetadatas = State.getStatesOfCountry().map((country) => (
    //     <option key={country.isoCode}>
    //         {country.name} - {country.isoCode}
    //     </option>
    // ));
    console.log(countryISO);

    const statemetadata = State.getAllStates().map((state) => ({
        value: state.name,
        displayValue: `${state.name} - ${state.isoCode}`,
    }));

    console.log(countryISO);
    return (
        <form>
            <select>{countrymetadatas}</select>
            {/* <select>{statedata}</select> */}
        </form>
    );
}

export default RC;
