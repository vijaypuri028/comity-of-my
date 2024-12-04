import { error, success } from "../../backend/util/responseWrapper.js"
import { Navbar } from "../model/Navbar.model.js";

const getAllNavRoutes = async (req, res) => {
    try {
        const navRoutes = await Navbar.find();

        return res.send(success(200, {navRoutes}))

    } catch (err) {
        return res.send(error(500, err.message))
    }
}

const getAllShowNavRoutes = async (req, res) => {
    try {
        const navRoutes = await Navbar.find({
            showThis: true
        });

        return res.send(success(200, {navRoutes}))
        
    } catch (err) {
        return res.send(error(500, err.message))
    }
}

const createNavRoute = async (req, res) => {
    try {
        
        const {name, title, path } = req.body;
        
        if(!name || !title || !path) 
            return res.send(error(400, "Fill all fields."))
        
        const nav = await Navbar.create(req.body);
        return res.send(success(201, { nav }))

    } catch (err) {
        return res.send(error(500, err.message))
    }
}

const updateNavRoute = async (req, res) => {
    try {
        
        const { _id, name, title, path, showThis } = req.body;
        
        if(!name || !title || !path) 
            return res.send(error(400, "Fill all fields."))
        
        const nav = await Navbar.findById(_id);

        if(!nav) return res.send(error(400, "Nav Route not found"))

        nav.name = name;
        nav.title = title;
        nav.path = path;

        if(showThis === false || showThis === "false")
            nav.showThis = false;
        else if(showThis === true || showThis === "true")
            nav.showThis = true;

        await nav.save();

        return res.send(success(200, { nav }))

    } catch (err) {
        return res.send(error(500, err.message))
    }
}

export {
    createNavRoute,
    updateNavRoute,
    getAllShowNavRoutes,
    getAllNavRoutes
}