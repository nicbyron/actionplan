import { APBaseType } from "./BaseTypes";

interface Status extends APBaseType {
    status: string
}

export interface PublishingStatus extends Status {}

export interface CompletionStatus extends Status {}


// import { DocumentSource } from 'firestorter/lib/Types'
// import { assign, Infer, object, string } from 'superstruct'
// import {BaseItem, BaseSchema, PublishableSchema} from './BaseTypes'

// const StatusTypeBaseSchema = object({ status: string() })
// const StatusTypeSchema = assign(StatusTypeBaseSchema, BaseSchema)

// const PublishingStatusBaseSchema = object({})
// const PublishingStatusSchema = assign(PublishingStatusBaseSchema, StatusTypeSchema)
// //export type PublishingStatus = Infer<typeof PublishingStatusSchema>

// export class PublishingStatus extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: PublishingStatusSchema
//         })
//     }
// }


// const CompletionStatusBaseSchema = object({})
// const CompletionStatusSchema = assign(CompletionStatusBaseSchema, StatusTypeSchema)
// //export type CompletionStatus = Infer<typeof CompletionStatusSchema>

// export class CompletionStatus extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: CompletionStatusSchema
//         })
//     }
// }
