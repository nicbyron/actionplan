import { APBaseType } from "./BaseTypes";

export interface Geography extends APBaseType {
    name: string,
}

export interface Location extends APBaseType {
    name?: string,
    lat?: number,
    lng?: number
}

// import { DocumentSource } from 'firestorter/lib/Types'
// import { assign, Infer, number, object, optional, string } from 'superstruct'
// import { BaseItem, BaseSchema } from './BaseTypes'

// const GeographyBase = object({name: string()})
// const GeographySchema = assign(GeographyBase, BaseSchema)

// export class Geography extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: GeographySchema
//         })
//     }
// }

// const LocationBase = object({
//         name: optional(string()),
//         lat: optional(number()),
//         lng: optional(number())
//     })
    
// const LocationSchema = assign(LocationBase, BaseSchema)
// // export type Location = Infer<typeof LocationSchema>

// export class Location extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: LocationSchema
//         })
//     }
// }