import firebase from "firebase";
import "firebase/firestore";
import { initFirestorter, Collection, Document } from "firestorter";
import { ActionItemCollection } from './models/ActionItemCollection'
import { ActionItem } from "./models/ActionItem";
import { Organization, Person } from "./models/Entities";
import { Geography, Location } from "./models/LocationBasedTypes";
import { CompletionStatus, PublishingStatus } from "./models/Statuses";
import { Report } from "./models/Report";
import { ActionItemType, ActionItemTypeCategory, IssueType } from "./models/Tags";
import { User } from "./models/User";

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: "AIzaSyBLYYodADSGYynoxjzJjPdmlxsJxiMDazc",
		authDomain: "action-plan-v1.firebaseapp.com",
		databaseURL: "https://action-plan-v1.firebaseio.com",
		messagingSenderId: "924282040964",
		projectId: "action-plan-v1",
		storageBucket: "action-plan-v1.appspot.com"
	}); 
} else {
	firebase.app();
}

initFirestorter({ firebase });

export const actionItems = new Collection<Document<ActionItem>>('action_items')

export const actionItemCollections = new Collection<Document<ActionItemCollection>>('collections')

export const organizations = new Collection<Document<Organization>>('organizations')

export const people = new Collection<Document<Person>>('people')

export const geographies = new Collection<Document<Geography>>('geographies')

export const locations = new Collection<Document<Location>>('locations')

export const reports = new Collection<Document<Report>>('reports')

export const publishingStatuses = new Collection<Document<PublishingStatus>>('publishing-statuses')

export const completionStatuses = new Collection<Document<CompletionStatus>>('completion-statuses')

export const actionItemTypeCategories = new Collection<Document<ActionItemTypeCategory>>('action-item-type-categories')

export const actionItemTypes = new Collection<Document<ActionItemType>>('action-item-types')

export const categories = new Collection<Document<IssueType>>('categories')

export const users = new Collection<Document<User>>('users')


// export const actionItems = new Collection<ActionItem>('action-items', {
// 	createDocument: (source, options) => new ActionItem(source, options) 
// })

// export const actionItemCollections = new Collection<ActionItemCollection>('collections', {
// 	createDocument: (source, options) => new ActionItemCollection(source, options)
// })

// export const organizations = new Collection<Organization>('organizations', {
// 	createDocument: (source, options) => new ActionItem(source, options)
// })

// export const people = new Collection<Person>('people', {
// 	createDocument: (source, options) => new Person(source, options)
// })

// export const geographies = new Collection<Geography>('geographies', {
// 	createDocument: (source, options) => new Geography(source, options)
// })

// export const locations = new Collection<Location>('locations', {
// 	createDocument: (source, options) => new Location(source, options)
// })

// export const reports = new Collection<Report>('reports', {
// 	createDocument: (source, options) => new Report(source, options)
// })

// export const publishingStatuses = new Collection<PublishingStatus>('publishing-statuses', {
// 	createDocument: (source, options) => new PublishingStatus(source, options)
// })

// export const completionStatuses = new Collection<CompletionStatus>('completion-statuses', {
// 	createDocument: (source, options) => new CompletionStatus(source, options)
// })

// export const actionItemTypeCategories = new Collection<ActionItemTypeCategory>('action-item-type-categories', {
// 	createDocument: (source, options) => new ActionItemTypeCategory(source, options)
// })

// export const actionItemTypes = new Collection<ActionItemType>('action-item-types', {
// 	createDocument: (source, options) => new ActionItemType(source, options)
// })

// export const categories = new Collection<Category>('categories', {
// 	createDocument: (source, options) => new Category(source, options)
// })

// export const users = new Collection<User>('users', {
// 	createDocument: (source, options) => new User(source, options)
// })