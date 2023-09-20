import {type AppType} from "next/dist/shared/lib/utils";
import {dark} from '@clerk/themes';
import {ClerkProvider} from "@clerk/nextjs";
import Layout from '../component/Layout/index'
import "../styles/globals.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()

const MyApp: AppType = ({Component, pageProps}) => {
   return (
      <QueryClientProvider client={queryClient}>
         <ClerkProvider
            {...pageProps}
            appearance={{
               baseTheme: dark
            }}
         >
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ClerkProvider>
      </QueryClientProvider>
   );
};

export default MyApp;
