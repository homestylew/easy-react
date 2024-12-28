import { REACT_FRAGMENT_TYPE } from "../../../shared/ReactSymbols"
import { jsxProd } from "./ReactJSXElement"


// 这里有开发环境判断，省了
const jsx = jsxProd
// jsxs有判断，所以官方分开了
// we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions
const jsxs = jsxProd;


export {
  REACT_FRAGMENT_TYPE as Fragment,
  jsx,
  jsxs,
}