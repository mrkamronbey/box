import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../button-common";
import styles from "./card-common.module.css";

export const Card = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.imgbox}>
        <img src={props.image} width="240" height="190" alt="" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Link to={`/products/${props.id}`}>
        <Button>{t("Products.0")}</Button>
      </Link>
    </div>
  );
};
