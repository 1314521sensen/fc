//设置游览器缓存
function set_cache(key,value){
    return localStorage.setItem(key,value)
}
//读取缓存中数据
function get_cache(key,userphone){
    let userdata = JSON.parse(localStorage.getItem(key))
    return userdata
}
export const setCache = set_cache
export const getCache = get_cache