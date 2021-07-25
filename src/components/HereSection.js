import Image from 'next/image';
import styles from '../styles/HeroSection.module.scss';

const HereSection = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.hero}>
                <div className={styles.hero__image}>
                    <img src="/images/illustration-hero.svg" alt="" /> 
                </div>
                <div className={styles.hero__content}>
                    <h1>
                        A Simple Bookmark Manager
                    </h1>
                    <p>
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div>
                        <button className={styles.primary}>
                            Get it on Chrome
                        </button>
                        <button>
                            Get it on Firefox
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HereSection;
