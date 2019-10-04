const formatCurrency = function(currentSymbol, decimalSeparator) {
  return function(value) {
    const wholePart = Math.trunc(value / 1000);
    let fractionPart = value % 1000;
    if (fractionPart > 10 && fractionPart < 100)
      fractionPart = "0" + fractionPart;
    if (fractionPart < 10) fractionPart = "00" + fractionPart;

    return `${currentSymbol}${wholePart}${decimalSeparator}${fractionPart}`;
  };
};

const formatter = formatCurrency("$", ",");
console.log("formatter ", formatter(1233001));
