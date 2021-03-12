chrome.runtime.sendMessage({ todo: 'showPageAction' });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.todo == 'hardMode') {
    document.addEventListener('DOMContentLoaded', hardMode, false);
    function hardMode() {
      let hardModeArry = [
        //第一部分
        'stdvalue11',
        'stdvalue21',
        'stdvalue35',
        'stdvalue45',
        'stdvalue55',
        //第二部分
        'teavalue11',
        'teavalue21',
        'teavalue31',
        'teavalue41',
        'teavalue51',
        'teavalue61',
        'teavalue71',
        'teavalue81',
        'teavalue95',
        'teavalue101',
        'teavalue111',
        'teavalue121',
        'teavalue131',
        'teavalue141',
        'teavalue151',
        'teavalue161',
        'teavalue171',
        //第三部分
        'chk_stikind2_1_1',
        'chk_stikind2_2_1',
        'chk_stikind2_3_1',
        'chk_stikind2_4_1',
        'chk_stikind2_5_1'
      ];
      hardModeArry.forEach(items => {
        window.frames['Main'].document.getElementById(items).click();
      });
    }
    window.addEventListener('load', hardMode, false);
    hardMode();
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.todo == 'midMode') {
    document.addEventListener('DOMContentLoaded', midMode, false);
    function midMode() {
      let midModeArry = [
        //第一部分
        'stdvalue12',
        'stdvalue22',
        'stdvalue33',
        ,
        'stdvalue43',
        'stdvalue54',
        //第二部分
        'teavalue12',
        'teavalue22',
        'teavalue32',
        'teavalue42',
        'teavalue52',
        'teavalue62',
        'teavalue72',
        'teavalue82',
        'teavalue94',
        'teavalue102',
        'teavalue112',
        'teavalue122',
        'teavalue132',
        'teavalue142',
        'teavalue152',
        'teavalue162',
        'teavalue172',
        //第三部分
        'chk_stikind2_1_1',
        'chk_stikind2_2_1',
        'chk_stikind2_3_1',
        'chk_stikind2_4_1',
        'chk_stikind2_5_1'
      ];
      midModeArry.forEach(items => {
        window.frames['Main'].document.getElementById(items).click();
      });
    }
    window.addEventListener('load', midMode, false);
    midMode();
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.todo == 'lazyMode') {
    document.addEventListener('DOMContentLoaded', lazyMode, false);
    function lazyMode() {
      let lazyModeArry = [
        //第一部分
        'stdvalue13',
        'stdvalue24',
        'stdvalue32',
        'stdvalue42',
        'stdvalue53',
        //第二部分
        'teavalue13',
        'teavalue23',
        'teavalue33',
        'teavalue43',
        'teavalue53',
        'teavalue63',
        'teavalue73',
        'teavalue83',
        'teavalue93',
        'teavalue103',
        'teavalue113',
        'teavalue123',
        'teavalue133',
        'teavalue143',
        'teavalue153',
        'teavalue163',
        'teavalue173',
        //第三部分
        'chk_stikind2_1_1',
        'chk_stikind2_2_1',
        'chk_stikind2_3_1',
        'chk_stikind2_4_1',
        'chk_stikind2_5_1'
      ];
      lazyModeArry.forEach(items => {
        window.frames['Main'].document.getElementById(items).click();
      });
    }
    window.addEventListener('load', lazyMode, false);
    lazyMode();
  }
});
