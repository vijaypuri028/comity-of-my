import React, { useState } from "react";
import AboutContext from "./aboutContext";
import useApi from "../../Hooks/useApi";
import { apiAboutUrl } from "../../services/api.url";

const AboutState = (props) => {
  // useState declarations
  const [allAbouts, setAllAbouts] = useState([]);
  const [aboutMatter, setAboutMatter] = useState([]) 
  const [aboutCreate, setAboutCreate] = useState({
    content: "",
    showThis: true,
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editAbout, setEditAbout] = useState({
    content: "",
    showThis: true,
  });
  
  // Calling all about data api
  const getAllAboutService = useApi(apiAboutUrl.aboutAllData);
  
  const getAllAbout = async () => {
    const res = await getAllAboutService.call();
    if (res?.response?.result?.abouts) 
      setAllAbouts(res.response.result.abouts);
  };
  

  // Calling all show about data api
  const getAllShowAboutService = useApi(apiAboutUrl.aboutShowData);

  const getAllShowAbout = async () => {
    try {
      const res = await getAllShowAboutService.call();
      const abouts = res?.response?.result?.abouts;
      setAboutMatter(abouts);
    } catch (err) {
      console.log(err.message);
    }
  }

  // Calling delete api and handle delete button
  const getDeleteAboutService = useApi(apiAboutUrl.deleteAbout);

  const handleDelete = async (id) => {
    const res = await getDeleteAboutService.call({
      aboutId: id,
    });
    getAllAbout();
    console.log(res);
  };

  // Calling create new about section api and handing create button
  const getCreateAboutService = useApi(apiAboutUrl.createAbout);

  const handleCreate = async () => {
    const res = await getCreateAboutService.call(aboutCreate);
    console.log(res);
    getAllAbout();
    setAboutCreate({
      content: "",
      showThis: true,
    });
  };

  // Handling edit about section
  const handleEditButton = (about) => {
    setEditAbout(about);
    setOpenEditModal(true);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  // Calling update about api and handing update button
  const getUpdateAboutService = useApi(apiAboutUrl.updateAbout);

  const handleUpdate = async (about) => {
    await getUpdateAboutService.call(about);
    getAllAbout();
    setOpenEditModal(false);
  }

  const handleDeleteInModal = (id) => {
    handleDelete(id);
    setOpenEditModal(false);
  }

  return (
    <AboutContext.Provider
      value={{
        allAbouts,
        getAllAbout,
        aboutMatter,
        getAllShowAbout,
        handleDelete,
        aboutCreate,
        handleCreate,
        setAboutCreate,
        openEditModal,
        setOpenEditModal,
        handleEditButton,
        editAbout,
        setEditAbout,
        closeEditModal,
        handleUpdate,
        handleDeleteInModal,
      }}
    >
      {props.children}
    </AboutContext.Provider>
  );
};

export default AboutState;
