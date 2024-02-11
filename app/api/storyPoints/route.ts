import { prisma } from "@/server/db";
import { Prisma } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server"; 

export async function GET(req:NextRequest){
    const tasks = await prisma.issue.findMany({
        where:{
            status:{
                not:"DONE"
            }
        },
        select:{
            id:true,
            name:true,
            storyPoints:true,
            status:true,
            isDeleted:true,
            type:true
        }
    })   

    // const tasks = await prisma.issue.deleteMany({
     
    // })
    // console.log(tasks)
    
    const totalFinalStoryPoints = tasks.reduce((acc,task) => acc + (task?.storyPoints ?? 0),0);
    return NextResponse.json({tasks,totalFinalStoryPoints});
}