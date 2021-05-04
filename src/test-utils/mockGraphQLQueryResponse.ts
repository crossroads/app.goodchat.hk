import { SetupServerApi } from "msw/lib/types/node";
import { graphql } from "msw";

const mockGraphQLQueryResponse = <T>(
  mockServer: SetupServerApi,
  query: string,
  mockResponse: T
) => {
  mockServer.use(
    graphql.query(query, (_, res, ctx) => {
      return res(ctx.data(mockResponse));
    })
  );
};

export default mockGraphQLQueryResponse;
