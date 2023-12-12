import prisma from "@/utils/connect";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

// UPLOAD IMAGE
export async function POST(req) {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }, { status: 401 }));
  }

  try {
    const body = await req.formData();
    const image = body.get("image");

    console.log(image);

    if (!image) {
      return NextResponse.json({ success: false });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `./public/uploads/${Date.now()}-${image.name}`;
    await writeFile(path, buffer);

    return new NextResponse(
      JSON.stringify(
        {
          success: true,
          path,
        },
        { status: 201 }
      )
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
}
