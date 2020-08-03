import request from './request'

const BASE_URL = '/website/head'

/* TODO Common */

/**
   * @description 获取背景图
   * @method getBgData
   */
export const getBgData = async () => {
  return await request.post(`${BASE_URL}/getBackground`)
}

/**
 * @description 获取导航栏
 * @method getNavData
 */
export const getNavData = async () => {
  return await request.post(`${BASE_URL}/getNavigation`)
}

/**
 * @description 获取轮播图
 * @method getSwipeData
 */
export const getSwipeData = async () => {
  return await request.post(`${BASE_URL}/getImg`)
}

/**
 * @description 获取底部信息
 * @method getFooterData
 */

export const getFooterData = async () => {
  return await request.post(`${BASE_URL}/getpageInformation`)
}

/*  TODO Home */
/**
 * @description 获取首页
 * @method getHomeData
 */
export const getHomeData = async () => {
  return await request.post(`${BASE_URL}/gethomePage`)
}

/**
 * @description 获取总部介绍
 * @method getHeadquartersData
 */
export const getHeadquartersData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 1 })
}
/**
 * @description 获取日本办事处介绍
 * @method getExternalsData
 */
export const getExternalsData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 2 })
}
/**
 * @description 获取座右铭
 * @method getMottoData
 */
export const getMottoData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 3 })
}
/**
 * @description 获取使命
 * @method getMissionData
 */
export const getMissionData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 4 })
}
/**
 * @description 获取优势
 * @method getSuperiorityData
 */
export const getSuperiorityData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 5 })
}
/**
 * @description 获取金鹏概括
 * @method getAboutData
 */
export const getAboutData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 6 })
}
/**
 * @description 获取团队介绍的接口
 * @method getTeamData
 */
export const getTeamData = async () => {
  return await request.post(`${BASE_URL}/getpartIntroduce`, { type: 7 })
}

/* TODO About */

/**
 * @description 获取社会服务信息
 * @method getSocialServiceData
 */
// eslint-disable-next-line camelcase
export const getSocialServiceData = async ({ Display_Page_Number, PageNumber }) => {
  return await request.post(`${BASE_URL}/getsocialPosition`, {
    Display_Page_Number,
    PageNumber
  })
}

/* TODO Honor */

/**
 * @description 获取金鹏荣誉
 * @method getHonorData
 */
// eslint-disable-next-line camelcase
export const getHonorData = async ({ Display_Page_Number, PageNumber }) => {
  return await request.post(`${BASE_URL}/getHonor`, {
    Display_Page_Number,
    PageNumber
  })
}

/* TODO service */

/**
 * @description 获取社会服务
 * @method getServiceData
 */
export const getServiceData = async () => {
  return await request.post(`${BASE_URL}/getArea`)
}
/**
 * @description 获取社会服务详情
 * @method getServiceDetailData
 */
export const getServiceDetailData = async () => {
  return await request.post(`${BASE_URL}/getAreadetails`)
}

/* TODO customer */

/**
 * @description 获取重要客户
 * @method getCustomerData
 */
export const getCustomerData = async () => {
  return await request.post(`${BASE_URL}/getCustomer`)
}

/* TODO Team */

/**
 * @description 获取团队服务领域
 * @method getTeamServiceData
 */
export const getTeamServiceData = async () => {
  return await request.post(`${BASE_URL}/getTeamService`)
}

/**
 * @description 获取团队负责人
 * @method getTeamLeaderData
 */
export const getTeamLeaderData = async () => {
  return await request.post(`${BASE_URL}/getTeamlead`)
}

/**
 * @description 获取团队成员
 * @method getTeamMemberData
 */
export const getTeamMemberData = async () => {
  return await request.post(`${BASE_URL}/getTeammember`)
}

/* TODO Contact */

/**
 * @description 获取聯係我們数据
 * @method getContactData
 */

export const getContactData = async () => {
  return await request.get('/contact')
}

/* TODO News */

/**
 * @description 获取新闻资讯
 * @method getNewsInformationData
 */

// eslint-disable-next-line camelcase
export const getNewsInformationData = async ({ Display_Page_Number, PageNumber }) => {
  return await request.post(`${BASE_URL}/getNewsInformation`, {
    Display_Page_Number,
    PageNumber
  })
}

/**
 * @description 获取新闻资讯详情
 * @method getNewsInformationDetailData
 */
export const getNewsInformationDetailData = async (id) => {
  return await request.post('/news/information/detail', { id })
}

/**
 * @description 获取法律法规
 * @method getNewsRegulationsData
 */

// eslint-disable-next-line camelcase
export const getNewsRegulationsData = async ({ Display_Page_Number, PageNumber }) => {
  return await request.post(`${BASE_URL}/getLegislation`, {
    Display_Page_Number,
    PageNumber
  })
}
/**
 * @description 获取法律法规详情
 * @method getNewsRegulationsDetailData
 */
export const getNewsRegulationsDetailData = async (id) => {
  return await request.post('/news/regulations/detail', { id })
}

/* TODO Consultation */

/**
 * @description 获取在线资讯数据
 * @method getConsultationData
 */
export const getConsultationData = async () => {
  return await request.get('/consultation')
}

/**
 * @description 发送案件
 * @method postMessage
 */
export const postMessage = async (data) => {
  return await request.post('/consultation', { data })
}
