<template>
    <div id="vacancies">
        <div class="vx-row teaser vx-card">
            <div class="vx-col w-2/3">
                <div class="title mr-20  ml-2 ">
                    <h1 class="text-white">Наша команда</h1></div>
                <div class="subtitle mr-20  mt-5">
                    <h4 class="text-white">Добро пожаловать в компанию по страхованию жизни нового поколения</h4 >
                </div>
            </div>
            <div class="vx-col w-1/3">
                <img src="@assets/images/elements/teaser.png" class="teaser-img responsive" alt="teaser image">
            </div>
        </div>
        <div class="main-horizontal mt-10 ">
            <div class="vx-col w-4/5 text-lefter vx-card">
                <h4 class="text-black">Freedom Finance Life – компания по страхования жизни, обладающая большими возможностями и потенциалом. На данный момент у нас больше 340 тысяч застрахованных клиентов по всему Казахстану. Мы реализуем стратегию, которая обеспечит казахстанцев страховыми продуктами нового поколения.</h4>
            </div>
        </div>
        <div class="offers">
            <vs-divider position="center" color="primary">
                <span class="text-3xl">
                    Что мы предлагаем?
                </span>
            </vs-divider>
            <div class="vx-col">
                <div class="vx-row mt-10 justify-around">
                    <div class="vx-row vx-card w-3/12 justify-evenly card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">1</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Отличные возможности для профессионального развития и роста</p>

                        </div>
                    </div>
                    <div class="vx-row vx-card w-3/12 justify-evenly card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">2</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Поддержку и обучение</p>

                        </div>
                    </div>
                    <div class="vx-row vx-card w-3/12 justify-evenly card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">3</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Корпоративную мобильная связь</p>

                        </div>
                    </div>
                </div>
                <div class="vx-row mt-10 justify-around">
                    <div class="vx-row vx-card w-3/12 justify-around card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">4</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">30 календарных дней отпуска</p>

                        </div>
                    </div>
                    <div class="vx-row vx-card w-3/12 justify-around card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">5</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Престижный офис премиум класса в БЦ "Esentai Tower"</p>

                        </div>
                    </div>
                    <div class="vx-row vx-card w-3/12 justify-around card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">6</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Крутые продукты, о которых мы рассказываем с гордостью</p>

                        </div>
                    </div>
                </div>
                <div class="vx-row mt-10 justify-around">
                    <div class="vx-row vx-card w-3/12 justify-around card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">7</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Профессиональную поддержку от драйвовых коллег</p>

                        </div>
                    </div>
                    <div class="vx-row vx-card w-3/12 justify-around card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">8</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Постоянное повышение квалификации</p>

                        </div>
                    </div>
                    <div class="vx-row vx-card w-3/12 justify-around card">
                        <div class="number w-2/12">
                            <p class="text-primary text-xl">9</p>
                        </div>
                        <div class="text w-10/12">
                            <p class="text-normal">Уникальную корпоративную культуру: наши сотрудники с удовольствием работают даже по понедельникам</p>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vacancies"
    }
</script>

<style scoped>
    .vx-row{
        margin-left:0 !important;
        margin-right:0 !important;
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
    .main-horizontal{
        padding: 2rem;
    }
    .text-lefter{
        padding: 3rem 2em;
        border: 1px solid #F4F5F5;
        background-color: #F4F5F5;
    }
    .offers .number{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .offers .number p{
        padding: 0.5rem 1rem;
        border: 1px dotted grey;
        border-radius: 220px;
        margin: 0;
        display: flex;
        justify-content: center; /* align horizontal */
        align-items: center; /* align vertical */
    }
    .card .text{
        display: flex;
        align-items: center; /* align vertical */
    }
    .card .text{
        margin: 0;
    }
    .offers .card{
        display: flex !important;
        padding: 1rem;
        min-height: 80px;
    }
</style>
