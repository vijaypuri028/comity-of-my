import React, { useState } from 'react'
import NavContext from './navContext'
import useApi from '../../Hooks/useApi'
import { apiNavUrl } from '../../services/api.url'
import { navRoutes } from '../../Common/routes'

const NavState = (props) => {

    const [navbarRoutes, setNavbarRoutes] = useState([]);
    const [allNavRoutes, setAllNavRoutes] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editNav, setEditNav] = useState({});

    const getAllShowNavService = useApi(apiNavUrl.navShowRoute);
    const getAllNavService = useApi(apiNavUrl.navAllRoute);
    const updateNavService = useApi(apiNavUrl.updateNavRoute);

    const getAllShowNav = async () => {
        try {
            const res = await getAllShowNavService.call();
            if(res?.response?.result?.navRoutes)
                setNavbarRoutes(res?.response?.result?.navRoutes)
        } catch (err) {
            setNavbarRoutes(navRoutes);
        }
    }
    
    const getAllNav = async () => {
        try {
            const res = await getAllNavService.call();
            if(res?.response?.result?.navRoutes)
                setAllNavRoutes(res?.response?.result?.navRoutes)
            console.log("All Nav", res?.response?.result?.navRoutes);
        } catch (err) {
            setNavbarRoutes(navRoutes)
            return navRoutes
        }

    }

    const handleEditButton = (nav) => {
        setEditNav(nav);
        setOpenEditModal(true);
    };

    const closeEditModal = () => {
        setOpenEditModal(false);
    };

    const handleUpdate = async (editNav) => {
        const res = await updateNavService.call(editNav);
        console.log(res.response);
        getAllNav();
        setOpenEditModal(false);
    }

    


  return (
    <NavContext.Provider value={{
        openEditModal,
        getAllShowNav,
        allNavRoutes,
        getAllNav,
        navbarRoutes,
        handleEditButton,
        editNav,
        setEditNav,
        closeEditModal,
        handleUpdate,
    }} >
        {props.children}
    </NavContext.Provider>
  )
}

export default NavState