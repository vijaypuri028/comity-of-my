import { Router } from "express";
import { requireUser } from "../middleware/requireUser.middleware.js";
import {
  createSocialMediaController,
  deleteSocialMediaController,
  getAllSocialMedia,
  updateSocialMediaController,
} from "../controller/socialMedia.controller.js";

const router = Router();

router.get("/", getAllSocialMedia);
router.post("/create", requireUser, createSocialMediaController);
router.put("/update", requireUser, updateSocialMediaController);
router.delete("/delete", requireUser, deleteSocialMediaController);

export { router as socialMediaRouter };
