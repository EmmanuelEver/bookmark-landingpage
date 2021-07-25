import styles from '../styles/Nav.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <nav className={`${styles.nav} ${showMenu ? styles.showingMenu : ""}`}>
            <div className={styles.logo}>
                <img src="/images/logo-bookmark.svg"/>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/features">
                        <a>
                            FEATURES
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/pricing">
                        <a>
                            PRICING
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>
                            CONTACT
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a className={styles.loginBtn}>
                            LOGIN
                        </a>
                    </Link>
                </li>
            </ul>
            <button onClick={() => setShowMenu(!showMenu)} className={styles.hamburgerMenu}>
                <img src={`/images/${showMenu? "icon-close": "icon-hamburger"}.svg`} alt="menu"/>
            </button>
        </nav>
            <MobileMenu show={showMenu} />
        </>
    )
}

export default Nav
