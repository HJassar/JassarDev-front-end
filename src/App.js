import './App.css';
import { connect } from 'react-redux'

import LightBox from './components/LightBox/LightBox';
import MySkills from './components/MySkills/MySkills';
import Frames from './components/Frames/Frames';
import Table from './components/Table/Table';

const App = ({ night }) => {
  return (
    <div className={['App', !night ? 'day' : ''].join(' ')}>
      <div id="container">
        <div className={['JassarDev', night ? 'night glow' : 'day'].join(' ')}>
          Jassar.<span>Dev</span>
        </div>
        <LightBox />
        <MySkills />
        <Frames />
        <Table />
      </div>
      <div id='too-small' style={{ color: night ? 'white' : 'black' }} >
        <h1>No, this website is not responsive</h1>
        This website is not responsive and will only work on your desktop. Deal with it...
      </div>
    </div >
  );
}

const mapStatesToProps = state => ({
  night: state.ui.night
})

export default connect(mapStatesToProps)(App)
