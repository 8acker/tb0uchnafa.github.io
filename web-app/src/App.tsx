import * as React from 'react';
import { hot } from 'react-hot-loader';
import Assets from './utils/assets';
import './App.css';
import Link from "./components/Link/Link";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Assets.load('profile.jpg')} className="App-logo" alt="Thami Bouchnafa" />
        <p>Welcome to Thami Bouchnafa personal homepage</p>
        <Link href="https://twitter.com/tb0uchnafa" label="Twitter" logo={Assets.load('twitter_logo.png')}></Link>
        <Link href="https://facebook/com/tb0uchnafa" label="Facebook" logo={Assets.load('facebook_logo.png')}></Link>
      </header>
    </div>
  );
}

export default hot(module)(App);
