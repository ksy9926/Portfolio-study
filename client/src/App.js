import './App.css';
import React from 'react';
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./components/Home"

// BrowserRouter - history API를 사용해 URL과 UI를 동기화하는 라우터입니다.
// Route - 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
// Link - 'a'태그와 비슷합니다. to속성에 설정된 링크로 이동합니다. 기록이 history스택에 저장됩니다.
// Switch - 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링합니다.
// Switch를 사용하면 BrowserRouter만 사용할 때와 다르게 하나의 매칭되는 요소만 렌더링한다는 점을 보장해줍니다.
// 사용하지 않을 경우 매칭되는 모두를 렌더링합니다.
// <Switch> 태그는 만약 "/mise" 뒤에 "/mise/:name" 이런 식으로 중복되는 path 값이 하나 더 있을 때
//  웹은 이 둘을 같은 값으로 인지하기 때문에 서로 다르다는 것을 알려주고자 할 때 사용합니다.
{/* <Switch>
    <Route path = "/mise/:name" component = {Mise} />
    <Route path = "/mise" component = {Mise} />
</Switch> */}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        {/* exact="true" prop을 이용해주자. 정확히 일치할때만 이거 불러오라는 신호를 주는것 */}
        <Route path="/skill" />
        <Route path="/project" />
      </BrowserRouter>
    </div>
  );
}

export default App;




