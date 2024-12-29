import { REACT_ELEMENT_TYPE } from "../../../shared/ReactSymbols"

/**
 * create vdom (创建虚拟DOM)
 * @param {*} type 
 * @param {*} key 
 * @param {*} self this
 * @param {*} source not used
 * @param {*} owner 
 * @param {*} props 
 */

function ReactElement(
  type,
  key,
  self,
  source,
  owner,
  props,
) {
  const ref = props.ref ?? null;
  let element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
  }

  return element;
}


/**
 * 
 * @param {*} type div/h1/function...
 * @param {*} config all config and children info(配置项和children内容)
 * @param {*} maybeKey elment key(元素上添加的key)
 */

export function jsxProd(type, config, maybeKey) {
  let key = null;
  let props;
  if (maybeKey) {
    key = `${maybeKey}`
  }

  if (config.key) {
    key = `${config.key}`
  }

  if (!('key' in config)) {
    props = config
  } else {
    for (const propsName in config) {
      if (propName !== 'key') {
        props[propName] = config[propName]
      }
    }
  }

  return ReactElement(
    type,
    key,
    undefined,
    undefined,
    null,// getOwner() not used(没啥用)
    props,
  );
}