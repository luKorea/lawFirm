<template>
  <div class="nav">
      <div class="nav-a">
        <el-row>
          <el-col>
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
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>

import { getNavData } from '../api/api'

export default {
  name: 'Header',
  data () {
    return {
      show: false,
      classA: 0,
      classB: 0,
      isShow: 0,
      linkClick: '',
      ind: 0,
      configNav: []
    }
  },
  created () {
    // eslint-disable-next-line no-return-assign
    getNavData().then(data => data.length > 0 ? this.configNav = data : this.configNav = [])
      .catch(err => {
        this.$message({
          type: 'error',
          message: err
        })
      })
  },
  methods: {
    selected (index) {
      this.classA = index
    },
    menuselected (nav) {
      this.classB = nav
    },
    showToggle (index) {
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

<style scoped lang="less">
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
