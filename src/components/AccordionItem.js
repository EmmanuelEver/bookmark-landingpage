import { useState } from 'react';
import styles from '../styles/AccordionItem.module.scss';

const AccordionItem = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <div className={styles.wrapper}>
            <div 
                className={`${styles.question} ${show && styles.active}`}
                onClick={() => setShow(!show)}
            >
                <h4>
                    {question}
                </h4>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="inherit" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                </span>
            </div>
            <div className={`${styles.answer} ${show && styles.show}`}>
                <p>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default AccordionItem
