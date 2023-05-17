import React from "react"
import "./advantages.css"
import agreement from "../../assets/agreement.svg"
import contract from "../../assets/contract.svg"
import conversation from "../../assets/conversation.svg"
import deadline from "../../assets/deadline.svg"
import results from "../../assets/results.svg"
import storage from "../../assets/storage.svg"
function Advantages() {
  return (
    <div className="container">
      <h2 className="description title">Мой преимущества</h2>
      <ul className="advantages">
        <li>
          <div className="advantages__img">
            <img src={contract}></img>
          </div>
          <h4 className="advantages__title">Работа в команде</h4>
          <p className="advantages__text">
            Я обладаю навыками эффективного взаимодействия с дизайнерами и
            бэк-энд разработчиками, что позволяет мне успешно интегрировать
            фронт-энд
          </p>
        </li>
        <li>
          <div className="advantages__img">
            <img src={deadline}></img>
          </div>
          <h4 className="advantages__title">Саморазвитие</h4>
          <p className="advantages__text">
            В мои 22 года я обладаю молодостью и энергией, которые позволяют мне
            быть гибким и адаптивным фронт-энд разработчиком
          </p>
        </li>
        <li>
          <div className="advantages__img">
            <img src={agreement}></img>
          </div>
          <h4 className="advantages__title">Осваиваю технологий</h4>
          <p className="advantages__text">
            Я быстро осваиваю новые технологии и фреймворки и готов применять их
            в практических проектах,
          </p>
        </li>
        <li>
          <div className="advantages__img">
            <img src={results}></img>
          </div>
          <h4 className="advantages__title">Точно в срок</h4>
          <p className="advantages__text">
            Сдаю работу согласно дэлдаинам за обговоренное время
          </p>
        </li>
        <li>
          <div className="advantages__img">
            <img src={storage}></img>
          </div>
          <h4 className="advantages__title">Работа с back-end</h4>
          <p className="advantages__text">
            Я владею навыками работы с Web API, успешно взаимодействуя с
            серверной частью(fetch,axios)
          </p>
        </li>
        <li>
          <div className="advantages__img">
            <img src={conversation}></img>
          </div>
          <h4 className="advantages__title">Навык общения</h4>
          <p className="advantages__text">
            Я отлично коммуницирую, умею ясно и эффективно передавать информацию
            команде и клиентам.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Advantages
