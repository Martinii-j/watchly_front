import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Image src="/images/logo.png" alt="logo" width={40} height={40} />
                <span className={styles.logoText}>WATCHLY</span>
            </div>

            <nav className={styles.nav}>
                <a href="/movies">Movies</a>
                <a href="/reviews">Reviews</a>
                <a href="/friends">Friends</a>
                <a href="/my-ratings">My Ratings</a>
            </nav>

            <button className={styles.signIn}>Sign in</button>
        </header>
    );
}
