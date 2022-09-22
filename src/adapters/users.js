export const userAdapter = (data) => {
  const users = data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      website: user.website,
    };
  });
  return users;
};
