import React, { useRef, useState } from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-app'
import styles from './style.module.css'
import { Button } from '../../common/button-common'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const ProductDetails = () => {
    const {t} = useTranslation()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className={styles.product_detail_section}>
                <WrapperContainer>
                    <div className={styles.product_details_row_wrapp}>
                        <Row className={styles.product_details_row}>
                            <Col className={styles.product_details_col} lg={6} md={12} sm={12} xs={12}>
                                <div className={styles.product_detail_content}>
                                    <h4>Фанера</h4>
                                    <p>
                                        Многослойный строительный материал,
                                        изготавливаемый путём склеивания специально
                                        подготовленного шпона
                                    </p>
                                    <div className={styles.product_detail_number_box}>
                                        <p>1000</p>
                                        <p>Едениц производится в день</p>
                                    </div>
                                    <div className={styles.hr}></div>
                                    <Button>{t("ProductMore.5")}</Button>
                                </div>
                            </Col>
                            <Col className={styles.product_details_col} lg={6} md={12} sm={12} xs={12}>
                                <>
                                    <Swiper
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                    >
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                        </SwiperSlide>
                                    </Swiper>
                                </>
                            </Col>
                        </Row>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default ProductDetails