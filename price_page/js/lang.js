const langData = {
    "uz": {
      "home": "Sayt yaratish",
      "about": "SEO va Daromadni Oshirish",
      "product": "Dizayn va Brending",
      "our_work": "Ish namunalarimiz",
      "price": "Narxlar",
      "nav_text": "Buyurtma berish",
      "section1_text1.1": "Veb-sayt yaratish va ",
      "section1_text1.2": " reklama xizmatlari uchun to'liq narx ro'yxati",
      "section1_text2": "Biznesingiz uchun internet marketing xizmatlari kerakmi? Buni faqat o’z ishining ustalariga topshiring!",
      "section1_text3": "Chumchuq so’ysa ham qassob so’ysin. O’zingizni ortiqcha xarajatlardan saqlang.",
      "section1_text4": "Hoziroq biz bilan",
      "section1_text5": "Bog'lanish",
      
      "footer_text1": "Biz 100 dan ortiq mijozlarimizni xursand qildik. Sizga qanday yordam berishimiz mumkinligini bilish uchun biz bilan bog'laning!", 
      "footer_text2": "Yuz marta o'qigandan ko'ra, bir marta gaplashish yaxshiroqdir. Sizning biznesingizni tahlil qilaylik va siz uchun maxsus taklif tayyorlaylik.", 
      "footer_text3": "O'zingizning biznesingizni targ'ib qilishni kechiktirmang, aks holda kimdir bu imkoniyatdan foydalanadi.", 
      "footer_text4": "Bizga hozir qo'ng'iroq qiling:", 
      "footer_text5": "Aloqalar", 
      "footer_text6": "Kattaqo'rg'on ko'ch. 20-uy, Toshkent Shahar", 
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
  
      
    },
    "ru": {
      "home": "Создать сайт",
      "about": "SEO и Увеличение дохода",
      "product": "Дизайн и Брендинг",
      "our_work": "Портфолио",
      "price": "Цены",
      "nav_text": "Разместить заказ",
      "section1_text1.1": "Полный прайс-лист на ",
      "section1_text1.2": " услуги по созданию сайтов и рекламе",
      "section1_text2": "Нужны услуги интернет-маркетинга для вашего бизнеса? Оставьте это мастерам!",
      "section1_text3": "Даже если воробья зарежут, пусть его зарежет мясник. Спасите себя от перерасхода средств.",
      "section1_text4": "С нами прямо сейчас",
      "section1_text5": "Связь",
      "footer_text1": "Мы осчастливили более 100 клиентов. Свяжитесь с нами, чтобы узнать, как мы можем вам помочь!", 
      "footer_text2": "Лучше один раз сказать, чем сто раз прочитать. Давайте проанализируем ваш бизнес и подготовим для вас специальное предложение.", 
      "footer_text3": "Не откладывайте продвижение своего бизнеса, иначе этим воспользуется кто-то другой.", 
      "footer_text4": "Позвоните нам сейчас:", 
      "footer_text5": "Контакты", 
      "footer_text6": "Каттакоргон ул. 20, город Ташкент", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
      "": "", 
  
  
  
  
    },
    "en": {
      "home": "Create a site",
      "about": "SEO and Monetization",
      "product": "Design and Branding",
      "our_work": "Our work samples",
      "price": "Prices",
      "nav_text": "Place an order",
      "section1_text1.1": "Complete price list for  ",
      "section1_text1.2": " website development and advertising services",
      "section1_text2": "Need internet marketing services for your business? Leave it to the masters!",
      "section1_text3": "Even if the sparrow is slaughtered, let the butcher slaughter it. Save yourself from unnecessary expenses.",
      "section1_text4": "With us right now",
      "section1_text5": "Connection",
   
      "footer_text1": "We have made more than 100 customers happy. Contact us to find out how we can help you!", 
      "footer_text2": "It is better to talk once than read a hundred times. Let us analyze your business and prepare a special offer for you.", 
      "footer_text3": "Don't delay promoting your business, or someone else will take advantage of it.", 
      "footer_text4": "Call us now:", 
      "footer_text5": "Connections", 
      "footer_text6": "Kattakorgon St. 20, Tashkent City",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",  
    }
  };
  
  const langElements = document.querySelectorAll('.lang');
  
  function changeLanguage(language) {
    selectedLanguage = language;
    langElements.forEach(el => {
      el.textContent = langData[selectedLanguage][el.getAttribute('key')];
    });
  }
  
  
  
  // Tilni qayta belgilash
  let selectedLanguage = 'ru';
  langElements.forEach(el => {
    el.textContent = langData[selectedLanguage][el.getAttribute('key')];
  });
  
  const langButtons = document.querySelectorAll('.lang-button');
  langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    changeLanguage(btn.dataset.lang);
    langButtons.forEach(btn => {
      btn.classList.remove('active_lang');
    });
    btn.classList.add('active_lang');
  });
  });