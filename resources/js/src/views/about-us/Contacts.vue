<template>
    <div id="contacts">
        <div class="vx-row teaser vx-card">
            <div class="vx-col w-2/3">
                <div class="title mr-20  ml-2 ">
                    <h1 class="text-white">Контакты</h1></div>
                <div class="subtitle mr-20  mt-5">
                    <h4 class="text-white">19 региональных филиалов по всему Казахстану</h4 >
                </div>
            </div>
            <div class="vx-col w-1/3">
                <img src="@assets/images/elements/teaser.png" class="teaser-img responsive" alt="teaser image">
            </div>
        </div>
        <div class="vx-row info mt-20">
            <div class="vx-col w-1/2">
                <h3 class="title text-black">Call-center</h3>
                <div class="vx-row phone mt-10">
                    <span> icon</span>
                    <a class="text-black font-bold" href="tel:7775">&nbsp;7775 </a>
                    <span class="text-grey"> &nbsp; бесплатно со всех мобильных операторов Казахстана</span>
                </div>
                <div class="email vx-row mt-5">
                    <span>icon</span>
                    <a href="mailto:info@ffin.life">&nbsp;info@ffin.life</a>
                </div>
                <div class="vx-row schedule  mt-5">
                    <span>icon</span>
                    <a>&nbsp;С пн-пт, 9:00 - 18:00</a>
                </div>
            </div>
            <div class="vx-col w-1/2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
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
