import styles from '../styles/Faqs.module.scss';
import accordionData from '../../lib/constants/accordionData'
import Accordion from './Accordion';

const Faqs = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.faqs}>
                <div className={styles.faqs__header}>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <p>
                    Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                    </p>
                </div>
                <div className={styles.faqs__content}>
                    <Accordion accordionItems={accordionData} />
                </div>
                <div className={styles.faqs__cta}>
                    <button>
                        More Info
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Faqs
