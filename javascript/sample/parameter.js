function convertWeight(weight, ounces, roundTo = 2) {
    const oz = ounces ? ounces / 16 : 0;
    const total = weight + oz;
    const conversion = total / 2.2;
    return roundToDecimalPlace(conversion, roundTo);
}