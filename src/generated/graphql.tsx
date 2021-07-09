import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
};



export type Conversation = {
  __typename?: 'Conversation';
  id: Scalars['Int'];
  customerId?: Maybe<Scalars['Int']>;
  customer?: Maybe<Customer>;
  source: Scalars['String'];
  type: ConversationType;
  metadata: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  messages: Array<Message>;
  readReceipts: Array<ReadReceipt>;
  staffs: Array<Staff>;
};


export type ConversationMessagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
};

export enum ConversationType {
  Customer = 'CUSTOMER',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}


export type Customer = {
  __typename?: 'Customer';
  id: Scalars['Int'];
  externalId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  metadata: Scalars['JSON'];
  conversations: Array<Conversation>;
};



export enum DeliveryStatus {
  Unsent = 'UNSENT',
  Sent = 'SENT',
  Delivered = 'DELIVERED',
  Failed = 'FAILED'
}























export type Message = {
  __typename?: 'Message';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  conversationId: Scalars['Int'];
  conversation: Conversation;
  authorType: Scalars['String'];
  authorId: Scalars['Int'];
  content: Scalars['JSON'];
  metadata: Scalars['JSON'];
  customerDeliveryStatus: DeliveryStatus;
  customerDeliveryError?: Maybe<Scalars['String']>;
};

export type MessageEvent = {
  __typename?: 'MessageEvent';
  action: SubscriptionAction;
  message: Message;
};

export type Mutation = {
  __typename?: 'Mutation';
  sendMessage: Message;
  startTyping: Conversation;
  stopTyping: Conversation;
  markAsRead: ReadReceipt;
  createConversation: Conversation;
};


export type MutationSendMessageArgs = {
  conversationId: Scalars['Int'];
  text: Scalars['String'];
  timestamp?: Maybe<Scalars['DateTime']>;
  metadata?: Maybe<Scalars['JSON']>;
};


export type MutationStartTypingArgs = {
  conversationId: Scalars['Int'];
};


export type MutationStopTypingArgs = {
  conversationId: Scalars['Int'];
};


export type MutationMarkAsReadArgs = {
  conversationId: Scalars['Int'];
};


export type MutationCreateConversationArgs = {
  type: ConversationType;
  memberIds: Array<Scalars['Int']>;
  metadata?: Maybe<Scalars['JSON']>;
};














export type Query = {
  __typename?: 'Query';
  goodchatProfile: Staff;
  conversations: Array<Conversation>;
  conversation?: Maybe<Conversation>;
  customers: Array<Customer>;
};


export type QueryConversationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  type?: Maybe<ConversationType>;
};


export type QueryConversationArgs = {
  id: Scalars['Int'];
};


export type QueryCustomersArgs = {
  limit?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Int']>;
  externalId?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Array<Scalars['Int']>>;
};



export type ReadReceipt = {
  __typename?: 'ReadReceipt';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  userType: Scalars['String'];
  conversationId: Scalars['Int'];
  conversation: Conversation;
  lastReadMessageId: Scalars['Int'];
  lastReadMessage: Message;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ReadReceiptEvent = {
  __typename?: 'ReadReceiptEvent';
  action: SubscriptionAction;
  readReceipt: ReadReceipt;
};


export type Staff = {
  __typename?: 'Staff';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  externalId?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  metadata: Scalars['JSON'];
  permissions: Array<Scalars['String']>;
  conversations: Array<Conversation>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messageEvent: MessageEvent;
  readReceiptEvent: ReadReceiptEvent;
};


export type SubscriptionMessageEventArgs = {
  conversationId?: Maybe<Scalars['Int']>;
  actions?: Maybe<Array<Maybe<SubscriptionAction>>>;
};


export type SubscriptionReadReceiptEventArgs = {
  conversationId: Scalars['Int'];
};

export enum SubscriptionAction {
  Create = 'CREATE',
  Update = 'UPDATE',
  Delete = 'DELETE'
}










export type StartTypingMutationVariables = Exact<{
  conversationId: Scalars['Int'];
}>;


export type StartTypingMutation = (
  { __typename?: 'Mutation' }
  & { startTyping: (
    { __typename?: 'Conversation' }
    & Pick<Conversation, 'id'>
  ) }
);

export type ConversationDetailsQueryVariables = Exact<{
  conversationId: Scalars['Int'];
}>;


export type ConversationDetailsQuery = (
  { __typename?: 'Query' }
  & { conversation?: Maybe<(
    { __typename?: 'Conversation' }
    & Pick<Conversation, 'id' | 'type' | 'source' | 'createdAt' | 'updatedAt' | 'customerId'>
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'id' | 'externalId' | 'createdAt' | 'displayName' | 'email' | 'avatarUrl' | 'locale' | 'metadata'>
    )>, staffs: Array<(
      { __typename?: 'Staff' }
      & Pick<Staff, 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'displayName' | 'metadata'>
    )> }
  )> }
);

