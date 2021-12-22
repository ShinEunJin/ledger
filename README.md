ledger RN

하나 알아냈다.

props에 함수 넣을 수 있는것 처럼 useNavigation의 route.params에도 가능하다.

다만, 부모자식 관계가 아니라 params를 받은 컴포넌트가 리렌더링될때 효과과 발동한다.

#### 211209

각 날의 지출 총합은 구했다.

그리고 함수 props로 write 컴포넌트들어 갈 때 마다 List에서 합을 구 한 뒤 다시 write 컴포넌트로 합을 던져준다.

문제는 가계부 index에서 달력의 날짜를 누를 때 각 날의 합을 보여주는 건데 지금 asyncstorage에 각 날짜를 넣어서 그 날의 지출을
나타나게 할 생각이다.

#### 211221

useFocusEffect는 네이티브에서 딱 그 화면이 나올때 바로 발동되는거고
useEffect는 stack navigation에서 화면이 넘어갈 때 useEffect가 있는
해당 화면은 stack으로 밑에 깔려있으니 배열을 비워두면 한번만 작동한다.
