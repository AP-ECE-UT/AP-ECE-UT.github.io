export default function toFaNum(enNumber) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const persianMap = persianDigits.split("");
    let persianNumber = enNumber.replace(/\d/g, m => persianMap[Number(m)]);
    return persianNumber;
}
