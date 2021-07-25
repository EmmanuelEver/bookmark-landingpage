import styles from "../styles/DownloadSection.module.scss"

const DownloadSection = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.download}>
                <div className={styles.download__header}>
                    <h2>
                        Download the extension
                    </h2>
                    <p>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
                    </p>
                </div>
                <div className={styles.download__cards}>
                    <article className={styles.card}>
                        <div className={styles.card__image}>
                            <img src="/images/logo-chrome.svg" alt="chrome"/>
                        </div>
                        <div className={styles.card__caption}>
                            <h4>
                                Add to Chrome
                            </h4>
                            <p>
                                Minimum version 62 
                            </p>
                        </div>
                        <img src="/images/bg-dots.svg" alt="" />
                        <div className={styles.card__cta}>
                            <button>Add & Install Extension</button>
                        </div>
                    </article>
                    <article className={styles.card}>
                        <div className={styles.card__image}>
                            <img src="/images/logo-firefox.svg" alt="firefox"/>
                        </div>
                        <div className={styles.card__caption}>
                            <h4>
                                Add to Firefox
                            </h4>
                            <p>
                                Minimum version 55 
                            </p>
                        </div>
                        <img src="/images/bg-dots.svg" alt="" />
                        <div className={styles.card__cta}>
                            <button>Add & Install Extension</button>
                        </div>
                    </article>
                    <article className={styles.card}>
                        <div className={styles.card__image}>
                            <img src="/images/logo-opera.svg" alt="opera"/>
                        </div>
                        <div className={styles.card__caption}>
                            <h4>
                                Add to Opera
                            </h4>
                            <p>
                                Minimum version 46 
                            </p>
                        </div>
                        <img src="/images/bg-dots.svg" alt="" />
                        <div className={styles.card__cta}>
                            <button>Add & Install Extension</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default DownloadSection
