

<template>
    <div id="main-page">
        <div class="vx-row carousel vx-card">
            <!-- swiper -->
            <swiper :options="mainSwiper" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                <swiper-slide>
                    <div class="swiper-text md:w-1/4 " >
                        <div class="title mt-2 text-center" data-swiper-parallax="-100">
                            <h2 class="text-white">Freedom Finance Life —</h2>
                        </div>
                        <div class="subtitle text-center font-semibold mt-5" data-swiper-parallax="-200">
                            <h4 class="text-white">Это уверенность в настоящем, дающая свободу созидать будущее.</h4>
                        </div>
<!--                        <div class="mt-5 text-center"><vs-button color="primary" type="filled">Подробнее</vs-button></div>-->
                    </div>
                    <img class="responsive" style="background: rgb(195, 195, 195);" src="@assets/images/slider/Education.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-text md:w-1/4 " >
                        <div class="title mt-2 text-center" data-swiper-parallax="-100">
                            <h2 class="text-white">Freedom Finance Life —</h2>
                        </div>
                        <div class="subtitle text-center font-semibold mt-5" data-swiper-parallax="-200">
                            <h4 class="text-white">Это уверенность в настоящем, дающая свободу созидать будущее.</h4>
                        </div>
<!--                        <div class="mt-5 text-center"><vs-button color="primary" type="filled">Подробнее</vs-button></div>-->
                    </div>
                    <img class="responsive" style="background: rgb(195, 195, 195);" src="@assets/images/slider/women.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-text md:w-1/4 " >
                        <div class="title mt-2 text-center" data-swiper-parallax="-100">
                            <h2 class="text-white">Freedom Finance Life —</h2>
                        </div>
                        <div class="subtitle text-center font-semibold mt-5" data-swiper-parallax="-200">
                            <h4 class="text-white">Это уверенность в настоящем, дающая свободу созидать будущее.</h4>
                        </div>
