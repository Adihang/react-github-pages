/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './static/css/stratagem_style.css';
import stratagemData from './stratagem.json';


function App() {
  const [stratagems, setStratagems] = useState([]);
  useEffect(() => {
    // stratagem.json 파일에서 데이터를 불러와 state에 저장합니다.
    // 여기서는 import를 통해 불러오고 있으므로 비동기 로딩은 필요하지 않습니다.
    // 랜덤하게 10개의 요소만 선택하여 상태를 설정합니다.
    const getRandomSubarray = (arr, size) => {
      let shuffled = arr.slice(0), i = arr.length, temp, index;
      while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(0, size);
    };

    setStratagems(getRandomSubarray(stratagemData, 10));
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 합니다.

  return (
      <div>
          <div className="stratagem_page">
              <div className="title">
                  <img className="stratagem_icon" src="media/icon/Helldivers-2-Icon-PNG.png" alt="Stratagem Icon"/>
                  <h3 className="title_text">Stratagem Hero</h3>
                  <img className="stratagem_icon" src="media/icon/Helldivers-2-Icon-PNG.png" alt="Stratagem Icon"/>
              </div>
              <hr className="stratagem_hr"></hr>
              <div className="stratagem_content">
                  <h1 className="discription">
                      조작 : 방향키 or WASD<br></br>
                  </h1>
                  <div className="stratagem_score">
                      <h1 className="score_text">Score</h1>
                      <h3 className="score_time">error</h3>
                      <div className="input_score">
                          <div className="save_chack">
                              <input className="input_score_checkbox" type="checkbox" id="input_score_checkbox" name="input_score_checkbox"></input>
                              <label htmlFor="input_score_checkbox">자동입력</label>
                          </div>
                          <div className="input_name">
                              <input className="input_score_name" id="input_score_name" type="text" placeholder = "이름을 입력하세요"></input>
                              <button className="input_score_button" id="input_score_button" type="button">등록</button>
                          </div>
                      </div>
                  </div>
                  <div className="stratagem_container">
                      <ul className="stratagem_cards">
                          <div>
                              { 
                                stratagems.map(function(stratagem){
                                    return (
                                        <Stratagem_card key={stratagem.id} icon_url={`media/${stratagem.icon}`} name={stratagem.name} command={stratagem.command}>
                                        </Stratagem_card>
                                    )
                                })
                              }
                          </div>
                      </ul>
                  </div>
              </div>
              <hr className="stratagem_hr"></hr>
              <div className="arrow_keypad">
                  <div className="row row-top">
                      <div className="arrow arrow-top"></div>
                  </div>
     
                  <div className="row row-bottom">
                      <div className="arrow arrow-left"></div>
                      <div className="arrow arrow-bottom"></div>
                      <div className="arrow arrow-right"></div>
                  </div>
              </div>
              <hr className="stratagem_hr"></hr>
          </div>
          <div className="lowtext" >made by Adihang</div>
      </div>
  );
}

function Stratagem_card(props) {
  return (
    <li className="stratagem_card">
        <div className="stratagem_card_title">
            <img className="stratagem_icon" src={ props.icon_url } alt="Stratagem Icon"/>
            <div className="stratagem_name">{ props.name } </div>
        </div>
        <div className="stratagem_command" data-command={ props.command }></div>
    </li>
  );
}

function getRandomSubarray(arr, size) {
  let shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}
export default App;