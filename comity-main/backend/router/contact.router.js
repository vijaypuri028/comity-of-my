import { Router } from 'express'
import { requireUser } from '../middleware/requireUser.middleware.js';
import { createContactController, deleteContactController, getAllContact, updateContactController } from '../controller/contact.controller.js';


const router = Router()

router.get('/', getAllContact);
router.post('/create', requireUser, createContactController);
router.put("/update", requireUser, updateContactController);
router.delete("/delete", requireUser, deleteContactController);

export { router as contactRouter }