<!--                        <div class="mt-5 text-center"><vs-button color="primary" type="filled">Подробнее</vs-button></div>-->
                    </div>
                    <img class="responsive" style="background: rgb(195, 195, 195);" src="@assets/images/slider/women.jpg" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
        </div>
        <div class="vx-row products mt-10 ">
            <div class="mt-5">
                <vs-divider position="left" color="primary">
                    <span class="text-3xl">Защитите свою жизнь и здоровье</span>
                </vs-divider>
                <vs-tabs alignment="fixed">
                    <vs-tab label="Частным лицам">
                        <div class="vx-row">
                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                                <vx-card>
                                    <a href="#">

                                        <img :src="card_1.img" alt="content-img" class="responsive rounded-lg">
                                        <div class="my-6">
                                            <h5 class="mb-2">Freedom Protect</h5>
                                            <p class="text-grey">Надежная и недорогая страховая защита от несчастных случаев</p>
                                        </div>
                                        <vs-divider></vs-divider>
                                        <div class="flex justify-between flex-wrap">
                            <span>
                                <p class="text-xl">Случайности, о которых позаботились заранее.</p>
                                <p class="text-grey">Минимальный взнос – 1 000 тенге в год.</p>
                            </span>
                                        </div>
                                    </a>
                                </vx-card>
                            </div>
                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">

                                <vx-card>
                                    <a href="#">
                                        <img :src="card_1.img" alt="content-img" class="responsive rounded-lg">
                                        <div class="my-6">
                                            <h5 class="mb-2">Freedom Protect</h5>
                                            <p class="text-grey">Надежная и недорогая страховая защита от несчастных случаев</p>
                                        </div>
                                        <vs-divider></vs-divider>
                                        <div class="flex justify-between flex-wrap">
                            <span>
                                <p class="text-xl">Случайности, о которых позаботились заранее.</p>
                                <p class="text-grey">Минимальный взнос – 1 000 тенге в год.</p>
                            </span>
                                        </div>
                                    </a>
                                </vx-card>
                            </div>
                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                                <vx-card>
                                    <a href="#">
                                        <img :src="card_1.img" alt="content-img" class="responsive rounded-lg">
                                        <div class="my-6">
                                            <h5 class="mb-2">Freedom Protect</h5>
                                            <p class="text-grey">Надежная и недорогая страховая защита от несчастных случаев</p>
                                        </div>
                                        <vs-divider></vs-divider>
                                        <div class="flex justify-between flex-wrap">
                            <span>
                                <p class="text-xl">Случайности, о которых позаботились заранее.</p>
                                <p class="text-grey">Минимальный взнос – 1 000 тенге в год.</p>
                            </span>
                                        </div>
                                    </a>
                                </vx-card>
                            </div>
                        </div>
                    </vs-tab>
                    <vs-tab label="Бизнесу">
                        <div class="vx-row">
                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                                <vx-card>
                                    <a href="#">

                                        <img :src="card_2.img" alt="content-img" class="responsive rounded-lg">
                                        <div class="my-6">
                                            <h5 class="mb-2">Freedom Protect</h5>
                                            <p class="text-grey">Надежная и недорогая страховая защита от несчастных случаев</p>
                                        </div>
                                        <vs-divider></vs-divider>
                                        <div class="flex justify-between flex-wrap">
                            <span>
                                <p class="text-xl">Случайности, о которых позаботились заранее.</p>
                                <p class="text-grey">Минимальный взнос – 1 000 тенге в год.</p>
                            </span>
                                        </div>
                                    </a>
                                </vx-card>
                            </div>
                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">

                                <vx-card>
                                    <a href="#">
                                        <img :src="card_2.img" alt="content-img" class="responsive rounded-lg">
                                        <div class="my-6">
                                            <h5 class="mb-2">Freedom Protect</h5>
                                            <p class="text-grey">Надежная и недорогая страховая защита от несчастных случаев</p>
                                        </div>
                                        <vs-divider></vs-divider>
                                        <div class="flex justify-between flex-wrap">
                            <span>
                                <p class="text-xl">Случайности, о которых позаботились заранее.</p>
                                <p class="text-grey">Минимальный взнос – 1 000 тенге в год.</p>
                            </span>
                                        </div>
                                    </a>
                                </vx-card>
                            </div>
                            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                                <vx-card>
                                    <a href="#">
                                        <img :src="card_2.img" alt="content-img" class="responsive rounded-lg">
                                        <div class="my-6">
                                            <h5 class="mb-2">Freedom Protect</h5>
                                            <p class="text-grey">Надежная и недорогая страховая защита от несчастных случаев</p>
                                        </div>
                                        <vs-divider></vs-divider>
                                        <div class="flex justify-between flex-wrap">
                            <span>
                                <p class="text-xl">Случайности, о которых позаботились заранее.</p>
                                <p class="text-grey">Минимальный взнос – 1 000 тенге в год.</p>
                            </span>
                                        </div>
                                    </a>
                                </vx-card>
                            </div>
                        </div>
                    </vs-tab>
                </vs-tabs>
            </div>

        </div>
        <div class="vx-row advantages mt-10 justify-items-center ">
            <vs-divider position="left" color="primary">
                 <span class="text-3xl">Наши преимущества</span>
            </vs-divider>
            <div class="vx-row w-full cards justify-center">

            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" style="background:none;" size="80px" :src="card_4.userImg" />
                    <div class="text-center">
                        <h3>{{card_4.title}}</h3>
                    </div>

                    <vs-divider />
                        <p class="text-grey">{{card_4.footer_text}}</p>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" style="background:none;" size="80px" :src="card_5.userImg" />
                    <div class="text-center">
                        <h3>{{card_5.title}}</h3>
                    </div>

                    <vs-divider />
                    <p class="text-grey">{{card_5.footer_text}}</p>
                </vx-card>
            </div>

            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" style="background:none;" size="80px" :src="card_6.userImg" />
                    <div class="text-center">
                        <h3>{{card_6.title}}</h3>
                    </div>

                    <vs-divider />
                    <p class="text-grey">{{card_6.footer_text}}</p>
                </vx-card>
            </div>


        </div>
        </div>

        <div class="vx-row teaser mt-10 vx-card">
            <div class="vx-col w-1/3">
                <img src="@assets/images/elements/teaser.png" class="teaser-img responsive" alt="teaser image">
            </div>
            <div class="vx-col w-2/3">
                <div class="title mr-20 ml-20 ml-2 ">
                    <h4 class="text-white">Сайт поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев</h4></div>
                <div class="subtitle mr-20 ml-20 mt-5">
                    <h6 class="text-white">Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</h6>
                </div>
            </div>
        </div>
        <div class="vx-row about  pt-5 pb-5">
            <div class="vx-col mt-12 w-1/2">
                <div class="title mr-10 ml-10 ml-2">
                    <h2>Мы компания по страхованию жизни Freedom Finance Life</h2></div>
                <div class="subtitle mr-10 ml-10 mt-5 text-grey">
                    <span>Защищаем клиентов от непредвиденных финансовых расходов и несчастных случаев, помогаем им копить деньги и делаем все, чтобы их жизнь была спокойнее. </span>
                </div>
                <div class="vx-col text-base mt-5 ml-10 mr-10">
                    В 2019 году запустили серию обучающих мастер-классов, программу для родителей, с которой проще накопить на учебу детей в университете, летний лагерь по финансовой грамотности, страховку от рака и благотворительный челлендж в поддержку деток с онкологическими заболеваниями.
                </div>

            </div>
            <div class="vx-row w-1/2">
                <div class="vx-col w-1/2 mt-16  md:w-1/3 xl:w-1/2">
                    <statistics-card-line
                        hideChart
                        class="mb-base"
                        icon="SmileIcon"
                        statistic="335 468"
                        statisticTitle="Застрахованных на данный момент"
                        color='primary' />
                </div>
                <div class="vx-col w-1/2 mt-16  md:w-1/3 xl:w-1/2">
                    <statistics-card-line
                        hideChart
                        class="mb-base"
                        icon="GlobeIcon"
                        statistic="19"
                        statisticTitle="Офисы компанни есть в 19 городах Казахстана"
                        color='primary' />
                </div>
            </div>
        </div>
        <div class="news mt-10">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">Новости</span>
            </vs-divider>
            <vx-card class="carousel-example">
                <div class="swiper-inner">
                    <!-- swiper -->
                    <swiper :options="newsSwiper" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                        <swiper-slide>
                            <img src="@assets/images/slider/Education.jpg" class=" responsive" alt="teaser image">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@assets/images/slider/Education.jpg" class=" responsive" alt="teaser image">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@assets/images/slider/Education.jpg" class=" responsive" alt="teaser image">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@assets/images/slider/Education.jpg" class=" responsive" alt="teaser image">
                        </swiper-slide>

                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </vx-card>
        </div>
        <div class="smi mt-10 vx-row">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">СМИ о НАС</span>
            </vs-divider>
            <div class="swiper-inner vx-col w-1/2">
                <!-- swiper -->
                <swiper :options="smiSwiper" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-32.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-35.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-33.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-37.jpg" alt="banner">
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="swiper-inner vx-col w-1/2">
                <!-- swiper -->
                <swiper :options="smiSwiper" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-29.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-28.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-26.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-27.jpg" alt="banner">
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>

        </div>
        <div class="blog mt-10 vx-row">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">Блог от Freedom Finance Life</span>
            </vs-divider>
            <div class="carousel-example">
                <swiper :options="blogSwiper" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-29.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-22.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-28.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-27.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-33.jpg" alt="banner">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="responsive" src="/images/pages/carousel/banner-34.jpg" alt="banner">
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="vx-card consultation mt-20 text-center">
            <h2 class="title text-black text-center mb-5">Бесплатная консультация по продуктам и услугам</h2>
            <span class="text-gray text-center ">Оставьте заявку, и наши специалисты перезвонят в течение нескольких минут.<br>  Они ответят на все вопросы, помогут выбрать подходящую страховую программу и рассчитают стоимость полиса.</span>
            <div class="vx-row mt-5 justify-center">
                <div class="vx-col " >
                    <vs-input type="text" placeholder="Имя" v-model="name" name="name"></vs-input>
                </div>
                <div class="vx-col">
                    <vs-input type="text" placeholder="Номер телефона" v-model="phone_number" ></vs-input>
                </div>
                <div class="vx-col">
                    <vs-input type="email" placeholder="E-mail" v-model="e_mail" ></vs-input>
                </div>
            </div>
            <div class="checker vx-row mt-5">
                    <vs-checkbox v-model="checkBox1" ></vs-checkbox>
                <span>Правила обеспечения защиты персональных данных.<br>
                        Мы обязаны получить такое согласие в соответствии с законодательством Республики Казахстан о персональных данных.</span>

            </div>
            <vs-button color="primary" class="mt-6">Получить консультацию</vs-button>
        </div>
    </div>


