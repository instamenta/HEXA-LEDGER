
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model GroupMessage
 * 
 */
export type GroupMessage = $Result.DefaultSelection<Prisma.$GroupMessagePayload>
/**
 * Model MessageReply
 * 
 */
export type MessageReply = $Result.DefaultSelection<Prisma.$MessageReplyPayload>
/**
 * Model GroupMessageReply
 * 
 */
export type GroupMessageReply = $Result.DefaultSelection<Prisma.$GroupMessageReplyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs>;

  /**
   * `prisma.groupMessage`: Exposes CRUD operations for the **GroupMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMessages
    * const groupMessages = await prisma.groupMessage.findMany()
    * ```
    */
  get groupMessage(): Prisma.GroupMessageDelegate<ExtArgs>;

  /**
   * `prisma.messageReply`: Exposes CRUD operations for the **MessageReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageReplies
    * const messageReplies = await prisma.messageReply.findMany()
    * ```
    */
  get messageReply(): Prisma.MessageReplyDelegate<ExtArgs>;

  /**
   * `prisma.groupMessageReply`: Exposes CRUD operations for the **GroupMessageReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMessageReplies
    * const groupMessageReplies = await prisma.groupMessageReply.findMany()
    * ```
    */
  get groupMessageReply(): Prisma.GroupMessageReplyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Message: 'Message',
    Group: 'Group',
    GroupMember: 'GroupMember',
    GroupMessage: 'GroupMessage',
    MessageReply: 'MessageReply',
    GroupMessageReply: 'GroupMessageReply'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'message' | 'group' | 'groupMember' | 'groupMessage' | 'messageReply' | 'groupMessageReply'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      GroupMessage: {
        payload: Prisma.$GroupMessagePayload<ExtArgs>
        fields: Prisma.GroupMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          findFirst: {
            args: Prisma.GroupMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          findMany: {
            args: Prisma.GroupMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>[]
          }
          create: {
            args: Prisma.GroupMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          createMany: {
            args: Prisma.GroupMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          update: {
            args: Prisma.GroupMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          deleteMany: {
            args: Prisma.GroupMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessagePayload>
          }
          aggregate: {
            args: Prisma.GroupMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupMessage>
          }
          groupBy: {
            args: Prisma.GroupMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupMessageCountAggregateOutputType> | number
          }
        }
      }
      MessageReply: {
        payload: Prisma.$MessageReplyPayload<ExtArgs>
        fields: Prisma.MessageReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageReplyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageReplyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>
          }
          findFirst: {
            args: Prisma.MessageReplyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageReplyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>
          }
          findMany: {
            args: Prisma.MessageReplyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>[]
          }
          create: {
            args: Prisma.MessageReplyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>
          }
          createMany: {
            args: Prisma.MessageReplyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageReplyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>
          }
          update: {
            args: Prisma.MessageReplyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>
          }
          deleteMany: {
            args: Prisma.MessageReplyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageReplyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageReplyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageReplyPayload>
          }
          aggregate: {
            args: Prisma.MessageReplyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessageReply>
          }
          groupBy: {
            args: Prisma.MessageReplyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageReplyCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageReplyCountAggregateOutputType> | number
          }
        }
      }
      GroupMessageReply: {
        payload: Prisma.$GroupMessageReplyPayload<ExtArgs>
        fields: Prisma.GroupMessageReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMessageReplyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMessageReplyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>
          }
          findFirst: {
            args: Prisma.GroupMessageReplyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMessageReplyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>
          }
          findMany: {
            args: Prisma.GroupMessageReplyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>[]
          }
          create: {
            args: Prisma.GroupMessageReplyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>
          }
          createMany: {
            args: Prisma.GroupMessageReplyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupMessageReplyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>
          }
          update: {
            args: Prisma.GroupMessageReplyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>
          }
          deleteMany: {
            args: Prisma.GroupMessageReplyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMessageReplyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupMessageReplyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupMessageReplyPayload>
          }
          aggregate: {
            args: Prisma.GroupMessageReplyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupMessageReply>
          }
          groupBy: {
            args: Prisma.GroupMessageReplyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupMessageReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMessageReplyCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupMessageReplyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    receivedMessages: number
    replies: number
    groupMembers: number
    groupMessage: number
    groupReplies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    replies?: boolean | UserCountOutputTypeCountRepliesArgs
    groupMembers?: boolean | UserCountOutputTypeCountGroupMembersArgs
    groupMessage?: boolean | UserCountOutputTypeCountGroupMessageArgs
    groupReplies?: boolean | UserCountOutputTypeCountGroupRepliesArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageReplyWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupMessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupRepliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMessageReplyWhereInput
  }



  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    replies: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    replies?: boolean | MessageCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageReplyWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    messages: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    messages?: boolean | GroupCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMessageWhereInput
  }



  /**
   * Count Type GroupMessageCountOutputType
   */

  export type GroupMessageCountOutputType = {
    replies: number
  }

  export type GroupMessageCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    replies?: boolean | GroupMessageCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes

  /**
   * GroupMessageCountOutputType without action
   */
  export type GroupMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageCountOutputType
     */
    select?: GroupMessageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupMessageCountOutputType without action
   */
  export type GroupMessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMessageReplyWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    authId: string | null
    picture: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    authId: string | null
    picture: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    authId: number
    picture: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    authId?: true
    picture?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    authId?: true
    picture?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    authId?: true
    picture?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    authId: string
    picture: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    authId?: boolean
    picture?: boolean
    createdAt?: boolean
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    groupMessage?: boolean | User$groupMessageArgs<ExtArgs>
    groupReplies?: boolean | User$groupRepliesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    authId?: boolean
    picture?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    groupMembers?: boolean | User$groupMembersArgs<ExtArgs>
    groupMessage?: boolean | User$groupMessageArgs<ExtArgs>
    groupReplies?: boolean | User$groupRepliesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      replies: Prisma.$MessageReplyPayload<ExtArgs>[]
      groupMembers: Prisma.$GroupMemberPayload<ExtArgs>[]
      groupMessage: Prisma.$GroupMessagePayload<ExtArgs>[]
      groupReplies: Prisma.$GroupMessageReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      username: string
      authId: string
      picture: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    replies<T extends User$repliesArgs<ExtArgs> = {}>(args?: Subset<T, User$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    groupMembers<T extends User$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    groupMessage<T extends User$groupMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$groupMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    groupReplies<T extends User$groupRepliesArgs<ExtArgs> = {}>(args?: Subset<T, User$groupRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly authId: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * User.replies
   */
  export type User$repliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    where?: MessageReplyWhereInput
    orderBy?: MessageReplyOrderByWithRelationInput | MessageReplyOrderByWithRelationInput[]
    cursor?: MessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReplyScalarFieldEnum | MessageReplyScalarFieldEnum[]
  }


  /**
   * User.groupMembers
   */
  export type User$groupMembersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }


  /**
   * User.groupMessage
   */
  export type User$groupMessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    where?: GroupMessageWhereInput
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    cursor?: GroupMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }


  /**
   * User.groupReplies
   */
  export type User$groupRepliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    where?: GroupMessageReplyWhereInput
    orderBy?: GroupMessageReplyOrderByWithRelationInput | GroupMessageReplyOrderByWithRelationInput[]
    cursor?: GroupMessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMessageReplyScalarFieldEnum | GroupMessageReplyScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    recieverId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    recieverId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    recieverId: number
    content: number
    createdAt: number
    updatedAt: number
    upvotes: number
    downvotes: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    recieverId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    recieverId: string
    content: string
    createdAt: Date
    updatedAt: Date
    upvotes: string[]
    downvotes: string[]
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    recieverId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reciever?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    recieverId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    reciever?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      reciever: Prisma.$UserPayload<ExtArgs>
      replies: Prisma.$MessageReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      senderId: string
      recieverId: string
      content: string
      createdAt: Date
      updatedAt: Date
      upvotes: string[]
      downvotes: string[]
    }, ExtArgs["result"]["message"]>
    composites: {}
  }


  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageCreateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>
    ): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reciever<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    replies<T extends Message$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly recieverId: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly upvotes: FieldRef<"Message", 'String[]'>
    readonly downvotes: FieldRef<"Message", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }


  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message.replies
   */
  export type Message$repliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    where?: MessageReplyWhereInput
    orderBy?: MessageReplyOrderByWithRelationInput | MessageReplyOrderByWithRelationInput[]
    cursor?: MessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageReplyScalarFieldEnum | MessageReplyScalarFieldEnum[]
  }


  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude<ExtArgs> | null
  }



  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    members?: boolean | Group$membersArgs<ExtArgs>
    messages?: boolean | Group$messagesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    members?: boolean | Group$membersArgs<ExtArgs>
    messages?: boolean | Group$messagesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
      messages: Prisma.$GroupMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends Group$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Group$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }


  /**
   * Group.messages
   */
  export type Group$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    where?: GroupMessageWhereInput
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    cursor?: GroupMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }


  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    createdAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    createdAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    createdAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    createdAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    createdAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    createdAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    userId: string
    groupId: string
    createdAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
  }

  export type GroupMemberInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }


  export type $GroupMemberPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      groupId: string
      createdAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }


  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupMemberFindManyArgs, 'select' | 'include'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
    **/
    create<T extends GroupMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupMembers.
     *     @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     *     @example
     *     // Create many GroupMembers
     *     const groupMember = await prisma.groupMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
    **/
    delete<T extends GroupMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GroupMember model
   */ 
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly createdAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }


  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }


  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }


  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }


  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
  }


  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }


  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
  }


  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }



  /**
   * Model GroupMessage
   */

  export type AggregateGroupMessage = {
    _count: GroupMessageCountAggregateOutputType | null
    _min: GroupMessageMinAggregateOutputType | null
    _max: GroupMessageMaxAggregateOutputType | null
  }

  export type GroupMessageMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMessageMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMessageCountAggregateOutputType = {
    id: number
    groupId: number
    senderId: number
    content: number
    createdAt: number
    updatedAt: number
    upvotes: number
    downvotes: number
    _all: number
  }


  export type GroupMessageMinAggregateInputType = {
    id?: true
    groupId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMessageMaxAggregateInputType = {
    id?: true
    groupId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMessageCountAggregateInputType = {
    id?: true
    groupId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    _all?: true
  }

  export type GroupMessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMessage to aggregate.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMessages
    **/
    _count?: true | GroupMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMessageMaxAggregateInputType
  }

  export type GetGroupMessageAggregateType<T extends GroupMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMessage[P]>
      : GetScalarType<T[P], AggregateGroupMessage[P]>
  }




  export type GroupMessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMessageWhereInput
    orderBy?: GroupMessageOrderByWithAggregationInput | GroupMessageOrderByWithAggregationInput[]
    by: GroupMessageScalarFieldEnum[] | GroupMessageScalarFieldEnum
    having?: GroupMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMessageCountAggregateInputType | true
    _min?: GroupMessageMinAggregateInputType
    _max?: GroupMessageMaxAggregateInputType
  }

  export type GroupMessageGroupByOutputType = {
    id: string
    groupId: string
    senderId: string
    content: string
    createdAt: Date
    updatedAt: Date
    upvotes: string[]
    downvotes: string[]
    _count: GroupMessageCountAggregateOutputType | null
    _min: GroupMessageMinAggregateOutputType | null
    _max: GroupMessageMaxAggregateOutputType | null
  }

  type GetGroupMessageGroupByPayload<T extends GroupMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMessageGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMessageGroupByOutputType[P]>
        }
      >
    >


  export type GroupMessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | GroupMessage$repliesArgs<ExtArgs>
    _count?: boolean | GroupMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMessage"]>

  export type GroupMessageSelectScalar = {
    id?: boolean
    groupId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
  }

  export type GroupMessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | GroupMessage$repliesArgs<ExtArgs>
    _count?: boolean | GroupMessageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupMessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GroupMessage"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      replies: Prisma.$GroupMessageReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      groupId: string
      senderId: string
      content: string
      createdAt: Date
      updatedAt: Date
      upvotes: string[]
      downvotes: string[]
    }, ExtArgs["result"]["groupMessage"]>
    composites: {}
  }


  type GroupMessageGetPayload<S extends boolean | null | undefined | GroupMessageDefaultArgs> = $Result.GetResult<Prisma.$GroupMessagePayload, S>

  type GroupMessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupMessageFindManyArgs, 'select' | 'include'> & {
      select?: GroupMessageCountAggregateInputType | true
    }

  export interface GroupMessageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMessage'], meta: { name: 'GroupMessage' } }
    /**
     * Find zero or one GroupMessage that matches the filter.
     * @param {GroupMessageFindUniqueArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupMessageFindUniqueOrThrowArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageFindFirstArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageFindFirstArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageFindFirstOrThrowArgs} args - Arguments to find a GroupMessage
     * @example
     * // Get one GroupMessage
     * const groupMessage = await prisma.groupMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMessages
     * const groupMessages = await prisma.groupMessage.findMany()
     * 
     * // Get first 10 GroupMessages
     * const groupMessages = await prisma.groupMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMessageWithIdOnly = await prisma.groupMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupMessage.
     * @param {GroupMessageCreateArgs} args - Arguments to create a GroupMessage.
     * @example
     * // Create one GroupMessage
     * const GroupMessage = await prisma.groupMessage.create({
     *   data: {
     *     // ... data to create a GroupMessage
     *   }
     * })
     * 
    **/
    create<T extends GroupMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageCreateArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupMessages.
     *     @param {GroupMessageCreateManyArgs} args - Arguments to create many GroupMessages.
     *     @example
     *     // Create many GroupMessages
     *     const groupMessage = await prisma.groupMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMessage.
     * @param {GroupMessageDeleteArgs} args - Arguments to delete one GroupMessage.
     * @example
     * // Delete one GroupMessage
     * const GroupMessage = await prisma.groupMessage.delete({
     *   where: {
     *     // ... filter to delete one GroupMessage
     *   }
     * })
     * 
    **/
    delete<T extends GroupMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageDeleteArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupMessage.
     * @param {GroupMessageUpdateArgs} args - Arguments to update one GroupMessage.
     * @example
     * // Update one GroupMessage
     * const groupMessage = await prisma.groupMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageUpdateArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupMessages.
     * @param {GroupMessageDeleteManyArgs} args - Arguments to filter GroupMessages to delete.
     * @example
     * // Delete a few GroupMessages
     * const { count } = await prisma.groupMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMessages
     * const groupMessage = await prisma.groupMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMessage.
     * @param {GroupMessageUpsertArgs} args - Arguments to update or create a GroupMessage.
     * @example
     * // Update or create a GroupMessage
     * const groupMessage = await prisma.groupMessage.upsert({
     *   create: {
     *     // ... data to create a GroupMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMessage we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageUpsertArgs<ExtArgs>>
    ): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GroupMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageCountArgs} args - Arguments to filter GroupMessages to count.
     * @example
     * // Count the number of GroupMessages
     * const count = await prisma.groupMessage.count({
     *   where: {
     *     // ... the filter for the GroupMessages we want to count
     *   }
     * })
    **/
    count<T extends GroupMessageCountArgs>(
      args?: Subset<T, GroupMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMessageAggregateArgs>(args: Subset<T, GroupMessageAggregateArgs>): Prisma.PrismaPromise<GetGroupMessageAggregateType<T>>

    /**
     * Group by GroupMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMessageGroupByArgs['orderBy'] }
        : { orderBy?: GroupMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMessage model
   */
  readonly fields: GroupMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    replies<T extends GroupMessage$repliesArgs<ExtArgs> = {}>(args?: Subset<T, GroupMessage$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GroupMessage model
   */ 
  interface GroupMessageFieldRefs {
    readonly id: FieldRef<"GroupMessage", 'String'>
    readonly groupId: FieldRef<"GroupMessage", 'String'>
    readonly senderId: FieldRef<"GroupMessage", 'String'>
    readonly content: FieldRef<"GroupMessage", 'String'>
    readonly createdAt: FieldRef<"GroupMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupMessage", 'DateTime'>
    readonly upvotes: FieldRef<"GroupMessage", 'String[]'>
    readonly downvotes: FieldRef<"GroupMessage", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * GroupMessage findUnique
   */
  export type GroupMessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where: GroupMessageWhereUniqueInput
  }


  /**
   * GroupMessage findUniqueOrThrow
   */
  export type GroupMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where: GroupMessageWhereUniqueInput
  }


  /**
   * GroupMessage findFirst
   */
  export type GroupMessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMessages.
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMessages.
     */
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }


  /**
   * GroupMessage findFirstOrThrow
   */
  export type GroupMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessage to fetch.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMessages.
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMessages.
     */
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }


  /**
   * GroupMessage findMany
   */
  export type GroupMessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessages to fetch.
     */
    where?: GroupMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessages to fetch.
     */
    orderBy?: GroupMessageOrderByWithRelationInput | GroupMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMessages.
     */
    cursor?: GroupMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessages.
     */
    skip?: number
    distinct?: GroupMessageScalarFieldEnum | GroupMessageScalarFieldEnum[]
  }


  /**
   * GroupMessage create
   */
  export type GroupMessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMessage.
     */
    data: XOR<GroupMessageCreateInput, GroupMessageUncheckedCreateInput>
  }


  /**
   * GroupMessage createMany
   */
  export type GroupMessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMessages.
     */
    data: GroupMessageCreateManyInput | GroupMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GroupMessage update
   */
  export type GroupMessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMessage.
     */
    data: XOR<GroupMessageUpdateInput, GroupMessageUncheckedUpdateInput>
    /**
     * Choose, which GroupMessage to update.
     */
    where: GroupMessageWhereUniqueInput
  }


  /**
   * GroupMessage updateMany
   */
  export type GroupMessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMessages.
     */
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyInput>
    /**
     * Filter which GroupMessages to update
     */
    where?: GroupMessageWhereInput
  }


  /**
   * GroupMessage upsert
   */
  export type GroupMessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMessage to update in case it exists.
     */
    where: GroupMessageWhereUniqueInput
    /**
     * In case the GroupMessage found by the `where` argument doesn't exist, create a new GroupMessage with this data.
     */
    create: XOR<GroupMessageCreateInput, GroupMessageUncheckedCreateInput>
    /**
     * In case the GroupMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMessageUpdateInput, GroupMessageUncheckedUpdateInput>
  }


  /**
   * GroupMessage delete
   */
  export type GroupMessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
    /**
     * Filter which GroupMessage to delete.
     */
    where: GroupMessageWhereUniqueInput
  }


  /**
   * GroupMessage deleteMany
   */
  export type GroupMessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMessages to delete
     */
    where?: GroupMessageWhereInput
  }


  /**
   * GroupMessage.replies
   */
  export type GroupMessage$repliesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    where?: GroupMessageReplyWhereInput
    orderBy?: GroupMessageReplyOrderByWithRelationInput | GroupMessageReplyOrderByWithRelationInput[]
    cursor?: GroupMessageReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMessageReplyScalarFieldEnum | GroupMessageReplyScalarFieldEnum[]
  }


  /**
   * GroupMessage without action
   */
  export type GroupMessageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessage
     */
    select?: GroupMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageInclude<ExtArgs> | null
  }



  /**
   * Model MessageReply
   */

  export type AggregateMessageReply = {
    _count: MessageReplyCountAggregateOutputType | null
    _min: MessageReplyMinAggregateOutputType | null
    _max: MessageReplyMaxAggregateOutputType | null
  }

  export type MessageReplyMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageReplyMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageReplyCountAggregateOutputType = {
    id: number
    messageId: number
    senderId: number
    content: number
    createdAt: number
    updatedAt: number
    upvotes: number
    downvotes: number
    _all: number
  }


  export type MessageReplyMinAggregateInputType = {
    id?: true
    messageId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageReplyMaxAggregateInputType = {
    id?: true
    messageId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageReplyCountAggregateInputType = {
    id?: true
    messageId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    _all?: true
  }

  export type MessageReplyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReply to aggregate.
     */
    where?: MessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReplies to fetch.
     */
    orderBy?: MessageReplyOrderByWithRelationInput | MessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageReplies
    **/
    _count?: true | MessageReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageReplyMaxAggregateInputType
  }

  export type GetMessageReplyAggregateType<T extends MessageReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageReply[P]>
      : GetScalarType<T[P], AggregateMessageReply[P]>
  }




  export type MessageReplyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageReplyWhereInput
    orderBy?: MessageReplyOrderByWithAggregationInput | MessageReplyOrderByWithAggregationInput[]
    by: MessageReplyScalarFieldEnum[] | MessageReplyScalarFieldEnum
    having?: MessageReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageReplyCountAggregateInputType | true
    _min?: MessageReplyMinAggregateInputType
    _max?: MessageReplyMaxAggregateInputType
  }

  export type MessageReplyGroupByOutputType = {
    id: string
    messageId: string
    senderId: string
    content: string
    createdAt: Date
    updatedAt: Date
    upvotes: string[]
    downvotes: string[]
    _count: MessageReplyCountAggregateOutputType | null
    _min: MessageReplyMinAggregateOutputType | null
    _max: MessageReplyMaxAggregateOutputType | null
  }

  type GetMessageReplyGroupByPayload<T extends MessageReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageReplyGroupByOutputType[P]>
            : GetScalarType<T[P], MessageReplyGroupByOutputType[P]>
        }
      >
    >


  export type MessageReplySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageReply"]>

  export type MessageReplySelectScalar = {
    id?: boolean
    messageId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
  }

  export type MessageReplyInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MessageReplyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MessageReply"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      messageId: string
      senderId: string
      content: string
      createdAt: Date
      updatedAt: Date
      upvotes: string[]
      downvotes: string[]
    }, ExtArgs["result"]["messageReply"]>
    composites: {}
  }


  type MessageReplyGetPayload<S extends boolean | null | undefined | MessageReplyDefaultArgs> = $Result.GetResult<Prisma.$MessageReplyPayload, S>

  type MessageReplyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageReplyFindManyArgs, 'select' | 'include'> & {
      select?: MessageReplyCountAggregateInputType | true
    }

  export interface MessageReplyDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageReply'], meta: { name: 'MessageReply' } }
    /**
     * Find zero or one MessageReply that matches the filter.
     * @param {MessageReplyFindUniqueArgs} args - Arguments to find a MessageReply
     * @example
     * // Get one MessageReply
     * const messageReply = await prisma.messageReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageReplyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageReplyFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MessageReply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageReplyFindUniqueOrThrowArgs} args - Arguments to find a MessageReply
     * @example
     * // Get one MessageReply
     * const messageReply = await prisma.messageReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageReplyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageReplyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MessageReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyFindFirstArgs} args - Arguments to find a MessageReply
     * @example
     * // Get one MessageReply
     * const messageReply = await prisma.messageReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageReplyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageReplyFindFirstArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MessageReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyFindFirstOrThrowArgs} args - Arguments to find a MessageReply
     * @example
     * // Get one MessageReply
     * const messageReply = await prisma.messageReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageReplyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageReplyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MessageReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageReplies
     * const messageReplies = await prisma.messageReply.findMany()
     * 
     * // Get first 10 MessageReplies
     * const messageReplies = await prisma.messageReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageReplyWithIdOnly = await prisma.messageReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageReplyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageReplyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MessageReply.
     * @param {MessageReplyCreateArgs} args - Arguments to create a MessageReply.
     * @example
     * // Create one MessageReply
     * const MessageReply = await prisma.messageReply.create({
     *   data: {
     *     // ... data to create a MessageReply
     *   }
     * })
     * 
    **/
    create<T extends MessageReplyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageReplyCreateArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MessageReplies.
     *     @param {MessageReplyCreateManyArgs} args - Arguments to create many MessageReplies.
     *     @example
     *     // Create many MessageReplies
     *     const messageReply = await prisma.messageReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageReplyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageReplyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MessageReply.
     * @param {MessageReplyDeleteArgs} args - Arguments to delete one MessageReply.
     * @example
     * // Delete one MessageReply
     * const MessageReply = await prisma.messageReply.delete({
     *   where: {
     *     // ... filter to delete one MessageReply
     *   }
     * })
     * 
    **/
    delete<T extends MessageReplyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageReplyDeleteArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MessageReply.
     * @param {MessageReplyUpdateArgs} args - Arguments to update one MessageReply.
     * @example
     * // Update one MessageReply
     * const messageReply = await prisma.messageReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageReplyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageReplyUpdateArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MessageReplies.
     * @param {MessageReplyDeleteManyArgs} args - Arguments to filter MessageReplies to delete.
     * @example
     * // Delete a few MessageReplies
     * const { count } = await prisma.messageReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageReplyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageReplyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageReplies
     * const messageReply = await prisma.messageReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageReplyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageReplyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageReply.
     * @param {MessageReplyUpsertArgs} args - Arguments to update or create a MessageReply.
     * @example
     * // Update or create a MessageReply
     * const messageReply = await prisma.messageReply.upsert({
     *   create: {
     *     // ... data to create a MessageReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageReply we want to update
     *   }
     * })
    **/
    upsert<T extends MessageReplyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageReplyUpsertArgs<ExtArgs>>
    ): Prisma__MessageReplyClient<$Result.GetResult<Prisma.$MessageReplyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyCountArgs} args - Arguments to filter MessageReplies to count.
     * @example
     * // Count the number of MessageReplies
     * const count = await prisma.messageReply.count({
     *   where: {
     *     // ... the filter for the MessageReplies we want to count
     *   }
     * })
    **/
    count<T extends MessageReplyCountArgs>(
      args?: Subset<T, MessageReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageReplyAggregateArgs>(args: Subset<T, MessageReplyAggregateArgs>): Prisma.PrismaPromise<GetMessageReplyAggregateType<T>>

    /**
     * Group by MessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageReplyGroupByArgs['orderBy'] }
        : { orderBy?: MessageReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageReply model
   */
  readonly fields: MessageReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageReplyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MessageReply model
   */ 
  interface MessageReplyFieldRefs {
    readonly id: FieldRef<"MessageReply", 'String'>
    readonly messageId: FieldRef<"MessageReply", 'String'>
    readonly senderId: FieldRef<"MessageReply", 'String'>
    readonly content: FieldRef<"MessageReply", 'String'>
    readonly createdAt: FieldRef<"MessageReply", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageReply", 'DateTime'>
    readonly upvotes: FieldRef<"MessageReply", 'String[]'>
    readonly downvotes: FieldRef<"MessageReply", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * MessageReply findUnique
   */
  export type MessageReplyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which MessageReply to fetch.
     */
    where: MessageReplyWhereUniqueInput
  }


  /**
   * MessageReply findUniqueOrThrow
   */
  export type MessageReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which MessageReply to fetch.
     */
    where: MessageReplyWhereUniqueInput
  }


  /**
   * MessageReply findFirst
   */
  export type MessageReplyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which MessageReply to fetch.
     */
    where?: MessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReplies to fetch.
     */
    orderBy?: MessageReplyOrderByWithRelationInput | MessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReplies.
     */
    cursor?: MessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReplies.
     */
    distinct?: MessageReplyScalarFieldEnum | MessageReplyScalarFieldEnum[]
  }


  /**
   * MessageReply findFirstOrThrow
   */
  export type MessageReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which MessageReply to fetch.
     */
    where?: MessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReplies to fetch.
     */
    orderBy?: MessageReplyOrderByWithRelationInput | MessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageReplies.
     */
    cursor?: MessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageReplies.
     */
    distinct?: MessageReplyScalarFieldEnum | MessageReplyScalarFieldEnum[]
  }


  /**
   * MessageReply findMany
   */
  export type MessageReplyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which MessageReplies to fetch.
     */
    where?: MessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageReplies to fetch.
     */
    orderBy?: MessageReplyOrderByWithRelationInput | MessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageReplies.
     */
    cursor?: MessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageReplies.
     */
    skip?: number
    distinct?: MessageReplyScalarFieldEnum | MessageReplyScalarFieldEnum[]
  }


  /**
   * MessageReply create
   */
  export type MessageReplyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageReply.
     */
    data: XOR<MessageReplyCreateInput, MessageReplyUncheckedCreateInput>
  }


  /**
   * MessageReply createMany
   */
  export type MessageReplyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageReplies.
     */
    data: MessageReplyCreateManyInput | MessageReplyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MessageReply update
   */
  export type MessageReplyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageReply.
     */
    data: XOR<MessageReplyUpdateInput, MessageReplyUncheckedUpdateInput>
    /**
     * Choose, which MessageReply to update.
     */
    where: MessageReplyWhereUniqueInput
  }


  /**
   * MessageReply updateMany
   */
  export type MessageReplyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageReplies.
     */
    data: XOR<MessageReplyUpdateManyMutationInput, MessageReplyUncheckedUpdateManyInput>
    /**
     * Filter which MessageReplies to update
     */
    where?: MessageReplyWhereInput
  }


  /**
   * MessageReply upsert
   */
  export type MessageReplyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageReply to update in case it exists.
     */
    where: MessageReplyWhereUniqueInput
    /**
     * In case the MessageReply found by the `where` argument doesn't exist, create a new MessageReply with this data.
     */
    create: XOR<MessageReplyCreateInput, MessageReplyUncheckedCreateInput>
    /**
     * In case the MessageReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageReplyUpdateInput, MessageReplyUncheckedUpdateInput>
  }


  /**
   * MessageReply delete
   */
  export type MessageReplyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
    /**
     * Filter which MessageReply to delete.
     */
    where: MessageReplyWhereUniqueInput
  }


  /**
   * MessageReply deleteMany
   */
  export type MessageReplyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageReplies to delete
     */
    where?: MessageReplyWhereInput
  }


  /**
   * MessageReply without action
   */
  export type MessageReplyDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageReply
     */
    select?: MessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageReplyInclude<ExtArgs> | null
  }



  /**
   * Model GroupMessageReply
   */

  export type AggregateGroupMessageReply = {
    _count: GroupMessageReplyCountAggregateOutputType | null
    _min: GroupMessageReplyMinAggregateOutputType | null
    _max: GroupMessageReplyMaxAggregateOutputType | null
  }

  export type GroupMessageReplyMinAggregateOutputType = {
    id: string | null
    groupMessageId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMessageReplyMaxAggregateOutputType = {
    id: string | null
    groupMessageId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMessageReplyCountAggregateOutputType = {
    id: number
    groupMessageId: number
    senderId: number
    content: number
    createdAt: number
    updatedAt: number
    upvotes: number
    downvotes: number
    _all: number
  }


  export type GroupMessageReplyMinAggregateInputType = {
    id?: true
    groupMessageId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMessageReplyMaxAggregateInputType = {
    id?: true
    groupMessageId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMessageReplyCountAggregateInputType = {
    id?: true
    groupMessageId?: true
    senderId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    upvotes?: true
    downvotes?: true
    _all?: true
  }

  export type GroupMessageReplyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMessageReply to aggregate.
     */
    where?: GroupMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessageReplies to fetch.
     */
    orderBy?: GroupMessageReplyOrderByWithRelationInput | GroupMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMessageReplies
    **/
    _count?: true | GroupMessageReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMessageReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMessageReplyMaxAggregateInputType
  }

  export type GetGroupMessageReplyAggregateType<T extends GroupMessageReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMessageReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMessageReply[P]>
      : GetScalarType<T[P], AggregateGroupMessageReply[P]>
  }




  export type GroupMessageReplyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMessageReplyWhereInput
    orderBy?: GroupMessageReplyOrderByWithAggregationInput | GroupMessageReplyOrderByWithAggregationInput[]
    by: GroupMessageReplyScalarFieldEnum[] | GroupMessageReplyScalarFieldEnum
    having?: GroupMessageReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMessageReplyCountAggregateInputType | true
    _min?: GroupMessageReplyMinAggregateInputType
    _max?: GroupMessageReplyMaxAggregateInputType
  }

  export type GroupMessageReplyGroupByOutputType = {
    id: string
    groupMessageId: string
    senderId: string
    content: string
    createdAt: Date
    updatedAt: Date
    upvotes: string[]
    downvotes: string[]
    _count: GroupMessageReplyCountAggregateOutputType | null
    _min: GroupMessageReplyMinAggregateOutputType | null
    _max: GroupMessageReplyMaxAggregateOutputType | null
  }

  type GetGroupMessageReplyGroupByPayload<T extends GroupMessageReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMessageReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMessageReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMessageReplyGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMessageReplyGroupByOutputType[P]>
        }
      >
    >


  export type GroupMessageReplySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupMessageId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
    groupMessage?: boolean | GroupMessageDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMessageReply"]>

  export type GroupMessageReplySelectScalar = {
    id?: boolean
    groupMessageId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    upvotes?: boolean
    downvotes?: boolean
  }

  export type GroupMessageReplyInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    groupMessage?: boolean | GroupMessageDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $GroupMessageReplyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GroupMessageReply"
    objects: {
      groupMessage: Prisma.$GroupMessagePayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      groupMessageId: string
      senderId: string
      content: string
      createdAt: Date
      updatedAt: Date
      upvotes: string[]
      downvotes: string[]
    }, ExtArgs["result"]["groupMessageReply"]>
    composites: {}
  }


  type GroupMessageReplyGetPayload<S extends boolean | null | undefined | GroupMessageReplyDefaultArgs> = $Result.GetResult<Prisma.$GroupMessageReplyPayload, S>

  type GroupMessageReplyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupMessageReplyFindManyArgs, 'select' | 'include'> & {
      select?: GroupMessageReplyCountAggregateInputType | true
    }

  export interface GroupMessageReplyDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMessageReply'], meta: { name: 'GroupMessageReply' } }
    /**
     * Find zero or one GroupMessageReply that matches the filter.
     * @param {GroupMessageReplyFindUniqueArgs} args - Arguments to find a GroupMessageReply
     * @example
     * // Get one GroupMessageReply
     * const groupMessageReply = await prisma.groupMessageReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMessageReplyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageReplyFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupMessageReply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupMessageReplyFindUniqueOrThrowArgs} args - Arguments to find a GroupMessageReply
     * @example
     * // Get one GroupMessageReply
     * const groupMessageReply = await prisma.groupMessageReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupMessageReplyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageReplyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupMessageReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyFindFirstArgs} args - Arguments to find a GroupMessageReply
     * @example
     * // Get one GroupMessageReply
     * const groupMessageReply = await prisma.groupMessageReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMessageReplyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageReplyFindFirstArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupMessageReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyFindFirstOrThrowArgs} args - Arguments to find a GroupMessageReply
     * @example
     * // Get one GroupMessageReply
     * const groupMessageReply = await prisma.groupMessageReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupMessageReplyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageReplyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupMessageReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMessageReplies
     * const groupMessageReplies = await prisma.groupMessageReply.findMany()
     * 
     * // Get first 10 GroupMessageReplies
     * const groupMessageReplies = await prisma.groupMessageReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMessageReplyWithIdOnly = await prisma.groupMessageReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupMessageReplyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageReplyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupMessageReply.
     * @param {GroupMessageReplyCreateArgs} args - Arguments to create a GroupMessageReply.
     * @example
     * // Create one GroupMessageReply
     * const GroupMessageReply = await prisma.groupMessageReply.create({
     *   data: {
     *     // ... data to create a GroupMessageReply
     *   }
     * })
     * 
    **/
    create<T extends GroupMessageReplyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageReplyCreateArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupMessageReplies.
     *     @param {GroupMessageReplyCreateManyArgs} args - Arguments to create many GroupMessageReplies.
     *     @example
     *     // Create many GroupMessageReplies
     *     const groupMessageReply = await prisma.groupMessageReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMessageReplyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageReplyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMessageReply.
     * @param {GroupMessageReplyDeleteArgs} args - Arguments to delete one GroupMessageReply.
     * @example
     * // Delete one GroupMessageReply
     * const GroupMessageReply = await prisma.groupMessageReply.delete({
     *   where: {
     *     // ... filter to delete one GroupMessageReply
     *   }
     * })
     * 
    **/
    delete<T extends GroupMessageReplyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageReplyDeleteArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupMessageReply.
     * @param {GroupMessageReplyUpdateArgs} args - Arguments to update one GroupMessageReply.
     * @example
     * // Update one GroupMessageReply
     * const groupMessageReply = await prisma.groupMessageReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMessageReplyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageReplyUpdateArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupMessageReplies.
     * @param {GroupMessageReplyDeleteManyArgs} args - Arguments to filter GroupMessageReplies to delete.
     * @example
     * // Delete a few GroupMessageReplies
     * const { count } = await prisma.groupMessageReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMessageReplyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMessageReplyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMessageReplies
     * const groupMessageReply = await prisma.groupMessageReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMessageReplyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageReplyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMessageReply.
     * @param {GroupMessageReplyUpsertArgs} args - Arguments to update or create a GroupMessageReply.
     * @example
     * // Update or create a GroupMessageReply
     * const groupMessageReply = await prisma.groupMessageReply.upsert({
     *   create: {
     *     // ... data to create a GroupMessageReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMessageReply we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMessageReplyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMessageReplyUpsertArgs<ExtArgs>>
    ): Prisma__GroupMessageReplyClient<$Result.GetResult<Prisma.$GroupMessageReplyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GroupMessageReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyCountArgs} args - Arguments to filter GroupMessageReplies to count.
     * @example
     * // Count the number of GroupMessageReplies
     * const count = await prisma.groupMessageReply.count({
     *   where: {
     *     // ... the filter for the GroupMessageReplies we want to count
     *   }
     * })
    **/
    count<T extends GroupMessageReplyCountArgs>(
      args?: Subset<T, GroupMessageReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMessageReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMessageReplyAggregateArgs>(args: Subset<T, GroupMessageReplyAggregateArgs>): Prisma.PrismaPromise<GetGroupMessageReplyAggregateType<T>>

    /**
     * Group by GroupMessageReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMessageReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMessageReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMessageReplyGroupByArgs['orderBy'] }
        : { orderBy?: GroupMessageReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMessageReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMessageReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMessageReply model
   */
  readonly fields: GroupMessageReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMessageReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMessageReplyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    groupMessage<T extends GroupMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupMessageDefaultArgs<ExtArgs>>): Prisma__GroupMessageClient<$Result.GetResult<Prisma.$GroupMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GroupMessageReply model
   */ 
  interface GroupMessageReplyFieldRefs {
    readonly id: FieldRef<"GroupMessageReply", 'String'>
    readonly groupMessageId: FieldRef<"GroupMessageReply", 'String'>
    readonly senderId: FieldRef<"GroupMessageReply", 'String'>
    readonly content: FieldRef<"GroupMessageReply", 'String'>
    readonly createdAt: FieldRef<"GroupMessageReply", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupMessageReply", 'DateTime'>
    readonly upvotes: FieldRef<"GroupMessageReply", 'String[]'>
    readonly downvotes: FieldRef<"GroupMessageReply", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * GroupMessageReply findUnique
   */
  export type GroupMessageReplyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessageReply to fetch.
     */
    where: GroupMessageReplyWhereUniqueInput
  }


  /**
   * GroupMessageReply findUniqueOrThrow
   */
  export type GroupMessageReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessageReply to fetch.
     */
    where: GroupMessageReplyWhereUniqueInput
  }


  /**
   * GroupMessageReply findFirst
   */
  export type GroupMessageReplyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessageReply to fetch.
     */
    where?: GroupMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessageReplies to fetch.
     */
    orderBy?: GroupMessageReplyOrderByWithRelationInput | GroupMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMessageReplies.
     */
    cursor?: GroupMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMessageReplies.
     */
    distinct?: GroupMessageReplyScalarFieldEnum | GroupMessageReplyScalarFieldEnum[]
  }


  /**
   * GroupMessageReply findFirstOrThrow
   */
  export type GroupMessageReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessageReply to fetch.
     */
    where?: GroupMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessageReplies to fetch.
     */
    orderBy?: GroupMessageReplyOrderByWithRelationInput | GroupMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMessageReplies.
     */
    cursor?: GroupMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessageReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMessageReplies.
     */
    distinct?: GroupMessageReplyScalarFieldEnum | GroupMessageReplyScalarFieldEnum[]
  }


  /**
   * GroupMessageReply findMany
   */
  export type GroupMessageReplyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * Filter, which GroupMessageReplies to fetch.
     */
    where?: GroupMessageReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMessageReplies to fetch.
     */
    orderBy?: GroupMessageReplyOrderByWithRelationInput | GroupMessageReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMessageReplies.
     */
    cursor?: GroupMessageReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMessageReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMessageReplies.
     */
    skip?: number
    distinct?: GroupMessageReplyScalarFieldEnum | GroupMessageReplyScalarFieldEnum[]
  }


  /**
   * GroupMessageReply create
   */
  export type GroupMessageReplyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMessageReply.
     */
    data: XOR<GroupMessageReplyCreateInput, GroupMessageReplyUncheckedCreateInput>
  }


  /**
   * GroupMessageReply createMany
   */
  export type GroupMessageReplyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMessageReplies.
     */
    data: GroupMessageReplyCreateManyInput | GroupMessageReplyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GroupMessageReply update
   */
  export type GroupMessageReplyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMessageReply.
     */
    data: XOR<GroupMessageReplyUpdateInput, GroupMessageReplyUncheckedUpdateInput>
    /**
     * Choose, which GroupMessageReply to update.
     */
    where: GroupMessageReplyWhereUniqueInput
  }


  /**
   * GroupMessageReply updateMany
   */
  export type GroupMessageReplyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMessageReplies.
     */
    data: XOR<GroupMessageReplyUpdateManyMutationInput, GroupMessageReplyUncheckedUpdateManyInput>
    /**
     * Filter which GroupMessageReplies to update
     */
    where?: GroupMessageReplyWhereInput
  }


  /**
   * GroupMessageReply upsert
   */
  export type GroupMessageReplyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMessageReply to update in case it exists.
     */
    where: GroupMessageReplyWhereUniqueInput
    /**
     * In case the GroupMessageReply found by the `where` argument doesn't exist, create a new GroupMessageReply with this data.
     */
    create: XOR<GroupMessageReplyCreateInput, GroupMessageReplyUncheckedCreateInput>
    /**
     * In case the GroupMessageReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMessageReplyUpdateInput, GroupMessageReplyUncheckedUpdateInput>
  }


  /**
   * GroupMessageReply delete
   */
  export type GroupMessageReplyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
    /**
     * Filter which GroupMessageReply to delete.
     */
    where: GroupMessageReplyWhereUniqueInput
  }


  /**
   * GroupMessageReply deleteMany
   */
  export type GroupMessageReplyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMessageReplies to delete
     */
    where?: GroupMessageReplyWhereInput
  }


  /**
   * GroupMessageReply without action
   */
  export type GroupMessageReplyDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMessageReply
     */
    select?: GroupMessageReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMessageReplyInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    authId: 'authId',
    picture: 'picture',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    recieverId: 'recieverId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    createdAt: 'createdAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const GroupMessageScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes'
  };

  export type GroupMessageScalarFieldEnum = (typeof GroupMessageScalarFieldEnum)[keyof typeof GroupMessageScalarFieldEnum]


  export const MessageReplyScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes'
  };

  export type MessageReplyScalarFieldEnum = (typeof MessageReplyScalarFieldEnum)[keyof typeof MessageReplyScalarFieldEnum]


  export const GroupMessageReplyScalarFieldEnum: {
    id: 'id',
    groupMessageId: 'groupMessageId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    upvotes: 'upvotes',
    downvotes: 'downvotes'
  };

  export type GroupMessageReplyScalarFieldEnum = (typeof GroupMessageReplyScalarFieldEnum)[keyof typeof GroupMessageReplyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    authId?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    replies?: MessageReplyListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    groupMessage?: GroupMessageListRelationFilter
    groupReplies?: GroupMessageReplyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    authId?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    replies?: MessageReplyOrderByRelationAggregateInput
    groupMembers?: GroupMemberOrderByRelationAggregateInput
    groupMessage?: GroupMessageOrderByRelationAggregateInput
    groupReplies?: GroupMessageReplyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    authId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    picture?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    replies?: MessageReplyListRelationFilter
    groupMembers?: GroupMemberListRelationFilter
    groupMessage?: GroupMessageListRelationFilter
    groupReplies?: GroupMessageReplyListRelationFilter
  }, "id" | "username" | "authId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    authId?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    authId?: StringWithAggregatesFilter<"User"> | string
    picture?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    recieverId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    upvotes?: StringNullableListFilter<"Message">
    downvotes?: StringNullableListFilter<"Message">
    sender?: XOR<UserRelationFilter, UserWhereInput>
    reciever?: XOR<UserRelationFilter, UserWhereInput>
    replies?: MessageReplyListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    sender?: UserOrderByWithRelationInput
    reciever?: UserOrderByWithRelationInput
    replies?: MessageReplyOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: StringFilter<"Message"> | string
    recieverId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    upvotes?: StringNullableListFilter<"Message">
    downvotes?: StringNullableListFilter<"Message">
    sender?: XOR<UserRelationFilter, UserWhereInput>
    reciever?: XOR<UserRelationFilter, UserWhereInput>
    replies?: MessageReplyListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    recieverId?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    upvotes?: StringNullableListFilter<"Message">
    downvotes?: StringNullableListFilter<"Message">
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    messages?: GroupMessageListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    members?: GroupMemberOrderByRelationAggregateInput
    messages?: GroupMessageOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
    messages?: GroupMessageListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    userId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    group?: XOR<GroupRelationFilter, GroupWhereInput>
  }, "id">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    groupId?: StringWithAggregatesFilter<"GroupMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type GroupMessageWhereInput = {
    AND?: GroupMessageWhereInput | GroupMessageWhereInput[]
    OR?: GroupMessageWhereInput[]
    NOT?: GroupMessageWhereInput | GroupMessageWhereInput[]
    id?: StringFilter<"GroupMessage"> | string
    groupId?: StringFilter<"GroupMessage"> | string
    senderId?: StringFilter<"GroupMessage"> | string
    content?: StringFilter<"GroupMessage"> | string
    createdAt?: DateTimeFilter<"GroupMessage"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMessage"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessage">
    downvotes?: StringNullableListFilter<"GroupMessage">
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    sender?: XOR<UserRelationFilter, UserWhereInput>
    replies?: GroupMessageReplyListRelationFilter
  }

  export type GroupMessageOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    group?: GroupOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    replies?: GroupMessageReplyOrderByRelationAggregateInput
  }

  export type GroupMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMessageWhereInput | GroupMessageWhereInput[]
    OR?: GroupMessageWhereInput[]
    NOT?: GroupMessageWhereInput | GroupMessageWhereInput[]
    groupId?: StringFilter<"GroupMessage"> | string
    senderId?: StringFilter<"GroupMessage"> | string
    content?: StringFilter<"GroupMessage"> | string
    createdAt?: DateTimeFilter<"GroupMessage"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMessage"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessage">
    downvotes?: StringNullableListFilter<"GroupMessage">
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    sender?: XOR<UserRelationFilter, UserWhereInput>
    replies?: GroupMessageReplyListRelationFilter
  }, "id">

  export type GroupMessageOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    _count?: GroupMessageCountOrderByAggregateInput
    _max?: GroupMessageMaxOrderByAggregateInput
    _min?: GroupMessageMinOrderByAggregateInput
  }

  export type GroupMessageScalarWhereWithAggregatesInput = {
    AND?: GroupMessageScalarWhereWithAggregatesInput | GroupMessageScalarWhereWithAggregatesInput[]
    OR?: GroupMessageScalarWhereWithAggregatesInput[]
    NOT?: GroupMessageScalarWhereWithAggregatesInput | GroupMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMessage"> | string
    groupId?: StringWithAggregatesFilter<"GroupMessage"> | string
    senderId?: StringWithAggregatesFilter<"GroupMessage"> | string
    content?: StringWithAggregatesFilter<"GroupMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupMessage"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessage">
    downvotes?: StringNullableListFilter<"GroupMessage">
  }

  export type MessageReplyWhereInput = {
    AND?: MessageReplyWhereInput | MessageReplyWhereInput[]
    OR?: MessageReplyWhereInput[]
    NOT?: MessageReplyWhereInput | MessageReplyWhereInput[]
    id?: StringFilter<"MessageReply"> | string
    messageId?: StringFilter<"MessageReply"> | string
    senderId?: StringFilter<"MessageReply"> | string
    content?: StringFilter<"MessageReply"> | string
    createdAt?: DateTimeFilter<"MessageReply"> | Date | string
    updatedAt?: DateTimeFilter<"MessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"MessageReply">
    downvotes?: StringNullableListFilter<"MessageReply">
    message?: XOR<MessageRelationFilter, MessageWhereInput>
    sender?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageReplyOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    message?: MessageOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type MessageReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageReplyWhereInput | MessageReplyWhereInput[]
    OR?: MessageReplyWhereInput[]
    NOT?: MessageReplyWhereInput | MessageReplyWhereInput[]
    messageId?: StringFilter<"MessageReply"> | string
    senderId?: StringFilter<"MessageReply"> | string
    content?: StringFilter<"MessageReply"> | string
    createdAt?: DateTimeFilter<"MessageReply"> | Date | string
    updatedAt?: DateTimeFilter<"MessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"MessageReply">
    downvotes?: StringNullableListFilter<"MessageReply">
    message?: XOR<MessageRelationFilter, MessageWhereInput>
    sender?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessageReplyOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    _count?: MessageReplyCountOrderByAggregateInput
    _max?: MessageReplyMaxOrderByAggregateInput
    _min?: MessageReplyMinOrderByAggregateInput
  }

  export type MessageReplyScalarWhereWithAggregatesInput = {
    AND?: MessageReplyScalarWhereWithAggregatesInput | MessageReplyScalarWhereWithAggregatesInput[]
    OR?: MessageReplyScalarWhereWithAggregatesInput[]
    NOT?: MessageReplyScalarWhereWithAggregatesInput | MessageReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageReply"> | string
    messageId?: StringWithAggregatesFilter<"MessageReply"> | string
    senderId?: StringWithAggregatesFilter<"MessageReply"> | string
    content?: StringWithAggregatesFilter<"MessageReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MessageReply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"MessageReply">
    downvotes?: StringNullableListFilter<"MessageReply">
  }

  export type GroupMessageReplyWhereInput = {
    AND?: GroupMessageReplyWhereInput | GroupMessageReplyWhereInput[]
    OR?: GroupMessageReplyWhereInput[]
    NOT?: GroupMessageReplyWhereInput | GroupMessageReplyWhereInput[]
    id?: StringFilter<"GroupMessageReply"> | string
    groupMessageId?: StringFilter<"GroupMessageReply"> | string
    senderId?: StringFilter<"GroupMessageReply"> | string
    content?: StringFilter<"GroupMessageReply"> | string
    createdAt?: DateTimeFilter<"GroupMessageReply"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessageReply">
    downvotes?: StringNullableListFilter<"GroupMessageReply">
    groupMessage?: XOR<GroupMessageRelationFilter, GroupMessageWhereInput>
    sender?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GroupMessageReplyOrderByWithRelationInput = {
    id?: SortOrder
    groupMessageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    groupMessage?: GroupMessageOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type GroupMessageReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMessageReplyWhereInput | GroupMessageReplyWhereInput[]
    OR?: GroupMessageReplyWhereInput[]
    NOT?: GroupMessageReplyWhereInput | GroupMessageReplyWhereInput[]
    groupMessageId?: StringFilter<"GroupMessageReply"> | string
    senderId?: StringFilter<"GroupMessageReply"> | string
    content?: StringFilter<"GroupMessageReply"> | string
    createdAt?: DateTimeFilter<"GroupMessageReply"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessageReply">
    downvotes?: StringNullableListFilter<"GroupMessageReply">
    groupMessage?: XOR<GroupMessageRelationFilter, GroupMessageWhereInput>
    sender?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type GroupMessageReplyOrderByWithAggregationInput = {
    id?: SortOrder
    groupMessageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
    _count?: GroupMessageReplyCountOrderByAggregateInput
    _max?: GroupMessageReplyMaxOrderByAggregateInput
    _min?: GroupMessageReplyMinOrderByAggregateInput
  }

  export type GroupMessageReplyScalarWhereWithAggregatesInput = {
    AND?: GroupMessageReplyScalarWhereWithAggregatesInput | GroupMessageReplyScalarWhereWithAggregatesInput[]
    OR?: GroupMessageReplyScalarWhereWithAggregatesInput[]
    NOT?: GroupMessageReplyScalarWhereWithAggregatesInput | GroupMessageReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMessageReply"> | string
    groupMessageId?: StringWithAggregatesFilter<"GroupMessageReply"> | string
    senderId?: StringWithAggregatesFilter<"GroupMessageReply"> | string
    content?: StringWithAggregatesFilter<"GroupMessageReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupMessageReply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupMessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessageReply">
    downvotes?: StringNullableListFilter<"GroupMessageReply">
  }

  export type UserCreateInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyUncheckedCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageUncheckedCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUncheckedUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUncheckedUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    sender: UserCreateNestedOneWithoutSentMessagesInput
    reciever: UserCreateNestedOneWithoutReceivedMessagesInput
    replies?: MessageReplyCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    recieverId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    replies?: MessageReplyUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    reciever?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    replies?: MessageReplyUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recieverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    replies?: MessageReplyUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    recieverId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recieverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
    messages?: GroupMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    messages?: GroupMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    messages?: GroupMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembersInput
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    userId: string
    groupId: string
    createdAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    userId: string
    groupId: string
    createdAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    group: GroupCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutGroupMessageInput
    replies?: GroupMessageReplyCreateNestedManyWithoutGroupMessageInput
  }

  export type GroupMessageUncheckedCreateInput = {
    id?: string
    groupId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    replies?: GroupMessageReplyUncheckedCreateNestedManyWithoutGroupMessageInput
  }

  export type GroupMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutGroupMessageNestedInput
    replies?: GroupMessageReplyUpdateManyWithoutGroupMessageNestedInput
  }

  export type GroupMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    replies?: GroupMessageReplyUncheckedUpdateManyWithoutGroupMessageNestedInput
  }

  export type GroupMessageCreateManyInput = {
    id?: string
    groupId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
  }

  export type GroupMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
  }

  export type GroupMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
  }

  export type MessageReplyCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
    message: MessageCreateNestedOneWithoutRepliesInput
    sender: UserCreateNestedOneWithoutRepliesInput
  }

  export type MessageReplyUncheckedCreateInput = {
    id?: string
    messageId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
  }

  export type MessageReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
    message?: MessageUpdateOneRequiredWithoutRepliesNestedInput
    sender?: UserUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type MessageReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type MessageReplyCreateManyInput = {
    id?: string
    messageId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
  }

  export type MessageReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type MessageReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
    groupMessage: GroupMessageCreateNestedOneWithoutRepliesInput
    sender: UserCreateNestedOneWithoutGroupRepliesInput
  }

  export type GroupMessageReplyUncheckedCreateInput = {
    id?: string
    groupMessageId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
  }

  export type GroupMessageReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
    groupMessage?: GroupMessageUpdateOneRequiredWithoutRepliesNestedInput
    sender?: UserUpdateOneRequiredWithoutGroupRepliesNestedInput
  }

  export type GroupMessageReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyCreateManyInput = {
    id?: string
    groupMessageId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
  }

  export type GroupMessageReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageReplyListRelationFilter = {
    every?: MessageReplyWhereInput
    some?: MessageReplyWhereInput
    none?: MessageReplyWhereInput
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type GroupMessageListRelationFilter = {
    every?: GroupMessageWhereInput
    some?: GroupMessageWhereInput
    none?: GroupMessageWhereInput
  }

  export type GroupMessageReplyListRelationFilter = {
    every?: GroupMessageReplyWhereInput
    some?: GroupMessageReplyWhereInput
    none?: GroupMessageReplyWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMessageReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    authId?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    authId?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    authId?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    recieverId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMessageCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type GroupMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMessageMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageReplyCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type MessageReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageReplyMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMessageRelationFilter = {
    is?: GroupMessageWhereInput
    isNot?: GroupMessageWhereInput
  }

  export type GroupMessageReplyCountOrderByAggregateInput = {
    id?: SortOrder
    groupMessageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    upvotes?: SortOrder
    downvotes?: SortOrder
  }

  export type GroupMessageReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    groupMessageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMessageReplyMinOrderByAggregateInput = {
    id?: SortOrder
    groupMessageId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRecieverInput = {
    create?: XOR<MessageCreateWithoutRecieverInput, MessageUncheckedCreateWithoutRecieverInput> | MessageCreateWithoutRecieverInput[] | MessageUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecieverInput | MessageCreateOrConnectWithoutRecieverInput[]
    createMany?: MessageCreateManyRecieverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReplyCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageReplyCreateWithoutSenderInput, MessageReplyUncheckedCreateWithoutSenderInput> | MessageReplyCreateWithoutSenderInput[] | MessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutSenderInput | MessageReplyCreateOrConnectWithoutSenderInput[]
    createMany?: MessageReplyCreateManySenderInputEnvelope
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<GroupMessageCreateWithoutSenderInput, GroupMessageUncheckedCreateWithoutSenderInput> | GroupMessageCreateWithoutSenderInput[] | GroupMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutSenderInput | GroupMessageCreateOrConnectWithoutSenderInput[]
    createMany?: GroupMessageCreateManySenderInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type GroupMessageReplyCreateNestedManyWithoutSenderInput = {
    create?: XOR<GroupMessageReplyCreateWithoutSenderInput, GroupMessageReplyUncheckedCreateWithoutSenderInput> | GroupMessageReplyCreateWithoutSenderInput[] | GroupMessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutSenderInput | GroupMessageReplyCreateOrConnectWithoutSenderInput[]
    createMany?: GroupMessageReplyCreateManySenderInputEnvelope
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRecieverInput = {
    create?: XOR<MessageCreateWithoutRecieverInput, MessageUncheckedCreateWithoutRecieverInput> | MessageCreateWithoutRecieverInput[] | MessageUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecieverInput | MessageCreateOrConnectWithoutRecieverInput[]
    createMany?: MessageCreateManyRecieverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageReplyUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageReplyCreateWithoutSenderInput, MessageReplyUncheckedCreateWithoutSenderInput> | MessageReplyCreateWithoutSenderInput[] | MessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutSenderInput | MessageReplyCreateOrConnectWithoutSenderInput[]
    createMany?: MessageReplyCreateManySenderInputEnvelope
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<GroupMessageCreateWithoutSenderInput, GroupMessageUncheckedCreateWithoutSenderInput> | GroupMessageCreateWithoutSenderInput[] | GroupMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutSenderInput | GroupMessageCreateOrConnectWithoutSenderInput[]
    createMany?: GroupMessageCreateManySenderInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<GroupMessageReplyCreateWithoutSenderInput, GroupMessageReplyUncheckedCreateWithoutSenderInput> | GroupMessageReplyCreateWithoutSenderInput[] | GroupMessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutSenderInput | GroupMessageReplyCreateOrConnectWithoutSenderInput[]
    createMany?: GroupMessageReplyCreateManySenderInputEnvelope
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRecieverNestedInput = {
    create?: XOR<MessageCreateWithoutRecieverInput, MessageUncheckedCreateWithoutRecieverInput> | MessageCreateWithoutRecieverInput[] | MessageUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecieverInput | MessageCreateOrConnectWithoutRecieverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecieverInput | MessageUpsertWithWhereUniqueWithoutRecieverInput[]
    createMany?: MessageCreateManyRecieverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecieverInput | MessageUpdateWithWhereUniqueWithoutRecieverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecieverInput | MessageUpdateManyWithWhereWithoutRecieverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReplyUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageReplyCreateWithoutSenderInput, MessageReplyUncheckedCreateWithoutSenderInput> | MessageReplyCreateWithoutSenderInput[] | MessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutSenderInput | MessageReplyCreateOrConnectWithoutSenderInput[]
    upsert?: MessageReplyUpsertWithWhereUniqueWithoutSenderInput | MessageReplyUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageReplyCreateManySenderInputEnvelope
    set?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    disconnect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    delete?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    update?: MessageReplyUpdateWithWhereUniqueWithoutSenderInput | MessageReplyUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageReplyUpdateManyWithWhereWithoutSenderInput | MessageReplyUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageReplyScalarWhereInput | MessageReplyScalarWhereInput[]
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GroupMessageCreateWithoutSenderInput, GroupMessageUncheckedCreateWithoutSenderInput> | GroupMessageCreateWithoutSenderInput[] | GroupMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutSenderInput | GroupMessageCreateOrConnectWithoutSenderInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutSenderInput | GroupMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GroupMessageCreateManySenderInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutSenderInput | GroupMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutSenderInput | GroupMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type GroupMessageReplyUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GroupMessageReplyCreateWithoutSenderInput, GroupMessageReplyUncheckedCreateWithoutSenderInput> | GroupMessageReplyCreateWithoutSenderInput[] | GroupMessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutSenderInput | GroupMessageReplyCreateOrConnectWithoutSenderInput[]
    upsert?: GroupMessageReplyUpsertWithWhereUniqueWithoutSenderInput | GroupMessageReplyUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GroupMessageReplyCreateManySenderInputEnvelope
    set?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    disconnect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    delete?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    update?: GroupMessageReplyUpdateWithWhereUniqueWithoutSenderInput | GroupMessageReplyUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GroupMessageReplyUpdateManyWithWhereWithoutSenderInput | GroupMessageReplyUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GroupMessageReplyScalarWhereInput | GroupMessageReplyScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRecieverNestedInput = {
    create?: XOR<MessageCreateWithoutRecieverInput, MessageUncheckedCreateWithoutRecieverInput> | MessageCreateWithoutRecieverInput[] | MessageUncheckedCreateWithoutRecieverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecieverInput | MessageCreateOrConnectWithoutRecieverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecieverInput | MessageUpsertWithWhereUniqueWithoutRecieverInput[]
    createMany?: MessageCreateManyRecieverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecieverInput | MessageUpdateWithWhereUniqueWithoutRecieverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecieverInput | MessageUpdateManyWithWhereWithoutRecieverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageReplyUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageReplyCreateWithoutSenderInput, MessageReplyUncheckedCreateWithoutSenderInput> | MessageReplyCreateWithoutSenderInput[] | MessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutSenderInput | MessageReplyCreateOrConnectWithoutSenderInput[]
    upsert?: MessageReplyUpsertWithWhereUniqueWithoutSenderInput | MessageReplyUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageReplyCreateManySenderInputEnvelope
    set?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    disconnect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    delete?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    update?: MessageReplyUpdateWithWhereUniqueWithoutSenderInput | MessageReplyUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageReplyUpdateManyWithWhereWithoutSenderInput | MessageReplyUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageReplyScalarWhereInput | MessageReplyScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput> | GroupMemberCreateWithoutUserInput[] | GroupMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutUserInput | GroupMemberCreateOrConnectWithoutUserInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutUserInput | GroupMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutUserInput | GroupMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutUserInput | GroupMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GroupMessageCreateWithoutSenderInput, GroupMessageUncheckedCreateWithoutSenderInput> | GroupMessageCreateWithoutSenderInput[] | GroupMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutSenderInput | GroupMessageCreateOrConnectWithoutSenderInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutSenderInput | GroupMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GroupMessageCreateManySenderInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutSenderInput | GroupMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutSenderInput | GroupMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<GroupMessageReplyCreateWithoutSenderInput, GroupMessageReplyUncheckedCreateWithoutSenderInput> | GroupMessageReplyCreateWithoutSenderInput[] | GroupMessageReplyUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutSenderInput | GroupMessageReplyCreateOrConnectWithoutSenderInput[]
    upsert?: GroupMessageReplyUpsertWithWhereUniqueWithoutSenderInput | GroupMessageReplyUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: GroupMessageReplyCreateManySenderInputEnvelope
    set?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    disconnect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    delete?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    update?: GroupMessageReplyUpdateWithWhereUniqueWithoutSenderInput | GroupMessageReplyUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: GroupMessageReplyUpdateManyWithWhereWithoutSenderInput | GroupMessageReplyUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: GroupMessageReplyScalarWhereInput | GroupMessageReplyScalarWhereInput[]
  }

  export type MessageCreateupvotesInput = {
    set: string[]
  }

  export type MessageCreatedownvotesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageReplyCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReplyCreateWithoutMessageInput, MessageReplyUncheckedCreateWithoutMessageInput> | MessageReplyCreateWithoutMessageInput[] | MessageReplyUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutMessageInput | MessageReplyCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReplyCreateManyMessageInputEnvelope
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
  }

  export type MessageReplyUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageReplyCreateWithoutMessageInput, MessageReplyUncheckedCreateWithoutMessageInput> | MessageReplyCreateWithoutMessageInput[] | MessageReplyUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutMessageInput | MessageReplyCreateOrConnectWithoutMessageInput[]
    createMany?: MessageReplyCreateManyMessageInputEnvelope
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
  }

  export type MessageUpdateupvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MessageUpdatedownvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type MessageReplyUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReplyCreateWithoutMessageInput, MessageReplyUncheckedCreateWithoutMessageInput> | MessageReplyCreateWithoutMessageInput[] | MessageReplyUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutMessageInput | MessageReplyCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReplyUpsertWithWhereUniqueWithoutMessageInput | MessageReplyUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReplyCreateManyMessageInputEnvelope
    set?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    disconnect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    delete?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    update?: MessageReplyUpdateWithWhereUniqueWithoutMessageInput | MessageReplyUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReplyUpdateManyWithWhereWithoutMessageInput | MessageReplyUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReplyScalarWhereInput | MessageReplyScalarWhereInput[]
  }

  export type MessageReplyUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageReplyCreateWithoutMessageInput, MessageReplyUncheckedCreateWithoutMessageInput> | MessageReplyCreateWithoutMessageInput[] | MessageReplyUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageReplyCreateOrConnectWithoutMessageInput | MessageReplyCreateOrConnectWithoutMessageInput[]
    upsert?: MessageReplyUpsertWithWhereUniqueWithoutMessageInput | MessageReplyUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageReplyCreateManyMessageInputEnvelope
    set?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    disconnect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    delete?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    connect?: MessageReplyWhereUniqueInput | MessageReplyWhereUniqueInput[]
    update?: MessageReplyUpdateWithWhereUniqueWithoutMessageInput | MessageReplyUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageReplyUpdateManyWithWhereWithoutMessageInput | MessageReplyUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageReplyScalarWhereInput | MessageReplyScalarWhereInput[]
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMessageCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMessageUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMessageUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutGroupInput | GroupMessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutGroupInput | GroupMessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutGroupInput | GroupMessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMessageUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput> | GroupMessageCreateWithoutGroupInput[] | GroupMessageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMessageCreateOrConnectWithoutGroupInput | GroupMessageCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMessageUpsertWithWhereUniqueWithoutGroupInput | GroupMessageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMessageCreateManyGroupInputEnvelope
    set?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    disconnect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    delete?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    connect?: GroupMessageWhereUniqueInput | GroupMessageWhereUniqueInput[]
    update?: GroupMessageUpdateWithWhereUniqueWithoutGroupInput | GroupMessageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMessageUpdateManyWithWhereWithoutGroupInput | GroupMessageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMembersInput
    upsert?: UserUpsertWithoutGroupMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMembersInput, UserUpdateWithoutGroupMembersInput>, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupMessageCreateupvotesInput = {
    set: string[]
  }

  export type GroupMessageCreatedownvotesInput = {
    set: string[]
  }

  export type GroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupMessageInput = {
    create?: XOR<UserCreateWithoutGroupMessageInput, UserUncheckedCreateWithoutGroupMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMessageInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMessageReplyCreateNestedManyWithoutGroupMessageInput = {
    create?: XOR<GroupMessageReplyCreateWithoutGroupMessageInput, GroupMessageReplyUncheckedCreateWithoutGroupMessageInput> | GroupMessageReplyCreateWithoutGroupMessageInput[] | GroupMessageReplyUncheckedCreateWithoutGroupMessageInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutGroupMessageInput | GroupMessageReplyCreateOrConnectWithoutGroupMessageInput[]
    createMany?: GroupMessageReplyCreateManyGroupMessageInputEnvelope
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
  }

  export type GroupMessageReplyUncheckedCreateNestedManyWithoutGroupMessageInput = {
    create?: XOR<GroupMessageReplyCreateWithoutGroupMessageInput, GroupMessageReplyUncheckedCreateWithoutGroupMessageInput> | GroupMessageReplyCreateWithoutGroupMessageInput[] | GroupMessageReplyUncheckedCreateWithoutGroupMessageInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutGroupMessageInput | GroupMessageReplyCreateOrConnectWithoutGroupMessageInput[]
    createMany?: GroupMessageReplyCreateManyGroupMessageInputEnvelope
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
  }

  export type GroupMessageUpdateupvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupMessageUpdatedownvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    upsert?: GroupUpsertWithoutMessagesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMessagesInput, GroupUpdateWithoutMessagesInput>, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutGroupMessageNestedInput = {
    create?: XOR<UserCreateWithoutGroupMessageInput, UserUncheckedCreateWithoutGroupMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupMessageInput
    upsert?: UserUpsertWithoutGroupMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupMessageInput, UserUpdateWithoutGroupMessageInput>, UserUncheckedUpdateWithoutGroupMessageInput>
  }

  export type GroupMessageReplyUpdateManyWithoutGroupMessageNestedInput = {
    create?: XOR<GroupMessageReplyCreateWithoutGroupMessageInput, GroupMessageReplyUncheckedCreateWithoutGroupMessageInput> | GroupMessageReplyCreateWithoutGroupMessageInput[] | GroupMessageReplyUncheckedCreateWithoutGroupMessageInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutGroupMessageInput | GroupMessageReplyCreateOrConnectWithoutGroupMessageInput[]
    upsert?: GroupMessageReplyUpsertWithWhereUniqueWithoutGroupMessageInput | GroupMessageReplyUpsertWithWhereUniqueWithoutGroupMessageInput[]
    createMany?: GroupMessageReplyCreateManyGroupMessageInputEnvelope
    set?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    disconnect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    delete?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    update?: GroupMessageReplyUpdateWithWhereUniqueWithoutGroupMessageInput | GroupMessageReplyUpdateWithWhereUniqueWithoutGroupMessageInput[]
    updateMany?: GroupMessageReplyUpdateManyWithWhereWithoutGroupMessageInput | GroupMessageReplyUpdateManyWithWhereWithoutGroupMessageInput[]
    deleteMany?: GroupMessageReplyScalarWhereInput | GroupMessageReplyScalarWhereInput[]
  }

  export type GroupMessageReplyUncheckedUpdateManyWithoutGroupMessageNestedInput = {
    create?: XOR<GroupMessageReplyCreateWithoutGroupMessageInput, GroupMessageReplyUncheckedCreateWithoutGroupMessageInput> | GroupMessageReplyCreateWithoutGroupMessageInput[] | GroupMessageReplyUncheckedCreateWithoutGroupMessageInput[]
    connectOrCreate?: GroupMessageReplyCreateOrConnectWithoutGroupMessageInput | GroupMessageReplyCreateOrConnectWithoutGroupMessageInput[]
    upsert?: GroupMessageReplyUpsertWithWhereUniqueWithoutGroupMessageInput | GroupMessageReplyUpsertWithWhereUniqueWithoutGroupMessageInput[]
    createMany?: GroupMessageReplyCreateManyGroupMessageInputEnvelope
    set?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    disconnect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    delete?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    connect?: GroupMessageReplyWhereUniqueInput | GroupMessageReplyWhereUniqueInput[]
    update?: GroupMessageReplyUpdateWithWhereUniqueWithoutGroupMessageInput | GroupMessageReplyUpdateWithWhereUniqueWithoutGroupMessageInput[]
    updateMany?: GroupMessageReplyUpdateManyWithWhereWithoutGroupMessageInput | GroupMessageReplyUpdateManyWithWhereWithoutGroupMessageInput[]
    deleteMany?: GroupMessageReplyScalarWhereInput | GroupMessageReplyScalarWhereInput[]
  }

  export type MessageReplyCreateupvotesInput = {
    set: string[]
  }

  export type MessageReplyCreatedownvotesInput = {
    set: string[]
  }

  export type MessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRepliesInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageReplyUpdateupvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MessageReplyUpdatedownvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MessageUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    upsert?: MessageUpsertWithoutRepliesInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutRepliesInput, MessageUpdateWithoutRepliesInput>, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    upsert?: UserUpsertWithoutRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepliesInput, UserUpdateWithoutRepliesInput>, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type GroupMessageReplyCreateupvotesInput = {
    set: string[]
  }

  export type GroupMessageReplyCreatedownvotesInput = {
    set: string[]
  }

  export type GroupMessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<GroupMessageCreateWithoutRepliesInput, GroupMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: GroupMessageCreateOrConnectWithoutRepliesInput
    connect?: GroupMessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupRepliesInput = {
    create?: XOR<UserCreateWithoutGroupRepliesInput, UserUncheckedCreateWithoutGroupRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMessageReplyUpdateupvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupMessageReplyUpdatedownvotesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupMessageUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<GroupMessageCreateWithoutRepliesInput, GroupMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: GroupMessageCreateOrConnectWithoutRepliesInput
    upsert?: GroupMessageUpsertWithoutRepliesInput
    connect?: GroupMessageWhereUniqueInput
    update?: XOR<XOR<GroupMessageUpdateToOneWithWhereWithoutRepliesInput, GroupMessageUpdateWithoutRepliesInput>, GroupMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateOneRequiredWithoutGroupRepliesNestedInput = {
    create?: XOR<UserCreateWithoutGroupRepliesInput, UserUncheckedCreateWithoutGroupRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupRepliesInput
    upsert?: UserUpsertWithoutGroupRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupRepliesInput, UserUpdateWithoutGroupRepliesInput>, UserUncheckedUpdateWithoutGroupRepliesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    reciever: UserCreateNestedOneWithoutReceivedMessagesInput
    replies?: MessageReplyCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    recieverId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    replies?: MessageReplyUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRecieverInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    sender: UserCreateNestedOneWithoutSentMessagesInput
    replies?: MessageReplyCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRecieverInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    replies?: MessageReplyUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRecieverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecieverInput, MessageUncheckedCreateWithoutRecieverInput>
  }

  export type MessageCreateManyRecieverInputEnvelope = {
    data: MessageCreateManyRecieverInput | MessageCreateManyRecieverInput[]
    skipDuplicates?: boolean
  }

  export type MessageReplyCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
    message: MessageCreateNestedOneWithoutRepliesInput
  }

  export type MessageReplyUncheckedCreateWithoutSenderInput = {
    id?: string
    messageId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
  }

  export type MessageReplyCreateOrConnectWithoutSenderInput = {
    where: MessageReplyWhereUniqueInput
    create: XOR<MessageReplyCreateWithoutSenderInput, MessageReplyUncheckedCreateWithoutSenderInput>
  }

  export type MessageReplyCreateManySenderInputEnvelope = {
    data: MessageReplyCreateManySenderInput | MessageReplyCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: GroupMemberCreateManyUserInput | GroupMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupMessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    group: GroupCreateNestedOneWithoutMessagesInput
    replies?: GroupMessageReplyCreateNestedManyWithoutGroupMessageInput
  }

  export type GroupMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    groupId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    replies?: GroupMessageReplyUncheckedCreateNestedManyWithoutGroupMessageInput
  }

  export type GroupMessageCreateOrConnectWithoutSenderInput = {
    where: GroupMessageWhereUniqueInput
    create: XOR<GroupMessageCreateWithoutSenderInput, GroupMessageUncheckedCreateWithoutSenderInput>
  }

  export type GroupMessageCreateManySenderInputEnvelope = {
    data: GroupMessageCreateManySenderInput | GroupMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type GroupMessageReplyCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
    groupMessage: GroupMessageCreateNestedOneWithoutRepliesInput
  }

  export type GroupMessageReplyUncheckedCreateWithoutSenderInput = {
    id?: string
    groupMessageId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
  }

  export type GroupMessageReplyCreateOrConnectWithoutSenderInput = {
    where: GroupMessageReplyWhereUniqueInput
    create: XOR<GroupMessageReplyCreateWithoutSenderInput, GroupMessageReplyUncheckedCreateWithoutSenderInput>
  }

  export type GroupMessageReplyCreateManySenderInputEnvelope = {
    data: GroupMessageReplyCreateManySenderInput | GroupMessageReplyCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    recieverId?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    upvotes?: StringNullableListFilter<"Message">
    downvotes?: StringNullableListFilter<"Message">
  }

  export type MessageUpsertWithWhereUniqueWithoutRecieverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecieverInput, MessageUncheckedUpdateWithoutRecieverInput>
    create: XOR<MessageCreateWithoutRecieverInput, MessageUncheckedCreateWithoutRecieverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecieverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecieverInput, MessageUncheckedUpdateWithoutRecieverInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecieverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRecieverInput>
  }

  export type MessageReplyUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageReplyWhereUniqueInput
    update: XOR<MessageReplyUpdateWithoutSenderInput, MessageReplyUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageReplyCreateWithoutSenderInput, MessageReplyUncheckedCreateWithoutSenderInput>
  }

  export type MessageReplyUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageReplyWhereUniqueInput
    data: XOR<MessageReplyUpdateWithoutSenderInput, MessageReplyUncheckedUpdateWithoutSenderInput>
  }

  export type MessageReplyUpdateManyWithWhereWithoutSenderInput = {
    where: MessageReplyScalarWhereInput
    data: XOR<MessageReplyUpdateManyMutationInput, MessageReplyUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageReplyScalarWhereInput = {
    AND?: MessageReplyScalarWhereInput | MessageReplyScalarWhereInput[]
    OR?: MessageReplyScalarWhereInput[]
    NOT?: MessageReplyScalarWhereInput | MessageReplyScalarWhereInput[]
    id?: StringFilter<"MessageReply"> | string
    messageId?: StringFilter<"MessageReply"> | string
    senderId?: StringFilter<"MessageReply"> | string
    content?: StringFilter<"MessageReply"> | string
    createdAt?: DateTimeFilter<"MessageReply"> | Date | string
    updatedAt?: DateTimeFilter<"MessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"MessageReply">
    downvotes?: StringNullableListFilter<"MessageReply">
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: StringFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    groupId?: StringFilter<"GroupMember"> | string
    createdAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type GroupMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: GroupMessageWhereUniqueInput
    update: XOR<GroupMessageUpdateWithoutSenderInput, GroupMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<GroupMessageCreateWithoutSenderInput, GroupMessageUncheckedCreateWithoutSenderInput>
  }

  export type GroupMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: GroupMessageWhereUniqueInput
    data: XOR<GroupMessageUpdateWithoutSenderInput, GroupMessageUncheckedUpdateWithoutSenderInput>
  }

  export type GroupMessageUpdateManyWithWhereWithoutSenderInput = {
    where: GroupMessageScalarWhereInput
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type GroupMessageScalarWhereInput = {
    AND?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
    OR?: GroupMessageScalarWhereInput[]
    NOT?: GroupMessageScalarWhereInput | GroupMessageScalarWhereInput[]
    id?: StringFilter<"GroupMessage"> | string
    groupId?: StringFilter<"GroupMessage"> | string
    senderId?: StringFilter<"GroupMessage"> | string
    content?: StringFilter<"GroupMessage"> | string
    createdAt?: DateTimeFilter<"GroupMessage"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMessage"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessage">
    downvotes?: StringNullableListFilter<"GroupMessage">
  }

  export type GroupMessageReplyUpsertWithWhereUniqueWithoutSenderInput = {
    where: GroupMessageReplyWhereUniqueInput
    update: XOR<GroupMessageReplyUpdateWithoutSenderInput, GroupMessageReplyUncheckedUpdateWithoutSenderInput>
    create: XOR<GroupMessageReplyCreateWithoutSenderInput, GroupMessageReplyUncheckedCreateWithoutSenderInput>
  }

  export type GroupMessageReplyUpdateWithWhereUniqueWithoutSenderInput = {
    where: GroupMessageReplyWhereUniqueInput
    data: XOR<GroupMessageReplyUpdateWithoutSenderInput, GroupMessageReplyUncheckedUpdateWithoutSenderInput>
  }

  export type GroupMessageReplyUpdateManyWithWhereWithoutSenderInput = {
    where: GroupMessageReplyScalarWhereInput
    data: XOR<GroupMessageReplyUpdateManyMutationInput, GroupMessageReplyUncheckedUpdateManyWithoutSenderInput>
  }

  export type GroupMessageReplyScalarWhereInput = {
    AND?: GroupMessageReplyScalarWhereInput | GroupMessageReplyScalarWhereInput[]
    OR?: GroupMessageReplyScalarWhereInput[]
    NOT?: GroupMessageReplyScalarWhereInput | GroupMessageReplyScalarWhereInput[]
    id?: StringFilter<"GroupMessageReply"> | string
    groupMessageId?: StringFilter<"GroupMessageReply"> | string
    senderId?: StringFilter<"GroupMessageReply"> | string
    content?: StringFilter<"GroupMessageReply"> | string
    createdAt?: DateTimeFilter<"GroupMessageReply"> | Date | string
    updatedAt?: DateTimeFilter<"GroupMessageReply"> | Date | string
    upvotes?: StringNullableListFilter<"GroupMessageReply">
    downvotes?: StringNullableListFilter<"GroupMessageReply">
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    receivedMessages?: MessageCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyUncheckedCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageUncheckedCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    replies?: MessageReplyCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    replies?: MessageReplyUncheckedCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageUncheckedCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type MessageReplyCreateWithoutMessageInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
    sender: UserCreateNestedOneWithoutRepliesInput
  }

  export type MessageReplyUncheckedCreateWithoutMessageInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
  }

  export type MessageReplyCreateOrConnectWithoutMessageInput = {
    where: MessageReplyWhereUniqueInput
    create: XOR<MessageReplyCreateWithoutMessageInput, MessageReplyUncheckedCreateWithoutMessageInput>
  }

  export type MessageReplyCreateManyMessageInputEnvelope = {
    data: MessageReplyCreateManyMessageInput | MessageReplyCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedMessages?: MessageUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUncheckedUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUncheckedUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    replies?: MessageReplyUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    replies?: MessageReplyUncheckedUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUncheckedUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MessageReplyUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageReplyWhereUniqueInput
    update: XOR<MessageReplyUpdateWithoutMessageInput, MessageReplyUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageReplyCreateWithoutMessageInput, MessageReplyUncheckedCreateWithoutMessageInput>
  }

  export type MessageReplyUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageReplyWhereUniqueInput
    data: XOR<MessageReplyUpdateWithoutMessageInput, MessageReplyUncheckedUpdateWithoutMessageInput>
  }

  export type MessageReplyUpdateManyWithWhereWithoutMessageInput = {
    where: MessageReplyScalarWhereInput
    data: XOR<MessageReplyUpdateManyMutationInput, MessageReplyUncheckedUpdateManyWithoutMessageInput>
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGroupMembersInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMessageCreateWithoutGroupInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    sender: UserCreateNestedOneWithoutGroupMessageInput
    replies?: GroupMessageReplyCreateNestedManyWithoutGroupMessageInput
  }

  export type GroupMessageUncheckedCreateWithoutGroupInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    replies?: GroupMessageReplyUncheckedCreateNestedManyWithoutGroupMessageInput
  }

  export type GroupMessageCreateOrConnectWithoutGroupInput = {
    where: GroupMessageWhereUniqueInput
    create: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput>
  }

  export type GroupMessageCreateManyGroupInputEnvelope = {
    data: GroupMessageCreateManyGroupInput | GroupMessageCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMessageUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMessageWhereUniqueInput
    update: XOR<GroupMessageUpdateWithoutGroupInput, GroupMessageUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMessageCreateWithoutGroupInput, GroupMessageUncheckedCreateWithoutGroupInput>
  }

  export type GroupMessageUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMessageWhereUniqueInput
    data: XOR<GroupMessageUpdateWithoutGroupInput, GroupMessageUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMessageUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMessageScalarWhereInput
    data: XOR<GroupMessageUpdateManyMutationInput, GroupMessageUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutGroupMembersInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyCreateNestedManyWithoutSenderInput
    groupMessage?: GroupMessageCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGroupMembersInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyUncheckedCreateNestedManyWithoutSenderInput
    groupMessage?: GroupMessageUncheckedCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGroupMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    messages?: GroupMessageCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    messages?: GroupMessageUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutGroupMembersInput = {
    update: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<UserCreateWithoutGroupMembersInput, UserUncheckedCreateWithoutGroupMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMembersInput, UserUncheckedUpdateWithoutGroupMembersInput>
  }

  export type UserUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUpdateManyWithoutSenderNestedInput
    groupMessage?: GroupMessageUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUncheckedUpdateManyWithoutSenderNestedInput
    groupMessage?: GroupMessageUncheckedUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: GroupMessageUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: GroupMessageUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutMessagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMessagesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutGroupMessageInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupReplies?: GroupMessageReplyCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGroupMessageInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyUncheckedCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupReplies?: GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGroupMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupMessageInput, UserUncheckedCreateWithoutGroupMessageInput>
  }

  export type GroupMessageReplyCreateWithoutGroupMessageInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
    sender: UserCreateNestedOneWithoutGroupRepliesInput
  }

  export type GroupMessageReplyUncheckedCreateWithoutGroupMessageInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
  }

  export type GroupMessageReplyCreateOrConnectWithoutGroupMessageInput = {
    where: GroupMessageReplyWhereUniqueInput
    create: XOR<GroupMessageReplyCreateWithoutGroupMessageInput, GroupMessageReplyUncheckedCreateWithoutGroupMessageInput>
  }

  export type GroupMessageReplyCreateManyGroupMessageInputEnvelope = {
    data: GroupMessageReplyCreateManyGroupMessageInput | GroupMessageReplyCreateManyGroupMessageInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutMessagesInput = {
    update: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type GroupUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutGroupMessageInput = {
    update: XOR<UserUpdateWithoutGroupMessageInput, UserUncheckedUpdateWithoutGroupMessageInput>
    create: XOR<UserCreateWithoutGroupMessageInput, UserUncheckedCreateWithoutGroupMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupMessageInput, UserUncheckedUpdateWithoutGroupMessageInput>
  }

  export type UserUpdateWithoutGroupMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupReplies?: GroupMessageReplyUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUncheckedUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupReplies?: GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GroupMessageReplyUpsertWithWhereUniqueWithoutGroupMessageInput = {
    where: GroupMessageReplyWhereUniqueInput
    update: XOR<GroupMessageReplyUpdateWithoutGroupMessageInput, GroupMessageReplyUncheckedUpdateWithoutGroupMessageInput>
    create: XOR<GroupMessageReplyCreateWithoutGroupMessageInput, GroupMessageReplyUncheckedCreateWithoutGroupMessageInput>
  }

  export type GroupMessageReplyUpdateWithWhereUniqueWithoutGroupMessageInput = {
    where: GroupMessageReplyWhereUniqueInput
    data: XOR<GroupMessageReplyUpdateWithoutGroupMessageInput, GroupMessageReplyUncheckedUpdateWithoutGroupMessageInput>
  }

  export type GroupMessageReplyUpdateManyWithWhereWithoutGroupMessageInput = {
    where: GroupMessageReplyScalarWhereInput
    data: XOR<GroupMessageReplyUpdateManyMutationInput, GroupMessageReplyUncheckedUpdateManyWithoutGroupMessageInput>
  }

  export type MessageCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
    sender: UserCreateNestedOneWithoutSentMessagesInput
    reciever: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    senderId: string
    recieverId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
  }

  export type MessageCreateOrConnectWithoutRepliesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type UserCreateWithoutRepliesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecieverInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutRepliesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecieverInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageUncheckedCreateNestedManyWithoutSenderInput
    groupReplies?: GroupMessageReplyUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
  }

  export type MessageUpsertWithoutRepliesInput = {
    update: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    reciever?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    recieverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
  }

  export type UserUpsertWithoutRepliesInput = {
    update: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecieverNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecieverNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUncheckedUpdateManyWithoutSenderNestedInput
    groupReplies?: GroupMessageReplyUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type GroupMessageCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
    group: GroupCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutGroupMessageInput
  }

  export type GroupMessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    groupId: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
  }

  export type GroupMessageCreateOrConnectWithoutRepliesInput = {
    where: GroupMessageWhereUniqueInput
    create: XOR<GroupMessageCreateWithoutRepliesInput, GroupMessageUncheckedCreateWithoutRepliesInput>
  }

  export type UserCreateWithoutGroupRepliesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGroupRepliesInput = {
    id?: string
    username: string
    authId: string
    picture?: string
    createdAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutRecieverInput
    replies?: MessageReplyUncheckedCreateNestedManyWithoutSenderInput
    groupMembers?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    groupMessage?: GroupMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGroupRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupRepliesInput, UserUncheckedCreateWithoutGroupRepliesInput>
  }

  export type GroupMessageUpsertWithoutRepliesInput = {
    update: XOR<GroupMessageUpdateWithoutRepliesInput, GroupMessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<GroupMessageCreateWithoutRepliesInput, GroupMessageUncheckedCreateWithoutRepliesInput>
    where?: GroupMessageWhereInput
  }

  export type GroupMessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: GroupMessageWhereInput
    data: XOR<GroupMessageUpdateWithoutRepliesInput, GroupMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type GroupMessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutGroupMessageNestedInput
  }

  export type GroupMessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
  }

  export type UserUpsertWithoutGroupRepliesInput = {
    update: XOR<UserUpdateWithoutGroupRepliesInput, UserUncheckedUpdateWithoutGroupRepliesInput>
    create: XOR<UserCreateWithoutGroupRepliesInput, UserUncheckedCreateWithoutGroupRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupRepliesInput, UserUncheckedUpdateWithoutGroupRepliesInput>
  }

  export type UserUpdateWithoutGroupRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutRecieverNestedInput
    replies?: MessageReplyUncheckedUpdateManyWithoutSenderNestedInput
    groupMembers?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    groupMessage?: GroupMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    recieverId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
  }

  export type MessageCreateManyRecieverInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageCreateupvotesInput | string[]
    downvotes?: MessageCreatedownvotesInput | string[]
  }

  export type MessageReplyCreateManySenderInput = {
    id?: string
    messageId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
  }

  export type GroupMemberCreateManyUserInput = {
    id?: string
    groupId: string
    createdAt?: Date | string
  }

  export type GroupMessageCreateManySenderInput = {
    id?: string
    groupId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
  }

  export type GroupMessageReplyCreateManySenderInput = {
    id?: string
    groupMessageId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    reciever?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
    replies?: MessageReplyUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    recieverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    replies?: MessageReplyUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    recieverId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
  }

  export type MessageUpdateWithoutRecieverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    replies?: MessageReplyUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecieverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
    replies?: MessageReplyUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRecieverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageUpdateupvotesInput | string[]
    downvotes?: MessageUpdatedownvotesInput | string[]
  }

  export type MessageReplyUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
    message?: MessageUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type MessageReplyUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type MessageReplyUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    group?: GroupUpdateOneRequiredWithoutMessagesNestedInput
    replies?: GroupMessageReplyUpdateManyWithoutGroupMessageNestedInput
  }

  export type GroupMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    replies?: GroupMessageReplyUncheckedUpdateManyWithoutGroupMessageNestedInput
  }

  export type GroupMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
    groupMessage?: GroupMessageUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type GroupMessageReplyUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupMessageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupMessageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }

  export type MessageReplyCreateManyMessageInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: MessageReplyCreateupvotesInput | string[]
    downvotes?: MessageReplyCreatedownvotesInput | string[]
  }

  export type MessageReplyUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
    sender?: UserUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type MessageReplyUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type MessageReplyUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: MessageReplyUpdateupvotesInput | string[]
    downvotes?: MessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type GroupMessageCreateManyGroupInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageCreateupvotesInput | string[]
    downvotes?: GroupMessageCreatedownvotesInput | string[]
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMessageUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    sender?: UserUpdateOneRequiredWithoutGroupMessageNestedInput
    replies?: GroupMessageReplyUpdateManyWithoutGroupMessageNestedInput
  }

  export type GroupMessageUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
    replies?: GroupMessageReplyUncheckedUpdateManyWithoutGroupMessageNestedInput
  }

  export type GroupMessageUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageUpdateupvotesInput | string[]
    downvotes?: GroupMessageUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyCreateManyGroupMessageInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    upvotes?: GroupMessageReplyCreateupvotesInput | string[]
    downvotes?: GroupMessageReplyCreatedownvotesInput | string[]
  }

  export type GroupMessageReplyUpdateWithoutGroupMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
    sender?: UserUpdateOneRequiredWithoutGroupRepliesNestedInput
  }

  export type GroupMessageReplyUncheckedUpdateWithoutGroupMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }

  export type GroupMessageReplyUncheckedUpdateManyWithoutGroupMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upvotes?: GroupMessageReplyUpdateupvotesInput | string[]
    downvotes?: GroupMessageReplyUpdatedownvotesInput | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageCountOutputTypeDefaultArgs instead
     */
    export type MessageCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupMessageCountOutputTypeDefaultArgs instead
     */
    export type GroupMessageCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupMessageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageDefaultArgs instead
     */
    export type MessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupMemberDefaultArgs instead
     */
    export type GroupMemberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupMessageDefaultArgs instead
     */
    export type GroupMessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageReplyDefaultArgs instead
     */
    export type MessageReplyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageReplyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupMessageReplyDefaultArgs instead
     */
    export type GroupMessageReplyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupMessageReplyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}