"use client";
import Link from "next/link";
import Navlink from "@/components/navbar/navlink/Navlink";
import { useState } from "react";
import styles from '@/components/navbar/links/links.module.css'

const Links = () => {

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  const userSession = false;
  const isAdmin = true;

  return (
    <div className={styles.container}>

        {/**Desktop view */}
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}

        {userSession ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

    {/**Mobile view */}
      <button  className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Links;
