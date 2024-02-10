import { type ReactNode } from "react";
import { BsBookmarkFill, BsFillRecordFill } from "react-icons/bs";
// import { FaSquare } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import clsx from "clsx";
import { type Issue as IssueType } from "@prisma/client";
import { SubTaskIcon } from "../svgs";

type IssueIconProps = {
  issueType: IssueType["type"];
};

const Icon: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("rounded-sm  p-0.5 text-sm text-white", className)}>
      {children}
    </div>
  );
};

const _SubTaskIcon = () => {
  return (
    <Icon className="flex items-center justify-center h-fit bg-task">
      <FaCircle className="p-0.5 text-white" />
    </Icon>
  );
};

const TaskIcon = () => {
  return (
    <Icon className="flex items-center justify-center h-fit bg-task">
      <FaCircle className="p-0.5 text-white" />
    </Icon>
  );
};

const StoryIcon = () => {
  return (
    <Icon className="flex items-center justify-center h-fit bg-story">
      <FaCircle className="p-0.5" />
    </Icon>
  );
};

const BugIcon = () => {
  return (
    <Icon className="flex items-center justify-center h-fit bg-bug">
      <FaCircle className="p-0.5" />
    </Icon>
  );
};

const EpicIcon = () => {
  return (
    <Icon className="flex items-center justify-center h-fit bg-epic">
      <FaCircle className="p-0.5" />
    </Icon>
  );
};

const IssueIcon: React.FC<IssueIconProps> = ({ issueType }) => {
  if (issueType === "TASK") return <TaskIcon />;
  if (issueType === "STORY") return <StoryIcon />;
  if (issueType === "BUG") return <BugIcon />;
  if (issueType === "EPIC") return <EpicIcon />;
  if (issueType === "SUBTASK") return <_SubTaskIcon />;
  return null;
};

export { IssueIcon };
