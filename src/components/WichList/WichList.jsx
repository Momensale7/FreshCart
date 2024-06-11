import { useContext, useEffect, useState } from "react";
import { WishContext } from "../../Context/WishContext";
import Wish from "../Wish/Wish";

export default function WichList() {
  const {getallwish }= useContext(WishContext)
  let [wishData,setWishData]=useState()
  // setData(getallwish)
  async function getAllWish(){
    const {data}= await getallwish();
    console.log(data)
    setWishData(data)
  }
  useEffect(()=>{
    getAllWish()
  },[])
  return wishData?.map((wishData,index)=>{
    return <Wish  key={index } getAllWish={getAllWish} wishData={wishData}/>
  })
  
}
