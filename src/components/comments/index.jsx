import { BigContainer } from "../../style-app";
import Slider from "react-slick";
import { CardComments } from "../common/comments-card";
import styles from "./comments.module.css";
import { useTranslation } from "react-i18next";

const comments = [
  {
    id: "n1",
    title: "николас кейдж",
    text: "`Ravshan Yodik Production превзошли наши ожидания своими исключительными услугами по производству коробок. Внимание к деталям и высокое качество мастерства действительно впечатлили нас. Мы настоятельно рекомендуем их для любых потребностей в упаковке.` - Сара М., владелец розничного бизнеса",
  },
  {
    id: "n2",
    title: "николас кейдж",
    text: "`Ravshan Yodik Production превзошли наши ожидания своими исключительными услугами по производству коробок. Внимание к деталям и высокое качество мастерства действительно впечатлили нас. Мы настоятельно рекомендуем их для любых потребностей в упаковке.` - Сара М., владелец розничного бизнеса",
  },
  {
    id: "n3",
    title: "николас кейдж",
    text: "`Ravshan Yodik Production превзошли наши ожидания своими исключительными услугами по производству коробок. Внимание к деталям и высокое качество мастерства действительно впечатлили нас. Мы настоятельно рекомендуем их для любых потребностей в упаковке.` - Сара М., владелец розничного бизнеса",
  },
  {
    id: "n4",
    title: "николас кейдж",
    text: "`Ravshan Yodik Production превзошли наши ожидания своими исключительными услугами по производству коробок. Внимание к деталям и высокое качество мастерства действительно впечатлили нас. Мы настоятельно рекомендуем их для любых потребностей в упаковке.` - Сара М., владелец розничного бизнеса",
  },
  {
    id: "n5",
    title: "николас кейдж",
    text: "`Ravshan Yodik Production превзошли наши ожидания своими исключительными услугами по производству коробок. Внимание к деталям и высокое качество мастерства действительно впечатлили нас. Мы настоятельно рекомендуем их для любых потребностей в упаковке.` - Сара М., владелец розничного бизнеса",
  },
];

export const Comments = () => {
    const {t}=useTranslation()
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows:1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 1,
        },
      },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       rows: 2,
    //     },
    //   },
    ],
  };
  return (
    <div className={styles.comments}>
      <BigContainer>
        <h2 className={styles.choose_title}>{t("Comments.0")}</h2>
        <hr className={styles.line} />
        <Slider {...settings}>
          {comments.map((comment) => (
            <CardComments
              title={comment.title}
              text={comment.text}
              key={comment.id}
            />
          ))}
        </Slider>
      </BigContainer>
    </div>
  );
};
