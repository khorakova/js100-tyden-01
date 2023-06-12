console.log('%c Referenční datové typy ', 'background:black;color:yellow;');

// Referenční datové typy - objekty, pole, funkce
// Rozdíl mezí primitivními a referenčními datovými typy:
// - jak jsou uložené v paměti počítače
// - popíšeme si v další lekci

// Funkce
// - kus kódu, který spustíme (opakovaně)
// - může přijímat vstupní parametry
// - na výstupu může vracet hodnotu
// - jde zapsat různě, popíšeme si v samostatné lekci

// definovani funkce
function pozdrav(vstupniParametry) {
    console.log("Ahoj")
}
// volani funkce
pozdrav()

//jiny zapis funkce 
const pozdrav = function() {
    console.log("Ahoj")
}
pozdrav()

//priklad funkce zabudovane v JavaScriptu
alert("Ahoj")



// Objekty
// - popisuje komplexnější data
// - ve složených závorkách
// - uvnitř vlastnosti a jejich hodnoty
// - může mít i tzv. metody - funkce, které patří objektu
// - metody objektů už známe a používáme - např. console.log()

 const osoba = {
    vlastnost: hodnota,
    vlastnost2: hodnota
 }

 // pristup k jednotlive vlastnosti
 console.log(osoba.vlastnost)
 // preprasni nove hodnoty 
 osoba.vlastnost = novaHodnota


// Pole
// - skupina hodnot
// - v hranatých závorkách
// - uvnitř mohou být jakékoliv hodnoty
// - má metody, pomocí kterých můžeme s hodnotami pracovat

const cisla = [4, 5, 3, 6, 4]

console.log(jmena);
// delka pole
console.log(jmena.length);
// pristup ke konkretni hodnote v poli (pres indexy, zacinaji od nuly)
console.log(jmena[4])
