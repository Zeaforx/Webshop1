import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function ProductsList() {
    const q = query(
        collection(db, "Product List"),
        // orderBy("createdAt", "desc"),
        limit(25)
    );
    const colref = collection(db, "Product List");
    const [data, loading, error] = useCollectionData(q);
    if (loading) {
        return <div className="loader"></div>;
    }
    if (error) {
        return <h1>{error.message}</h1>;
    }
    console.log(data);
    // const map = data.map((product) => {
    //     const uid = product.uid;
    //     const text = product.text;
    //     const key = product.createdAt;

    //     return (
    //         <div >

    //             <h1></h1>
    //             <h1></h1>
    //             <h1></h1>
    //             <h1></h1>
    //         </div>
    //     );
    // });
    console.log(data);
    return (
        <>
            <h1>wonks</h1>
        </>
    );
}

export default ProductsList;
