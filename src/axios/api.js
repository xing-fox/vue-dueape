import {
  Post
} from './index.js'

/**
 * @param 查询学校信息列表  
 */
export const collegeIndex = (param) => {
  return Post('api/college/index', param)
}

/**
 * @param 查询topic列表（频道tab）  
 */
export const topicIndex = (param) => {
  return Post('api/topic/index', param)
}

/**
 * @param 首页查询所有课程：一对一辅导，公开课，好课推荐，全部课程
 */
export const homeIndex = (param) => {
  return Post('api/home/index', param)
}

/**
 * @param 查询轮播图列表  
 */
export const slideShowIndex = (param) => {
  return Post('api/slideshow/index', param)
}

/**
 * @param 查询课程信息列表(分页)  
 */
export const courseIndex = (param) => {
  return Post('api/course/index', param)
}

/**
 * @param 根据课号模糊匹配班课信息  
 */
export const courseSearch = (param) => {
  return Post('api/course/search', param)
}

/**
 * @param 查询我的订单  
 */
export const coursecustomerOrder = (param) => {
  return Post('api/course/customerOrder', param)
}

/**
 * @param 查询课程详情页
 */
export const courseDetail = (param) => {
  return Post('api/course/detail', param)
}

/**
 * @param 用户查询自己领取的优惠券列表（需要登录）
 */
export const getMyCouponList = (param) => {
  return Post('api/customer/getMyCouponList', param)
}

/**
 * @param 查询我的订单
 */
export const getMyOrderList = (param) => {
  return Post('api/customer/getMyOrderList', param)
}

/**
 * @param 查询我的订单详情
 */
export const getMyOrderDetail = (param) => {
  return Post('api/customer/getMyOrderDetail', param)
}

/**
 * @param 意见反馈（需登录）
 */
export const optionCreate = (param) => {
  return Post('api/feedBack/create', param)
}

/**
 * @param 获取文件上传签名
 */
export const getToken = (param) => {
  return Post('api/upload/getToken', param)
}

/**
 * @param 用户申请导师，提交资料（需登录）
 */
export const applyTutor = (param) => {
  return Post('api/customer/applyTutor', param)
}

/**
 * @param 重新申请导师，获取资料（需登录）
 */
export const AfreshApplyTutor = (param) => {
  return Post('api/customer/afreshApplyTutor', param)
}

/**
 * @param 获取手机验证码接口
 */
export const GetCode = (param) => {
  return Post('api/customer/getCode', param)
}

/**
 * @param 手机短信验证码登录接口
 */
export const PhoneLogin = (param) => {
  return Post('api/customer/phoneLogin', param)
}