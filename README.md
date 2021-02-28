# create-next-app 으로 설치하면

1. 컴파일과 번들링이 자동으로 된다 (webpack and babel)
2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영됨
3. 서버사이드 랜더링이 지원됨
4. 스테틱 파일을 지원함

# Next.js는 모든 페이지 사전 렌더링 (Pre-rendering)

더 좋은 퍼포먼스
검색엔진 최적화(SEO)

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 Html 파일을 생성하는가

[정적 생성]

- 프로젝트가 빌드하는 시점에 html파일들을 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, next.js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths

[서버사이드 랜더링]

- 매 요청마다 html파일을 생성
- 항상 최신 상태 유지
- getServerSideProps
