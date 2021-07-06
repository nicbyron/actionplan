import { PublishableType } from "./BaseTypes";

export interface ActionItemCollection extends PublishableType {
    organizationId?: string, 
    personId?: string
}

// import { DocumentSource } from 'firestorter/lib/Types'
// import { assign, Infer, object, optional, string } from "superstruct";
// import { PublishableItem, PublishableSchema } from "./BaseTypes";

// const CollectionBaseSchema = object({
//         organizationId: optional(string()),
//         personId: optional(string())
//     })

// const CollectionSchema = assign(CollectionBaseSchema, PublishableSchema)

// export type TctionItemCollection = Infer<typeof CollectionSchema>

// export class ActionItemCollection extends PublishableItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: CollectionSchema
//         })
//     }
// }