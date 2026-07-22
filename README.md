# 영화 리뷰앱 작업리스트

- [x] Router 설정
- [x] 각 컴포넌트, 폴더 구성(IA)
- [ ] api 설정
- [ ] Header, footer, Loading, 404
- [ ] 웹폰트
- [ ] 각 페이지 ui + 반응형 작업
- [ ] Helmet
- [ ] Page Scroll Event
- [ ] Deploy

---

- [ ] css

<!-- const url = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-kr&page=1';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', Authorization: 'Bearer ••••'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); -->

<!-- 예외
=>try~catch
=>조건문과 비슷하게 코드나 함수에 오류나 문제점이 발생했을때 핸들링 처리가능함
=>if문과 차이점은 이프문은 무조건 조건을 작성해야되지만 트라이는 조건없이 문제점을 잡아낼수있음 -->

<!--
배포하기
깃허브 페이지스 (가장쉬운방법 서버없는입장에서 무난)다른배포방법많음
npm gh_pages 검색=> 설치하기

페키지제이슨에서 스크립트에 추가
"predeploy": "npm run build",
    "deploy": "gh-pages -d list"

    바이트 컨피그제이에스에
    base: "/movie/", 추가

 -->
