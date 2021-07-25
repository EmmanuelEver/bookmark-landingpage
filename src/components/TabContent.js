import styles from '../styles/TabContent.module.scss';
import Image from 'next/image';

const TabContent = ({image, title, content, active}) => {
    console.log(image)
    return (
        <div className={`${styles.tabContent} ${active ? styles.active : " " }`}>
            <div className={styles.contentImage}>
                <img 
                    src={image} 
                    alt="" 
                />
            </div>
            <div className={styles.contentText}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div>
                    <button>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default TabContent
