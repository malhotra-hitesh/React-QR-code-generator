import QRCode from 'qrcode';
import {useState} from 'react';

function App() {
  // setting the state by declaring useState
  const [url,setUrl]=useState('');
  const [qr, setQR]=useState('');

  //setting the QRcode settings
  const GenerateQRCode=()=>{
    QRCode.toDataURL(url,{
      width:400,
      margin:1,
      color:{
        dark:'#335343FF',
        light: '#EEEEEEFF'
      }
    },(err,url)=>{
      // setting the error message
      if(err) return console.error(err)
      console.log(url)
      setQR(url);
    })
  };

  return (
    <>
    <h1>QR Generator</h1>
    <input className="input-box"
         type="text"
          placeholder="Enter the url"
         value={url}
         onChange={e=>setUrl(e.target.value)}
    />
    <button className="generate-btn" onClick={GenerateQRCode}>Generate QR</button>
    {qr && <>
    <img src={qr}  />
    <a href={qr} download="qrcode.png">Download</a>
    </>}
    </>
  );
}

export default App;
