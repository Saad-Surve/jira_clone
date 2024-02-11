import { prisma } from "@/server/db";
import { Prisma } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server"; 

export async function GET(req:NextRequest){
    const tasks = await prisma.issue.findMany(
        {
            where:{
                status:'DONE'
            }
        }
    )   
    
    const totalFinalStoryPoints = tasks.reduce((acc,task) => acc + (task?.storyPoints ?? 0),0);
    return NextResponse.json({totalFinalStoryPoints});
}