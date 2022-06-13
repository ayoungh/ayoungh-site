import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    console.log(req.referrer)
//   return new Response('Testing');
const response = NextResponse.next();
return response;
}