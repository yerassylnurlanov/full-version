<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div class="relative">
  <div class="vx-navbar-wrapper navbar-full p-0">
      <vs-navbar class="vx-navbar navbar-custom navbar-skelton " :color="navbarColor">
          <ul class="justify-between flex w-full">
              <ul class="menu-items flex flex-wrap items-center">
                  <li class="menu-item mr-2">
                      <router-link tag="div" to="/" class="vx-logo cursor-pointer mx-auto flex items-center" v-if="windowWidth>=1200">
                          <img class="responsive" src="@assets/images/icon.svg" alt="banner">
                      </router-link>
                  </li>
              </ul>
              <ul class="menu-items flex flex-wrap items-center">

                  <li
                      class  = "menu-item"
                      v-for  = "(item, index) in navMenuItems"
                      :key   = "index"
                      :class = "{'mr-2': !(navMenuItems.length === index+1)}">

                      <!-- If header -->
                      <template v-if="item.header">
                          <h-nav-menu-header :header="item" class="menu-header relative" />
                      </template>

                      <!-- If it's group -->
                      <template v-else-if="item.submenu">
                          <h-nav-menu-group
                              class="menu-group relative py-4"
                              bottom
                              :key        ="`group-${index}`"
                              :group      ="item"
                              :groupIndex ="index"
                              :open       ="checkGrpChildrenActive(item)" />
                      </template>

                      <!-- If it's link -->
                      <div v-else-if="item.url" class="menu-link">
                          <h-nav-menu-item
                              class       = "relative py-4 cursor-pointer"
                              :to         = "item.slug !== 'external' ? item.url : null"
                              :href       = "item.slug === 'external' ? item.url : null"
                              :icon       = "item.icon"
                              :target     = "item.target"
                              :isDisabled = "item.isDisabled"
                              :slug       = "item.slug">
                              <span class="truncate">{{ $t(item.i18n) || item.name }}</span>
                              <vs-chip :color="item.tagColor" v-if="item.tag">{{ item.tag }}</vs-chip>
                          </h-nav-menu-item>
                      </div>

                  </li>



              </ul>
              <ul class="menu-items flex flex-wrap items-center">
                  <li class="menu-item mr-10 mt-2"> <i18n /></li>
<!--                  <li class="menu-item mr-4">-->
<!--                      <vs-button type="filled">Кабинет</vs-button>-->
<!--                  </li>-->
                  <li class="menu-item mr-4"><profile-drop-down /></li>
              </ul>
          </ul>



        <v-nav-menu v-if="windowWidth < 1200"
                    :navMenuItems = "navMenuItems"
                    parent        = ".layout--main" />




    </vs-navbar>
  </div>
</div>
</template>

<script>
import Bookmarks            from "./components/Bookmarks.vue"
import I18n                 from "./components/I18n.vue"
import SearchBar            from "./components/SearchBar.vue"
import CartDropDown         from "./components/CartDropDown.vue"
import NotificationDropDown from "./components/NotificationDropDown.vue"
import ProfileDropDown      from "./components/ProfileDropDown.vue"
import Logo                 from "../Logo.vue"
import navMenuItems        from "@/layouts/components/vertical-nav-menu/navMenuItems.js"

import HNavMenuGroup  from "../horizontal-nav-menu/HorizontalNavMenuGroup.vue"
import HNavMenuHeader from "../horizontal-nav-menu/HorizontalNavMenuHeader.vue"
import HNavMenuItem   from "../horizontal-nav-menu/HorizontalNavMenuItem.vue"
import HNavMenu            from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue"

export default {
  name: "the-navbar-horizontal",
  props: {
    logo: { type: String                                                                                                          },
    navbarType: {
      type: String,
      required: true
    }
  },
  components: {
    Logo,
    Bookmarks,
    I18n,
    SearchBar,
    CartDropDown,
    NotificationDropDown,
    ProfileDropDown,
      HNavMenu,
      HNavMenuGroup,
      HNavMenuHeader,
      HNavMenuItem,

  },
    data(){
      return{

          navMenuItems      : navMenuItems,
      }
    },
  computed: {
    navbarColor() {
      return "#ffffff";
    },
    isThemedark()          { return this.$store.state.theme                                                                       },
    navbarStyle()          { return this.navbarType === "static" ? {transition: "all .25s ease-in-out"} : {}                      },
    navbarClasses()        { return "static" },
    scrollY()              { return this.$store.state.scrollY                                                                     },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth                                                        },
    windowWidth()          { return this.$store.state.windowWidth                                                                 },
  },
  methods:{

      checkGrpChildrenActive(group) {
          const path        = this.$route.fullPath
          let active        = false
          const routeParent = this.$route.meta ? this.$route.meta.parent : undefined

          if (group.submenu) {
              group.submenu.forEach((item) => {
                  if (active) return true
                  if ((path == item.url || routeParent == item.slug) && item.url) { active = true }
                  else if (item.submenu) { this.checkGrpChildrenActive(item) }
              })
          }

          return active
      },
  }
}

</script>
<style>
    /*@import "@sass/vuexy/components/horizontalNavMenu.scss";*/
</style>

