import { faker } from "@faker-js/faker";
import { build, sequence, perBuild } from "@jackfranklin/test-data-bot";

// -------------------------------------
// FAKER DATA JACK FRANKLIN BUILDER
// -------------------------------------

const USERS = [];
const NUM_USERS = 30;

const userBuilder = build("User", {
  fields: {
    uuid: perBuild(() => faker.datatype.uuid()),
    id: sequence(),
    name: perBuild(() => faker.name.fullName()),
    email: perBuild(() => faker.internet.email()),
    gender: perBuild(() => faker.name.sex()),
    isActive: perBuild(() => faker.datatype.boolean()),
    avatar: perBuild(() => faker.image.avatar(200, 200, true)),
  },
  postBuild: (user) => {
    user.isActive = user.isActive ? "ACTIVE" : "INACTIVE";
    return user;
  },
});

const mockUsers = () => {
  for (let i = 0; i < NUM_USERS; i++) {
    USERS.push(userBuilder());
  }

  return USERS;
};

const mockCurrentUser = (id) => {
  const user = USERS.find((user) => parseInt(user.id) === parseInt(id));
  // debugger;
  return user;
};

export { mockUsers, mockCurrentUser };
