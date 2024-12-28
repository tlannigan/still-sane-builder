import { ZodIssue } from 'zod'
/**
 *
 * @param fieldName - issue `path` field you want to get errors for
 * @param errors - errors returned from Zod parsing validation
 * @returns error messages specific to the supplied field
 */
export function getFormFieldErrors(
  fieldName: string,
  errors?: string | ZodIssue[]
): string[] | undefined {
  if (Array.isArray(errors)) {
    const formFieldIssues = errors?.filter((err) =>
      err.path.includes(fieldName)
    )
    const errorMessages = formFieldIssues.map((issue) => issue.message)
    return errorMessages
  }
}
