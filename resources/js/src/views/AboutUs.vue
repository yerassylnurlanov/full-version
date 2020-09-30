<template>
    <div id="about-us">
        <div class="vx-row teaser vx-card">
            <div class="vx-col w-2/3">
                <div class="title mr-20  ml-2 ">
                    <h1 class="text-white">О нас</h1></div>
                <div class="subtitle mr-20  mt-5">
                    <h4 class="text-white">Добро пожаловать в компанию по страхованию жизни нового поколения</h4 >
                </div>
            </div>
            <div class="vx-col w-1/3">
                <img src="@assets/images/elements/teaser.png" class="teaser-img responsive" alt="teaser image">
            </div>
        </div>
        <div class="main-horizontal  vx-row mt-10 justify-evenly">
            <div class="vx-col w-2/5 text-lefter vx-card">
                <h4 class="text-black">Freedom Finance Life – компания страхования жизни, обладающая большими возможностями и потенциалом.</h4>
            </div>
            <div class="vx-col w-2/5 text-righter">
                <span class="text-black">Основана в 2014 году (прежнее название – «Азия Life»). С 2018 года компания работает под брендом Freedom Finance. <br>
                    На данный момент у нас 335 468 застрахованных в 19 городах Казахстана. Мы реализуем стратегию, которая обеспечит казахстанцев страховыми продуктами нового поколения.</span>
            </div>
        </div>
        <div class="team mt-10">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">Наша команда</span>
            </vs-divider>
            <div class="carousel-example">
                <swiper :options="teamMembers" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                    <swiper-slide>
                        <a href="/about-us/our-team">
                            <img src="@assets/images/portrait/aza.jpg" alt="banner">
                            <h5 class="mt-5 mb-1">Ердесов Азамат Джансултанович</h5>
                            <span >Председатель Правления</span>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <a href="/about-us/our-team">
                        <img src="@assets/images/portrait/ayman.jpg" alt="banner">
                        <h5 class="mt-5 mb-1">Мухтыбаева Айман Абдикаппаровна </h5>
                        <span >Первый Заместитель Председателя Правления</span>
                        </a>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@assets/images/portrait/Avatar.png" alt="banner">
                        <h5 class="mt-5 mb-1">Жайсанбаева Жанар</h5>
                        <span >Управляющий директор</span>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="documents mt-10 ">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">Документы</span>
            </vs-divider>
            <div class="vx-row justify-evenly">
                <div class="vx-col w-1/5 element">
                    <div>
                        <a class="text-black" href="#" >
                            Документы Компании
                        </a>
                    </div>

                </div>
                <div class="vx-col w-1/5 element">
                    <div>
                        <a class="text-black" href="#">
                            Правила Страхования
                        </a>
                    </div>

                </div>
                <div class="vx-col w-1/5 element">
                    <div>
                        <a class="text-black" href="#">
                            Финансовые Отчеты
                        </a>
                    </div>

                </div>
                <div class="vx-col w-1/5 element">
                    <div>
                        <a class="text-black" href="#">
                            Заявления и Анкеты
                        </a>
                    </div>

                </div>
            </div>

        </div>
        <div class="partners">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">Партнеры и клиенты</span>
            </vs-divider>
            <div class="swiper-inner">
                <!-- swiper -->
                <swiper :options="partnerSwiper" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                    <swiper-slide>
                        <img src="/images/partners/partner1.png" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/partners/partner2.png" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/partners/partner3.png" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/partners/partner4.png" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/partners/partner5.png" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="/images/partners/partner6.png" alt="banner">
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="vx-card consultation mt-20 text-center">
            <h2 class="title text-black text-center mb-5">Бесплатная консультация по продуктам и услугам</h2>
            <span class="text-gray text-center ">Оставьте заявку, и наши специалисты перезвонят в течение нескольких минут.<br>  Они ответят на все вопросы, помогут выбрать подходящую страховую программу и рассчитают стоимость полиса.</span>
            <div class="vx-row mt-5 justify-center pl-10 pr-10">
                <div class="vx-col w-1/3" >
                    <vs-input type="text" placeholder="Имя" v-model="name" name="name"></vs-input>
                </div>
                <div class="vx-col w-1/3">
                    <vs-input type="text" placeholder="Номер телефона" v-model="phone_number" ></vs-input>
                </div>
                <div class="vx-col w-1/3">
                    <vs-input type="email" placeholder="E-mail" v-model="e_mail" ></vs-input>
                </div>
            </div>
            <div class="checker vx-row mt-5">
                <vs-checkbox v-model="checkBox1" >
                     <span>Правила обеспечения защиты персональных данных.<br>
                        Мы обязаны получить такое согласие в соответствии с законодательством Республики Казахстан о персональных данных.</span>
                </vs-checkbox>


            </div>
            <vs-button color="primary" class="mt-6">Получить консультацию</vs-button>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "AboutUs",
        data() {
            return {
                checkBox1:"",
                teamMembers: {
                    slidesPerView: 3,
                    spaceBetween: 200,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 80
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }
                },
                partnerSwiper: {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    .teaser-img{
        width: 25vh;
        position: absolute;
        margin: -4% auto !important;
    }
    .teaser{
        background-color: #4F9D3A;
        display: flex !important;
    }
    .teaser .vx-col{
        padding: 3%;
    }
    .main-horizontal{
        padding: 2rem;
    }
    .text-lefter{
        padding: 3rem 2em;
        border: 1px solid #F4F5F5;
        background-color: #F4F5F5;
    }
    .text-righter{
        padding: 2rem 1rem;
    }

    .vx-row{
        margin-left:0 !important;
        margin-right:0 !important;
    }
    .team .swiper-slide img{
        width: 100%;
        border: 1px solid #FFF;
        border-radius: 20px;
    }
    .documents .element{

        padding: 1rem 1.5rem;
        border: 1px solid #D3D3D5;
        border-radius: 10px;
    }
    .documents .element div{
        background: url("../../../assets/images/file-icons/vector.svg") no-repeat left;
        padding-left: 2rem;
    }
    .partners .swiper-inner {
        width: 100%;
        height: 400px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .partners img{
        margin-top: 35%;
        margin-left: 30%;
    }

    .partners .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }
    .consultation{
        border-radius: 200px 5px;
        width: 70%;
        padding: 3% 8%;
        margin-left: auto;
        margin-right: auto;
        background-color: #EEF6EC;
    }
    #agreement{
        width: 20px;
    }
</style>
