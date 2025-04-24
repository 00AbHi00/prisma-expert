import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req:NextRequest)
{
    const existingUsers= await prisma.user.findMany(
        {
            where:{
                
                userName:
                {
                    contains:req.nextUrl.searchParams.get('search')||'',
                    mode:"insensitive"
                }
            }
        }
    )
    return(
        NextResponse.json(
            {existingUsers}           
        )
    )
} 
export async function POST()
{

}
