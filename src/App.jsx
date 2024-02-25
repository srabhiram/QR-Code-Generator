import { useState } from "react";
import QRCode from "qrcode";
import "./App.css";
import { Url } from "./Components/Url";
import { Text } from "./Components/Text";
import { Landingpage } from "./Components/LadingPage";

function App() {
  const [url, seturl] = useState("");
  const[text, setText] = useState("")
  const[datatext, setdatatext] = useState("")
  const [dataurl, setdataurl] = useState("");

  const QrcodeforUrl = (event) => {
    event.preventDefault();
    QRCode.toDataURL(url, { width: 300 }, (err, dataurl) => {
      if (err) console.log(err);

      setdataurl(dataurl);
    
    });
  };
  const QrcodeforText = (event)=>{
    event.preventDefault();
    QRCode.toDataURL(text, { width: 300 }, (err, datatext) => {
      if (err) console.log(err);

      setdatatext(datatext);
      
    });
  }

  return (
    <>
      <div className="container">
        <header className="sticky top-0 backdrop-blur-sm">
          <Landingpage />
        </header>
        <section className="mx-3">
          <Url
            url={url}
            seturl={seturl}
            dataurl={dataurl}
            function={QrcodeforUrl}
            setdataurl={setdataurl}
          />
          <br />
          <Text
            url={text}
            seturl={setText}
            dataurl={datatext}
            function={QrcodeforText}
            setdataurl={setdataurl}
          />
        </section>
      </div>
    </>
  );
}

export default App;
