export const apiAuthUrl = {
    login: {
        endpoint: 'auth/login',
        method: 'POST'
    },
    signup: {
        endpoint: 'auth/signup',
        method: 'POST'         
    },
}

export const apiAboutUrl = {
    aboutAllData : {
        endpoint: 'about/all',
        method: 'GET'
    },
    aboutShowData : {
        endpoint: 'about',
        method: 'GET'
    },
    createAbout : {
        endpoint: 'about/create',
        method: 'POST'
    },
    deleteAbout : {
        endpoint: 'about/delete',
        method: 'DELETE'
    },
    updateAbout: {
        endpoint: 'about/update',
        method: 'PUT'
    }
}

export const apiContactUrl = {
  ContactAllData: {
    endpoint: "contact/",
    method: "GET",
  },
  createContact: {
    endpoint: "contact/create",
    method: "POST",
  },
  deleteContact: {
    endpoint: "contact/delete",
    method: "DELETE",
  },
  updateContact: {
    endpoint: "contact/update",
    method: "PUT",
  },
};

export const apiSocialMediaUrl = {
  SocialMediaAllData: {
    endpoint: "socialmedia/",
    method: "GET",
  },
  createSocialMedia: {
    endpoint: "socialmedia/create",
    method: "POST",
  },
  deleteSocialMedia: {
    endpoint: "socialmedia/delete",
    method: "DELETE",
  },
  updateSocialMedia: {
    endpoint: "socialmedia/update",
    method: "PUT",
  },
};
export const apiIndustryUrl = {
    industryAllData : {
        endpoint: 'industry/all',
        method: 'GET'
      },
      industryShowData : {
        endpoint: 'industry',
        method: 'GET'
      },
      createIndustry : {
        endpoint: 'industry/create',
        method: 'POST'
      },
      deleteIndustry : {
        endpoint: 'industry/delete',
        method: 'DELETE'
      },
      updateIndustry: {
        endpoint: 'industry/update',
        method: 'PUT'
      }
    }
    
export const apiNavUrl = {
  navAllRoute: {
    endpoint: 'nav/all',
    method: 'GET'
  },
  navShowRoute : {
    endpoint: 'nav',
    method: 'GET'
  },
  updateNavRoute: {
    endpoint: 'nav/update',
    method: 'PUT'
  }
}

export const homeImgCarouselUrl = {
  uploadImgRoute: {
    endpoint: 'carousel/add',
    method: 'POST'
  }
}