
import { renameElementSymbol } from './ReactFeatureFlags'

export const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
export const REACT_LEGACY_ELEMENT_TYPE = Symbol.for('react.element');
export const REACT_ELEMENT_TYPE = renameElementSymbol
  ? Symbol.for('react.transitional.element')
  : REACT_LEGACY_ELEMENT_TYPE;