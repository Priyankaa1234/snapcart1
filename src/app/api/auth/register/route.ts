import connectDb from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(req:NextRequest) {
    try {
        await connectDb()
        const {name,email,password}= await req.json()     
     const existuser = await User.findOne({email})
        if(existuser)
        {
            return NextResponse.json({message:"Email already exists"},{status:400})
        }

    if(password.length<6)
    {
        return NextResponse.json({message:"Password must be at least 6 characters"},{status:400})
    }
   

    const hashedpsw= await bcrypt.hash(password,10)
    const user = await User.create({name,email,password:hashedpsw})
    return NextResponse.json(
        user,{status:200})

    } catch (error) {
        return NextResponse.json({message:`register error ${error}`},{status:500})
    }
}










//connect db  
//name,email,password
//email check
//psw check
//psw hash
//user create
