var txt = {
    en: {
    'MAIN':'MAIN',
    'ABOUT US':'ABOUT US',
    'TAPE NOW TO PLAY?':'HOW TO START PLAYING?',
    'REGISTRATION/LOGIN':'REGISTRATION/LOGIN',
    'DOWNLOAD':'DOWNLOAD',
    'page__img__heading':'Start your new adventure in the world of Swords and Gold!',
    'page__img__heading__button__s':'Play',
    'title':'Sword&Gold "Main"',
    'title_download':'Sword&Gold "Download"',
    'page__img__download__heading':'Download and become the king!',
    'page__img__download__heading__button__s':'DOWNLOAD',
    'page__img__download__heading__maus':'S&G zip file',
    'page__text__title':'How to start playing?',
    '1.Text':'1. Go to the Download page.',
    '2.Text':'2. Download the zip file "S&G".',
    '3.Text':'3. Go to your "minecraft" folder.',
    '4.Text':'4. Unarchive all the contents in the zip file into the folder.',
    '5.Text':'5. Launching minecraft Optifine Forge on version 1.12.2',
    '6.Text':'6. Install the texture pack in minecraft "Conquest_1.12". (This is already present in the game)',
    '7.Text':'7. Ready!',
    'title_tape_now_to_play':'Sword&Gold "How to start playing?"',
}

    ,ua: {
    'MAIN':'ГОЛОВНИЙ',
    'ABOUT US':'ПРО НАС',
    'TAPE NOW TO PLAY?':'ЯК ПОЧАТИ ГРАТИ?',
    'REGISTRATION/LOGIN':'РЕЄСТРАЦІЯ/ВХІД',
    'DOWNLOAD':'СКАЧАТЬ',
    'page__img__heading':'Почніть свою нову пригоду в світі мечів і золота!',
    'page__img__heading__button__s':'Грати',
    'title':'Sword&Gold "Головний"',
    'title_download':'Sword&Gold "СКАЧАТЬ"',
    'page__img__download__heading':'Скачай і ставай королем!',
    'page__img__download__heading__button__s':'СКАЧАТЬ',
    'page__img__download__heading__maus':'S&G zip файл',
    'page__text__title':'Як почати грати?',
    '1.Text':'1. Перейдіть на сторінку завантаження.',
    '2.Text':'2. Завантажте zip-файл "S&G".',
    '3.Text':'3. Перейдіть до папки "minecraft".',
    '4.Text':'4. Розпакуйте весь вміст zip-файлу в папку.',
    '5.Text':'5. Запуск minecraft Optifine Forge у версії 1.12.2',
    '6.Text':'6. Встановіть пакет текстур в майнкрафте "Conquest_1.12". (Це вже присутнє в грі)',
    '7.Text':'7. Готово!',
    'title_tape_now_to_play':'Sword&Gold "Як почати грати?"',
}
,ru: {
    'MAIN':'ГЛАВНАЯ',
    'ABOUT US':'О НАС',
    'TAPE NOW TO PLAY?':'КАК НАЧАТЬ ИГРАТЬ?',
    'REGISTRATION/LOGIN':'РЕГИСТРАЦИЯ/ВХОД',
    'DOWNLOAD':'СКАЧАТЬ',
    'page__img__heading':'Начните свое новое приключение в мире мечей и золота!',
    'page__img__heading__button__s':'Играть',
    'title':'Sword&Gold "Главная"',
    'title_download':'Sword&Gold "СКАЧАТЬ"',
    'page__img__download__heading':'Скачай и становись королем!',
    'page__img__download__heading__button__s':'ЗАГРУЗИТЬ',
    'page__img__download__heading__maus':'S&G zip файл',
    'page__text__title':'Как начать играть?',
    '1.Text':'1. Перейдите на страницу загрузки.',
    '2.Text':'2. Загрузите zip-файл "S&G".',
    '3.Text':'3. Перейдите в свою папку "minecraft".',
    '4.Text':'4. Разархивируйте все содержимое zip-файла в папку.',
    '5.Text':'5. Запуск minecraft Optifine Forge в версии 1.12.2',
    '6.Text':'6. Установите пакет текстур в майнкрафте "Conquest_1.12". (Это уже присутствует в игре)',
    '7.Text':'7. Готово!',
    'title_tape_now_to_play':'Sword&Gold "Как начать играть?"',
}



  };

  document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
  document.getElementById('e-lang-ua').addEventListener('click', setLang.bind(null,'ua'));
  document.getElementById('e-lang-ru').addEventListener('click', setLang.bind(null,'ru'));
  
  function setLang(lang){
    var p;
    if( !txt.hasOwnProperty(lang)) return;
    if( window.hasOwnProperty('localStorage'))
       window.localStorage.setItem('lang', lang);
    for(p in txt[lang]) {
      document.getElementById(p).innerText = txt[lang][p];
    }
  }
  
var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);