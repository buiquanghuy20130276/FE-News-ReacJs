export const handleString = (s) => {
    s = s.replace(/\/$/, "");
    var segments = s.split("/");
    return segments.pop();
}