console.log('Funguju!');

const textPozpatku = (text) => {
  return text.split('').reverse().join('');
};

const selectLi = document.querySelectorAll('li');
selectLi.forEach((polozka) => {
  const text = polozka.textContent.toLocaleLowerCase().replaceAll(' ', '');
  if (text === textPozpatku(text)) {
    polozka.classList.add('palindrom');
  }
});

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

// Upravte soubor ověřil, jestli se v jejich textovém obsahu nachází palindrom. Pokud ano, přidejte položce třídu palindrom (li.classLiat(".palindrom")), která má již přepřipravené CSS pro zvýraznění.

// porovnat selectLi a textPozpatku
//
