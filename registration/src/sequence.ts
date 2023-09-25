// import { MiddlewareSequence, MiddlewareContext, Response, RestBindings } from '@loopback/rest';
// import { Next, inject } from '@loopback/context';

// export class MySequence implements MiddlewareSequence {
//   constructor(
//     @inject(RestBindings.Http.RESPONSE) private response: Response,
//   ) {}

//   async handle(context: RequestContext, next: Next) {
//     try {
//       const result = await next();
//       this.response.send(result);
//     } catch (error) {
//       // Handle errors here
//       if (error.statusCode) {
//         this.response.status(error.statusCode).send({ error: error.message });
//       } else {
//         this.response.status(500).send({ error: 'Internal Server Error' });
//       }
//     }
//   }
// }

import {MiddlewareSequence, RequestContext } from '@loopback/rest';

export class MySequence extends MiddlewareSequence {
  log(msg: string) {
    console.log(msg);
  }
  async handle(context: RequestContext) {
    this.log('before request');
    await super.handle(context);
    this.log('after request');
  }
}