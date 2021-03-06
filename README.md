<h1 align="center"> 데이터를 차트와 표로 출력하는 페이지 구현 </h1>
<p align="center">
  <img src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat-square&logo=React%20Query&logoColor=white">
</p>

<h2 align="center"><a href="https://project-week4-data-page-team-b.vercel.app/">배포 페이지</a></h2>

# 과제 설명

## 실행 방법

```
npm i -f
npm start
```

- React 18 버전을 사용하여 18.x 버전을 의존성으로 갖지 않는 라이브러리가 있습니다.

- force 옵션을 통해 설치하여야 합니다.

## 폴더 구조

```
src
├── assets
│   ├── images
│   │   └── profile.png
│   └── svgs
│       ├── add.svg
│       ├── arrow-down.svg
│       ├── arrowDown.svg
│       ├── circle.svg
│       ├── deadFace.svg
│       ├── decreaseIcon.svg
│       ├── error.svg
│       ├── facebookIcon.svg
│       ├── googleIcon.svg
│       ├── increaseIcon.svg
│       ├── index.ts
│       ├── kakaoIcon.svg
│       ├── lightbulb.svg
│       ├── loadingIcon.svg
│       ├── logo.svg
│       ├── menu01.svg
│       ├── menu02.svg
│       ├── minusIcon.svg
│       ├── naverIcon.svg
│       ├── notification.svg
│       └── setting.svg
├── components
│   ├── ErrorMessage
│   │   ├── errorMessage.module.scss
│   │   └── index.tsx
│   ├── Layout
│   │   ├── Header.tsx
│   │   ├── LNB
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── index.tsx
│   │   │   └── lnb.module.scss
│   │   ├── index.tsx
│   │   └── layout.module.scss
│   ├── Loading
│   │   ├── index.tsx
│   │   └── loading.module.scss
│   └── index.ts
├── constants
│   └── basic.ts
├── global.d.ts
├── hooks
│   ├── index.ts
│   └── useCalculateDate.ts
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   ├── Dashboard
│   │   ├── AdsCombineContainer.tsx
│   │   ├── CardList
│   │   │   ├── Card.tsx
│   │   │   ├── cardList.module.scss
│   │   │   └── index.tsx
│   │   ├── ChartByChannel
│   │   │   ├── chartByChannel.module.scss
│   │   │   └── index.tsx
│   │   ├── ChartByDate
│   │   │   ├── NeedForDate
│   │   │   │   ├── index.tsx
│   │   │   │   └── needMoreDate.module.scss
│   │   │   ├── chartByDate.module.scss
│   │   │   ├── colors.d.ts
│   │   │   ├── index.tsx
│   │   │   └── utils
│   │   │       ├── conditionalDateFormat.ts
│   │   │       ├── index.ts
│   │   │       ├── makeDataForChart.ts
│   │   │       ├── makeMaxDatas.ts
│   │   │       ├── rearrangeByTerm.ts
│   │   │       └── shortenNumber.ts
│   │   ├── ChartHeader
│   │   │   ├── SelectButton
│   │   │   │   ├── Dropdown.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── selectButton.module.scss
│   │   │   ├── SelectDateTerm
│   │   │   │   ├── index.tsx
│   │   │   │   └── selectDateTerm.module.scss
│   │   │   ├── chartHeader.module.scss
│   │   │   └── index.tsx
│   │   ├── DatePicker
│   │   │   ├── datePicker.module.scss
│   │   │   └── index.tsx
│   │   ├── MediaContainer.tsx
│   │   ├── Table
│   │   │   ├── TableRow.tsx
│   │   │   ├── index.tsx
│   │   │   └── table.module.scss
│   │   ├── hooks
│   │   │   ├── index.ts
│   │   │   └── useFetchMediaQuery.ts
│   │   ├── index.tsx
│   │   ├── states
│   │   │   ├── dashBoard.ts
│   │   │   └── date.ts
│   │   └── utils
│   │       ├── makeChannelData.ts
│   │       ├── makeTrendData.ts
│   │       └── sumChannedlData.ts
│   ├── ManageAds
│   │   ├── AdsContainers
│   │   │   ├── AdsContainer.tsx
│   │   │   ├── AdsListBlock.tsx
│   │   │   ├── adsContainer.module.scss
│   │   │   ├── adsContainers.module.scss
│   │   │   ├── adsListBlock.module.scss
│   │   │   ├── index.tsx
│   │   │   └── utils
│   │   │       ├── getAdsTitle.ts
│   │   │       ├── getCreateDate.ts
│   │   │       ├── getPercentage.ts
│   │   │       └── index.ts
│   │   ├── AdsHeader
│   │   │   ├── AdsFilterDropdown.tsx
│   │   │   ├── adsFilterDropdown.module.scss
│   │   │   ├── adsHeader.module.scss
│   │   │   └── index.tsx
│   │   ├── _shared
│   │   │   ├── AdsDeleteModal
│   │   │   │   ├── adsDeleteModal.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── AdsEditFormModal
│   │   │   │   ├── AdsEditFormAdTypeInput.tsx
│   │   │   │   ├── AdsEditFormInput.tsx
│   │   │   │   ├── adsEditFormInput.module.scss
│   │   │   │   ├── adsEditFormModal.module.scss
│   │   │   │   ├── index.tsx
│   │   │   │   └── useFormHandler.ts
│   │   │   ├── Button
│   │   │   │   ├── button.module.scss
│   │   │   │   └── index.tsx
│   │   │   ├── ModalPortal.ts
│   │   │   └── index.ts
│   │   ├── hooks
│   │   │   ├── index.ts
│   │   │   └── useFetchAdsQuery.ts
│   │   ├── index.tsx
│   │   ├── states
│   │   │   ├── adsDataState.ts
│   │   │   ├── adsFilterIndexState.ts
│   │   │   └── index.ts
│   │   └── types.d.ts
│   └── index.tsx
├── services
│   ├── getAdListData.ts
│   ├── getFilterTrendData.ts
│   ├── getMediaChannalData.ts
│   └── index.ts
├── setupTests.ts
├── states
│   ├── index.ts
│   └── service.ts
├── styles
│   ├── base
│   │   ├── _fonts.scss
│   │   ├── _more.scss
│   │   └── _reset.scss
│   ├── constants
│   │   ├── _colors.scss
│   │   ├── _levels.scss
│   │   └── _sizes.scss
│   ├── global.scss
│   ├── index.scss
│   ├── index.ts
│   └── mixins
│       ├── _animation.scss
│       ├── _flexbox.scss
│       └── _position.scss
├── types
│   ├── chart.d.ts
│   └── types.d.ts
└── utils
    ├── addUnitToBudget.ts
    ├── index.ts
    ├── setFetchDelay.ts
    ├── transformNum.ts
    └── translateDate.ts
```

