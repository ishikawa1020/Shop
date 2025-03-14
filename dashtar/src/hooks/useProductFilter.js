/* eslint-disable react-hooks/exhaustive-deps */
import Ajv from "ajv";
import csvToJson from "csvtojson";
import { useContext, useState } from "react";
import * as XLSX from 'xlsx';



import { SidebarContext } from "@/context/SidebarContext";
import ProductServices from "@/services/ProductServices";
import { notifyError, notifySuccess } from "@/utils/toast";


const schema = {
  type: "object",
  properties: {
    categories: { type: "array" },
    image: { type: "array" },
    tag: { type: "array" },
    variants: { type: "array" },
    show: { type: "array" },
    status: { type: "string" },
    prices: { type: "object" },
    isCombination: { type: "boolean" },
    title: { type: "object" },
    productId: { type: "string" },
    slug: { type: "string" },
    category: { type: "object" },
    stock: { type: "number" },
    description: { type: "object" },
  },
  required: ["categories", "category", "prices", "title"],
};

const useProductFilter = (data) => {
  const ajv = new Ajv({ allErrors: true });
  const { setLoading, setIsUpdate } = useContext(SidebarContext);
  const [newProducts] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filename, setFileName] = useState("");
  const [isDisabled, setIsDisable] = useState(false);
  const serviceData = data;
  const handleOnDrop = (data) => {

    for (let i = 0; i < data.length; i++) {
      newProducts.push(data[i].data);
    }
  };
  const convertPrice = (price) => {

    if (typeof price !== 'string' || price === undefined || price === null) {
      console.error('Invalid price format:', price);
      return 0;
    }

    let cleanedPrice = price.replace(/,/g, '').replace(/[^0-9.]/g, '');
    let parsedPrice = parseFloat(cleanedPrice);
    let integerPrice = Math.floor(parsedPrice);
    return integerPrice || 0;
  };

  function hankana2Zenkana(str) {
    if (typeof str !== 'string') {
      return str;
    }
    var kanaMap = {
      'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
      'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
      'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
      'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
      'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
      'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
      'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
      'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
      'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
      'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
      'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
      'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
      'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
      'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
      'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
      'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
      'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
      'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
      '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };

    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
      .replace(reg, function (match) {
        return kanaMap[match];
      })
      .replace(/ﾞ/g, '゛')
      .replace(/ﾟ/g, '゜');
  };

  const handleUploadProducts = () => {

    if (newProducts.length < 1) {
      notifyError("最初に CSV ファイルをアップロードまたは選択してください！");
    } else {

      ProductServices.addAllProducts(newProducts)
        .then((res) => {
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
    }
  };
  const importFileData = async (categorydata) => {
    try {

      const res = await ProductServices.importandaddexcel(categorydata);


      console.log(res);
      setSelectedFiles(res);
      notifySuccess(res.message);
    } catch (err) {

      console.error(err);
      notifyError(err.message);
    }
  };


  const handleSelectFile = async (e) => {
    e.preventDefault();

    const fileReader = new FileReader();
    const file = e.target?.files[0];

    if (file) {
      setFileName(file?.name);
      setIsDisable(true);

      fileReader.readAsText(file, "UTF-8");
      fileReader.onload = (e) => {
        const text = e.target.result;
        const workbook = XLSX.read(text, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const categorydata = [];
        const categoryMap = new Map();
        const homeCategory = {
          status: "show",
          name: { en: "Home" },
          id: "Root",
          parentName: "root",
          description: { en: "This is Home Category" },
        };

        if (!categoryMap.has("Home")) {
          categoryMap.set("Home", homeCategory);
          categorydata.push(homeCategory);
        }
        const productData = rows.slice(1).map((value) => {
          const parentCategory = String(value[16]?.trim());
          const childCategory = /* hankana2Zenkana( */String(value[17]?.trim());
          let originpriceget = value[5];
          let originalPrice = 0;
          let priceget = value[6];
          let price = 0;
          if (originpriceget) {
            originalPrice = convertPrice(originpriceget);
          }
          if (priceget) {
            price = convertPrice(priceget);
          }

          if (!categoryMap.has(parentCategory)) {
            const parentObj = {
              status: "show",
              name: { en: parentCategory },

              parentName: "Home",
              description: { ja: `"これは${parentCategory}カテゴリーです` },
            };
            categoryMap.set(parentCategory, parentObj);
            categorydata.push(parentObj);
          }

          if (!categoryMap.has(childCategory)) {
            const childObj = {
              status: "show",
              name: { en: childCategory ? childCategory : parentCategory },

              parentName: parentCategory,
              description: { ja: `"これは${childCategory}カテゴリーです` },
            };
            categoryMap.set(childCategory, childObj);
            categorydata.push(childObj);
          }
          return {
            categories: [
              {
                _id: "632ac9864d87ff2494210b49",
                name: { en: "Home" },
              },
              {
                _id: "632ac9864d87ff2494210b49",
                name: { en: value[16] },
              },
              {
                _id: "632ac9864d87ff2494210b49",
                name: { en: value[17] },
              }
            ],
            image: [
              "https://i.postimg.cc/7P0KvKrQ/Pure-Plant-Home-Lavender-Orange-Blossom-Candle-7oz.jpg",
            ],
            tag: [`[\"${value[16]}\",\"${value[17]}\"]`],
            variants: [],
            status: 'show',
            Mainunitsize: String(value[8]),
            partnumber: String(value[4]),
            material: String(hankana2Zenkana(value[10])),
            packingform: String(hankana2Zenkana(value[11])),
            inquantity: String(value[13]),
            outquality: String(value[14]),
            remarks: String(hankana2Zenkana(value[15])),
            individualboxsize: String(hankana2Zenkana(value[26])),
            prices: {
              discount: 10,
              originalPrice: originalPrice,
              price: price,
            },
            mark: String(value[21]),
            isCombination: value[0] ? true : false,
            title: { en: value[1] },
            slug: value[1].trim(),
            origin: { In: value[27], ch: value[28], ct: value[29], pk: value[30], bg: value[31], cb: value[32] },
            productId: "",
            category:
            {
              _id: "632ac9864d87ff2494210b49",
              name: {
                en: value[17],
              },
            },
            stock: 1,
            description: { en: value[15] },
          };
        });
        setSelectedFile(productData);
        console.log(categorydata);
        importFileData(categorydata);
      };
    } else {
      setFileName(file?.name);
      setIsDisable(true);

      notifyError("Unsupported file type!");
    }
  };

  const handleUploadMultiple = async (e) => {

    console.log(selectedFiles)
    selectedFile.forEach(product => {


      let matchedCategory = selectedFiles.find(cat => cat.name.en == product.category.name.en);
      if (matchedCategory) {

        product.category._id = matchedCategory._id;

        product.categories = product.categories.map(category => {
          const matchedCategory = selectedFiles.find(cat => cat.name.en === category.name.en);

          return {
            _id: matchedCategory ? matchedCategory._id : null,
            name: category.name,
          };
        });
      } else {
        console.log("here")
      }
    });
    console.log(selectedFile)

    if (selectedFile.length > 1) {
      setLoading(true);
      let productDataValidation = selectedFile.map((value) =>
        ajv.validate(schema, value)
      );
      console.log(productDataValidation)
      const isBelowThreshold = (currentValue) => currentValue === true;
      const validationData = productDataValidation.every(isBelowThreshold);
      console.log('validationdata', validationData)

      if (validationData) {
        const data_ = selectedFile[0]
        ProductServices.addAllProducts(selectedFile)
          .then((res) => {
            console.log(res, 'result--------------')
            setIsUpdate(true);
            setLoading(false);
            notifySuccess(res.message);
          })
          .catch((err) => {
            setLoading(false);
            notifyError(err.message);
          });
      } else {
        setLoading(false);
        notifyError("有効なデータを入力してください！");
      }
    } else {
      setLoading(false);
      notifyError("まず、有効な JSON、CSV、XLS ファイルを選択してください！");
    }
  };

  const handleRemoveSelectFile = (e) => {

    setFileName("");
    setSelectedFile([]);
    setTimeout(() => setIsDisable(false), 1000);
  };

  return {
    data,
    filename,
    isDisabled,
    handleSelectFile,
    serviceData,
    handleOnDrop,
    handleUploadProducts,
    handleRemoveSelectFile,
    handleUploadMultiple,
  };
};

export default useProductFilter;
