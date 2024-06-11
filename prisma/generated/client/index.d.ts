
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model ResourceDetail
 * 
 */
export type ResourceDetail = $Result.DefaultSelection<Prisma.$ResourceDetailPayload>
/**
 * Model ResourceInstance
 * 
 */
export type ResourceInstance = $Result.DefaultSelection<Prisma.$ResourceInstancePayload>
/**
 * Model ResourceLoan
 * 
 */
export type ResourceLoan = $Result.DefaultSelection<Prisma.$ResourceLoanPayload>
/**
 * Model ResourceTestimonial
 * 
 */
export type ResourceTestimonial = $Result.DefaultSelection<Prisma.$ResourceTestimonialPayload>
/**
 * Model ResourceType
 * 
 */
export type ResourceType = $Result.DefaultSelection<Prisma.$ResourceTypePayload>
/**
 * Model Publisher
 * 
 */
export type Publisher = $Result.DefaultSelection<Prisma.$PublisherPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ResourceCategory
 * 
 */
export type ResourceCategory = $Result.DefaultSelection<Prisma.$ResourceCategoryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleEnum: {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_SECRETARY: 'ROLE_SECRETARY',
  ROLE_USER: 'ROLE_USER'
};

export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum]


export const ResourceLang: {
  LANG_EN: 'LANG_EN',
  LANG_ES: 'LANG_ES',
  LANG_FR: 'LANG_FR',
  LANG_DE: 'LANG_DE',
  LANG_HI: 'LANG_HI',
  LANG_RU: 'LANG_RU',
  LANG_JA: 'LANG_JA',
  LANG_ZH: 'LANG_ZH',
  LANG_PT: 'LANG_PT',
  LANG_AR: 'LANG_AR',
  LANG_OTHER: 'LANG_OTHER'
};

export type ResourceLang = (typeof ResourceLang)[keyof typeof ResourceLang]


export const ResourceInstanceStatus: {
  GOOD: 'GOOD',
  POOR: 'POOR',
  DAMAGED: 'DAMAGED',
  LOST: 'LOST',
  ARCHIVED: 'ARCHIVED'
};

export type ResourceInstanceStatus = (typeof ResourceInstanceStatus)[keyof typeof ResourceInstanceStatus]


export const ResourceTypes: {
  BOOK: 'BOOK',
  MAGAZINE: 'MAGAZINE',
  DVD: 'DVD',
  COMICS: 'COMICS',
  ENCYCLOPEDIA: 'ENCYCLOPEDIA',
  DICTIONARY: 'DICTIONARY',
  ARTICLE: 'ARTICLE',
  REPORT: 'REPORT',
  RESEARCH_PAPER: 'RESEARCH_PAPER',
  EDUCATIONAL: 'EDUCATIONAL'
};

export type ResourceTypes = (typeof ResourceTypes)[keyof typeof ResourceTypes]


