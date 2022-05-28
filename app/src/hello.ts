import qs from 'querystring'
import hashids  from '@dalongrong/hashids'

export function hello (r: NginxHTTPRequest): void {
  const name = r.args.name ? qs.unescape(r.args.name) : 'world'

  return r.return(200, `
    Meow, ${name}!

        ("\`-''-/").___..--''"\`-._
        \`6_ 6  )   \`-.  (     ).\`-.__.\`)
        (_Y_.)'  ._   )  \`._ \`. \`\`-..-'
      _..\`--'_..-_/  /--'_.' ,'
      (il),-''  (li),'  ((!.-'
  `)
}


export function token(r: NginxHTTPRequest):void {
  let myhashids = new hashids("demoapp",10).encode(Math.floor(Math.random()*4000));
  return r.return(200,myhashids)
}
