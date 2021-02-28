import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
import { Loader } from "semantic-ui-react";
import Head from "next/head";

// 서버사이드 랜더링으로 인해 post컴포넌트가 실행될 때 item을 props로 받을 수 있음
const Post = ({ item }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item}></Item>
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  console.log(context);
  const id = context.params.id;
  console.log(id);
  const URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(URL);
  console.log(res);
  const data = res.data;
  console.log(data);

  return {
    props: {
      item: data,
    },
  };
}
