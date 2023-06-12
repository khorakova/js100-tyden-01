console.log('%c Implicitní přetypování ', 'background:black;color:yellow;');

// Type coersion - implicitní přetypování
// Automatická konverze typů, aniž bychom explicitně řekli
// Nejběžněji nastává ve chvíli,
// kdy operátorem spojíme hodnoty dvou různých typů

// 3 + '2' -> vysledek 32 (javascript prevedl 3 na string), stejne dopadne i pokud by byla 3 string a 2 cislo
// 3 + Number('2')
// 3 * '2' -> pokud chceme provest matematickou operaci, ktera nejde provest na stringu, javascript prevede string na cislo
// 3 + null -> null se v matematickych operaci prevede na 0
// 3 + true -> true se v matematickych operaci prevede na 1
// 3 + false -> false se v matematickych operaci prevede na 0
// 3 + undefined → NaN 