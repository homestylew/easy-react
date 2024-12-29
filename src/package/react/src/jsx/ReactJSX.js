import { REACT_FRAGMENT_TYPE } from "../../../shared/ReactSymbols"
import { jsxProd } from "./ReactJSXElement"


// I omitted the judgment.（这里有判断，我省略了）
const jsx = jsxProd
// we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions
const jsxs = jsxProd;


export {
  REACT_FRAGMENT_TYPE as Fragment,
  jsx,
  jsxs,
}