const anchor = document.createElement("reponse");
anchor.href = "single-web-app-user-mail/index.html"
const searchParams = anchor.searchParams;

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === ""; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
anchor.href; // "single-web-app-user-mail/index.html/search?q=URLUtils.searchParams"