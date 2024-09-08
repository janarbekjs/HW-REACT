import "./App.css";

//! 1-Task
//! Зачем нужен  webpack ?
//? Webpack — это мощный инструмент для сборки и оптимизации кода в веб-разработке.
//! Зачем нужен babel ?
//? Babel — это компилятор, который преобразует ваш современный JavaScript для запуска в старых браузерах.
//! Зачем нужен node.js ?
//? Node.js используется при написании веб-приложений с интенсивным вводом-выводом. 

//! 2-Task
//! Что такре React ?
//?  React — это JavaScript-библиотека для создания пользовательских интерфейсов.
//! Зачем нужен node.js ?
//?  Node.js это серверная платформа, что работает на движке Google Chrome – V8.
//! npm для чего ?
//? npm, (node package manager) — это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.js.
//? npm, для создание папку (node_modules,пакетов) для каждого вашего проекта. 

//! 3-Task
function App() {
  return (
    <section>
      <h1>Трикотажное платье</h1>
      <img src="https://shorturl.at/2PnZG" alt="" />
      <div className="container">
        <div className="companent">
          <p className="parograft">Цвета в наличии</p>
          <div className="coropca"></div>
          <div className="coropca1"></div>
          <div className="coropca2"></div>
          <div className="coropca3"></div>
        </div>
        <div className="companent1">
          <p>Размеры в наличии</p>
          <p>XXS, XS, S, M, L, XL, XXL</p>
        </div>
      </div>

      <div className="rabotaet">
        <h1>Платье</h1>
        <img src="https://shorturl.at/qADhz" alt="" />
        <div className="container">
          <div className="companent">
            <p className="parograft">Цвета в наличии</p>
            <div className="corop"></div>
            <div className="corop1"></div>
            <div className="corop2"></div>
            <div className="corop3"></div>
          </div>
          <div className="companent1">
            <p>Размеры в наличии</p>
            <p>XXS, XS, S, M, L, XL, XXL</p>
          </div>
        </div>
      </div>

      <div className="ishtedigo">
        <h1>Вязанный топ</h1>
        <img src="https://shorturl.at/FjKPc" alt="" />
        <div className="container">
          <div className="companent">
            <p className="parograft">Цвета в наличии</p>
            <div className="coropca"></div>
            <div className="coropca1"></div>
            <div className="coropca2"></div>
            <div className="coropca3"></div>
          </div>
          <div className="companent1">
            <p>Размеры в наличии</p>
            <p>XXS, XS, S, M, L, XL, XXL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
