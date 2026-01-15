import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'amp-story': any;
      'amp-story-page': any;
      'amp-story-grid-layer': any;
      'amp-img': any;
    }
  }
}