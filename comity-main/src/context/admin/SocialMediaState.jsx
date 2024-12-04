import React, { useState, useEffect } from "react";
import SocialMediaContext from "./socialMediaContext";
import useApi from "../../Hooks/useApi";
import { apiSocialMediaUrl } from "../../services/api.url";

// Define the SocialMediaState component
const SocialMediaState = ({ children }) => {
  // State for storing all socialMedias
  const [allSocialMedias, setAllSocialMedias] = useState([]);

  // Fetch all socialMedias from the API
  const getAllSocialMediaService = useApi(apiSocialMediaUrl.SocialMediaAllData);
  const getAllSocialMedia = async () => {
    const res = await getAllSocialMediaService.call();
    if (res?.response?.result?.socialMedias) {
      setAllSocialMedias(res.response.result.socialMedias);
    } else {
      console.error("Failed to fetch socialMedias", res);
    }
  };

  // Delete a socialMedia by ID
  const getDeleteSocialMediaService = useApi(apiSocialMediaUrl.deleteSocialMedia);

  const handleDelete = async (id) => {
    const res = await getDeleteSocialMediaService.call({
      _Id: id,
    });
    getAllSocialMedia();
  };

  // State for creating a new socialMedia
  const [socialMediaCreate, setSocialMediaCreate] = useState({
    type: "",
    link: "",
  });

  // Create a new socialMedia
  const getCreateSocialMediaService = useApi(apiSocialMediaUrl.createSocialMedia);
  const handleCreate = async () => {
    await getCreateSocialMediaService.call(socialMediaCreate);
    getAllSocialMedia();
    setSocialMediaCreate({ type: "", link: "" });
  };

  // State for managing the edit modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editSocialMedia, setEditSocialMedia] = useState({
    type: "",
    link: "",
  });

  const handleEditButton = (socialMedia) => {
    setEditSocialMedia(socialMedia);
    setOpenEditModal(true);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  // Update a socialMedia
  const getUpdateSocialMediaService = useApi(apiSocialMediaUrl.updateSocialMedia);
  const handleUpdate = async (socialMedia) => {
    await getUpdateSocialMediaService.call(socialMedia);
    getAllSocialMedia();
    setOpenEditModal(false);
  };

  // Delete a socialMedia from the edit modal
  const handleDeleteInModal = (id) => {
    handleDelete(id);
    setOpenEditModal(false);
  };

  useEffect(() => {
    getAllSocialMedia();
  }, []);

  return (
    <SocialMediaContext.Provider
      value={{
        allSocialMedias,
        getAllSocialMedia,
        handleDelete,
        socialMediaCreate,
        handleCreate,
        setSocialMediaCreate,
        openEditModal,
        setOpenEditModal,
        handleEditButton,
        editSocialMedia,
        setEditSocialMedia,
        closeEditModal,
        handleUpdate,
        handleDeleteInModal,
      }}
    >
      {children}
    </SocialMediaContext.Provider>
  );
};

export default SocialMediaState;
