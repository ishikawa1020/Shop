/* eslint-disable react-hooks/exhaustive-deps */
import Ajv from "ajv";
import csvToJson from "csvtojson";
import { useContext, useState } from "react";
import * as XLSX from 'xlsx';


//internal import
import { SidebarContext } from "@/context/SidebarContext";
import ProductServices from "@/services/ProductServices";
import { notifyError, notifySuccess } from "@/utils/toast";

// custom product upload validation schema
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

  //service data filtering
  const serviceData = data;

  //  console.log('selectedFile',selectedFile)

  const handleOnDrop = (data) => {
    // console.log('data', data);
    for (let i = 0; i < data.length; i++) {
      newProducts.push(data[i].data);
    }
  };
  const convertPrice = (price) => {
    // Check if price is a valid string and not undefined or null
    if (typeof price !== 'string' || price === undefined || price === null) {
      console.error('Invalid price format:', price);
      return 0; // Return 0 if price is not valid
    }

    // Remove commas and any non-numeric characters except the decimal point
    let cleanedPrice = price.replace(/,/g, '').replace(/[^0-9.]/g, ''); // Remove commas and non-numeric characters

    // Convert to float first (in case there are decimal points)
    let parsedPrice = parseFloat(cleanedPrice);

    // Remove trailing zeros and return the integer part
    let integerPrice = Math.floor(parsedPrice); // Truncate decimals

    // If parsedPrice is a float with trailing zeros, Math.floor will remove them (e.g., '1500.0000' becomes 1500)
    return integerPrice || 0; // Ensure it returns 0 if parsing fails
  };

  // const toASCII = (chars) => {
  //   var ascii = '';
  //   for (var i = 0, l = chars.length; i < l; i++) {
  //     var c = chars[i].charCodeAt(0);

  //     // make sure we only convert half-full width char
  //     if (c >= 0xFF00 && c <= 0xFFEF) {
  //       c = 0xFF & (c + 0x20);
  //     }

  //     ascii += String.fromCharCode(c);
  //   }

  //   return ascii;
  // }
  function hankana2Zenkana(str) {
    if (typeof str !== 'string') {
      return str; // Return as is if not a string
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
    // return notifyError("This feature is disabled for demo!");
    if (newProducts.length < 1) {
      notifyError("最初に CSV ファイルをアップロードまたは選択してください！");
    } else {
      // return notifySuccess("CRUD operation disable for demo!");
      ProductServices.addAllProducts(newProducts)
        .then((res) => {
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
    }
  };

  // const toFullWidth = (str) => {
  //   if (typeof str !== 'string') return '';

  //   return str.replace(/[\uFF61-\uFF9F]/g, (ch) => {
  //     const charCode = ch.charCodeAt(0);
  //     return String.fromCharCode(charCode - 0xFEC0); // Correct offset for half-width to full-width
  //   });
  //   return str;
  // };
  const importFileData = async (categorydata) => {
    try {
      // Call the service function using await
      const res = await ProductServices.importandaddexcel(categorydata);

      // Handle the response
      console.log(res);
      setSelectedFiles(res);
      notifySuccess(res.message);  // Show success notification
    } catch (err) {
      // Handle errors
      console.error(err);
      notifyError(err.message);  // Show error notification
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

        // Get the first sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet to JSON (array of rows as objects)
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const categorydata = []; // To store unique categorydata before inserting into DB
        const categoryMap = new Map(); // To check duplicates efficiently

        // Add "Home" category as the root if not already present
        const homeCategory = {
          status: "show",
          name: { en: "Home" },
          id: "Root",
          parentName: "root",
          description: { en: "This is Home Category" },
        };
        // Ensure "Home" is only added once
        if (!categoryMap.has("Home")) {
          categoryMap.set("Home", homeCategory);
          categorydata.push(homeCategory);
        }
        const productData = rows.slice(1).map((value) => {

          const parentCategory = String(value[16]?.trim()); // Parent Category
          const childCategory = /* hankana2Zenkana( */String(value[17]?.trim()); // Child Category
          let originpriceget = value[5];
          let originalPrice = 0;
          let priceget = value[6];
          let price = 0;
          if (originpriceget) {
            originalPrice = convertPrice(originpriceget); // This is where the price conversion happens
          }
          if (priceget) {
            price = convertPrice(priceget); // This is where the price conversion happens
          }


          if (!categoryMap.has(parentCategory)) {
            const parentObj = {
              status: "show",
              name: { en: parentCategory },
              // id: parentCategory.toLowerCase().replace(/\s+/g, "-"),
              parentName: "Home", // All main categorydata belong to "Home"
              description: { ja: `"これは${parentCategory}カテゴリーです` },
            };
            categoryMap.set(parentCategory, parentObj);
            categorydata.push(parentObj);
          }

          // Add child category if not already added
          if (!categoryMap.has(childCategory)) {
            const childObj = {
              status: "show",
              name: { en: childCategory ? childCategory : parentCategory },
              // id: childCategory.toLowerCase().replace(/\s+/g, "-"),
              parentName: parentCategory, // Child belongs to its parent
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
            // sku: value[1],
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
    } /* else if (file && file.type === "text/csv" || 0) {
      setFileName(file?.name);
      setIsDisable(true);

      fileReader.onload = async (event) => {
        const text = event.target.result;
        const json = await csvToJson().fromString(text);
        console.log("json", json);
        const productData = json.map((value) => {
          return {
            categories: value.商品名,
            image: '',
            barcode: value.JANコード,
            tag: value.tag,
            variants: value.variants,
            status: 'show',
            prices: { 上代: value.上代,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              下代: value.下代 },
            isCombination: value.isCombination.toLowerCase,
            title: value.title,
            productId: value.productId,
            slug: value.slug,
            sku: value.sku,
            category: value.category,
            stock: value.stock,
            description: value.description,
          };
          return {
            categories: JSON.parse(value.categories),
            image: JSON.parse(value.image),
            barcode: value.barcode,
            tag: JSON.parse(value.tag),
            variants: JSON.parse(value.variants),
            status: value.status,
            prices: JSON.parse(value.prices),
            isCombination: JSON.parse(value.isCombination.toLowerCase()),
            title: JSON.parse(value.title),
            productId: value.productId,
            slug: value.slug,
            sku: value.sku,
            category: JSON.parse(value.category),
            stock: JSON.parse(value.stock),
            description: JSON.parse(value.description),
          };
          console.log(value.中国産, value.ベトナム産)
          console.log(value)
        });

        setSelectedFile(productData);
      };

      fileReader.readAsText(file);
    }  */else {
      setFileName(file?.name);
      setIsDisable(true);

      notifyError("Unsupported file type!");
    }
  };

  const handleUploadMultiple = async (e) => {
    // return notifyError("This feature is disabled for demo!");
    console.log(selectedFiles)
    selectedFile.forEach(product => {
      // Find matching category by name
      // console.log(product.category.name.en)
      let matchedCategory = selectedFiles.find(cat => cat.name.en == product.category.name.en);
      if (matchedCategory) {
        // ✅ Update main category._id
        product.category._id = matchedCategory._id;

        product.categories = product.categories.map(category => {
          const matchedCategory = selectedFiles.find(cat => cat.name.en === category.name.en);

          return {
            _id: matchedCategory ? matchedCategory._id : null, // Handle cases where no match is found
            name: category.name,
          };
        });


        // Ensure product.categories is an array
        // if (!Array.isArray(product.categories)) {
        //   product.categories = [];
        // }
        // let parentname = matchedCategory.name;
        // console.log(parentname);
        // Loop until parentname is "root"
        // while (parentname !== "root") {
        //   product.categories.push({
        //     _id: matchedCategory._id,
        //     name: {
        //       en: matchedCategory.name,
        //     },
        //   });
        //   parentname = matchedCategory.parentName || "root"; // Assuming parentName exists
        //   matchedCategory = selectedFiles.find(cat => cat.name.en === parentname);
        //   console.log(matchedCategory)
        //   if (!matchedCategory) break; // Exit if no matched parent 
        // }

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
        ProductServices.addAllProducts(data_)
          .then((res) => {
            console.log('result--------------')
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
    // console.log('remove');
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
