import { Factory, DeepPartial } from 'fishery'
import pick from 'lodash/pick'

type PartialFactory<T, P> = Factory<Partial<T>, P & { fields: (keyof T)[] }>

/**
 * Given a normal Factory, generates a new factory that returns partial objects
 *
 * @export
 * @template T the object type
 * @template P the tran
 * @param {F} factory
 * @returns {Factory<Partial<T>, P>}
 */
export function generatePartialFactory<T, P>(factory: Factory<T, P>) : PartialFactory<T, P> {

  return Factory.define<
    // Returns partial objects
    Partial<T>,
    // Supports the same transient params as base factory + the fields prop
    P & { fields: (keyof T)[] }
  >(({ params, transientParams }) => {

    // Build the normal object
    const object = factory.build(
      params as DeepPartial<T>,
      { transient: transientParams }
    )

    if (!transientParams.fields) {
      return object;
    }

    return pick(object, transientParams.fields);
  });
}
