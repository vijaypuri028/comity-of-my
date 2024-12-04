import jwt from 'jsonwebtoken'
import { error } from '../../backend/util/responseWrapper.js';
import { ACCESS_TOKE_PRIVATE_KEY } from '../../backend/envData.js';

const requireUser = async ( req, res, next ) => {
    if (!req.headers ||
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer")
    ) {
        return res.send(error(401, "Authorization is required"));
    }

    const accessToken = req.headers.authorization.split(" ")[1];

    try {
        const verifiedToken = jwt.verify(accessToken, ACCESS_TOKE_PRIVATE_KEY);
        req._id = verifiedToken._id;

    } catch (err) {
        console.log(err);
        return res.send(error(401, "invalid authorization access key"))
    }

    next();
}

export { requireUser }