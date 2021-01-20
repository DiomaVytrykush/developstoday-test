import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import type { AppProps } from "next/app";

import store from "../redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            font-family: "Varela Round", sans-serif;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </Provider>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
