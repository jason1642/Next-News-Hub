import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'


// export async function GET(req: NextApiRequest, res:NextApiResponse) {
//   // console.log('Thhihs is the handler api')

//   return new Response('Hello, Next.js!')
// }
export const GET = async(req: NextApiRequest, res: NextApiResponse) =>{
  // const { pid } = req.query
  console.log(req)
  console.log('Thhihs is the handler api777')
   
  return new Response(JSON.stringify({
    // data: data ? data : [],
    // error: error ?? ""
    message: 'Successfully made a get request in Nextjs'
}), { status: 200 })
}