# Babel Webpack

## Babel
> babel은 선택이 아니라 `필수`였다.
> 최신문법으로 개발을 하면서 코드 생산성을 높이고, 그 문법을 ES5로 변환해서 사용하였다.
> 왜 ? -> 공백기가 있었기 때문에, 과도기 기술이이

### ES6의 등장
> 자바스크립트는 표준이 2015년 6월 많은 내용이 업데이트 되었다.
> let, const 화살표 함수, 클래스 등등 개발자의 코드의 생산성과 유지보수성이 증가하게 되었다.
> 즉, 과도기가 있었다.
> 브라우저가 ES6의 기능을 모두 제공하지는 못했고, 점점 발전하게되었다.
> 모듈 시스템 import, export, ES6의 문법도 완전히 제공하지 못했다.

### 공백기
> ES6의 기능을 런타임 환경에서 완벽하게 제공하지 못하다보니
> ES5로 작성된 모듈 혹은 코드를 사용해야했다.
> ES6를 ES5로 코드를 변환해서 사용을 해야하는데, 개발자가 일일히 다 쓰기가 힘들다.
> ES6 -> ES5의 변환작업을 babel이 등장 파일의 내용을 변환해주는 작업을 제공한다.

## babel의 목적
> 트랜스파일 즉, 코드의 문법을 변환하는게 목적이다.

## Webpack
> 번들링의 작업을 맡아서 제공한다.
> 번들링이란? (실행환경의 디렉터리 구조를 구성해준다)
> 프로젝트를 실행할때 실행에 최적화 되어있는 디렉터리 구조를 정의해준다.
> 단순하게 정적인 라우팅을 하던, html, css, js를 직접 작성한 내용을 런타임환경에서 실행하던 때와 달리
> SPA가 등장을 하게 되면서 SPA의 기능을 라이브러리 혹은 프레임워크로 제공하게 되었다.
> 이 SPA에서는 번들링 작업과 트랜스파일 즉, 바벨이 사용되었다.
> webpack는 기술을 제공하게되었고, 우리는 기능을 작성만 하면 되는것
> webpack은 여러개의 모듈을 하나로 합치는 `번들링`

## webpack의 동작
> javascript의 정적 모듈 번들러

1. Entry : 시작점 번들링을 시작하는 최초의 파일
2. Output : 번들링을 할때 결과를 내보낼 경로
3. Loader : javascript의 정적 모듈 번들러이지만, 이미지 혹은, 스타일 등의 다른 파일을 처리할 때 사용
4. Plugin : 번들링을 하고 번들링된 내용을 런타임 환경에서 실행할때 라이브러리 기능이 필요할때 작성, html파일을 하나 생성해야한다.

## 요약 
1. webpack : 모듈 의존성 번들링
2. babel : ES6문법을 ES5문법으로 트랜스파일 

### babel(바벨) 사용

common.js
```js
const text = "hello";

module.exports = {text};

// Other.js
const {text} = require('./index.js')
```

ES6
```js
// index.js
const text = "hello";


export {text};
export {text};
export {text};
export {text}; // 모듈의 의존성 결합성이 좀더 강력하다.
export {text}; // 여러개의 데이터를 객체를 할당해서 내보낼 수 있다.
export default text; // 하나만 내보낼수 있다.

// from은 변수에 할당해서 사용할 수 있게 하는것
import {text} from "./index.js"
import text from "./index.js"
```

*** babel은 기본적으로 자바스크립트로 구성되어 있다. ***

```sh
    # 프로젝트를 빌드 혹은 배포환경에 포함되지않고
    # 개발환경에서 사용하는 모듈
    # 개발환경에서 필요한 모니터링 혹은 테스트 라이브러리 등은 개발 환경에서만 사용하기때문에
    # 개발의존성으로 포함시켜야한다.
    npm i --save-dev
    npm i -D @babel/core @babel/cli @babel/preset-env
```

### babel의 환경 설정
> 변환 작업을 할때 원하는 형태로 파일을 변환하기 위해서는 설정값이 필요하다.
> .babelrc -> 실행할때 필요한 설정 파일, babel 속성값을 정의하는 파일

```json
// .babelrc
{
    "presets" : ["@babel/preset-env"] // 기본 설정
    // CRA에서 호출해서 사용
}
```
### babel Cli 컴파일
1. 문법 변환

```sh
npx babel "변환시킬 경로" --out-file "변환해서 내보낼 경로"
# 예) app.js
npx babel app.js --out-file dist/app.js
```

2. 모듈 문법 변환 
```sh
npm i -D @babel/plugin-transform-modules-commonjs  # ES6 -> ES5로 변환
```

3. JSX 문법 변환
```sh
npm i -D @babel/preset-react # JSX -> JS로 변환 
npx babel src/Main.jsx --out-file dist/main.js
```
### 여기까지 babel 작업
> 자바스크립트 컴파일러 ES6와 JSX 문법같은 자바스크립트 문법으로 `트랜스파일`(파일 변환)해서 브라우저같은 런타임 환경에서 동작할 수 있는 문법으로 변환한다.

### Webpack의 목적
> 모듈 번들러의 역할, 여러개의 파일 자바스크립트 혹은 CSS등 파일을 하나의 파일로 `번들링`해서 합쳐준다.
> 번들링을 하는 이유는 실행의 속도에 최적화된 실행파일을 빌드하기 위해서

### 모듈과 번들러
> 웹을 구성할때 다양한 작업파일을 많이 만들어서 웹페이지를 제작하는데
> 설치한 라이브러리의 코드 내용을 모두 사용하는게 아닌, 불필요한 내용은 제외하고 최소한의 내용으로만 실행환경을 만드는 것. 웹페이지의 로딩 속도 개선
- 모듈 : 프로그램을 구성하는 요소
- 번들러 : 의존성이 있는 모듈 즉,  요소들의 코드들을 하나의 파일로 합쳐서 만들어주는것

### 한번더 중요 속성
1. entry : `진입점` 시작 파일
2. output : `번들링` 이후 내보낼 경로
3. loaders : `번들링`하면서 모듈의 소스 코드에 적용할 자바스크립트나, CSS 파일을 어떻게 처리할건지 내용(babel)
4. plugins : 추가로 `번들링`이후에 필요한 파일 생성이라든지, 이러한 기능을 제공하는 플러그인들을 사용할때 정의

*** webpack.config.js ***

## webpack 사용

```sh
  npm i -D webpack webpack-cli
  npx webpack
```

## 실습
CSS 로더도 추가해서 CSS 적용