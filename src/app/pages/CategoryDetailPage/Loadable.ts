/**
 *
 * Asynchronously loads the component for CategoriesPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CategoryDetailPage = lazyLoad(
  () => import('./index'),
  module => module.CategoryDetailPage,
);
