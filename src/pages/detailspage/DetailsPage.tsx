import React, { useState, useEffect } from "react";

import classes from "./DetailsPage.module.css";
import vinylData from "utilities/vinyls.json";
import { Item } from "utilities/types";
import ItemDetails from "components/itemDetails/ItemDetails";

const Detailspage = () => {
    const [dataList, setDataList] = useState<Item | null>(null);
    const itemId = 10;
    useEffect(()=>{
        const item = vinylData.filter((el:Item) => el.id == itemId);
        if(item.length > 0)
            setDataList(item[0]);
    },[]);

    return ((dataList ? <ItemDetails id={dataList.id} title={dataList.title} band={dataList.band} year={dataList.year} price={dataList.price} imgName={dataList.imgName} desc={dataList.desc} />
         : <>Not found</>)
    );
}

export default Detailspage;