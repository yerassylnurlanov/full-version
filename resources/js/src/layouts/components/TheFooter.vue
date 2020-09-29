<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
        <footer class="the-footer flex-wrap justify-around" :class="classes">
            <vs-divider color="primary"></vs-divider>
        <div class="copyright vx-col sm:w-1/3 text-center">
            <span style="font-size: 18px;">&copy; {{ new Date().getFullYear() }} <a >Freedom Finance Life</a></span>
            <p style="font-size: 18px;">Все права защищены</p>

        </div>
        <div class="vx-col sm:w-1/3">
            <h5 class="text-center">Подписаться на рассылку</h5>
            <p class="mt-2 text-center" style="font-size: 12px">Рассылка для тех кто хочет сэкономить деньги, защититься от непредвиденных расходов и заработать.</p>
            <div class="vx-row w-full justify-around mt-5">
                <vs-input placeholder="Ваш E-mail" v-model="e_mail"></vs-input>
                <vs-button>Подписаться</vs-button>
            </div>

        </div>
        <div class="vx-col sm:w-1/3">
                <div class="vx-row justify-center">
                    <span ><a>Freedom Finance Life</a> в социальных сетях</span>
                </div>
                <div class="vx-row mt-5 justify-center">
                     <div class="instagram vx-col">
                        <a href="https://www.instagram.com/ffin.life">
                            <feather-icon icon="InstagramIcon" svgClasses="stroke-current text-primary w-6 h-6" class="ml-2" />
                        </a>
                    </div>
                    <div class="vx-col">
                        <a href="https://www.youtube.com/channel/UC9GTBC0TdUboWGmiGrXmXAw">
                            <feather-icon icon="YoutubeIcon" svgClasses="stroke-current text-primary w-6 h-6" class="ml-2" />
                        </a>

                    </div>
                    <div class="vx-col">
                        <a href="https://www.fb.com/ffin.life">
                            <feather-icon icon="FacebookIcon" svgClasses="stroke-current text-primary w-6 h-6" class="ml-2" />
                        </a>

                    </div>
                </div>

        </div>


    </footer>
</template>

<script>
import BuyNow from '../../components/BuyNow.vue'

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    data(){
      return{
          e_mail:"",
      }
    },
    inject: {
      components:{
          default: {
            BuyNow
          }
      }
    }
}
</script>
