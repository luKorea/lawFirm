<!-- TODO 团队成员完成响应式 -->
<template>
  <div class="team-container">
    <el-col :lg="12" :md="12" :xl="12" :sm="24">
      <div class="title">
        <el-divider><span class="red-font">チームメンバー紹介</span></el-divider>
        <div class="black-font">团队成员介绍</div>
      </div>
      <el-divider />
      <div v-for="(item, index) in memberInfo" class="user-info" :key='index'>
        <div class="avatar-container">
          <!--左边头像-->
          <div class="avatar-content">
            <div class='avatar'>
              <img :src="imgUrl + item.imgPath" alt="">
            </div>
            <div class="avatar-red-title">{{ item.jateamName }}</div>
            <div class="avatar-black-title">{{ item.chteamName }} {{ item.jateamPost }}</div>
          </div>
          <!--右边列表-->
          <div class="avatar-list">
            <div v-for="(skip, index) in item.teammemberDetails" :key="index">
              <div class="red">{{ skip.jaContent }}</div>
              <div class="black">{{ skip.chContent }}</div>
            </div>
          </div>
        </div>
        <div class="red-content left-font m-bottom">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <div v-html="item.jateamValue"></div>
          </el-col>
        </div>
        <div class="black-content left-font">
          <el-col :lg="24" :md="24" :xl="24" :sm="24">
            <div v-html="item.chteamValue"></div>
          </el-col>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { getTeamMemberData } from '../../api/api'

