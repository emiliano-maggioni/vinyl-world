import Item from "components/item/Item";
import React, { useState } from "react";

import classes from "./HomePage.module.css";
import ItemContainer from "components/itemContainer/ItemContainer";
import vinylData from "utilities/vinyls.json"

const Homepage = () => {
    const [dataList, setDataList] = useState(vinylData);
    return (
        <>
            <div className={classes.container}>
                <div className={classes.topbar}>

                </div>
                <ItemContainer >
                    {dataList.map((el) => <Item id={el.id} title={el.title} band={el.band} year={el.year} price={el.price} imgName={el.imgName} />)}
                </ItemContainer>
            </div>
        </>
    );

}

export default Homepage;