export type ConversationMessagesQueryVariables = Exact<{
  conversationId: Scalars['Int'];
  limit: Scalars['Int'];
  after: Scalars['Int'];
}>;


export type ConversationMessagesQuery = (
  { __typename?: 'Query' }
  & { conversation?: Maybe<(
    { __typename?: 'Conversation' }
    & Pick<Conversation, 'id'>
    & { messages: Array<(
      { __typename?: 'Message' }
      & Pick<Message, 'id' | 'authorType' | 'authorId' | 'content' | 'createdAt'>
    )> }
  )> }
);

export type NewMessagesSubSubscriptionVariables = Exact<{
  conversationId: Scalars['Int'];
}>;


export type NewMessagesSubSubscription = (
  { __typename?: 'Subscription' }
  & { messageEvent: (
    { __typename?: 'MessageEvent' }
    & Pick<MessageEvent, 'action'>
    & { message: (
      { __typename?: 'Message' }
      & Pick<Message, 'id' | 'authorType' | 'authorId' | 'conversationId' | 'content' | 'createdAt'>
    ) }
  ) }
);

export type MarkAsReadMutationVariables = Exact<{
  conversationId: Scalars['Int'];
}>;


export type MarkAsReadMutation = (
  { __typename?: 'Mutation' }
  & { markAsRead: (
    { __typename?: 'ReadReceipt' }
    & Pick<ReadReceipt, 'lastReadMessageId'>
  ) }
);

export type SendMessageMutationVariables = Exact<{
  conversationId: Scalars['Int'];
  text: Scalars['String'];
  timestamp: Scalars['DateTime'];
}>;


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'authorType' | 'authorId' | 'content' | 'createdAt'>
  ) }
);

export type CustomerConversationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerConversationsListQuery = (
  { __typename?: 'Query' }
  & { conversations: Array<(
    { __typename?: 'Conversation' }
    & Pick<Conversation, 'id'>
    & { customer?: Maybe<(
      { __typename?: 'Customer' }
      & Pick<Customer, 'displayName'>
    )>, messages: Array<(
      { __typename?: 'Message' }
      & Pick<Message, 'content'>
    )> }
  )> }
);


export const StartTypingDocument = gql`
    mutation startTyping($conversationId: Int!) {
  startTyping(conversationId: $conversationId) {
    id
  }
}
    `;
export type StartTypingMutationFn = Apollo.MutationFunction<StartTypingMutation, StartTypingMutationVariables>;

