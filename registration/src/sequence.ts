import { MiddlewareSequence, RequestContext } from '@loopback/rest';
import { Response } from 'express';

export class MySequence extends MiddlewareSequence {
  async handle(context: RequestContext) {
    const response = context.response as Response;

    try {
      const result = await super.handle(context);
      response.send(result);
    } catch (error) {
      // Handle errors here
      if (error.statusCode) {
        response.status(error.statusCode).send({ error: error.message });
      } else {
        response.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
}
