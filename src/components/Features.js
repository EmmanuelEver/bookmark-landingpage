import styles from '../styles/Features.module.scss'
import tabsData from '../../lib/constants/tabsData'
import Tabs from './Tabs'

const Features = () => {
    return (
        <section className={styles.wrapper}>
            <section className={styles.features}>
                <div className={styles.features__header}>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <p>
                    Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                    </p>
                </div>
                <div className={styles.features__content}>
                    <Tabs items={tabsData} />
                </div>
            </section>
        </section>
    )
}

export default Features