/**
 * __useStartTypingMutation__
 *
 * To run a mutation, you first call `useStartTypingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartTypingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startTypingMutation, { data, loading, error }] = useStartTypingMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useStartTypingMutation(baseOptions?: Apollo.MutationHookOptions<StartTypingMutation, StartTypingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartTypingMutation, StartTypingMutationVariables>(StartTypingDocument, options);
      }
export type StartTypingMutationHookResult = ReturnType<typeof useStartTypingMutation>;
export type StartTypingMutationResult = Apollo.MutationResult<StartTypingMutation>;
export type StartTypingMutationOptions = Apollo.BaseMutationOptions<StartTypingMutation, StartTypingMutationVariables>;
export const ConversationDetailsDocument = gql`
    query ConversationDetails($conversationId: Int!) {
  conversation(id: $conversationId) {
    id
    type
    source
    createdAt
    updatedAt
    customerId
    customer {
      id
      externalId
      createdAt
      displayName
      email
      avatarUrl
      locale
      metadata
    }
    staffs {
      id
      createdAt
      updatedAt
      externalId
      displayName
      metadata
    }
  }
}
    `;

/**
 * __useConversationDetailsQuery__
 *
 * To run a query within a React component, call `useConversationDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationDetailsQuery({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useConversationDetailsQuery(baseOptions: Apollo.QueryHookOptions<ConversationDetailsQuery, ConversationDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationDetailsQuery, ConversationDetailsQueryVariables>(ConversationDetailsDocument, options);
      }
export function useConversationDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationDetailsQuery, ConversationDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationDetailsQuery, ConversationDetailsQueryVariables>(ConversationDetailsDocument, options);
        }
export type ConversationDetailsQueryHookResult = ReturnType<typeof useConversationDetailsQuery>;
export type ConversationDetailsLazyQueryHookResult = ReturnType<typeof useConversationDetailsLazyQuery>;
export type ConversationDetailsQueryResult = Apollo.QueryResult<ConversationDetailsQuery, ConversationDetailsQueryVariables>;
export const ConversationMessagesDocument = gql`
    query ConversationMessages($conversationId: Int!, $limit: Int!, $after: Int!) {
  conversation(id: $conversationId) {
    id
    messages(limit: $limit, after: $after) {
      id
      authorType
      authorId
      content
      createdAt
    }
  }
}
    `;

/**
 * __useConversationMessagesQuery__
 *
 * To run a query within a React component, call `useConversationMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationMessagesQuery({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *      limit: // value for 'limit'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useConversationMessagesQuery(baseOptions: Apollo.QueryHookOptions<ConversationMessagesQuery, ConversationMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationMessagesQuery, ConversationMessagesQueryVariables>(ConversationMessagesDocument, options);
      }
export function useConversationMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationMessagesQuery, ConversationMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationMessagesQuery, ConversationMessagesQueryVariables>(ConversationMessagesDocument, options);
        }
export type ConversationMessagesQueryHookResult = ReturnType<typeof useConversationMessagesQuery>;
export type ConversationMessagesLazyQueryHookResult = ReturnType<typeof useConversationMessagesLazyQuery>;
export type ConversationMessagesQueryResult = Apollo.QueryResult<ConversationMessagesQuery, ConversationMessagesQueryVariables>;
export const NewMessagesSubDocument = gql`
    subscription NewMessagesSub($conversationId: Int!) {
  messageEvent(conversationId: $conversationId, actions: [CREATE]) {
    action
    message {
      id
      authorType
      authorId
      conversationId
      content
      createdAt
    }
  }
}
    `;

/**
 * __useNewMessagesSubSubscription__
 *
 * To run a query within a React component, call `useNewMessagesSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessagesSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessagesSubSubscription({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useNewMessagesSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewMessagesSubSubscription, NewMessagesSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessagesSubSubscription, NewMessagesSubSubscriptionVariables>(NewMessagesSubDocument, options);
      }
export type NewMessagesSubSubscriptionHookResult = ReturnType<typeof useNewMessagesSubSubscription>;
export type NewMessagesSubSubscriptionResult = Apollo.SubscriptionResult<NewMessagesSubSubscription>;
export const MarkAsReadDocument = gql`
    mutation markAsRead($conversationId: Int!) {
  markAsRead(conversationId: $conversationId) {
    lastReadMessageId
  }
}
    `;
export type MarkAsReadMutationFn = Apollo.MutationFunction<MarkAsReadMutation, MarkAsReadMutationVariables>;

/**
 * __useMarkAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsReadMutation, { data, loading, error }] = useMarkAsReadMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useMarkAsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkAsReadMutation, MarkAsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAsReadMutation, MarkAsReadMutationVariables>(MarkAsReadDocument, options);
      }
export type MarkAsReadMutationHookResult = ReturnType<typeof useMarkAsReadMutation>;
export type MarkAsReadMutationResult = Apollo.MutationResult<MarkAsReadMutation>;
export type MarkAsReadMutationOptions = Apollo.BaseMutationOptions<MarkAsReadMutation, MarkAsReadMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($conversationId: Int!, $text: String!, $timestamp: DateTime!) {
  sendMessage(conversationId: $conversationId, text: $text, timestamp: $timestamp) {
    id
    authorType
    authorId
    content
    createdAt
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *      text: // value for 'text'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const CustomerConversationsListDocument = gql`
    query CustomerConversationsList {
  conversations(type: CUSTOMER) {
    id
    customer {
      displayName
    }
    messages(limit: 1) {
      content
    }
  }
}
    `;

/**
 * __useCustomerConversationsListQuery__
 *
 * To run a query within a React component, call `useCustomerConversationsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerConversationsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerConversationsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomerConversationsListQuery(baseOptions?: Apollo.QueryHookOptions<CustomerConversationsListQuery, CustomerConversationsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomerConversationsListQuery, CustomerConversationsListQueryVariables>(CustomerConversationsListDocument, options);
      }
export function useCustomerConversationsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomerConversationsListQuery, CustomerConversationsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomerConversationsListQuery, CustomerConversationsListQueryVariables>(CustomerConversationsListDocument, options);
        }
export type CustomerConversationsListQueryHookResult = ReturnType<typeof useCustomerConversationsListQuery>;
export type CustomerConversationsListLazyQueryHookResult = ReturnType<typeof useCustomerConversationsListLazyQuery>;
export type CustomerConversationsListQueryResult = Apollo.QueryResult<CustomerConversationsListQuery, CustomerConversationsListQueryVariables>;