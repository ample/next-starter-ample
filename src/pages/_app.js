import React from 'react';

import '../styles/libs/sanitize.scss';
import '../styles/global-styles.scss';
import '../styles/global-utilities.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
