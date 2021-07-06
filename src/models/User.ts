import { APBaseType } from "./BaseTypes";

export interface User extends APBaseType {
    name: string,
    email: string, 
    phone?: string,
}

// import { DocumentSource } from 'firestorter/lib/Types'
// import { assign, Infer, object, optional, string } from 'superstruct'
// import { BaseItem, BaseSchema } from './BaseTypes'

// const UserBaseSchema = object({
//         name: string(),
//         email: string(),
//         phone: optional(string())
//     })

// const UserSchema = assign(UserBaseSchema, BaseSchema)
// // export type User = Infer<typeof UserSchema>

// export class User extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: UserSchema
//         })
//     }
// }