import EventEmitter from "events"
import { GraphQLError } from "graphql"
import TypedEmitter from "typed-emitter"

interface MediatorEvents {
  // Add custom events here for typing support
  graphQLError: (error: GraphQLError) => void,
}

const mediator = new EventEmitter() as TypedEmitter<MediatorEvents>;

export type Mediator = TypedEmitter<MediatorEvents>;

export default mediator;
