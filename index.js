const Got = require("got")

const ENCODING = "utf8"

const maxSize = 5e6
const url = "https://storage.googleapis.com/slite-cdn/wup.md"

let hasFinishedPrematurely = false
let buffer = Buffer.from("", ENCODING)

const stream = Got.stream(url, {
    encoding: ENCODING,
})

stream.on("data", function(chunk) {
    if (hasFinishedPrematurely) {
        return
    }

    buffer = Buffer.concat([buffer, Buffer.from(chunk, ENCODING)])

    if (buffer.byteLength > maxSize) {
        hasFinishedPrematurely = true
        buffer = null
        console.log("MAX FILE SIZE")
    }
})

stream.on("end", function() {
    if (!hasFinishedPrematurely) {
        console.log(buffer.toString())
    }
})

stream.on("error", function(error) {
    console.log(error)
})
