import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import CategoryCard from "@components/category/CategoryCard";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { FiSearch, FiDollarSign } from "react-icons/fi";
import { FaYenSign } from "react-icons/fa6";
import { IoChevronForwardOutline } from "react-icons/io5";
import { TbBrandAppgallery } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { GiMagicLamp } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";





const NavCategorylist = () => {

    const Searchbyfeature = ["すべて見る",
        "月別おすすめのノベルティ特集",
        "業界別ノベルティ特集レジ袋有料化に。今必要なエコバッグとは",
        "ノベルティに迷ったら! 殿堂入りアイテム",
        "SDGsに貢献できるノベルティ特集",
        "激安ノベルティ特集",
        "小ロットノベルティ特集",
        "ウイルス対策グッズ特集",
        "名入れ可能な感染症対策商品特集",
        "おしゃれなノベルティ特集おもしろいノベルティグッズ特集",
        "高級感のあるプレミアムノベルティ特集",
        "お年賀ノベルティ・粗品特集 "];
    const UsefulColumn = ["トートバッグのいろいろ教えます!",
        "ノベルティとは",
        "クイックプリントとは",
        "貸出サンプルについて",
        "デザインツールとは",
        "ポイントについて",
        "PANTONEカラー見本",
        "制作実績のご紹介",
        "印刷方法について",
        "お見積もりについて",
        "クレジットカード各種対応",
        "請求書で後払い 【NP掛け払い】",
        "30,000円以上で送料無料",
        "ノベルティ・販促品のコラム"];
    const Searchbypopularproducts = ["MOTTERU(モッテル) セルトナ",
        "キャンバストートバッグ(S)",
        "キャンバストートバッグ (M)  ",
        "コットンバッグ(M) ",
        "A4サイズコットンバッグ ",
        "A4サイズキャンバスバッグ",
        "A4サイズ 不織布トートバッグ",
        "ステンレスボトルクリアボトル陶器マグカップ",];
    const Searchbypurpose = ["SDGs向けグッズ",
        "周年記念品",
        "卒業記念品",
        "卒園記念品",
        "卒団記念品",
        "来店・成約プレゼント",
        "営業配布・訪問粗品",
        "景品",
        "バラマキ",
        "展示会",
        "イベント",];
    const brand = ["モッテル",
        "パイロット",
        "三菱鉛筆",
        "ゼブラ",
        "ぺんてる",
        "シヤチハタ",
        "クロス",
        "パーカー",
        "キングジム",
        "リヒトラブ",
        "マルマン",
        "サーモス",
        "アトラス",
        "バッファロー",
        "ザラット",
        "マルット",];
    const searchprice = ["100円以内 のノベルテ",
        "101円～300円",
        "301円～500円",
        "501円～1000円",
        "1001円～5000円",];

    const { showingTranslateValue } = useUtilsFunction();
    const { data, loading, error } = useAsync(() =>
        CategoryServices.getShowingCategory()
    );
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <FiSearch />
                    商品一覧
                </h1>
                {data[0]?.children?.map((category) => (
                    <CategoryCard
                        key={category._id}
                        id={category._id}
                        icon={category.icon}
                        nested={category.children}
                        title={showingTranslateValue(category?.name)}
                    />
                ))}
            </div>
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <FaYenSign />
                    価格帯で探す
                </h1>
                <div className="w-full mt-2">
                    {searchprice.map((index, key) => (
                        <h1 key={key} className="ml-4 text-sm font-medium w-full p-2 hover:text-emerald-600 py-1 cursor-pointer flex gap-2 items-center">
                            {index}
                            <span className="text-gray-400">
                                <IoChevronForwardOutline />
                            </span>
                        </h1>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <TbBrandAppgallery />
                    ブランドで探す
                </h1>
                {brand.map((index, key) => (
                    <h1 key={key} className="ml-4 text-sm font-medium w-full p-2 hover:text-emerald-600 py-1 cursor-pointer flex gap-2 items-center">
                        {index}

                        <span className="text-gray-400">
                            <IoChevronForwardOutline />
                        </span>
                    </h1>
                ))}
            </div>
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <FiSearch />
                    目的で探す
                </h1>
                {Searchbypurpose.map((index, key) => (
                    <h1 key={key} className="ml-4 text-sm font-medium w-full p-2 hover:text-emerald-600 py-1 cursor-pointer flex gap-2 items-center">
                        {index}
                        <span className="text-gray-400">
                            <IoChevronForwardOutline />
                        </span>
                    </h1>
                ))}
            </div>
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <FaCrown />
                    人気商品から探す
                </h1>
                <div className="w-full mt-2">
                    {Searchbypopularproducts.map((index, key) => (
                        <h1 key={key} className="ml-4 text-sm font-medium w-full p-2 hover:text-emerald-600 py-1 cursor-pointer flex gap-2 items-center">
                            {index}
                            <span className="text-gray-400">
                                <IoChevronForwardOutline />
                            </span>
                        </h1>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <FaStar />
                    特集から探す
                </h1>
                <div className="w-full mt-2">
                    {Searchbyfeature.map((index, key) => (
                        <h1 key={key} className="ml-4 text-sm font-medium w-full p-2 hover:text-emerald-600 py-1 cursor-pointer flex gap-2 items-center">
                            {index}
                            <span className="text-gray-400">
                                <IoChevronForwardOutline />
                            </span>
                        </h1>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="font-bold flex gap-2 items-center">
                    <GiMagicLamp />
                    お役立ちコラム
                </h1>
                <div className="w-full mt-2">
                    {UsefulColumn.map((index, key) => (
                        <h1 key={key} className="ml-4 text-sm font-medium w-full p-2 hover:text-emerald-600 py-1 cursor-pointer flex gap-2 items-center">
                            {index}
                            <span className="text-gray-400">
                                <IoChevronForwardOutline />
                            </span>
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default NavCategorylist;