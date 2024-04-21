import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const PayPalButton = () => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "10.00", // Set the amount to the price of your product
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            // Handle successful payment
            alert("Transaction completed by " + details.payer.name.given_name);
        });
    };

    return (
        <PayPalScriptProvider
            options={{
                "client-id": "YOUR_PAYPAL_CLIENT_ID",
            }}
        >
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
