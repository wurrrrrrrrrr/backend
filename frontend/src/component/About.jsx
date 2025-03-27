import React from 'react';
import '../csstype/About.css';
import '../csstype/Video.css';

const AboutAndServices = () => {
  return (
    <>
      {/* About Section */}
      <section className="section about">
        <div className="section-center about-center">
          {/* about img */}
          <article className="about-img">
            <img
              src="/picture/160.jpg"
              className="hero-photo"
              alt="about img"
            />
          </article>
          {/* about info */}
          <article className="about-info">
            {/* section title */}
            <div className="section-title about-title">
              <h2>青光眼</h2>
              <div className="underline"></div>
            </div>
            {/* end of section title */}
            <p>
            青光眼是一系列會導致視神經受損，進而造成視野缺損、
            視力喪失的眼疾。其中最常見的是隅角開放性青光眼（開角型青光眼）
            ，隅角閉鎖性青光眼（閉角型青光眼）次之，但東亞裔族群罹患後者的機會較歐裔族群高
            。也有部分青光眼患者的眼壓是正常的，稱爲正常眼壓性青光眼。
            </p>
            <p>
            成因
            ：青光眼的定義一直在更新，早期人們認為眼壓高，等同於青光眼，而後來發現部分青光眼患者眼壓卻是正常的。
            所以青光眼的定義隨著人們對這個疾病認識的提高而變化著。目前認為青光眼的成因主要來自「眼內壓過高」及
            「視神經血液灌流不良」兩個因素，而視神經為眼球最脆弱的部位，一旦眼球的壓力變大，就會壓迫視神經，
            造成視神經傷害，最後導致青光眼。
            </p>
            <a
              href="https://zh.wikipedia.org/zh-tw/%E9%9D%92%E5%85%89%E7%9C%BC"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              更多資訊
            </a>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-grey">
        {/* section title */}
        <div className="section-title">
          <h2>青光眼常見問題 Q&A</h2>
          <div className="underline"></div>
        </div>
        {/* end of section title */}
        <div className="services-center section-center">
          {/* single service */}
          <article className="service">
            <h3>青光眼是什麼？</h3>
            <div className="underline"></div>
            <p>
            青光眼是由於眼壓異常而導致視神經萎縮，視野逐漸縮小，是一種會持續進行的視神經疾病，而青光眼所造成的傷害是不可逆的。
            </p>
          </article>

          <article className="service">
            <h3>青光眼高危險群是你？</h3>
            <div className="underline"></div>
            <p>
            長期使用類固醇的患者，若同時有高度近視或眼壓偏高的情形，再加上有青光眼家族史，將大幅提高罹患青光眼的風險。
            這類族群應定期接受眼壓與視神經檢查，及早發現、及早治療，以避免不可逆的視力損害。
            </p>
          </article>

          <article className="service">
            <h3>青光眼會有什麼症狀?</h3>
            <div className="underline"></div>
            <p>
            急性青光眼:會有突然視力模糊、眼睛疼痛、頭痛、噁心嘔吐等症狀。
            慢性青光眼:患者多數沒有症狀，直到視力模糊，或看東西只能看到中央部份，出現視野缺損，視神經已受嚴重且不可逆的傷害。
            </p>
          </article>

        </div>
      </section>
    </>
  );
};

export default AboutAndServices;
