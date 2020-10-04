import React from "react";

import UserProjectsComponentWrapper from "../components/UserProjectsContentWrapper/UserProjectsContentWrapper.component";
import UserProjectsHeader from "../components/UserProjectsHeader/UserProjectsHeader.component";
import UserProjectsProjectsList from "../components/UserProjectsProjectsList/UserProjectsProjectsList.component";

interface Props {}

const UserProjects = (props: Props) => {
  return (
    <main>
      <UserProjectsComponentWrapper>
        <UserProjectsHeader />
        <UserProjectsProjectsList />
      </UserProjectsComponentWrapper>
    </main>
  );
};

export default UserProjects;
