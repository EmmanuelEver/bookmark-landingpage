import styles from '../styles/Accordion.module.scss'
import AccordionItem from './AccordionItem';

const Accordion = ({accordionItems}) => {
    return (
        <div className={styles.wrapper}>
            {
                accordionItems?.map((item) => (
                    <AccordionItem key={item.question} question={item.question} answer={item.answer} />
                ))
            }
        </div>
    )
}

export default Accordion;
