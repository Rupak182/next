
import { NextResponse } from "next/server"

// export function middleware(){
//     console.log('hello world')
//     return Response.json({
//         msg:"Hello there"
//     })
// }

export function middleware(request){
    return NextResponse.redirect(new  URL('/',request.url))
}


export const config = {
    // matcher:'/about'  // does not affect about/info
    // matcher:'/about:path*'  // does not affect about/info
    matcher:['/about/:path*']  // does not affect about/info

}