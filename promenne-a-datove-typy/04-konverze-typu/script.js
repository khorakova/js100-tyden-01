console.log('%c Konverze typů ', 'background:black;color:yellow;');

// Převod jednoho datového typu na jiný

// Text na číslo
// - parseInt() - vyparsuje cele cislo ze stringu, pokud začíná číslem, pokud začíná písmenem  vrátí NaN
// - parseFloat() - vyparsuje desetinné cislo ze stringu, pokud začíná číslem, pokud začíná písmenem  vrátí NaN
// - Number() - prevede string na číslo, pokud to jde, jinak NaN
// - unární operátor + - prevede string na číslo, pokud to jde, jinak NaN

// Číslo na text
// - String() - převede číslo na string
// - cislo.toString() - metoda, která převede číslo na string
// - cislo.toFixed() - převede číslo na string a zároveň můžeme určit kolik desetinných míst se má zobrazit, uvedeme do závorky

// Cokoliv na Boolean
const vysledek = Boolean(100)
// - číslo na Boolean: 0 → false, všechno ostatní true 
// - text na Boolean: '' → false, všechno ostatní true
// - null → false
// - undefined → false
