/**
 * Message Content Object - Common properties
 *
 * @export
 * @interface MessageContentBase
 */
 export interface MessageContentBase {
  type: string
}

/**
 * Message Text Record
 *
 * @export
 * @interface MessageTextContent
 * @extends {MessageContentBase}
 */
export interface MessageTextContent extends MessageContentBase {
  type: "text"
  text: string
}

/**
 * Message Image record
 *
 * @export
 * @interface MessageImageContent
 * @extends {MessageContentBase}
 */
export interface MessageImageContent extends MessageContentBase {
  type:       "image"
  mediaUrl:   string
  mediaType:  string,
  mediaSize:  number,
  altText:    string
}

export type MessageContent = MessageTextContent | MessageImageContent

export type MessageContentType = "image" | "text"

export enum AuthorType {
  STAFF = 'STAFF',
  CUSTOMER = 'CUSTOMER',
  SYSTEM = 'SYSTEM'
};

export * from '../generated/graphql'

