import 'semantic-ui-css/semantic.min.css';
import './styles.css';

import { IntlProvider, addLocaleData } from 'react-intl';

import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import _ from 'lodash';
import de from 'react-intl/locale-data/de';
import deMessages from './resources/i18n/de.json'
import flattenObject from './utils/flatten-object';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

addLocaleData([...de]);

const messages = {
  de: flattenObject(deMessages)
}

const isoCode = navigator.language || navigator.userLanguage;
const language = isoCode.substring(0, 2);
const languageExists = _.indexOf(_.keys(messages), language) > -1;

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider defaultLocale='de' locale={languageExists ? language : 'de'} messages={messages[language]}>
      <Routes />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();