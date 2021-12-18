
/**
 * 
 * 资料：
 * 
 *  - https://juejin.cn/post/6968630178163458084 推荐阅读
 *  - https://juejin.cn/post/7025409531496644616
 *  - https://juejin.cn/post/6992762038082600973
 *  - https://juejin.cn/post/7009629858993012743
 * 
 * 
 * 封装目的：
 * 
 * - 初始化配置：
 *   - 不同环境请求地址区分
 *   - 默认请求方式 content-type
 *   - 超时参数设置：30s
 *   - 跨域访问需要携带 cookie
 *   - headers 里面添加 token
 * - 请求拦截，添加参数
 *   - 请求参数格式化
 * - 响应拦截，处理响应，拦截异常: 
 *   - 返回指定 code 做出不同动作
 *   - 返回结果格式化
 * - 权限校验：token 或 cookie 
 * - 取消请求/重复请求拦截
 * - 文件流处理
 * - loading 和 报错提示
 * 
 * 
 */


const axios = require('axios');s

const instance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin-Type": '*',
  },
  baseURL: process.env.APP_API_URL,
  timeout: 1000 * 30,
  withCredentials: true,
  // transformRequest: data => qs.stringify(data),
})



// 第二步： 对请求拦截器，和响应拦截器进行封装
/**
 *  请求拦截器：发送请求前需要调用这个函数
 *  1.当没有登录时，直接跳转到登录页
 *  2.请求发送前把token获取，设置到header中
 * 
 */
instance.interceptors.request.use(config => {
  // 从localStorage中获取token
  let token = localStorage.getItem('token');
  // 如果token，就把token设置到请求头中Authorization字段中
  token && (config.headers.Authorization = token);
  return config;
}, error => {
  return Promise.reject(error)
})


/**
 * 
 * 响应拦截器： 当后端返回数据，时会调用这个函数
 * 1.每次返回错误403时，跳转到login
 * 
 */
instance.interceptors.response.use(response => {
  const { code, data, message } = response;
  if (code === 403) {
    return history.pushState('/login')
  } else if (code === '5xx') {
    // Toast.error(message)
    return Promise.reject(data);
  }
  return Promise.resolve(data);
}).catch((error) => {
  if (error.response) {
    const { data } = error.response
    const resCode = data.status
    const resMsg = data.message || '服务异常'
    // if (resCode === 401) { // 与服务端约定
    //     // 登录校验失败
    // } else if (data.code === 403) { // 与服务端约定
    //     // 无权限
    //     router.replace({ path: '/403' })
    // }
    if (!errorMsgObj[resMsg]) {
      errorMsgObj[resMsg] = resMsg
    }
    setTimeout(debounce(toastMsg, 1000, true), 1000)
    const err = { code: resCode, respMsg: resMsg }
    return Promise.reject(err)
  } else {
    const err = { type: 'canceled', respMsg: '数据请求超时' }
    return Promise.reject(err)
  }
});



// 第三步：使用上面的axios对象，对get请求和post请求进行封装
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 */
export function get(url, params, headers) {
  return new Promise((resolve, reject) => {
    instance.get(url, { params, headers }).then(res => {
      resolve(res.data.ResultObj)
    }).catch(err => {
      reject(err.data)
    })
  })
}



/**
 * POST请求
 * 
 * @param {*} url 
 * @param {*} params 
 * @param {*} headers 
 * @returns 
 */
export function post(url, params, headers) {
  return new Promise((resolve, reject) => {
    instance.post(url, params, headers).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err.data)
    })
  })
}


export default instance;



// ------------------如何使用-------------------

// 接口信息,生成请求方法
// 引入get方法,post方法
// import { get,post } from './index'
// 用户登陆
// export const login = (params,headers) => post("/user/login/",params,headers)