import { ConcurrentRoot } from "./ReactRootTags"
import { disableLegacyMode } from "../../shared/ReactFeatureFlags"
import { createHostRootFiber } from "./ReactFiber"

export function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  // TODO: We have several of these arguments that are conceptually part of the
  // host config, but because they are passed in at runtime, we have to thread
  // them through the root constructor. Perhaps we should put them all into a
  // single type, like a DynamicHostConfig that is defined by the renderer.
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  transitionCallbacks,
  formState,
) {

  const root = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    formState,
  )
  const uninitializedFiber = createHostRootFiber(tag, isStrictMode);
  // double indicator （双指针）
  root.current = uninitializedFiber
  uninitializedFiber.stateNode = root

  // cache TODO

  // init update queue TODO

  return root
}


function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  formState
) {
  this.tag = disableLegacyMode ? ConcurrentRoot : tag;
  this.containerInfo = containerInfo;
  this.current = null;

  // this.identifierPrefix = identifierPrefix;
  // this.onUncaughtError = onUncaughtError;
  // this.onCaughtError = onCaughtError;
  // this.onRecoverableError = onRecoverableError;
  // this.formState = formState;
  // this.pendingLanes = NoLanes;
  // this.suspendedLanes = NoLanes;
  // this.pingedLanes = NoLanes;
  // this.warmLanes = NoLanes;
  // this.expiredLanes = NoLanes;
  // this.finishedLanes = NoLanes;
  // this.errorRecoveryDisabledLanes = NoLanes;
  // this.shellSuspendCounter = 0;
  // this.entangledLanes = NoLanes;
  // this.entanglements = createLaneMap(NoLanes);
  // this.hiddenUpdates = createLaneMap(null);
  // this.pooledCache = null;
  // this.pooledCacheLanes = NoLanes;
}