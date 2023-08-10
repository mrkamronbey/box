import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index"
import HeroCommon from "../../common/hero-common";

const ProductMoreHero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroCommon
        heroTitle={t("ProductMore.0")}
        heroText={t("ProductMore.1")}
        isBtn={true}
        heroBtn={<Button>{t("ProductMore.2")}</Button>}
        id={"form"}
      />
    </>
  );
};

export default ProductMoreHero;
