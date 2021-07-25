import styles from '../styles/TabItem.module.scss';

const TabItem = ({click, header,active}) => {
  return (
    <div onClick={() => click()} className={`${styles.tabItem} ${active ? styles.active : " " }`}>
      <h4>{header}</h4>
    </div>
  );
};

export default TabItem;