export const TransactionType: {
  TRANSACTION_LOAN: 'TRANSACTION_LOAN',
  TRANSACTION_RETURN: 'TRANSACTION_RETURN',
  TRANSACTION_LOGIN: 'TRANSACTION_LOGIN'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type RoleEnum = $Enums.RoleEnum

export const RoleEnum: typeof $Enums.RoleEnum

export type ResourceLang = $Enums.ResourceLang

export const ResourceLang: typeof $Enums.ResourceLang

export type ResourceInstanceStatus = $Enums.ResourceInstanceStatus

export const ResourceInstanceStatus: typeof $Enums.ResourceInstanceStatus

export type ResourceTypes = $Enums.ResourceTypes

export const ResourceTypes: typeof $Enums.ResourceTypes

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

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
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs>;

  /**
   * `prisma.resourceDetail`: Exposes CRUD operations for the **ResourceDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceDetails
    * const resourceDetails = await prisma.resourceDetail.findMany()
    * ```
    */
  get resourceDetail(): Prisma.ResourceDetailDelegate<ExtArgs>;

  /**
   * `prisma.resourceInstance`: Exposes CRUD operations for the **ResourceInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceInstances
    * const resourceInstances = await prisma.resourceInstance.findMany()
    * ```
    */
  get resourceInstance(): Prisma.ResourceInstanceDelegate<ExtArgs>;

  /**
   * `prisma.resourceLoan`: Exposes CRUD operations for the **ResourceLoan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceLoans
    * const resourceLoans = await prisma.resourceLoan.findMany()
    * ```
    */
  get resourceLoan(): Prisma.ResourceLoanDelegate<ExtArgs>;

  /**
   * `prisma.resourceTestimonial`: Exposes CRUD operations for the **ResourceTestimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceTestimonials
    * const resourceTestimonials = await prisma.resourceTestimonial.findMany()
    * ```
    */
  get resourceTestimonial(): Prisma.ResourceTestimonialDelegate<ExtArgs>;

  /**
   * `prisma.resourceType`: Exposes CRUD operations for the **ResourceType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceTypes
    * const resourceTypes = await prisma.resourceType.findMany()
    * ```
    */
  get resourceType(): Prisma.ResourceTypeDelegate<ExtArgs>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.PublisherDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.resourceCategory`: Exposes CRUD operations for the **ResourceCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceCategories
    * const resourceCategories = await prisma.resourceCategory.findMany()
    * ```
    */
  get resourceCategory(): Prisma.ResourceCategoryDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Role: 'Role',
    UserRole: 'UserRole',
    Resource: 'Resource',
    ResourceDetail: 'ResourceDetail',
    ResourceInstance: 'ResourceInstance',
    ResourceLoan: 'ResourceLoan',
    ResourceTestimonial: 'ResourceTestimonial',
    ResourceType: 'ResourceType',
    Publisher: 'Publisher',
    Category: 'Category',
    ResourceCategory: 'ResourceCategory',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'userRole' | 'resource' | 'resourceDetail' | 'resourceInstance' | 'resourceLoan' | 'resourceTestimonial' | 'resourceType' | 'publisher' | 'category' | 'resourceCategory' | 'transaction'
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>,
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      ResourceDetail: {
        payload: Prisma.$ResourceDetailPayload<ExtArgs>
        fields: Prisma.ResourceDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>
          }
          findFirst: {
            args: Prisma.ResourceDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>
          }
          findMany: {
            args: Prisma.ResourceDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>[]
          }
          create: {
            args: Prisma.ResourceDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>
          }
          createMany: {
            args: Prisma.ResourceDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceDetailCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>[]
          }
          delete: {
            args: Prisma.ResourceDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>
          }
          update: {
            args: Prisma.ResourceDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>
          }
          deleteMany: {
            args: Prisma.ResourceDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceDetailPayload>
          }
          aggregate: {
            args: Prisma.ResourceDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceDetail>
          }
          groupBy: {
            args: Prisma.ResourceDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceDetailCountAggregateOutputType> | number
          }
        }
      }
      ResourceInstance: {
        payload: Prisma.$ResourceInstancePayload<ExtArgs>
        fields: Prisma.ResourceInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceInstanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceInstanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>
          }
          findFirst: {
            args: Prisma.ResourceInstanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceInstanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>
          }
          findMany: {
            args: Prisma.ResourceInstanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>[]
          }
          create: {
            args: Prisma.ResourceInstanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>
          }
          createMany: {
            args: Prisma.ResourceInstanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceInstanceCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>[]
          }
          delete: {
            args: Prisma.ResourceInstanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>
          }
          update: {
            args: Prisma.ResourceInstanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>
          }
          deleteMany: {
            args: Prisma.ResourceInstanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceInstanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceInstanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceInstancePayload>
          }
          aggregate: {
            args: Prisma.ResourceInstanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceInstance>
          }
          groupBy: {
            args: Prisma.ResourceInstanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceInstanceCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceInstanceCountAggregateOutputType> | number
          }
        }
      }
      ResourceLoan: {
        payload: Prisma.$ResourceLoanPayload<ExtArgs>
        fields: Prisma.ResourceLoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceLoanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceLoanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>
          }
          findFirst: {
            args: Prisma.ResourceLoanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceLoanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>
          }
          findMany: {
            args: Prisma.ResourceLoanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>[]
          }
          create: {
            args: Prisma.ResourceLoanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>
          }
          createMany: {
            args: Prisma.ResourceLoanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceLoanCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>[]
          }
          delete: {
            args: Prisma.ResourceLoanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>
          }
          update: {
            args: Prisma.ResourceLoanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>
          }
          deleteMany: {
            args: Prisma.ResourceLoanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceLoanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceLoanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceLoanPayload>
          }
          aggregate: {
            args: Prisma.ResourceLoanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceLoan>
          }
          groupBy: {
            args: Prisma.ResourceLoanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceLoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceLoanCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceLoanCountAggregateOutputType> | number
          }
        }
      }
      ResourceTestimonial: {
        payload: Prisma.$ResourceTestimonialPayload<ExtArgs>
        fields: Prisma.ResourceTestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceTestimonialFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceTestimonialFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>
          }
          findFirst: {
            args: Prisma.ResourceTestimonialFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceTestimonialFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>
          }
          findMany: {
            args: Prisma.ResourceTestimonialFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>[]
          }
          create: {
            args: Prisma.ResourceTestimonialCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>
          }
          createMany: {
            args: Prisma.ResourceTestimonialCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceTestimonialCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>[]
          }
          delete: {
            args: Prisma.ResourceTestimonialDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>
          }
          update: {
            args: Prisma.ResourceTestimonialUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>
          }
          deleteMany: {
            args: Prisma.ResourceTestimonialDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceTestimonialUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceTestimonialUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTestimonialPayload>
          }
          aggregate: {
            args: Prisma.ResourceTestimonialAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceTestimonial>
          }
          groupBy: {
            args: Prisma.ResourceTestimonialGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceTestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceTestimonialCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceTestimonialCountAggregateOutputType> | number
          }
        }
      }
      ResourceType: {
        payload: Prisma.$ResourceTypePayload<ExtArgs>
        fields: Prisma.ResourceTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>
          }
          findFirst: {
            args: Prisma.ResourceTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>
          }
          findMany: {
            args: Prisma.ResourceTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>[]
          }
          create: {
            args: Prisma.ResourceTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>
          }
          createMany: {
            args: Prisma.ResourceTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceTypeCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>[]
          }
          delete: {
            args: Prisma.ResourceTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>
          }
          update: {
            args: Prisma.ResourceTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>
          }
          deleteMany: {
            args: Prisma.ResourceTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceTypePayload>
          }
          aggregate: {
            args: Prisma.ResourceTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceType>
          }
          groupBy: {
            args: Prisma.ResourceTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceTypeCountAggregateOutputType> | number
          }
        }
      }
      Publisher: {
        payload: Prisma.$PublisherPayload<ExtArgs>
        fields: Prisma.PublisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findFirst: {
            args: Prisma.PublisherFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findMany: {
            args: Prisma.PublisherFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          create: {
            args: Prisma.PublisherCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          createMany: {
            args: Prisma.PublisherCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          delete: {
            args: Prisma.PublisherDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          update: {
            args: Prisma.PublisherUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          deleteMany: {
            args: Prisma.PublisherDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublisherUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePublisher>
          }
          groupBy: {
            args: Prisma.PublisherGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherCountArgs<ExtArgs>,
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ResourceCategory: {
        payload: Prisma.$ResourceCategoryPayload<ExtArgs>
        fields: Prisma.ResourceCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          findFirst: {
            args: Prisma.ResourceCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          findMany: {
            args: Prisma.ResourceCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>[]
          }
          create: {
            args: Prisma.ResourceCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          createMany: {
            args: Prisma.ResourceCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCategoryCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>[]
          }
          delete: {
            args: Prisma.ResourceCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          update: {
            args: Prisma.ResourceCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ResourceCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceCategoryPayload>
          }
          aggregate: {
            args: Prisma.ResourceCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceCategory>
          }
          groupBy: {
            args: Prisma.ResourceCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceCategoryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
    roles: number
    UserRole: number
    loans: number
    testimonials: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    UserRole?: boolean | UserCountOutputTypeCountUserRoleArgs
    loans?: boolean | UserCountOutputTypeCountLoansArgs
    testimonials?: boolean | UserCountOutputTypeCountTestimonialsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceLoanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceTestimonialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    UserRole: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    UserRole?: boolean | RoleCountOutputTypeCountUserRoleArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    instances: number
    testimonials: number
    categories: number
    ResourceCategory: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instances?: boolean | ResourceCountOutputTypeCountInstancesArgs
    testimonials?: boolean | ResourceCountOutputTypeCountTestimonialsArgs
    categories?: boolean | ResourceCountOutputTypeCountCategoriesArgs
    ResourceCategory?: boolean | ResourceCountOutputTypeCountResourceCategoryArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceInstanceWhereInput
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceTestimonialWhereInput
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountResourceCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceCategoryWhereInput
  }


  /**
   * Count Type ResourceInstanceCountOutputType
   */

  export type ResourceInstanceCountOutputType = {
    transactions: number
  }

  export type ResourceInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ResourceInstanceCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ResourceInstanceCountOutputType without action
   */
  export type ResourceInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstanceCountOutputType
     */
    select?: ResourceInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceInstanceCountOutputType without action
   */
  export type ResourceInstanceCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ResourceTypeCountOutputType
   */

  export type ResourceTypeCountOutputType = {
    Resource: number
  }

  export type ResourceTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Resource?: boolean | ResourceTypeCountOutputTypeCountResourceArgs
  }

  // Custom InputTypes
  /**
   * ResourceTypeCountOutputType without action
   */
  export type ResourceTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTypeCountOutputType
     */
    select?: ResourceTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceTypeCountOutputType without action
   */
  export type ResourceTypeCountOutputTypeCountResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }


  /**
   * Count Type PublisherCountOutputType
   */

  export type PublisherCountOutputType = {
    resources: number
  }

  export type PublisherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | PublisherCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes
  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherCountOutputType
     */
    select?: PublisherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    resources: number
    ResourceCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | CategoryCountOutputTypeCountResourcesArgs
    ResourceCategory?: boolean | CategoryCountOutputTypeCountResourceCategoryArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountResourceCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceCategoryWhereInput
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
    email: string | null
    first_name: string | null
    image_url: string | null
    last_name: string | null
    address: string | null
    active: boolean | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    image_url: string | null
    last_name: string | null
    address: string | null
    active: boolean | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    image_url: number
    last_name: number
    address: number
    active: number
    phone: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    image_url?: true
    last_name?: true
    address?: true
    active?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    image_url?: true
    last_name?: true
    address?: true
    active?: true
    phone?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    image_url?: true
    last_name?: true
    address?: true
    active?: true
    phone?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    email: string
    first_name: string
    image_url: string
    last_name: string
    address: string | null
    active: boolean
    phone: string | null
    created_at: Date
    updated_at: Date
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    image_url?: boolean
    last_name?: boolean
    address?: boolean
    active?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    loans?: boolean | User$loansArgs<ExtArgs>
    testimonials?: boolean | User$testimonialsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    image_url?: boolean
    last_name?: boolean
    address?: boolean
    active?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    loans?: boolean | User$loansArgs<ExtArgs>
    testimonials?: boolean | User$testimonialsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
      loans: Prisma.$ResourceLoanPayload<ExtArgs>[]
      testimonials: Prisma.$ResourceTestimonialPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      first_name: string
      image_url: string
      last_name: string
      address: string | null
      active: boolean
      phone: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
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
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    UserRole<T extends User$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

    loans<T extends User$loansArgs<ExtArgs> = {}>(args?: Subset<T, User$loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findMany'> | Null>;

    testimonials<T extends User$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, User$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly image_url: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly phone: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.UserRole
   */
  export type User$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.loans
   */
  export type User$loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    where?: ResourceLoanWhereInput
    orderBy?: ResourceLoanOrderByWithRelationInput | ResourceLoanOrderByWithRelationInput[]
    cursor?: ResourceLoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceLoanScalarFieldEnum | ResourceLoanScalarFieldEnum[]
  }

  /**
   * User.testimonials
   */
  export type User$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    where?: ResourceTestimonialWhereInput
    orderBy?: ResourceTestimonialOrderByWithRelationInput | ResourceTestimonialOrderByWithRelationInput[]
    cursor?: ResourceTestimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceTestimonialScalarFieldEnum | ResourceTestimonialScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    role_name: $Enums.RoleEnum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    role_name: $Enums.RoleEnum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    role_name: $Enums.RoleEnum
    created_at: Date
    updated_at: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    UserRole?: boolean | Role$UserRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    UserRole?: boolean | Role$UserRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_name: $Enums.RoleEnum
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserRole<T extends Role$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly role_name: FieldRef<"Role", 'RoleEnum'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly updated_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.UserRole
   */
  export type Role$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    user_id: string | null
    role_id: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    user_id: string | null
    role_id: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    user_id: number
    role_id: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    role_id?: true
  }

  export type UserRoleSumAggregateInputType = {
    role_id?: true
  }

  export type UserRoleMinAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleMaxAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleCountAggregateInputType = {
    user_id?: true
    role_id?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    user_id: string
    role_id: number
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    user_id?: boolean
    role_id?: boolean
  }


  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }


  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      role_id: number
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }


  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserRoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserRoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userRoleWithUser_idOnly = await prisma.userRole.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UserRoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
    **/
    create<T extends UserRoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserRoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `user_id`
     * const userRoleWithUser_idOnly = await prisma.userRole.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
    **/
    delete<T extends UserRoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserRoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserRoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserRoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
    **/
    upsert<T extends UserRoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>
    ): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly user_id: FieldRef<"UserRole", 'String'>
    readonly role_id: FieldRef<"UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    type_id: number | null
    publisher_id: number | null
    detail_id: number | null
  }

  export type ResourceSumAggregateOutputType = {
    type_id: number | null
    publisher_id: number | null
    detail_id: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    resource_name: string | null
    slug_name: string | null
    image_url: string | null
    author: string | null
    short_description: string | null
    edition: string | null
    created_at: Date | null
    updated_at: Date | null
    type_id: number | null
    publisher_id: number | null
    detail_id: number | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    resource_name: string | null
    slug_name: string | null
    image_url: string | null
    author: string | null
    short_description: string | null
    edition: string | null
    created_at: Date | null
    updated_at: Date | null
    type_id: number | null
    publisher_id: number | null
    detail_id: number | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    resource_name: number
    slug_name: number
    image_url: number
    author: number
    short_description: number
    edition: number
    created_at: number
    updated_at: number
    type_id: number
    publisher_id: number
    detail_id: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    type_id?: true
    publisher_id?: true
    detail_id?: true
  }

  export type ResourceSumAggregateInputType = {
    type_id?: true
    publisher_id?: true
    detail_id?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    resource_name?: true
    slug_name?: true
    image_url?: true
    author?: true
    short_description?: true
    edition?: true
    created_at?: true
    updated_at?: true
    type_id?: true
    publisher_id?: true
    detail_id?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    resource_name?: true
    slug_name?: true
    image_url?: true
    author?: true
    short_description?: true
    edition?: true
    created_at?: true
    updated_at?: true
    type_id?: true
    publisher_id?: true
    detail_id?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    resource_name?: true
    slug_name?: true
    image_url?: true
    author?: true
    short_description?: true
    edition?: true
    created_at?: true
    updated_at?: true
    type_id?: true
    publisher_id?: true
    detail_id?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    resource_name: string
    slug_name: string | null
    image_url: string | null
    author: string
    short_description: string | null
    edition: string
    created_at: Date
    updated_at: Date
    type_id: number
    publisher_id: number
    detail_id: number
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource_name?: boolean
    slug_name?: boolean
    image_url?: boolean
    author?: boolean
    short_description?: boolean
    edition?: boolean
    created_at?: boolean
    updated_at?: boolean
    type_id?: boolean
    publisher_id?: boolean
    detail_id?: boolean
    type?: boolean | ResourceTypeDefaultArgs<ExtArgs>
    instances?: boolean | Resource$instancesArgs<ExtArgs>
    testimonials?: boolean | Resource$testimonialsArgs<ExtArgs>
    categories?: boolean | Resource$categoriesArgs<ExtArgs>
    ResourceCategory?: boolean | Resource$ResourceCategoryArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    detail?: boolean | ResourceDetailDefaultArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    resource_name?: boolean
    slug_name?: boolean
    image_url?: boolean
    author?: boolean
    short_description?: boolean
    edition?: boolean
    created_at?: boolean
    updated_at?: boolean
    type_id?: boolean
    publisher_id?: boolean
    detail_id?: boolean
  }


  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | ResourceTypeDefaultArgs<ExtArgs>
    instances?: boolean | Resource$instancesArgs<ExtArgs>
    testimonials?: boolean | Resource$testimonialsArgs<ExtArgs>
    categories?: boolean | Resource$categoriesArgs<ExtArgs>
    ResourceCategory?: boolean | Resource$ResourceCategoryArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    detail?: boolean | ResourceDetailDefaultArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      type: Prisma.$ResourceTypePayload<ExtArgs>
      instances: Prisma.$ResourceInstancePayload<ExtArgs>[]
      testimonials: Prisma.$ResourceTestimonialPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      ResourceCategory: Prisma.$ResourceCategoryPayload<ExtArgs>[]
      publisher: Prisma.$PublisherPayload<ExtArgs>
      detail: Prisma.$ResourceDetailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resource_name: string
      slug_name: string | null
      image_url: string | null
      author: string
      short_description: string | null
      edition: string
      created_at: Date
      updated_at: Date
      type_id: number
      publisher_id: number
      detail_id: number
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }


  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
    **/
    create<T extends ResourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
    **/
    delete<T extends ResourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>
    ): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    type<T extends ResourceTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceTypeDefaultArgs<ExtArgs>>): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    instances<T extends Resource$instancesArgs<ExtArgs> = {}>(args?: Subset<T, Resource$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findMany'> | Null>;

    testimonials<T extends Resource$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findMany'> | Null>;

    categories<T extends Resource$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Resource$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    ResourceCategory<T extends Resource$ResourceCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Resource$ResourceCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    publisher<T extends PublisherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublisherDefaultArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    detail<T extends ResourceDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDetailDefaultArgs<ExtArgs>>): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Resource model
   */ 
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly resource_name: FieldRef<"Resource", 'String'>
    readonly slug_name: FieldRef<"Resource", 'String'>
    readonly image_url: FieldRef<"Resource", 'String'>
    readonly author: FieldRef<"Resource", 'String'>
    readonly short_description: FieldRef<"Resource", 'String'>
    readonly edition: FieldRef<"Resource", 'String'>
    readonly created_at: FieldRef<"Resource", 'DateTime'>
    readonly updated_at: FieldRef<"Resource", 'DateTime'>
    readonly type_id: FieldRef<"Resource", 'Int'>
    readonly publisher_id: FieldRef<"Resource", 'Int'>
    readonly detail_id: FieldRef<"Resource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
  }

  /**
   * Resource.instances
   */
  export type Resource$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    where?: ResourceInstanceWhereInput
    orderBy?: ResourceInstanceOrderByWithRelationInput | ResourceInstanceOrderByWithRelationInput[]
    cursor?: ResourceInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceInstanceScalarFieldEnum | ResourceInstanceScalarFieldEnum[]
  }

  /**
   * Resource.testimonials
   */
  export type Resource$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    where?: ResourceTestimonialWhereInput
    orderBy?: ResourceTestimonialOrderByWithRelationInput | ResourceTestimonialOrderByWithRelationInput[]
    cursor?: ResourceTestimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceTestimonialScalarFieldEnum | ResourceTestimonialScalarFieldEnum[]
  }

  /**
   * Resource.categories
   */
  export type Resource$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Resource.ResourceCategory
   */
  export type Resource$ResourceCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    where?: ResourceCategoryWhereInput
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    cursor?: ResourceCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model ResourceDetail
   */

  export type AggregateResourceDetail = {
    _count: ResourceDetailCountAggregateOutputType | null
    _avg: ResourceDetailAvgAggregateOutputType | null
    _sum: ResourceDetailSumAggregateOutputType | null
    _min: ResourceDetailMinAggregateOutputType | null
    _max: ResourceDetailMaxAggregateOutputType | null
  }

  export type ResourceDetailAvgAggregateOutputType = {
    id: number | null
    pub_year: number | null
  }

  export type ResourceDetailSumAggregateOutputType = {
    id: number | null
    pub_year: number | null
  }

  export type ResourceDetailMinAggregateOutputType = {
    id: number | null
    pub_year: number | null
    isbn: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceDetailMaxAggregateOutputType = {
    id: number | null
    pub_year: number | null
    isbn: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceDetailCountAggregateOutputType = {
    id: number
    pub_year: number
    isbn: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResourceDetailAvgAggregateInputType = {
    id?: true
    pub_year?: true
  }

  export type ResourceDetailSumAggregateInputType = {
    id?: true
    pub_year?: true
  }

  export type ResourceDetailMinAggregateInputType = {
    id?: true
    pub_year?: true
    isbn?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceDetailMaxAggregateInputType = {
    id?: true
    pub_year?: true
    isbn?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceDetailCountAggregateInputType = {
    id?: true
    pub_year?: true
    isbn?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResourceDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceDetail to aggregate.
     */
    where?: ResourceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceDetails to fetch.
     */
    orderBy?: ResourceDetailOrderByWithRelationInput | ResourceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceDetails
    **/
    _count?: true | ResourceDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceDetailMaxAggregateInputType
  }

  export type GetResourceDetailAggregateType<T extends ResourceDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceDetail[P]>
      : GetScalarType<T[P], AggregateResourceDetail[P]>
  }




  export type ResourceDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceDetailWhereInput
    orderBy?: ResourceDetailOrderByWithAggregationInput | ResourceDetailOrderByWithAggregationInput[]
    by: ResourceDetailScalarFieldEnum[] | ResourceDetailScalarFieldEnum
    having?: ResourceDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceDetailCountAggregateInputType | true
    _avg?: ResourceDetailAvgAggregateInputType
    _sum?: ResourceDetailSumAggregateInputType
    _min?: ResourceDetailMinAggregateInputType
    _max?: ResourceDetailMaxAggregateInputType
  }

  export type ResourceDetailGroupByOutputType = {
    id: number
    pub_year: number
    isbn: string | null
    description: JsonValue
    created_at: Date
    updated_at: Date
    _count: ResourceDetailCountAggregateOutputType | null
    _avg: ResourceDetailAvgAggregateOutputType | null
    _sum: ResourceDetailSumAggregateOutputType | null
    _min: ResourceDetailMinAggregateOutputType | null
    _max: ResourceDetailMaxAggregateOutputType | null
  }

  type GetResourceDetailGroupByPayload<T extends ResourceDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceDetailGroupByOutputType[P]>
        }
      >
    >


  export type ResourceDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pub_year?: boolean
    isbn?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    resource?: boolean | ResourceDetail$resourceArgs<ExtArgs>
  }, ExtArgs["result"]["resourceDetail"]>

  export type ResourceDetailSelectScalar = {
    id?: boolean
    pub_year?: boolean
    isbn?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type ResourceDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceDetail$resourceArgs<ExtArgs>
  }


  export type $ResourceDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceDetail"
    objects: {
      resource: Prisma.$ResourcePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pub_year: number
      isbn: string | null
      description: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["resourceDetail"]>
    composites: {}
  }


  type ResourceDetailGetPayload<S extends boolean | null | undefined | ResourceDetailDefaultArgs> = $Result.GetResult<Prisma.$ResourceDetailPayload, S>

  type ResourceDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceDetailCountAggregateInputType | true
    }

  export interface ResourceDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceDetail'], meta: { name: 'ResourceDetail' } }
    /**
     * Find zero or one ResourceDetail that matches the filter.
     * @param {ResourceDetailFindUniqueArgs} args - Arguments to find a ResourceDetail
     * @example
     * // Get one ResourceDetail
     * const resourceDetail = await prisma.resourceDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceDetailFindUniqueOrThrowArgs} args - Arguments to find a ResourceDetail
     * @example
     * // Get one ResourceDetail
     * const resourceDetail = await prisma.resourceDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailFindFirstArgs} args - Arguments to find a ResourceDetail
     * @example
     * // Get one ResourceDetail
     * const resourceDetail = await prisma.resourceDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailFindFirstOrThrowArgs} args - Arguments to find a ResourceDetail
     * @example
     * // Get one ResourceDetail
     * const resourceDetail = await prisma.resourceDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceDetails
     * const resourceDetails = await prisma.resourceDetail.findMany()
     * 
     * // Get first 10 ResourceDetails
     * const resourceDetails = await prisma.resourceDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceDetailWithIdOnly = await prisma.resourceDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResourceDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceDetail.
     * @param {ResourceDetailCreateArgs} args - Arguments to create a ResourceDetail.
     * @example
     * // Create one ResourceDetail
     * const ResourceDetail = await prisma.resourceDetail.create({
     *   data: {
     *     // ... data to create a ResourceDetail
     *   }
     * })
     * 
    **/
    create<T extends ResourceDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDetailCreateArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceDetails.
     * @param {ResourceDetailCreateManyArgs} args - Arguments to create many ResourceDetails.
     * @example
     * // Create many ResourceDetails
     * const resourceDetail = await prisma.resourceDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceDetails and returns the data saved in the database.
     * @param {ResourceDetailCreateManyAndReturnArgs} args - Arguments to create many ResourceDetails.
     * @example
     * // Create many ResourceDetails
     * const resourceDetail = await prisma.resourceDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceDetails and only return the `id`
     * const resourceDetailWithIdOnly = await prisma.resourceDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceDetailCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceDetail.
     * @param {ResourceDetailDeleteArgs} args - Arguments to delete one ResourceDetail.
     * @example
     * // Delete one ResourceDetail
     * const ResourceDetail = await prisma.resourceDetail.delete({
     *   where: {
     *     // ... filter to delete one ResourceDetail
     *   }
     * })
     * 
    **/
    delete<T extends ResourceDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDetailDeleteArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceDetail.
     * @param {ResourceDetailUpdateArgs} args - Arguments to update one ResourceDetail.
     * @example
     * // Update one ResourceDetail
     * const resourceDetail = await prisma.resourceDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDetailUpdateArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceDetails.
     * @param {ResourceDetailDeleteManyArgs} args - Arguments to filter ResourceDetails to delete.
     * @example
     * // Delete a few ResourceDetails
     * const { count } = await prisma.resourceDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceDetails
     * const resourceDetail = await prisma.resourceDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceDetail.
     * @param {ResourceDetailUpsertArgs} args - Arguments to update or create a ResourceDetail.
     * @example
     * // Update or create a ResourceDetail
     * const resourceDetail = await prisma.resourceDetail.upsert({
     *   create: {
     *     // ... data to create a ResourceDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceDetail we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceDetailUpsertArgs<ExtArgs>>
    ): Prisma__ResourceDetailClient<$Result.GetResult<Prisma.$ResourceDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailCountArgs} args - Arguments to filter ResourceDetails to count.
     * @example
     * // Count the number of ResourceDetails
     * const count = await prisma.resourceDetail.count({
     *   where: {
     *     // ... the filter for the ResourceDetails we want to count
     *   }
     * })
    **/
    count<T extends ResourceDetailCountArgs>(
      args?: Subset<T, ResourceDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceDetailAggregateArgs>(args: Subset<T, ResourceDetailAggregateArgs>): Prisma.PrismaPromise<GetResourceDetailAggregateType<T>>

    /**
     * Group by ResourceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceDetailGroupByArgs} args - Group by arguments.
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
      T extends ResourceDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceDetailGroupByArgs['orderBy'] }
        : { orderBy?: ResourceDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceDetail model
   */
  readonly fields: ResourceDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resource<T extends ResourceDetail$resourceArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDetail$resourceArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the ResourceDetail model
   */ 
  interface ResourceDetailFieldRefs {
    readonly id: FieldRef<"ResourceDetail", 'Int'>
    readonly pub_year: FieldRef<"ResourceDetail", 'Int'>
    readonly isbn: FieldRef<"ResourceDetail", 'String'>
    readonly description: FieldRef<"ResourceDetail", 'Json'>
    readonly created_at: FieldRef<"ResourceDetail", 'DateTime'>
    readonly updated_at: FieldRef<"ResourceDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceDetail findUnique
   */
  export type ResourceDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * Filter, which ResourceDetail to fetch.
     */
    where: ResourceDetailWhereUniqueInput
  }

  /**
   * ResourceDetail findUniqueOrThrow
   */
  export type ResourceDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * Filter, which ResourceDetail to fetch.
     */
    where: ResourceDetailWhereUniqueInput
  }

  /**
   * ResourceDetail findFirst
   */
  export type ResourceDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * Filter, which ResourceDetail to fetch.
     */
    where?: ResourceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceDetails to fetch.
     */
    orderBy?: ResourceDetailOrderByWithRelationInput | ResourceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceDetails.
     */
    cursor?: ResourceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceDetails.
     */
    distinct?: ResourceDetailScalarFieldEnum | ResourceDetailScalarFieldEnum[]
  }

  /**
   * ResourceDetail findFirstOrThrow
   */
  export type ResourceDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * Filter, which ResourceDetail to fetch.
     */
    where?: ResourceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceDetails to fetch.
     */
    orderBy?: ResourceDetailOrderByWithRelationInput | ResourceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceDetails.
     */
    cursor?: ResourceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceDetails.
     */
    distinct?: ResourceDetailScalarFieldEnum | ResourceDetailScalarFieldEnum[]
  }

  /**
   * ResourceDetail findMany
   */
  export type ResourceDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * Filter, which ResourceDetails to fetch.
     */
    where?: ResourceDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceDetails to fetch.
     */
    orderBy?: ResourceDetailOrderByWithRelationInput | ResourceDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceDetails.
     */
    cursor?: ResourceDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceDetails.
     */
    skip?: number
    distinct?: ResourceDetailScalarFieldEnum | ResourceDetailScalarFieldEnum[]
  }

  /**
   * ResourceDetail create
   */
  export type ResourceDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceDetail.
     */
    data: XOR<ResourceDetailCreateInput, ResourceDetailUncheckedCreateInput>
  }

  /**
   * ResourceDetail createMany
   */
  export type ResourceDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceDetails.
     */
    data: ResourceDetailCreateManyInput | ResourceDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceDetail createManyAndReturn
   */
  export type ResourceDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceDetails.
     */
    data: ResourceDetailCreateManyInput | ResourceDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceDetail update
   */
  export type ResourceDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceDetail.
     */
    data: XOR<ResourceDetailUpdateInput, ResourceDetailUncheckedUpdateInput>
    /**
     * Choose, which ResourceDetail to update.
     */
    where: ResourceDetailWhereUniqueInput
  }

  /**
   * ResourceDetail updateMany
   */
  export type ResourceDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceDetails.
     */
    data: XOR<ResourceDetailUpdateManyMutationInput, ResourceDetailUncheckedUpdateManyInput>
    /**
     * Filter which ResourceDetails to update
     */
    where?: ResourceDetailWhereInput
  }

  /**
   * ResourceDetail upsert
   */
  export type ResourceDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceDetail to update in case it exists.
     */
    where: ResourceDetailWhereUniqueInput
    /**
     * In case the ResourceDetail found by the `where` argument doesn't exist, create a new ResourceDetail with this data.
     */
    create: XOR<ResourceDetailCreateInput, ResourceDetailUncheckedCreateInput>
    /**
     * In case the ResourceDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceDetailUpdateInput, ResourceDetailUncheckedUpdateInput>
  }

  /**
   * ResourceDetail delete
   */
  export type ResourceDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
    /**
     * Filter which ResourceDetail to delete.
     */
    where: ResourceDetailWhereUniqueInput
  }

  /**
   * ResourceDetail deleteMany
   */
  export type ResourceDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceDetails to delete
     */
    where?: ResourceDetailWhereInput
  }

  /**
   * ResourceDetail.resource
   */
  export type ResourceDetail$resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
  }

  /**
   * ResourceDetail without action
   */
  export type ResourceDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceDetail
     */
    select?: ResourceDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceDetailInclude<ExtArgs> | null
  }


  /**
   * Model ResourceInstance
   */

  export type AggregateResourceInstance = {
    _count: ResourceInstanceCountAggregateOutputType | null
    _min: ResourceInstanceMinAggregateOutputType | null
    _max: ResourceInstanceMaxAggregateOutputType | null
  }

  export type ResourceInstanceMinAggregateOutputType = {
    id: string | null
    instance_name: string | null
    resource_id: string | null
    lang: $Enums.ResourceLang | null
    status: $Enums.ResourceInstanceStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceInstanceMaxAggregateOutputType = {
    id: string | null
    instance_name: string | null
    resource_id: string | null
    lang: $Enums.ResourceLang | null
    status: $Enums.ResourceInstanceStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceInstanceCountAggregateOutputType = {
    id: number
    instance_name: number
    resource_id: number
    lang: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResourceInstanceMinAggregateInputType = {
    id?: true
    instance_name?: true
    resource_id?: true
    lang?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceInstanceMaxAggregateInputType = {
    id?: true
    instance_name?: true
    resource_id?: true
    lang?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceInstanceCountAggregateInputType = {
    id?: true
    instance_name?: true
    resource_id?: true
    lang?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResourceInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceInstance to aggregate.
     */
    where?: ResourceInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceInstances to fetch.
     */
    orderBy?: ResourceInstanceOrderByWithRelationInput | ResourceInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceInstances
    **/
    _count?: true | ResourceInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceInstanceMaxAggregateInputType
  }

  export type GetResourceInstanceAggregateType<T extends ResourceInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceInstance[P]>
      : GetScalarType<T[P], AggregateResourceInstance[P]>
  }




  export type ResourceInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceInstanceWhereInput
    orderBy?: ResourceInstanceOrderByWithAggregationInput | ResourceInstanceOrderByWithAggregationInput[]
    by: ResourceInstanceScalarFieldEnum[] | ResourceInstanceScalarFieldEnum
    having?: ResourceInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceInstanceCountAggregateInputType | true
    _min?: ResourceInstanceMinAggregateInputType
    _max?: ResourceInstanceMaxAggregateInputType
  }

  export type ResourceInstanceGroupByOutputType = {
    id: string
    instance_name: string
    resource_id: string
    lang: $Enums.ResourceLang
    status: $Enums.ResourceInstanceStatus
    created_at: Date
    updated_at: Date
    _count: ResourceInstanceCountAggregateOutputType | null
    _min: ResourceInstanceMinAggregateOutputType | null
    _max: ResourceInstanceMaxAggregateOutputType | null
  }

  type GetResourceInstanceGroupByPayload<T extends ResourceInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceInstanceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instance_name?: boolean
    resource_id?: boolean
    lang?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
    loan?: boolean | ResourceInstance$loanArgs<ExtArgs>
    transactions?: boolean | ResourceInstance$transactionsArgs<ExtArgs>
    _count?: boolean | ResourceInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceInstance"]>

  export type ResourceInstanceSelectScalar = {
    id?: boolean
    instance_name?: boolean
    resource_id?: boolean
    lang?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type ResourceInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
    loan?: boolean | ResourceInstance$loanArgs<ExtArgs>
    transactions?: boolean | ResourceInstance$transactionsArgs<ExtArgs>
    _count?: boolean | ResourceInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResourceInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceInstance"
    objects: {
      resource: Prisma.$ResourcePayload<ExtArgs>
      loan: Prisma.$ResourceLoanPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instance_name: string
      resource_id: string
      lang: $Enums.ResourceLang
      status: $Enums.ResourceInstanceStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["resourceInstance"]>
    composites: {}
  }


  type ResourceInstanceGetPayload<S extends boolean | null | undefined | ResourceInstanceDefaultArgs> = $Result.GetResult<Prisma.$ResourceInstancePayload, S>

  type ResourceInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceInstanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceInstanceCountAggregateInputType | true
    }

  export interface ResourceInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceInstance'], meta: { name: 'ResourceInstance' } }
    /**
     * Find zero or one ResourceInstance that matches the filter.
     * @param {ResourceInstanceFindUniqueArgs} args - Arguments to find a ResourceInstance
     * @example
     * // Get one ResourceInstance
     * const resourceInstance = await prisma.resourceInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceInstanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceInstanceFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceInstance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceInstanceFindUniqueOrThrowArgs} args - Arguments to find a ResourceInstance
     * @example
     * // Get one ResourceInstance
     * const resourceInstance = await prisma.resourceInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceInstanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceFindFirstArgs} args - Arguments to find a ResourceInstance
     * @example
     * // Get one ResourceInstance
     * const resourceInstance = await prisma.resourceInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceInstanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceFindFirstOrThrowArgs} args - Arguments to find a ResourceInstance
     * @example
     * // Get one ResourceInstance
     * const resourceInstance = await prisma.resourceInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceInstanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceInstances
     * const resourceInstances = await prisma.resourceInstance.findMany()
     * 
     * // Get first 10 ResourceInstances
     * const resourceInstances = await prisma.resourceInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceInstanceWithIdOnly = await prisma.resourceInstance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResourceInstanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceInstance.
     * @param {ResourceInstanceCreateArgs} args - Arguments to create a ResourceInstance.
     * @example
     * // Create one ResourceInstance
     * const ResourceInstance = await prisma.resourceInstance.create({
     *   data: {
     *     // ... data to create a ResourceInstance
     *   }
     * })
     * 
    **/
    create<T extends ResourceInstanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceInstanceCreateArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceInstances.
     * @param {ResourceInstanceCreateManyArgs} args - Arguments to create many ResourceInstances.
     * @example
     * // Create many ResourceInstances
     * const resourceInstance = await prisma.resourceInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceInstanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceInstances and returns the data saved in the database.
     * @param {ResourceInstanceCreateManyAndReturnArgs} args - Arguments to create many ResourceInstances.
     * @example
     * // Create many ResourceInstances
     * const resourceInstance = await prisma.resourceInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceInstances and only return the `id`
     * const resourceInstanceWithIdOnly = await prisma.resourceInstance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceInstanceCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceInstance.
     * @param {ResourceInstanceDeleteArgs} args - Arguments to delete one ResourceInstance.
     * @example
     * // Delete one ResourceInstance
     * const ResourceInstance = await prisma.resourceInstance.delete({
     *   where: {
     *     // ... filter to delete one ResourceInstance
     *   }
     * })
     * 
    **/
    delete<T extends ResourceInstanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceInstanceDeleteArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceInstance.
     * @param {ResourceInstanceUpdateArgs} args - Arguments to update one ResourceInstance.
     * @example
     * // Update one ResourceInstance
     * const resourceInstance = await prisma.resourceInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceInstanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceInstanceUpdateArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceInstances.
     * @param {ResourceInstanceDeleteManyArgs} args - Arguments to filter ResourceInstances to delete.
     * @example
     * // Delete a few ResourceInstances
     * const { count } = await prisma.resourceInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceInstanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceInstanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceInstances
     * const resourceInstance = await prisma.resourceInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceInstanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceInstanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceInstance.
     * @param {ResourceInstanceUpsertArgs} args - Arguments to update or create a ResourceInstance.
     * @example
     * // Update or create a ResourceInstance
     * const resourceInstance = await prisma.resourceInstance.upsert({
     *   create: {
     *     // ... data to create a ResourceInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceInstance we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceInstanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceInstanceUpsertArgs<ExtArgs>>
    ): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceCountArgs} args - Arguments to filter ResourceInstances to count.
     * @example
     * // Count the number of ResourceInstances
     * const count = await prisma.resourceInstance.count({
     *   where: {
     *     // ... the filter for the ResourceInstances we want to count
     *   }
     * })
    **/
    count<T extends ResourceInstanceCountArgs>(
      args?: Subset<T, ResourceInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceInstanceAggregateArgs>(args: Subset<T, ResourceInstanceAggregateArgs>): Prisma.PrismaPromise<GetResourceInstanceAggregateType<T>>

    /**
     * Group by ResourceInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceInstanceGroupByArgs} args - Group by arguments.
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
      T extends ResourceInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceInstanceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceInstance model
   */
  readonly fields: ResourceInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    loan<T extends ResourceInstance$loanArgs<ExtArgs> = {}>(args?: Subset<T, ResourceInstance$loanArgs<ExtArgs>>): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    transactions<T extends ResourceInstance$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, ResourceInstance$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the ResourceInstance model
   */ 
  interface ResourceInstanceFieldRefs {
    readonly id: FieldRef<"ResourceInstance", 'String'>
    readonly instance_name: FieldRef<"ResourceInstance", 'String'>
    readonly resource_id: FieldRef<"ResourceInstance", 'String'>
    readonly lang: FieldRef<"ResourceInstance", 'ResourceLang'>
    readonly status: FieldRef<"ResourceInstance", 'ResourceInstanceStatus'>
    readonly created_at: FieldRef<"ResourceInstance", 'DateTime'>
    readonly updated_at: FieldRef<"ResourceInstance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceInstance findUnique
   */
  export type ResourceInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ResourceInstance to fetch.
     */
    where: ResourceInstanceWhereUniqueInput
  }

  /**
   * ResourceInstance findUniqueOrThrow
   */
  export type ResourceInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ResourceInstance to fetch.
     */
    where: ResourceInstanceWhereUniqueInput
  }

  /**
   * ResourceInstance findFirst
   */
  export type ResourceInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ResourceInstance to fetch.
     */
    where?: ResourceInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceInstances to fetch.
     */
    orderBy?: ResourceInstanceOrderByWithRelationInput | ResourceInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceInstances.
     */
    cursor?: ResourceInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceInstances.
     */
    distinct?: ResourceInstanceScalarFieldEnum | ResourceInstanceScalarFieldEnum[]
  }

  /**
   * ResourceInstance findFirstOrThrow
   */
  export type ResourceInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ResourceInstance to fetch.
     */
    where?: ResourceInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceInstances to fetch.
     */
    orderBy?: ResourceInstanceOrderByWithRelationInput | ResourceInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceInstances.
     */
    cursor?: ResourceInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceInstances.
     */
    distinct?: ResourceInstanceScalarFieldEnum | ResourceInstanceScalarFieldEnum[]
  }

  /**
   * ResourceInstance findMany
   */
  export type ResourceInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * Filter, which ResourceInstances to fetch.
     */
    where?: ResourceInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceInstances to fetch.
     */
    orderBy?: ResourceInstanceOrderByWithRelationInput | ResourceInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceInstances.
     */
    cursor?: ResourceInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceInstances.
     */
    skip?: number
    distinct?: ResourceInstanceScalarFieldEnum | ResourceInstanceScalarFieldEnum[]
  }

  /**
   * ResourceInstance create
   */
  export type ResourceInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceInstance.
     */
    data: XOR<ResourceInstanceCreateInput, ResourceInstanceUncheckedCreateInput>
  }

  /**
   * ResourceInstance createMany
   */
  export type ResourceInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceInstances.
     */
    data: ResourceInstanceCreateManyInput | ResourceInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceInstance createManyAndReturn
   */
  export type ResourceInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceInstances.
     */
    data: ResourceInstanceCreateManyInput | ResourceInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceInstance update
   */
  export type ResourceInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceInstance.
     */
    data: XOR<ResourceInstanceUpdateInput, ResourceInstanceUncheckedUpdateInput>
    /**
     * Choose, which ResourceInstance to update.
     */
    where: ResourceInstanceWhereUniqueInput
  }

  /**
   * ResourceInstance updateMany
   */
  export type ResourceInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceInstances.
     */
    data: XOR<ResourceInstanceUpdateManyMutationInput, ResourceInstanceUncheckedUpdateManyInput>
    /**
     * Filter which ResourceInstances to update
     */
    where?: ResourceInstanceWhereInput
  }

  /**
   * ResourceInstance upsert
   */
  export type ResourceInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceInstance to update in case it exists.
     */
    where: ResourceInstanceWhereUniqueInput
    /**
     * In case the ResourceInstance found by the `where` argument doesn't exist, create a new ResourceInstance with this data.
     */
    create: XOR<ResourceInstanceCreateInput, ResourceInstanceUncheckedCreateInput>
    /**
     * In case the ResourceInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceInstanceUpdateInput, ResourceInstanceUncheckedUpdateInput>
  }

  /**
   * ResourceInstance delete
   */
  export type ResourceInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    /**
     * Filter which ResourceInstance to delete.
     */
    where: ResourceInstanceWhereUniqueInput
  }

  /**
   * ResourceInstance deleteMany
   */
  export type ResourceInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceInstances to delete
     */
    where?: ResourceInstanceWhereInput
  }

  /**
   * ResourceInstance.loan
   */
  export type ResourceInstance$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    where?: ResourceLoanWhereInput
  }

  /**
   * ResourceInstance.transactions
   */
  export type ResourceInstance$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * ResourceInstance without action
   */
  export type ResourceInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
  }


  /**
   * Model ResourceLoan
   */

  export type AggregateResourceLoan = {
    _count: ResourceLoanCountAggregateOutputType | null
    _min: ResourceLoanMinAggregateOutputType | null
    _max: ResourceLoanMaxAggregateOutputType | null
  }

  export type ResourceLoanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    until: Date | null
    instanceId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceLoanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    until: Date | null
    instanceId: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceLoanCountAggregateOutputType = {
    id: number
    userId: number
    until: number
    instanceId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResourceLoanMinAggregateInputType = {
    id?: true
    userId?: true
    until?: true
    instanceId?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceLoanMaxAggregateInputType = {
    id?: true
    userId?: true
    until?: true
    instanceId?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceLoanCountAggregateInputType = {
    id?: true
    userId?: true
    until?: true
    instanceId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResourceLoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceLoan to aggregate.
     */
    where?: ResourceLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLoans to fetch.
     */
    orderBy?: ResourceLoanOrderByWithRelationInput | ResourceLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceLoans
    **/
    _count?: true | ResourceLoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceLoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceLoanMaxAggregateInputType
  }

  export type GetResourceLoanAggregateType<T extends ResourceLoanAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceLoan[P]>
      : GetScalarType<T[P], AggregateResourceLoan[P]>
  }




  export type ResourceLoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceLoanWhereInput
    orderBy?: ResourceLoanOrderByWithAggregationInput | ResourceLoanOrderByWithAggregationInput[]
    by: ResourceLoanScalarFieldEnum[] | ResourceLoanScalarFieldEnum
    having?: ResourceLoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceLoanCountAggregateInputType | true
    _min?: ResourceLoanMinAggregateInputType
    _max?: ResourceLoanMaxAggregateInputType
  }

  export type ResourceLoanGroupByOutputType = {
    id: string
    userId: string
    until: Date
    instanceId: string
    created_at: Date
    updated_at: Date
    _count: ResourceLoanCountAggregateOutputType | null
    _min: ResourceLoanMinAggregateOutputType | null
    _max: ResourceLoanMaxAggregateOutputType | null
  }

  type GetResourceLoanGroupByPayload<T extends ResourceLoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceLoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceLoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceLoanGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceLoanGroupByOutputType[P]>
        }
      >
    >


  export type ResourceLoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    until?: boolean
    instanceId?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instance?: boolean | ResourceInstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceLoan"]>

  export type ResourceLoanSelectScalar = {
    id?: boolean
    userId?: boolean
    until?: boolean
    instanceId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type ResourceLoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instance?: boolean | ResourceInstanceDefaultArgs<ExtArgs>
  }


  export type $ResourceLoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceLoan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      instance: Prisma.$ResourceInstancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      until: Date
      instanceId: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["resourceLoan"]>
    composites: {}
  }


  type ResourceLoanGetPayload<S extends boolean | null | undefined | ResourceLoanDefaultArgs> = $Result.GetResult<Prisma.$ResourceLoanPayload, S>

  type ResourceLoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceLoanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceLoanCountAggregateInputType | true
    }

  export interface ResourceLoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceLoan'], meta: { name: 'ResourceLoan' } }
    /**
     * Find zero or one ResourceLoan that matches the filter.
     * @param {ResourceLoanFindUniqueArgs} args - Arguments to find a ResourceLoan
     * @example
     * // Get one ResourceLoan
     * const resourceLoan = await prisma.resourceLoan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceLoanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceLoanFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceLoan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceLoanFindUniqueOrThrowArgs} args - Arguments to find a ResourceLoan
     * @example
     * // Get one ResourceLoan
     * const resourceLoan = await prisma.resourceLoan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceLoanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceLoan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanFindFirstArgs} args - Arguments to find a ResourceLoan
     * @example
     * // Get one ResourceLoan
     * const resourceLoan = await prisma.resourceLoan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceLoanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceLoan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanFindFirstOrThrowArgs} args - Arguments to find a ResourceLoan
     * @example
     * // Get one ResourceLoan
     * const resourceLoan = await prisma.resourceLoan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceLoanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceLoans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceLoans
     * const resourceLoans = await prisma.resourceLoan.findMany()
     * 
     * // Get first 10 ResourceLoans
     * const resourceLoans = await prisma.resourceLoan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceLoanWithIdOnly = await prisma.resourceLoan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResourceLoanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceLoan.
     * @param {ResourceLoanCreateArgs} args - Arguments to create a ResourceLoan.
     * @example
     * // Create one ResourceLoan
     * const ResourceLoan = await prisma.resourceLoan.create({
     *   data: {
     *     // ... data to create a ResourceLoan
     *   }
     * })
     * 
    **/
    create<T extends ResourceLoanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceLoanCreateArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceLoans.
     * @param {ResourceLoanCreateManyArgs} args - Arguments to create many ResourceLoans.
     * @example
     * // Create many ResourceLoans
     * const resourceLoan = await prisma.resourceLoan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceLoanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceLoans and returns the data saved in the database.
     * @param {ResourceLoanCreateManyAndReturnArgs} args - Arguments to create many ResourceLoans.
     * @example
     * // Create many ResourceLoans
     * const resourceLoan = await prisma.resourceLoan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceLoans and only return the `id`
     * const resourceLoanWithIdOnly = await prisma.resourceLoan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceLoanCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceLoan.
     * @param {ResourceLoanDeleteArgs} args - Arguments to delete one ResourceLoan.
     * @example
     * // Delete one ResourceLoan
     * const ResourceLoan = await prisma.resourceLoan.delete({
     *   where: {
     *     // ... filter to delete one ResourceLoan
     *   }
     * })
     * 
    **/
    delete<T extends ResourceLoanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceLoanDeleteArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceLoan.
     * @param {ResourceLoanUpdateArgs} args - Arguments to update one ResourceLoan.
     * @example
     * // Update one ResourceLoan
     * const resourceLoan = await prisma.resourceLoan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceLoanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceLoanUpdateArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceLoans.
     * @param {ResourceLoanDeleteManyArgs} args - Arguments to filter ResourceLoans to delete.
     * @example
     * // Delete a few ResourceLoans
     * const { count } = await prisma.resourceLoan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceLoanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceLoanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceLoans
     * const resourceLoan = await prisma.resourceLoan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceLoanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceLoanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceLoan.
     * @param {ResourceLoanUpsertArgs} args - Arguments to update or create a ResourceLoan.
     * @example
     * // Update or create a ResourceLoan
     * const resourceLoan = await prisma.resourceLoan.upsert({
     *   create: {
     *     // ... data to create a ResourceLoan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceLoan we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceLoanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceLoanUpsertArgs<ExtArgs>>
    ): Prisma__ResourceLoanClient<$Result.GetResult<Prisma.$ResourceLoanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanCountArgs} args - Arguments to filter ResourceLoans to count.
     * @example
     * // Count the number of ResourceLoans
     * const count = await prisma.resourceLoan.count({
     *   where: {
     *     // ... the filter for the ResourceLoans we want to count
     *   }
     * })
    **/
    count<T extends ResourceLoanCountArgs>(
      args?: Subset<T, ResourceLoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceLoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceLoanAggregateArgs>(args: Subset<T, ResourceLoanAggregateArgs>): Prisma.PrismaPromise<GetResourceLoanAggregateType<T>>

    /**
     * Group by ResourceLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceLoanGroupByArgs} args - Group by arguments.
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
      T extends ResourceLoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceLoanGroupByArgs['orderBy'] }
        : { orderBy?: ResourceLoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceLoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceLoan model
   */
  readonly fields: ResourceLoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceLoan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceLoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    instance<T extends ResourceInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceInstanceDefaultArgs<ExtArgs>>): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ResourceLoan model
   */ 
  interface ResourceLoanFieldRefs {
    readonly id: FieldRef<"ResourceLoan", 'String'>
    readonly userId: FieldRef<"ResourceLoan", 'String'>
    readonly until: FieldRef<"ResourceLoan", 'DateTime'>
    readonly instanceId: FieldRef<"ResourceLoan", 'String'>
    readonly created_at: FieldRef<"ResourceLoan", 'DateTime'>
    readonly updated_at: FieldRef<"ResourceLoan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceLoan findUnique
   */
  export type ResourceLoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLoan to fetch.
     */
    where: ResourceLoanWhereUniqueInput
  }

  /**
   * ResourceLoan findUniqueOrThrow
   */
  export type ResourceLoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLoan to fetch.
     */
    where: ResourceLoanWhereUniqueInput
  }

  /**
   * ResourceLoan findFirst
   */
  export type ResourceLoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLoan to fetch.
     */
    where?: ResourceLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLoans to fetch.
     */
    orderBy?: ResourceLoanOrderByWithRelationInput | ResourceLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceLoans.
     */
    cursor?: ResourceLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLoans.
     */
    distinct?: ResourceLoanScalarFieldEnum | ResourceLoanScalarFieldEnum[]
  }

  /**
   * ResourceLoan findFirstOrThrow
   */
  export type ResourceLoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLoan to fetch.
     */
    where?: ResourceLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLoans to fetch.
     */
    orderBy?: ResourceLoanOrderByWithRelationInput | ResourceLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceLoans.
     */
    cursor?: ResourceLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceLoans.
     */
    distinct?: ResourceLoanScalarFieldEnum | ResourceLoanScalarFieldEnum[]
  }

  /**
   * ResourceLoan findMany
   */
  export type ResourceLoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * Filter, which ResourceLoans to fetch.
     */
    where?: ResourceLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceLoans to fetch.
     */
    orderBy?: ResourceLoanOrderByWithRelationInput | ResourceLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceLoans.
     */
    cursor?: ResourceLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceLoans.
     */
    skip?: number
    distinct?: ResourceLoanScalarFieldEnum | ResourceLoanScalarFieldEnum[]
  }

  /**
   * ResourceLoan create
   */
  export type ResourceLoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceLoan.
     */
    data: XOR<ResourceLoanCreateInput, ResourceLoanUncheckedCreateInput>
  }

  /**
   * ResourceLoan createMany
   */
  export type ResourceLoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceLoans.
     */
    data: ResourceLoanCreateManyInput | ResourceLoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceLoan createManyAndReturn
   */
  export type ResourceLoanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceLoans.
     */
    data: ResourceLoanCreateManyInput | ResourceLoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceLoan update
   */
  export type ResourceLoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceLoan.
     */
    data: XOR<ResourceLoanUpdateInput, ResourceLoanUncheckedUpdateInput>
    /**
     * Choose, which ResourceLoan to update.
     */
    where: ResourceLoanWhereUniqueInput
  }

  /**
   * ResourceLoan updateMany
   */
  export type ResourceLoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceLoans.
     */
    data: XOR<ResourceLoanUpdateManyMutationInput, ResourceLoanUncheckedUpdateManyInput>
    /**
     * Filter which ResourceLoans to update
     */
    where?: ResourceLoanWhereInput
  }

  /**
   * ResourceLoan upsert
   */
  export type ResourceLoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceLoan to update in case it exists.
     */
    where: ResourceLoanWhereUniqueInput
    /**
     * In case the ResourceLoan found by the `where` argument doesn't exist, create a new ResourceLoan with this data.
     */
    create: XOR<ResourceLoanCreateInput, ResourceLoanUncheckedCreateInput>
    /**
     * In case the ResourceLoan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceLoanUpdateInput, ResourceLoanUncheckedUpdateInput>
  }

  /**
   * ResourceLoan delete
   */
  export type ResourceLoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
    /**
     * Filter which ResourceLoan to delete.
     */
    where: ResourceLoanWhereUniqueInput
  }

  /**
   * ResourceLoan deleteMany
   */
  export type ResourceLoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceLoans to delete
     */
    where?: ResourceLoanWhereInput
  }

  /**
   * ResourceLoan without action
   */
  export type ResourceLoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceLoan
     */
    select?: ResourceLoanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceLoanInclude<ExtArgs> | null
  }


  /**
   * Model ResourceTestimonial
   */

  export type AggregateResourceTestimonial = {
    _count: ResourceTestimonialCountAggregateOutputType | null
    _avg: ResourceTestimonialAvgAggregateOutputType | null
    _sum: ResourceTestimonialSumAggregateOutputType | null
    _min: ResourceTestimonialMinAggregateOutputType | null
    _max: ResourceTestimonialMaxAggregateOutputType | null
  }

  export type ResourceTestimonialAvgAggregateOutputType = {
    rating: number | null
  }

  export type ResourceTestimonialSumAggregateOutputType = {
    rating: number | null
  }

  export type ResourceTestimonialMinAggregateOutputType = {
    userId: string | null
    resourceId: string | null
    rating: number | null
    title: string | null
    testimonial: string | null
    created_at: Date | null
  }

  export type ResourceTestimonialMaxAggregateOutputType = {
    userId: string | null
    resourceId: string | null
    rating: number | null
    title: string | null
    testimonial: string | null
    created_at: Date | null
  }

  export type ResourceTestimonialCountAggregateOutputType = {
    userId: number
    resourceId: number
    rating: number
    title: number
    testimonial: number
    created_at: number
    _all: number
  }


  export type ResourceTestimonialAvgAggregateInputType = {
    rating?: true
  }

  export type ResourceTestimonialSumAggregateInputType = {
    rating?: true
  }

  export type ResourceTestimonialMinAggregateInputType = {
    userId?: true
    resourceId?: true
    rating?: true
    title?: true
    testimonial?: true
    created_at?: true
  }

  export type ResourceTestimonialMaxAggregateInputType = {
    userId?: true
    resourceId?: true
    rating?: true
    title?: true
    testimonial?: true
    created_at?: true
  }

  export type ResourceTestimonialCountAggregateInputType = {
    userId?: true
    resourceId?: true
    rating?: true
    title?: true
    testimonial?: true
    created_at?: true
    _all?: true
  }

  export type ResourceTestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceTestimonial to aggregate.
     */
    where?: ResourceTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTestimonials to fetch.
     */
    orderBy?: ResourceTestimonialOrderByWithRelationInput | ResourceTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceTestimonials
    **/
    _count?: true | ResourceTestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceTestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceTestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceTestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceTestimonialMaxAggregateInputType
  }

  export type GetResourceTestimonialAggregateType<T extends ResourceTestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceTestimonial[P]>
      : GetScalarType<T[P], AggregateResourceTestimonial[P]>
  }




  export type ResourceTestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceTestimonialWhereInput
    orderBy?: ResourceTestimonialOrderByWithAggregationInput | ResourceTestimonialOrderByWithAggregationInput[]
    by: ResourceTestimonialScalarFieldEnum[] | ResourceTestimonialScalarFieldEnum
    having?: ResourceTestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceTestimonialCountAggregateInputType | true
    _avg?: ResourceTestimonialAvgAggregateInputType
    _sum?: ResourceTestimonialSumAggregateInputType
    _min?: ResourceTestimonialMinAggregateInputType
    _max?: ResourceTestimonialMaxAggregateInputType
  }

  export type ResourceTestimonialGroupByOutputType = {
    userId: string
    resourceId: string
    rating: number
    title: string
    testimonial: string | null
    created_at: Date
    _count: ResourceTestimonialCountAggregateOutputType | null
    _avg: ResourceTestimonialAvgAggregateOutputType | null
    _sum: ResourceTestimonialSumAggregateOutputType | null
    _min: ResourceTestimonialMinAggregateOutputType | null
    _max: ResourceTestimonialMaxAggregateOutputType | null
  }

  type GetResourceTestimonialGroupByPayload<T extends ResourceTestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceTestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceTestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceTestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceTestimonialGroupByOutputType[P]>
        }
      >
    >


  export type ResourceTestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    resourceId?: boolean
    rating?: boolean
    title?: boolean
    testimonial?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceTestimonial"]>

  export type ResourceTestimonialSelectScalar = {
    userId?: boolean
    resourceId?: boolean
    rating?: boolean
    title?: boolean
    testimonial?: boolean
    created_at?: boolean
  }


  export type ResourceTestimonialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }


  export type $ResourceTestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceTestimonial"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      resourceId: string
      rating: number
      title: string
      testimonial: string | null
      created_at: Date
    }, ExtArgs["result"]["resourceTestimonial"]>
    composites: {}
  }


  type ResourceTestimonialGetPayload<S extends boolean | null | undefined | ResourceTestimonialDefaultArgs> = $Result.GetResult<Prisma.$ResourceTestimonialPayload, S>

  type ResourceTestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceTestimonialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceTestimonialCountAggregateInputType | true
    }

  export interface ResourceTestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceTestimonial'], meta: { name: 'ResourceTestimonial' } }
    /**
     * Find zero or one ResourceTestimonial that matches the filter.
     * @param {ResourceTestimonialFindUniqueArgs} args - Arguments to find a ResourceTestimonial
     * @example
     * // Get one ResourceTestimonial
     * const resourceTestimonial = await prisma.resourceTestimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceTestimonialFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTestimonialFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceTestimonial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceTestimonialFindUniqueOrThrowArgs} args - Arguments to find a ResourceTestimonial
     * @example
     * // Get one ResourceTestimonial
     * const resourceTestimonial = await prisma.resourceTestimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceTestimonialFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceTestimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialFindFirstArgs} args - Arguments to find a ResourceTestimonial
     * @example
     * // Get one ResourceTestimonial
     * const resourceTestimonial = await prisma.resourceTestimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceTestimonialFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceTestimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialFindFirstOrThrowArgs} args - Arguments to find a ResourceTestimonial
     * @example
     * // Get one ResourceTestimonial
     * const resourceTestimonial = await prisma.resourceTestimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceTestimonialFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceTestimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceTestimonials
     * const resourceTestimonials = await prisma.resourceTestimonial.findMany()
     * 
     * // Get first 10 ResourceTestimonials
     * const resourceTestimonials = await prisma.resourceTestimonial.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const resourceTestimonialWithUserIdOnly = await prisma.resourceTestimonial.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends ResourceTestimonialFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceTestimonial.
     * @param {ResourceTestimonialCreateArgs} args - Arguments to create a ResourceTestimonial.
     * @example
     * // Create one ResourceTestimonial
     * const ResourceTestimonial = await prisma.resourceTestimonial.create({
     *   data: {
     *     // ... data to create a ResourceTestimonial
     *   }
     * })
     * 
    **/
    create<T extends ResourceTestimonialCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTestimonialCreateArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceTestimonials.
     * @param {ResourceTestimonialCreateManyArgs} args - Arguments to create many ResourceTestimonials.
     * @example
     * // Create many ResourceTestimonials
     * const resourceTestimonial = await prisma.resourceTestimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceTestimonialCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceTestimonials and returns the data saved in the database.
     * @param {ResourceTestimonialCreateManyAndReturnArgs} args - Arguments to create many ResourceTestimonials.
     * @example
     * // Create many ResourceTestimonials
     * const resourceTestimonial = await prisma.resourceTestimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceTestimonials and only return the `userId`
     * const resourceTestimonialWithUserIdOnly = await prisma.resourceTestimonial.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceTestimonialCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceTestimonial.
     * @param {ResourceTestimonialDeleteArgs} args - Arguments to delete one ResourceTestimonial.
     * @example
     * // Delete one ResourceTestimonial
     * const ResourceTestimonial = await prisma.resourceTestimonial.delete({
     *   where: {
     *     // ... filter to delete one ResourceTestimonial
     *   }
     * })
     * 
    **/
    delete<T extends ResourceTestimonialDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTestimonialDeleteArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceTestimonial.
     * @param {ResourceTestimonialUpdateArgs} args - Arguments to update one ResourceTestimonial.
     * @example
     * // Update one ResourceTestimonial
     * const resourceTestimonial = await prisma.resourceTestimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceTestimonialUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTestimonialUpdateArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceTestimonials.
     * @param {ResourceTestimonialDeleteManyArgs} args - Arguments to filter ResourceTestimonials to delete.
     * @example
     * // Delete a few ResourceTestimonials
     * const { count } = await prisma.resourceTestimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceTestimonialDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTestimonialDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceTestimonials
     * const resourceTestimonial = await prisma.resourceTestimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceTestimonialUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTestimonialUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceTestimonial.
     * @param {ResourceTestimonialUpsertArgs} args - Arguments to update or create a ResourceTestimonial.
     * @example
     * // Update or create a ResourceTestimonial
     * const resourceTestimonial = await prisma.resourceTestimonial.upsert({
     *   create: {
     *     // ... data to create a ResourceTestimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceTestimonial we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceTestimonialUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTestimonialUpsertArgs<ExtArgs>>
    ): Prisma__ResourceTestimonialClient<$Result.GetResult<Prisma.$ResourceTestimonialPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialCountArgs} args - Arguments to filter ResourceTestimonials to count.
     * @example
     * // Count the number of ResourceTestimonials
     * const count = await prisma.resourceTestimonial.count({
     *   where: {
     *     // ... the filter for the ResourceTestimonials we want to count
     *   }
     * })
    **/
    count<T extends ResourceTestimonialCountArgs>(
      args?: Subset<T, ResourceTestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceTestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceTestimonialAggregateArgs>(args: Subset<T, ResourceTestimonialAggregateArgs>): Prisma.PrismaPromise<GetResourceTestimonialAggregateType<T>>

    /**
     * Group by ResourceTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTestimonialGroupByArgs} args - Group by arguments.
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
      T extends ResourceTestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceTestimonialGroupByArgs['orderBy'] }
        : { orderBy?: ResourceTestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceTestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceTestimonial model
   */
  readonly fields: ResourceTestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceTestimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceTestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ResourceTestimonial model
   */ 
  interface ResourceTestimonialFieldRefs {
    readonly userId: FieldRef<"ResourceTestimonial", 'String'>
    readonly resourceId: FieldRef<"ResourceTestimonial", 'String'>
    readonly rating: FieldRef<"ResourceTestimonial", 'Int'>
    readonly title: FieldRef<"ResourceTestimonial", 'String'>
    readonly testimonial: FieldRef<"ResourceTestimonial", 'String'>
    readonly created_at: FieldRef<"ResourceTestimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceTestimonial findUnique
   */
  export type ResourceTestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTestimonial to fetch.
     */
    where: ResourceTestimonialWhereUniqueInput
  }

  /**
   * ResourceTestimonial findUniqueOrThrow
   */
  export type ResourceTestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTestimonial to fetch.
     */
    where: ResourceTestimonialWhereUniqueInput
  }

  /**
   * ResourceTestimonial findFirst
   */
  export type ResourceTestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTestimonial to fetch.
     */
    where?: ResourceTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTestimonials to fetch.
     */
    orderBy?: ResourceTestimonialOrderByWithRelationInput | ResourceTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceTestimonials.
     */
    cursor?: ResourceTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceTestimonials.
     */
    distinct?: ResourceTestimonialScalarFieldEnum | ResourceTestimonialScalarFieldEnum[]
  }

  /**
   * ResourceTestimonial findFirstOrThrow
   */
  export type ResourceTestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTestimonial to fetch.
     */
    where?: ResourceTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTestimonials to fetch.
     */
    orderBy?: ResourceTestimonialOrderByWithRelationInput | ResourceTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceTestimonials.
     */
    cursor?: ResourceTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceTestimonials.
     */
    distinct?: ResourceTestimonialScalarFieldEnum | ResourceTestimonialScalarFieldEnum[]
  }

  /**
   * ResourceTestimonial findMany
   */
  export type ResourceTestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTestimonials to fetch.
     */
    where?: ResourceTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTestimonials to fetch.
     */
    orderBy?: ResourceTestimonialOrderByWithRelationInput | ResourceTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceTestimonials.
     */
    cursor?: ResourceTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTestimonials.
     */
    skip?: number
    distinct?: ResourceTestimonialScalarFieldEnum | ResourceTestimonialScalarFieldEnum[]
  }

  /**
   * ResourceTestimonial create
   */
  export type ResourceTestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceTestimonial.
     */
    data: XOR<ResourceTestimonialCreateInput, ResourceTestimonialUncheckedCreateInput>
  }

  /**
   * ResourceTestimonial createMany
   */
  export type ResourceTestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceTestimonials.
     */
    data: ResourceTestimonialCreateManyInput | ResourceTestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceTestimonial createManyAndReturn
   */
  export type ResourceTestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceTestimonials.
     */
    data: ResourceTestimonialCreateManyInput | ResourceTestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceTestimonial update
   */
  export type ResourceTestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceTestimonial.
     */
    data: XOR<ResourceTestimonialUpdateInput, ResourceTestimonialUncheckedUpdateInput>
    /**
     * Choose, which ResourceTestimonial to update.
     */
    where: ResourceTestimonialWhereUniqueInput
  }

  /**
   * ResourceTestimonial updateMany
   */
  export type ResourceTestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceTestimonials.
     */
    data: XOR<ResourceTestimonialUpdateManyMutationInput, ResourceTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which ResourceTestimonials to update
     */
    where?: ResourceTestimonialWhereInput
  }

  /**
   * ResourceTestimonial upsert
   */
  export type ResourceTestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceTestimonial to update in case it exists.
     */
    where: ResourceTestimonialWhereUniqueInput
    /**
     * In case the ResourceTestimonial found by the `where` argument doesn't exist, create a new ResourceTestimonial with this data.
     */
    create: XOR<ResourceTestimonialCreateInput, ResourceTestimonialUncheckedCreateInput>
    /**
     * In case the ResourceTestimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceTestimonialUpdateInput, ResourceTestimonialUncheckedUpdateInput>
  }

  /**
   * ResourceTestimonial delete
   */
  export type ResourceTestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
    /**
     * Filter which ResourceTestimonial to delete.
     */
    where: ResourceTestimonialWhereUniqueInput
  }

  /**
   * ResourceTestimonial deleteMany
   */
  export type ResourceTestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceTestimonials to delete
     */
    where?: ResourceTestimonialWhereInput
  }

  /**
   * ResourceTestimonial without action
   */
  export type ResourceTestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTestimonial
     */
    select?: ResourceTestimonialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTestimonialInclude<ExtArgs> | null
  }


  /**
   * Model ResourceType
   */

  export type AggregateResourceType = {
    _count: ResourceTypeCountAggregateOutputType | null
    _avg: ResourceTypeAvgAggregateOutputType | null
    _sum: ResourceTypeSumAggregateOutputType | null
    _min: ResourceTypeMinAggregateOutputType | null
    _max: ResourceTypeMaxAggregateOutputType | null
  }

  export type ResourceTypeAvgAggregateOutputType = {
    id: number | null
    max_loan_days: number | null
    max_units_per_loan: number | null
  }

  export type ResourceTypeSumAggregateOutputType = {
    id: number | null
    max_loan_days: number | null
    max_units_per_loan: number | null
  }

  export type ResourceTypeMinAggregateOutputType = {
    id: number | null
    resource_type_name: $Enums.ResourceTypes | null
    max_loan_days: number | null
    max_units_per_loan: number | null
  }

  export type ResourceTypeMaxAggregateOutputType = {
    id: number | null
    resource_type_name: $Enums.ResourceTypes | null
    max_loan_days: number | null
    max_units_per_loan: number | null
  }

  export type ResourceTypeCountAggregateOutputType = {
    id: number
    resource_type_name: number
    max_loan_days: number
    max_units_per_loan: number
    _all: number
  }


  export type ResourceTypeAvgAggregateInputType = {
    id?: true
    max_loan_days?: true
    max_units_per_loan?: true
  }

  export type ResourceTypeSumAggregateInputType = {
    id?: true
    max_loan_days?: true
    max_units_per_loan?: true
  }

  export type ResourceTypeMinAggregateInputType = {
    id?: true
    resource_type_name?: true
    max_loan_days?: true
    max_units_per_loan?: true
  }

  export type ResourceTypeMaxAggregateInputType = {
    id?: true
    resource_type_name?: true
    max_loan_days?: true
    max_units_per_loan?: true
  }

  export type ResourceTypeCountAggregateInputType = {
    id?: true
    resource_type_name?: true
    max_loan_days?: true
    max_units_per_loan?: true
    _all?: true
  }

  export type ResourceTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceType to aggregate.
     */
    where?: ResourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTypes to fetch.
     */
    orderBy?: ResourceTypeOrderByWithRelationInput | ResourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceTypes
    **/
    _count?: true | ResourceTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceTypeMaxAggregateInputType
  }

  export type GetResourceTypeAggregateType<T extends ResourceTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceType[P]>
      : GetScalarType<T[P], AggregateResourceType[P]>
  }




  export type ResourceTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceTypeWhereInput
    orderBy?: ResourceTypeOrderByWithAggregationInput | ResourceTypeOrderByWithAggregationInput[]
    by: ResourceTypeScalarFieldEnum[] | ResourceTypeScalarFieldEnum
    having?: ResourceTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceTypeCountAggregateInputType | true
    _avg?: ResourceTypeAvgAggregateInputType
    _sum?: ResourceTypeSumAggregateInputType
    _min?: ResourceTypeMinAggregateInputType
    _max?: ResourceTypeMaxAggregateInputType
  }

  export type ResourceTypeGroupByOutputType = {
    id: number
    resource_type_name: $Enums.ResourceTypes
    max_loan_days: number
    max_units_per_loan: number
    _count: ResourceTypeCountAggregateOutputType | null
    _avg: ResourceTypeAvgAggregateOutputType | null
    _sum: ResourceTypeSumAggregateOutputType | null
    _min: ResourceTypeMinAggregateOutputType | null
    _max: ResourceTypeMaxAggregateOutputType | null
  }

  type GetResourceTypeGroupByPayload<T extends ResourceTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceTypeGroupByOutputType[P]>
        }
      >
    >


  export type ResourceTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource_type_name?: boolean
    max_loan_days?: boolean
    max_units_per_loan?: boolean
    Resource?: boolean | ResourceType$ResourceArgs<ExtArgs>
    _count?: boolean | ResourceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceType"]>

  export type ResourceTypeSelectScalar = {
    id?: boolean
    resource_type_name?: boolean
    max_loan_days?: boolean
    max_units_per_loan?: boolean
  }


  export type ResourceTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Resource?: boolean | ResourceType$ResourceArgs<ExtArgs>
    _count?: boolean | ResourceTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResourceTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceType"
    objects: {
      Resource: Prisma.$ResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resource_type_name: $Enums.ResourceTypes
      max_loan_days: number
      max_units_per_loan: number
    }, ExtArgs["result"]["resourceType"]>
    composites: {}
  }


  type ResourceTypeGetPayload<S extends boolean | null | undefined | ResourceTypeDefaultArgs> = $Result.GetResult<Prisma.$ResourceTypePayload, S>

  type ResourceTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceTypeCountAggregateInputType | true
    }

  export interface ResourceTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceType'], meta: { name: 'ResourceType' } }
    /**
     * Find zero or one ResourceType that matches the filter.
     * @param {ResourceTypeFindUniqueArgs} args - Arguments to find a ResourceType
     * @example
     * // Get one ResourceType
     * const resourceType = await prisma.resourceType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceTypeFindUniqueOrThrowArgs} args - Arguments to find a ResourceType
     * @example
     * // Get one ResourceType
     * const resourceType = await prisma.resourceType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeFindFirstArgs} args - Arguments to find a ResourceType
     * @example
     * // Get one ResourceType
     * const resourceType = await prisma.resourceType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeFindFirstOrThrowArgs} args - Arguments to find a ResourceType
     * @example
     * // Get one ResourceType
     * const resourceType = await prisma.resourceType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceTypes
     * const resourceTypes = await prisma.resourceType.findMany()
     * 
     * // Get first 10 ResourceTypes
     * const resourceTypes = await prisma.resourceType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceTypeWithIdOnly = await prisma.resourceType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResourceTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceType.
     * @param {ResourceTypeCreateArgs} args - Arguments to create a ResourceType.
     * @example
     * // Create one ResourceType
     * const ResourceType = await prisma.resourceType.create({
     *   data: {
     *     // ... data to create a ResourceType
     *   }
     * })
     * 
    **/
    create<T extends ResourceTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTypeCreateArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceTypes.
     * @param {ResourceTypeCreateManyArgs} args - Arguments to create many ResourceTypes.
     * @example
     * // Create many ResourceTypes
     * const resourceType = await prisma.resourceType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceTypes and returns the data saved in the database.
     * @param {ResourceTypeCreateManyAndReturnArgs} args - Arguments to create many ResourceTypes.
     * @example
     * // Create many ResourceTypes
     * const resourceType = await prisma.resourceType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceTypes and only return the `id`
     * const resourceTypeWithIdOnly = await prisma.resourceType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceTypeCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceType.
     * @param {ResourceTypeDeleteArgs} args - Arguments to delete one ResourceType.
     * @example
     * // Delete one ResourceType
     * const ResourceType = await prisma.resourceType.delete({
     *   where: {
     *     // ... filter to delete one ResourceType
     *   }
     * })
     * 
    **/
    delete<T extends ResourceTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTypeDeleteArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceType.
     * @param {ResourceTypeUpdateArgs} args - Arguments to update one ResourceType.
     * @example
     * // Update one ResourceType
     * const resourceType = await prisma.resourceType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTypeUpdateArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceTypes.
     * @param {ResourceTypeDeleteManyArgs} args - Arguments to filter ResourceTypes to delete.
     * @example
     * // Delete a few ResourceTypes
     * const { count } = await prisma.resourceType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceTypes
     * const resourceType = await prisma.resourceType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceType.
     * @param {ResourceTypeUpsertArgs} args - Arguments to update or create a ResourceType.
     * @example
     * // Update or create a ResourceType
     * const resourceType = await prisma.resourceType.upsert({
     *   create: {
     *     // ... data to create a ResourceType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceType we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceTypeUpsertArgs<ExtArgs>>
    ): Prisma__ResourceTypeClient<$Result.GetResult<Prisma.$ResourceTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeCountArgs} args - Arguments to filter ResourceTypes to count.
     * @example
     * // Count the number of ResourceTypes
     * const count = await prisma.resourceType.count({
     *   where: {
     *     // ... the filter for the ResourceTypes we want to count
     *   }
     * })
    **/
    count<T extends ResourceTypeCountArgs>(
      args?: Subset<T, ResourceTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceTypeAggregateArgs>(args: Subset<T, ResourceTypeAggregateArgs>): Prisma.PrismaPromise<GetResourceTypeAggregateType<T>>

    /**
     * Group by ResourceType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTypeGroupByArgs} args - Group by arguments.
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
      T extends ResourceTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceTypeGroupByArgs['orderBy'] }
        : { orderBy?: ResourceTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceType model
   */
  readonly fields: ResourceTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Resource<T extends ResourceType$ResourceArgs<ExtArgs> = {}>(args?: Subset<T, ResourceType$ResourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the ResourceType model
   */ 
  interface ResourceTypeFieldRefs {
    readonly id: FieldRef<"ResourceType", 'Int'>
    readonly resource_type_name: FieldRef<"ResourceType", 'ResourceTypes'>
    readonly max_loan_days: FieldRef<"ResourceType", 'Int'>
    readonly max_units_per_loan: FieldRef<"ResourceType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ResourceType findUnique
   */
  export type ResourceTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ResourceType to fetch.
     */
    where: ResourceTypeWhereUniqueInput
  }

  /**
   * ResourceType findUniqueOrThrow
   */
  export type ResourceTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ResourceType to fetch.
     */
    where: ResourceTypeWhereUniqueInput
  }

  /**
   * ResourceType findFirst
   */
  export type ResourceTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ResourceType to fetch.
     */
    where?: ResourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTypes to fetch.
     */
    orderBy?: ResourceTypeOrderByWithRelationInput | ResourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceTypes.
     */
    cursor?: ResourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceTypes.
     */
    distinct?: ResourceTypeScalarFieldEnum | ResourceTypeScalarFieldEnum[]
  }

  /**
   * ResourceType findFirstOrThrow
   */
  export type ResourceTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ResourceType to fetch.
     */
    where?: ResourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTypes to fetch.
     */
    orderBy?: ResourceTypeOrderByWithRelationInput | ResourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceTypes.
     */
    cursor?: ResourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceTypes.
     */
    distinct?: ResourceTypeScalarFieldEnum | ResourceTypeScalarFieldEnum[]
  }

  /**
   * ResourceType findMany
   */
  export type ResourceTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTypes to fetch.
     */
    where?: ResourceTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTypes to fetch.
     */
    orderBy?: ResourceTypeOrderByWithRelationInput | ResourceTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceTypes.
     */
    cursor?: ResourceTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTypes.
     */
    skip?: number
    distinct?: ResourceTypeScalarFieldEnum | ResourceTypeScalarFieldEnum[]
  }

  /**
   * ResourceType create
   */
  export type ResourceTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceType.
     */
    data?: XOR<ResourceTypeCreateInput, ResourceTypeUncheckedCreateInput>
  }

  /**
   * ResourceType createMany
   */
  export type ResourceTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceTypes.
     */
    data: ResourceTypeCreateManyInput | ResourceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceType createManyAndReturn
   */
  export type ResourceTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceTypes.
     */
    data: ResourceTypeCreateManyInput | ResourceTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceType update
   */
  export type ResourceTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceType.
     */
    data: XOR<ResourceTypeUpdateInput, ResourceTypeUncheckedUpdateInput>
    /**
     * Choose, which ResourceType to update.
     */
    where: ResourceTypeWhereUniqueInput
  }

  /**
   * ResourceType updateMany
   */
  export type ResourceTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceTypes.
     */
    data: XOR<ResourceTypeUpdateManyMutationInput, ResourceTypeUncheckedUpdateManyInput>
    /**
     * Filter which ResourceTypes to update
     */
    where?: ResourceTypeWhereInput
  }

  /**
   * ResourceType upsert
   */
  export type ResourceTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceType to update in case it exists.
     */
    where: ResourceTypeWhereUniqueInput
    /**
     * In case the ResourceType found by the `where` argument doesn't exist, create a new ResourceType with this data.
     */
    create: XOR<ResourceTypeCreateInput, ResourceTypeUncheckedCreateInput>
    /**
     * In case the ResourceType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceTypeUpdateInput, ResourceTypeUncheckedUpdateInput>
  }

  /**
   * ResourceType delete
   */
  export type ResourceTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
    /**
     * Filter which ResourceType to delete.
     */
    where: ResourceTypeWhereUniqueInput
  }

  /**
   * ResourceType deleteMany
   */
  export type ResourceTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceTypes to delete
     */
    where?: ResourceTypeWhereInput
  }

  /**
   * ResourceType.Resource
   */
  export type ResourceType$ResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * ResourceType without action
   */
  export type ResourceTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceType
     */
    select?: ResourceTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTypeInclude<ExtArgs> | null
  }


  /**
   * Model Publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherAvgAggregateOutputType = {
    id: number | null
  }

  export type PublisherSumAggregateOutputType = {
    id: number | null
  }

  export type PublisherMinAggregateOutputType = {
    id: number | null
    publisher_name: string | null
    image_url: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PublisherMaxAggregateOutputType = {
    id: number | null
    publisher_name: string | null
    image_url: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PublisherCountAggregateOutputType = {
    id: number
    publisher_name: number
    image_url: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PublisherAvgAggregateInputType = {
    id?: true
  }

  export type PublisherSumAggregateInputType = {
    id?: true
  }

  export type PublisherMinAggregateInputType = {
    id?: true
    publisher_name?: true
    image_url?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type PublisherMaxAggregateInputType = {
    id?: true
    publisher_name?: true
    image_url?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type PublisherCountAggregateInputType = {
    id?: true
    publisher_name?: true
    image_url?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publisher to aggregate.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublisherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublisherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type PublisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherWhereInput
    orderBy?: PublisherOrderByWithAggregationInput | PublisherOrderByWithAggregationInput[]
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
    having?: PublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _avg?: PublisherAvgAggregateInputType
    _sum?: PublisherSumAggregateInputType
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }

  export type PublisherGroupByOutputType = {
    id: number
    publisher_name: string
    image_url: string
    url: string
    created_at: Date
    updated_at: Date
    _count: PublisherCountAggregateOutputType | null
    _avg: PublisherAvgAggregateOutputType | null
    _sum: PublisherSumAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type PublisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publisher_name?: boolean
    image_url?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    resources?: boolean | Publisher$resourcesArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectScalar = {
    id?: boolean
    publisher_name?: boolean
    image_url?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type PublisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | Publisher$resourcesArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PublisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publisher"
    objects: {
      resources: Prisma.$ResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publisher_name: string
      image_url: string
      url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["publisher"]>
    composites: {}
  }


  type PublisherGetPayload<S extends boolean | null | undefined | PublisherDefaultArgs> = $Result.GetResult<Prisma.$PublisherPayload, S>

  type PublisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublisherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface PublisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publisher'], meta: { name: 'Publisher' } }
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublisherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PublisherFindUniqueArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Publisher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublisherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherFindFirstArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublisherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Publisher.
     * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
    **/
    create<T extends PublisherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublisherCreateArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Publishers.
     * @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PublisherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publishers and returns the data saved in the database.
     * @param {PublisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PublisherCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Publisher.
     * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
    **/
    delete<T extends PublisherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublisherDeleteArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Publisher.
     * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublisherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublisherUpdateArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Publishers.
     * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublisherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublisherDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublisherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublisherUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publisher.
     * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
    **/
    upsert<T extends PublisherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublisherUpsertArgs<ExtArgs>>
    ): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends PublisherCountArgs>(
      args?: Subset<T, PublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherGroupByArgs} args - Group by arguments.
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
      T extends PublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherGroupByArgs['orderBy'] }
        : { orderBy?: PublisherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publisher model
   */
  readonly fields: PublisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resources<T extends Publisher$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Publisher$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Publisher model
   */ 
  interface PublisherFieldRefs {
    readonly id: FieldRef<"Publisher", 'Int'>
    readonly publisher_name: FieldRef<"Publisher", 'String'>
    readonly image_url: FieldRef<"Publisher", 'String'>
    readonly url: FieldRef<"Publisher", 'String'>
    readonly created_at: FieldRef<"Publisher", 'DateTime'>
    readonly updated_at: FieldRef<"Publisher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publisher findUnique
   */
  export type PublisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findUniqueOrThrow
   */
  export type PublisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findFirst
   */
  export type PublisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findFirstOrThrow
   */
  export type PublisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findMany
   */
  export type PublisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publishers to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher create
   */
  export type PublisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to create a Publisher.
     */
    data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
  }

  /**
   * Publisher createMany
   */
  export type PublisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher createManyAndReturn
   */
  export type PublisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher update
   */
  export type PublisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to update a Publisher.
     */
    data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
    /**
     * Choose, which Publisher to update.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher updateMany
   */
  export type PublisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
  }

  /**
   * Publisher upsert
   */
  export type PublisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The filter to search for the Publisher to update in case it exists.
     */
    where: PublisherWhereUniqueInput
    /**
     * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
     */
    create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
    /**
     * In case the Publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
  }

  /**
   * Publisher delete
   */
  export type PublisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter which Publisher to delete.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher deleteMany
   */
  export type PublisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publishers to delete
     */
    where?: PublisherWhereInput
  }

  /**
   * Publisher.resources
   */
  export type Publisher$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Publisher without action
   */
  export type PublisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    category_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    category_name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category_name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    category_name: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    resources?: boolean | Category$resourcesArgs<ExtArgs>
    ResourceCategory?: boolean | Category$ResourceCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    category_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | Category$resourcesArgs<ExtArgs>
    ResourceCategory?: boolean | Category$ResourceCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      ResourceCategory: Prisma.$ResourceCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resources<T extends Category$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Category$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findMany'> | Null>;

    ResourceCategory<T extends Category$ResourceCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$ResourceCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly category_name: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.resources
   */
  export type Category$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Category.ResourceCategory
   */
  export type Category$ResourceCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    where?: ResourceCategoryWhereInput
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    cursor?: ResourceCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ResourceCategory
   */

  export type AggregateResourceCategory = {
    _count: ResourceCategoryCountAggregateOutputType | null
    _avg: ResourceCategoryAvgAggregateOutputType | null
    _sum: ResourceCategorySumAggregateOutputType | null
    _min: ResourceCategoryMinAggregateOutputType | null
    _max: ResourceCategoryMaxAggregateOutputType | null
  }

  export type ResourceCategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type ResourceCategorySumAggregateOutputType = {
    category_id: number | null
  }

  export type ResourceCategoryMinAggregateOutputType = {
    resource_id: string | null
    category_id: number | null
  }

  export type ResourceCategoryMaxAggregateOutputType = {
    resource_id: string | null
    category_id: number | null
  }

  export type ResourceCategoryCountAggregateOutputType = {
    resource_id: number
    category_id: number
    _all: number
  }


  export type ResourceCategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type ResourceCategorySumAggregateInputType = {
    category_id?: true
  }

  export type ResourceCategoryMinAggregateInputType = {
    resource_id?: true
    category_id?: true
  }

  export type ResourceCategoryMaxAggregateInputType = {
    resource_id?: true
    category_id?: true
  }

  export type ResourceCategoryCountAggregateInputType = {
    resource_id?: true
    category_id?: true
    _all?: true
  }

  export type ResourceCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceCategory to aggregate.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceCategories
    **/
    _count?: true | ResourceCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceCategoryMaxAggregateInputType
  }

  export type GetResourceCategoryAggregateType<T extends ResourceCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceCategory[P]>
      : GetScalarType<T[P], AggregateResourceCategory[P]>
  }




  export type ResourceCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceCategoryWhereInput
    orderBy?: ResourceCategoryOrderByWithAggregationInput | ResourceCategoryOrderByWithAggregationInput[]
    by: ResourceCategoryScalarFieldEnum[] | ResourceCategoryScalarFieldEnum
    having?: ResourceCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCategoryCountAggregateInputType | true
    _avg?: ResourceCategoryAvgAggregateInputType
    _sum?: ResourceCategorySumAggregateInputType
    _min?: ResourceCategoryMinAggregateInputType
    _max?: ResourceCategoryMaxAggregateInputType
  }

  export type ResourceCategoryGroupByOutputType = {
    resource_id: string
    category_id: number
    _count: ResourceCategoryCountAggregateOutputType | null
    _avg: ResourceCategoryAvgAggregateOutputType | null
    _sum: ResourceCategorySumAggregateOutputType | null
    _min: ResourceCategoryMinAggregateOutputType | null
    _max: ResourceCategoryMaxAggregateOutputType | null
  }

  type GetResourceCategoryGroupByPayload<T extends ResourceCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ResourceCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    resource_id?: boolean
    category_id?: boolean
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceCategory"]>

  export type ResourceCategorySelectScalar = {
    resource_id?: boolean
    category_id?: boolean
  }


  export type ResourceCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }


  export type $ResourceCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceCategory"
    objects: {
      resource: Prisma.$ResourcePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      resource_id: string
      category_id: number
    }, ExtArgs["result"]["resourceCategory"]>
    composites: {}
  }


  type ResourceCategoryGetPayload<S extends boolean | null | undefined | ResourceCategoryDefaultArgs> = $Result.GetResult<Prisma.$ResourceCategoryPayload, S>

  type ResourceCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceCategoryCountAggregateInputType | true
    }

  export interface ResourceCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceCategory'], meta: { name: 'ResourceCategory' } }
    /**
     * Find zero or one ResourceCategory that matches the filter.
     * @param {ResourceCategoryFindUniqueArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceCategoryFindUniqueOrThrowArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryFindFirstArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryFindFirstOrThrowArgs} args - Arguments to find a ResourceCategory
     * @example
     * // Get one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceCategories
     * const resourceCategories = await prisma.resourceCategory.findMany()
     * 
     * // Get first 10 ResourceCategories
     * const resourceCategories = await prisma.resourceCategory.findMany({ take: 10 })
     * 
     * // Only select the `resource_id`
     * const resourceCategoryWithResource_idOnly = await prisma.resourceCategory.findMany({ select: { resource_id: true } })
     * 
    **/
    findMany<T extends ResourceCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceCategory.
     * @param {ResourceCategoryCreateArgs} args - Arguments to create a ResourceCategory.
     * @example
     * // Create one ResourceCategory
     * const ResourceCategory = await prisma.resourceCategory.create({
     *   data: {
     *     // ... data to create a ResourceCategory
     *   }
     * })
     * 
    **/
    create<T extends ResourceCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCategoryCreateArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceCategories.
     * @param {ResourceCategoryCreateManyArgs} args - Arguments to create many ResourceCategories.
     * @example
     * // Create many ResourceCategories
     * const resourceCategory = await prisma.resourceCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceCategories and returns the data saved in the database.
     * @param {ResourceCategoryCreateManyAndReturnArgs} args - Arguments to create many ResourceCategories.
     * @example
     * // Create many ResourceCategories
     * const resourceCategory = await prisma.resourceCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceCategories and only return the `resource_id`
     * const resourceCategoryWithResource_idOnly = await prisma.resourceCategory.createManyAndReturn({ 
     *   select: { resource_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceCategoryCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceCategory.
     * @param {ResourceCategoryDeleteArgs} args - Arguments to delete one ResourceCategory.
     * @example
     * // Delete one ResourceCategory
     * const ResourceCategory = await prisma.resourceCategory.delete({
     *   where: {
     *     // ... filter to delete one ResourceCategory
     *   }
     * })
     * 
    **/
    delete<T extends ResourceCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCategoryDeleteArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceCategory.
     * @param {ResourceCategoryUpdateArgs} args - Arguments to update one ResourceCategory.
     * @example
     * // Update one ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCategoryUpdateArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceCategories.
     * @param {ResourceCategoryDeleteManyArgs} args - Arguments to filter ResourceCategories to delete.
     * @example
     * // Delete a few ResourceCategories
     * const { count } = await prisma.resourceCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceCategories
     * const resourceCategory = await prisma.resourceCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceCategory.
     * @param {ResourceCategoryUpsertArgs} args - Arguments to update or create a ResourceCategory.
     * @example
     * // Update or create a ResourceCategory
     * const resourceCategory = await prisma.resourceCategory.upsert({
     *   create: {
     *     // ... data to create a ResourceCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceCategoryUpsertArgs<ExtArgs>>
    ): Prisma__ResourceCategoryClient<$Result.GetResult<Prisma.$ResourceCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryCountArgs} args - Arguments to filter ResourceCategories to count.
     * @example
     * // Count the number of ResourceCategories
     * const count = await prisma.resourceCategory.count({
     *   where: {
     *     // ... the filter for the ResourceCategories we want to count
     *   }
     * })
    **/
    count<T extends ResourceCategoryCountArgs>(
      args?: Subset<T, ResourceCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceCategoryAggregateArgs>(args: Subset<T, ResourceCategoryAggregateArgs>): Prisma.PrismaPromise<GetResourceCategoryAggregateType<T>>

    /**
     * Group by ResourceCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCategoryGroupByArgs} args - Group by arguments.
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
      T extends ResourceCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ResourceCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceCategory model
   */
  readonly fields: ResourceCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ResourceCategory model
   */ 
  interface ResourceCategoryFieldRefs {
    readonly resource_id: FieldRef<"ResourceCategory", 'String'>
    readonly category_id: FieldRef<"ResourceCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ResourceCategory findUnique
   */
  export type ResourceCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory findUniqueOrThrow
   */
  export type ResourceCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory findFirst
   */
  export type ResourceCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceCategories.
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceCategories.
     */
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * ResourceCategory findFirstOrThrow
   */
  export type ResourceCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResourceCategory to fetch.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceCategories.
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceCategories.
     */
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * ResourceCategory findMany
   */
  export type ResourceCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ResourceCategories to fetch.
     */
    where?: ResourceCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceCategories to fetch.
     */
    orderBy?: ResourceCategoryOrderByWithRelationInput | ResourceCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceCategories.
     */
    cursor?: ResourceCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceCategories.
     */
    skip?: number
    distinct?: ResourceCategoryScalarFieldEnum | ResourceCategoryScalarFieldEnum[]
  }

  /**
   * ResourceCategory create
   */
  export type ResourceCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceCategory.
     */
    data: XOR<ResourceCategoryCreateInput, ResourceCategoryUncheckedCreateInput>
  }

  /**
   * ResourceCategory createMany
   */
  export type ResourceCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceCategories.
     */
    data: ResourceCategoryCreateManyInput | ResourceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceCategory createManyAndReturn
   */
  export type ResourceCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceCategories.
     */
    data: ResourceCategoryCreateManyInput | ResourceCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceCategory update
   */
  export type ResourceCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceCategory.
     */
    data: XOR<ResourceCategoryUpdateInput, ResourceCategoryUncheckedUpdateInput>
    /**
     * Choose, which ResourceCategory to update.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory updateMany
   */
  export type ResourceCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceCategories.
     */
    data: XOR<ResourceCategoryUpdateManyMutationInput, ResourceCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ResourceCategories to update
     */
    where?: ResourceCategoryWhereInput
  }

  /**
   * ResourceCategory upsert
   */
  export type ResourceCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceCategory to update in case it exists.
     */
    where: ResourceCategoryWhereUniqueInput
    /**
     * In case the ResourceCategory found by the `where` argument doesn't exist, create a new ResourceCategory with this data.
     */
    create: XOR<ResourceCategoryCreateInput, ResourceCategoryUncheckedCreateInput>
    /**
     * In case the ResourceCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceCategoryUpdateInput, ResourceCategoryUncheckedUpdateInput>
  }

  /**
   * ResourceCategory delete
   */
  export type ResourceCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
    /**
     * Filter which ResourceCategory to delete.
     */
    where: ResourceCategoryWhereUniqueInput
  }

  /**
   * ResourceCategory deleteMany
   */
  export type ResourceCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceCategories to delete
     */
    where?: ResourceCategoryWhereInput
  }

  /**
   * ResourceCategory without action
   */
  export type ResourceCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCategory
     */
    select?: ResourceCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    instanceId: string | null
    type: $Enums.TransactionType | null
    created_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    instanceId: string | null
    type: $Enums.TransactionType | null
    created_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    instanceId: number
    type: number
    created_at: number
    _all: number
  }


  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    instanceId?: true
    type?: true
    created_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    instanceId?: true
    type?: true
    created_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    instanceId?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    instanceId: string | null
    type: $Enums.TransactionType
    created_at: Date
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    instanceId?: boolean
    type?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    instance?: boolean | Transaction$instanceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    instanceId?: boolean
    type?: boolean
    created_at?: boolean
  }


  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    instance?: boolean | Transaction$instanceArgs<ExtArgs>
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      instance: Prisma.$ResourceInstancePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      instanceId: string | null
      type: $Enums.TransactionType
      created_at: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    instance<T extends Transaction$instanceArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$instanceArgs<ExtArgs>>): Prisma__ResourceInstanceClient<$Result.GetResult<Prisma.$ResourceInstancePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly instanceId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly created_at: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.instance
   */
  export type Transaction$instanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceInstance
     */
    select?: ResourceInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInstanceInclude<ExtArgs> | null
    where?: ResourceInstanceWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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
    email: 'email',
    first_name: 'first_name',
    image_url: 'image_url',
    last_name: 'last_name',
    address: 'address',
    active: 'active',
    phone: 'phone',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    resource_name: 'resource_name',
    slug_name: 'slug_name',
    image_url: 'image_url',
    author: 'author',
    short_description: 'short_description',
    edition: 'edition',
    created_at: 'created_at',
    updated_at: 'updated_at',
    type_id: 'type_id',
    publisher_id: 'publisher_id',
    detail_id: 'detail_id'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const ResourceDetailScalarFieldEnum: {
    id: 'id',
    pub_year: 'pub_year',
    isbn: 'isbn',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResourceDetailScalarFieldEnum = (typeof ResourceDetailScalarFieldEnum)[keyof typeof ResourceDetailScalarFieldEnum]


  export const ResourceInstanceScalarFieldEnum: {
    id: 'id',
    instance_name: 'instance_name',
    resource_id: 'resource_id',
    lang: 'lang',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResourceInstanceScalarFieldEnum = (typeof ResourceInstanceScalarFieldEnum)[keyof typeof ResourceInstanceScalarFieldEnum]


  export const ResourceLoanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    until: 'until',
    instanceId: 'instanceId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResourceLoanScalarFieldEnum = (typeof ResourceLoanScalarFieldEnum)[keyof typeof ResourceLoanScalarFieldEnum]


  export const ResourceTestimonialScalarFieldEnum: {
    userId: 'userId',
    resourceId: 'resourceId',
    rating: 'rating',
    title: 'title',
    testimonial: 'testimonial',
    created_at: 'created_at'
  };

  export type ResourceTestimonialScalarFieldEnum = (typeof ResourceTestimonialScalarFieldEnum)[keyof typeof ResourceTestimonialScalarFieldEnum]


  export const ResourceTypeScalarFieldEnum: {
    id: 'id',
    resource_type_name: 'resource_type_name',
    max_loan_days: 'max_loan_days',
    max_units_per_loan: 'max_units_per_loan'
  };

  export type ResourceTypeScalarFieldEnum = (typeof ResourceTypeScalarFieldEnum)[keyof typeof ResourceTypeScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    id: 'id',
    publisher_name: 'publisher_name',
    image_url: 'image_url',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    category_name: 'category_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ResourceCategoryScalarFieldEnum: {
    resource_id: 'resource_id',
    category_id: 'category_id'
  };

  export type ResourceCategoryScalarFieldEnum = (typeof ResourceCategoryScalarFieldEnum)[keyof typeof ResourceCategoryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    instanceId: 'instanceId',
    type: 'type',
    created_at: 'created_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'RoleEnum'
   */
  export type EnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleEnum'>
    


  /**
   * Reference to a field of type 'RoleEnum[]'
   */
  export type ListEnumRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleEnum[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ResourceLang'
   */
  export type EnumResourceLangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceLang'>
    


  /**
   * Reference to a field of type 'ResourceLang[]'
   */
  export type ListEnumResourceLangFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceLang[]'>
    


  /**
   * Reference to a field of type 'ResourceInstanceStatus'
   */
  export type EnumResourceInstanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceInstanceStatus'>
    


  /**
   * Reference to a field of type 'ResourceInstanceStatus[]'
   */
  export type ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceInstanceStatus[]'>
    


  /**
   * Reference to a field of type 'ResourceTypes'
   */
  export type EnumResourceTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceTypes'>
    


  /**
   * Reference to a field of type 'ResourceTypes[]'
   */
  export type ListEnumResourceTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceTypes[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    image_url?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    roles?: RoleListRelationFilter
    UserRole?: UserRoleListRelationFilter
    loans?: ResourceLoanListRelationFilter
    testimonials?: ResourceTestimonialListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    image_url?: SortOrder
    last_name?: SortOrder
    address?: SortOrderInput | SortOrder
    active?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    UserRole?: UserRoleOrderByRelationAggregateInput
    loans?: ResourceLoanOrderByRelationAggregateInput
    testimonials?: ResourceTestimonialOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    image_url?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    roles?: RoleListRelationFilter
    UserRole?: UserRoleListRelationFilter
    loans?: ResourceLoanListRelationFilter
    testimonials?: ResourceTestimonialListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    image_url?: SortOrder
    last_name?: SortOrder
    address?: SortOrderInput | SortOrder
    active?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    image_url?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    role_name?: EnumRoleEnumFilter<"Role"> | $Enums.RoleEnum
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
    UserRole?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
    UserRole?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    role_name?: $Enums.RoleEnum
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
    UserRole?: UserRoleListRelationFilter
  }, "id" | "role_name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    role_name?: EnumRoleEnumWithAggregatesFilter<"Role"> | $Enums.RoleEnum
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    user_id?: StringFilter<"UserRole"> | string
    role_id?: IntFilter<"UserRole"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: UserRoleUser_idRole_idCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    user_id?: StringFilter<"UserRole"> | string
    role_id?: IntFilter<"UserRole"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "user_id_role_id">

  export type UserRoleOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"UserRole"> | string
    role_id?: IntWithAggregatesFilter<"UserRole"> | number
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    resource_name?: StringFilter<"Resource"> | string
    slug_name?: StringNullableFilter<"Resource"> | string | null
    image_url?: StringNullableFilter<"Resource"> | string | null
    author?: StringFilter<"Resource"> | string
    short_description?: StringNullableFilter<"Resource"> | string | null
    edition?: StringFilter<"Resource"> | string
    created_at?: DateTimeFilter<"Resource"> | Date | string
    updated_at?: DateTimeFilter<"Resource"> | Date | string
    type_id?: IntFilter<"Resource"> | number
    publisher_id?: IntFilter<"Resource"> | number
    detail_id?: IntFilter<"Resource"> | number
    type?: XOR<ResourceTypeRelationFilter, ResourceTypeWhereInput>
    instances?: ResourceInstanceListRelationFilter
    testimonials?: ResourceTestimonialListRelationFilter
    categories?: CategoryListRelationFilter
    ResourceCategory?: ResourceCategoryListRelationFilter
    publisher?: XOR<PublisherRelationFilter, PublisherWhereInput>
    detail?: XOR<ResourceDetailRelationFilter, ResourceDetailWhereInput>
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    resource_name?: SortOrder
    slug_name?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    author?: SortOrder
    short_description?: SortOrderInput | SortOrder
    edition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
    type?: ResourceTypeOrderByWithRelationInput
    instances?: ResourceInstanceOrderByRelationAggregateInput
    testimonials?: ResourceTestimonialOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    ResourceCategory?: ResourceCategoryOrderByRelationAggregateInput
    publisher?: PublisherOrderByWithRelationInput
    detail?: ResourceDetailOrderByWithRelationInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_name?: string
    detail_id?: number
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    resource_name?: StringFilter<"Resource"> | string
    image_url?: StringNullableFilter<"Resource"> | string | null
    author?: StringFilter<"Resource"> | string
    short_description?: StringNullableFilter<"Resource"> | string | null
    edition?: StringFilter<"Resource"> | string
    created_at?: DateTimeFilter<"Resource"> | Date | string
    updated_at?: DateTimeFilter<"Resource"> | Date | string
    type_id?: IntFilter<"Resource"> | number
    publisher_id?: IntFilter<"Resource"> | number
    type?: XOR<ResourceTypeRelationFilter, ResourceTypeWhereInput>
    instances?: ResourceInstanceListRelationFilter
    testimonials?: ResourceTestimonialListRelationFilter
    categories?: CategoryListRelationFilter
    ResourceCategory?: ResourceCategoryListRelationFilter
    publisher?: XOR<PublisherRelationFilter, PublisherWhereInput>
    detail?: XOR<ResourceDetailRelationFilter, ResourceDetailWhereInput>
  }, "id" | "slug_name" | "detail_id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    resource_name?: SortOrder
    slug_name?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    author?: SortOrder
    short_description?: SortOrderInput | SortOrder
    edition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    resource_name?: StringWithAggregatesFilter<"Resource"> | string
    slug_name?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    author?: StringWithAggregatesFilter<"Resource"> | string
    short_description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    edition?: StringWithAggregatesFilter<"Resource"> | string
    created_at?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    type_id?: IntWithAggregatesFilter<"Resource"> | number
    publisher_id?: IntWithAggregatesFilter<"Resource"> | number
    detail_id?: IntWithAggregatesFilter<"Resource"> | number
  }

  export type ResourceDetailWhereInput = {
    AND?: ResourceDetailWhereInput | ResourceDetailWhereInput[]
    OR?: ResourceDetailWhereInput[]
    NOT?: ResourceDetailWhereInput | ResourceDetailWhereInput[]
    id?: IntFilter<"ResourceDetail"> | number
    pub_year?: IntFilter<"ResourceDetail"> | number
    isbn?: StringNullableFilter<"ResourceDetail"> | string | null
    description?: JsonFilter<"ResourceDetail">
    created_at?: DateTimeFilter<"ResourceDetail"> | Date | string
    updated_at?: DateTimeFilter<"ResourceDetail"> | Date | string
    resource?: XOR<ResourceNullableRelationFilter, ResourceWhereInput> | null
  }

  export type ResourceDetailOrderByWithRelationInput = {
    id?: SortOrder
    pub_year?: SortOrder
    isbn?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resource?: ResourceOrderByWithRelationInput
  }

  export type ResourceDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResourceDetailWhereInput | ResourceDetailWhereInput[]
    OR?: ResourceDetailWhereInput[]
    NOT?: ResourceDetailWhereInput | ResourceDetailWhereInput[]
    pub_year?: IntFilter<"ResourceDetail"> | number
    isbn?: StringNullableFilter<"ResourceDetail"> | string | null
    description?: JsonFilter<"ResourceDetail">
    created_at?: DateTimeFilter<"ResourceDetail"> | Date | string
    updated_at?: DateTimeFilter<"ResourceDetail"> | Date | string
    resource?: XOR<ResourceNullableRelationFilter, ResourceWhereInput> | null
  }, "id">

  export type ResourceDetailOrderByWithAggregationInput = {
    id?: SortOrder
    pub_year?: SortOrder
    isbn?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ResourceDetailCountOrderByAggregateInput
    _avg?: ResourceDetailAvgOrderByAggregateInput
    _max?: ResourceDetailMaxOrderByAggregateInput
    _min?: ResourceDetailMinOrderByAggregateInput
    _sum?: ResourceDetailSumOrderByAggregateInput
  }

  export type ResourceDetailScalarWhereWithAggregatesInput = {
    AND?: ResourceDetailScalarWhereWithAggregatesInput | ResourceDetailScalarWhereWithAggregatesInput[]
    OR?: ResourceDetailScalarWhereWithAggregatesInput[]
    NOT?: ResourceDetailScalarWhereWithAggregatesInput | ResourceDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResourceDetail"> | number
    pub_year?: IntWithAggregatesFilter<"ResourceDetail"> | number
    isbn?: StringNullableWithAggregatesFilter<"ResourceDetail"> | string | null
    description?: JsonWithAggregatesFilter<"ResourceDetail">
    created_at?: DateTimeWithAggregatesFilter<"ResourceDetail"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ResourceDetail"> | Date | string
  }

  export type ResourceInstanceWhereInput = {
    AND?: ResourceInstanceWhereInput | ResourceInstanceWhereInput[]
    OR?: ResourceInstanceWhereInput[]
    NOT?: ResourceInstanceWhereInput | ResourceInstanceWhereInput[]
    id?: StringFilter<"ResourceInstance"> | string
    instance_name?: StringFilter<"ResourceInstance"> | string
    resource_id?: StringFilter<"ResourceInstance"> | string
    lang?: EnumResourceLangFilter<"ResourceInstance"> | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFilter<"ResourceInstance"> | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFilter<"ResourceInstance"> | Date | string
    updated_at?: DateTimeFilter<"ResourceInstance"> | Date | string
    resource?: XOR<ResourceRelationFilter, ResourceWhereInput>
    loan?: XOR<ResourceLoanNullableRelationFilter, ResourceLoanWhereInput> | null
    transactions?: TransactionListRelationFilter
  }

  export type ResourceInstanceOrderByWithRelationInput = {
    id?: SortOrder
    instance_name?: SortOrder
    resource_id?: SortOrder
    lang?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resource?: ResourceOrderByWithRelationInput
    loan?: ResourceLoanOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type ResourceInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceInstanceWhereInput | ResourceInstanceWhereInput[]
    OR?: ResourceInstanceWhereInput[]
    NOT?: ResourceInstanceWhereInput | ResourceInstanceWhereInput[]
    instance_name?: StringFilter<"ResourceInstance"> | string
    resource_id?: StringFilter<"ResourceInstance"> | string
    lang?: EnumResourceLangFilter<"ResourceInstance"> | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFilter<"ResourceInstance"> | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFilter<"ResourceInstance"> | Date | string
    updated_at?: DateTimeFilter<"ResourceInstance"> | Date | string
    resource?: XOR<ResourceRelationFilter, ResourceWhereInput>
    loan?: XOR<ResourceLoanNullableRelationFilter, ResourceLoanWhereInput> | null
    transactions?: TransactionListRelationFilter
  }, "id">

  export type ResourceInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    instance_name?: SortOrder
    resource_id?: SortOrder
    lang?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ResourceInstanceCountOrderByAggregateInput
    _max?: ResourceInstanceMaxOrderByAggregateInput
    _min?: ResourceInstanceMinOrderByAggregateInput
  }

  export type ResourceInstanceScalarWhereWithAggregatesInput = {
    AND?: ResourceInstanceScalarWhereWithAggregatesInput | ResourceInstanceScalarWhereWithAggregatesInput[]
    OR?: ResourceInstanceScalarWhereWithAggregatesInput[]
    NOT?: ResourceInstanceScalarWhereWithAggregatesInput | ResourceInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResourceInstance"> | string
    instance_name?: StringWithAggregatesFilter<"ResourceInstance"> | string
    resource_id?: StringWithAggregatesFilter<"ResourceInstance"> | string
    lang?: EnumResourceLangWithAggregatesFilter<"ResourceInstance"> | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusWithAggregatesFilter<"ResourceInstance"> | $Enums.ResourceInstanceStatus
    created_at?: DateTimeWithAggregatesFilter<"ResourceInstance"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ResourceInstance"> | Date | string
  }

  export type ResourceLoanWhereInput = {
    AND?: ResourceLoanWhereInput | ResourceLoanWhereInput[]
    OR?: ResourceLoanWhereInput[]
    NOT?: ResourceLoanWhereInput | ResourceLoanWhereInput[]
    id?: StringFilter<"ResourceLoan"> | string
    userId?: StringFilter<"ResourceLoan"> | string
    until?: DateTimeFilter<"ResourceLoan"> | Date | string
    instanceId?: StringFilter<"ResourceLoan"> | string
    created_at?: DateTimeFilter<"ResourceLoan"> | Date | string
    updated_at?: DateTimeFilter<"ResourceLoan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    instance?: XOR<ResourceInstanceRelationFilter, ResourceInstanceWhereInput>
  }

  export type ResourceLoanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    until?: SortOrder
    instanceId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    instance?: ResourceInstanceOrderByWithRelationInput
  }

  export type ResourceLoanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    instanceId?: string
    AND?: ResourceLoanWhereInput | ResourceLoanWhereInput[]
    OR?: ResourceLoanWhereInput[]
    NOT?: ResourceLoanWhereInput | ResourceLoanWhereInput[]
    userId?: StringFilter<"ResourceLoan"> | string
    until?: DateTimeFilter<"ResourceLoan"> | Date | string
    created_at?: DateTimeFilter<"ResourceLoan"> | Date | string
    updated_at?: DateTimeFilter<"ResourceLoan"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    instance?: XOR<ResourceInstanceRelationFilter, ResourceInstanceWhereInput>
  }, "id" | "instanceId">

  export type ResourceLoanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    until?: SortOrder
    instanceId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ResourceLoanCountOrderByAggregateInput
    _max?: ResourceLoanMaxOrderByAggregateInput
    _min?: ResourceLoanMinOrderByAggregateInput
  }

  export type ResourceLoanScalarWhereWithAggregatesInput = {
    AND?: ResourceLoanScalarWhereWithAggregatesInput | ResourceLoanScalarWhereWithAggregatesInput[]
    OR?: ResourceLoanScalarWhereWithAggregatesInput[]
    NOT?: ResourceLoanScalarWhereWithAggregatesInput | ResourceLoanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResourceLoan"> | string
    userId?: StringWithAggregatesFilter<"ResourceLoan"> | string
    until?: DateTimeWithAggregatesFilter<"ResourceLoan"> | Date | string
    instanceId?: StringWithAggregatesFilter<"ResourceLoan"> | string
    created_at?: DateTimeWithAggregatesFilter<"ResourceLoan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ResourceLoan"> | Date | string
  }

  export type ResourceTestimonialWhereInput = {
    AND?: ResourceTestimonialWhereInput | ResourceTestimonialWhereInput[]
    OR?: ResourceTestimonialWhereInput[]
    NOT?: ResourceTestimonialWhereInput | ResourceTestimonialWhereInput[]
    userId?: StringFilter<"ResourceTestimonial"> | string
    resourceId?: StringFilter<"ResourceTestimonial"> | string
    rating?: IntFilter<"ResourceTestimonial"> | number
    title?: StringFilter<"ResourceTestimonial"> | string
    testimonial?: StringNullableFilter<"ResourceTestimonial"> | string | null
    created_at?: DateTimeFilter<"ResourceTestimonial"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    resource?: XOR<ResourceRelationFilter, ResourceWhereInput>
  }

  export type ResourceTestimonialOrderByWithRelationInput = {
    userId?: SortOrder
    resourceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    testimonial?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type ResourceTestimonialWhereUniqueInput = Prisma.AtLeast<{
    userId_resourceId?: ResourceTestimonialUserIdResourceIdCompoundUniqueInput
    AND?: ResourceTestimonialWhereInput | ResourceTestimonialWhereInput[]
    OR?: ResourceTestimonialWhereInput[]
    NOT?: ResourceTestimonialWhereInput | ResourceTestimonialWhereInput[]
    userId?: StringFilter<"ResourceTestimonial"> | string
    resourceId?: StringFilter<"ResourceTestimonial"> | string
    rating?: IntFilter<"ResourceTestimonial"> | number
    title?: StringFilter<"ResourceTestimonial"> | string
    testimonial?: StringNullableFilter<"ResourceTestimonial"> | string | null
    created_at?: DateTimeFilter<"ResourceTestimonial"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    resource?: XOR<ResourceRelationFilter, ResourceWhereInput>
  }, "userId_resourceId">

  export type ResourceTestimonialOrderByWithAggregationInput = {
    userId?: SortOrder
    resourceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    testimonial?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ResourceTestimonialCountOrderByAggregateInput
    _avg?: ResourceTestimonialAvgOrderByAggregateInput
    _max?: ResourceTestimonialMaxOrderByAggregateInput
    _min?: ResourceTestimonialMinOrderByAggregateInput
    _sum?: ResourceTestimonialSumOrderByAggregateInput
  }

  export type ResourceTestimonialScalarWhereWithAggregatesInput = {
    AND?: ResourceTestimonialScalarWhereWithAggregatesInput | ResourceTestimonialScalarWhereWithAggregatesInput[]
    OR?: ResourceTestimonialScalarWhereWithAggregatesInput[]
    NOT?: ResourceTestimonialScalarWhereWithAggregatesInput | ResourceTestimonialScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ResourceTestimonial"> | string
    resourceId?: StringWithAggregatesFilter<"ResourceTestimonial"> | string
    rating?: IntWithAggregatesFilter<"ResourceTestimonial"> | number
    title?: StringWithAggregatesFilter<"ResourceTestimonial"> | string
    testimonial?: StringNullableWithAggregatesFilter<"ResourceTestimonial"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ResourceTestimonial"> | Date | string
  }

  export type ResourceTypeWhereInput = {
    AND?: ResourceTypeWhereInput | ResourceTypeWhereInput[]
    OR?: ResourceTypeWhereInput[]
    NOT?: ResourceTypeWhereInput | ResourceTypeWhereInput[]
    id?: IntFilter<"ResourceType"> | number
    resource_type_name?: EnumResourceTypesFilter<"ResourceType"> | $Enums.ResourceTypes
    max_loan_days?: IntFilter<"ResourceType"> | number
    max_units_per_loan?: IntFilter<"ResourceType"> | number
    Resource?: ResourceListRelationFilter
  }

  export type ResourceTypeOrderByWithRelationInput = {
    id?: SortOrder
    resource_type_name?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
    Resource?: ResourceOrderByRelationAggregateInput
  }

  export type ResourceTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    resource_type_name?: $Enums.ResourceTypes
    AND?: ResourceTypeWhereInput | ResourceTypeWhereInput[]
    OR?: ResourceTypeWhereInput[]
    NOT?: ResourceTypeWhereInput | ResourceTypeWhereInput[]
    max_loan_days?: IntFilter<"ResourceType"> | number
    max_units_per_loan?: IntFilter<"ResourceType"> | number
    Resource?: ResourceListRelationFilter
  }, "id" | "resource_type_name">

  export type ResourceTypeOrderByWithAggregationInput = {
    id?: SortOrder
    resource_type_name?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
    _count?: ResourceTypeCountOrderByAggregateInput
    _avg?: ResourceTypeAvgOrderByAggregateInput
    _max?: ResourceTypeMaxOrderByAggregateInput
    _min?: ResourceTypeMinOrderByAggregateInput
    _sum?: ResourceTypeSumOrderByAggregateInput
  }

  export type ResourceTypeScalarWhereWithAggregatesInput = {
    AND?: ResourceTypeScalarWhereWithAggregatesInput | ResourceTypeScalarWhereWithAggregatesInput[]
    OR?: ResourceTypeScalarWhereWithAggregatesInput[]
    NOT?: ResourceTypeScalarWhereWithAggregatesInput | ResourceTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResourceType"> | number
    resource_type_name?: EnumResourceTypesWithAggregatesFilter<"ResourceType"> | $Enums.ResourceTypes
    max_loan_days?: IntWithAggregatesFilter<"ResourceType"> | number
    max_units_per_loan?: IntWithAggregatesFilter<"ResourceType"> | number
  }

  export type PublisherWhereInput = {
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    id?: IntFilter<"Publisher"> | number
    publisher_name?: StringFilter<"Publisher"> | string
    image_url?: StringFilter<"Publisher"> | string
    url?: StringFilter<"Publisher"> | string
    created_at?: DateTimeFilter<"Publisher"> | Date | string
    updated_at?: DateTimeFilter<"Publisher"> | Date | string
    resources?: ResourceListRelationFilter
  }

  export type PublisherOrderByWithRelationInput = {
    id?: SortOrder
    publisher_name?: SortOrder
    image_url?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resources?: ResourceOrderByRelationAggregateInput
  }

  export type PublisherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    publisher_name?: string
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    image_url?: StringFilter<"Publisher"> | string
    url?: StringFilter<"Publisher"> | string
    created_at?: DateTimeFilter<"Publisher"> | Date | string
    updated_at?: DateTimeFilter<"Publisher"> | Date | string
    resources?: ResourceListRelationFilter
  }, "id" | "publisher_name">

  export type PublisherOrderByWithAggregationInput = {
    id?: SortOrder
    publisher_name?: SortOrder
    image_url?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PublisherCountOrderByAggregateInput
    _avg?: PublisherAvgOrderByAggregateInput
    _max?: PublisherMaxOrderByAggregateInput
    _min?: PublisherMinOrderByAggregateInput
    _sum?: PublisherSumOrderByAggregateInput
  }

  export type PublisherScalarWhereWithAggregatesInput = {
    AND?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    OR?: PublisherScalarWhereWithAggregatesInput[]
    NOT?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publisher"> | number
    publisher_name?: StringWithAggregatesFilter<"Publisher"> | string
    image_url?: StringWithAggregatesFilter<"Publisher"> | string
    url?: StringWithAggregatesFilter<"Publisher"> | string
    created_at?: DateTimeWithAggregatesFilter<"Publisher"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Publisher"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    category_name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    resources?: ResourceListRelationFilter
    ResourceCategory?: ResourceCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    resources?: ResourceOrderByRelationAggregateInput
    ResourceCategory?: ResourceCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category_name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    resources?: ResourceListRelationFilter
    ResourceCategory?: ResourceCategoryListRelationFilter
  }, "id" | "category_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    category_name?: StringWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ResourceCategoryWhereInput = {
    AND?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    OR?: ResourceCategoryWhereInput[]
    NOT?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    resource_id?: StringFilter<"ResourceCategory"> | string
    category_id?: IntFilter<"ResourceCategory"> | number
    resource?: XOR<ResourceRelationFilter, ResourceWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type ResourceCategoryOrderByWithRelationInput = {
    resource_id?: SortOrder
    category_id?: SortOrder
    resource?: ResourceOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ResourceCategoryWhereUniqueInput = Prisma.AtLeast<{
    resource_id_category_id?: ResourceCategoryResource_idCategory_idCompoundUniqueInput
    AND?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    OR?: ResourceCategoryWhereInput[]
    NOT?: ResourceCategoryWhereInput | ResourceCategoryWhereInput[]
    resource_id?: StringFilter<"ResourceCategory"> | string
    category_id?: IntFilter<"ResourceCategory"> | number
    resource?: XOR<ResourceRelationFilter, ResourceWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "resource_id_category_id">

  export type ResourceCategoryOrderByWithAggregationInput = {
    resource_id?: SortOrder
    category_id?: SortOrder
    _count?: ResourceCategoryCountOrderByAggregateInput
    _avg?: ResourceCategoryAvgOrderByAggregateInput
    _max?: ResourceCategoryMaxOrderByAggregateInput
    _min?: ResourceCategoryMinOrderByAggregateInput
    _sum?: ResourceCategorySumOrderByAggregateInput
  }

  export type ResourceCategoryScalarWhereWithAggregatesInput = {
    AND?: ResourceCategoryScalarWhereWithAggregatesInput | ResourceCategoryScalarWhereWithAggregatesInput[]
    OR?: ResourceCategoryScalarWhereWithAggregatesInput[]
    NOT?: ResourceCategoryScalarWhereWithAggregatesInput | ResourceCategoryScalarWhereWithAggregatesInput[]
    resource_id?: StringWithAggregatesFilter<"ResourceCategory"> | string
    category_id?: IntWithAggregatesFilter<"ResourceCategory"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    instanceId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    instance?: XOR<ResourceInstanceNullableRelationFilter, ResourceInstanceWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    instanceId?: SortOrderInput | SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    instance?: ResourceInstanceOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    instanceId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    created_at?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    instance?: XOR<ResourceInstanceNullableRelationFilter, ResourceInstanceWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    instanceId?: SortOrderInput | SortOrder
    type?: SortOrder
    created_at?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    instanceId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    created_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    loans?: ResourceLoanCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    loans?: ResourceLoanUncheckedCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUncheckedUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutRolesInput
    UserRole?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRolesNestedInput
    UserRole?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutUserRoleInput
    role: RoleCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    user_id: string
    role_id: number
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput
    role?: RoleUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyInput = {
    user_id: string
    role_id: number
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCreateInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    detail_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    detail_id: number
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceDetailCreateInput = {
    pub_year: number
    isbn?: string | null
    description: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    resource?: ResourceCreateNestedOneWithoutDetailInput
  }

  export type ResourceDetailUncheckedCreateInput = {
    id?: number
    pub_year: number
    isbn?: string | null
    description: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    resource?: ResourceUncheckedCreateNestedOneWithoutDetailInput
  }

  export type ResourceDetailUpdateInput = {
    pub_year?: IntFieldUpdateOperationsInput | number
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneWithoutDetailNestedInput
  }

  export type ResourceDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pub_year?: IntFieldUpdateOperationsInput | number
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUncheckedUpdateOneWithoutDetailNestedInput
  }

  export type ResourceDetailCreateManyInput = {
    id?: number
    pub_year: number
    isbn?: string | null
    description: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceDetailUpdateManyMutationInput = {
    pub_year?: IntFieldUpdateOperationsInput | number
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pub_year?: IntFieldUpdateOperationsInput | number
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceInstanceCreateInput = {
    id?: string
    instance_name?: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceCreateNestedOneWithoutInstancesInput
    loan?: ResourceLoanCreateNestedOneWithoutInstanceInput
    transactions?: TransactionCreateNestedManyWithoutInstanceInput
  }

  export type ResourceInstanceUncheckedCreateInput = {
    id?: string
    instance_name?: string
    resource_id: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    loan?: ResourceLoanUncheckedCreateNestedOneWithoutInstanceInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type ResourceInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutInstancesNestedInput
    loan?: ResourceLoanUpdateOneWithoutInstanceNestedInput
    transactions?: TransactionUpdateManyWithoutInstanceNestedInput
  }

  export type ResourceInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    resource_id?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: ResourceLoanUncheckedUpdateOneWithoutInstanceNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type ResourceInstanceCreateManyInput = {
    id?: string
    instance_name?: string
    resource_id: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    resource_id?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLoanCreateInput = {
    id?: string
    until: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutLoansInput
    instance: ResourceInstanceCreateNestedOneWithoutLoanInput
  }

  export type ResourceLoanUncheckedCreateInput = {
    id?: string
    userId: string
    until: Date | string
    instanceId: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceLoanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
    instance?: ResourceInstanceUpdateOneRequiredWithoutLoanNestedInput
  }

  export type ResourceLoanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLoanCreateManyInput = {
    id?: string
    userId: string
    until: Date | string
    instanceId: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceLoanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLoanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialCreateInput = {
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTestimonialsInput
    resource: ResourceCreateNestedOneWithoutTestimonialsInput
  }

  export type ResourceTestimonialUncheckedCreateInput = {
    userId: string
    resourceId: string
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
  }

  export type ResourceTestimonialUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestimonialsNestedInput
    resource?: ResourceUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type ResourceTestimonialUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialCreateManyInput = {
    userId: string
    resourceId: string
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
  }

  export type ResourceTestimonialUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTypeCreateInput = {
    resource_type_name?: $Enums.ResourceTypes
    max_loan_days?: number
    max_units_per_loan?: number
    Resource?: ResourceCreateNestedManyWithoutTypeInput
  }

  export type ResourceTypeUncheckedCreateInput = {
    id?: number
    resource_type_name?: $Enums.ResourceTypes
    max_loan_days?: number
    max_units_per_loan?: number
    Resource?: ResourceUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ResourceTypeUpdateInput = {
    resource_type_name?: EnumResourceTypesFieldUpdateOperationsInput | $Enums.ResourceTypes
    max_loan_days?: IntFieldUpdateOperationsInput | number
    max_units_per_loan?: IntFieldUpdateOperationsInput | number
    Resource?: ResourceUpdateManyWithoutTypeNestedInput
  }

  export type ResourceTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resource_type_name?: EnumResourceTypesFieldUpdateOperationsInput | $Enums.ResourceTypes
    max_loan_days?: IntFieldUpdateOperationsInput | number
    max_units_per_loan?: IntFieldUpdateOperationsInput | number
    Resource?: ResourceUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type ResourceTypeCreateManyInput = {
    id?: number
    resource_type_name?: $Enums.ResourceTypes
    max_loan_days?: number
    max_units_per_loan?: number
  }

  export type ResourceTypeUpdateManyMutationInput = {
    resource_type_name?: EnumResourceTypesFieldUpdateOperationsInput | $Enums.ResourceTypes
    max_loan_days?: IntFieldUpdateOperationsInput | number
    max_units_per_loan?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resource_type_name?: EnumResourceTypesFieldUpdateOperationsInput | $Enums.ResourceTypes
    max_loan_days?: IntFieldUpdateOperationsInput | number
    max_units_per_loan?: IntFieldUpdateOperationsInput | number
  }

  export type PublisherCreateInput = {
    publisher_name: string
    image_url: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    resources?: ResourceCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUncheckedCreateInput = {
    id?: number
    publisher_name: string
    image_url: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUpdateInput = {
    publisher_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisher_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherCreateManyInput = {
    id?: number
    publisher_name: string
    image_url: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PublisherUpdateManyMutationInput = {
    publisher_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisher_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    resources?: ResourceCreateNestedManyWithoutCategoriesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutCategoriesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUpdateManyWithoutCategoriesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutCategoriesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCategoryCreateInput = {
    resource: ResourceCreateNestedOneWithoutResourceCategoryInput
    category: CategoryCreateNestedOneWithoutResourceCategoryInput
  }

  export type ResourceCategoryUncheckedCreateInput = {
    resource_id: string
    category_id: number
  }

  export type ResourceCategoryUpdateInput = {
    resource?: ResourceUpdateOneRequiredWithoutResourceCategoryNestedInput
    category?: CategoryUpdateOneRequiredWithoutResourceCategoryNestedInput
  }

  export type ResourceCategoryUncheckedUpdateInput = {
    resource_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCategoryCreateManyInput = {
    resource_id: string
    category_id: number
  }

  export type ResourceCategoryUpdateManyMutationInput = {

  }

  export type ResourceCategoryUncheckedUpdateManyInput = {
    resource_id?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    id?: string
    type?: $Enums.TransactionType
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    instance?: ResourceInstanceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    instanceId?: string | null
    type?: $Enums.TransactionType
    created_at?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    instance?: ResourceInstanceUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    instanceId?: string | null
    type?: $Enums.TransactionType
    created_at?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type ResourceLoanListRelationFilter = {
    every?: ResourceLoanWhereInput
    some?: ResourceLoanWhereInput
    none?: ResourceLoanWhereInput
  }

  export type ResourceTestimonialListRelationFilter = {
    every?: ResourceTestimonialWhereInput
    some?: ResourceTestimonialWhereInput
    none?: ResourceTestimonialWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceLoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceTestimonialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    image_url?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    active?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    image_url?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    active?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    image_url?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    active?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.RoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUser_idRole_idCompoundUniqueInput = {
    user_id: string
    role_id: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type ResourceTypeRelationFilter = {
    is?: ResourceTypeWhereInput
    isNot?: ResourceTypeWhereInput
  }

  export type ResourceInstanceListRelationFilter = {
    every?: ResourceInstanceWhereInput
    some?: ResourceInstanceWhereInput
    none?: ResourceInstanceWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ResourceCategoryListRelationFilter = {
    every?: ResourceCategoryWhereInput
    some?: ResourceCategoryWhereInput
    none?: ResourceCategoryWhereInput
  }

  export type PublisherRelationFilter = {
    is?: PublisherWhereInput
    isNot?: PublisherWhereInput
  }

  export type ResourceDetailRelationFilter = {
    is?: ResourceDetailWhereInput
    isNot?: ResourceDetailWhereInput
  }

  export type ResourceInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    resource_name?: SortOrder
    slug_name?: SortOrder
    image_url?: SortOrder
    author?: SortOrder
    short_description?: SortOrder
    edition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    resource_name?: SortOrder
    slug_name?: SortOrder
    image_url?: SortOrder
    author?: SortOrder
    short_description?: SortOrder
    edition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    resource_name?: SortOrder
    slug_name?: SortOrder
    image_url?: SortOrder
    author?: SortOrder
    short_description?: SortOrder
    edition?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    type_id?: SortOrder
    publisher_id?: SortOrder
    detail_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ResourceNullableRelationFilter = {
    is?: ResourceWhereInput | null
    isNot?: ResourceWhereInput | null
  }

  export type ResourceDetailCountOrderByAggregateInput = {
    id?: SortOrder
    pub_year?: SortOrder
    isbn?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    pub_year?: SortOrder
  }

  export type ResourceDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    pub_year?: SortOrder
    isbn?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceDetailMinOrderByAggregateInput = {
    id?: SortOrder
    pub_year?: SortOrder
    isbn?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceDetailSumOrderByAggregateInput = {
    id?: SortOrder
    pub_year?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumResourceLangFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceLang | EnumResourceLangFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceLangFilter<$PrismaModel> | $Enums.ResourceLang
  }

  export type EnumResourceInstanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceInstanceStatus | EnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceInstanceStatusFilter<$PrismaModel> | $Enums.ResourceInstanceStatus
  }

  export type ResourceRelationFilter = {
    is?: ResourceWhereInput
    isNot?: ResourceWhereInput
  }

  export type ResourceLoanNullableRelationFilter = {
    is?: ResourceLoanWhereInput | null
    isNot?: ResourceLoanWhereInput | null
  }

  export type ResourceInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    instance_name?: SortOrder
    resource_id?: SortOrder
    lang?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    instance_name?: SortOrder
    resource_id?: SortOrder
    lang?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    instance_name?: SortOrder
    resource_id?: SortOrder
    lang?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumResourceLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceLang | EnumResourceLangFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceLangWithAggregatesFilter<$PrismaModel> | $Enums.ResourceLang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceLangFilter<$PrismaModel>
    _max?: NestedEnumResourceLangFilter<$PrismaModel>
  }

  export type EnumResourceInstanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceInstanceStatus | EnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceInstanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResourceInstanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceInstanceStatusFilter<$PrismaModel>
    _max?: NestedEnumResourceInstanceStatusFilter<$PrismaModel>
  }

  export type ResourceInstanceRelationFilter = {
    is?: ResourceInstanceWhereInput
    isNot?: ResourceInstanceWhereInput
  }

  export type ResourceLoanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    until?: SortOrder
    instanceId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceLoanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    until?: SortOrder
    instanceId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceLoanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    until?: SortOrder
    instanceId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceTestimonialUserIdResourceIdCompoundUniqueInput = {
    userId: string
    resourceId: string
  }

  export type ResourceTestimonialCountOrderByAggregateInput = {
    userId?: SortOrder
    resourceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    testimonial?: SortOrder
    created_at?: SortOrder
  }

  export type ResourceTestimonialAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ResourceTestimonialMaxOrderByAggregateInput = {
    userId?: SortOrder
    resourceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    testimonial?: SortOrder
    created_at?: SortOrder
  }

  export type ResourceTestimonialMinOrderByAggregateInput = {
    userId?: SortOrder
    resourceId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    testimonial?: SortOrder
    created_at?: SortOrder
  }

  export type ResourceTestimonialSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumResourceTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceTypes | EnumResourceTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypesFilter<$PrismaModel> | $Enums.ResourceTypes
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceTypeCountOrderByAggregateInput = {
    id?: SortOrder
    resource_type_name?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
  }

  export type ResourceTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
  }

  export type ResourceTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    resource_type_name?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
  }

  export type ResourceTypeMinOrderByAggregateInput = {
    id?: SortOrder
    resource_type_name?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
  }

  export type ResourceTypeSumOrderByAggregateInput = {
    id?: SortOrder
    max_loan_days?: SortOrder
    max_units_per_loan?: SortOrder
  }

  export type EnumResourceTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceTypes | EnumResourceTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypesWithAggregatesFilter<$PrismaModel> | $Enums.ResourceTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypesFilter<$PrismaModel>
    _max?: NestedEnumResourceTypesFilter<$PrismaModel>
  }

  export type PublisherCountOrderByAggregateInput = {
    id?: SortOrder
    publisher_name?: SortOrder
    image_url?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PublisherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublisherMaxOrderByAggregateInput = {
    id?: SortOrder
    publisher_name?: SortOrder
    image_url?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PublisherMinOrderByAggregateInput = {
    id?: SortOrder
    publisher_name?: SortOrder
    image_url?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PublisherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ResourceCategoryResource_idCategory_idCompoundUniqueInput = {
    resource_id: string
    category_id: number
  }

  export type ResourceCategoryCountOrderByAggregateInput = {
    resource_id?: SortOrder
    category_id?: SortOrder
  }

  export type ResourceCategoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type ResourceCategoryMaxOrderByAggregateInput = {
    resource_id?: SortOrder
    category_id?: SortOrder
  }

  export type ResourceCategoryMinOrderByAggregateInput = {
    resource_id?: SortOrder
    category_id?: SortOrder
  }

  export type ResourceCategorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type ResourceInstanceNullableRelationFilter = {
    is?: ResourceInstanceWhereInput | null
    isNot?: ResourceInstanceWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instanceId?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instanceId?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    instanceId?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type ResourceLoanCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceLoanCreateWithoutUserInput, ResourceLoanUncheckedCreateWithoutUserInput> | ResourceLoanCreateWithoutUserInput[] | ResourceLoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutUserInput | ResourceLoanCreateOrConnectWithoutUserInput[]
    createMany?: ResourceLoanCreateManyUserInputEnvelope
    connect?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
  }

  export type ResourceTestimonialCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceTestimonialCreateWithoutUserInput, ResourceTestimonialUncheckedCreateWithoutUserInput> | ResourceTestimonialCreateWithoutUserInput[] | ResourceTestimonialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutUserInput | ResourceTestimonialCreateOrConnectWithoutUserInput[]
    createMany?: ResourceTestimonialCreateManyUserInputEnvelope
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type ResourceLoanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceLoanCreateWithoutUserInput, ResourceLoanUncheckedCreateWithoutUserInput> | ResourceLoanCreateWithoutUserInput[] | ResourceLoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutUserInput | ResourceLoanCreateOrConnectWithoutUserInput[]
    createMany?: ResourceLoanCreateManyUserInputEnvelope
    connect?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
  }

  export type ResourceTestimonialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceTestimonialCreateWithoutUserInput, ResourceTestimonialUncheckedCreateWithoutUserInput> | ResourceTestimonialCreateWithoutUserInput[] | ResourceTestimonialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutUserInput | ResourceTestimonialCreateOrConnectWithoutUserInput[]
    createMany?: ResourceTestimonialCreateManyUserInputEnvelope
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type ResourceLoanUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceLoanCreateWithoutUserInput, ResourceLoanUncheckedCreateWithoutUserInput> | ResourceLoanCreateWithoutUserInput[] | ResourceLoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutUserInput | ResourceLoanCreateOrConnectWithoutUserInput[]
    upsert?: ResourceLoanUpsertWithWhereUniqueWithoutUserInput | ResourceLoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceLoanCreateManyUserInputEnvelope
    set?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    disconnect?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    delete?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    connect?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    update?: ResourceLoanUpdateWithWhereUniqueWithoutUserInput | ResourceLoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceLoanUpdateManyWithWhereWithoutUserInput | ResourceLoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceLoanScalarWhereInput | ResourceLoanScalarWhereInput[]
  }

  export type ResourceTestimonialUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceTestimonialCreateWithoutUserInput, ResourceTestimonialUncheckedCreateWithoutUserInput> | ResourceTestimonialCreateWithoutUserInput[] | ResourceTestimonialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutUserInput | ResourceTestimonialCreateOrConnectWithoutUserInput[]
    upsert?: ResourceTestimonialUpsertWithWhereUniqueWithoutUserInput | ResourceTestimonialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceTestimonialCreateManyUserInputEnvelope
    set?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    disconnect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    delete?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    update?: ResourceTestimonialUpdateWithWhereUniqueWithoutUserInput | ResourceTestimonialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceTestimonialUpdateManyWithWhereWithoutUserInput | ResourceTestimonialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceTestimonialScalarWhereInput | ResourceTestimonialScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type ResourceLoanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceLoanCreateWithoutUserInput, ResourceLoanUncheckedCreateWithoutUserInput> | ResourceLoanCreateWithoutUserInput[] | ResourceLoanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutUserInput | ResourceLoanCreateOrConnectWithoutUserInput[]
    upsert?: ResourceLoanUpsertWithWhereUniqueWithoutUserInput | ResourceLoanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceLoanCreateManyUserInputEnvelope
    set?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    disconnect?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    delete?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    connect?: ResourceLoanWhereUniqueInput | ResourceLoanWhereUniqueInput[]
    update?: ResourceLoanUpdateWithWhereUniqueWithoutUserInput | ResourceLoanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceLoanUpdateManyWithWhereWithoutUserInput | ResourceLoanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceLoanScalarWhereInput | ResourceLoanScalarWhereInput[]
  }

  export type ResourceTestimonialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceTestimonialCreateWithoutUserInput, ResourceTestimonialUncheckedCreateWithoutUserInput> | ResourceTestimonialCreateWithoutUserInput[] | ResourceTestimonialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutUserInput | ResourceTestimonialCreateOrConnectWithoutUserInput[]
    upsert?: ResourceTestimonialUpsertWithWhereUniqueWithoutUserInput | ResourceTestimonialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceTestimonialCreateManyUserInputEnvelope
    set?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    disconnect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    delete?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    update?: ResourceTestimonialUpdateWithWhereUniqueWithoutUserInput | ResourceTestimonialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceTestimonialUpdateManyWithWhereWithoutUserInput | ResourceTestimonialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceTestimonialScalarWhereInput | ResourceTestimonialScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type EnumRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.RoleEnum
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRoleInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    upsert?: UserUpsertWithoutUserRoleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRoleInput, UserUpdateWithoutUserRoleInput>, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRoleInput
    upsert?: RoleUpsertWithoutUserRoleInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRoleInput, RoleUpdateWithoutUserRoleInput>, RoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type ResourceTypeCreateNestedOneWithoutResourceInput = {
    create?: XOR<ResourceTypeCreateWithoutResourceInput, ResourceTypeUncheckedCreateWithoutResourceInput>
    connectOrCreate?: ResourceTypeCreateOrConnectWithoutResourceInput
    connect?: ResourceTypeWhereUniqueInput
  }

  export type ResourceInstanceCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceInstanceCreateWithoutResourceInput, ResourceInstanceUncheckedCreateWithoutResourceInput> | ResourceInstanceCreateWithoutResourceInput[] | ResourceInstanceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutResourceInput | ResourceInstanceCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceInstanceCreateManyResourceInputEnvelope
    connect?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
  }

  export type ResourceTestimonialCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceTestimonialCreateWithoutResourceInput, ResourceTestimonialUncheckedCreateWithoutResourceInput> | ResourceTestimonialCreateWithoutResourceInput[] | ResourceTestimonialUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutResourceInput | ResourceTestimonialCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceTestimonialCreateManyResourceInputEnvelope
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutResourcesInput = {
    create?: XOR<CategoryCreateWithoutResourcesInput, CategoryUncheckedCreateWithoutResourcesInput> | CategoryCreateWithoutResourcesInput[] | CategoryUncheckedCreateWithoutResourcesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutResourcesInput | CategoryCreateOrConnectWithoutResourcesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ResourceCategoryCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceCategoryCreateWithoutResourceInput, ResourceCategoryUncheckedCreateWithoutResourceInput> | ResourceCategoryCreateWithoutResourceInput[] | ResourceCategoryUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutResourceInput | ResourceCategoryCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceCategoryCreateManyResourceInputEnvelope
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
  }

  export type PublisherCreateNestedOneWithoutResourcesInput = {
    create?: XOR<PublisherCreateWithoutResourcesInput, PublisherUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutResourcesInput
    connect?: PublisherWhereUniqueInput
  }

  export type ResourceDetailCreateNestedOneWithoutResourceInput = {
    create?: XOR<ResourceDetailCreateWithoutResourceInput, ResourceDetailUncheckedCreateWithoutResourceInput>
    connectOrCreate?: ResourceDetailCreateOrConnectWithoutResourceInput
    connect?: ResourceDetailWhereUniqueInput
  }

  export type ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceInstanceCreateWithoutResourceInput, ResourceInstanceUncheckedCreateWithoutResourceInput> | ResourceInstanceCreateWithoutResourceInput[] | ResourceInstanceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutResourceInput | ResourceInstanceCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceInstanceCreateManyResourceInputEnvelope
    connect?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
  }

  export type ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceTestimonialCreateWithoutResourceInput, ResourceTestimonialUncheckedCreateWithoutResourceInput> | ResourceTestimonialCreateWithoutResourceInput[] | ResourceTestimonialUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutResourceInput | ResourceTestimonialCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceTestimonialCreateManyResourceInputEnvelope
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutResourcesInput = {
    create?: XOR<CategoryCreateWithoutResourcesInput, CategoryUncheckedCreateWithoutResourcesInput> | CategoryCreateWithoutResourcesInput[] | CategoryUncheckedCreateWithoutResourcesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutResourcesInput | CategoryCreateOrConnectWithoutResourcesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceCategoryCreateWithoutResourceInput, ResourceCategoryUncheckedCreateWithoutResourceInput> | ResourceCategoryCreateWithoutResourceInput[] | ResourceCategoryUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutResourceInput | ResourceCategoryCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceCategoryCreateManyResourceInputEnvelope
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
  }

  export type ResourceTypeUpdateOneRequiredWithoutResourceNestedInput = {
    create?: XOR<ResourceTypeCreateWithoutResourceInput, ResourceTypeUncheckedCreateWithoutResourceInput>
    connectOrCreate?: ResourceTypeCreateOrConnectWithoutResourceInput
    upsert?: ResourceTypeUpsertWithoutResourceInput
    connect?: ResourceTypeWhereUniqueInput
    update?: XOR<XOR<ResourceTypeUpdateToOneWithWhereWithoutResourceInput, ResourceTypeUpdateWithoutResourceInput>, ResourceTypeUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceInstanceUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceInstanceCreateWithoutResourceInput, ResourceInstanceUncheckedCreateWithoutResourceInput> | ResourceInstanceCreateWithoutResourceInput[] | ResourceInstanceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutResourceInput | ResourceInstanceCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceInstanceUpsertWithWhereUniqueWithoutResourceInput | ResourceInstanceUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceInstanceCreateManyResourceInputEnvelope
    set?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    disconnect?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    delete?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    connect?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    update?: ResourceInstanceUpdateWithWhereUniqueWithoutResourceInput | ResourceInstanceUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceInstanceUpdateManyWithWhereWithoutResourceInput | ResourceInstanceUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceInstanceScalarWhereInput | ResourceInstanceScalarWhereInput[]
  }

  export type ResourceTestimonialUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceTestimonialCreateWithoutResourceInput, ResourceTestimonialUncheckedCreateWithoutResourceInput> | ResourceTestimonialCreateWithoutResourceInput[] | ResourceTestimonialUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutResourceInput | ResourceTestimonialCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceTestimonialUpsertWithWhereUniqueWithoutResourceInput | ResourceTestimonialUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceTestimonialCreateManyResourceInputEnvelope
    set?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    disconnect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    delete?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    update?: ResourceTestimonialUpdateWithWhereUniqueWithoutResourceInput | ResourceTestimonialUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceTestimonialUpdateManyWithWhereWithoutResourceInput | ResourceTestimonialUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceTestimonialScalarWhereInput | ResourceTestimonialScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutResourcesNestedInput = {
    create?: XOR<CategoryCreateWithoutResourcesInput, CategoryUncheckedCreateWithoutResourcesInput> | CategoryCreateWithoutResourcesInput[] | CategoryUncheckedCreateWithoutResourcesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutResourcesInput | CategoryCreateOrConnectWithoutResourcesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutResourcesInput | CategoryUpsertWithWhereUniqueWithoutResourcesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutResourcesInput | CategoryUpdateWithWhereUniqueWithoutResourcesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutResourcesInput | CategoryUpdateManyWithWhereWithoutResourcesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ResourceCategoryUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceCategoryCreateWithoutResourceInput, ResourceCategoryUncheckedCreateWithoutResourceInput> | ResourceCategoryCreateWithoutResourceInput[] | ResourceCategoryUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutResourceInput | ResourceCategoryCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceCategoryUpsertWithWhereUniqueWithoutResourceInput | ResourceCategoryUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceCategoryCreateManyResourceInputEnvelope
    set?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    disconnect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    delete?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    update?: ResourceCategoryUpdateWithWhereUniqueWithoutResourceInput | ResourceCategoryUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceCategoryUpdateManyWithWhereWithoutResourceInput | ResourceCategoryUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceCategoryScalarWhereInput | ResourceCategoryScalarWhereInput[]
  }

  export type PublisherUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<PublisherCreateWithoutResourcesInput, PublisherUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutResourcesInput
    upsert?: PublisherUpsertWithoutResourcesInput
    connect?: PublisherWhereUniqueInput
    update?: XOR<XOR<PublisherUpdateToOneWithWhereWithoutResourcesInput, PublisherUpdateWithoutResourcesInput>, PublisherUncheckedUpdateWithoutResourcesInput>
  }

  export type ResourceDetailUpdateOneRequiredWithoutResourceNestedInput = {
    create?: XOR<ResourceDetailCreateWithoutResourceInput, ResourceDetailUncheckedCreateWithoutResourceInput>
    connectOrCreate?: ResourceDetailCreateOrConnectWithoutResourceInput
    upsert?: ResourceDetailUpsertWithoutResourceInput
    connect?: ResourceDetailWhereUniqueInput
    update?: XOR<XOR<ResourceDetailUpdateToOneWithWhereWithoutResourceInput, ResourceDetailUpdateWithoutResourceInput>, ResourceDetailUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceInstanceCreateWithoutResourceInput, ResourceInstanceUncheckedCreateWithoutResourceInput> | ResourceInstanceCreateWithoutResourceInput[] | ResourceInstanceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutResourceInput | ResourceInstanceCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceInstanceUpsertWithWhereUniqueWithoutResourceInput | ResourceInstanceUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceInstanceCreateManyResourceInputEnvelope
    set?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    disconnect?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    delete?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    connect?: ResourceInstanceWhereUniqueInput | ResourceInstanceWhereUniqueInput[]
    update?: ResourceInstanceUpdateWithWhereUniqueWithoutResourceInput | ResourceInstanceUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceInstanceUpdateManyWithWhereWithoutResourceInput | ResourceInstanceUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceInstanceScalarWhereInput | ResourceInstanceScalarWhereInput[]
  }

  export type ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceTestimonialCreateWithoutResourceInput, ResourceTestimonialUncheckedCreateWithoutResourceInput> | ResourceTestimonialCreateWithoutResourceInput[] | ResourceTestimonialUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTestimonialCreateOrConnectWithoutResourceInput | ResourceTestimonialCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceTestimonialUpsertWithWhereUniqueWithoutResourceInput | ResourceTestimonialUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceTestimonialCreateManyResourceInputEnvelope
    set?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    disconnect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    delete?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    connect?: ResourceTestimonialWhereUniqueInput | ResourceTestimonialWhereUniqueInput[]
    update?: ResourceTestimonialUpdateWithWhereUniqueWithoutResourceInput | ResourceTestimonialUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceTestimonialUpdateManyWithWhereWithoutResourceInput | ResourceTestimonialUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceTestimonialScalarWhereInput | ResourceTestimonialScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutResourcesNestedInput = {
    create?: XOR<CategoryCreateWithoutResourcesInput, CategoryUncheckedCreateWithoutResourcesInput> | CategoryCreateWithoutResourcesInput[] | CategoryUncheckedCreateWithoutResourcesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutResourcesInput | CategoryCreateOrConnectWithoutResourcesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutResourcesInput | CategoryUpsertWithWhereUniqueWithoutResourcesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutResourcesInput | CategoryUpdateWithWhereUniqueWithoutResourcesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutResourcesInput | CategoryUpdateManyWithWhereWithoutResourcesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceCategoryCreateWithoutResourceInput, ResourceCategoryUncheckedCreateWithoutResourceInput> | ResourceCategoryCreateWithoutResourceInput[] | ResourceCategoryUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutResourceInput | ResourceCategoryCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceCategoryUpsertWithWhereUniqueWithoutResourceInput | ResourceCategoryUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceCategoryCreateManyResourceInputEnvelope
    set?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    disconnect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    delete?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    update?: ResourceCategoryUpdateWithWhereUniqueWithoutResourceInput | ResourceCategoryUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceCategoryUpdateManyWithWhereWithoutResourceInput | ResourceCategoryUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceCategoryScalarWhereInput | ResourceCategoryScalarWhereInput[]
  }

  export type ResourceCreateNestedOneWithoutDetailInput = {
    create?: XOR<ResourceCreateWithoutDetailInput, ResourceUncheckedCreateWithoutDetailInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutDetailInput
    connect?: ResourceWhereUniqueInput
  }

  export type ResourceUncheckedCreateNestedOneWithoutDetailInput = {
    create?: XOR<ResourceCreateWithoutDetailInput, ResourceUncheckedCreateWithoutDetailInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutDetailInput
    connect?: ResourceWhereUniqueInput
  }

  export type ResourceUpdateOneWithoutDetailNestedInput = {
    create?: XOR<ResourceCreateWithoutDetailInput, ResourceUncheckedCreateWithoutDetailInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutDetailInput
    upsert?: ResourceUpsertWithoutDetailInput
    disconnect?: ResourceWhereInput | boolean
    delete?: ResourceWhereInput | boolean
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutDetailInput, ResourceUpdateWithoutDetailInput>, ResourceUncheckedUpdateWithoutDetailInput>
  }

  export type ResourceUncheckedUpdateOneWithoutDetailNestedInput = {
    create?: XOR<ResourceCreateWithoutDetailInput, ResourceUncheckedCreateWithoutDetailInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutDetailInput
    upsert?: ResourceUpsertWithoutDetailInput
    disconnect?: ResourceWhereInput | boolean
    delete?: ResourceWhereInput | boolean
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutDetailInput, ResourceUpdateWithoutDetailInput>, ResourceUncheckedUpdateWithoutDetailInput>
  }

  export type ResourceCreateNestedOneWithoutInstancesInput = {
    create?: XOR<ResourceCreateWithoutInstancesInput, ResourceUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutInstancesInput
    connect?: ResourceWhereUniqueInput
  }

  export type ResourceLoanCreateNestedOneWithoutInstanceInput = {
    create?: XOR<ResourceLoanCreateWithoutInstanceInput, ResourceLoanUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutInstanceInput
    connect?: ResourceLoanWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutInstanceInput = {
    create?: XOR<TransactionCreateWithoutInstanceInput, TransactionUncheckedCreateWithoutInstanceInput> | TransactionCreateWithoutInstanceInput[] | TransactionUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInstanceInput | TransactionCreateOrConnectWithoutInstanceInput[]
    createMany?: TransactionCreateManyInstanceInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ResourceLoanUncheckedCreateNestedOneWithoutInstanceInput = {
    create?: XOR<ResourceLoanCreateWithoutInstanceInput, ResourceLoanUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutInstanceInput
    connect?: ResourceLoanWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutInstanceInput = {
    create?: XOR<TransactionCreateWithoutInstanceInput, TransactionUncheckedCreateWithoutInstanceInput> | TransactionCreateWithoutInstanceInput[] | TransactionUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInstanceInput | TransactionCreateOrConnectWithoutInstanceInput[]
    createMany?: TransactionCreateManyInstanceInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumResourceLangFieldUpdateOperationsInput = {
    set?: $Enums.ResourceLang
  }

  export type EnumResourceInstanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResourceInstanceStatus
  }

  export type ResourceUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<ResourceCreateWithoutInstancesInput, ResourceUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutInstancesInput
    upsert?: ResourceUpsertWithoutInstancesInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutInstancesInput, ResourceUpdateWithoutInstancesInput>, ResourceUncheckedUpdateWithoutInstancesInput>
  }

  export type ResourceLoanUpdateOneWithoutInstanceNestedInput = {
    create?: XOR<ResourceLoanCreateWithoutInstanceInput, ResourceLoanUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutInstanceInput
    upsert?: ResourceLoanUpsertWithoutInstanceInput
    disconnect?: ResourceLoanWhereInput | boolean
    delete?: ResourceLoanWhereInput | boolean
    connect?: ResourceLoanWhereUniqueInput
    update?: XOR<XOR<ResourceLoanUpdateToOneWithWhereWithoutInstanceInput, ResourceLoanUpdateWithoutInstanceInput>, ResourceLoanUncheckedUpdateWithoutInstanceInput>
  }

  export type TransactionUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<TransactionCreateWithoutInstanceInput, TransactionUncheckedCreateWithoutInstanceInput> | TransactionCreateWithoutInstanceInput[] | TransactionUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInstanceInput | TransactionCreateOrConnectWithoutInstanceInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutInstanceInput | TransactionUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: TransactionCreateManyInstanceInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutInstanceInput | TransactionUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutInstanceInput | TransactionUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ResourceLoanUncheckedUpdateOneWithoutInstanceNestedInput = {
    create?: XOR<ResourceLoanCreateWithoutInstanceInput, ResourceLoanUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: ResourceLoanCreateOrConnectWithoutInstanceInput
    upsert?: ResourceLoanUpsertWithoutInstanceInput
    disconnect?: ResourceLoanWhereInput | boolean
    delete?: ResourceLoanWhereInput | boolean
    connect?: ResourceLoanWhereUniqueInput
    update?: XOR<XOR<ResourceLoanUpdateToOneWithWhereWithoutInstanceInput, ResourceLoanUpdateWithoutInstanceInput>, ResourceLoanUncheckedUpdateWithoutInstanceInput>
  }

  export type TransactionUncheckedUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<TransactionCreateWithoutInstanceInput, TransactionUncheckedCreateWithoutInstanceInput> | TransactionCreateWithoutInstanceInput[] | TransactionUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutInstanceInput | TransactionCreateOrConnectWithoutInstanceInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutInstanceInput | TransactionUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: TransactionCreateManyInstanceInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutInstanceInput | TransactionUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutInstanceInput | TransactionUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLoansInput = {
    create?: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput
    connect?: UserWhereUniqueInput
  }

  export type ResourceInstanceCreateNestedOneWithoutLoanInput = {
    create?: XOR<ResourceInstanceCreateWithoutLoanInput, ResourceInstanceUncheckedCreateWithoutLoanInput>
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutLoanInput
    connect?: ResourceInstanceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLoansNestedInput = {
    create?: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoansInput
    upsert?: UserUpsertWithoutLoansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoansInput, UserUpdateWithoutLoansInput>, UserUncheckedUpdateWithoutLoansInput>
  }

  export type ResourceInstanceUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<ResourceInstanceCreateWithoutLoanInput, ResourceInstanceUncheckedCreateWithoutLoanInput>
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutLoanInput
    upsert?: ResourceInstanceUpsertWithoutLoanInput
    connect?: ResourceInstanceWhereUniqueInput
    update?: XOR<XOR<ResourceInstanceUpdateToOneWithWhereWithoutLoanInput, ResourceInstanceUpdateWithoutLoanInput>, ResourceInstanceUncheckedUpdateWithoutLoanInput>
  }

  export type UserCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestimonialsInput
    connect?: UserWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<ResourceCreateWithoutTestimonialsInput, ResourceUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutTestimonialsInput
    connect?: ResourceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTestimonialsNestedInput = {
    create?: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestimonialsInput
    upsert?: UserUpsertWithoutTestimonialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestimonialsInput, UserUpdateWithoutTestimonialsInput>, UserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type ResourceUpdateOneRequiredWithoutTestimonialsNestedInput = {
    create?: XOR<ResourceCreateWithoutTestimonialsInput, ResourceUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutTestimonialsInput
    upsert?: ResourceUpsertWithoutTestimonialsInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutTestimonialsInput, ResourceUpdateWithoutTestimonialsInput>, ResourceUncheckedUpdateWithoutTestimonialsInput>
  }

  export type ResourceCreateNestedManyWithoutTypeInput = {
    create?: XOR<ResourceCreateWithoutTypeInput, ResourceUncheckedCreateWithoutTypeInput> | ResourceCreateWithoutTypeInput[] | ResourceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutTypeInput | ResourceCreateOrConnectWithoutTypeInput[]
    createMany?: ResourceCreateManyTypeInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ResourceCreateWithoutTypeInput, ResourceUncheckedCreateWithoutTypeInput> | ResourceCreateWithoutTypeInput[] | ResourceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutTypeInput | ResourceCreateOrConnectWithoutTypeInput[]
    createMany?: ResourceCreateManyTypeInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type EnumResourceTypesFieldUpdateOperationsInput = {
    set?: $Enums.ResourceTypes
  }

  export type ResourceUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ResourceCreateWithoutTypeInput, ResourceUncheckedCreateWithoutTypeInput> | ResourceCreateWithoutTypeInput[] | ResourceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutTypeInput | ResourceCreateOrConnectWithoutTypeInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutTypeInput | ResourceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ResourceCreateManyTypeInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutTypeInput | ResourceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutTypeInput | ResourceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ResourceCreateWithoutTypeInput, ResourceUncheckedCreateWithoutTypeInput> | ResourceCreateWithoutTypeInput[] | ResourceUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutTypeInput | ResourceCreateOrConnectWithoutTypeInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutTypeInput | ResourceUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ResourceCreateManyTypeInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutTypeInput | ResourceUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutTypeInput | ResourceUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ResourceCreateNestedManyWithoutPublisherInput = {
    create?: XOR<ResourceCreateWithoutPublisherInput, ResourceUncheckedCreateWithoutPublisherInput> | ResourceCreateWithoutPublisherInput[] | ResourceUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutPublisherInput | ResourceCreateOrConnectWithoutPublisherInput[]
    createMany?: ResourceCreateManyPublisherInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<ResourceCreateWithoutPublisherInput, ResourceUncheckedCreateWithoutPublisherInput> | ResourceCreateWithoutPublisherInput[] | ResourceUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutPublisherInput | ResourceCreateOrConnectWithoutPublisherInput[]
    createMany?: ResourceCreateManyPublisherInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ResourceUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<ResourceCreateWithoutPublisherInput, ResourceUncheckedCreateWithoutPublisherInput> | ResourceCreateWithoutPublisherInput[] | ResourceUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutPublisherInput | ResourceCreateOrConnectWithoutPublisherInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutPublisherInput | ResourceUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: ResourceCreateManyPublisherInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutPublisherInput | ResourceUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutPublisherInput | ResourceUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<ResourceCreateWithoutPublisherInput, ResourceUncheckedCreateWithoutPublisherInput> | ResourceCreateWithoutPublisherInput[] | ResourceUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutPublisherInput | ResourceCreateOrConnectWithoutPublisherInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutPublisherInput | ResourceUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: ResourceCreateManyPublisherInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutPublisherInput | ResourceUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutPublisherInput | ResourceUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ResourceCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ResourceCreateWithoutCategoriesInput, ResourceUncheckedCreateWithoutCategoriesInput> | ResourceCreateWithoutCategoriesInput[] | ResourceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCategoriesInput | ResourceCreateOrConnectWithoutCategoriesInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ResourceCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ResourceCategoryCreateWithoutCategoryInput, ResourceCategoryUncheckedCreateWithoutCategoryInput> | ResourceCategoryCreateWithoutCategoryInput[] | ResourceCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutCategoryInput | ResourceCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ResourceCategoryCreateManyCategoryInputEnvelope
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ResourceCreateWithoutCategoriesInput, ResourceUncheckedCreateWithoutCategoriesInput> | ResourceCreateWithoutCategoriesInput[] | ResourceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCategoriesInput | ResourceCreateOrConnectWithoutCategoriesInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ResourceCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ResourceCategoryCreateWithoutCategoryInput, ResourceCategoryUncheckedCreateWithoutCategoryInput> | ResourceCategoryCreateWithoutCategoryInput[] | ResourceCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutCategoryInput | ResourceCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ResourceCategoryCreateManyCategoryInputEnvelope
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
  }

  export type ResourceUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ResourceCreateWithoutCategoriesInput, ResourceUncheckedCreateWithoutCategoriesInput> | ResourceCreateWithoutCategoriesInput[] | ResourceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCategoriesInput | ResourceCreateOrConnectWithoutCategoriesInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCategoriesInput | ResourceUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCategoriesInput | ResourceUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCategoriesInput | ResourceUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ResourceCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ResourceCategoryCreateWithoutCategoryInput, ResourceCategoryUncheckedCreateWithoutCategoryInput> | ResourceCategoryCreateWithoutCategoryInput[] | ResourceCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutCategoryInput | ResourceCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ResourceCategoryUpsertWithWhereUniqueWithoutCategoryInput | ResourceCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ResourceCategoryCreateManyCategoryInputEnvelope
    set?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    disconnect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    delete?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    update?: ResourceCategoryUpdateWithWhereUniqueWithoutCategoryInput | ResourceCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ResourceCategoryUpdateManyWithWhereWithoutCategoryInput | ResourceCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ResourceCategoryScalarWhereInput | ResourceCategoryScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ResourceCreateWithoutCategoriesInput, ResourceUncheckedCreateWithoutCategoriesInput> | ResourceCreateWithoutCategoriesInput[] | ResourceUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCategoriesInput | ResourceCreateOrConnectWithoutCategoriesInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCategoriesInput | ResourceUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCategoriesInput | ResourceUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCategoriesInput | ResourceUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ResourceCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ResourceCategoryCreateWithoutCategoryInput, ResourceCategoryUncheckedCreateWithoutCategoryInput> | ResourceCategoryCreateWithoutCategoryInput[] | ResourceCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ResourceCategoryCreateOrConnectWithoutCategoryInput | ResourceCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ResourceCategoryUpsertWithWhereUniqueWithoutCategoryInput | ResourceCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ResourceCategoryCreateManyCategoryInputEnvelope
    set?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    disconnect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    delete?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    connect?: ResourceCategoryWhereUniqueInput | ResourceCategoryWhereUniqueInput[]
    update?: ResourceCategoryUpdateWithWhereUniqueWithoutCategoryInput | ResourceCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ResourceCategoryUpdateManyWithWhereWithoutCategoryInput | ResourceCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ResourceCategoryScalarWhereInput | ResourceCategoryScalarWhereInput[]
  }

  export type ResourceCreateNestedOneWithoutResourceCategoryInput = {
    create?: XOR<ResourceCreateWithoutResourceCategoryInput, ResourceUncheckedCreateWithoutResourceCategoryInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutResourceCategoryInput
    connect?: ResourceWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutResourceCategoryInput = {
    create?: XOR<CategoryCreateWithoutResourceCategoryInput, CategoryUncheckedCreateWithoutResourceCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutResourceCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type ResourceUpdateOneRequiredWithoutResourceCategoryNestedInput = {
    create?: XOR<ResourceCreateWithoutResourceCategoryInput, ResourceUncheckedCreateWithoutResourceCategoryInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutResourceCategoryInput
    upsert?: ResourceUpsertWithoutResourceCategoryInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutResourceCategoryInput, ResourceUpdateWithoutResourceCategoryInput>, ResourceUncheckedUpdateWithoutResourceCategoryInput>
  }

  export type CategoryUpdateOneRequiredWithoutResourceCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutResourceCategoryInput, CategoryUncheckedCreateWithoutResourceCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutResourceCategoryInput
    upsert?: CategoryUpsertWithoutResourceCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutResourceCategoryInput, CategoryUpdateWithoutResourceCategoryInput>, CategoryUncheckedUpdateWithoutResourceCategoryInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ResourceInstanceCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ResourceInstanceCreateWithoutTransactionsInput, ResourceInstanceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutTransactionsInput
    connect?: ResourceInstanceWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type ResourceInstanceUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ResourceInstanceCreateWithoutTransactionsInput, ResourceInstanceUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ResourceInstanceCreateOrConnectWithoutTransactionsInput
    upsert?: ResourceInstanceUpsertWithoutTransactionsInput
    disconnect?: ResourceInstanceWhereInput | boolean
    delete?: ResourceInstanceWhereInput | boolean
    connect?: ResourceInstanceWhereUniqueInput
    update?: XOR<XOR<ResourceInstanceUpdateToOneWithWhereWithoutTransactionsInput, ResourceInstanceUpdateWithoutTransactionsInput>, ResourceInstanceUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumFilter<$PrismaModel> | $Enums.RoleEnum
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleEnum | EnumRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleEnum[] | ListEnumRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.RoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumRoleEnumFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumResourceLangFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceLang | EnumResourceLangFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceLangFilter<$PrismaModel> | $Enums.ResourceLang
  }

  export type NestedEnumResourceInstanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceInstanceStatus | EnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceInstanceStatusFilter<$PrismaModel> | $Enums.ResourceInstanceStatus
  }

  export type NestedEnumResourceLangWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceLang | EnumResourceLangFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceLang[] | ListEnumResourceLangFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceLangWithAggregatesFilter<$PrismaModel> | $Enums.ResourceLang
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceLangFilter<$PrismaModel>
    _max?: NestedEnumResourceLangFilter<$PrismaModel>
  }

  export type NestedEnumResourceInstanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceInstanceStatus | EnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceInstanceStatus[] | ListEnumResourceInstanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceInstanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResourceInstanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceInstanceStatusFilter<$PrismaModel>
    _max?: NestedEnumResourceInstanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumResourceTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceTypes | EnumResourceTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypesFilter<$PrismaModel> | $Enums.ResourceTypes
  }

  export type NestedEnumResourceTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceTypes | EnumResourceTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceTypes[] | ListEnumResourceTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypesWithAggregatesFilter<$PrismaModel> | $Enums.ResourceTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypesFilter<$PrismaModel>
    _max?: NestedEnumResourceTypesFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    role_id: number
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResourceLoanCreateWithoutUserInput = {
    id?: string
    until: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    instance: ResourceInstanceCreateNestedOneWithoutLoanInput
  }

  export type ResourceLoanUncheckedCreateWithoutUserInput = {
    id?: string
    until: Date | string
    instanceId: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceLoanCreateOrConnectWithoutUserInput = {
    where: ResourceLoanWhereUniqueInput
    create: XOR<ResourceLoanCreateWithoutUserInput, ResourceLoanUncheckedCreateWithoutUserInput>
  }

  export type ResourceLoanCreateManyUserInputEnvelope = {
    data: ResourceLoanCreateManyUserInput | ResourceLoanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResourceTestimonialCreateWithoutUserInput = {
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
    resource: ResourceCreateNestedOneWithoutTestimonialsInput
  }

  export type ResourceTestimonialUncheckedCreateWithoutUserInput = {
    resourceId: string
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
  }

  export type ResourceTestimonialCreateOrConnectWithoutUserInput = {
    where: ResourceTestimonialWhereUniqueInput
    create: XOR<ResourceTestimonialCreateWithoutUserInput, ResourceTestimonialUncheckedCreateWithoutUserInput>
  }

  export type ResourceTestimonialCreateManyUserInputEnvelope = {
    data: ResourceTestimonialCreateManyUserInput | ResourceTestimonialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    type?: $Enums.TransactionType
    created_at?: Date | string
    instance?: ResourceInstanceCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    instanceId?: string | null
    type?: $Enums.TransactionType
    created_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    role_name?: EnumRoleEnumFilter<"Role"> | $Enums.RoleEnum
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    user_id?: StringFilter<"UserRole"> | string
    role_id?: IntFilter<"UserRole"> | number
  }

  export type ResourceLoanUpsertWithWhereUniqueWithoutUserInput = {
    where: ResourceLoanWhereUniqueInput
    update: XOR<ResourceLoanUpdateWithoutUserInput, ResourceLoanUncheckedUpdateWithoutUserInput>
    create: XOR<ResourceLoanCreateWithoutUserInput, ResourceLoanUncheckedCreateWithoutUserInput>
  }

  export type ResourceLoanUpdateWithWhereUniqueWithoutUserInput = {
    where: ResourceLoanWhereUniqueInput
    data: XOR<ResourceLoanUpdateWithoutUserInput, ResourceLoanUncheckedUpdateWithoutUserInput>
  }

  export type ResourceLoanUpdateManyWithWhereWithoutUserInput = {
    where: ResourceLoanScalarWhereInput
    data: XOR<ResourceLoanUpdateManyMutationInput, ResourceLoanUncheckedUpdateManyWithoutUserInput>
  }

  export type ResourceLoanScalarWhereInput = {
    AND?: ResourceLoanScalarWhereInput | ResourceLoanScalarWhereInput[]
    OR?: ResourceLoanScalarWhereInput[]
    NOT?: ResourceLoanScalarWhereInput | ResourceLoanScalarWhereInput[]
    id?: StringFilter<"ResourceLoan"> | string
    userId?: StringFilter<"ResourceLoan"> | string
    until?: DateTimeFilter<"ResourceLoan"> | Date | string
    instanceId?: StringFilter<"ResourceLoan"> | string
    created_at?: DateTimeFilter<"ResourceLoan"> | Date | string
    updated_at?: DateTimeFilter<"ResourceLoan"> | Date | string
  }

  export type ResourceTestimonialUpsertWithWhereUniqueWithoutUserInput = {
    where: ResourceTestimonialWhereUniqueInput
    update: XOR<ResourceTestimonialUpdateWithoutUserInput, ResourceTestimonialUncheckedUpdateWithoutUserInput>
    create: XOR<ResourceTestimonialCreateWithoutUserInput, ResourceTestimonialUncheckedCreateWithoutUserInput>
  }

  export type ResourceTestimonialUpdateWithWhereUniqueWithoutUserInput = {
    where: ResourceTestimonialWhereUniqueInput
    data: XOR<ResourceTestimonialUpdateWithoutUserInput, ResourceTestimonialUncheckedUpdateWithoutUserInput>
  }

  export type ResourceTestimonialUpdateManyWithWhereWithoutUserInput = {
    where: ResourceTestimonialScalarWhereInput
    data: XOR<ResourceTestimonialUpdateManyMutationInput, ResourceTestimonialUncheckedUpdateManyWithoutUserInput>
  }

  export type ResourceTestimonialScalarWhereInput = {
    AND?: ResourceTestimonialScalarWhereInput | ResourceTestimonialScalarWhereInput[]
    OR?: ResourceTestimonialScalarWhereInput[]
    NOT?: ResourceTestimonialScalarWhereInput | ResourceTestimonialScalarWhereInput[]
    userId?: StringFilter<"ResourceTestimonial"> | string
    resourceId?: StringFilter<"ResourceTestimonial"> | string
    rating?: IntFilter<"ResourceTestimonial"> | number
    title?: StringFilter<"ResourceTestimonial"> | string
    testimonial?: StringNullableFilter<"ResourceTestimonial"> | string | null
    created_at?: DateTimeFilter<"ResourceTestimonial"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    instanceId?: StringNullableFilter<"Transaction"> | string | null
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    created_at?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    loans?: ResourceLoanCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    loans?: ResourceLoanUncheckedCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    user_id: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    image_url?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutUserRoleInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleCreateNestedManyWithoutUsersInput
    loans?: ResourceLoanCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    loans?: ResourceLoanUncheckedCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type RoleCreateWithoutUserRoleInput = {
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUserRoleInput = {
    id?: number
    role_name?: $Enums.RoleEnum
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUserRoleInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpsertWithoutUserRoleInput = {
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateWithoutUserRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    loans?: ResourceLoanUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    loans?: ResourceLoanUncheckedUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUserRoleInput = {
    update: XOR<RoleUpdateWithoutUserRoleInput, RoleUncheckedUpdateWithoutUserRoleInput>
    create: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRoleInput, RoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleUpdateWithoutUserRoleInput = {
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type ResourceTypeCreateWithoutResourceInput = {
    resource_type_name?: $Enums.ResourceTypes
    max_loan_days?: number
    max_units_per_loan?: number
  }

  export type ResourceTypeUncheckedCreateWithoutResourceInput = {
    id?: number
    resource_type_name?: $Enums.ResourceTypes
    max_loan_days?: number
    max_units_per_loan?: number
  }

  export type ResourceTypeCreateOrConnectWithoutResourceInput = {
    where: ResourceTypeWhereUniqueInput
    create: XOR<ResourceTypeCreateWithoutResourceInput, ResourceTypeUncheckedCreateWithoutResourceInput>
  }

  export type ResourceInstanceCreateWithoutResourceInput = {
    id?: string
    instance_name?: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    loan?: ResourceLoanCreateNestedOneWithoutInstanceInput
    transactions?: TransactionCreateNestedManyWithoutInstanceInput
  }

  export type ResourceInstanceUncheckedCreateWithoutResourceInput = {
    id?: string
    instance_name?: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    loan?: ResourceLoanUncheckedCreateNestedOneWithoutInstanceInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type ResourceInstanceCreateOrConnectWithoutResourceInput = {
    where: ResourceInstanceWhereUniqueInput
    create: XOR<ResourceInstanceCreateWithoutResourceInput, ResourceInstanceUncheckedCreateWithoutResourceInput>
  }

  export type ResourceInstanceCreateManyResourceInputEnvelope = {
    data: ResourceInstanceCreateManyResourceInput | ResourceInstanceCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type ResourceTestimonialCreateWithoutResourceInput = {
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTestimonialsInput
  }

  export type ResourceTestimonialUncheckedCreateWithoutResourceInput = {
    userId: string
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
  }

  export type ResourceTestimonialCreateOrConnectWithoutResourceInput = {
    where: ResourceTestimonialWhereUniqueInput
    create: XOR<ResourceTestimonialCreateWithoutResourceInput, ResourceTestimonialUncheckedCreateWithoutResourceInput>
  }

  export type ResourceTestimonialCreateManyResourceInputEnvelope = {
    data: ResourceTestimonialCreateManyResourceInput | ResourceTestimonialCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutResourcesInput = {
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutResourcesInput = {
    id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutResourcesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutResourcesInput, CategoryUncheckedCreateWithoutResourcesInput>
  }

  export type ResourceCategoryCreateWithoutResourceInput = {
    category: CategoryCreateNestedOneWithoutResourceCategoryInput
  }

  export type ResourceCategoryUncheckedCreateWithoutResourceInput = {
    category_id: number
  }

  export type ResourceCategoryCreateOrConnectWithoutResourceInput = {
    where: ResourceCategoryWhereUniqueInput
    create: XOR<ResourceCategoryCreateWithoutResourceInput, ResourceCategoryUncheckedCreateWithoutResourceInput>
  }

  export type ResourceCategoryCreateManyResourceInputEnvelope = {
    data: ResourceCategoryCreateManyResourceInput | ResourceCategoryCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type PublisherCreateWithoutResourcesInput = {
    publisher_name: string
    image_url: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PublisherUncheckedCreateWithoutResourcesInput = {
    id?: number
    publisher_name: string
    image_url: string
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PublisherCreateOrConnectWithoutResourcesInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutResourcesInput, PublisherUncheckedCreateWithoutResourcesInput>
  }

  export type ResourceDetailCreateWithoutResourceInput = {
    pub_year: number
    isbn?: string | null
    description: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceDetailUncheckedCreateWithoutResourceInput = {
    id?: number
    pub_year: number
    isbn?: string | null
    description: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceDetailCreateOrConnectWithoutResourceInput = {
    where: ResourceDetailWhereUniqueInput
    create: XOR<ResourceDetailCreateWithoutResourceInput, ResourceDetailUncheckedCreateWithoutResourceInput>
  }

  export type ResourceTypeUpsertWithoutResourceInput = {
    update: XOR<ResourceTypeUpdateWithoutResourceInput, ResourceTypeUncheckedUpdateWithoutResourceInput>
    create: XOR<ResourceTypeCreateWithoutResourceInput, ResourceTypeUncheckedCreateWithoutResourceInput>
    where?: ResourceTypeWhereInput
  }

  export type ResourceTypeUpdateToOneWithWhereWithoutResourceInput = {
    where?: ResourceTypeWhereInput
    data: XOR<ResourceTypeUpdateWithoutResourceInput, ResourceTypeUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceTypeUpdateWithoutResourceInput = {
    resource_type_name?: EnumResourceTypesFieldUpdateOperationsInput | $Enums.ResourceTypes
    max_loan_days?: IntFieldUpdateOperationsInput | number
    max_units_per_loan?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceTypeUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    resource_type_name?: EnumResourceTypesFieldUpdateOperationsInput | $Enums.ResourceTypes
    max_loan_days?: IntFieldUpdateOperationsInput | number
    max_units_per_loan?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceInstanceUpsertWithWhereUniqueWithoutResourceInput = {
    where: ResourceInstanceWhereUniqueInput
    update: XOR<ResourceInstanceUpdateWithoutResourceInput, ResourceInstanceUncheckedUpdateWithoutResourceInput>
    create: XOR<ResourceInstanceCreateWithoutResourceInput, ResourceInstanceUncheckedCreateWithoutResourceInput>
  }

  export type ResourceInstanceUpdateWithWhereUniqueWithoutResourceInput = {
    where: ResourceInstanceWhereUniqueInput
    data: XOR<ResourceInstanceUpdateWithoutResourceInput, ResourceInstanceUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceInstanceUpdateManyWithWhereWithoutResourceInput = {
    where: ResourceInstanceScalarWhereInput
    data: XOR<ResourceInstanceUpdateManyMutationInput, ResourceInstanceUncheckedUpdateManyWithoutResourceInput>
  }

  export type ResourceInstanceScalarWhereInput = {
    AND?: ResourceInstanceScalarWhereInput | ResourceInstanceScalarWhereInput[]
    OR?: ResourceInstanceScalarWhereInput[]
    NOT?: ResourceInstanceScalarWhereInput | ResourceInstanceScalarWhereInput[]
    id?: StringFilter<"ResourceInstance"> | string
    instance_name?: StringFilter<"ResourceInstance"> | string
    resource_id?: StringFilter<"ResourceInstance"> | string
    lang?: EnumResourceLangFilter<"ResourceInstance"> | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFilter<"ResourceInstance"> | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFilter<"ResourceInstance"> | Date | string
    updated_at?: DateTimeFilter<"ResourceInstance"> | Date | string
  }

  export type ResourceTestimonialUpsertWithWhereUniqueWithoutResourceInput = {
    where: ResourceTestimonialWhereUniqueInput
    update: XOR<ResourceTestimonialUpdateWithoutResourceInput, ResourceTestimonialUncheckedUpdateWithoutResourceInput>
    create: XOR<ResourceTestimonialCreateWithoutResourceInput, ResourceTestimonialUncheckedCreateWithoutResourceInput>
  }

  export type ResourceTestimonialUpdateWithWhereUniqueWithoutResourceInput = {
    where: ResourceTestimonialWhereUniqueInput
    data: XOR<ResourceTestimonialUpdateWithoutResourceInput, ResourceTestimonialUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceTestimonialUpdateManyWithWhereWithoutResourceInput = {
    where: ResourceTestimonialScalarWhereInput
    data: XOR<ResourceTestimonialUpdateManyMutationInput, ResourceTestimonialUncheckedUpdateManyWithoutResourceInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutResourcesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutResourcesInput, CategoryUncheckedUpdateWithoutResourcesInput>
    create: XOR<CategoryCreateWithoutResourcesInput, CategoryUncheckedCreateWithoutResourcesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutResourcesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutResourcesInput, CategoryUncheckedUpdateWithoutResourcesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutResourcesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutResourcesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    category_name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
  }

  export type ResourceCategoryUpsertWithWhereUniqueWithoutResourceInput = {
    where: ResourceCategoryWhereUniqueInput
    update: XOR<ResourceCategoryUpdateWithoutResourceInput, ResourceCategoryUncheckedUpdateWithoutResourceInput>
    create: XOR<ResourceCategoryCreateWithoutResourceInput, ResourceCategoryUncheckedCreateWithoutResourceInput>
  }

  export type ResourceCategoryUpdateWithWhereUniqueWithoutResourceInput = {
    where: ResourceCategoryWhereUniqueInput
    data: XOR<ResourceCategoryUpdateWithoutResourceInput, ResourceCategoryUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceCategoryUpdateManyWithWhereWithoutResourceInput = {
    where: ResourceCategoryScalarWhereInput
    data: XOR<ResourceCategoryUpdateManyMutationInput, ResourceCategoryUncheckedUpdateManyWithoutResourceInput>
  }

  export type ResourceCategoryScalarWhereInput = {
    AND?: ResourceCategoryScalarWhereInput | ResourceCategoryScalarWhereInput[]
    OR?: ResourceCategoryScalarWhereInput[]
    NOT?: ResourceCategoryScalarWhereInput | ResourceCategoryScalarWhereInput[]
    resource_id?: StringFilter<"ResourceCategory"> | string
    category_id?: IntFilter<"ResourceCategory"> | number
  }

  export type PublisherUpsertWithoutResourcesInput = {
    update: XOR<PublisherUpdateWithoutResourcesInput, PublisherUncheckedUpdateWithoutResourcesInput>
    create: XOR<PublisherCreateWithoutResourcesInput, PublisherUncheckedCreateWithoutResourcesInput>
    where?: PublisherWhereInput
  }

  export type PublisherUpdateToOneWithWhereWithoutResourcesInput = {
    where?: PublisherWhereInput
    data: XOR<PublisherUpdateWithoutResourcesInput, PublisherUncheckedUpdateWithoutResourcesInput>
  }

  export type PublisherUpdateWithoutResourcesInput = {
    publisher_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    publisher_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceDetailUpsertWithoutResourceInput = {
    update: XOR<ResourceDetailUpdateWithoutResourceInput, ResourceDetailUncheckedUpdateWithoutResourceInput>
    create: XOR<ResourceDetailCreateWithoutResourceInput, ResourceDetailUncheckedCreateWithoutResourceInput>
    where?: ResourceDetailWhereInput
  }

  export type ResourceDetailUpdateToOneWithWhereWithoutResourceInput = {
    where?: ResourceDetailWhereInput
    data: XOR<ResourceDetailUpdateWithoutResourceInput, ResourceDetailUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceDetailUpdateWithoutResourceInput = {
    pub_year?: IntFieldUpdateOperationsInput | number
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceDetailUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    pub_year?: IntFieldUpdateOperationsInput | number
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    description?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateWithoutDetailInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateWithoutDetailInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutDetailInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutDetailInput, ResourceUncheckedCreateWithoutDetailInput>
  }

  export type ResourceUpsertWithoutDetailInput = {
    update: XOR<ResourceUpdateWithoutDetailInput, ResourceUncheckedUpdateWithoutDetailInput>
    create: XOR<ResourceCreateWithoutDetailInput, ResourceUncheckedCreateWithoutDetailInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutDetailInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutDetailInput, ResourceUncheckedUpdateWithoutDetailInput>
  }

  export type ResourceUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateWithoutInstancesInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutInstancesInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    detail_id: number
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutInstancesInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutInstancesInput, ResourceUncheckedCreateWithoutInstancesInput>
  }

  export type ResourceLoanCreateWithoutInstanceInput = {
    id?: string
    until: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutLoansInput
  }

  export type ResourceLoanUncheckedCreateWithoutInstanceInput = {
    id?: string
    userId: string
    until: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceLoanCreateOrConnectWithoutInstanceInput = {
    where: ResourceLoanWhereUniqueInput
    create: XOR<ResourceLoanCreateWithoutInstanceInput, ResourceLoanUncheckedCreateWithoutInstanceInput>
  }

  export type TransactionCreateWithoutInstanceInput = {
    id?: string
    type?: $Enums.TransactionType
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutInstanceInput = {
    id?: string
    userId: string
    type?: $Enums.TransactionType
    created_at?: Date | string
  }

  export type TransactionCreateOrConnectWithoutInstanceInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutInstanceInput, TransactionUncheckedCreateWithoutInstanceInput>
  }

  export type TransactionCreateManyInstanceInputEnvelope = {
    data: TransactionCreateManyInstanceInput | TransactionCreateManyInstanceInput[]
    skipDuplicates?: boolean
  }

  export type ResourceUpsertWithoutInstancesInput = {
    update: XOR<ResourceUpdateWithoutInstancesInput, ResourceUncheckedUpdateWithoutInstancesInput>
    create: XOR<ResourceCreateWithoutInstancesInput, ResourceUncheckedCreateWithoutInstancesInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutInstancesInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutInstancesInput, ResourceUncheckedUpdateWithoutInstancesInput>
  }

  export type ResourceUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceLoanUpsertWithoutInstanceInput = {
    update: XOR<ResourceLoanUpdateWithoutInstanceInput, ResourceLoanUncheckedUpdateWithoutInstanceInput>
    create: XOR<ResourceLoanCreateWithoutInstanceInput, ResourceLoanUncheckedCreateWithoutInstanceInput>
    where?: ResourceLoanWhereInput
  }

  export type ResourceLoanUpdateToOneWithWhereWithoutInstanceInput = {
    where?: ResourceLoanWhereInput
    data: XOR<ResourceLoanUpdateWithoutInstanceInput, ResourceLoanUncheckedUpdateWithoutInstanceInput>
  }

  export type ResourceLoanUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoansNestedInput
  }

  export type ResourceLoanUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutInstanceInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutInstanceInput, TransactionUncheckedUpdateWithoutInstanceInput>
    create: XOR<TransactionCreateWithoutInstanceInput, TransactionUncheckedCreateWithoutInstanceInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutInstanceInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutInstanceInput, TransactionUncheckedUpdateWithoutInstanceInput>
  }

  export type TransactionUpdateManyWithWhereWithoutInstanceInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutInstanceInput>
  }

  export type UserCreateWithoutLoansInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoansInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
  }

  export type ResourceInstanceCreateWithoutLoanInput = {
    id?: string
    instance_name?: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceCreateNestedOneWithoutInstancesInput
    transactions?: TransactionCreateNestedManyWithoutInstanceInput
  }

  export type ResourceInstanceUncheckedCreateWithoutLoanInput = {
    id?: string
    instance_name?: string
    resource_id: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type ResourceInstanceCreateOrConnectWithoutLoanInput = {
    where: ResourceInstanceWhereUniqueInput
    create: XOR<ResourceInstanceCreateWithoutLoanInput, ResourceInstanceUncheckedCreateWithoutLoanInput>
  }

  export type UserUpsertWithoutLoansInput = {
    update: XOR<UserUpdateWithoutLoansInput, UserUncheckedUpdateWithoutLoansInput>
    create: XOR<UserCreateWithoutLoansInput, UserUncheckedCreateWithoutLoansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoansInput, UserUncheckedUpdateWithoutLoansInput>
  }

  export type UserUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoansInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResourceInstanceUpsertWithoutLoanInput = {
    update: XOR<ResourceInstanceUpdateWithoutLoanInput, ResourceInstanceUncheckedUpdateWithoutLoanInput>
    create: XOR<ResourceInstanceCreateWithoutLoanInput, ResourceInstanceUncheckedCreateWithoutLoanInput>
    where?: ResourceInstanceWhereInput
  }

  export type ResourceInstanceUpdateToOneWithWhereWithoutLoanInput = {
    where?: ResourceInstanceWhereInput
    data: XOR<ResourceInstanceUpdateWithoutLoanInput, ResourceInstanceUncheckedUpdateWithoutLoanInput>
  }

  export type ResourceInstanceUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutInstancesNestedInput
    transactions?: TransactionUpdateManyWithoutInstanceNestedInput
  }

  export type ResourceInstanceUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    resource_id?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type UserCreateWithoutTestimonialsInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    loans?: ResourceLoanCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestimonialsInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    loans?: ResourceLoanUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestimonialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
  }

  export type ResourceCreateWithoutTestimonialsInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutTestimonialsInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    detail_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutTestimonialsInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutTestimonialsInput, ResourceUncheckedCreateWithoutTestimonialsInput>
  }

  export type UserUpsertWithoutTestimonialsInput = {
    update: XOR<UserUpdateWithoutTestimonialsInput, UserUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestimonialsInput, UserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type UserUpdateWithoutTestimonialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestimonialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResourceUpsertWithoutTestimonialsInput = {
    update: XOR<ResourceUpdateWithoutTestimonialsInput, ResourceUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<ResourceCreateWithoutTestimonialsInput, ResourceUncheckedCreateWithoutTestimonialsInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutTestimonialsInput, ResourceUncheckedUpdateWithoutTestimonialsInput>
  }

  export type ResourceUpdateWithoutTestimonialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutTestimonialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateWithoutTypeInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutTypeInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    publisher_id: number
    detail_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutTypeInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutTypeInput, ResourceUncheckedCreateWithoutTypeInput>
  }

  export type ResourceCreateManyTypeInputEnvelope = {
    data: ResourceCreateManyTypeInput | ResourceCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ResourceUpsertWithWhereUniqueWithoutTypeInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutTypeInput, ResourceUncheckedUpdateWithoutTypeInput>
    create: XOR<ResourceCreateWithoutTypeInput, ResourceUncheckedCreateWithoutTypeInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutTypeInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutTypeInput, ResourceUncheckedUpdateWithoutTypeInput>
  }

  export type ResourceUpdateManyWithWhereWithoutTypeInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutTypeInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    id?: StringFilter<"Resource"> | string
    resource_name?: StringFilter<"Resource"> | string
    slug_name?: StringNullableFilter<"Resource"> | string | null
    image_url?: StringNullableFilter<"Resource"> | string | null
    author?: StringFilter<"Resource"> | string
    short_description?: StringNullableFilter<"Resource"> | string | null
    edition?: StringFilter<"Resource"> | string
    created_at?: DateTimeFilter<"Resource"> | Date | string
    updated_at?: DateTimeFilter<"Resource"> | Date | string
    type_id?: IntFilter<"Resource"> | number
    publisher_id?: IntFilter<"Resource"> | number
    detail_id?: IntFilter<"Resource"> | number
  }

  export type ResourceCreateWithoutPublisherInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutPublisherInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    detail_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutPublisherInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutPublisherInput, ResourceUncheckedCreateWithoutPublisherInput>
  }

  export type ResourceCreateManyPublisherInputEnvelope = {
    data: ResourceCreateManyPublisherInput | ResourceCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type ResourceUpsertWithWhereUniqueWithoutPublisherInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutPublisherInput, ResourceUncheckedUpdateWithoutPublisherInput>
    create: XOR<ResourceCreateWithoutPublisherInput, ResourceUncheckedCreateWithoutPublisherInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutPublisherInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutPublisherInput, ResourceUncheckedUpdateWithoutPublisherInput>
  }

  export type ResourceUpdateManyWithWhereWithoutPublisherInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutPublisherInput>
  }

  export type ResourceCreateWithoutCategoriesInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    ResourceCategory?: ResourceCategoryCreateNestedManyWithoutResourceInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutCategoriesInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    detail_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    ResourceCategory?: ResourceCategoryUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutCategoriesInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutCategoriesInput, ResourceUncheckedCreateWithoutCategoriesInput>
  }

  export type ResourceCategoryCreateWithoutCategoryInput = {
    resource: ResourceCreateNestedOneWithoutResourceCategoryInput
  }

  export type ResourceCategoryUncheckedCreateWithoutCategoryInput = {
    resource_id: string
  }

  export type ResourceCategoryCreateOrConnectWithoutCategoryInput = {
    where: ResourceCategoryWhereUniqueInput
    create: XOR<ResourceCategoryCreateWithoutCategoryInput, ResourceCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ResourceCategoryCreateManyCategoryInputEnvelope = {
    data: ResourceCategoryCreateManyCategoryInput | ResourceCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ResourceUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutCategoriesInput, ResourceUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ResourceCreateWithoutCategoriesInput, ResourceUncheckedCreateWithoutCategoriesInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutCategoriesInput, ResourceUncheckedUpdateWithoutCategoriesInput>
  }

  export type ResourceUpdateManyWithWhereWithoutCategoriesInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ResourceCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ResourceCategoryWhereUniqueInput
    update: XOR<ResourceCategoryUpdateWithoutCategoryInput, ResourceCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ResourceCategoryCreateWithoutCategoryInput, ResourceCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ResourceCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ResourceCategoryWhereUniqueInput
    data: XOR<ResourceCategoryUpdateWithoutCategoryInput, ResourceCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ResourceCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ResourceCategoryScalarWhereInput
    data: XOR<ResourceCategoryUpdateManyMutationInput, ResourceCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ResourceCreateWithoutResourceCategoryInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type: ResourceTypeCreateNestedOneWithoutResourceInput
    instances?: ResourceInstanceCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutResourceInput
    categories?: CategoryCreateNestedManyWithoutResourcesInput
    publisher: PublisherCreateNestedOneWithoutResourcesInput
    detail: ResourceDetailCreateNestedOneWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutResourceCategoryInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    publisher_id: number
    detail_id: number
    instances?: ResourceInstanceUncheckedCreateNestedManyWithoutResourceInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutResourceInput
    categories?: CategoryUncheckedCreateNestedManyWithoutResourcesInput
  }

  export type ResourceCreateOrConnectWithoutResourceCategoryInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutResourceCategoryInput, ResourceUncheckedCreateWithoutResourceCategoryInput>
  }

  export type CategoryCreateWithoutResourceCategoryInput = {
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    resources?: ResourceCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutResourceCategoryInput = {
    id?: number
    category_name: string
    created_at?: Date | string
    updated_at?: Date | string
    resources?: ResourceUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutResourceCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutResourceCategoryInput, CategoryUncheckedCreateWithoutResourceCategoryInput>
  }

  export type ResourceUpsertWithoutResourceCategoryInput = {
    update: XOR<ResourceUpdateWithoutResourceCategoryInput, ResourceUncheckedUpdateWithoutResourceCategoryInput>
    create: XOR<ResourceCreateWithoutResourceCategoryInput, ResourceUncheckedCreateWithoutResourceCategoryInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutResourceCategoryInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutResourceCategoryInput, ResourceUncheckedUpdateWithoutResourceCategoryInput>
  }

  export type ResourceUpdateWithoutResourceCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutResourceCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
  }

  export type CategoryUpsertWithoutResourceCategoryInput = {
    update: XOR<CategoryUpdateWithoutResourceCategoryInput, CategoryUncheckedUpdateWithoutResourceCategoryInput>
    create: XOR<CategoryCreateWithoutResourceCategoryInput, CategoryUncheckedCreateWithoutResourceCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutResourceCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutResourceCategoryInput, CategoryUncheckedUpdateWithoutResourceCategoryInput>
  }

  export type CategoryUpdateWithoutResourceCategoryInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutResourceCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: ResourceUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    loans?: ResourceLoanCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    first_name: string
    image_url: string
    last_name: string
    address?: string | null
    active?: boolean
    phone?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    loans?: ResourceLoanUncheckedCreateNestedManyWithoutUserInput
    testimonials?: ResourceTestimonialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type ResourceInstanceCreateWithoutTransactionsInput = {
    id?: string
    instance_name?: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    resource: ResourceCreateNestedOneWithoutInstancesInput
    loan?: ResourceLoanCreateNestedOneWithoutInstanceInput
  }

  export type ResourceInstanceUncheckedCreateWithoutTransactionsInput = {
    id?: string
    instance_name?: string
    resource_id: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    loan?: ResourceLoanUncheckedCreateNestedOneWithoutInstanceInput
  }

  export type ResourceInstanceCreateOrConnectWithoutTransactionsInput = {
    where: ResourceInstanceWhereUniqueInput
    create: XOR<ResourceInstanceCreateWithoutTransactionsInput, ResourceInstanceUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUncheckedUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResourceInstanceUpsertWithoutTransactionsInput = {
    update: XOR<ResourceInstanceUpdateWithoutTransactionsInput, ResourceInstanceUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ResourceInstanceCreateWithoutTransactionsInput, ResourceInstanceUncheckedCreateWithoutTransactionsInput>
    where?: ResourceInstanceWhereInput
  }

  export type ResourceInstanceUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ResourceInstanceWhereInput
    data: XOR<ResourceInstanceUpdateWithoutTransactionsInput, ResourceInstanceUncheckedUpdateWithoutTransactionsInput>
  }

  export type ResourceInstanceUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutInstancesNestedInput
    loan?: ResourceLoanUpdateOneWithoutInstanceNestedInput
  }

  export type ResourceInstanceUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    resource_id?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: ResourceLoanUncheckedUpdateOneWithoutInstanceNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    role_id: number
  }

  export type ResourceLoanCreateManyUserInput = {
    id?: string
    until: Date | string
    instanceId: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceTestimonialCreateManyUserInput = {
    resourceId: string
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    instanceId?: string | null
    type?: $Enums.TransactionType
    created_at?: Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleEnumFieldUpdateOperationsInput | $Enums.RoleEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceLoanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instance?: ResourceInstanceUpdateOneRequiredWithoutLoanNestedInput
  }

  export type ResourceLoanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceLoanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    until?: DateTimeFieldUpdateOperationsInput | Date | string
    instanceId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type ResourceTestimonialUncheckedUpdateWithoutUserInput = {
    resourceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialUncheckedUpdateManyWithoutUserInput = {
    resourceId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instance?: ResourceInstanceUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    user_id: string
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    loans?: ResourceLoanUncheckedUpdateManyWithoutUserNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceInstanceCreateManyResourceInput = {
    id?: string
    instance_name?: string
    lang?: $Enums.ResourceLang
    status?: $Enums.ResourceInstanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceTestimonialCreateManyResourceInput = {
    userId: string
    rating?: number
    title: string
    testimonial?: string | null
    created_at?: Date | string
  }

  export type ResourceCategoryCreateManyResourceInput = {
    category_id: number
  }

  export type ResourceInstanceUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: ResourceLoanUpdateOneWithoutInstanceNestedInput
    transactions?: TransactionUpdateManyWithoutInstanceNestedInput
  }

  export type ResourceInstanceUncheckedUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    loan?: ResourceLoanUncheckedUpdateOneWithoutInstanceNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type ResourceInstanceUncheckedUpdateManyWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    instance_name?: StringFieldUpdateOperationsInput | string
    lang?: EnumResourceLangFieldUpdateOperationsInput | $Enums.ResourceLang
    status?: EnumResourceInstanceStatusFieldUpdateOperationsInput | $Enums.ResourceInstanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialUpdateWithoutResourceInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type ResourceTestimonialUncheckedUpdateWithoutResourceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceTestimonialUncheckedUpdateManyWithoutResourceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    testimonial?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutResourcesInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ResourceCategory?: ResourceCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCategoryUpdateWithoutResourceInput = {
    category?: CategoryUpdateOneRequiredWithoutResourceCategoryNestedInput
  }

  export type ResourceCategoryUncheckedUpdateWithoutResourceInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCategoryUncheckedUpdateManyWithoutResourceInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInstanceInput = {
    id?: string
    userId: string
    type?: $Enums.TransactionType
    created_at?: Date | string
  }

  export type TransactionUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateManyTypeInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    publisher_id: number
    detail_id: number
  }

  export type ResourceUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCreateManyPublisherInput = {
    id?: string
    resource_name: string
    slug_name?: string | null
    image_url?: string | null
    author: string
    short_description?: string | null
    edition: string
    created_at?: Date | string
    updated_at?: Date | string
    type_id: number
    detail_id: number
  }

  export type ResourceUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    categories?: CategoryUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutResourcesNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCategoryCreateManyCategoryInput = {
    resource_id: string
  }

  export type ResourceUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: ResourceTypeUpdateOneRequiredWithoutResourceNestedInput
    instances?: ResourceInstanceUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUpdateManyWithoutResourceNestedInput
    ResourceCategory?: ResourceCategoryUpdateManyWithoutResourceNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutResourcesNestedInput
    detail?: ResourceDetailUpdateOneRequiredWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
    instances?: ResourceInstanceUncheckedUpdateManyWithoutResourceNestedInput
    testimonials?: ResourceTestimonialUncheckedUpdateManyWithoutResourceNestedInput
    ResourceCategory?: ResourceCategoryUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_name?: StringFieldUpdateOperationsInput | string
    slug_name?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
    publisher_id?: IntFieldUpdateOperationsInput | number
    detail_id?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCategoryUpdateWithoutCategoryInput = {
    resource?: ResourceUpdateOneRequiredWithoutResourceCategoryNestedInput
  }

  export type ResourceCategoryUncheckedUpdateWithoutCategoryInput = {
    resource_id?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceCategoryUncheckedUpdateManyWithoutCategoryInput = {
    resource_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceCountOutputTypeDefaultArgs instead
     */
    export type ResourceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceInstanceCountOutputTypeDefaultArgs instead
     */
    export type ResourceInstanceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceInstanceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceTypeCountOutputTypeDefaultArgs instead
     */
    export type ResourceTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublisherCountOutputTypeDefaultArgs instead
     */
    export type PublisherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublisherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceDefaultArgs instead
     */
    export type ResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceDetailDefaultArgs instead
     */
    export type ResourceDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceInstanceDefaultArgs instead
     */
    export type ResourceInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceInstanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceLoanDefaultArgs instead
     */
    export type ResourceLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceLoanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceTestimonialDefaultArgs instead
     */
    export type ResourceTestimonialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceTestimonialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceTypeDefaultArgs instead
     */
    export type ResourceTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublisherDefaultArgs instead
     */
    export type PublisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublisherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceCategoryDefaultArgs instead
     */
    export type ResourceCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>

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