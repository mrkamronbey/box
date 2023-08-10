import { useTranslation } from "react-i18next";
import styles from "./form-card.module.css";

export const FormCard = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.form_card}>
      <form className={styles.form_formik}>
        <label className={styles.form_label} htmlFor="name">
          {t("Form.4")}
          <input type="text" id="name" name="name" placeholder={t("Form.11")} />
        </label>
        <div className={styles.form_label_box}>
          <label className={styles.form_label} htmlFor="phone">
            {t("Form.5")}
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+ 7 999 199 19 19"
            />
          </label>
          <label className={styles.form_label} htmlFor="email">
            {t("Form.6")}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="info@mail.ru"
            />
          </label>
        </div>
        <label className={styles.form_label} htmlFor="coment">
          {t("Form.7")}
          <textarea
            type="text"
            id="coment"
            name="coment"
            placeholder={t("Form.10")}
          />
        </label>
        <div className={styles.privacy}>
          <input
            type="checkbox"
            id="check"
            name="check"
          />
          <p>{t("Form.8")}</p>
        </div>
        <button className={styles.form_btn}>{t("Form.9")}</button>
      </form>
    </div>
  );
};
