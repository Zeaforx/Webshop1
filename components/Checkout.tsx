// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// function Checkout() {
//     // const initialOptions = {
//     //     clientId:
//     //         "ATD8n3IfbhNYPl7czkKaVCsPnBJ31gWLMLqQ8YViGYmUZK4BLrXQEHbor9h0kJCM_YKnUN9Y88At4yvm",
//     //     currency: "USD",
//     //     intent: "capture",
//     // };
//     return (
//         <div></div>
//         // <PayPalScriptProvider options={initialOptions}>
//         //     <Checkout price={100}></Checkout>
//         // </PayPalScriptProvider>
//     );
// }

// export default Checkout;

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useState } from "react";

function Checkout(props) {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const price = `${props.price}`;
    // console.log(price + " checkoutcode");

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        // value: "56",
                        value: price,
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    };

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };
    return (
        <>
            {isPending ? (
                <p>LOADING...</p>
            ) : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) =>
                            onCreateOrder(data, actions)
                        }
                        onApprove={(data, actions) =>
                            onApproveOrder(data, actions)
                        }
                    />
                </>
            )}
        </>
    );
}

export default Checkout;
