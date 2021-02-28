import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

const ItemList = ({ list }) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => {
            return (
              <Grid.Column key={item.id}>
                <Link href={`/view/${item.id}`}>
                  <a>
                    <div className={styles.wrap}>
                      <img
                        src={item.image_link}
                        alt={item.name}
                        className={styles.img_item}
                      ></img>
                      <strong className={styles.tit_item}>{item.name}</strong>
                      <span className={styles.txt_info}>
                        {item.category} {item.product_type}
                      </span>
                      <strong className={styles.num_price}>
                        ${item.price}
                      </strong>
                    </div>
                  </a>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
