/**
 *
 * Asynchronously loads the component for SettingToggle
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SettingToggle = lazyLoad(
  () => import('./index'),
  module => module.SettingToggle,
);
