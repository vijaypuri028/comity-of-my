import React, { useState, useEffect } from "react";
import ContactContext from "./contactContext";
import useApi from "../../Hooks/useApi";
import { apiContactUrl } from "../../services/api.url";

// Define the ContactState component
const ContactState = ({ children }) => {
  // State for storing all contacts
  const [allContacts, setAllContacts] = useState([]);

  // Fetch all contacts from the API
  const getAllContactService = useApi(apiContactUrl.ContactAllData);
  const getAllContact = async () => {
    const res = await getAllContactService.call();
    if (res?.response?.result?.contacts) {
      setAllContacts(res.response.result.contacts);
    } else {
      console.error("Failed to fetch contacts", res);
    }
  };

  // Delete a contact by ID
  const getDeleteContactService = useApi(apiContactUrl.deleteContact);

  const handleDelete = async (id) => {
    const res = await getDeleteContactService.call({
      _Id: id,
    });
    getAllContact();
    console.log(res);
  };

  // State for creating a new contact
  const [contactCreate, setContactCreate] = useState({
    type: "",
    content: "",
  });

  // Create a new contact
  const getCreateContactService = useApi(apiContactUrl.createContact);
  const handleCreate = async () => {
    await getCreateContactService.call(contactCreate);
    getAllContact();
    setContactCreate({ type: "", content: "" });
  };

  // State for managing the edit modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editContact, setEditContact] = useState({
    type: "",
    content: "",
  });

  const handleEditButton = (contact) => {
    setEditContact(contact);
    setOpenEditModal(true);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  // Update a contact
  const getUpdateContactService = useApi(apiContactUrl.updateContact);
  const handleUpdate = async (contact) => {
    await getUpdateContactService.call(contact);
    getAllContact();
    setOpenEditModal(false);
  };

  // Delete a contact from the edit modal
  const handleDeleteInModal = (id) => {
    handleDelete(id);
    setOpenEditModal(false);
  };

  useEffect(() => {
    getAllContact();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        allContacts,
        getAllContact,
        handleDelete,
        contactCreate,
        handleCreate,
        setContactCreate,
        openEditModal,
        setOpenEditModal,
        handleEditButton,
        editContact,
        setEditContact,
        closeEditModal,
        handleUpdate,
        handleDeleteInModal,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
