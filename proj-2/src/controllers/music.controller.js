const musicModel = require('../models/music.model')

async function createMusic(req, res) {

    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== 'artist') {
            return res.status(403).json({
                message : "Forbidden"
            })
        }

    } catch(error) {
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
}