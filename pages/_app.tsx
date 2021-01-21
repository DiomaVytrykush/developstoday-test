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
            font-family: ${theme.font}, sans-serif;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </Provider>
  );
};

export const theme = {
  colors: {
    primary: "#ff9600",
    secondary: "#ce82ff",
  },
  font: "Varela Round",
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
