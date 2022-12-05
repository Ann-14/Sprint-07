import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CheckBox } from './components/CheckBox';
import { PanelStyled } from './styles/PanelStyled'




let webPrice = 0
let seoPrice = 0
let adsPrice = 0

function App() {
  const [checkWeb, setCheckWeb] = useState(false)
  const [checkSeo, setCheckSeo] = useState(false)
  const [checkAds, setCheckAds] = useState(false)
  const [pages, setPages] = useState(0)
  const [languages, setLanguages] = useState(0)


  const webCheckHandler = (e) => {
    setCheckWeb(!checkWeb)
    webPrice = (+e.target.value)

  }
  const seoCheckHandler = (e) => {
    setCheckSeo(!checkSeo)
    seoPrice = (+e.target.value)
  }
  const adsCheckHandler = (e) => {
    setCheckAds(!checkAds)
    adsPrice = (+e.target.value)

  }

  if (checkWeb === false) { webPrice = 0 }
  if (checkSeo === false) { seoPrice = 0 }
  if (checkAds === false) { adsPrice = 0 }


  const handlePages = (e) => {
    setPages(e.target.value)

  }
  const handleLanguages = (e) => {
    setLanguages(e.target.value)

  }


  return (
    <>

      <div>
        <CheckBox
          label={'Página Web (500€)'}
          value={500}
          name='Web'
          id='checkbox1'
          checked={checkWeb}
          onChange={(e) => webCheckHandler(e)}
        />
      </div>
      {checkWeb && (

        <>
          <PanelStyled>
            <input type='number' value={pages} name="pages" onChange={handlePages} placeholder='Pages' />
            <label htmlFor="userName"></label>
            <input type='number' value={languages} name="languages" onChange={handleLanguages} placeholder='Languages' />
            <label htmlFor="languages"></label>
          </PanelStyled>
        </>
      )}
      <div className='flex items-center pl-3'>
        <CheckBox
          label={'Consultoría Seo (300€)'}
          value={300}
          name='Seo'
          id='checkbox2'
          checked={checkSeo}
          onChange={(e) => seoCheckHandler(e)}
        />
      </div>
      <div>
        <CheckBox
          label={'Campaña Google Ads(200€)'}
          value={200}
          name='Ads'
          id='checkbox3'
          checked={checkAds}
          onChange={(e) => adsCheckHandler(e)}
        />
      </div>

      <div>{`Total:${(checkAds ? adsPrice : 0) + (checkSeo ? seoPrice : 0) + (checkWeb ? (pages * languages) * 30 + webPrice : 0)} €`}</div>

    </>
  );
}

export default App;
