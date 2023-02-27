import axios from "axios";

export const getContacts = async () => {
    const { data } = await axios.get(
      `https://63fce778859df29986c72bc9.mockapi.io/contacts/contacts`
    );
    return data;
  };

  export const postContacts = async (contact) => {
    const { data } = await axios.post(
      `https://63fce778859df29986c72bc9.mockapi.io/contacts/contacts/`, contact
    );
    return data; 
  };

  export const removeContacts = async (id) => {
    const { data } = await axios.delete(
      `https://63fce778859df29986c72bc9.mockapi.io/contacts/contacts/${id}`
    );
    return data;
  };