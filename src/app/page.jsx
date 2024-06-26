import Link from "next/link";
import React from "react";
import CardList from "../components/cardList/CardList";
import Category from "../components/categoryList/CategoryList"; 
import Featured from "../components/featured/Featured";
import Menu from "../components/menu/Menu";

const Page = () => {
  return (
    <div>
      <div className={styles.container}>
     <Featured/>
    <CategoryList/>

    <div className={styles.content}>
    <CardList/>
    <Menu/>

    </div>




      </div>
      
    </div>
  );
};

export default Page;
