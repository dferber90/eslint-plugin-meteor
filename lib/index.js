// eslint-disable-next-line global-require, no-underscore-dangle
if (!global._babelPolyfill) require('babel-polyfill')

/* eslint-disable import/imports-first */
import auditArgumentChecks from './rules/audit-argument-checks'
import noSession from './rules/no-session'
import noBlazeLifecycleAssignment from './rules/no-template-lifecycle-assignments'
import noZeroTimeout from './rules/no-zero-timeout'
import eventmapParams from './rules/eventmap-params'
import prefixEventmapSelectors from './rules/prefix-eventmap-selectors'
import preferSessionEquals from './rules/prefer-session-equals'
import templateNamingConvention from './rules/template-names'
import scopeDomLookups from './rules/scope-dom-lookups'
import noDomLookupOnCreated from './rules/no-dom-lookup-on-created'
import noTemplateParentData from './rules/no-template-parent-data'
/* eslint-enable import/imports-first */

export const rules = {
  'audit-argument-checks': auditArgumentChecks,
  'no-session': noSession,
  'no-template-lifecycle-assignments': noBlazeLifecycleAssignment,
  'no-zero-timeout': noZeroTimeout,
  'eventmap-params': eventmapParams,
  'prefix-eventmap-selectors': prefixEventmapSelectors,
  'prefer-session-equals': preferSessionEquals,
  'template-names': templateNamingConvention,
  'scope-dom-lookups': scopeDomLookups,
  'no-dom-lookup-on-created': noDomLookupOnCreated,
  'no-template-parent-data': noTemplateParentData,
}

export const configs = {
  recommended: {
    rules: {
      'meteor/audit-argument-checks': 2,
      'meteor/no-session': 2,
      'meteor/no-template-lifecycle-assignments': 2,
      'meteor/no-zero-timeout': 2,
      'meteor/eventmap-params': 2,
      'meteor/prefix-eventmap-selectors': 0,
      'meteor/prefer-session-equals': 0,
      'meteor/template-names': 2,
      'meteor/scope-dom-lookups': 0,
      'meteor/no-dom-lookup-on-created': 0,
      'meteor/no-template-parent-data': 0,
    },
  },
  guide: {
    rules: {},
  },
}
