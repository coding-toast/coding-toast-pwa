import { ApolloProvider } from '@apollo/react-hooks';
import { getDataFromTree } from '@apollo/react-ssr';
import withData from '../utils/apollo';

import '../styles/global/global.scss';

const MyApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withData(MyApp, { getDataFromTree });
