import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    // npm i axios
    axios.get(URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Hyoil</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider></Divider>
      <ItemList list={list.slice(0, 9)}></ItemList>
      <Header as="h3" style={{ paddingTop: 40 }}>
        신 상품
      </Header>
      <Divider></Divider>
      <ItemList list={list.slice(9)}></ItemList>
    </div>
  );
}
