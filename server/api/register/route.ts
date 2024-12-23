import bcrypt from "bcrypt";
import prisma from "../../../client/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            password,
        } = body;
    
        if (!name || !email || !password) {
            return new NextResponse('Error, Missing information', { status: 400 });
        }
    
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });
    
        return NextResponse.json(user);
    } 

    catch (error: any) {
        console.log(error, "REGISTRATION ERROR");
        return new NextResponse('Internal Error', { status: 500 });
    }
};
