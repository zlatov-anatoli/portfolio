import React from "react"
import "./about.css"
import logo from "../../assets/porto.svg"
import github from "../../assets/github.svg"
import avatar from "../../assets/avatar.jpg"
import vk from "../../assets/vk.svg"
import telegram from "../../assets/telegram.svg"

function About() {
  return (
    <div className="container">
      <header className="header">
        <a className="header__logo logo" href="#">
          <img className="logo__img" src={logo}></img>
        </a>
        <ul className="header__social social">
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
      </header>

      <div className="about__info">
        <div className="about__desc">
          <p className="about__subject">Front End Developer</p>
          <h1 className="about__title">Златов Анатолий</h1>
          <p className="about__text">
            Мое имя - Анатолий, и я молодой амбициозный фронт-энд разработчик. В
            возрасте 22 лет, находясь на третьем курсе обучения по специальности
            "Физика и Инжинерия", я уже имею значительный опыт в области
            веб-разработки.
          </p>
        </div>
        <div className="about__img">
          <img className="about__avatar" src={avatar}></img>
        </div>
      </div>
    </div>
  )
}

export default About
