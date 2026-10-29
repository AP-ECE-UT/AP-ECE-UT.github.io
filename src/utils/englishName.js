// Derives an English display name from a TA photo path,
// e.g. "/img/TAs/MohammadHosseinShafiei.jpg" -> "Mohammad Hossein Shafiei".
export default function englishName(imageURL, fallback) {
    if (!imageURL) return fallback;
    const file = imageURL.split("/").pop().replace(/\.[A-Za-z]+$/, "");
    if (!/^[A-Za-z]+$/.test(file)) return fallback;
    return file.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, c => c.toUpperCase());
}