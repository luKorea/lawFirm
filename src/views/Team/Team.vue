<!-- TODO 团队负责人完成响应式 -->
<template>
  <div class="team-container">
    <el-col :lg="12" :xm="12" :sm="24">
      <div class="title">
        <el-divider><span class="red-font">チーム担当者紹介</span></el-divider>
        <div class="black-font">团队负责人介绍</div>
      </div>
      <el-divider />
      <div class="avatar-container">
<!--左边头像-->
        <div class="avatar-content">
          <div class='avatar'>
            <img src="../../assets/image/swipe/swipe_4.jpg" alt="">
          </div>
          <div class="avatar-red-title">潘秀芬 （パン·シュウフン） 弁護士</div>
          <div class="avatar-black-title">潘秀芬 律师</div>
        </div>
<!--右边列表-->
        <div class="avatar-list">
          <template v-for="item in list1">
            <li class="red">{{ item.jName }}</li>
            <li class="black">{{ item.cName }}</li>
          </template>
        </div>
        <div class="avatar-list">
          <template v-for="item in list2">
            <li class="red">{{ item.jName }}</li>
            <li class="black">{{ item.cName }}</li>
          </template>
        </div>
      </div>
      <div class="red-content left-font m-bottom">
        <el-col :lg="24" :xm="24" :sm="24">{{ dataList.jContent }}</el-col>
      </div>
      <div class="black-content left-font">
        <el-col :lg="24" :xm="24" :sm="24">{{ dataList.cContent }}</el-col>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'TeamDesc',
  data () {
    return {
      dataList: {
        jContent: `潘秀芬弁護⼠の得意分野は、公司法律業務、公司持分及びガバナンス設計、公司の再編・合併、投資・融資における法律業務、不動産法律業務、⺠商事訴訟・仲裁、知的財産法律業務、家族法律業務、政府法律業務、労働法律業務等。主な業績は次のとおりである。
⼀、多数の政府及び⼤⼿国有企業・公的機関に⻑期法律サービスを提供する：広州市⼟地資源・計画委員会、広州市発展改⾰委員会、韓国国⺠銀⾏（中国）有限公司広州⽀店、広州棒⾕テクノロジー株式公司、広東省天河区員村街⽯東第⼆株式協同経済社、広東省天河区員村街⽯東第三株式協同経済社等。多数の政府及び⼤⼿国有企業・公的機関に特定項⽬法律サービスを提供する：広東省農業庁⼟地権確定紛争に関する法律相談サービス、広州市住宅と都市農村建
設委員会の⾏政訴訟事件における特別法律サービス、不動産賃貸借、中外合資公司清算、国際商品販売及び代理契約の作成・交渉、ターゲット公司のデューデリジェンス等。
⼆、訴訟法律サービスは主に以下の事件を代理する：売買契約、賃貸借契約、⺠間貸付契約等各種類の契約紛争事件、及び商事仲裁、労働仲裁、婚姻家族紛争、強制清算、知的財産権侵害、不正競争等様々な事件。
三、代理した主な法律業務は次のとおりである：1、広州市万⼒ゴムタイヤ有限公司从化⼯場の建設及び広州ダイヤモンドビークル有限公司の建設のため、⼟地使⽤権の譲渡、プロジェクトの⼊札、契約履⾏、設備購⼊等を含む全プロセスの特定項⽬法律サービスを提供した。２、広州市華南ゴムタイヤ有限公司、広州溢滔ゴム有限公司及びVICTOR?ENTERPRISENTERNATIONAL?CO.,LTD?により合資企業広州華溢洋有限公司の設⽴に対して特定項⽬法律サービスを提供した。３、広州市華南ゴムタイヤ有限公司がTIRECO,?INC.公司と製造契約（OEM契約）の締結に対して特定項⽬法律サービスを提供した。4、広州華南ゴムタイヤ有限公司がDeldo?Autobanden?nvと「独占販売契約」、「SUNNY商標譲渡契約」、「WANLI商標譲渡契約」の締結に対して特定項⽬法律サービスを提供した。
四、主な栄誉受賞歴：潘秀芬弁護⼠は2010年広州市初回弁護⼠弁論⼤会で優勝チームを獲得し、優秀弁⼠の称号を獲得した；2011年広州市第⼆回弁護⼠弁論⼤会で優勝チームを獲得し、弁⼠のベストテン称号を獲得した。
 `,
        cContent: `潘秀芬律师擅⻓执业领域包括公司法律事务、公司股权及制度设计、公司重组并购、投融资法律事务、房地产法律事务、⺠商事诉讼仲裁、知识产权法律事务、家族办公室法律事务、政府法律事务、劳动法律事务等。主要业绩如下：
⼀、为多家政府及⼤型国企、事业单位提供常年法律服务：⼴州市国⼟资源和规划委员会、⼴州市发展和改⾰委员会、韩国国⺠银⾏（中国）有限公司⼴州分⾏、⼴州棒⾕科技股份有限公司、⼴州市天河区员村街⽯东第⼆股份合作经济社、⼴州市天河区员村街⽯东第三股份合作经济社等。为多家政府及⼤型国企、事业单位提供专项法律服务：⼴东省农业厅⼟地确权纠纷法律咨询的专项法律服务项⽬、⼴州市住房和城乡建设委员会的⾏政案件专项法律服务、房地产租赁、中外合资企业清算、国际货物销售及代理合同的拟定和谈判、⽬标公司尽职调查等。
⼆、诉讼法律服务主要包括代理：买卖合同、租赁合同、⺠间借贷合同等各类合同纠纷案件，以及商事仲裁、劳动仲裁、婚姻家事纠纷、强制清算、知识产权侵权、不正当竞争等其他类型的案件。
三、曾办理的主要法律事务包括：1、为⼴州市万⼒橡胶轮胎有限公司从化⼚区的建设和为⼴州钻⽯⻋业有限公司的建设提供包括⼟地使⽤权受让，⼯程招标、发包、履⾏，设备招标、进⼝等全过程的专项法律服务；2、为⼴州市华南橡胶轮胎有限公司与⼴州市溢滔橡胶有限公司、VICTOR?ENTERPRISE?INTERNATIONAL?CO.,LTD合资成⽴⼴州华溢洋橡胶有限公司提供专项法律服务；3、为⼴州市华南橡胶轮胎有限公司与TIRECO,?INC.公司签署制造协议（OEM协
议）提供专项法律服务；4、为⼴州市华南橡胶轮胎有限公司与Deldo?Autobanden?n.v签署《独家销售协议》、《SUNNY商标转让协议》、《WANLI商标转让协议》提供专项法律服务等。
四、主要荣誉奖项：潘秀芬律师曾于2010年荣获⼴州市⾸届律师辩论赛团体冠军、优秀辩⼿称号；2011年荣获⼴州市第⼆届律师辩论赛团体冠军、⼗佳辩⼿称号。

        `
      },
      list1: [
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        }
      ],
      list2: [
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        }
      ]
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
    .avatar-container {
      display: flex;
      justify-content: center;
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
    .black {font-size: 16px; color: #333}
  }
</style>
<!-- TODO 团队负责人完成响应式 -->
<template>
  <div class="team-container">
    <el-col :lg="12" :xm="12" :sm="24">
      <div class="title">
        <el-divider><span class="red-font">チーム担当者紹介</span></el-divider>
        <div class="black-font">团队负责人介绍</div>
      </div>
      <el-divider />
      <div class="avatar-container">
<!--左边头像-->
        <div class="avatar-content">
          <div class='avatar'>
            <img src="../../assets/image/swipe/swipe_4.jpg" alt="">
          </div>
          <div class="avatar-red-title">潘秀芬 （パン·シュウフン） 弁護士</div>
          <div class="avatar-black-title">潘秀芬 律师</div>
        </div>
<!--右边列表-->
        <div class="avatar-list">
          <template v-for="item in list1">
            <li class="red">{{ item.jName }}</li>
            <li class="black">{{ item.cName }}</li>
          </template>
        </div>
        <div class="avatar-list">
          <template v-for="item in list2">
            <li class="red">{{ item.jName }}</li>
            <li class="black">{{ item.cName }}</li>
          </template>
        </div>
      </div>
      <div class="red-content left-font m-bottom">
        <el-col :lg="24" :xm="24" :sm="24">{{ dataList.jContent }}</el-col>
      </div>
      <div class="black-content left-font">
        <el-col :lg="24" :xm="24" :sm="24">{{ dataList.cContent }}</el-col>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'TeamDesc',
  data () {
    return {
      dataList: {
        jContent: `潘秀芬弁護⼠の得意分野は、公司法律業務、公司持分及びガバナンス設計、公司の再編・合併、投資・融資における法律業務、不動産法律業務、⺠商事訴訟・仲裁、知的財産法律業務、家族法律業務、政府法律業務、労働法律業務等。主な業績は次のとおりである。
⼀、多数の政府及び⼤⼿国有企業・公的機関に⻑期法律サービスを提供する：広州市⼟地資源・計画委員会、広州市発展改⾰委員会、韓国国⺠銀⾏（中国）有限公司広州⽀店、広州棒⾕テクノロジー株式公司、広東省天河区員村街⽯東第⼆株式協同経済社、広東省天河区員村街⽯東第三株式協同経済社等。多数の政府及び⼤⼿国有企業・公的機関に特定項⽬法律サービスを提供する：広東省農業庁⼟地権確定紛争に関する法律相談サービス、広州市住宅と都市農村建
設委員会の⾏政訴訟事件における特別法律サービス、不動産賃貸借、中外合資公司清算、国際商品販売及び代理契約の作成・交渉、ターゲット公司のデューデリジェンス等。
⼆、訴訟法律サービスは主に以下の事件を代理する：売買契約、賃貸借契約、⺠間貸付契約等各種類の契約紛争事件、及び商事仲裁、労働仲裁、婚姻家族紛争、強制清算、知的財産権侵害、不正競争等様々な事件。
三、代理した主な法律業務は次のとおりである：1、広州市万⼒ゴムタイヤ有限公司从化⼯場の建設及び広州ダイヤモンドビークル有限公司の建設のため、⼟地使⽤権の譲渡、プロジェクトの⼊札、契約履⾏、設備購⼊等を含む全プロセスの特定項⽬法律サービスを提供した。２、広州市華南ゴムタイヤ有限公司、広州溢滔ゴム有限公司及びVICTOR?ENTERPRISENTERNATIONAL?CO.,LTD?により合資企業広州華溢洋有限公司の設⽴に対して特定項⽬法律サービスを提供した。３、広州市華南ゴムタイヤ有限公司がTIRECO,?INC.公司と製造契約（OEM契約）の締結に対して特定項⽬法律サービスを提供した。4、広州華南ゴムタイヤ有限公司がDeldo?Autobanden?nvと「独占販売契約」、「SUNNY商標譲渡契約」、「WANLI商標譲渡契約」の締結に対して特定項⽬法律サービスを提供した。
四、主な栄誉受賞歴：潘秀芬弁護⼠は2010年広州市初回弁護⼠弁論⼤会で優勝チームを獲得し、優秀弁⼠の称号を獲得した；2011年広州市第⼆回弁護⼠弁論⼤会で優勝チームを獲得し、弁⼠のベストテン称号を獲得した。
 `,
        cContent: `潘秀芬律师擅⻓执业领域包括公司法律事务、公司股权及制度设计、公司重组并购、投融资法律事务、房地产法律事务、⺠商事诉讼仲裁、知识产权法律事务、家族办公室法律事务、政府法律事务、劳动法律事务等。主要业绩如下：
⼀、为多家政府及⼤型国企、事业单位提供常年法律服务：⼴州市国⼟资源和规划委员会、⼴州市发展和改⾰委员会、韩国国⺠银⾏（中国）有限公司⼴州分⾏、⼴州棒⾕科技股份有限公司、⼴州市天河区员村街⽯东第⼆股份合作经济社、⼴州市天河区员村街⽯东第三股份合作经济社等。为多家政府及⼤型国企、事业单位提供专项法律服务：⼴东省农业厅⼟地确权纠纷法律咨询的专项法律服务项⽬、⼴州市住房和城乡建设委员会的⾏政案件专项法律服务、房地产租赁、中外合资企业清算、国际货物销售及代理合同的拟定和谈判、⽬标公司尽职调查等。
⼆、诉讼法律服务主要包括代理：买卖合同、租赁合同、⺠间借贷合同等各类合同纠纷案件，以及商事仲裁、劳动仲裁、婚姻家事纠纷、强制清算、知识产权侵权、不正当竞争等其他类型的案件。
三、曾办理的主要法律事务包括：1、为⼴州市万⼒橡胶轮胎有限公司从化⼚区的建设和为⼴州钻⽯⻋业有限公司的建设提供包括⼟地使⽤权受让，⼯程招标、发包、履⾏，设备招标、进⼝等全过程的专项法律服务；2、为⼴州市华南橡胶轮胎有限公司与⼴州市溢滔橡胶有限公司、VICTOR?ENTERPRISE?INTERNATIONAL?CO.,LTD合资成⽴⼴州华溢洋橡胶有限公司提供专项法律服务；3、为⼴州市华南橡胶轮胎有限公司与TIRECO,?INC.公司签署制造协议（OEM协
议）提供专项法律服务；4、为⼴州市华南橡胶轮胎有限公司与Deldo?Autobanden?n.v签署《独家销售协议》、《SUNNY商标转让协议》、《WANLI商标转让协议》提供专项法律服务等。
四、主要荣誉奖项：潘秀芬律师曾于2010年荣获⼴州市⾸届律师辩论赛团体冠军、优秀辩⼿称号；2011年荣获⼴州市第⼆届律师辩论赛团体冠军、⼗佳辩⼿称号。

        `
      },
      list1: [
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        }
      ],
      list2: [
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        },
        {
          jName: '鹏律师事务所潘秀芬律师中',
          cName: '鹏律师事务所潘秀芬律师中'
        }
      ]
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
    .avatar-container {
      display: flex;
      justify-content: center;
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
    .black {font-size: 16px; color: #333}
  }
</style>
