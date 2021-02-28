import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    // npm i axios
    axios.get(URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
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
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
}
