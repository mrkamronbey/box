import Slider from "react-slick";
import { BigContainer } from "../../style-app";
import styles from "./partners.module.css";
import { useTranslation } from "react-i18next";
import "./style.css";
import logo1 from "../../assets/partners/GooglePay.png";
import logo2 from "../../assets/partners/SamsungPay.png";
import logo3 from "../../assets/partners/Maestro.png";
import logo4 from "../../assets/partners/Klarna.png";
import logo5 from "../../assets/partners/ShopPay.png";
import logo6 from "../../assets/partners/ApplePay.png";
import logo7 from "../../assets/partners/westernunion.png";
import logo8 from "../../assets/partners/mastercard.png";
import logo9 from "../../assets/partners/Skrill.png";
import logo10 from "../../assets/partners/AmazonPay.png";
import logo11 from "../../assets/partners/Stripe.png";
import logo12 from "../../assets/partners/Payoneer.png";
import logo13 from "../../assets/partners/Visa&mastercard.png";
import logo14 from "../../assets/partners/CashApp.png";
import logo15 from "../../assets/partners/Bitcoin.png";
import logo16 from "../../assets/partners/Visa.png";
import logo17 from "../../assets/partners/MoneyGram.png";
import logo18 from "../../assets/partners/Paypal.png";
import logo19 from "../../assets/partners/Square.png";
import logo20 from "../../assets/partners/ethereum.png";

export const Partner = () => {
  const {t} =useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div className={styles.partner_section}>
      <BigContainer>
        <div className={styles.choose_title}>
          <h2>{t("Partner.0")}</h2>
        </div>
        <div className={styles.scroll_div}>
          <Slider {...settings}>
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
            <div>
              <img src={logo5} alt="" />
            </div>
            <div>
              <img src={logo6} alt="" />
            </div>
            <div>
              <img src={logo7} alt="" />
            </div>
            <div>
              <img src={logo8} alt="" />
            </div>
            <div>
              <img src={logo9} alt="" />
            </div>
            <div>
              <img src={logo10} alt="" />
            </div>
            <div>
              <img src={logo11} alt="" />
            </div>
            <div>
              <img src={logo12} alt="" />
            </div>
            <div>
              <img src={logo13} alt="" />
            </div>
            <div>
              <img src={logo14} alt="" />
            </div>
            <div>
              <img src={logo15} alt="" />
            </div>
            <div>
              <img src={logo16} alt="" />
            </div>
            <div>
              <img src={logo17} alt="" />
            </div>
            <div>
              <img src={logo18} alt="" />
            </div>
            <div>
              <img src={logo19} alt="" />
            </div>
            <div>
              <img src={logo20} alt="" />
            </div>
          </Slider>
        </div>
      </BigContainer>
    </div>
  );
};
