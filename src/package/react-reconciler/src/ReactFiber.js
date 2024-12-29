import { disableLegacyMode } from "../../shared/ReactFeatureFlags"
import { ConcurrentRoot } from "./ReactRootTags"
import { NoMode, ConcurrentMode, StrictLegacyMode, StrictEffectsMode } from "./ReactTypeOfMode"
import { HostRoot } from "./ReactWorkTags"
import { NoFlags } from "./ReactFiberFlags"
import { NoLanes } from "./ReactFiberLane"



/**
 * create fiber (创建fiber节点)
 * @param {*} tag 
 * @param {*} pendingProps 
 * @param {*} key 
 * @param {*} mode 
 */
function FiberNode(tag, pendingProps, key, mode) {
  // Instance (实例)
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber(链表)
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;
  this.refCleanup = null;

  this.pendingProps = pendingProps;
  this.updateQueue = null;
  this.memoizedProps = null;
  this.memoizedState = null;
  // ？？？
  this.dependencies = null;

  this.mode = mode;

  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;
  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  // double cache（双缓存）
  this.alternate = null;
}


function createFiberImplClass(
  tag,
  pendingProps,
  key,
  mode,
) {
  return new FiberNode(tag, pendingProps, key, mode);
}

const createFiber = createFiberImplClass

export function createHostRootFiber(
  tag,
  isStrictMode
) {

  let mode;
  if (disableLegacyMode || tag === ConcurrentRoot) {
    mode = ConcurrentMode;
    if (isStrictMode === true) {
      mode |= StrictLegacyMode | StrictEffectsMode;
    }
  } else {
    mode = NoMode;
  }

  return createFiber(HostRoot, null, null, mode);
}