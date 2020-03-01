import * as React from 'react';
import {hot} from 'react-hot-loader';
import Assets from './utils/assets';
import './App.css';
import Link from "./components/Link/Link";
import Tags from "./components/Tag/Tags";

const mastering = [
    '#Java',
    '#Kotlin',
    '#Node.js',
    '#Docker',
    "#Postgres",
    "#Redis",
    '#Jenkins',
    '#Kubernetes',
    '#Openshift'
];

const interestedIn = [
    '#BigData',
    '#AI',
    '#Robotics',
    '#React',
    '#MongoDB',
    '#Sports',
];

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Assets.load('profile.jpg')} className="App-logo" alt="Thami Bouchnafa"/>
                <p>Welcome to my homepage</p>
                <p>Thami Bouchnafa, Software Engineer as ETECTURE GmbH</p>
                <h2>Mastering:</h2>
                <Tags tags={mastering} />
                <h2>Interested in:</h2>
                <Tags tags={interestedIn} />
                <h2>Social Media:</h2>
                <div>
                    <Link href="https://www.linkedin.com/in/thami-bouchnafa-980b99a8" label="LinkedIn"
                          logo={Assets.load('linkedin_logo.png')}></Link>
                    <Link href="https://www.xing.com/profile/Thami_Bouchnafa" label="Xing"
                          logo={Assets.load('xing_logo.png')}></Link>
                    <Link href="https://twitter.com/tb0uchnafa" label="Twitter"
                          logo={Assets.load('twitter_logo.png')}></Link>
                    <Link href="https://facebook/com/tb0uchnafa" label="Facebook"
                          logo={Assets.load('facebook_logo.png')}></Link>
                </div>
            </header>
        </div>
    );
}

export default hot(module)(App);
