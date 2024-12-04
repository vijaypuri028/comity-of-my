import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '../envData';

cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if(!filePath) return null;

        //  upload the file on cloud
        const response = await cloudinary.uploader.upload(filePath, {
            resource_type: 'image',
        })
        console.log(response);
        return response;
    } catch (err) {
        console.log(err.message);
        // remove waste file
        fs.unlinkSync(filePath);
        return null;
    }
}

export {
    uploadOnCloudinary
}