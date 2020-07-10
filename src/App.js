import React, { Component } from 'react';
import './App.css';

import Navbar from "./component/Header/Navbar"
import FirstContaint from './component/Main/FirstContaints/FirstContaint';
import SecondContaints from "./component/Main/SecondContaints/SecondContaint";
import ThirdContaint from "./component/Main/ThirdContaints/ThirdContaint";
import ForthContaint from "./component/Main/ForthContaints/ForthContaint";
import FiftyComponent from "./component/Main/FifthContaints/FifthContaint";
import SixthContaint from "./component/Main/SixthContaints/SixthContaint";
import Footer from "./component/Footer/Footer"
import Youtub from "./component/Youtub/Youtub"

class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
          <FirstContaint/>
            <SecondContaints/>
              <ThirdContaint/>
                <ForthContaint/>
                  <FiftyComponent/>
                    <SixthContaint/>
                    <Youtub/>
                      <Footer/>

      </div>

    );
  }

}

export default App;
