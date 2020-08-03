<template>
  <div id="app">
    <logo />
    <div class="nav">
      <!--    <el-col :offset="4" :lg="24" :md="24" :sm="24">-->
      <div class="nav-a">
        <ul class="nav-a-ul">
          <li class="nav-a-li"
              @click="selected(index)"
              v-for="(item,index) in configNav"
              :class="classA === index ? 'active' : '' "
          >
            <router-link
              :to='item.path'
              class="nav-a-text"
              :class="{'router-link-exact-active':ind === index}"
              @click.native="showToggle(index)">
              <div class="list-flex">
                <span>{{ item.jName }}</span>
                <span>{{ item.cName }}</span>
              </div>
            </router-link>
            <ul class="menu_ul" :class="{'active' :index===isShow}">
              <li
                class="menu_li"
                v-for = "nav in item.subItems"
                :class="classB === nav ? 'active' : '' "
                @click="menuselected(nav)"
              >
                <router-link
                  class="menu_ul_text"
                  :to="nav.path"
                  :class="{'active':nav.path === linkClick}"
                  @click = "treeNavSwitch(nav)"
                >
                  <div class="flex-font">
                    <span>{{ nav.jName }}</span>
                    <span>{{ nav.cName }}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--    </el-col>-->
    </div>
    <div class="content">
      <router-view :key="key"/>
    </div>
    <ls-footer />
  </div>
</template>

<script>
import Logo from './components/Logo'
import LsFooter from './components/Footer'
import { getNavData } from './api/api'

export default {
  name: 'app',
  components: {
    Logo,
    LsFooter
  },
  computed: {
    key () {
      return this.$route.path + Math.random()
    }
  },
  data () {
    return {
      show: false,
      classA: 0,
      classB: 0,
      isShow: 0,
      linkClick: '',
      ind: 0,
      configNav: [],
      // 轮播图地址
      path: [],
      showSwipe: true
    }
  },
  created () {
    this.getNavData()
  },
  methods: {
    getNavData () {
      // eslint-disable-next-line no-return-assign
      getNavData().then(data => {
        if (data.length > 0) {
          this.configNav = data
          this.configNav.forEach(item => {
            // console.log(item.path)
            this.path.push(item.path)
            if (item.subItems.length > 0) {
              item.subItems.forEach(item => {
                this.path.push(item.path)
              })
            }
          })
        } else this.configNav = []
      })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
    },
    selected (index) {
      this.classA = index
    },
    menuselected (nav) {
      this.classB = nav
    },
    showToggle (index) {
      this.configNav.forEach(item => {
        if (item.Id === 1 && item.index === 0) {
          this.showSwipe = true
        } else {
          this.showSwipe = false
        }
      })
      this.isShow = index
      this.ind = index
    },
    treeNavSwitch (nav) {
      this.linkClick = nav.path
    }
  },
  mounted () {
    if (this.$route.query.item) {
      this.ind = this.$route.query.item
    } else {
      this.ind = 0
    }
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  .content {
    width: 100%;
    flex: 1;
  }
}
.nav {
  width: 100%;
  margin: 0 auto;
  border-bottom: none;
  background-color: #6A1D21;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-flex {
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 30px;
  padding: 15px;
  box-sizing: border-box;
  .j-font {
    font-size: 9px;
  }
  .c-font {
    font-size: 7px;
  }
}
.nav-a {
  cursor: pointer;
  float: left;
  position: relative;
}
.nav-a-ul {
  list-style: none;
  line-height: 30px;
  text-align: center;
}
.nav-a-li {
  display: inline-block;
  margin: 0 20px;
}
.nav-a-text {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}
.menu_ul {
  list-style: none;
  border-radius: 3px;
  z-index: 999;
  position: absolute;
  display: none;
}
.menu_li {
  padding: 5px;
  background-color: #932026;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.flex-font {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.menu_ul_text {
  font-size: 14px;
  color: #fff;
  letter-spacing: 0;
  text-decoration: none;
}
.nav-a-li:hover {
  background-color: #932026;
}
.nav-a-li.active {
  background-color: #932026;
}
.router-link-exact-active {
  background-color: #932026;
}
.nav-a-li:hover .menu_ul {
  display: block;
}
.menu_ul_text:hover {
  color: #fff;
}
.menu_li.active .menu_ul_text{
  color: #fff;
}
</style>
