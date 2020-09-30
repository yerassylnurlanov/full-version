<template>
    <div id="company-documents">
        <div class="vx-row teaser vx-card">
            <div class="vx-col w-2/3">
                <div class="title mr-20  ml-2 ">
                    <h1 class="text-white">Документы компании</h1></div>
                <div class="subtitle mr-20  mt-5">
                    <h4 class="text-white">Добро пожаловать в компанию по страхованию жизни нового поколения</h4 >
                </div>
            </div>
            <div class="vx-col w-1/3">
                <img src="@assets/images/elements/teaser.png" class="teaser-img responsive" alt="teaser image">
            </div>
        </div>
        <div class="insurance-rules mt-10">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">Правила Страхования</span>
            </vs-divider>
            <div class="vx-row rules">
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" v-model="test1" subtitle="Накопительное страхование" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" v-model="test1" subtitle="Ненакопительное страхование" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" v-model="test1" subtitle="Аннуитетное страхование" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" v-model="test1" subtitle="Срочное Страхование" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
            </div>
        </div>
        <div class="financial-reports">
            <vs-divider color="primary" position="left">
                <span class="text-3xl">Финансовые Отчеты</span>
            </vs-divider>
            <div class="vx-row justify-center">
                <div class="vx-col">
                    <vs-button color="primary" type="border">2019</vs-button>
                </div>
                <div class="vx-col">
                    <vs-button color="primary" type="border">2018</vs-button>
                </div>
                <div class="vx-col">
                    <vs-button color="primary" type="border">2017</vs-button>
                </div>
                <div class="vx-col">
                    <vs-button color="primary" type="border">2016</vs-button>
                </div>
                <div class="vx-col">
                    <vs-button color="primary" type="border">2015</vs-button>
                </div>
                <div class="vx-col">
                    <vs-button color="primary" type="border">2014</vs-button>
                </div>
            </div>
        </div>
        <div class="app-ques">
            <vs-divider color="primary" position="left">
                <span class="text-3xl">
                    Заявления и Анкеты
                </span>
            </vs-divider>
            <div class="applications">
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Заявления на выплаты" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Заявление на изменение" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Заявление о возврате страховой премии" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Декларация о здоровье" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Заявление об осуществлении страховой выплаты при дожитии" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Заявление о расторжении договора страхования и выплате выкупной суммы" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full mb-1">
                    <vx-card subtitle-color="dark" subtitle="Заявление о расторжении договора страхования с АО Альфа Банк" collapse-action>
                        <div class="exp mt-5 requirement">
                            <h5 class="title">Lorem ipsum dolor sit amet</h5>
                            <p class="info">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </vx-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompanyDocuments",
        data(){
            return{
                test1:[{

                }]
            }
        }
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
</style>
