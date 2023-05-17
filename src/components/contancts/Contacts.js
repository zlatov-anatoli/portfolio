import React from "react"
import "./contacts.css"
import github from "../../assets/github.svg"
import vk from "../../assets/vk.svg"
import telegram from "../../assets/telegram.svg"

function Contacts() {
  return (
    <div className="container">
      <h2 className="description title">Свяжитесь со мной</h2>
      <div className="contacts">
        <form className="contacts__info">
          <p className="contacts__text">
            Можете просто оставить заявку, я позвоню вам сегодня
          </p>
          <input
            type="text"
            placeholder="Ваше имя"
            className="contacts__input input"
          />
          <input
            type="number"
            placeholder="Ваш телефон"
            className="contacts__input"
          />
        </form>
        <div className="info">
          <ul className="items">
            <li className="items__unit">
              <p className="items__title">Телефон</p>
              <p className="items__text">+373 78197878</p>
            </li>
            <li className="items__unit">
              <h4 className="items__title">Почта</h4>
              <p className="items__text">zlatov.anatoli@mail.ru</p>
            </li>
          </ul>
          <div className="info">
            <h4 className="items__title">Соцсети</h4>
            <div className="info__socials">
              <a
                href="https://github.com/zlatov-anatoli"
                target="_blank"
                className="info__link"
              >
                git.me/zlatov
              </a>
              <a
                href="https://vk.com/id301819528"
                target="_blank"
                className="info__link"
              >
                vk.me/zlatov
              </a>
              <a
                href="https://t.me/Gliikp"
                target="_blank"
                className="info__link"
              >
                t.me/zlatov
              </a>
            </div>
            <ul className="social social__info">
              <li className="social__item">
                <a
                  href="https://github.com/zlatov-anatoli"
                  target="_blank"
                  className="social__link"
                >
                  <img className="social__media" src={github}></img>
                </a>
              </li>
              <li className="social__item">
                <a
                  href="https://vk.com/id301819528"
                  target="_blank"
                  className="social__link"
                >
                  <img className="social__media" src={vk}></img>
                </a>
              </li>
              <li className="social__item">
                <a
                  href="https://t.me/Gliikp"
                  target="_blank"
                  className="social__link"
                >
                  <img className="social__media" src={telegram}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
