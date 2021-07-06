import { PublishableType } from "./BaseTypes";

export interface ActionItem extends PublishableType {
    organizationId?: string, 
    personId?: string, 
    typeId: string, 
    locationId?: string, 

    linkUrl: string,
    sourceUrl?: string,
}

export interface UserActionItem extends ActionItem {
    completionStatusId: string,
}

// import { Document } from 'firestorter'
// import { DocumentSource } from 'firestorter/lib/Types'
// import { array, assign, Infer, object, optional, string } from 'superstruct'
// import { PublishableItem, PublishableSchema }  from './BaseTypes'

// const ActionItemBaseSchema = object({
//         organizationId: optional(string()),
//         personId: optional(string()),
//         typeId: string(),
//         // completionStatusId: string(), @TODO: Make a sub-collection for user-action-items
//         locationId: optional(string()), //@TODO: Likely need to abstract to a LocationBasedType

//         linkUrl: string(),
//         sourceUrl: optional(string()),
//     })

// const ActionItemSchema = assign(ActionItemBaseSchema, PublishableSchema)

// export type TActionItem = Document<Infer<typeof ActionItemSchema>>

// export class ActionItem extends PublishableItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: ActionItemSchema
//         })
//     }
// }
