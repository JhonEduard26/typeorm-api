
import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

type Property = "params" | "body"
export const schemaValidator = (schema: AnyZodObject, property: Property) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req[property])
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          ok: false,
          message: error.issues.map(issue => ({ path: issue.path[0], message: issue.message }))
        })
      }
    }
  }
}