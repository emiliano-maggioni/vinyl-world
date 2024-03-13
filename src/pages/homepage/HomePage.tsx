import Item from "components/item/Item";
import React, { useEffect, useState } from "react";

import classes from "./HomePage.module.css";
import ItemContainer from "components/itemContainer/ItemContainer";
import vinylData from "utilities/vinyls.json"
import SearchField from "components/searchField/SearchField";
import SelectField from "components/selectField/SelectField";
import { ItemProps } from "utilities/types";

const Homepage = () => {
    const [dataList, setDataList] = useState<ItemProps[] | []>([]);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [orderType, setOrderType] = useState<string>('');
    const options = [{ value: 'PRICE_DESC', label:'Price descending'},{ value: 'PRICE_ASC', label:'Price ascending'}];
    useEffect(()=>{
        let results = [...vinylData];
        if(searchFilter){
            results = results.filter((el)=> el.title.toLowerCase().indexOf(searchFilter) >= 0);
            setDataList(results);
        }
        else{
            setDataList(results);
        }

    },[searchFilter]);
    const addItemToCart = (id:number) => {
        console.log(id);
    };
    const filterResults = (filter:string) => {
        setSearchFilter(filter);
    };
    const handleOrderChange = (orderType:string) => {
        setOrderType(orderType);
    };


    return (
        <>
            <div className={classes.container}>
                <div className={classes.topbar}>
                    <SearchField handleChange={filterResults} /><SelectField options={options} name="orderby" placeholder="Order by" handleOrderChange={handleOrderChange} />
                </div>
                <ItemContainer>
                    {(dataList.length > 0) ? (
                        dataList.map((el:ItemProps) => (
                                <Item
                                    key={el.id}
                                    id={el.id}
                                    title={el.title}
                                    band={el.band}
                                    year={el.year}
                                    price={el.price}
                                    imgName={el.imgName}
                                    handleClick={()=> addItemToCart(el.id)}
                                />))
                        )
                        : (<p>No results found.</p>)}
                </ItemContainer>
            </div>
        </>
    );

}

export default Homepage;