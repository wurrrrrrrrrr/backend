import { useState } from 'react';
import ImageUploader from "./ImageUploader";
import Navbar from "./component/Navbar";
import Video from "./component/Video";
import About from "./component/About";
import Footer from "./component/Footer";
import "./App.css";
import ShowSaveModal from "./Modal";

function App() {
  const [ifShowModal, setIfShowModal] = useState(false);
  
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Video />
        <About />
        <section className="section timeline">
        <div className="section-title">
          <h2>青光眼是怎麼一步步惡化的？</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
          {[
            {
              stage: '初期青光眼',
              description:
                '視力幾乎正常，無明顯症狀，僅在眼科檢查時可發現眼壓偏高或視神經杯盤比變大。患者常不自知。'
            },
            {
              stage: '早期視野缺損',
              description:
                '開始出現周邊視野輕微缺損，但中央視力仍未受影響。可能有輕微疲勞感或夜間視覺變差。'
            },
            {
              stage: '中期青光眼',
              description:
                '視野缺損區域擴大，病患可能發現看東西「有死角」或容易漏看。視神經損傷加劇。'
            },
            {
              stage: '進展期青光眼',
              description:
                '視力開始明顯受影響，閱讀或看人臉時容易模糊，中央視野開始受損。視神經損傷接近危險程度。'
            },
            {
              stage: '末期青光眼',
              description:
                '中央視力幾乎喪失，只剩極小的視野範圍。日常生活受到嚴重影響，可能接近失明。'
            }
          ].map((step, index) => (
            <article className="timeline-item" key={index}>
              <h3>{step.stage}</h3>
              <p>{step.description}</p>
              <span className="number">{index + 1}</span>
            </article>
          ))}
        </div>

        </section>

        <div className="background">
          <div className="section-title">
            <h2>青光眼偵測</h2>
          <div className="underline"></div>
          </div>
          <ImageUploader 
            setIfShowModal={setIfShowModal} // 控制 Modal 顯示
          />
          <ShowSaveModal 
            ifShowModal={ifShowModal}  // 控制 Modal 顯示
            setIfShowModal={setIfShowModal}  // 控制 Modal 隱藏
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
