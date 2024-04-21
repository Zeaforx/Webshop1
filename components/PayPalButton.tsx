// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
// const PayPalButton = () => {
//     const createOrder = (data: any, actions: { order: { create: (arg0: { purchase_units: { amount: { value: string; }; }[]; }) => any; }; }) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     amount: {
//                         value: "10.00", // Set the amount to the price of your product
//                     },
//                 },
//             ],
//         });
//     };

//     const onApprove = async (data: any, actions: { order: { capture: () => Promise<any>; }; }) => {
//         const details = await actions.order.capture();
//         // Handle successful payment
//         alert("Transaction completed by " + details.payer.name.given_name);
//     };

//     return (
//         <PayPalScriptProvider
//             options={{
//                 "clientId": "YOUR_PAYPAL_CLIENT_ID",
//             }}
//         >
//             <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
//         </PayPalScriptProvider>
//     );
// };

// export default PayPalButton;
