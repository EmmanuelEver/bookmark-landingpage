import { useState } from 'react';
import styles from '../styles/Tabs.module.scss'
import TabContent from './TabContent';
import TabItem from './TabItem'

const Tabs = ({items}) => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__header}>
                {
                    items.map(item => (
                        <TabItem 
                        key={item.title}
                        click={() => setActiveIdx(item.index)} header={item.header} active={activeIdx === item.index}/>
                    ))
                }
            </div>
            <div className={styles.tabs__content}>
                {
                    items.map((item) => (
                        <TabContent
                            key={item.content}
                            title={item.title}
                            image={item.img}
                            content={item.content}
                            active={activeIdx === item.index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs
