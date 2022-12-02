import { FC, useEffect, useState } from "react";
import { RoutesApp } from "./components/RoutesApp";
import { IProject } from "./interface/interfaces";

export const App: FC = () => {
  const [projects, setProjects] = useState<IProject[]>(
    JSON.parse(
      localStorage.getItem("projects") ?? '[{"name":"upTrade","id":1}]'
    )
  );
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  return (
    <>
      <RoutesApp projects={projects} setProjects={setProjects} />
    </>
  );
};
