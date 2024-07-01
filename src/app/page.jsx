import Link from "next/link";
import React from "react";
import CardList from "../components/cardList/CardList";
import CategoryList from "../components/categoryList/CategoryList";
import Featured from "../components/featured/Featured";
import Menu from "../components/menu/Menu";
import styles from './home.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <div>
     <Featured/>
    <CategoryList/>

    <div >
    <CardList/>
    <Menu/>

    </div>




      </div>
      
    </div>
  );
};

export default Page;
