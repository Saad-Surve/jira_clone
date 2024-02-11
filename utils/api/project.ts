
import { type GetProjectResponse } from "@/app/api/project/route";
import axios from "axios";
import { filterUserForClient, getBaseUrl } from "../helpers";
import { type GetProjectMembersResponse } from "@/app/api/project/[project_id]/members/route";
import { clerkClient } from "@clerk/nextjs";
import { getInitialMembers } from "@/server/functions";

const baseUrl = getBaseUrl();

export const projectRoutes = {
  getProject: async () => {
    const { data } = await axios.get<GetProjectResponse>(
      `${baseUrl}/api/project`
    );
    return data?.project;   
  },
  getMembers: async ({ project_id }: { project_id: string }) => {
    return [
      {
        id: 'user_2cBFpLAIe1jGsSDDCvPFyD6UoPc',
        name: 'Yusuf Sodawala',
        email: 'youzarsifsodawala7@gmail.com',
        avatar: 'https://www.gravatar.com/avatar?d=mp'
      },
      {
        id: 'user_2cBCu6vGu3b6Iz10tMExJmA3NWg',
        name: 'Saad Surve',
        email: 'saad.surve@spit.ac.in',
        avatar: 'https://www.gravatar.com/avatar?d=mp'
      },
      {
        id: 'user_2cBBYNr9chGBq81L7MoqrIFJzEU',
        name: 'Ankit Mishra',
        email: 'ankitmishra21022003@gmail.com',
        avatar: 'https://www.gravatar.com/avatar?d=mp'
      },
      {
        id: 'user_2cBAnqkdGtF0DDHPEku2yXER2v7',
        name: 'Saad Surve',
        email: 'saadsurve131702@gmail.com',
        avatar: 'https://www.gravatar.com/avatar?d=mp'
      }
    ];
  },
};
