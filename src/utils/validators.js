export const isValidPhone = (phone) => {
  return /^[0-9]{10}$/.test(phone.trim());
};