## 동작

### 대시보드

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/170393240-b3d7a7d5-2ff3-486b-9542-633be0505055.png">

- 대시보드에서 그래프와 수익률, 클릭수 등의 통계 데이터를 볼 수 있습니다.

![May-26-2022 09-57-36](https://user-images.githubusercontent.com/37893979/170393385-652865cf-329b-489c-92cf-e32fb62b1650.gif)

- 대시보드에서 날짜를 변경하면, 각 수치들이 업데이트되면서 화면에 변화가 생깁니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/170393423-0dc81a95-b7ef-4053-bc50-352ec4134d11.png">

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/170393462-a919eff6-bfb3-41d8-8029-0ce9adf20710.png">

- 특정 기간 동안 변동된 수치가 있다면, 우측 아이콘을 통해 증감을 나타냅니다.

![May-26-2022 10-00-24](https://user-images.githubusercontent.com/37893979/170393646-5048df29-b695-4769-81bd-0a3615146a91.gif)

- 그래프 좌측 두개의 드롭다운으로 카테고리를 변경하면, 선택한 카테고리에 맞는 그래프가 출력됩니다.

- 두 개의 카테고리를 선택하여 그래프를 비교할 수 있습니다.

![May-26-2022 10-01-39](https://user-images.githubusercontent.com/37893979/170393756-5be3f012-f29c-4d78-99da-6eb61716f5c2.gif)

- 그래프의 X축 기준을 일간 / 주간으로 변경할 수 있습니다.

- 주간 데이터는 7일치를 묶어서 계산합니다.

<img width="640" alt="image" src="https://user-images.githubusercontent.com/37893979/170393772-e230c6d1-587e-4204-b0c5-1ed6a897fd35.png">

- 기업별 수익을 막대 그래프와 테이블로 확인할 수 있습니다.

- 기업별 로고를 다르게 적용하여 가독성을 높였습니다.

<img width="244" alt="image" src="https://user-images.githubusercontent.com/37893979/170393813-bb94ecc2-2b76-4aa8-97d4-9977265686e0.png">

- 그래프 위에 마우스를 올리면 툴팁이 표시됩니다.

### 광고관리 페이지

![May-26-2022 10-04-07](https://user-images.githubusercontent.com/37893979/170393938-884a6b10-4486-4b7e-aa5b-45ff8fbeb4b9.gif)

- json 파일로부터 데이터를 받아, 각각을 컨테이너에 담아 렌더링합니다

- 과제 요구사항에 맞추어 금액에 단위를 표기하고, 웹 / 앱 광고에 따라 제목에 접두어를 붙였습니다.

- 광고 추가, 수정, 삭제를 구현하기 위해 로컬 스토리지 라이브러리 (`store`) 를 사용하였으며, 추가 / 수정 / 삭제 시마다 로컬 스토리지에 값을 저장하고 불러옵니다.

![May-26-2022 10-05-23](https://user-images.githubusercontent.com/37893979/170394047-09cbc654-a471-41d2-8779-db5480c357fb.gif)

- 좌상단의 드롭다운으로 '진행중', '완료' 에 해당하는 광고들을 필터링하여 볼 수 있습니다.

- 필터링된 데이터만 화면에 렌더링됩니다.

![May-26-2022 10-06-38](https://user-images.githubusercontent.com/37893979/170394166-0fae4595-5492-434d-9942-70a965833fc2.gif)

- 광고 추가 버튼을 누르면 모달이 렌더링되고, Form을 작성하여 제출하면 그에 맞는 광고가 새로 생성됩니다.

- 로컬 스토리지와 전역 상태값에 모든 데이터가 저장되므로, 새로고침해도 남아 있습니다.

![May-26-2022 10-07-44](https://user-images.githubusercontent.com/37893979/170394270-643a5fdb-1c30-468c-b309-98854a2db411.gif)

- 광고 수정 버튼을 누르면 광고를 추가할 때와 같은 모달이 렌더링되고, Form을 작성하여 제출하면 선택한 광고의 내용물이 수정되어 저장됩니다.

![May-26-2022 10-08-28](https://user-images.githubusercontent.com/37893979/170394338-e6b86254-5032-4b15-b18c-18b166d4a7c6.gif)

- 광고 삭제 버튼을 누르면 광고가 삭제되고, 나머지 광고들이 리렌더링됩니다.

## 구현 방법과 이유, 사용한 기술

### 대시보드 - 카드, 표

#### 카드

- 카드 컴포넌트를 만들어 최대한 재사용성이 높게 구현하였습니다.

  - `useMemo`를 활용하여 rate의 증감 혹은 데이터의 존재 여부에 따라 우측 아이콘이 동적으로 변경되어 렌더링되도록 하였습니다.

  - `useCalculatedDate`라는 커스텀 훅을 이용하여 현재 날짜, 이전 날짜와 총 기간을 동적으로 받아올 수 있도록 하여 컴포넌트를 간결하게 만들었습니다.

    - 훅에서 받아온 날짜 데이터를 기준으로 `useQuery`를 이용하여 광고 통계 데이터를 받아오고, 로딩 화면의 구현을 위하여 데이터 fetch 시 딜레이를 주었습니다.

  - 금액이나 퍼센티지 등 단위 설정이 필요한 수들을 처리하는 함수를 만들어, 단위를 붙일 수 있도록 처리하였습니다.

  - 내장 메서드인 `Math.abs`와 `toFixed`를 이용하여 소수점 처리와 절대값 처리를 해 주었습니다.

### 테이블

- 테이블의 열을 렌더링하는 `TableRow` 컴포넌트를 분리하여 코드의 가독성을 높게 유지하였습니다.

- 각 기업별 데이터를 출력할 때 로고를 함께 출력합니다.

- '총합' 을 표시하는 열의 경우 클래스명을 다르게 하여 눈에 띄게 스타일을 주었습니다.

- `toLocaleString()`을 이용하여 숫자에 콤마를 찍어주었습니다.

- 각 채널에 따라 기업 로고가 결정되도록 객체 형태를 이용하여 로고를 세팅해 주었습니다.

- 테이블의 API 함수 안에서 사용되는 `makeChannelData`의 경우 객체 형태를 활용하여 조건문의 중첩을 최소화하였습니다.

### 대시보드 - 차트

- 반응형으로 제작하여 화면의 너비가 줄어도 가독성을 최대한 해치지 않도록 하였습니다.

- 명세로 제공된 Figma와 비슷하게 구현하기 위해 노력하였습니다.

- 라이브러리는 `Victory`를 사용하였으며, 리액트 최대 규모의 차트 라이브러리인 만큼 세부적인 커스터마이징과 스타일링이 쉬워 채택하였습니다.
#### 일자별 꺾은선 차트

- 꺾은선 차트는 `trend-data-set.json`을 이용하여 그려주었고, 카테고리별로 색상을 다르게 하여 가독성을 높였습니다.

  - 호버링 시, 해당하는 값이 출력됩니다.

- 차트 너비를 결정하는 기준으로 크게 두 가지 조건을 염두에 두었습니다.

  1. 데이터의 길이에 맞추어 정해진 차트의 너비 (`width`) 가 `container` 컴포넌트의 너비와 같거나 작으면 `container`의 너비와 차트의 너비를 같게 하였습니다.

  2. 데이터의 길이에 맞추어 정해진 차트의 너비 (`width`) 가 `container` 컴포넌트의 너비보다 크면 `container`의 `overflow` 옵션을 통해 스크롤이 가능하도록 하여 차트의 가독성을 해치지 않도록 하였습니다.

- 좌측 2개의 드롭다운을 통한 카테고리 선택 기능은 다음과 같이 구현하였습니다.

  1. 기본적으로 첫 번째 카테고리 (첫 번째 드롭다운) 는 무조건 선택이 되어 있도록 설정하였습니다.

  2. 두 번째 카테고리는 첫 번째 카테고리와 중복 선택이 불가능하도록 막아주었습니다.

  3. 두 번째 카테고리의 특정 값을 선택하였다면, 해당 값은 첫 번째 카테고리의 드롭다운에 보여지지 않도록 숨겨주었습니다.

- 우측 드롭다운을 통하여 주간 / 일간 데이터 중 어떤 데이터를 차트로 렌더링할 지 선택할 수 있습니다.

- 일간이 선택된다면, 대시보드에서 선택한 날짜 범위에 해당하는 각각의 일별로 꺾은선 차트를 출력합니다.

- 주간이 선택된다면, 대시보드에서 선택한 날짜 범위에 해당하는 주간 데이터를 합산하여 출력합니다.

  - 날짜 범위가 21일보다 작을 경우, 꺾은선 차트를 그리기 어렵다고 판단하였고, 기간이 짧아 차트를 출력할 수 없다는 메시지를 출력하도록 하였습니다.

  - 날짜 범위가 7로 나누어 떨어지지 않더라도, 마지막 주차는 설정한 범위 안에 해당하는 날짜의 데이터끼리 합산하여 출력합니다.

- 꺾은선 차트 2개를 겹쳐 출력하다 보니, 차트가 겹쳐지면서 가독성이 떨어지는 문제가 있었습니다.

  - Y축의 `label`을 결정하는 요소는 저장된 데이터들간의 최대값으로 설정하였습니다.

  - 첫 번째 카테고리에 해당하는 꺾은선 차트는 최대값에 가깝게 그려집니다.

  - 두 번째 카테고리에 해당하는 꺾은선 차트를 첫 번째 카테고리 차트와 같이 최대값을 기준으로 그려주면, 두 차트가 겹치면서 가독성 이슈가 발생합니다.

  - 따라서 두 번째 카테고리에 해당하는 꺾은선 차트는 Y축을 2배로 늘려 첫 번째 카테고리의 꺾은선 차트보다 상대적으로 아래에 위치하게 하였고, 덕분에 차트가 겹치지 않아 두 차트가 눈에 확 들어오게 되었습니다.

### 기업별 누적 막대 차트

- 누적 차트는 `media-channel-data-set.json`를 이용하여 그려주었고, 기업별로 색상을 다르게 하였습니다.

  - 색상은 최대한 Figma에 명시된 색상을 이용하였습니다.

  - 호버링 시 툴팁으로 값이 출력됩니다.

- 누적 막대 차트 또한 꺾은선 차트와 마찬가지로 차트 너비를 `container` 컴포넌트 너비에 맞추어 설정하여, 가독성을 지켜주었습니다.

  1. 데이터의 길이에 맞추어 정해진 차트의 너비 (`width`) 가 `container` 컴포넌트의 너비와 같거나 작으면 `container`의 너비와 차트의 너비를 같게 하였습니다.

  2. 데이터의 길이에 맞추어 정해진 차트의 너비 (`width`) 가 `container` 컴포넌트의 너비보다 크면 `container`의 `overflow` 옵션을 통해 스크롤이 가능하도록 하여 차트의 가독성을 해치지 않도록 하였습니다.
### 광고관리

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

#### 기타 요소

- 광고 관리 페이지에서 사용되는 버튼의 디자인이 매우 비슷하여, `_shared` 폴더에 공통 컴포넌트 `Button`을 작성하여 해당 페이지 내의 모든 컴포넌트가 불러올 수 있도록 하였습니다.


- 화면 크기를 작게 줄여도 스타일이 손상되지 않도록 `overflow: scroll` 속성을 이용하였습니다.

- `endDate`는 종료된 광고 (`status='ended'`) 에 대해서만 값을 가지고 나머지 경우에는 `null`이 됩니다.

  - 따라서 광고를 추가하거나 수정할 때, 종료 여부 체크박스가 체크되어 있을 경우에만 `endDate`를 지정하는 input이 보여지도록 하였습니다.


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