export default {
  name: 'TeamMember',
  data () {
    return {
      userInfo: [
        {
          jName: '梓伊（コウ・シイ）実習弁護',
          cName: '梓伊 实习律师',
          img: require('../../assets/image/header/header1.jpg'),
          skip1: [
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' }
          ],
          skip2: [
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' }
          ],
          jContent: `梓伊実習弁護⼠は、本チームにおいて、主にケースのフォローアップと調整、クライアントのフォローアップ・コミュニケーション、チーム担当者の下で⽇常法律顧問サービスの提供等の業務を担当している。また、⻩梓伊実習弁護⼠は裁判所や検察庁での実習経験があり、訴訟のプロセスに精通しており、法律援助や⾃治体法律普及の経験も持っている。在職中は、チーム担当者の下で売買契約、賃貸借契約、貸付契約などの各種契約紛争、及び、労働仲裁、離婚訴訟、強制清算、商標権侵害などの事件処理いる。
に協⼒した。豊富な事件処理の実務経験及び着実な法律専⾨知識を有して`,
          cContent: '梓伊实习律师在本团队中主要负责团队案件的跟进与协调、客⼾跟进沟通等⼯作，并协助团队负责⼈提供⽇常法律顾问等服务。⻩梓伊实习律师具有法院、检察院的实习经历，熟悉法院、检察院办案流程，同时具有法律援助、社区普法经验。在事务所任职期间曾协助团队负责⼈办理买卖合同、租赁合同、⺠间借贷合同等各类合同纠纷案件，以及劳动仲裁、离婚诉讼、强制清算、商标侵权等其他类型的案件，具有丰富的办案经验和扎实的法律专业基础。'
        },
        {
          jName: '梁偲（リョウ・ウシ）パラリーガル',
          cName: '梁偲律师助理',
          img: require('../../assets/image/header/header2.jpg'),
          skip1: [
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' }
          ],
          skip2: [
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' }
          ],
          jContent: `梓伊実習弁護⼠は、本チームにおいて、主にケースのフォローアップと調整、クライアントのフォローアップ・コミュニケーション、チーム担当者の下で⽇常法律顧問サービスの提供等の業務を担当している。また、⻩梓伊実習弁護⼠は裁判所や検察庁での実習経験があり、訴訟のプロセスに精通しており、法律援助や⾃治体法律普及の経験も持っている。在職中は、チーム担当者の下で売買契約、賃貸借契約、貸付契約などの各種契約紛争、及び、労働仲裁、離婚訴訟、強制清算、商標権侵害などの事件処理いる。
に協⼒した。豊富な事件処理の実務経験及び着実な法律専⾨知識を有して`,
          cContent: '梓伊实习律师在本团队中主要负责团队案件的跟进与协调、客⼾跟进沟通等⼯作，并协助团队负责⼈提供⽇常法律顾问等服务。⻩梓伊实习律师具有法院、检察院的实习经历，熟悉法院、检察院办案流程，同时具有法律援助、社区普法经验。在事务所任职期间曾协助团队负责⼈办理买卖合同、租赁合同、⺠间借贷合同等各类合同纠纷案件，以及劳动仲裁、离婚诉讼、强制清算、商标侵权等其他类型的案件，具有丰富的办案经验和扎实的法律专业基础。'
        },
        {
          jName: '劉翹楚（リュウ・ギョウソ）パラリーガル',
          cName: '刘翘楚 律师助理',
          img: require('../../assets/image/header/header3.jpg'),
          skip1: [
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' }
          ],
          skip2: [
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' },
            { jSkip: '鹏律师事务所潘秀芬律师中', cSkip: '鹏律师事务所潘秀芬律师中' }
          ],
          jContent: `梓伊実習弁護⼠は、本チームにおいて、主にケースのフォローアップと調整、クライアントのフォローアップ・コミュニケーション、チーム担当者の下で⽇常法律顧問サービスの提供等の業務を担当している。また、⻩梓伊実習弁護⼠は裁判所や検察庁での実習経験があり、訴訟のプロセスに精通しており、法律援助や⾃治体法律普及の経験も持っている。在職中は、チーム担当者の下で売買契約、賃貸借契約、貸付契約などの各種契約紛争、及び、労働仲裁、離婚訴訟、強制清算、商標権侵害などの事件処理いる。
に協⼒した。豊富な事件処理の実務経験及び着実な法律専⾨知識を有して`,
          cContent: '梓伊实习律师在本团队中主要负责团队案件的跟进与协调、客⼾跟进沟通等⼯作，并协助团队负责⼈提供⽇常法律顾问等服务。⻩梓伊实习律师具有法院、检察院的实习经历，熟悉法院、检察院办案流程，同时具有法律援助、社区普法经验。在事务所任职期间曾协助团队负责⼈办理买卖合同、租赁合同、⺠间借贷合同等各类合同纠纷案件，以及劳动仲裁、离婚诉讼、强制清算、商标侵权等其他类型的案件，具有丰富的办案经验和扎实的法律专业基础。'
        }
      ],
      imgUrl: process.env.VUE_APP_IMAGE_URL,
      memberInfo: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getTeamMemberData()
        .then(data => {
          if (data.length > 0) {
            this.memberInfo = data
          } else this.memberInfo = []
        })
        .catch(err => {
          this.$message({
            type: 'error',
            message: err
          })
        })
    }
  }
}
</script>

<style scoped lang="less">
  .team-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .user-info {
      margin-bottom: 10px;
    }
    .avatar-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      .avatar-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        .avatar {
          width: 146px;
          height: 143px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            object-fit: cover;
          }
        }
        .avatar-red-title {
          font-size: 20px;
          line-height: 35px;
          color: #6A1D21;
        }
      }
      .avatar-list {
        text-align: left;
        line-height: 35px;
        margin: 10px;
        box-sizing: border-box;
        li:before {
          content: '';
          color: #ddd;
        }
      }
    }
    .m-bottom {
      margin-top: 35px;
      margin-bottom: 44px;
    }
    .red {font-size: 18px; color: #932026}
    .red:before {
      content: '';
      display: inline-block;
      margin-right: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ccc;
    }
    .black {font-size: 16px; color: #333}
    .black:before {
      content: '';
      display: inline-block;
      margin-right: 5px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: #ccc;
    }
  }
</style>
