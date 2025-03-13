import Head from "next/head";
import { ToastContainer } from "react-toastify";
import 'react-perfect-scrollbar/dist/css/styles.css';

//internal import

import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import NavBarTop from "./navbar/NavBarTop";
import Navcategorylist from "./navbar/NavCategorylist";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@components/feature-card/FeatureCard";
import PerfectScrollbar from 'react-perfect-scrollbar';
// import Customizer from 'src/components/customize'

const Layout = ({ title, description, children }) => {
  // const { navigationSize, disableCustomizer, collapsedNavigationSize } = themeConfig
  return (
    <PerfectScrollbar>
      <div>
        <ToastContainer />

        <div className="font-sans">
          <Head>
            <title>
              {title
                ? `Shop | ${title}`
                : "Shop - React Grocery & Organic Food Store e-commerce Template"}
            </title>
            {description && <meta name="description" content={description} />}
            <link ref="icon" href="/favicon.png" />
          </Head>
          {/* {disableCustomizer || hidden ? null : <Customizer />} */}
          <NavBarTop />
          <Navbar />
          <div className="grid grid-cols-10">
            <div className="hidden lg:block col-span-2 p-4">
              <div className="grid grid-cols-10 gap-4">
                <div className="col-span-2 p-4">
                </div>
                <div className="col-span-8 p-4 w-full">
                  <Navcategorylist />
                </div>  
              </div>
            </div>
            <div className="lg:col-span-8 col-span-10 p-4">
              <div className="bg-gray-50">{children}</div>
            </div>
          </div>
          <MobileFooter />
          <div className="w-full">
            <FooterTop />
            <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
              <FeatureCard />
            </div>
            <hr className="hr-line"></hr>
            <div className="border-t border-gray-100 w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </PerfectScrollbar>
  );
};

export default Layout;
