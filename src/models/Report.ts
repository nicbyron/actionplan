import { APBaseType } from "./BaseTypes";

export interface Report extends APBaseType {
    name: string, 
    entityId?: string, 
    collectionId?: string,
    actionItemId?: string, 
    typeId: string,
    userId: string,

    comment: string,
}

// import { DocumentSource } from 'firestorter/lib/Types'
// import { assign, Infer, object, optional, string } from 'superstruct'
// import { BaseItem, BaseSchema } from './BaseTypes'

// const ReportTypeBaseSchema = object({ name: string() })

// const ReportTypeSchema = assign(ReportTypeBaseSchema, BaseSchema)

// const ReportBaseSchema = object({
//         entityId: optional(string()),
//         collectionId: optional(string()),
//         actionItemId: optional(string()),
//         typeId: string(),
//         userId: string(),

//         comment: string()  
//     })

// const ReportSchema = assign(ReportBaseSchema, ReportTypeSchema)

// // export type Report = Infer<typeof ReportSchema>

// export class Report extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: ReportSchema
//         })
//     }
// }