</template>

<script>
    import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
    import VueApexCharts from 'vue-apexcharts'

    import 'swiper/dist/css/swiper.min.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                name:"",
                phone_number:"",
                e_mail:"",
                checkBox1:"",
                mainSwiper: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'autoplay'
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                newsSwiper: {
                    effect: 'cube',
                    grabCursor: true,
                    cubeEffect: {
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                smiSwiper: {
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
                blogSwiper: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    // init: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }
                },
                card_2: {},
                card_4: {},
                card_5: {},
                card_6: {},
                card_1: {},

            }
        },
        components: {
            swiper,
            swiperSlide,
            VueApexCharts,
            StatisticsCardLine
        },
        created() {
            this.$http.get("/api/users/pixinvent/product/sales/1")
                .then((response) => { this.card_2 = response.data })
                .catch((error)   => { console.log(error) })

            this.$http.get("/api/users/pixinvent/product/1")
                .then((response) => { this.card_1 = response.data })
                .catch((error)   => { console.log(error) })
            // Card 4
            this.$http.get("/api/users/89")
                .then((response) => {
                    this.card_4 = response.data })
                .catch((error)   => { console.log(error) })
            this.$http.get("/api/card/1")
                .then((response) => {
                    this.card_5 = response.data })
                .catch((error)   => { console.log(error) })
            this.$http.get("/api/card/2")
                .then((response) => {
                    this.card_6 = response.data })
                .catch((error)   => { console.log(error) })
        }
    }
</script>

<style scoped>
    .text-xl{
        color:#626262;
    }
    .smi .swiper-inner {
        position: relative;
        overflow: hidden;
        height: 480px;
        padding: 15px;
        display: flex;
        justify-content: center;
    }

    .smi .swiper-container {
        width: 450px !important;
        height: 450px;
        position: absolute;
    }

    .smi .swiper-slide {
        background-position: center;
        background-size: cover;
    }
    .news .swiper-inner {
        width: 100%;
        height:530px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .news .responsive{
        height: 100%;
    }
    .news .swiper-slide {
        background-position: center;
        background-size: cover;
        height: 500px;
    }
    .swiper-text{
        position: absolute;
        margin: 12% auto 0 8%;
        overflow: visible;
    }
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
    #main-page{
        background-color: #ffffff;
    }
    .vx-row{
        margin-left:0 !important;
        margin-right:0 !important;
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
