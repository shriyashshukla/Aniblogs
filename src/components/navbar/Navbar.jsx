import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      <Image src="/facebook.png" alt="facebook" width={24 } height={24}/>
      <Image src="/twitter.png" alt="twitter" width={24 } height={24}/>
      </div>
      <div className={styles.logo}></div>
      <div className={styles.links}>
       
        <Link>about</Link>
        <Link>services</Link>
        <Link>contact</Link>
        <Link>login</Link>

      </div>
      

      
</div>
  )
}

export default Navbar
