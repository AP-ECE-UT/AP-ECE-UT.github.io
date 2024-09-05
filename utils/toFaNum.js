export default function toFaNum(enNumber) {
    let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    let persianMap = persianDigits.split("");
    let persianNumber = enNumber.replace(/\d/g, function (m) {
        return persianMap[parseInt(m)];
    });
    return persianNumber;
}
