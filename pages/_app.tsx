import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models";
import { theme } from "@/utils";
import createEmotionCache from "@/utils/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { axiosClient } from "api-client";
import { SWRConfig } from "swr";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
