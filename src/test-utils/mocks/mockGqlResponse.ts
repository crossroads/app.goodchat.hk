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
          {
            content: {
              text: "hello",
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
              text: "I'd like to donate",
              type: "text",
            },
            __typename: "Message",
          },
          {
            content: {
              type: "image",
              mediaUrl:
                "https://media.smooch.io/apps/60014840c2cbff000c54f83f/conversations/472d5a7954f69b57b549e6c5/lcOwivrqBOrL2B9NtPj6wCfI/Vlt4uiF5TGxJVrk5txIIG0BA.jpeg",
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
