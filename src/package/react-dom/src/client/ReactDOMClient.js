import { ConcurrentRoot } from "../../../react-reconciler/src/ReactRootTags"
import { createContainer } from "../../../react-reconciler/src/ReactFiberReconciler"

/**
 * Create FiberRoot(创建fiberoot)
 * @param {Element | Document | DocumentFragment} container  
 * @param {*} options 
 */
export function createRoot(container, options) {
  const concurrentUpdatesByDefaultOverride = false;
  let isStrictMode = false;
  let identifierPrefix = '';
  let transitionCallbacks = null;
  let onUncaughtError = undefined;
  let onCaughtError = undefined;
  let onRecoverableError = undefined;

  if (options !== null && options !== undefined) {
    if (options.unstable_strictMode) {
      isStrictMode = true
    }
    if (options.identifierPrefix) {
      identifierPrefix = options.identifierPrefix;
    }
    if (options.unstable_transitionCallbacks) {
      transitionCallbacks = options.unstable_transitionCallbacks;
    }
  }

  const root = createContainer(
    container,
    ConcurrentRoot,
    null,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    transitionCallbacks,
  );


  return new ReactDOMRoot(root);

}

function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}


// render true dom
ReactDOMRoot.prototype.render = function (children) {
  const root = this._internalRoot;
  console.log("得到fiberRoot", root)
  // if (root) {
  //   updateContainer(children, root, null, null);
  // }
}

// unmount
ReactDOMRoot.prototype.unmount = function (children) {
  const root = this._internalRoot;
  if (root) {
    this._internalRoot = null;
    const container = root.containerInfo;

    // updateContainerSync(null, root, null, null);
    // flushSyncWork();
    // unmarkContainerAsRoot(container);
  }

}