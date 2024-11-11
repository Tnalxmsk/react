export const getEmailPrefix = (email?: string) => {
  if (!email) {
    return "loading...";
  } else {
    return email.split('@')[0];
  }
};
