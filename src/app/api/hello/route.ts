import type { NextApiRequest, NextApiResponse } from 'next'


// export async function GET(req: NextApiRequest, res:NextApiResponse) {
//   // console.log('Thhihs is the handler api')

//   return new Response('Hello, Next.js!')
// }
export default function GET(req: NextApiRequest, res: NextApiResponse) {
  // const { pid } = req.query
  console.log(req)
  console.log('Thhihs is the handler api2')
  res.send({message: 'this is a message'})
}