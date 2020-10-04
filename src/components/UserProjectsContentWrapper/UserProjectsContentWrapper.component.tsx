import React from "react";

interface Props {
  children: React.ReactNode;
}

const UserProjectsContentWrapper = (props: Props) => {
  return <div>{props.children}</div>;
};

export default UserProjectsContentWrapper;
