/// <reference types="@mdx-js/react" />

declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { ArticleMeta } from '../content/resources/types';

  const Component: ComponentType;
  export default Component;
  export const meta: ArticleMeta;
}
