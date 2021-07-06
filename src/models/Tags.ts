import { APBaseType } from "./BaseTypes";

export interface Tag extends APBaseType {
    name: string,
    imageUrl?: string,
}

export interface ActionItemTypeCategory extends Tag {}

export interface ActionItemType extends Tag {
    categoryId: string,

    emoji: string,
}

export interface IssueType extends Tag {}

// import { DocumentSource } from 'firestorter/lib/Types'
// import { assign, Infer, object, optional, string } from 'superstruct'
// import { BaseItem, BaseSchema } from './BaseTypes'

// const TagBaseSchema = object({
//         name: string(),
//         imageUrl: optional(string())
//     })
// const TagSchema = assign(BaseSchema, TagBaseSchema)

// abstract class Tag extends BaseItem {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: ActionItemTypeCategorySchema
//         })
//     }
// }


// const ActionItemTypeCategoryBaseSchema = object({})
// const ActionItemTypeCategorySchema = assign(TagSchema, ActionItemTypeCategoryBaseSchema)
// // export type ActionItemTypeCategory = Infer<typeof ActionItemTypeCategorySchema>

// export class ActionItemTypeCategory extends Tag {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: ActionItemTypeCategorySchema
//         })
//     }
// }


// const ActionItemTypeBaseSchema = object({
//     categoryId: string(),

//     emoji: string()
// })
// const ActionItemTypeSchema = assign(TagSchema, ActionItemTypeBaseSchema)
// // export type ActionItemType = Infer<typeof ActionItemTypeSchema>

// export class ActionItemType extends Tag {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: ActionItemTypeSchema
//         })
//     }
// }


// const CategoryBase = object({})
// const CategorySchema = assign(TagSchema, CategoryBase)
// // type Category = Infer<typeof CategorySchema>

// export class Category extends Tag {
//     constructor(source: DocumentSource, options = {}) {
//         super(source, {
//             ...(options || {}),
//             schema: CategorySchema
//         })
//     }
// }
