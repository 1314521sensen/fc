import {getCache} from  "../../config"
let registered = getCache('registeredData') ? getCache('registeredData'):[]
export const registeredData = registered