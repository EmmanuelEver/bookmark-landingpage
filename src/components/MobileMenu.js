import Link from 'next/link';
import styles from '../styles/MobileMenu.module.scss';

const MobileMenu = ({show}) => {
    return (
        <div className={`${styles.menu} ${show && styles.show}`}>
            <div className={styles.navLinks}>
                <Link href="/features">
                    <a>
                        FEATURES
                    </a>
                </Link>
                <Link href="/pricing">
                    <a>
                        PRICING
                    </a>
                </Link>
                <Link href="/contact">
                    <a>
                        CONTACT
                    </a>
                </Link>
                <Link href="/login">
                    <a>
                        Login
                    </a>
                </Link>
            </div>
            <div className={styles.mediaLinks}>
                <a>
                    <img src="/images/icon-facebook.svg" alt="" width={40} heigth={40} />
                </a>
                <a>
                    <img src="/images/icon-twitter.svg" alt="" width={40} heigth={40} />
                </a>
            </div>
        </div>
    )
}

export default MobileMenu
