import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";

const Post = () => {
  const [item, setItem] = useState();
  const router = useRouter();
  const { id } = router.query;

  const URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item}></Item>;
};

export default Post;
