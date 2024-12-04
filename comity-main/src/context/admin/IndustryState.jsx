import React, { useState } from "react";
import IndustryContext from "./industryContext.js";
import useApi from "../../Hooks/useApi";
import { apiIndustryUrl } from "../../services/api.url.js";

const IndustryState = (props) => {
  // useState declarations
  const [allIndustries, setAllIndustries] = useState([]);

  const [allShowIndustries, setAllShowIndustries] = useState([]);

  const [industryCreate, setIndustryCreate] = useState({
    name: "",
    desc: "",
    scheme: "",
    color: "",
    label: "",
    courses: [],
    showThis: true,
  });

  const [course, setCourse] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editIndustry, setEditIndustry] = useState({
    name: "",
    desc: "",
    scheme: "",
    color: "",
    label: "",
    courses: [],
    showThis: true,
  });
  const [openChildModal, setOpenChildModal] = useState(false);

  // getting all Industry data
  const getAllIndustriesService = useApi(apiIndustryUrl.industryAllData);
  
  const getAllIndustries = async () => {
    try {      
      const res = await getAllIndustriesService.call();
      if (res?.response?.result?.industries)
        setAllIndustries(res.response.result.industries);
    } catch (err) {
      console.log(err.message);
    }
  };
  
  // getting all Show Industry data
  const getAllShowIndustriesService = useApi(apiIndustryUrl.industryShowData);
  const getAllShowIndustries = async () => {
    try {      
      const res = await getAllShowIndustriesService.call();
      if (res?.response?.result?.industries)
        setAllShowIndustries(res.response.result.industries);
    } catch (err) {
      console.log(err.message);
    }
  };


  // Creating a Industry and handling create api
  const getCreateIndustryService = useApi(apiIndustryUrl.createIndustry);

  const handleAdd = () => {
    if (course === "" || course === " ") return;
    // for create industry
    setIndustryCreate({
      ...industryCreate,
      courses: [...industryCreate.courses, course],
    });
  };

  const handleUpdateAdd = () => {
    if (course === "" || course === " ") return;
    // for update industry
    setEditIndustry({
      ...editIndustry,
      courses: [...editIndustry.courses, course],
    });
    setCourse("");
  }

  const handleCreate = async () => {
    const res = await getCreateIndustryService.call(industryCreate);
    getAllIndustries();
    setIndustryCreate({
      name: "",
      desc: "",
      scheme: "",
      color: "",
      label: "",
      courses: [],
      showThis: true,
    });
  };

  // Calling delete api and handle delete button
  const getDeleteIndustryService = useApi(apiIndustryUrl.deleteIndustry);

  const handleDelete = async (id) => {
    await getDeleteIndustryService.call({
      _id: id,
    });
    getAllIndustries();
  };

  // Handling edit Industry section
  const handleEditButton = (industry) => {
    setEditIndustry(industry);
    setOpenEditModal(true);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  //   Calling update about api and handing update button
  const getUpdateIndustryService = useApi(apiIndustryUrl.updateIndustry);

  const handleUpdate = async (industry) => {
    await getUpdateIndustryService.call(industry);
    getAllIndustries();
    setOpenEditModal(false);
  };

  const handleDeleteInModal = (id) => {
    handleDelete(id);
    setOpenEditModal(false);
  };

  const handleOpenChildModal = () => {
    // setCourses(allIndustries.courses);
    setOpenChildModal(true);
  };

  const closeChildModal = () => {
    setOpenChildModal(false);
  };

  const handleDeleteInChildModal = (index) => {
    const tempCourses = editIndustry.courses;
    tempCourses.splice(index, 1);
    setEditIndustry({ ...editIndustry, courses: tempCourses });
    if (editIndustry.courses.length === 0) setOpenChildModal(false);
  };

  return (
    <IndustryContext.Provider
      value={{
        allIndustries,
        getAllIndustries,
        allShowIndustries,
        getAllShowIndustries,
        course,
        setCourse,
        industryCreate,
        setIndustryCreate,
        handleCreate,
        handleAdd,
        handleDelete,
        openEditModal,
        handleEditButton,
        closeEditModal,
        editIndustry,
        setEditIndustry,
        handleUpdate,
        handleUpdateAdd,
        handleDeleteInModal,
        openChildModal,
        closeChildModal,
        handleOpenChildModal,
        handleDeleteInChildModal,
      }}
    >
      {props.children}
    </IndustryContext.Provider>
  );
};

export default IndustryState;
