// Persian compound given names that are written as one word in English (AmirAli, not Amir Ali).
const PREFIXES = ["Amir", "Mohammad"];
const SUFFIXES = ["Ali", "Hossein", "Hosein", "Reza", "Mahdi", "Erfan", "Matin", "Hasan", "Abbas"];

// Photo file names are inconsistent (AmirAliX, Amirali X, MohammadrezaX...), so the
// compound given name is rebuilt from the split words rather than trusted as written.
function joinCompoundGivenName(words) {
    const [first, second] = words;
    const prefix = PREFIXES.find(p => first.toLowerCase().startsWith(p.toLowerCase()));
    if (!prefix) return words;

    // "Amirali" -> "AmirAli"
    const rest = first.slice(prefix.length);
    const glued = SUFFIXES.find(s => s.toLowerCase() === rest.toLowerCase());
    if (glued) return [prefix + glued, ...words.slice(1)];

    // "Amir" + "Ali" -> "AmirAli"
    if (!rest && second) {
        const suffix = SUFFIXES.find(s => s.toLowerCase() === second.toLowerCase());
        if (suffix) return [prefix + suffix, ...words.slice(2)];
    }
    return words;
}

// Derives an English display name from a TA photo path,
// e.g. "/img/TAs/AmiraliVahidi.jpg" -> "AmirAli Vahidi".
export default function englishName(imageURL, fallback) {
    if (!imageURL) return fallback;
    const file = imageURL.split("/").pop().replace(/\.[A-Za-z]+$/, "");
    if (!/^[A-Za-z]+$/.test(file)) return fallback;
    const words = file.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1));
    return joinCompoundGivenName(words).join(" ");
}
