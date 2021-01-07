import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect, Fragment} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Box from './ui/box';
import './loader.css';
import News from './News';
import './index.css';
import { Router } from 'react-router-dom';
import {Helmet} from 'react-helmet';


function Food({name}){
  return `Hello ${name}`;
}

function App() {
  const [isLoading, setLoading] = useState(true);
  const [covidData, setData] = useState({});
  const [covidNews, setNews] = useState({});
  async function hello(){
    const coronaData = await axios.get('http://hillaapi.iwinv.net/covidproxy.php?key=499127e19f23e274d2e8ff5042a206c26');
    const coronaNews = await axios.get('http://hillaapi.iwinv.net/newsproxy.php?key=09f581ba05b94930bd04a81c31bf945a');
    setData(coronaData.data);
    setNews(coronaNews.data.articles);
    setLoading(false);
  }
  useEffect(() => {
    if(isLoading == true){
      hello();
    }
  })
  return (
    <div>
      <Helmet>
        <title>바이코로나-2021Version</title>
        <meta name="description" content="빠르고 간단한 코로나 실시간 정보 바이코로나!" data-react-helmet="true"/>
      </Helmet>
      {isLoading ? <div class="load"><Loader type="Audio" color="#ff7b54" height={100} width={100} /> </div> : 
      
      <Fragment>
        <h1 class="mainer">Byecorona.ga</h1>
        <h1 class="dev">Developed by Hillasen</h1>
      <Box today={covidData.korea.newCase} infected={covidData.korea.totalCase} cured={covidData.korea.recovered} death={covidData.korea.death}/>
      <div class="news_box">
      {covidNews.map(news => (
        <News title={news.title} url={news.url} description={news.description}/>
      ))}
      </div>
      <h6 class="copy">copyright © by HILLASEN 2020-2021</h6>
      </Fragment>
      }
    </div>
  );
}

export default App;
