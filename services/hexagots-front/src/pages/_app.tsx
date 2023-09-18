import {type AppType} from "next/dist/shared/lib/utils";
import {dark} from '@clerk/themes';
import {ClerkProvider} from "@clerk/nextjs";
import Layout from '../component/Layout/index'
import "../styles/globals.css";

const MyApp: AppType = ({Component, pageProps}) => {
   return (
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
   );
};

export default MyApp;
