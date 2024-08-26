import { constants } from "../configs";

/**
 * Display welcome text
 * @param {Object} params  no params.
 * @returns {Promise<Object>} Contains status, and returns message
 */
 const welcomeText = async () => {
  try {
    return {
      status: true,
      message: 'welcome to cash fast service',
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: constants.SERVER_ERROR('WELCOME TEXT'),
    };
  }
};


export = {
  welcomeText,
 
};