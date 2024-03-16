import React, { useContext, useEffect, useState } from "react";
import Item from "components/item/Item";
import classes from "./HomePage.module.css";
import ItemContainer from "components/itemContainer/ItemContainer";
import vinylData from "utilities/vinyls.json"
import SearchField from "components/searchField/SearchField";
import SelectField from "components/selectField/SelectField";
import { ItemProps } from "utilities/types";
import { useNavigate } from "react-router-dom";
import { AppContext } from "context/AppContext";

const Homepage = () => {
    const [dataList, setDataList] = useState<ItemProps[] | []>([]);
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [orderType, setOrderType] = useState<string>('');
    const options = [{ value: 'PRICE_DESC', label:'Price descending'},{ value: 'PRICE_ASC', label:'Price ascending'}];
    let navigate = useNavigate();
    const appContext = useContext(AppContext);
    useEffect(()=>{
        let results = [...vinylData];
        if(searchFilter)
            results = results.filter((el)=> el.title.toLowerCase().indexOf(searchFilter) >= 0);

        if(orderType === 'PRICE_DESC')
            setDataList(results.sort((a, b) => b.price - a.price));
        else if(orderType === 'PRICE_ASC')
            setDataList(results.sort((a, b) => a.price - b.price));
        else
            setDataList(results);


    },[searchFilter,orderType]);
    const addItemToCart = (id:number) => {
        appContext.addItemToCart(id);
    };
    const filterResults = (filter:string) => {
        setSearchFilter(filter);
    };
    const handleOrderChange = (orderType:string) => {
        setOrderType(orderType);
    };


    return (
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
                                handleClickDetails={() => navigate("/album/"+el.id)}
                                handleClick={()=> addItemToCart(el.id)}
                            />))
                    )
                    : (<p>No results found.</p>)}
            </ItemContainer>
        </div>
    );

}

export default Homepage;