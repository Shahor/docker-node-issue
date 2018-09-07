const https = require("https")
const url = "https://storage.googleapis.com/slite-cdn/wup.md"

https.get(url, stream => {
    let data = ""
    stream.on("data", chunk => (data += chunk))
    stream.on("end", () => console.log(data))
    stream.on("error", error => console.log(error))
})
