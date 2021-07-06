import { PublishableType } from "./BaseTypes";

export interface Entity extends PublishableType{
    primaryCategoryTagIds: [string],
    locationId?: string, //@TODO: Likely need to abstract to a LocationBasedType

    websiteUrl: string,
    twitterProfileUrl?: string,
    facebookProfileUrl?: string,
    instagramProfileUrl?: string,
    entityRank?: number, // @TODO: Probably should abstract this out to a "RankableType"
}

export interface Organization extends Entity {}

export interface Person extends Entity {}


// import { DocumentSource } from 'firestorter/lib/Types'
// import { array, assign, Infer, number, object, optional, string } from 'superstruct';
// import { PublishableItem, PublishableSchema } from './BaseTypes';

// const EntityBaseSchema = object({
//         primaryCategoryTagIds: array(string()),
//         locationId: optional(string()), //@TODO: Likely need to abstract to a LocationBasedType

//         websiteUrl: string(),
//         twitterProfileUrl: optional(string()),
//         facebookProfileUrl: optional(string()),
//         instagramProfileUrl: optional(string()),
//         entityRank: optional(number()) // @TODO: Probably should abstract this out to a "RankableType"
//     })
// const EntitySchema = assign(EntityBaseSchema, PublishableSchema)

// export class Entity extends PublishableItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: EntitySchema
//         })
//     }
// }


// const OrganizationBaseSchema = object({})
// const OrganizationSchema = assign(OrganizationBaseSchema, EntitySchema)
// // export type Organization  = Infer<typeof OrganizationSchema>
// export class Organization extends Entity {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: OrganizationSchema
//         })
//     }
// }


// const PersonBaseSchema = object({})
// const PersonSchema = assign(PersonBaseSchema, EntitySchema)
// // export type Person = Infer<typeof PersonSchema>
// export class Person extends Entity {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: PersonSchema
//         })
//     }
// }