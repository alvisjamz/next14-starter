"use client";
import styles from "./Navlink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname == item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default Navlink;
