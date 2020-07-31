# 티켓플레이스 과제

# 질문1. How to build a movie search app using React Hooks 프로젝트가 있습니다. 이 프로젝트는 React+ES6로 만들어져 있습니다.

## 1. 이 프로젝트를 Typescript를 이용해서 새롭게 만들어보세요

1. OMDB Movie Finder (React + Typescript)

[milliwonkim/react-ts-omdb-movie-finder](https://github.com/milliwonkim/react-ts-omdb-movie-finder)

2.   TMDB Movie Search App (React + Typescript)

1. 하나 더 만든 이유
    1. 처음 과제인 ‘How To Build A Movie Search App Using React Hooks’에서는 OMDB API를 사용했습니다.
    2. 만드는 과정 중에 OMDB에서는 Search Query를 제공하긴하지만, 영화에 참여한 배우들, 디렉터들에 대한 정보를 받기 어려웠고, 영화 흥행 지표(매출, 수익 등)들에 대한 정보를 받을 수 없었습니다.
    3. 따라서 TMDB API를 이용해서 그 정보를 보여줄 수 있는 리액트 앱을 하나 더 만들었습니다.

[milliwonkim/react-ts-tmdb-movie-search-app](https://github.com/milliwonkim/react-ts-tmdb-movie-search-app)

## 2. 이 프로젝트에서는 Reducer를 통해서 일어나는 모든 이벤트를 정의하고 있는데, 이것을 더 낫게 바꿀방법은 없을까요?

1. OMDB Movie Finder (React + Typescript)
    1. 처음에서 더 발전시켜, useContext를 이용했습니다.
        1. useReducer를 이용할 수도 있습니다.
    2. Redux를 이용할 수도 있지만, Redux를 사용하기에는 앱의 사이즈가 작기때문에 Redux를 쓰기보다는 Hooks의 useContext를 최대한으로 사용하였습니다.
2. TMDB Movie Search App (React + Typescript)
    1. OMDB Movie Finder에서는 useContext를 이용하였지만, OMDB Movie Finder에서나 TMDB Movie Search App이나 앱 사이즈면에서나 Props를 한번만 보내다보니, Props로 보내도 큰 불편함이 없기 때문에 useState와 Props를 최대한 이용하였습니다.
    2. Redux나 useReducer를 이용할수도 있습니다.

## 3. 이 프로젝트를 제가 어떻게 하면 바로 실행해보고 테스트 해볼 수 있을지 README.md에 적어주세요

1. OMDB Movie Finder (React + Typescript)

```bash
npm install
npm start
```

2.   TMDB Movie Search App (React + Typescript)

```bash
npm install
npm start
```

- 메일의 첨부파일에 실행했을 때 데모영상을 첨부해두었습니다.

---

# 질문 2. LESS를 쓰는 것과 CSS를 쓰는 것의 차이

## 1. LESS란?

- Dynamic CSS Preprocessor
    - CSS에서 확장된 언어로써, 서버나 클라이언트단에서 런타임동안 Transpile을 하면 CSS로 바뀌는 언어이다.
    - 자바스크립트 문법을 갖고있음

### 2. LESS와 CSS 차이(= LESS의 특징)

- variable
    - 변수의 접두어로 @를 사용함

```less
/* LESS */

@fontSize: 10px;
```

```css
/* CSS */

:root {
	--font-size: 10px;
}

element {
	background-color: var(--font-size);
}
```

- mixins

```less
/* LESS */

.container {
	font-size: @fontSize * 2;
}

.form {
	.container();
}
```

```css
/* CSS */

/* Pure CSS에는 mixins와 대응되는 방법 없음 */
```

- operation

```less
/* LESS */

@fontSize: 10px;

.container {
	font-size: @fontSize * 2;
}
```

```css
/* CSS */

.container {
	font-size: calc(10*2px)
}
```

- escaping
    - 유효하지 않은 코드가 포함될 경우, 해당 코드를 해석하지 않도록 만드는 방법으로 ~을 앞에 붙여준다.

```less
/* LESS */

p {
	color: ~"green";
}
```

```css
/* CSS */

p {
	color: green;
}
```

- Node.js 엔진 기반으로 구동됩니다.
- 브라우저단에서도 동작가능
- CSS 속성 이름의 중첩이 가능하지 않다