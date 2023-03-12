export const getContacts = ({ contacts }) => contacts;

export const getFilteredContacts = ({ contacts = [], filter }) => {
  // if (!contacts) {
  //   return [];
  // }
  // if (!filter) {
  //   return contacts;
  // }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};
