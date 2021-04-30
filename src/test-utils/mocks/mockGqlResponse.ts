const mockGqlResponse = {
  CustomerConversationsList: {
    conversations: [
      {
        id: 1,
        customer: {
          displayName: "Jane Doe",
          __typename: "Customer",
        },
        messages: [
          {
            content: {
              text: "world",
              type: "text",
            },
            __typename: "Message",
          },
        ],
        __typename: "Conversation",
      },
      {
        id: 2,
        customer: {
          displayName: "Chan Tai Man",
          __typename: "Customer",
        },
        messages: [
          {
            content: {
              type: "image",
              mediaUrl: "https://i.imgur.com/fNp8q3k.jpg",
              mediaSize: 176390,
              mediaType: "image/jpeg",
            },
            __typename: "Message",
          },
        ],
        __typename: "Conversation",
      },
    ],
  },
};

export default mockGqlResponse;
