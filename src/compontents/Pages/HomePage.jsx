import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/home.css'

const HomePage = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="homeImg"
          src="https://as01.epimg.net/meristation/imagenes/2021/12/07/noticias/1638911945_908405_1638912031_noticia_normal.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Боевики/Приключения | 1 час 41 минута | 2022 </h3>
          <p>
          После смерти короля Т'Чаллы королева Рамонда, Шури, М'Баку, Окойе и Дора Миладж сражаются, чтобы защитить Ваканду от мировых держав.
          </p> <button className='home_btn'>Смотреть</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="homeImg"
          src="https://cdn.kanobu.ru/articles/pics/tmp/images/2022/10/3/c71c7ff2-05bc-405b-804a-1d90c1ac077c.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Боевики/Приключения | 1 час 41 минута | 2022 </h3>
          <p>
          После смерти короля Т'Чаллы королева Рамонда, Шури, М'Баку, Окойе и Дора Миладж сражаются, чтобы защитить Ваканду от мировых держав.
          </p> <button className='home_btn'>Смотреть</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="homeImg"
          src="https://cdn.murphysmultiverse.com/wp-content/uploads/2021/07/flskjfkldsjfsfsf.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Боевики/Приключения | 1 час 41 минута | 2022 </h3>
          <p>
          После смерти короля Т'Чаллы королева Рамонда, Шури, М'Баку, Окойе и Дора Миладж сражаются, чтобы защитить Ваканду от мировых держав.
          </p> <button className='home_btn'>Смотреть</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage