import React from 'react'
import Nataly from '../../image/Nataly.png'
import Sergei from '../../image/Sergei.png'
import Denis from '../../image/Denis.png'
import '../Carousel/Carousel.css'
import Item from './Item'
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 1, itemToShow: 1 },
  { width: 550, itemToShow: 2 },
  { width: 768, itemToShow: 3 },
  { width: 1200, itemToShow: 4 },
]

function CarouselContainer() {
  return (

    <>
      <h1>Отзывы</h1>
      <div className='carousel-container'>
        <Carousel breakPoints={breakPoints}>
          <Item>
        <div className="carousel-card">
          <img className="carousel-img" src={Nataly} alt="" />
          <div className="review-container">
            <span>Наталья</span>
            <p>Спасибо за этот сайт. Не смотря на то, что в канун нового года у них такие очереди и так много нервных людей вокруг - дарят внимание, качественно выполняют работу и заряжают праздничным настроением</p>
          </div>
        </div>
          </Item>
          <Item>
        <div className="carousel-card">
          <img className="carousel-img" src={Sergei} alt="" />
          <div className="review-container">
            <span>Сергей</span>
            <p>Ребят! Вы реально сделали очееень крутую тему! Это то, что не хватало! Что может быть лучше настоящих эмоций! Всегда ломаешь голову, что подарить и в основном приходишь к обычному:Духи, вещи, деньги! И именно вы перечеркнули стандарты! Спасибо Вам за вашу идею!</p>
          </div>
        </div>
          </Item>
          <Item>
        <div className="carousel-card">
          <img className="carousel-img" src={Denis} alt="" />
          <div className="review-container">
            <span>Денис</span>
            <p>Рекомендую компанию! У нас уже в классе целая традиция благодаря Дилявер сложилась. На каждое мероприятие именно здесь подарки приобретем. Сладкие подарки в красивой упаковке всегда беспроигрышный вариант.</p>
          </div>
        </div>
          </Item>
        </Carousel>
      </div>
    </>

  )
}

export default CarouselContainer