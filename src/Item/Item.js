import { useEffect, useState } from "react";
import "../App.css";

function Item({ match }) {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const data = await fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.itemId}`
        );
        const item = await data.json();
        console.log(item.data.item);
        console.log(Object.entries(item.data.item));
        setItem(item.data.item);
    };

    return (
        <div>
            {Object.entries(item).length > 0 ? (
                <div>
                    <h1>{item.name}</h1>
                    <img src={item.images.icon} alt="" />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Item;
