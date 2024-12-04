import { error, success } from "../../backend/util/responseWrapper.js";
import { Contact } from "../model/Contact.model.js";

const createContactController = async (req, res) => {
  try {
    const { type, content } = req.body;

    if (!content || !type) return res.send(error(400, "Fill all fields"));

    const contact = await Contact.create({
      type,
      content,
    });

    return res.send(success(201, contact));
  } catch (err) {
    res.send(error(500, err.message));
  }
};

const updateContactController = async (req, res) => {
  try {
    const { _id, type, content } = req.body;

    const contact = await Contact.findById(_id);

    if (!contact) return res.send(error(404, "Contact not found"));

    if (type) contact.type = type;
    if (content) contact.content = content;

    await contact.save();

    return res.send(success(200, { contact }));
  } catch (err) {
    console.log("error in update: ", err);
    res.send(error(500, err.message));
  }
};

const deleteContactController = async (req, res) => {
  try {
    const { _Id } = req.body;

    const contact = await Contact.findById(_Id);

    if (!contact) return res.send(error(404, "Contact not found"));

    await Contact.findByIdAndDelete(_Id);

    return res.send(success(200, "Contact Deleted Successfully"));
  } catch (err) {
    res.send(error(500, err.message));
  }
};

const getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();

    return res.send(success(200, { contacts }));
  } catch (err) {
    return res.send(error(500, err.message));
  }
};

export {
  createContactController,
  updateContactController,
  deleteContactController,
  getAllContact,
};
