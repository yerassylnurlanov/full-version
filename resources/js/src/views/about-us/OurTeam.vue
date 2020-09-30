<template>
    <div id="our-team">
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
        <div class="directorate mt-20">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">
                    Совет директоров
                </span>
            </vs-divider>
            <div class="vx-row justify-center">
                <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
                    <vx-card>
                        <img src="@assets/images/portrait/Avatar.png" alt="content-img" class="responsive rounded-lg">

                        <vs-divider></vs-divider>
                        <div class="flex">
                            <span>
                                <h5 class="text-xl">Турлов Тимур Русланович</h5>
                                <p class="text-grey">Председатель Совета Директоров</p>
                            </span>

                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
                    <vx-card>
                        <img src="@assets/images/portrait/aza.jpg" alt="content-img" class="responsive rounded-lg">

                        <vs-divider></vs-divider>
                        <div class="flex">
                            <span>
                                <h5 class="text-xl">Ердесов Азамат Джансултанович</h5>
                                <p class="text-grey">Член Совета Директоров</p>
                            </span>

                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
                    <vx-card>
                        <img src="@assets/images/portrait/Avatar.png" alt="content-img" class="responsive rounded-lg">

                        <vs-divider></vs-divider>
                        <div class="flex">
                            <span>
                                <h5 class="text-xl">Михайлов Иван Валентинович</h5>
                                <p class="text-grey">Член Совета Директоров, независимый директор</p>
                            </span>

                        </div>
                    </vx-card>
                </div>
            </div>

        </div>
        <div class="government mt-20">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">
                    Правление
                </span>
            </vs-divider>
            <div class="vx-row justify-center">
                <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
                    <vx-card>
                        <img src="@assets/images/portrait/aza.jpg" alt="content-img" class="responsive rounded-lg">

                        <vs-divider></vs-divider>
                        <div class="flex">
                            <span>
                                <h5 class="text-xl">Ердесов Азамат Джансултанович</h5>
                                <p class="text-grey">Председатель Правления</p>
                            </span>

                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
                    <vx-card>
                        <img src="@assets/images/portrait/ayman.jpg" alt="content-img" class="responsive rounded-lg">

                        <vs-divider></vs-divider>
                        <div class="flex">
                            <span>
                                <h5 class="text-xl">Мухтыбаева Айман Абдикаппаровна </h5>
                                <p class="text-grey">Первый Заместитель Председателя Правления</p>
                            </span>

                        </div>
                    </vx-card>
                </div>
                <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
                    <vx-card>
                        <img src="@assets/images/portrait/Avatar.png" alt="content-img" class="responsive rounded-lg">

                        <vs-divider></vs-divider>
                        <div class="flex">
                            <span>
                                <h5 class="text-xl">Жайсанбаева Жанар</h5>
                                <p class="text-grey">Управляющий директор</p>
                            </span>

                        </div>
                    </vx-card>
                </div>
            </div>

        </div>
        <div class="shareholders mt-20">
            <vs-divider position="left" color="primary">
                <span class="text-3xl">
                    Реестр акционеров
                </span>
            </vs-divider>
            <span>
                <a href="#">Список акционеров</a>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OurTeam"
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
