import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import { store } from "@/config/redux/store.config";

import { ToastAlert } from "@/components/toast/ToastAlert";
import "@/styles/globals.css";
import "boxicons/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastAlert />
      </Provider>
    </SessionProvider>
  );
};

export default App;
