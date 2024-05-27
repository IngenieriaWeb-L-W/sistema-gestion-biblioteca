import type { AppProps } from "next/app";

import { Provider } from "react-redux";

import { store } from "@/config/redux/store.config";
import "@/styles/globals.css";
import "boxicons/css/boxicons.min.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
