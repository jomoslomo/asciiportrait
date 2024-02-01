
let video;
let captureButton;
let saveButton; // new button for saving ascii as text
let selectedLang = "en"; // default language is English
  let stepSize = 5;
let fontSize = 10;

let languages = [
  {
    code: "en",
    name: "English",
    asciiChars: ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."],
  },
  {
    code: "es",
    name: "Español",
    asciiChars: [
      "@", "#", "S", "%", "?", "*", "+", ";", ":", ",", ".", "ñ", "á", "é",
      "í", "ó", "ú"
    ],
  },
  {
    code: "fr",
    name: "Français",
    asciiChars: [
      "@", "#", "S", "%", "?", "*", "+", ";", ":", ",", ".", "é", "è", "ê",
      "ë", "à", "â", "ô", "ç"
    ],
  },
  {
    code: "ja",
    name: "日本語",
    asciiChars: [
      "口", "一", "ノ", "二", "工", "凵", "七", "人", "入", "刀", "ハ", "冂",
      "冖", "力", "十", "亅", "乙", "亠", "干", "土", "夕", "尸", "屮", "山",
      "巛", "工", "弓", "扌", "斤", "日", "月", "木", "水", "火", "犬", "王",
      "禾", "白", "目", "石", "立", "米", "羊", "而", "耳", "虫", "貝", "車",
      "金", "門", "隹"
    ],
  },
  {
    code: "it",
    name: "Italiano",
    asciiChars: [
      "@", "#", "S", "%", "?", "*", "+", ";", ":", ",", ".", "à", "è", "é",
      "ì", "ò", "ù"
    ],
  },
  {
    code: "ru",
    name: "Русский",
    asciiChars: [
      "@", "#", "S", "%", "?", "*", "+", ";", ":", ",", ".", "а", "б", "в",
      "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п",
      "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э",
      "ю", "я"
    ],
  },
  {   code: "ar",
    name: "عربى",
   asciiChars: [
  "ء", "آ", "أ", "ؤ", "إ", "ئ", "ا", "ب", "ة", "ت", "ث", "ج", "ح",
  "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ",
  "ـ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ى", "ي", "ً", "ٌ",
  "ٍ", "َ", "ُ", "ِ", "ّ", "ْ", "٠", "١", "٢", "٣", "٤", "٥", "٦",
  "٧", "٨", "٩"
]



},{
  code: "zh",
  name: "中文",
  asciiChars: ["口", "一", "丶", "亅", "二", "十", "厂", "儿", "九", "匕", "刀", "了", "力", "乃", "又", "三", "干", "几", "亡", "王", "支", "勺", "木", "五", "久", "米", "爪", "瓦", "凡", "井", "门", "夕", "女", "飞", "刃", "习", "叉", "八", "人", "山", "丹", "单", "冂", "切", "犬", "屯", "车", "彳", "已", "巴", "牛", "不", "瓜", "日", "曰", "中", "贝", "冈", "斗", "欠", "止", "毛", "氏", "予", "勿", "元", "化", "父", "白", "尸", "市", "田", "由", "东", "丑", "且", "丕", "个", "世", "丘", "丙", "业", "丛", "东", "丝", "丞", "丢", "两", "严", "丧", "中", "丰", "丹", "为", "主", "丽", "举", "乃", "久", "乎", "乏", "乐", "乒", "乓", "乔", "乖", "乘", "乙", "九", "乞", "习", "乡", "书", "买", "乱", "乳", "乾"],
},{
  code: "th",
  name: "ไทย",
  asciiChars: [
    "ก", "ข", "ค", "ฆ", "ง", "จ", "ฉ", "ช", "ซ", "ฌ",
    "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", "ต", "ถ",
    "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", "ฟ", "ภ",
    "ม", "ย", "ร", "ล", "ว", "ศ", "ษ", "ส", "ห", "ฬ",
    "อ", "ฮ", "ะ", "ั", "า", "ำ", "ิ", "ี", "ึ", "ื",
    "ุ", "ู", "เ", "แ", "โ", "ใ", "ไ", "ๅ", "ๆ", "็",
    "่", "้", "๊", "๋", "์", "ํ",
  ],
}, {
  code: "ko",
  name: "한국어",
  asciiChars: [
    "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ",
    "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ",
    "ㅋ", "ㅌ", "ㅍ", "ㅎ", "ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ",
    "가", "나", "다", "라", "마", "바", "사", "아", "자", "차",
    "카", "타", "파", "하"
  ],
},
{
code: "hi",
name: "हिन्दी",
asciiChars: [
"अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ",
"क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ",
"ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न",
"प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श",
"ष", "स", "ह", "क्ष", "ज्ञ", "०", "१", "२", "३", "४",
"५", "६", "७", "८", "९", "ऋ", "ॠ", "ऌ", "ॡ", "ऍ",
"ऎ", "ऑ", "ऒ", "ओ", "औ", "ऽ", "।", "॥"
],
}

  ];



function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  textSize(10);
  textFont("monospace");
  captureButton = createButton("Capture");
  captureButton.mousePressed(saveImage);
  createMenu();

  // create the "Save as Text" button and set up the click event listener
  saveButton = document.getElementById("save-button");
  //saveButton.addEventListener("click", saveAsciiAsText);
}

function createMenu() {
  let menuDiv = document.getElementById("menu");
  let langSelector = document.createElement("select");
  langSelector.id = "language-selector";
  langSelector.style.fontSize = "16px";
  langSelector.addEventListener("change", onLangSelected);
  menuDiv.appendChild(langSelector);

  for (let i = 0; i < languages.length; i++) {
    let langOption = document.createElement("option");
    langOption.value = languages[i].code;
    langOption.textContent = languages[i].name;
    if (languages[i].code === selectedLang) {
      langOption.selected = true;
    }
    langSelector.appendChild(langOption);
  }
}

function draw() {
  background(255);
  video.loadPixels();


  for (let y = 0; y < video.height; y += stepSize) {
    for (let x = 0; x < video.width; x += stepSize) {
      
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let brightness = (r + g + b) /3;;
      fill(r, g, b);
      let lang = languages.find((lang) => lang.code === selectedLang);
      let asciiIndex = floor(
        map(brightness, 0, 255, 0, lang.asciiChars.length)
      );
      let asciiChar = lang.asciiChars[asciiIndex];

      textAlign(CENTER, CENTER);
      text(asciiChar, x, y);
    }
  }
}
function onLangSelected() {
  selectedLang = this.value;
}

function saveImage() {
  saveCanvas("ascii", "png");
}

function saveAsciiAsText() {
  let asciiText = "";
  let lang = languages.find((lang) => lang.code === selectedLang);
  let aspectRatio = video.width / video.height;
  let numRows = 100;
  let numCols = floor(numRows * aspectRatio);
  let cellWidth = video.width / numCols;
  let cellHeight = video.height / numRows;

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      let videoX = floor(x * cellWidth);
      let videoY = floor(y * cellHeight);
      let index = (videoX + videoY * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let brightness = (r + g + b) / 3;
      let asciiIndex = floor(map(brightness, 0, 255, 0, lang.asciiChars.length));
      let asciiChar = lang.asciiChars[asciiIndex];

      // Set the text color to the color of the pixel at this position
      fill(r, g, b);
      noStroke();
      textSize(fontSize);
      text(asciiChar, x * cellWidth, y * cellHeight);
    }
    asciiText += "\n";
  }

  let blob = new Blob([asciiText], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "ascii.txt"); // save the text file
}
