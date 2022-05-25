<h1 align="center"> 데이터를 차트와 표로 출력하는 페이지 구현 </h1>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white">
</p>

<h2 align="center"><a href="https://project-week4-data-page-team-b.vercel.app/">배포 페이지</a></h2>

# 과제 설명

## 폴더 구조

```
아직 없음
```

## 동작

### 대시보드

### 광고관리 페이지

{ 광고관리 탭 이미지 }

- json 파일로부터 데이터를 받아, 각각을 컨테이너에 담아 렌더링합니다

- 과제 요구사항에 맞추어 금액에 단위를 표기하고, 웹 / 앱 광고에 따라 제목에 접두어를 붙였습니다.

- 광고 추가, 수정, 삭제를 구현하기 위해 로컬 스토리지 라이브러리 (`store`) 를 사용하였으며, 추가 / 수정 / 삭제 시마다 로컬 스토리지에 값을 저장하고 불러옵니다.

{ 광고 필터링 이미지 }

- 좌상단의 드롭다운으로 '진행중', '완료' 에 해당하는 광고들을 필터링하여 볼 수 있습니다.

- 필터링된 데이터만 화면에 렌더링됩니다.

{ 광고 추가 이미지 }

- 광고 추가 버튼을 누르면 모달이 렌더링되고, Form을 작성하여 제출하면 그에 맞는 광고가 새로 생성됩니다.

- 로컬 스토리지와 전역 상태값에 모든 데이터가 저장되므로, 새로고침해도 남아 있습니다.

{ 광고 수정 이미지 }

- 광고 수정 버튼을 누르면 광고를 추가할 때와 같은 모달이 렌더링되고, Form을 작성하여 제출하면 선택한 광고의 내용물이 수정되어 저장됩니다.

{ 광고 삭제 이미지 }

- 광고 삭제 버튼을 누르면 광고가 삭제되고, 나머지 광고들이 리렌더링됩니다.
## 구현 방법과 이유, 사용한 기술

### 광고관리 페이지

#### React-query + Promise

- 로딩 화면을 손쉽게 구현하기 위해 `promise` 함수와 `react-query`를 사용하였습니다.

  - `react-query`의 `suspense` 설정을 통해 해당 컴포넌트가 로딩되는 동안 fallback 컴포넌트를 출력해줄 수 있으며, 이를 이용하여 `promise`에 고의로 딜레이를 걸고 로딩 화면을 렌더링하도록 하였습니다.

  - 더불어 `useErrorBoundary`를 이용하여 에러 발생 시 에러 문구를 렌더링할 수 있도록 fallback을 구성하였습니다.

- 로딩 화면을 위한 딜레이는 `setTimeout`을 이용하였습니다.

  - `Promise` 안에서 `setTimeout`을 사용할 수 있도록 함수를 구성한 뒤 데이터 fetching이 성공적으로 끝나면 `then`으로 딜레이를 주고, 다음에 이어지는 `then`으로 결과값을 반환하였습니다.

- `promise`를 이용하여 쉽게 비동기 함수의 선후관계 처리를 할 수 있었고, `useQuery` 내에서도 `onSuccess` 함수를 설정하여 데이터를 성공적으로 받아왔을 때만 전역 상태값으로 지정할 수 있도록 하였습니다.

- 데이터를 드롭다운에서 선택한 조건대로 필터링하고 상태값으로 set하기 위해서는, 필터링이 먼저 끝난 뒤에 상태값을 설정해 주어야 합니다.

  - set은 비동기로 작동하므로, 데이터가 제대로 필터링되기 전에 set 액션이 실행될 수 있습니다.

  - 따라서 filter 함수를 `Promise`로 만들어 필터링에 성공했을 때에만 `then` 내에서 상태값을 지정할 수 있도록 하였습니다.

- 리액트 쿼리의 장점 중 하나로 캐싱이 있으나, 이번 과제에선 많은 양의 데이터를 요청하지 않기도 하고, 로딩 화면을 보여주기 위해 캐시 데이터를 사용한 빠른 렌더링은 필요없다고 판단하여 `cacheTime`을 0으로 설정하였습니다.

#### store, localStorage

- 추가 구현으로 광고 데이터의 추가, 수정, 삭제 (CRUD) 를 구현하고자 로컬 스토리지에 데이터를 저장하는 방식을 사용하였습니다.

  - API가 존재하는 것이 아닌, json 데이터를 읽어들이기 때문에 CRUD 구현 시에 데이터를 저장할 곳이 마땅치 않았습니다.

  - 전역 상태로 관리해도 무방하지만, 추가한 값이 로컬 스토리지에 저장되어 다음 방문 시에도 같은 광고 데이터를 보여줄 수 있도록 하기 위함입니다.

- localStorage 내장 메서드를 사용해도 로컬 스토리지 저장이 가능하지만, JSON 데이터를 parse하거나 string화 하는 작업이 필요하기 때문에 이 과정을 생략할 수 있게 해주는 store 라이브러리를 사용하였습니다.

  - store 라이브러리를 이용하면 `store.get(키)` 를 통해 키에 해당하는 객체를 받아올 수 있고, `store.set(키, 객체)` 로 로컬 스토리지에 저장이 가능합니다.

#### recoil

- 다른 탭 (대시보드) 으로 이동하고 돌아왔을 때 광고 데이터를 유지하기 위해서는 전역 상태관리가 필수적입니다.

- 또한, 드롭다운의 선택값을 부모 컴포넌트를 통해 넘겨주기보단, 전역 상태관리를 이용하여 몇 단계 위의 컴포넌트에 바로 상태값을 전달하는 것이 코드가 간결해지기 때문에 전역 상태관리를 택하였습니다.

- `redux`와 `recoil` 중 사전 설정이 간결하고, 간단한 `atom` 설정을 통해 `useState`처럼 쉽게 상태값을 사용할 수 있는 `recoil`을 택하였습니다.

#### react-portal

- 광고의 추가, 수정, 삭제 (CRUD) 를 위하여 모달을 출력하고, 모달에서의 상호작용을 통해 사용자가 값을 쉽게 입력하거나 삭제를 결정할 수 있도록 하였습니다.

- `index.html`에 modal `div`를 추가 후 리액트 포탈을 통해 해당 태그에 모달을 렌더링해 주었습니다.

- 모달 라이브러리를 사용해도 상관없지만, 구현이 어렵지 않기 때문에 리액트 자체 기능인 포탈으로 modal 태그와 root 태그 하위 컴포넌트들을 연결해 주는 방식으로 모달 상호작용을 구현하였습니다.

#### react-use + useRef

- 모달 바깥을 누르거나 드롭다운 영역 바깥을 누르면 모달 / 드롭다운이 닫힐 수 있도록 `react-use` 라이브러리의 `useClickAway` 훅을 사용하였습니다.

  - 해당 훅을 사용하면 `useRef`로 선택한 영역 바깥을 클릭했을 때 이벤트를 설정할 수 있으며, 이를 이용하여 `isOpen` 상태값 (예시) 을 false로 지정하는 방식으로 구현하였습니다.

<hr />

<h2 align="center">기여한 사람들</h2>
<p align="center">
<table align="center">
  <thead>
    <tr>
      <th><a href="https://github.com/kec0130">🌅 고은채</a></th>
      <th><a href="https://github.com/HyeongSeoku">🌇 김형석</a></th>
      <th><a href="https://github.com/yhnb3">🌠 엄강우</a></th>
      <th><a href="https://github.com/chichoon">🏙 최지윤</a></th>
    </tr>
  </thead>
</table>
</p>
