import { Button, Header } from "semantic-ui-react";
import styles from "./ItemList.module.css";

const Item = ({ item }) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={item && item.image_link} alt={item && item.name}></img>
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{item && item.name}</strong>
          <strong className={styles.num_price}>${item && item.price}</strong>
          <span className={styles.txt_info}>
            {item && item.category ? `${item.category}/` : ""}
            {item && item.product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>
        {item && item.description}
      </p>
    </>
  );
};

export default Item;
