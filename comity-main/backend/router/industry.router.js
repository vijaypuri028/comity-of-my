import { Router } from "express";
import { requireUser } from "../../backend/middleware/requireUser.middleware.js";
import { getAllShowIndustryController, createIndustryController, updateIndustryController, deleteIndustryController, getAllIndustryController } from "../../backend/controller/industry.controller.js";

const router = Router();

router.get('/', getAllShowIndustryController);
router.get('/all', requireUser, getAllIndustryController);
router.post('/create', requireUser, createIndustryController);
router.put('/update', requireUser, updateIndustryController);
router.delete('/delete', requireUser, deleteIndustryController)

export { router as industryRouter }