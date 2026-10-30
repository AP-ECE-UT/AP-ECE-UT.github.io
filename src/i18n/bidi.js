// Unicode bidi isolates. The page layout stays RTL in both languages, so an English string
// is wrapped in an LTR isolate: its own punctuation and digits then render in the right order
// ("Hello world!" instead of "!Hello world") and it cannot disturb the text around it.
const LRI = "⁦"; // left-to-right isolate
const PDI = "⁩"; // pop directional isolate

export const isolate = text => (typeof text === "string" && text ? `${LRI}${text}${PDI}` : text);
