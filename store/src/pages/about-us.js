import React from "react";
import Image from "next/image";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const AboutUs = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  // console.log("data", data, );

  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader
        headerBg={storeCustomizationSetting?.about_us?.header_bg}
        title={showingTranslateValue(
          storeCustomizationSetting?.about_us?.title
        )}
      />
      <div class="p-2 border-y-2 pt-5 ml-5">
        <h2 class="text-3xl font-bold">会社概要</h2>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-3 ml-3">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="text-base  w-max py-3">会社名:</th>
              <th scope="col" class="px-6 py-3">Ar株式会社トランス
                （東証プライム市場上場　株式会社トランザクション100％子会社）
                http://www.trans.co.jp/
                株式会社トランザクションHP
                http://www.trans-action.co.jp/tist</th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">創業年月日:</th>
              <th scope="col" class="px-6 text- py-3">1987年(昭和62年)1月19日
              </th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">会社分割日:</th>
              <th scope="col" class="px-6 text- py-3">2007年(平成19年)8月1日
              </th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">代表者:</th>
              <th scope="col" class="px-6 text- py-3">代表取締役会長　石川諭
                代表取締役社長　猪口 祐紀子</th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">資本金:</th>
              <th scope="col" class="px-6 text- py-3">90百万円</th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">決算期:</th>
              <th scope="col" class="px-6 text- py-3">8月
              </th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">社員数:</th>
              <th scope="col" class="px-6 text- py-3">135名（連結442名）（2022年8月末）
              </th>
            </tr>
            <tr>
              <th scope="col" class="text-base  w-max py-3">役員:</th>
              <th scope="col" class="px-6 text- py-3">取締役/千葉啓一
                取締役/菊地淳一郎
                取締役/江川かおる
              </th>
            </tr>
          </thead>

        </table>
      </div>
      <div class="p-2 border-y-2 pt-5 ml-5">
        <h2 class="text-3xl font-bold">業務内容</h2>
        <ul class="ml-3 p-3">
          <li>・キャンペーンの企画立案・実施</li>
          <li>・セールスプロモーションツールの企画・製作(ノベルティ・プレミアムグッズ・SPツール全般)</li>
          <li>・ファッション雑貨やコンサートグッズのODM雑貨製品の企画・製作</li>
          <li>・自社ブランド雑貨製品の企画・製作・販売</li>
          <li>・販売促進サイト「販促STYLE」の企画・運営</li>
          <li>・エンタメ物販サイト「オリジナルグッズプレス」の企画・運営</li>
          <li>・「Moleskine」の日本市場における企業間取引に係るオフィシャルパートナー</li>
        </ul>
      </div>
      <div class="p-2 border-y-2 pt-5 ml-5">
        <h2 class="text-3xl font-bold ">所在地</h2>
        <div class="ml-10 pt-5">
          <h2 class="text-xl font-bold">本社</h2>
          <ul class="ml-5 p-5">
            <li>〒150-0002</li>
            <li>東京都渋谷区渋谷３－２８－１３渋谷新南口ビル９Ｆ</li>
          </ul>
        </div>
        <div class="ml-10 pt-5">
          <h2 class="text-xl font-bold">大阪支店</h2>
          <ul class="ml-5 p-5">
            <li>〒530-0001</li>
            <li>大阪府大阪市北区梅田3-4-5 毎日新聞ビル 3F</li>
          </ul>
        </div>
      </div>

    </Layout>
  );
};

export default AboutUs;
