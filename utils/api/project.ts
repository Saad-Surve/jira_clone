import { type GetProjectResponse } from "@/app/api/project/route";
import axios from "axios";
import { filterUserForClient, getBaseUrl } from "../helpers";
import { type GetProjectMembersResponse } from "@/app/api/project/[project_id]/members/route";
import { clerkClient } from "@clerk/nextjs";

const baseUrl = getBaseUrl();

export const projectRoutes = {
  getProject: async () => {
    const { data } = await axios.get<GetProjectResponse>(
      `${baseUrl}/api/project`
    );
    return data?.project;
  },
  getMembers: async ({ project_id }: { project_id: string }) => {
    // const users = (
    //   await clerkClient.users.getUserList({
    //     limit: 20,
    //   })
    // ).map(filterUserForClient);
    // console.log('project'+users)
    // const users = (await clerkClient.clients.getClientList()).map(filterUserForClient);
    // console.log('dddd'+clerkClient.users)
    const user = [
      {
        id: '1',
        email: ';',
        name: 'test',
        avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      }
    ]
    return user;
  },
};
