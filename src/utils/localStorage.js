const CART_KEY = 'cart';
const PHONE_KEY = 'phone';

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const savePhone = (phone) => {
  localStorage.setItem(PHONE_KEY, phone);
};

export const getPhone = () => {
  return localStorage.getItem(PHONE_KEY) || '';
};