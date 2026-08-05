const { ImageKit } = require("@imagekit/nodejs")

const imageKit = new ImageKit({
     privateKey : "private_0XNNl1r35JV7ALQ8rRgbG2p9NeM="
})

async function uploadFile(buffer) {

    const result  = await imageKit.files.upload({
     file: buffer.toString("base64"),
    fileName: 'image.jpg',
}) 
    return result;
}

module.exports = uploadFile 