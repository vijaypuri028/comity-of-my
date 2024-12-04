import { error, success } from "../../backend/util/responseWrapper.js";
import { SocialMedia } from "../model/SocialMedia.model.js";

const createSocialMediaController = async (req, res) => {
  try {
    const { type, link } = req.body;

    if (!link || !type) return res.send(error(400, "Fill all fields"));

    const socialMedia = await SocialMedia.create({
      type,
      link,
    });

    return res.send(success(201, socialMedia));
  } catch (err) {
    res.send(error(500, err.message));
  }
};

const updateSocialMediaController = async (req, res) => {
  try {
    const { _id, type, link } = req.body;

    const socialMedia = await SocialMedia.findById(_id);

    if (!socialMedia) return res.send(error(404, "SocialMedia not found"));

    if (type) socialMedia.type = type;
    if (link) socialMedia.link = link;

    await socialMedia.save();

    return res.send(success(200, { socialMedia }));
  } catch (err) {
    console.log("error in update: ", err);
    res.send(error(500, err.message));
  }
};

const deleteSocialMediaController = async (req, res) => {
  try {
    const { _Id } = req.body;

    const socialMedia = await SocialMedia.findById(_Id);

    if (!socialMedia) return res.send(error(404, "SocialMedia not found"));

    await SocialMedia.findByIdAndDelete(_Id);

    return res.send(success(200, "SocialMedia Deleted Successfully"));
  } catch (err) {
    res.send(error(500, err.message));
  }
};

const getAllSocialMedia = async (req, res) => {
  try {
    const socialMedias = await SocialMedia.find();

    return res.send(success(200, { socialMedias }));
  } catch (err) {
    return res.send(error(500, err.message));
  }
};

export {
  createSocialMediaController,
  updateSocialMediaController,
  deleteSocialMediaController,
  getAllSocialMedia,
};
