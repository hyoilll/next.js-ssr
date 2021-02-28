import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/component/Top";
import Footer from "../src/component/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top></Top>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp;

// 페이지 전환시 레이아웃, 상태값을 유지할 수 있음.
// componentDidCatch를 이용하여 커스텀 에러 핸들링을 할 수 있음
// 추가적인 데이터를 페이지로 주입시켜주는게 가능
// 글로벌 css를 이곳에 선언
