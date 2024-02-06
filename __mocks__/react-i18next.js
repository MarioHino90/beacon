/* eslint-disable @typescript-eslint/no-var-requires */
var reactI18n = jest.requireActual("react-i18next");

var myUseTranslation = function myUseTranslation(ns, options) {
  var { i18n } = jest.requireActual("../packages/i18n-dev/dist");
  return reactI18n.useTranslation(
    ns,
    Object.assign({}, options, {
      i18n,
    })
  );
};

var MyTrans = function MyTrans(props) {
  var { i18n } = jest.requireActual("../packages/i18n-dev/dist");
  return reactI18n.Trans(
    Object.assign({}, props, {
      i18n,
    })
  );
};

const fakedI18n = {
  Trans: MyTrans,
  useTranslation: myUseTranslation,
  withTranslation: reactI18n.withTranslation,
  Translation: reactI18n.Translation,
  I18nextProvider: reactI18n.I18nextProvider,
  withSSR: reactI18n.withSSR,
  useSSR: reactI18n.useSSR,
  I18nContext: reactI18n.I18nContext,
  initReactI18next: reactI18n.initReactI18next,
  setDefaults: reactI18n.setDefaults,
  getDefaults: reactI18n.getDefaults,
  setI18n: reactI18n.setI18n,
  getI18n: reactI18n.getI18n,
  composeInitialProps: reactI18n.composeInitialProps,
  getInitialProps: reactI18n.getInitialProps,
};
module.exports = fakedI18n;
