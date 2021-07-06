export interface APBaseType {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PublishableType extends APBaseType {
    publishingStatusId: string;
    submitterId: string;
    tagIds?: [string];
    relaventGeographyIds: [string];
    
    name: string;
    description: string;
    imageUrl?: string;
    firstPublishedAt: Date;
}

// Old code from trying to implement Schema validation: https://ijzerenhein.github.io/firestorter/#/./guides/SchemaValidation

// import { Document, isTimestamp } from 'firestorter'
// import { DocumentSource } from 'firestorter/lib/Types'
// import { array, assign, define, object, optional, string } from 'superstruct'

// export const Timestamp = define('Timestamp', isTimestamp)

// export const BaseSchema = object({
//         createdAt: Timestamp,
//         updatedAt: Timestamp
//     })

// const PublishableBaseSchema = object({
//         publishingStatusId: string(),
//         submitterId: string(),
//         tagIds: optional(array(string())),
//         relaventGeographyIds: array(string()),
        
//         name: string(),
//         description: string(),
//         imageUrl: optional(string()),
//         firstPublishedAt: Timestamp
//     })

// export const PublishableSchema = assign(BaseSchema, PublishableBaseSchema)

// export abstract class BaseItem extends Document {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: BaseSchema
//         })
//     }
// }

// export abstract class PublishableItem extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: PublishableSchema
//         })
//     }
// }


