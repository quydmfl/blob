/**
 *
 * Asynchronously loads the component for CategoriesPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BlogDetailPage = lazyLoad(
  () => import('./index'),
  module => module.BlogDetailPage,
);
