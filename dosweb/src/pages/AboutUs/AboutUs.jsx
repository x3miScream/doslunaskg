import React from 'react';
import './AboutUs.css';

import aboutUsSecitonImage from '../../assets/images/items/1/1.jpg';
import logoImage from '../../assets/images/logo/Dos_Lunas_Logo_Centered-Square.svg'

const AboutUs = () => {
    return(<div className='about-us-page'>
        <div className='about-us-page-header'>
            <figure><img src={logoImage} alt='Loading...'></img></figure>
            <h1>Профиль</h1>
        </div>

        <div className='about-us-about-us-info-container app-default-padded'>
            <div className='about-us-info-top m-t-m'>
                <div className='about-us-info-top-left'>
                    <h1>О НАС</h1>
                    <p className='know-more-hint'>УЗНАЙТЕ БОЛЬШЕ О КОСМЕТИКЕ DOSLUNAS</p>
                    <hr className='divider-solid-black'></hr>
                    <h1><span className='color-orange'>Мы</span> Косметика ДОСЛУНАС</h1>
                    <p>Наша история началась в Лондоне, Англия, в 1990 году. Мы разрабатываем собственные средства по уходу за кожей и волосами, которые производятся из самых инновационных и эффективных натуральных ингредиентов, предлагаемых научно разработанной косметикой, основанной на нашем опыте и разработанной в сотрудничестве с ведущими физиками, врачами, пластическими хирургами и дерматологами.</p>
                </div>
                <div className='about-us-info-top-right'>
                    <h1><span className='color-orange'> КРЕАТИВНАЯ </span>командная работа</h1>
                </div>
            </div>
            <div className='about-us-info-bottom m-t-m'>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
            </div>
        </div>

        <div className='about-us-about-uniqueness-container'>
            <div className='app-default-padded'>
                <div className='uniqueness-section-top'>
                <h1>Уникальность</h1>
                </div>
                <div className='uniqueness-section-bottom'>
                    <div className='uniqueness-section-left'>
                        <span className='color-orange'> <h4>С ДОСЛУНАС</h4> </span>
                        <hr className='divider-solid-black'></hr>

                        <h1><span className='color-orange'> Высокое </span>Качество</h1>
                        <p>Мы постоянно стремимся разрабатывать лучшую косметику, не содержащую вредных для кожи и волос ингредиентов, поскольку цель каждого продукта — излучать красоту здорового внешнего вида, связывающего нас с природой и обществом.</p>

                        <h1><span className='color-orange'>  </span>Доступность</h1>
                        <p>Наши цены охватывают все дизайны и продукты, позволяя нашим клиентам иметь различные ценовые диапазоны. Чем мы отличаемся от других? DOS LUNAS делает ставку в своей продукции на выбор высококачественного сырья.</p>
                    </div>

                    <div className='uniqueness-section-right'>
                        <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                    </div>
                </div>
            </div>
        </div>

        <div className='about-us-our-services-container app-default-padded'>
            <div className='about-us-our-services-section-top'>
                <h1>НАШИ УСЛУГИ</h1>
            </div>
            <div className='about-us-our-services-section-bottom'>
                <div className='about-us-our-services-section-left'>
                    <span className='color-orange'> <h4>ПРОФЕССИОНАЛЬНО и НАДЕЖНО</h4> </span>
                    <hr className='divider-solid-black'></hr>
                    <h1><span className='color-orange'> DOSLUNAS </span>Маркетинговые услуги</h1>
                    <p>DOS LUNAS предлагает услуги b2b и b2c розничным магазинам, а также через наши онлайн-сервисы в наших филиалах в странах Персидского залива, на Ближнем Востоке и в других странах по всему миру.</p>
                </div>

                <div className='about-us-our-services-section-right'>
                    <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                </div>
            </div>
        </div>

        <div className='about-us-our-values-container'>
            <div className="our-values-inner app-default-padded">
                <div className='our-values-section-top'>
                    <h1>НАШИ ЦЕННОСТИ</h1>
                </div>
                <div className='our-values-section-bottom'>
                    <span className='color-orange'> <h4>КАК МЫ ОТЛИЧАЕМСЯ ОТ ДРУГИХ</h4></span>
                    <hr className='divider-solid-black'></hr>

                    <div className='our-values-list'>
                        <h1><span className='color-orange'> <i className="fa-solid fa-flag"></i> </span>Миссия</h1>
                        <p>Все расы, все полы, задуманные для охвата всех потребителей. быть мировым лидером в области ухода за кожей. удовлетворять потребности клиентов в услугах высочайшего качества и обеспечивать безопасную и сложную рабочую среду для всех сотрудников. гигиена и личная гигиена с брендами, которые помогают людям чувствовать себя хорошо, хорошо выглядеть и получать больше от жизни. Как организация, она обязуется придерживаться высоких стандартов и творческого развития с концепцией предприятия, которая достигла всех целей.</p>

                        <h1><span className='color-orange'> <i className="fa-solid fa-eye"></i> </span>Наше Видение</h1>
                        <p>Быть выбором номер один для ухода за кожей, здоровья и благополучия, чтобы помочь людям чувствовать себя более уверенно относительно своей внешности.</p>

                        <h1><span className='color-orange'> <i className="fa-regular fa-gem"></i> </span>Наши Ценности</h1>
                        <p>Наши основные ценности включают в себя приверженность, инновации, честность и обслуживание. Мы стремимся создать уникальную культуру для наших клиентов и сотрудников, в то же время мы стремимся к росту и развитию. Мы также ценим честность и лояльность в предоставлении наилучшего обслуживания для наших клиентов.</p>

                        <h1><span className='color-orange'> <i className="fa-solid fa-people-group"></i> </span>Растущая Семья</h1>
                        <p>Мы всегда стремимся быть мировым брендом, добиваясь своего присутствия во всех частях света посредством высокого качества нашей продукции, а не заботы.</p>

                        <h1><span className='color-orange'> <i className="fa-solid fa-chart-line"></i> </span>Основа Успеха</h1>
                        <p>Мы считаем, что командная работа имеет очень большое преимущество в достижении прогресса и развития в обществе. Мы считаем, что когда есть упорный труд и сотрудничество многих людей, работа становится самой легкой. Также мы считаем, что дух сотрудничества делает возможным обмен опытом, что является важнейшим звеном в успехе любой работы.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='about-us-our-customers-container app-default-padded'>
            <div className='our-customers-section-top'>
                <h1>НАШИ КЛИЕНТЫ</h1>
                
            </div>
            <div className='our-customers-section-bottom'>
                <span className='color-orange'> <h4>ПОЗНАКОМЬТЕСЬ С КЛИЕНТАМИ DOSLUNAS</h4></span>
                <hr className='divider-solid-black'></hr>
                <h1><span className='color-orange'> Мы </span>Клиенты Дослунас</h1>
            </div>
            <div className='our-customers-section-customers-grid'>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
                <figure><img src={aboutUsSecitonImage} alt='Loading...'></img></figure>
            </div>
        </div>
    </div>)
};

export default AboutUs;