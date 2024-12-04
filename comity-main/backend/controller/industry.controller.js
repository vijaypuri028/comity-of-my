import { error, success } from "../../backend/util/responseWrapper.js"
import { Industry } from '../../backend/model/Industry.model.js'

const getAllShowIndustryController = async ( req, res ) => {
    try {
        const industries = await Industry.find({
            showThis: true
        });
        return res.send(success(200, { industries }));

    } catch (err) {
        console.log(error(500, err.message));
        return res.send(error(500, err.message));
    }
}


const getAllIndustryController = async ( req, res ) => {
    try {
        const industries = await Industry.find();
        return res.send(success(200, { industries }));

    } catch (err) {
        console.log(error(500, err.message));
        return res.send(error(500, err.message));
    }
}


const createIndustryController = async ( req, res ) => {
    try {
        const { name, desc, scheme } = req.body;

        if ( !name && !desc && !scheme )
            return res.send(error(400, "name, description and scheme is required"));

        const industry = await Industry.create(req.body);

        return res.send(success(201, industry));

    } catch (err) {
        console.log(error(500, err.message));
        res.send(error(500, err.message));
    }
}


const updateIndustryController = async ( req, res ) => {
    try {
        const { _id, name, desc, scheme, courses, image, color, link, value, label, showThis } = req.body;

        const industry = await Industry.findById(_id);

        if(!industry)
            return res.send(error(400, "Industry not found..."));

        if(name) industry.name = name;
        if(desc) industry.desc = desc;
        if(scheme) industry.scheme = scheme;
        if(courses) industry.courses = courses;
        if(image) industry.image = image;
        if(color) industry.color = color;
        if(link) industry.link = link;
        if(value) industry.value = value;
        if(label) industry.label = label;
        if(showThis === false || showThis === "false") industry.showThis = false;
        if(showThis === true || showThis === "true") industry.showThis = true;

        await industry.save();

        return res.send(success(200, { industry }));

    } catch (error) {
        console.log(error(500, err.message));
        res.send(error(500, err.message));
    }
}


const deleteIndustryController = async (req, res) => {
    try {
        const { _id } = req.body;

        const industry = await Industry.findById(_id);

        if( !industry ) return res.send(error(404, "Industry not found"));

        await Industry.findByIdAndDelete(_id);

        return res.send(success(200, "Industry Deleted Successfully"));

    } catch (err) {
        console.log(error(500, err.message));
        res.send(error(500, err.message));
    }
}


export {
    getAllShowIndustryController,
    getAllIndustryController,
    createIndustryController,
    updateIndustryController,
    deleteIndustryController
}