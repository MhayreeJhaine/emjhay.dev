export const getGuestEmail = (): string => {
  const storedEmail = localStorage.getItem("guestEmail");
  if (storedEmail) {
    return storedEmail;
  }

  const username = "guest_" + Math.random().toString(36).substring(2, 10);
  const email = `${username}@guest.com`;
  localStorage.setItem("guestEmail", email);
  return email;
};
