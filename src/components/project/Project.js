import React from "react"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./project.css"
import "swiper/swiper.min.css"
import "swiper/css/pagination"
import project from "../../assets/project.jpg"
import time from "../../assets/time-icon.svg"
import cost from "../../assets/cost-icon.svg"
import feedback from "../../assets/feedback-icon.svg"
import pizza from "../../assets/pizza.png"
import apex from "../../assets/apex.png"
function Project() {
  const [isActive, setIsActive] = React.useState(0)
  return (
    <>
      <Swiper
        className="project-slider"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="container">
            <h2 className="description title">Последние проекты</h2>
            <div className="project">
              <div className="project__img">
                <img src={pizza}></img>
              </div>
              <div>
                <h5 className="project__title">Pizza - лендинг магазина еды</h5>
                <ul className="list">
                  <li className="list__item">
                    <div className="list__img">
                      <img src={time}></img>
                    </div>
                    <div>
                      <p className="project__desc">Сроки</p>
                      <span className="project__text">10 дней</span>
                    </div>
                  </li>
                  <li className="list__item">
                    <div className="list__img">
                      <img src={cost}></img>
                    </div>
                    <div>
                      <p className="project__desc">Сложность</p>
                      <span className="project__text">средняя</span>
                    </div>
                  </li>
                </ul>
                <div className="content">
                  <div className="content__img">
                    <img src={feedback}></img>
                  </div>
                  <div className="content__desc">
                    <p className="project__desc">Технологий саита</p>
                    <span className="project__text">
                      Магазин, разработанный на React с использованием Redux
                      Toolkit и SCSS, предлагает богатый набор функций, включая
                      фильтрацию, пагинацию и сортировку товаров. С помощью
                      Redux Toolkit, состояние приложения эффективно
                      управляется, обеспечивая легкую и предсказуемую работу с
                      данными.
                    </span>
                  </div>
                </div>
                <div className="project__links">
                  <a
                    href="https://pizza-56d88.web.app/"
                    target="_blank"
                    className="project__link"
                  >
                    <button className="project__btn btn" type="sumbit">
                      Ссылка на саит
                    </button>
                  </a>
                  <a
                    href="https://github.com/zlatov-anatoli/pizza"
                    target="_blank"
                    className="project__link"
                  >
                    <button className="project__btn btn" type="sumbit">
                      Ссылка на код
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <h2 className="description title">Последние проекты</h2>
            <div className="project">
              <div className="project__img">
                <img src={apex}></img>
              </div>
              <div className="project__body">
                <h5 className="project__title">
                  Apex - лендинг приложения для общения
                </h5>
                <ul className="list">
                  <li className="list__item">
                    <div className="list__img">
                      <img src={time}></img>
                    </div>
                    <div>
                      <p className="project__desc">Сроки</p>
                      <span className="project__text">3 дня</span>
                    </div>
                  </li>
                  <li className="list__item">
                    <div className="list__img">
                      <img src={cost}></img>
                    </div>
                    <div>
                      <p className="project__desc">Сложность</p>
                      <span className="project__text">Легкий </span>
                    </div>
                  </li>
                </ul>
                <div className="content">
                  <div className="content__img">
                    <img src={feedback}></img>
                  </div>
                  <div className="content__desc">
                    <p className="project__desc">Технологий саита</p>
                    <span className="project__text">
                      Сайт, разработанный на React, использует библиотеку Swiper
                      для создания интерактивных слайдеров и каруселей. Swiper
                      обеспечивает плавное перелистывание и анимацию контента.
                      Кроме того, в проекте используется SCSS предоставляет
                      расширенные возможности для написания стилей
                    </span>
                  </div>
                </div>
                <div className="project__links">
                  <a
                    href="https://apex-3a1d1.web.app/"
                    target="_blank"
                    className="project__social"
                  >
                    <button className="project__btn btn" type="sumbit">
                      Ссылка на саит
                    </button>
                  </a>
                  <a
                    href="https://github.com/zlatov-anatoli/apex"
                    target="_blank"
                    className="project__social"
                  >
                    <button className="project__btn btn" type="sumbit">
                      Ссылка на код
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Project
