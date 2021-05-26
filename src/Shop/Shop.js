import { useState, useEffect } from "react";
import "./Shop.css";

import { Link } from "react-router-dom";

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            "https://fortnite-api.theapinetwork.com/upcoming/get"
        );
        const jsonData = await data.json();

        setItems(jsonData.data);
    };

    return (
        <div className="Shop">
            <h1>Shop page</h1>
            <div className="items">
                {items.map((item) => (
                    // <div key={item.itemId}>
                    <Link
                        to={`shop/${item.itemId}`}
                        className="item-link"
                        key={item.itemId}
                    >
                        {item.item.name}
                    </Link>
                    // </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;
