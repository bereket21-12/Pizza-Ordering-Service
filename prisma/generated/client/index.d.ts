
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
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Pizza
 * 
 */
export type Pizza = $Result.DefaultSelection<Prisma.$PizzaPayload>
/**
 * Model PizzaTopping
 * 
 */
export type PizzaTopping = $Result.DefaultSelection<Prisma.$PizzaToppingPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Topping
 * 
 */
export type Topping = $Result.DefaultSelection<Prisma.$ToppingPayload>
/**
 * Model OrderTopping
 * 
 */
export type OrderTopping = $Result.DefaultSelection<Prisma.$OrderToppingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  PREPARING: 'PREPARING',
  DELIVERED: 'DELIVERED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs>;

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
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs>;

  /**
   * `prisma.pizza`: Exposes CRUD operations for the **Pizza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pizzas
    * const pizzas = await prisma.pizza.findMany()
    * ```
    */
  get pizza(): Prisma.PizzaDelegate<ExtArgs>;

  /**
   * `prisma.pizzaTopping`: Exposes CRUD operations for the **PizzaTopping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PizzaToppings
    * const pizzaToppings = await prisma.pizzaTopping.findMany()
    * ```
    */
  get pizzaTopping(): Prisma.PizzaToppingDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.topping`: Exposes CRUD operations for the **Topping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Toppings
    * const toppings = await prisma.topping.findMany()
    * ```
    */
  get topping(): Prisma.ToppingDelegate<ExtArgs>;

  /**
   * `prisma.orderTopping`: Exposes CRUD operations for the **OrderTopping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderToppings
    * const orderToppings = await prisma.orderTopping.findMany()
    * ```
    */
  get orderTopping(): Prisma.OrderToppingDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    Permission: 'Permission',
    UserRole: 'UserRole',
    RolePermission: 'RolePermission',
    Restaurant: 'Restaurant',
    Pizza: 'Pizza',
    PizzaTopping: 'PizzaTopping',
    Order: 'Order',
    Topping: 'Topping',
    OrderTopping: 'OrderTopping'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "role" | "permission" | "userRole" | "rolePermission" | "restaurant" | "pizza" | "pizzaTopping" | "order" | "topping" | "orderTopping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Pizza: {
        payload: Prisma.$PizzaPayload<ExtArgs>
        fields: Prisma.PizzaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          findFirst: {
            args: Prisma.PizzaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          findMany: {
            args: Prisma.PizzaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          create: {
            args: Prisma.PizzaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          createMany: {
            args: Prisma.PizzaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>[]
          }
          delete: {
            args: Prisma.PizzaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          update: {
            args: Prisma.PizzaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          deleteMany: {
            args: Prisma.PizzaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PizzaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaPayload>
          }
          aggregate: {
            args: Prisma.PizzaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizza>
          }
          groupBy: {
            args: Prisma.PizzaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaCountAggregateOutputType> | number
          }
        }
      }
      PizzaTopping: {
        payload: Prisma.$PizzaToppingPayload<ExtArgs>
        fields: Prisma.PizzaToppingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PizzaToppingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PizzaToppingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>
          }
          findFirst: {
            args: Prisma.PizzaToppingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PizzaToppingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>
          }
          findMany: {
            args: Prisma.PizzaToppingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>[]
          }
          create: {
            args: Prisma.PizzaToppingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>
          }
          createMany: {
            args: Prisma.PizzaToppingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PizzaToppingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>[]
          }
          delete: {
            args: Prisma.PizzaToppingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>
          }
          update: {
            args: Prisma.PizzaToppingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>
          }
          deleteMany: {
            args: Prisma.PizzaToppingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PizzaToppingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PizzaToppingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PizzaToppingPayload>
          }
          aggregate: {
            args: Prisma.PizzaToppingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePizzaTopping>
          }
          groupBy: {
            args: Prisma.PizzaToppingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PizzaToppingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PizzaToppingCountArgs<ExtArgs>
            result: $Utils.Optional<PizzaToppingCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Topping: {
        payload: Prisma.$ToppingPayload<ExtArgs>
        fields: Prisma.ToppingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToppingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToppingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          findFirst: {
            args: Prisma.ToppingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToppingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          findMany: {
            args: Prisma.ToppingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>[]
          }
          create: {
            args: Prisma.ToppingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          createMany: {
            args: Prisma.ToppingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToppingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>[]
          }
          delete: {
            args: Prisma.ToppingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          update: {
            args: Prisma.ToppingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          deleteMany: {
            args: Prisma.ToppingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToppingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ToppingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToppingPayload>
          }
          aggregate: {
            args: Prisma.ToppingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopping>
          }
          groupBy: {
            args: Prisma.ToppingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToppingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToppingCountArgs<ExtArgs>
            result: $Utils.Optional<ToppingCountAggregateOutputType> | number
          }
        }
      }
      OrderTopping: {
        payload: Prisma.$OrderToppingPayload<ExtArgs>
        fields: Prisma.OrderToppingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderToppingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderToppingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>
          }
          findFirst: {
            args: Prisma.OrderToppingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderToppingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>
          }
          findMany: {
            args: Prisma.OrderToppingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>[]
          }
          create: {
            args: Prisma.OrderToppingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>
          }
          createMany: {
            args: Prisma.OrderToppingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderToppingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>[]
          }
          delete: {
            args: Prisma.OrderToppingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>
          }
          update: {
            args: Prisma.OrderToppingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>
          }
          deleteMany: {
            args: Prisma.OrderToppingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderToppingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderToppingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderToppingPayload>
          }
          aggregate: {
            args: Prisma.OrderToppingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderTopping>
          }
          groupBy: {
            args: Prisma.OrderToppingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderToppingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderToppingCountArgs<ExtArgs>
            result: $Utils.Optional<OrderToppingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    orders: number
    superAdminRestaurants: number
    roles: number
    role: number
    Restaurant_KitchenAdmin: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    superAdminRestaurants?: boolean | UserCountOutputTypeCountSuperAdminRestaurantsArgs
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    role?: boolean | UserCountOutputTypeCountRoleArgs
    Restaurant_KitchenAdmin?: boolean | UserCountOutputTypeCountRestaurant_KitchenAdminArgs
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
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSuperAdminRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRestaurant_KitchenAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    permissions: number
    users: number
    roles: number
    User: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    roles?: boolean | RoleCountOutputTypeCountRolesArgs
    User?: boolean | RoleCountOutputTypeCountUserArgs
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
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    orders: number
    pizzas: number
    roles: number
    User_KitchenAdmin: number
    User: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs
    pizzas?: boolean | RestaurantCountOutputTypeCountPizzasArgs
    roles?: boolean | RestaurantCountOutputTypeCountRolesArgs
    User_KitchenAdmin?: boolean | RestaurantCountOutputTypeCountUser_KitchenAdminArgs
    User?: boolean | RestaurantCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountUser_KitchenAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PizzaCountOutputType
   */

  export type PizzaCountOutputType = {
    Order: number
    toppings: number
  }

  export type PizzaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | PizzaCountOutputTypeCountOrderArgs
    toppings?: boolean | PizzaCountOutputTypeCountToppingsArgs
  }

  // Custom InputTypes
  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaCountOutputType
     */
    select?: PizzaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * PizzaCountOutputType without action
   */
  export type PizzaCountOutputTypeCountToppingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaToppingWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    toppings: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    toppings?: boolean | OrderCountOutputTypeCountToppingsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountToppingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderToppingWhereInput
  }


  /**
   * Count Type ToppingCountOutputType
   */

  export type ToppingCountOutputType = {
    orders: number
    pizzas: number
  }

  export type ToppingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ToppingCountOutputTypeCountOrdersArgs
    pizzas?: boolean | ToppingCountOutputTypeCountPizzasArgs
  }

  // Custom InputTypes
  /**
   * ToppingCountOutputType without action
   */
  export type ToppingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToppingCountOutputType
     */
    select?: ToppingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToppingCountOutputType without action
   */
  export type ToppingCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderToppingWhereInput
  }

  /**
   * ToppingCountOutputType without action
   */
  export type ToppingCountOutputTypeCountPizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaToppingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    restaurantId: number | null
    location: string | null
    phoneNumber: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    restaurantId: number | null
    location: string | null
    phoneNumber: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    restaurantId: number
    location: number
    phoneNumber: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    restaurantId?: true
    location?: true
    phoneNumber?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    restaurantId?: true
    location?: true
    phoneNumber?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    restaurantId?: true
    location?: true
    phoneNumber?: true
    name?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    restaurantId: number | null
    location: string | null
    phoneNumber: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
    restaurantId?: boolean
    location?: boolean
    phoneNumber?: boolean
    name?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    superAdminRestaurants?: boolean | User$superAdminRestaurantsArgs<ExtArgs>
    Restaurant_User_restaurantIdToRestaurant?: boolean | User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
    Restaurant_KitchenAdmin?: boolean | User$Restaurant_KitchenAdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    restaurantId?: boolean
    location?: boolean
    phoneNumber?: boolean
    name?: boolean
    Restaurant_User_restaurantIdToRestaurant?: boolean | User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    restaurantId?: boolean
    location?: boolean
    phoneNumber?: boolean
    name?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    superAdminRestaurants?: boolean | User$superAdminRestaurantsArgs<ExtArgs>
    Restaurant_User_restaurantIdToRestaurant?: boolean | User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
    Restaurant_KitchenAdmin?: boolean | User$Restaurant_KitchenAdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Restaurant_User_restaurantIdToRestaurant?: boolean | User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      superAdminRestaurants: Prisma.$RestaurantPayload<ExtArgs>[]
      Restaurant_User_restaurantIdToRestaurant: Prisma.$RestaurantPayload<ExtArgs> | null
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>[]
      Restaurant_KitchenAdmin: Prisma.$RestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      restaurantId: number | null
      location: string | null
      phoneNumber: string
      name: string | null
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    superAdminRestaurants<T extends User$superAdminRestaurantsArgs<ExtArgs> = {}>(args?: Subset<T, User$superAdminRestaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany"> | Null>
    Restaurant_User_restaurantIdToRestaurant<T extends User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs> = {}>(args?: Subset<T, User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany"> | Null>
    Restaurant_KitchenAdmin<T extends User$Restaurant_KitchenAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$Restaurant_KitchenAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly restaurantId: FieldRef<"User", 'Int'>
    readonly location: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.superAdminRestaurants
   */
  export type User$superAdminRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * User.Restaurant_User_restaurantIdToRestaurant
   */
  export type User$Restaurant_User_restaurantIdToRestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.Restaurant_KitchenAdmin
   */
  export type User$Restaurant_KitchenAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
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
    restaurantId: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    restaurantId: number | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    restaurantId: number | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    restaurantId: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    restaurantId?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    restaurantId?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    restaurantId?: true
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
    name: string
    createdAt: Date
    updatedAt: Date
    restaurantId: number
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
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurantId?: boolean
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    restaurant?: boolean | Role$restaurantArgs<ExtArgs>
    roles?: boolean | Role$rolesArgs<ExtArgs>
    parentRole?: boolean | Role$parentRoleArgs<ExtArgs>
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurantId?: boolean
    restaurant?: boolean | Role$restaurantArgs<ExtArgs>
    parentRole?: boolean | Role$parentRoleArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurantId?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    restaurant?: boolean | Role$restaurantArgs<ExtArgs>
    roles?: boolean | Role$rolesArgs<ExtArgs>
    parentRole?: boolean | Role$parentRoleArgs<ExtArgs>
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | Role$restaurantArgs<ExtArgs>
    parentRole?: boolean | Role$parentRoleArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      permissions: Prisma.$RolePermissionPayload<ExtArgs>[]
      users: Prisma.$UserRolePayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
      roles: Prisma.$RolePayload<ExtArgs>[]
      parentRole: Prisma.$RolePayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      restaurantId: number
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
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    restaurant<T extends Role$restaurantArgs<ExtArgs> = {}>(args?: Subset<T, Role$restaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    roles<T extends Role$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany"> | Null>
    parentRole<T extends Role$parentRoleArgs<ExtArgs> = {}>(args?: Subset<T, Role$parentRoleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly restaurantId: FieldRef<"Role", 'Int'>
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
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Role.restaurant
   */
  export type Role$restaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * Role.roles
   */
  export type Role$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Role.parentRole
   */
  export type Role$parentRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    action: string | null
    subject: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    action: string | null
    subject: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    action: number
    subject: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    action?: true
    subject?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    action?: true
    subject?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    action?: true
    subject?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    action: string
    subject: string
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    subject?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    subject?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    action?: boolean
    subject?: boolean
  }

  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      subject: string
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly action: FieldRef<"Permission", 'String'>
    readonly subject: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
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
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
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
    userId: number
    roleId: number
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
    userId?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
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
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
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
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionCountAggregateOutputType = {
    roleId: number
    permissionId: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionSumAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMinAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    roleId: number
    permissionId: number
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
  }

  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      permissionId: number
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.createManyAndReturn({ 
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */ 
  interface RolePermissionFieldRefs {
    readonly roleId: FieldRef<"RolePermission", 'Int'>
    readonly permissionId: FieldRef<"RolePermission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    id: number | null
    superAdminId: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    id: number | null
    superAdminId: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: number | null
    name: string | null
    superAdminId: number | null
    imgUrl: string | null
    location: string | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    superAdminId: number | null
    imgUrl: string | null
    location: string | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    superAdminId: number
    imgUrl: number
    location: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    id?: true
    superAdminId?: true
  }

  export type RestaurantSumAggregateInputType = {
    id?: true
    superAdminId?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    superAdminId?: true
    imgUrl?: true
    location?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    superAdminId?: true
    imgUrl?: true
    location?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    superAdminId?: true
    imgUrl?: true
    location?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: number
    name: string
    superAdminId: number | null
    imgUrl: string
    location: string
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    superAdminId?: boolean
    imgUrl?: boolean
    location?: boolean
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    pizzas?: boolean | Restaurant$pizzasArgs<ExtArgs>
    superAdmin?: boolean | Restaurant$superAdminArgs<ExtArgs>
    roles?: boolean | Restaurant$rolesArgs<ExtArgs>
    User_KitchenAdmin?: boolean | Restaurant$User_KitchenAdminArgs<ExtArgs>
    User?: boolean | Restaurant$UserArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    superAdminId?: boolean
    imgUrl?: boolean
    location?: boolean
    superAdmin?: boolean | Restaurant$superAdminArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    superAdminId?: boolean
    imgUrl?: boolean
    location?: boolean
  }

  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    pizzas?: boolean | Restaurant$pizzasArgs<ExtArgs>
    superAdmin?: boolean | Restaurant$superAdminArgs<ExtArgs>
    roles?: boolean | Restaurant$rolesArgs<ExtArgs>
    User_KitchenAdmin?: boolean | Restaurant$User_KitchenAdminArgs<ExtArgs>
    User?: boolean | Restaurant$UserArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superAdmin?: boolean | Restaurant$superAdminArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      pizzas: Prisma.$PizzaPayload<ExtArgs>[]
      superAdmin: Prisma.$UserPayload<ExtArgs> | null
      roles: Prisma.$RolePayload<ExtArgs>[]
      User_KitchenAdmin: Prisma.$UserPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      superAdminId: number | null
      imgUrl: string
      location: string
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Restaurant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    pizzas<T extends Restaurant$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany"> | Null>
    superAdmin<T extends Restaurant$superAdminArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$superAdminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    roles<T extends Restaurant$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany"> | Null>
    User_KitchenAdmin<T extends Restaurant$User_KitchenAdminArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$User_KitchenAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Restaurant$UserArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */ 
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'Int'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly superAdminId: FieldRef<"Restaurant", 'Int'>
    readonly imgUrl: FieldRef<"Restaurant", 'String'>
    readonly location: FieldRef<"Restaurant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant.orders
   */
  export type Restaurant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Restaurant.pizzas
   */
  export type Restaurant$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    cursor?: PizzaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Restaurant.superAdmin
   */
  export type Restaurant$superAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Restaurant.roles
   */
  export type Restaurant$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restaurant.User_KitchenAdmin
   */
  export type Restaurant$User_KitchenAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restaurant.User
   */
  export type Restaurant$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Pizza
   */

  export type AggregatePizza = {
    _count: PizzaCountAggregateOutputType | null
    _avg: PizzaAvgAggregateOutputType | null
    _sum: PizzaSumAggregateOutputType | null
    _min: PizzaMinAggregateOutputType | null
    _max: PizzaMaxAggregateOutputType | null
  }

  export type PizzaAvgAggregateOutputType = {
    id: number | null
    price: number | null
    restaurantId: number | null
  }

  export type PizzaSumAggregateOutputType = {
    id: number | null
    price: number | null
    restaurantId: number | null
  }

  export type PizzaMinAggregateOutputType = {
    id: number | null
    name: string | null
    imgurl: string | null
    price: number | null
    restaurantId: number | null
  }

  export type PizzaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imgurl: string | null
    price: number | null
    restaurantId: number | null
  }

  export type PizzaCountAggregateOutputType = {
    id: number
    name: number
    imgurl: number
    price: number
    restaurantId: number
    _all: number
  }


  export type PizzaAvgAggregateInputType = {
    id?: true
    price?: true
    restaurantId?: true
  }

  export type PizzaSumAggregateInputType = {
    id?: true
    price?: true
    restaurantId?: true
  }

  export type PizzaMinAggregateInputType = {
    id?: true
    name?: true
    imgurl?: true
    price?: true
    restaurantId?: true
  }

  export type PizzaMaxAggregateInputType = {
    id?: true
    name?: true
    imgurl?: true
    price?: true
    restaurantId?: true
  }

  export type PizzaCountAggregateInputType = {
    id?: true
    name?: true
    imgurl?: true
    price?: true
    restaurantId?: true
    _all?: true
  }

  export type PizzaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizza to aggregate.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pizzas
    **/
    _count?: true | PizzaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaMaxAggregateInputType
  }

  export type GetPizzaAggregateType<T extends PizzaAggregateArgs> = {
        [P in keyof T & keyof AggregatePizza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizza[P]>
      : GetScalarType<T[P], AggregatePizza[P]>
  }




  export type PizzaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaWhereInput
    orderBy?: PizzaOrderByWithAggregationInput | PizzaOrderByWithAggregationInput[]
    by: PizzaScalarFieldEnum[] | PizzaScalarFieldEnum
    having?: PizzaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaCountAggregateInputType | true
    _avg?: PizzaAvgAggregateInputType
    _sum?: PizzaSumAggregateInputType
    _min?: PizzaMinAggregateInputType
    _max?: PizzaMaxAggregateInputType
  }

  export type PizzaGroupByOutputType = {
    id: number
    name: string
    imgurl: string
    price: number
    restaurantId: number
    _count: PizzaCountAggregateOutputType | null
    _avg: PizzaAvgAggregateOutputType | null
    _sum: PizzaSumAggregateOutputType | null
    _min: PizzaMinAggregateOutputType | null
    _max: PizzaMaxAggregateOutputType | null
  }

  type GetPizzaGroupByPayload<T extends PizzaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaGroupByOutputType[P]>
        }
      >
    >


  export type PizzaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imgurl?: boolean
    price?: boolean
    restaurantId?: boolean
    Order?: boolean | Pizza$OrderArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    toppings?: boolean | Pizza$toppingsArgs<ExtArgs>
    _count?: boolean | PizzaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imgurl?: boolean
    price?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizza"]>

  export type PizzaSelectScalar = {
    id?: boolean
    name?: boolean
    imgurl?: boolean
    price?: boolean
    restaurantId?: boolean
  }

  export type PizzaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | Pizza$OrderArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    toppings?: boolean | Pizza$toppingsArgs<ExtArgs>
    _count?: boolean | PizzaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PizzaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $PizzaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pizza"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      toppings: Prisma.$PizzaToppingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imgurl: string
      price: number
      restaurantId: number
    }, ExtArgs["result"]["pizza"]>
    composites: {}
  }

  type PizzaGetPayload<S extends boolean | null | undefined | PizzaDefaultArgs> = $Result.GetResult<Prisma.$PizzaPayload, S>

  type PizzaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PizzaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PizzaCountAggregateInputType | true
    }

  export interface PizzaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pizza'], meta: { name: 'Pizza' } }
    /**
     * Find zero or one Pizza that matches the filter.
     * @param {PizzaFindUniqueArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaFindUniqueArgs>(args: SelectSubset<T, PizzaFindUniqueArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pizza that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PizzaFindUniqueOrThrowArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pizza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindFirstArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaFindFirstArgs>(args?: SelectSubset<T, PizzaFindFirstArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pizza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindFirstOrThrowArgs} args - Arguments to find a Pizza
     * @example
     * // Get one Pizza
     * const pizza = await prisma.pizza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pizzas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pizzas
     * const pizzas = await prisma.pizza.findMany()
     * 
     * // Get first 10 Pizzas
     * const pizzas = await prisma.pizza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pizzaWithIdOnly = await prisma.pizza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PizzaFindManyArgs>(args?: SelectSubset<T, PizzaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pizza.
     * @param {PizzaCreateArgs} args - Arguments to create a Pizza.
     * @example
     * // Create one Pizza
     * const Pizza = await prisma.pizza.create({
     *   data: {
     *     // ... data to create a Pizza
     *   }
     * })
     * 
     */
    create<T extends PizzaCreateArgs>(args: SelectSubset<T, PizzaCreateArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pizzas.
     * @param {PizzaCreateManyArgs} args - Arguments to create many Pizzas.
     * @example
     * // Create many Pizzas
     * const pizza = await prisma.pizza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaCreateManyArgs>(args?: SelectSubset<T, PizzaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pizzas and returns the data saved in the database.
     * @param {PizzaCreateManyAndReturnArgs} args - Arguments to create many Pizzas.
     * @example
     * // Create many Pizzas
     * const pizza = await prisma.pizza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pizzas and only return the `id`
     * const pizzaWithIdOnly = await prisma.pizza.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pizza.
     * @param {PizzaDeleteArgs} args - Arguments to delete one Pizza.
     * @example
     * // Delete one Pizza
     * const Pizza = await prisma.pizza.delete({
     *   where: {
     *     // ... filter to delete one Pizza
     *   }
     * })
     * 
     */
    delete<T extends PizzaDeleteArgs>(args: SelectSubset<T, PizzaDeleteArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pizza.
     * @param {PizzaUpdateArgs} args - Arguments to update one Pizza.
     * @example
     * // Update one Pizza
     * const pizza = await prisma.pizza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaUpdateArgs>(args: SelectSubset<T, PizzaUpdateArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pizzas.
     * @param {PizzaDeleteManyArgs} args - Arguments to filter Pizzas to delete.
     * @example
     * // Delete a few Pizzas
     * const { count } = await prisma.pizza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaDeleteManyArgs>(args?: SelectSubset<T, PizzaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pizzas
     * const pizza = await prisma.pizza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaUpdateManyArgs>(args: SelectSubset<T, PizzaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pizza.
     * @param {PizzaUpsertArgs} args - Arguments to update or create a Pizza.
     * @example
     * // Update or create a Pizza
     * const pizza = await prisma.pizza.upsert({
     *   create: {
     *     // ... data to create a Pizza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pizza we want to update
     *   }
     * })
     */
    upsert<T extends PizzaUpsertArgs>(args: SelectSubset<T, PizzaUpsertArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pizzas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaCountArgs} args - Arguments to filter Pizzas to count.
     * @example
     * // Count the number of Pizzas
     * const count = await prisma.pizza.count({
     *   where: {
     *     // ... the filter for the Pizzas we want to count
     *   }
     * })
    **/
    count<T extends PizzaCountArgs>(
      args?: Subset<T, PizzaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PizzaAggregateArgs>(args: Subset<T, PizzaAggregateArgs>): Prisma.PrismaPromise<GetPizzaAggregateType<T>>

    /**
     * Group by Pizza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaGroupByArgs} args - Group by arguments.
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
      T extends PizzaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaGroupByArgs['orderBy'] }
        : { orderBy?: PizzaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PizzaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pizza model
   */
  readonly fields: PizzaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pizza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends Pizza$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Pizza$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toppings<T extends Pizza$toppingsArgs<ExtArgs> = {}>(args?: Subset<T, Pizza$toppingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pizza model
   */ 
  interface PizzaFieldRefs {
    readonly id: FieldRef<"Pizza", 'Int'>
    readonly name: FieldRef<"Pizza", 'String'>
    readonly imgurl: FieldRef<"Pizza", 'String'>
    readonly price: FieldRef<"Pizza", 'Float'>
    readonly restaurantId: FieldRef<"Pizza", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pizza findUnique
   */
  export type PizzaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza findUniqueOrThrow
   */
  export type PizzaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza findFirst
   */
  export type PizzaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzas.
     */
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza findFirstOrThrow
   */
  export type PizzaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizza to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pizzas.
     */
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza findMany
   */
  export type PizzaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter, which Pizzas to fetch.
     */
    where?: PizzaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pizzas to fetch.
     */
    orderBy?: PizzaOrderByWithRelationInput | PizzaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pizzas.
     */
    cursor?: PizzaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pizzas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pizzas.
     */
    skip?: number
    distinct?: PizzaScalarFieldEnum | PizzaScalarFieldEnum[]
  }

  /**
   * Pizza create
   */
  export type PizzaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pizza.
     */
    data: XOR<PizzaCreateInput, PizzaUncheckedCreateInput>
  }

  /**
   * Pizza createMany
   */
  export type PizzaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pizzas.
     */
    data: PizzaCreateManyInput | PizzaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pizza createManyAndReturn
   */
  export type PizzaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pizzas.
     */
    data: PizzaCreateManyInput | PizzaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pizza update
   */
  export type PizzaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pizza.
     */
    data: XOR<PizzaUpdateInput, PizzaUncheckedUpdateInput>
    /**
     * Choose, which Pizza to update.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza updateMany
   */
  export type PizzaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pizzas.
     */
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyInput>
    /**
     * Filter which Pizzas to update
     */
    where?: PizzaWhereInput
  }

  /**
   * Pizza upsert
   */
  export type PizzaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pizza to update in case it exists.
     */
    where: PizzaWhereUniqueInput
    /**
     * In case the Pizza found by the `where` argument doesn't exist, create a new Pizza with this data.
     */
    create: XOR<PizzaCreateInput, PizzaUncheckedCreateInput>
    /**
     * In case the Pizza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaUpdateInput, PizzaUncheckedUpdateInput>
  }

  /**
   * Pizza delete
   */
  export type PizzaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
    /**
     * Filter which Pizza to delete.
     */
    where: PizzaWhereUniqueInput
  }

  /**
   * Pizza deleteMany
   */
  export type PizzaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pizzas to delete
     */
    where?: PizzaWhereInput
  }

  /**
   * Pizza.Order
   */
  export type Pizza$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Pizza.toppings
   */
  export type Pizza$toppingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    where?: PizzaToppingWhereInput
    orderBy?: PizzaToppingOrderByWithRelationInput | PizzaToppingOrderByWithRelationInput[]
    cursor?: PizzaToppingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaToppingScalarFieldEnum | PizzaToppingScalarFieldEnum[]
  }

  /**
   * Pizza without action
   */
  export type PizzaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pizza
     */
    select?: PizzaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaInclude<ExtArgs> | null
  }


  /**
   * Model PizzaTopping
   */

  export type AggregatePizzaTopping = {
    _count: PizzaToppingCountAggregateOutputType | null
    _avg: PizzaToppingAvgAggregateOutputType | null
    _sum: PizzaToppingSumAggregateOutputType | null
    _min: PizzaToppingMinAggregateOutputType | null
    _max: PizzaToppingMaxAggregateOutputType | null
  }

  export type PizzaToppingAvgAggregateOutputType = {
    pizzaId: number | null
    toppingId: number | null
  }

  export type PizzaToppingSumAggregateOutputType = {
    pizzaId: number | null
    toppingId: number | null
  }

  export type PizzaToppingMinAggregateOutputType = {
    pizzaId: number | null
    toppingId: number | null
  }

  export type PizzaToppingMaxAggregateOutputType = {
    pizzaId: number | null
    toppingId: number | null
  }

  export type PizzaToppingCountAggregateOutputType = {
    pizzaId: number
    toppingId: number
    _all: number
  }


  export type PizzaToppingAvgAggregateInputType = {
    pizzaId?: true
    toppingId?: true
  }

  export type PizzaToppingSumAggregateInputType = {
    pizzaId?: true
    toppingId?: true
  }

  export type PizzaToppingMinAggregateInputType = {
    pizzaId?: true
    toppingId?: true
  }

  export type PizzaToppingMaxAggregateInputType = {
    pizzaId?: true
    toppingId?: true
  }

  export type PizzaToppingCountAggregateInputType = {
    pizzaId?: true
    toppingId?: true
    _all?: true
  }

  export type PizzaToppingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaTopping to aggregate.
     */
    where?: PizzaToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaToppings to fetch.
     */
    orderBy?: PizzaToppingOrderByWithRelationInput | PizzaToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PizzaToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PizzaToppings
    **/
    _count?: true | PizzaToppingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PizzaToppingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PizzaToppingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PizzaToppingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PizzaToppingMaxAggregateInputType
  }

  export type GetPizzaToppingAggregateType<T extends PizzaToppingAggregateArgs> = {
        [P in keyof T & keyof AggregatePizzaTopping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePizzaTopping[P]>
      : GetScalarType<T[P], AggregatePizzaTopping[P]>
  }




  export type PizzaToppingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PizzaToppingWhereInput
    orderBy?: PizzaToppingOrderByWithAggregationInput | PizzaToppingOrderByWithAggregationInput[]
    by: PizzaToppingScalarFieldEnum[] | PizzaToppingScalarFieldEnum
    having?: PizzaToppingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PizzaToppingCountAggregateInputType | true
    _avg?: PizzaToppingAvgAggregateInputType
    _sum?: PizzaToppingSumAggregateInputType
    _min?: PizzaToppingMinAggregateInputType
    _max?: PizzaToppingMaxAggregateInputType
  }

  export type PizzaToppingGroupByOutputType = {
    pizzaId: number
    toppingId: number
    _count: PizzaToppingCountAggregateOutputType | null
    _avg: PizzaToppingAvgAggregateOutputType | null
    _sum: PizzaToppingSumAggregateOutputType | null
    _min: PizzaToppingMinAggregateOutputType | null
    _max: PizzaToppingMaxAggregateOutputType | null
  }

  type GetPizzaToppingGroupByPayload<T extends PizzaToppingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PizzaToppingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PizzaToppingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PizzaToppingGroupByOutputType[P]>
            : GetScalarType<T[P], PizzaToppingGroupByOutputType[P]>
        }
      >
    >


  export type PizzaToppingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pizzaId?: boolean
    toppingId?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaTopping"]>

  export type PizzaToppingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pizzaId?: boolean
    toppingId?: boolean
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pizzaTopping"]>

  export type PizzaToppingSelectScalar = {
    pizzaId?: boolean
    toppingId?: boolean
  }

  export type PizzaToppingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }
  export type PizzaToppingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }

  export type $PizzaToppingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PizzaTopping"
    objects: {
      pizza: Prisma.$PizzaPayload<ExtArgs>
      topping: Prisma.$ToppingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pizzaId: number
      toppingId: number
    }, ExtArgs["result"]["pizzaTopping"]>
    composites: {}
  }

  type PizzaToppingGetPayload<S extends boolean | null | undefined | PizzaToppingDefaultArgs> = $Result.GetResult<Prisma.$PizzaToppingPayload, S>

  type PizzaToppingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PizzaToppingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PizzaToppingCountAggregateInputType | true
    }

  export interface PizzaToppingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PizzaTopping'], meta: { name: 'PizzaTopping' } }
    /**
     * Find zero or one PizzaTopping that matches the filter.
     * @param {PizzaToppingFindUniqueArgs} args - Arguments to find a PizzaTopping
     * @example
     * // Get one PizzaTopping
     * const pizzaTopping = await prisma.pizzaTopping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PizzaToppingFindUniqueArgs>(args: SelectSubset<T, PizzaToppingFindUniqueArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PizzaTopping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PizzaToppingFindUniqueOrThrowArgs} args - Arguments to find a PizzaTopping
     * @example
     * // Get one PizzaTopping
     * const pizzaTopping = await prisma.pizzaTopping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PizzaToppingFindUniqueOrThrowArgs>(args: SelectSubset<T, PizzaToppingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PizzaTopping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingFindFirstArgs} args - Arguments to find a PizzaTopping
     * @example
     * // Get one PizzaTopping
     * const pizzaTopping = await prisma.pizzaTopping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PizzaToppingFindFirstArgs>(args?: SelectSubset<T, PizzaToppingFindFirstArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PizzaTopping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingFindFirstOrThrowArgs} args - Arguments to find a PizzaTopping
     * @example
     * // Get one PizzaTopping
     * const pizzaTopping = await prisma.pizzaTopping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PizzaToppingFindFirstOrThrowArgs>(args?: SelectSubset<T, PizzaToppingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PizzaToppings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PizzaToppings
     * const pizzaToppings = await prisma.pizzaTopping.findMany()
     * 
     * // Get first 10 PizzaToppings
     * const pizzaToppings = await prisma.pizzaTopping.findMany({ take: 10 })
     * 
     * // Only select the `pizzaId`
     * const pizzaToppingWithPizzaIdOnly = await prisma.pizzaTopping.findMany({ select: { pizzaId: true } })
     * 
     */
    findMany<T extends PizzaToppingFindManyArgs>(args?: SelectSubset<T, PizzaToppingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PizzaTopping.
     * @param {PizzaToppingCreateArgs} args - Arguments to create a PizzaTopping.
     * @example
     * // Create one PizzaTopping
     * const PizzaTopping = await prisma.pizzaTopping.create({
     *   data: {
     *     // ... data to create a PizzaTopping
     *   }
     * })
     * 
     */
    create<T extends PizzaToppingCreateArgs>(args: SelectSubset<T, PizzaToppingCreateArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PizzaToppings.
     * @param {PizzaToppingCreateManyArgs} args - Arguments to create many PizzaToppings.
     * @example
     * // Create many PizzaToppings
     * const pizzaTopping = await prisma.pizzaTopping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PizzaToppingCreateManyArgs>(args?: SelectSubset<T, PizzaToppingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PizzaToppings and returns the data saved in the database.
     * @param {PizzaToppingCreateManyAndReturnArgs} args - Arguments to create many PizzaToppings.
     * @example
     * // Create many PizzaToppings
     * const pizzaTopping = await prisma.pizzaTopping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PizzaToppings and only return the `pizzaId`
     * const pizzaToppingWithPizzaIdOnly = await prisma.pizzaTopping.createManyAndReturn({ 
     *   select: { pizzaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PizzaToppingCreateManyAndReturnArgs>(args?: SelectSubset<T, PizzaToppingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PizzaTopping.
     * @param {PizzaToppingDeleteArgs} args - Arguments to delete one PizzaTopping.
     * @example
     * // Delete one PizzaTopping
     * const PizzaTopping = await prisma.pizzaTopping.delete({
     *   where: {
     *     // ... filter to delete one PizzaTopping
     *   }
     * })
     * 
     */
    delete<T extends PizzaToppingDeleteArgs>(args: SelectSubset<T, PizzaToppingDeleteArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PizzaTopping.
     * @param {PizzaToppingUpdateArgs} args - Arguments to update one PizzaTopping.
     * @example
     * // Update one PizzaTopping
     * const pizzaTopping = await prisma.pizzaTopping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PizzaToppingUpdateArgs>(args: SelectSubset<T, PizzaToppingUpdateArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PizzaToppings.
     * @param {PizzaToppingDeleteManyArgs} args - Arguments to filter PizzaToppings to delete.
     * @example
     * // Delete a few PizzaToppings
     * const { count } = await prisma.pizzaTopping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PizzaToppingDeleteManyArgs>(args?: SelectSubset<T, PizzaToppingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PizzaToppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PizzaToppings
     * const pizzaTopping = await prisma.pizzaTopping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PizzaToppingUpdateManyArgs>(args: SelectSubset<T, PizzaToppingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PizzaTopping.
     * @param {PizzaToppingUpsertArgs} args - Arguments to update or create a PizzaTopping.
     * @example
     * // Update or create a PizzaTopping
     * const pizzaTopping = await prisma.pizzaTopping.upsert({
     *   create: {
     *     // ... data to create a PizzaTopping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PizzaTopping we want to update
     *   }
     * })
     */
    upsert<T extends PizzaToppingUpsertArgs>(args: SelectSubset<T, PizzaToppingUpsertArgs<ExtArgs>>): Prisma__PizzaToppingClient<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PizzaToppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingCountArgs} args - Arguments to filter PizzaToppings to count.
     * @example
     * // Count the number of PizzaToppings
     * const count = await prisma.pizzaTopping.count({
     *   where: {
     *     // ... the filter for the PizzaToppings we want to count
     *   }
     * })
    **/
    count<T extends PizzaToppingCountArgs>(
      args?: Subset<T, PizzaToppingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PizzaToppingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PizzaTopping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PizzaToppingAggregateArgs>(args: Subset<T, PizzaToppingAggregateArgs>): Prisma.PrismaPromise<GetPizzaToppingAggregateType<T>>

    /**
     * Group by PizzaTopping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PizzaToppingGroupByArgs} args - Group by arguments.
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
      T extends PizzaToppingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PizzaToppingGroupByArgs['orderBy'] }
        : { orderBy?: PizzaToppingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PizzaToppingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPizzaToppingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PizzaTopping model
   */
  readonly fields: PizzaToppingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PizzaTopping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PizzaToppingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pizza<T extends PizzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaDefaultArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    topping<T extends ToppingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToppingDefaultArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PizzaTopping model
   */ 
  interface PizzaToppingFieldRefs {
    readonly pizzaId: FieldRef<"PizzaTopping", 'Int'>
    readonly toppingId: FieldRef<"PizzaTopping", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PizzaTopping findUnique
   */
  export type PizzaToppingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaTopping to fetch.
     */
    where: PizzaToppingWhereUniqueInput
  }

  /**
   * PizzaTopping findUniqueOrThrow
   */
  export type PizzaToppingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaTopping to fetch.
     */
    where: PizzaToppingWhereUniqueInput
  }

  /**
   * PizzaTopping findFirst
   */
  export type PizzaToppingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaTopping to fetch.
     */
    where?: PizzaToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaToppings to fetch.
     */
    orderBy?: PizzaToppingOrderByWithRelationInput | PizzaToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaToppings.
     */
    cursor?: PizzaToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaToppings.
     */
    distinct?: PizzaToppingScalarFieldEnum | PizzaToppingScalarFieldEnum[]
  }

  /**
   * PizzaTopping findFirstOrThrow
   */
  export type PizzaToppingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaTopping to fetch.
     */
    where?: PizzaToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaToppings to fetch.
     */
    orderBy?: PizzaToppingOrderByWithRelationInput | PizzaToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PizzaToppings.
     */
    cursor?: PizzaToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PizzaToppings.
     */
    distinct?: PizzaToppingScalarFieldEnum | PizzaToppingScalarFieldEnum[]
  }

  /**
   * PizzaTopping findMany
   */
  export type PizzaToppingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * Filter, which PizzaToppings to fetch.
     */
    where?: PizzaToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PizzaToppings to fetch.
     */
    orderBy?: PizzaToppingOrderByWithRelationInput | PizzaToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PizzaToppings.
     */
    cursor?: PizzaToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PizzaToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PizzaToppings.
     */
    skip?: number
    distinct?: PizzaToppingScalarFieldEnum | PizzaToppingScalarFieldEnum[]
  }

  /**
   * PizzaTopping create
   */
  export type PizzaToppingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * The data needed to create a PizzaTopping.
     */
    data: XOR<PizzaToppingCreateInput, PizzaToppingUncheckedCreateInput>
  }

  /**
   * PizzaTopping createMany
   */
  export type PizzaToppingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PizzaToppings.
     */
    data: PizzaToppingCreateManyInput | PizzaToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PizzaTopping createManyAndReturn
   */
  export type PizzaToppingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PizzaToppings.
     */
    data: PizzaToppingCreateManyInput | PizzaToppingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PizzaTopping update
   */
  export type PizzaToppingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * The data needed to update a PizzaTopping.
     */
    data: XOR<PizzaToppingUpdateInput, PizzaToppingUncheckedUpdateInput>
    /**
     * Choose, which PizzaTopping to update.
     */
    where: PizzaToppingWhereUniqueInput
  }

  /**
   * PizzaTopping updateMany
   */
  export type PizzaToppingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PizzaToppings.
     */
    data: XOR<PizzaToppingUpdateManyMutationInput, PizzaToppingUncheckedUpdateManyInput>
    /**
     * Filter which PizzaToppings to update
     */
    where?: PizzaToppingWhereInput
  }

  /**
   * PizzaTopping upsert
   */
  export type PizzaToppingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * The filter to search for the PizzaTopping to update in case it exists.
     */
    where: PizzaToppingWhereUniqueInput
    /**
     * In case the PizzaTopping found by the `where` argument doesn't exist, create a new PizzaTopping with this data.
     */
    create: XOR<PizzaToppingCreateInput, PizzaToppingUncheckedCreateInput>
    /**
     * In case the PizzaTopping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PizzaToppingUpdateInput, PizzaToppingUncheckedUpdateInput>
  }

  /**
   * PizzaTopping delete
   */
  export type PizzaToppingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    /**
     * Filter which PizzaTopping to delete.
     */
    where: PizzaToppingWhereUniqueInput
  }

  /**
   * PizzaTopping deleteMany
   */
  export type PizzaToppingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PizzaToppings to delete
     */
    where?: PizzaToppingWhereInput
  }

  /**
   * PizzaTopping without action
   */
  export type PizzaToppingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
    pizzaId: number | null
    restaurantId: number | null
    quantity: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
    pizzaId: number | null
    restaurantId: number | null
    quantity: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    pizzaId: number | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    restaurantId: number | null
    quantity: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    pizzaId: number | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    restaurantId: number | null
    quantity: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerId: number
    pizzaId: number
    status: number
    createdAt: number
    restaurantId: number
    quantity: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customerId?: true
    pizzaId?: true
    restaurantId?: true
    quantity?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customerId?: true
    pizzaId?: true
    restaurantId?: true
    quantity?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerId?: true
    pizzaId?: true
    status?: true
    createdAt?: true
    restaurantId?: true
    quantity?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    pizzaId?: true
    status?: true
    createdAt?: true
    restaurantId?: true
    quantity?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerId?: true
    pizzaId?: true
    status?: true
    createdAt?: true
    restaurantId?: true
    quantity?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    customerId: number
    pizzaId: number
    status: $Enums.OrderStatus
    createdAt: Date
    restaurantId: number
    quantity: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    pizzaId?: boolean
    status?: boolean
    createdAt?: boolean
    restaurantId?: boolean
    quantity?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    Pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    toppings?: boolean | Order$toppingsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    pizzaId?: boolean
    status?: boolean
    createdAt?: boolean
    restaurantId?: boolean
    quantity?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    Pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    pizzaId?: boolean
    status?: boolean
    createdAt?: boolean
    restaurantId?: boolean
    quantity?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    Pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    toppings?: boolean | Order$toppingsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    Pizza?: boolean | PizzaDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      Pizza: Prisma.$PizzaPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      toppings: Prisma.$OrderToppingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      pizzaId: number
      status: $Enums.OrderStatus
      createdAt: Date
      restaurantId: number
      quantity: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Pizza<T extends PizzaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PizzaDefaultArgs<ExtArgs>>): Prisma__PizzaClient<$Result.GetResult<Prisma.$PizzaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toppings<T extends Order$toppingsArgs<ExtArgs> = {}>(args?: Subset<T, Order$toppingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly pizzaId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly restaurantId: FieldRef<"Order", 'Int'>
    readonly quantity: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.toppings
   */
  export type Order$toppingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    where?: OrderToppingWhereInput
    orderBy?: OrderToppingOrderByWithRelationInput | OrderToppingOrderByWithRelationInput[]
    cursor?: OrderToppingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderToppingScalarFieldEnum | OrderToppingScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Topping
   */

  export type AggregateTopping = {
    _count: ToppingCountAggregateOutputType | null
    _avg: ToppingAvgAggregateOutputType | null
    _sum: ToppingSumAggregateOutputType | null
    _min: ToppingMinAggregateOutputType | null
    _max: ToppingMaxAggregateOutputType | null
  }

  export type ToppingAvgAggregateOutputType = {
    id: number | null
  }

  export type ToppingSumAggregateOutputType = {
    id: number | null
  }

  export type ToppingMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ToppingMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ToppingCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ToppingAvgAggregateInputType = {
    id?: true
  }

  export type ToppingSumAggregateInputType = {
    id?: true
  }

  export type ToppingMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ToppingMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ToppingCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ToppingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topping to aggregate.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Toppings
    **/
    _count?: true | ToppingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToppingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToppingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToppingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToppingMaxAggregateInputType
  }

  export type GetToppingAggregateType<T extends ToppingAggregateArgs> = {
        [P in keyof T & keyof AggregateTopping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopping[P]>
      : GetScalarType<T[P], AggregateTopping[P]>
  }




  export type ToppingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToppingWhereInput
    orderBy?: ToppingOrderByWithAggregationInput | ToppingOrderByWithAggregationInput[]
    by: ToppingScalarFieldEnum[] | ToppingScalarFieldEnum
    having?: ToppingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToppingCountAggregateInputType | true
    _avg?: ToppingAvgAggregateInputType
    _sum?: ToppingSumAggregateInputType
    _min?: ToppingMinAggregateInputType
    _max?: ToppingMaxAggregateInputType
  }

  export type ToppingGroupByOutputType = {
    id: number
    name: string
    _count: ToppingCountAggregateOutputType | null
    _avg: ToppingAvgAggregateOutputType | null
    _sum: ToppingSumAggregateOutputType | null
    _min: ToppingMinAggregateOutputType | null
    _max: ToppingMaxAggregateOutputType | null
  }

  type GetToppingGroupByPayload<T extends ToppingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToppingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToppingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToppingGroupByOutputType[P]>
            : GetScalarType<T[P], ToppingGroupByOutputType[P]>
        }
      >
    >


  export type ToppingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orders?: boolean | Topping$ordersArgs<ExtArgs>
    pizzas?: boolean | Topping$pizzasArgs<ExtArgs>
    _count?: boolean | ToppingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topping"]>

  export type ToppingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["topping"]>

  export type ToppingSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ToppingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Topping$ordersArgs<ExtArgs>
    pizzas?: boolean | Topping$pizzasArgs<ExtArgs>
    _count?: boolean | ToppingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToppingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ToppingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topping"
    objects: {
      orders: Prisma.$OrderToppingPayload<ExtArgs>[]
      pizzas: Prisma.$PizzaToppingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["topping"]>
    composites: {}
  }

  type ToppingGetPayload<S extends boolean | null | undefined | ToppingDefaultArgs> = $Result.GetResult<Prisma.$ToppingPayload, S>

  type ToppingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ToppingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ToppingCountAggregateInputType | true
    }

  export interface ToppingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topping'], meta: { name: 'Topping' } }
    /**
     * Find zero or one Topping that matches the filter.
     * @param {ToppingFindUniqueArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToppingFindUniqueArgs>(args: SelectSubset<T, ToppingFindUniqueArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Topping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ToppingFindUniqueOrThrowArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToppingFindUniqueOrThrowArgs>(args: SelectSubset<T, ToppingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Topping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingFindFirstArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToppingFindFirstArgs>(args?: SelectSubset<T, ToppingFindFirstArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Topping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingFindFirstOrThrowArgs} args - Arguments to find a Topping
     * @example
     * // Get one Topping
     * const topping = await prisma.topping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToppingFindFirstOrThrowArgs>(args?: SelectSubset<T, ToppingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Toppings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Toppings
     * const toppings = await prisma.topping.findMany()
     * 
     * // Get first 10 Toppings
     * const toppings = await prisma.topping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toppingWithIdOnly = await prisma.topping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToppingFindManyArgs>(args?: SelectSubset<T, ToppingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Topping.
     * @param {ToppingCreateArgs} args - Arguments to create a Topping.
     * @example
     * // Create one Topping
     * const Topping = await prisma.topping.create({
     *   data: {
     *     // ... data to create a Topping
     *   }
     * })
     * 
     */
    create<T extends ToppingCreateArgs>(args: SelectSubset<T, ToppingCreateArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Toppings.
     * @param {ToppingCreateManyArgs} args - Arguments to create many Toppings.
     * @example
     * // Create many Toppings
     * const topping = await prisma.topping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToppingCreateManyArgs>(args?: SelectSubset<T, ToppingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Toppings and returns the data saved in the database.
     * @param {ToppingCreateManyAndReturnArgs} args - Arguments to create many Toppings.
     * @example
     * // Create many Toppings
     * const topping = await prisma.topping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Toppings and only return the `id`
     * const toppingWithIdOnly = await prisma.topping.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToppingCreateManyAndReturnArgs>(args?: SelectSubset<T, ToppingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Topping.
     * @param {ToppingDeleteArgs} args - Arguments to delete one Topping.
     * @example
     * // Delete one Topping
     * const Topping = await prisma.topping.delete({
     *   where: {
     *     // ... filter to delete one Topping
     *   }
     * })
     * 
     */
    delete<T extends ToppingDeleteArgs>(args: SelectSubset<T, ToppingDeleteArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Topping.
     * @param {ToppingUpdateArgs} args - Arguments to update one Topping.
     * @example
     * // Update one Topping
     * const topping = await prisma.topping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToppingUpdateArgs>(args: SelectSubset<T, ToppingUpdateArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Toppings.
     * @param {ToppingDeleteManyArgs} args - Arguments to filter Toppings to delete.
     * @example
     * // Delete a few Toppings
     * const { count } = await prisma.topping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToppingDeleteManyArgs>(args?: SelectSubset<T, ToppingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Toppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Toppings
     * const topping = await prisma.topping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToppingUpdateManyArgs>(args: SelectSubset<T, ToppingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topping.
     * @param {ToppingUpsertArgs} args - Arguments to update or create a Topping.
     * @example
     * // Update or create a Topping
     * const topping = await prisma.topping.upsert({
     *   create: {
     *     // ... data to create a Topping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topping we want to update
     *   }
     * })
     */
    upsert<T extends ToppingUpsertArgs>(args: SelectSubset<T, ToppingUpsertArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Toppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingCountArgs} args - Arguments to filter Toppings to count.
     * @example
     * // Count the number of Toppings
     * const count = await prisma.topping.count({
     *   where: {
     *     // ... the filter for the Toppings we want to count
     *   }
     * })
    **/
    count<T extends ToppingCountArgs>(
      args?: Subset<T, ToppingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToppingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToppingAggregateArgs>(args: Subset<T, ToppingAggregateArgs>): Prisma.PrismaPromise<GetToppingAggregateType<T>>

    /**
     * Group by Topping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToppingGroupByArgs} args - Group by arguments.
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
      T extends ToppingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToppingGroupByArgs['orderBy'] }
        : { orderBy?: ToppingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToppingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToppingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topping model
   */
  readonly fields: ToppingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToppingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Topping$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Topping$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findMany"> | Null>
    pizzas<T extends Topping$pizzasArgs<ExtArgs> = {}>(args?: Subset<T, Topping$pizzasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PizzaToppingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topping model
   */ 
  interface ToppingFieldRefs {
    readonly id: FieldRef<"Topping", 'Int'>
    readonly name: FieldRef<"Topping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topping findUnique
   */
  export type ToppingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping findUniqueOrThrow
   */
  export type ToppingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping findFirst
   */
  export type ToppingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Toppings.
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Toppings.
     */
    distinct?: ToppingScalarFieldEnum | ToppingScalarFieldEnum[]
  }

  /**
   * Topping findFirstOrThrow
   */
  export type ToppingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Topping to fetch.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Toppings.
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Toppings.
     */
    distinct?: ToppingScalarFieldEnum | ToppingScalarFieldEnum[]
  }

  /**
   * Topping findMany
   */
  export type ToppingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter, which Toppings to fetch.
     */
    where?: ToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Toppings to fetch.
     */
    orderBy?: ToppingOrderByWithRelationInput | ToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Toppings.
     */
    cursor?: ToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Toppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Toppings.
     */
    skip?: number
    distinct?: ToppingScalarFieldEnum | ToppingScalarFieldEnum[]
  }

  /**
   * Topping create
   */
  export type ToppingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * The data needed to create a Topping.
     */
    data: XOR<ToppingCreateInput, ToppingUncheckedCreateInput>
  }

  /**
   * Topping createMany
   */
  export type ToppingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Toppings.
     */
    data: ToppingCreateManyInput | ToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topping createManyAndReturn
   */
  export type ToppingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Toppings.
     */
    data: ToppingCreateManyInput | ToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topping update
   */
  export type ToppingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * The data needed to update a Topping.
     */
    data: XOR<ToppingUpdateInput, ToppingUncheckedUpdateInput>
    /**
     * Choose, which Topping to update.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping updateMany
   */
  export type ToppingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Toppings.
     */
    data: XOR<ToppingUpdateManyMutationInput, ToppingUncheckedUpdateManyInput>
    /**
     * Filter which Toppings to update
     */
    where?: ToppingWhereInput
  }

  /**
   * Topping upsert
   */
  export type ToppingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * The filter to search for the Topping to update in case it exists.
     */
    where: ToppingWhereUniqueInput
    /**
     * In case the Topping found by the `where` argument doesn't exist, create a new Topping with this data.
     */
    create: XOR<ToppingCreateInput, ToppingUncheckedCreateInput>
    /**
     * In case the Topping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToppingUpdateInput, ToppingUncheckedUpdateInput>
  }

  /**
   * Topping delete
   */
  export type ToppingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
    /**
     * Filter which Topping to delete.
     */
    where: ToppingWhereUniqueInput
  }

  /**
   * Topping deleteMany
   */
  export type ToppingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Toppings to delete
     */
    where?: ToppingWhereInput
  }

  /**
   * Topping.orders
   */
  export type Topping$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    where?: OrderToppingWhereInput
    orderBy?: OrderToppingOrderByWithRelationInput | OrderToppingOrderByWithRelationInput[]
    cursor?: OrderToppingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderToppingScalarFieldEnum | OrderToppingScalarFieldEnum[]
  }

  /**
   * Topping.pizzas
   */
  export type Topping$pizzasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PizzaTopping
     */
    select?: PizzaToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PizzaToppingInclude<ExtArgs> | null
    where?: PizzaToppingWhereInput
    orderBy?: PizzaToppingOrderByWithRelationInput | PizzaToppingOrderByWithRelationInput[]
    cursor?: PizzaToppingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PizzaToppingScalarFieldEnum | PizzaToppingScalarFieldEnum[]
  }

  /**
   * Topping without action
   */
  export type ToppingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topping
     */
    select?: ToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToppingInclude<ExtArgs> | null
  }


  /**
   * Model OrderTopping
   */

  export type AggregateOrderTopping = {
    _count: OrderToppingCountAggregateOutputType | null
    _avg: OrderToppingAvgAggregateOutputType | null
    _sum: OrderToppingSumAggregateOutputType | null
    _min: OrderToppingMinAggregateOutputType | null
    _max: OrderToppingMaxAggregateOutputType | null
  }

  export type OrderToppingAvgAggregateOutputType = {
    orderId: number | null
    toppingId: number | null
  }

  export type OrderToppingSumAggregateOutputType = {
    orderId: number | null
    toppingId: number | null
  }

  export type OrderToppingMinAggregateOutputType = {
    orderId: number | null
    toppingId: number | null
  }

  export type OrderToppingMaxAggregateOutputType = {
    orderId: number | null
    toppingId: number | null
  }

  export type OrderToppingCountAggregateOutputType = {
    orderId: number
    toppingId: number
    _all: number
  }


  export type OrderToppingAvgAggregateInputType = {
    orderId?: true
    toppingId?: true
  }

  export type OrderToppingSumAggregateInputType = {
    orderId?: true
    toppingId?: true
  }

  export type OrderToppingMinAggregateInputType = {
    orderId?: true
    toppingId?: true
  }

  export type OrderToppingMaxAggregateInputType = {
    orderId?: true
    toppingId?: true
  }

  export type OrderToppingCountAggregateInputType = {
    orderId?: true
    toppingId?: true
    _all?: true
  }

  export type OrderToppingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderTopping to aggregate.
     */
    where?: OrderToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderToppings to fetch.
     */
    orderBy?: OrderToppingOrderByWithRelationInput | OrderToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderToppings
    **/
    _count?: true | OrderToppingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderToppingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderToppingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderToppingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderToppingMaxAggregateInputType
  }

  export type GetOrderToppingAggregateType<T extends OrderToppingAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderTopping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderTopping[P]>
      : GetScalarType<T[P], AggregateOrderTopping[P]>
  }




  export type OrderToppingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderToppingWhereInput
    orderBy?: OrderToppingOrderByWithAggregationInput | OrderToppingOrderByWithAggregationInput[]
    by: OrderToppingScalarFieldEnum[] | OrderToppingScalarFieldEnum
    having?: OrderToppingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderToppingCountAggregateInputType | true
    _avg?: OrderToppingAvgAggregateInputType
    _sum?: OrderToppingSumAggregateInputType
    _min?: OrderToppingMinAggregateInputType
    _max?: OrderToppingMaxAggregateInputType
  }

  export type OrderToppingGroupByOutputType = {
    orderId: number
    toppingId: number
    _count: OrderToppingCountAggregateOutputType | null
    _avg: OrderToppingAvgAggregateOutputType | null
    _sum: OrderToppingSumAggregateOutputType | null
    _min: OrderToppingMinAggregateOutputType | null
    _max: OrderToppingMaxAggregateOutputType | null
  }

  type GetOrderToppingGroupByPayload<T extends OrderToppingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderToppingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderToppingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderToppingGroupByOutputType[P]>
            : GetScalarType<T[P], OrderToppingGroupByOutputType[P]>
        }
      >
    >


  export type OrderToppingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    toppingId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderTopping"]>

  export type OrderToppingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    toppingId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderTopping"]>

  export type OrderToppingSelectScalar = {
    orderId?: boolean
    toppingId?: boolean
  }

  export type OrderToppingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }
  export type OrderToppingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    topping?: boolean | ToppingDefaultArgs<ExtArgs>
  }

  export type $OrderToppingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderTopping"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      topping: Prisma.$ToppingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: number
      toppingId: number
    }, ExtArgs["result"]["orderTopping"]>
    composites: {}
  }

  type OrderToppingGetPayload<S extends boolean | null | undefined | OrderToppingDefaultArgs> = $Result.GetResult<Prisma.$OrderToppingPayload, S>

  type OrderToppingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderToppingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderToppingCountAggregateInputType | true
    }

  export interface OrderToppingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderTopping'], meta: { name: 'OrderTopping' } }
    /**
     * Find zero or one OrderTopping that matches the filter.
     * @param {OrderToppingFindUniqueArgs} args - Arguments to find a OrderTopping
     * @example
     * // Get one OrderTopping
     * const orderTopping = await prisma.orderTopping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderToppingFindUniqueArgs>(args: SelectSubset<T, OrderToppingFindUniqueArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderTopping that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderToppingFindUniqueOrThrowArgs} args - Arguments to find a OrderTopping
     * @example
     * // Get one OrderTopping
     * const orderTopping = await prisma.orderTopping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderToppingFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderToppingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderTopping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingFindFirstArgs} args - Arguments to find a OrderTopping
     * @example
     * // Get one OrderTopping
     * const orderTopping = await prisma.orderTopping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderToppingFindFirstArgs>(args?: SelectSubset<T, OrderToppingFindFirstArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderTopping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingFindFirstOrThrowArgs} args - Arguments to find a OrderTopping
     * @example
     * // Get one OrderTopping
     * const orderTopping = await prisma.orderTopping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderToppingFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderToppingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderToppings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderToppings
     * const orderToppings = await prisma.orderTopping.findMany()
     * 
     * // Get first 10 OrderToppings
     * const orderToppings = await prisma.orderTopping.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderToppingWithOrderIdOnly = await prisma.orderTopping.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderToppingFindManyArgs>(args?: SelectSubset<T, OrderToppingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderTopping.
     * @param {OrderToppingCreateArgs} args - Arguments to create a OrderTopping.
     * @example
     * // Create one OrderTopping
     * const OrderTopping = await prisma.orderTopping.create({
     *   data: {
     *     // ... data to create a OrderTopping
     *   }
     * })
     * 
     */
    create<T extends OrderToppingCreateArgs>(args: SelectSubset<T, OrderToppingCreateArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderToppings.
     * @param {OrderToppingCreateManyArgs} args - Arguments to create many OrderToppings.
     * @example
     * // Create many OrderToppings
     * const orderTopping = await prisma.orderTopping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderToppingCreateManyArgs>(args?: SelectSubset<T, OrderToppingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderToppings and returns the data saved in the database.
     * @param {OrderToppingCreateManyAndReturnArgs} args - Arguments to create many OrderToppings.
     * @example
     * // Create many OrderToppings
     * const orderTopping = await prisma.orderTopping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderToppings and only return the `orderId`
     * const orderToppingWithOrderIdOnly = await prisma.orderTopping.createManyAndReturn({ 
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderToppingCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderToppingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderTopping.
     * @param {OrderToppingDeleteArgs} args - Arguments to delete one OrderTopping.
     * @example
     * // Delete one OrderTopping
     * const OrderTopping = await prisma.orderTopping.delete({
     *   where: {
     *     // ... filter to delete one OrderTopping
     *   }
     * })
     * 
     */
    delete<T extends OrderToppingDeleteArgs>(args: SelectSubset<T, OrderToppingDeleteArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderTopping.
     * @param {OrderToppingUpdateArgs} args - Arguments to update one OrderTopping.
     * @example
     * // Update one OrderTopping
     * const orderTopping = await prisma.orderTopping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderToppingUpdateArgs>(args: SelectSubset<T, OrderToppingUpdateArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderToppings.
     * @param {OrderToppingDeleteManyArgs} args - Arguments to filter OrderToppings to delete.
     * @example
     * // Delete a few OrderToppings
     * const { count } = await prisma.orderTopping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderToppingDeleteManyArgs>(args?: SelectSubset<T, OrderToppingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderToppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderToppings
     * const orderTopping = await prisma.orderTopping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderToppingUpdateManyArgs>(args: SelectSubset<T, OrderToppingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderTopping.
     * @param {OrderToppingUpsertArgs} args - Arguments to update or create a OrderTopping.
     * @example
     * // Update or create a OrderTopping
     * const orderTopping = await prisma.orderTopping.upsert({
     *   create: {
     *     // ... data to create a OrderTopping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderTopping we want to update
     *   }
     * })
     */
    upsert<T extends OrderToppingUpsertArgs>(args: SelectSubset<T, OrderToppingUpsertArgs<ExtArgs>>): Prisma__OrderToppingClient<$Result.GetResult<Prisma.$OrderToppingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderToppings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingCountArgs} args - Arguments to filter OrderToppings to count.
     * @example
     * // Count the number of OrderToppings
     * const count = await prisma.orderTopping.count({
     *   where: {
     *     // ... the filter for the OrderToppings we want to count
     *   }
     * })
    **/
    count<T extends OrderToppingCountArgs>(
      args?: Subset<T, OrderToppingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderToppingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderTopping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderToppingAggregateArgs>(args: Subset<T, OrderToppingAggregateArgs>): Prisma.PrismaPromise<GetOrderToppingAggregateType<T>>

    /**
     * Group by OrderTopping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderToppingGroupByArgs} args - Group by arguments.
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
      T extends OrderToppingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderToppingGroupByArgs['orderBy'] }
        : { orderBy?: OrderToppingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderToppingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderToppingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderTopping model
   */
  readonly fields: OrderToppingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderTopping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderToppingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    topping<T extends ToppingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToppingDefaultArgs<ExtArgs>>): Prisma__ToppingClient<$Result.GetResult<Prisma.$ToppingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderTopping model
   */ 
  interface OrderToppingFieldRefs {
    readonly orderId: FieldRef<"OrderTopping", 'Int'>
    readonly toppingId: FieldRef<"OrderTopping", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderTopping findUnique
   */
  export type OrderToppingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * Filter, which OrderTopping to fetch.
     */
    where: OrderToppingWhereUniqueInput
  }

  /**
   * OrderTopping findUniqueOrThrow
   */
  export type OrderToppingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * Filter, which OrderTopping to fetch.
     */
    where: OrderToppingWhereUniqueInput
  }

  /**
   * OrderTopping findFirst
   */
  export type OrderToppingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * Filter, which OrderTopping to fetch.
     */
    where?: OrderToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderToppings to fetch.
     */
    orderBy?: OrderToppingOrderByWithRelationInput | OrderToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderToppings.
     */
    cursor?: OrderToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderToppings.
     */
    distinct?: OrderToppingScalarFieldEnum | OrderToppingScalarFieldEnum[]
  }

  /**
   * OrderTopping findFirstOrThrow
   */
  export type OrderToppingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * Filter, which OrderTopping to fetch.
     */
    where?: OrderToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderToppings to fetch.
     */
    orderBy?: OrderToppingOrderByWithRelationInput | OrderToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderToppings.
     */
    cursor?: OrderToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderToppings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderToppings.
     */
    distinct?: OrderToppingScalarFieldEnum | OrderToppingScalarFieldEnum[]
  }

  /**
   * OrderTopping findMany
   */
  export type OrderToppingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * Filter, which OrderToppings to fetch.
     */
    where?: OrderToppingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderToppings to fetch.
     */
    orderBy?: OrderToppingOrderByWithRelationInput | OrderToppingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderToppings.
     */
    cursor?: OrderToppingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderToppings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderToppings.
     */
    skip?: number
    distinct?: OrderToppingScalarFieldEnum | OrderToppingScalarFieldEnum[]
  }

  /**
   * OrderTopping create
   */
  export type OrderToppingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderTopping.
     */
    data: XOR<OrderToppingCreateInput, OrderToppingUncheckedCreateInput>
  }

  /**
   * OrderTopping createMany
   */
  export type OrderToppingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderToppings.
     */
    data: OrderToppingCreateManyInput | OrderToppingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderTopping createManyAndReturn
   */
  export type OrderToppingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderToppings.
     */
    data: OrderToppingCreateManyInput | OrderToppingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderTopping update
   */
  export type OrderToppingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderTopping.
     */
    data: XOR<OrderToppingUpdateInput, OrderToppingUncheckedUpdateInput>
    /**
     * Choose, which OrderTopping to update.
     */
    where: OrderToppingWhereUniqueInput
  }

  /**
   * OrderTopping updateMany
   */
  export type OrderToppingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderToppings.
     */
    data: XOR<OrderToppingUpdateManyMutationInput, OrderToppingUncheckedUpdateManyInput>
    /**
     * Filter which OrderToppings to update
     */
    where?: OrderToppingWhereInput
  }

  /**
   * OrderTopping upsert
   */
  export type OrderToppingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderTopping to update in case it exists.
     */
    where: OrderToppingWhereUniqueInput
    /**
     * In case the OrderTopping found by the `where` argument doesn't exist, create a new OrderTopping with this data.
     */
    create: XOR<OrderToppingCreateInput, OrderToppingUncheckedCreateInput>
    /**
     * In case the OrderTopping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderToppingUpdateInput, OrderToppingUncheckedUpdateInput>
  }

  /**
   * OrderTopping delete
   */
  export type OrderToppingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
    /**
     * Filter which OrderTopping to delete.
     */
    where: OrderToppingWhereUniqueInput
  }

  /**
   * OrderTopping deleteMany
   */
  export type OrderToppingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderToppings to delete
     */
    where?: OrderToppingWhereInput
  }

  /**
   * OrderTopping without action
   */
  export type OrderToppingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderTopping
     */
    select?: OrderToppingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderToppingInclude<ExtArgs> | null
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
    password: 'password',
    restaurantId: 'restaurantId',
    location: 'location',
    phoneNumber: 'phoneNumber',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    restaurantId: 'restaurantId'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    action: 'action',
    subject: 'subject'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    superAdminId: 'superAdminId',
    imgUrl: 'imgUrl',
    location: 'location'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const PizzaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imgurl: 'imgurl',
    price: 'price',
    restaurantId: 'restaurantId'
  };

  export type PizzaScalarFieldEnum = (typeof PizzaScalarFieldEnum)[keyof typeof PizzaScalarFieldEnum]


  export const PizzaToppingScalarFieldEnum: {
    pizzaId: 'pizzaId',
    toppingId: 'toppingId'
  };

  export type PizzaToppingScalarFieldEnum = (typeof PizzaToppingScalarFieldEnum)[keyof typeof PizzaToppingScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    pizzaId: 'pizzaId',
    status: 'status',
    createdAt: 'createdAt',
    restaurantId: 'restaurantId',
    quantity: 'quantity'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ToppingScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ToppingScalarFieldEnum = (typeof ToppingScalarFieldEnum)[keyof typeof ToppingScalarFieldEnum]


  export const OrderToppingScalarFieldEnum: {
    orderId: 'orderId',
    toppingId: 'toppingId'
  };

  export type OrderToppingScalarFieldEnum = (typeof OrderToppingScalarFieldEnum)[keyof typeof OrderToppingScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    restaurantId?: IntNullableFilter<"User"> | number | null
    location?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    orders?: OrderListRelationFilter
    superAdminRestaurants?: RestaurantListRelationFilter
    Restaurant_User_restaurantIdToRestaurant?: XOR<RestaurantNullableRelationFilter, RestaurantWhereInput> | null
    roles?: UserRoleListRelationFilter
    role?: RoleListRelationFilter
    Restaurant_KitchenAdmin?: RestaurantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    orders?: OrderOrderByRelationAggregateInput
    superAdminRestaurants?: RestaurantOrderByRelationAggregateInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantOrderByWithRelationInput
    roles?: UserRoleOrderByRelationAggregateInput
    role?: RoleOrderByRelationAggregateInput
    Restaurant_KitchenAdmin?: RestaurantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    restaurantId?: IntNullableFilter<"User"> | number | null
    location?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    orders?: OrderListRelationFilter
    superAdminRestaurants?: RestaurantListRelationFilter
    Restaurant_User_restaurantIdToRestaurant?: XOR<RestaurantNullableRelationFilter, RestaurantWhereInput> | null
    roles?: UserRoleListRelationFilter
    role?: RoleListRelationFilter
    Restaurant_KitchenAdmin?: RestaurantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    restaurantId?: IntNullableWithAggregatesFilter<"User"> | number | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    restaurantId?: IntFilter<"Role"> | number
    permissions?: RolePermissionListRelationFilter
    users?: UserRoleListRelationFilter
    restaurant?: XOR<RestaurantNullableRelationFilter, RestaurantWhereInput> | null
    roles?: RoleListRelationFilter
    parentRole?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    User?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
    permissions?: RolePermissionOrderByRelationAggregateInput
    users?: UserRoleOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
    roles?: RoleOrderByRelationAggregateInput
    parentRole?: RoleOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    restaurantId?: IntFilter<"Role"> | number
    permissions?: RolePermissionListRelationFilter
    users?: UserRoleListRelationFilter
    restaurant?: XOR<RestaurantNullableRelationFilter, RestaurantWhereInput> | null
    roles?: RoleListRelationFilter
    parentRole?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
    User?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
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
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    restaurantId?: IntWithAggregatesFilter<"Role"> | number
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    action?: StringFilter<"Permission"> | string
    subject?: StringFilter<"Permission"> | string
    roles?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    roles?: RolePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    action?: StringFilter<"Permission"> | string
    subject?: StringFilter<"Permission"> | string
    roles?: RolePermissionListRelationFilter
  }, "id">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    action?: StringWithAggregatesFilter<"Permission"> | string
    subject?: StringWithAggregatesFilter<"Permission"> | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
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
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    permission?: PermissionOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermission"> | number
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    name?: StringFilter<"Restaurant"> | string
    superAdminId?: IntNullableFilter<"Restaurant"> | number | null
    imgUrl?: StringFilter<"Restaurant"> | string
    location?: StringFilter<"Restaurant"> | string
    orders?: OrderListRelationFilter
    pizzas?: PizzaListRelationFilter
    superAdmin?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    roles?: RoleListRelationFilter
    User_KitchenAdmin?: UserListRelationFilter
    User?: UserListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    superAdminId?: SortOrderInput | SortOrder
    imgUrl?: SortOrder
    location?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    pizzas?: PizzaOrderByRelationAggregateInput
    superAdmin?: UserOrderByWithRelationInput
    roles?: RoleOrderByRelationAggregateInput
    User_KitchenAdmin?: UserOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    superAdminId?: IntNullableFilter<"Restaurant"> | number | null
    imgUrl?: StringFilter<"Restaurant"> | string
    location?: StringFilter<"Restaurant"> | string
    orders?: OrderListRelationFilter
    pizzas?: PizzaListRelationFilter
    superAdmin?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    roles?: RoleListRelationFilter
    User_KitchenAdmin?: UserListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    superAdminId?: SortOrderInput | SortOrder
    imgUrl?: SortOrder
    location?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurant"> | number
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    superAdminId?: IntNullableWithAggregatesFilter<"Restaurant"> | number | null
    imgUrl?: StringWithAggregatesFilter<"Restaurant"> | string
    location?: StringWithAggregatesFilter<"Restaurant"> | string
  }

  export type PizzaWhereInput = {
    AND?: PizzaWhereInput | PizzaWhereInput[]
    OR?: PizzaWhereInput[]
    NOT?: PizzaWhereInput | PizzaWhereInput[]
    id?: IntFilter<"Pizza"> | number
    name?: StringFilter<"Pizza"> | string
    imgurl?: StringFilter<"Pizza"> | string
    price?: FloatFilter<"Pizza"> | number
    restaurantId?: IntFilter<"Pizza"> | number
    Order?: OrderListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    toppings?: PizzaToppingListRelationFilter
  }

  export type PizzaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imgurl?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    Order?: OrderOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
    toppings?: PizzaToppingOrderByRelationAggregateInput
  }

  export type PizzaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PizzaWhereInput | PizzaWhereInput[]
    OR?: PizzaWhereInput[]
    NOT?: PizzaWhereInput | PizzaWhereInput[]
    name?: StringFilter<"Pizza"> | string
    imgurl?: StringFilter<"Pizza"> | string
    price?: FloatFilter<"Pizza"> | number
    restaurantId?: IntFilter<"Pizza"> | number
    Order?: OrderListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    toppings?: PizzaToppingListRelationFilter
  }, "id">

  export type PizzaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imgurl?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    _count?: PizzaCountOrderByAggregateInput
    _avg?: PizzaAvgOrderByAggregateInput
    _max?: PizzaMaxOrderByAggregateInput
    _min?: PizzaMinOrderByAggregateInput
    _sum?: PizzaSumOrderByAggregateInput
  }

  export type PizzaScalarWhereWithAggregatesInput = {
    AND?: PizzaScalarWhereWithAggregatesInput | PizzaScalarWhereWithAggregatesInput[]
    OR?: PizzaScalarWhereWithAggregatesInput[]
    NOT?: PizzaScalarWhereWithAggregatesInput | PizzaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pizza"> | number
    name?: StringWithAggregatesFilter<"Pizza"> | string
    imgurl?: StringWithAggregatesFilter<"Pizza"> | string
    price?: FloatWithAggregatesFilter<"Pizza"> | number
    restaurantId?: IntWithAggregatesFilter<"Pizza"> | number
  }

  export type PizzaToppingWhereInput = {
    AND?: PizzaToppingWhereInput | PizzaToppingWhereInput[]
    OR?: PizzaToppingWhereInput[]
    NOT?: PizzaToppingWhereInput | PizzaToppingWhereInput[]
    pizzaId?: IntFilter<"PizzaTopping"> | number
    toppingId?: IntFilter<"PizzaTopping"> | number
    pizza?: XOR<PizzaRelationFilter, PizzaWhereInput>
    topping?: XOR<ToppingRelationFilter, ToppingWhereInput>
  }

  export type PizzaToppingOrderByWithRelationInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
    pizza?: PizzaOrderByWithRelationInput
    topping?: ToppingOrderByWithRelationInput
  }

  export type PizzaToppingWhereUniqueInput = Prisma.AtLeast<{
    pizzaId_toppingId?: PizzaToppingPizzaIdToppingIdCompoundUniqueInput
    AND?: PizzaToppingWhereInput | PizzaToppingWhereInput[]
    OR?: PizzaToppingWhereInput[]
    NOT?: PizzaToppingWhereInput | PizzaToppingWhereInput[]
    pizzaId?: IntFilter<"PizzaTopping"> | number
    toppingId?: IntFilter<"PizzaTopping"> | number
    pizza?: XOR<PizzaRelationFilter, PizzaWhereInput>
    topping?: XOR<ToppingRelationFilter, ToppingWhereInput>
  }, "pizzaId_toppingId">

  export type PizzaToppingOrderByWithAggregationInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
    _count?: PizzaToppingCountOrderByAggregateInput
    _avg?: PizzaToppingAvgOrderByAggregateInput
    _max?: PizzaToppingMaxOrderByAggregateInput
    _min?: PizzaToppingMinOrderByAggregateInput
    _sum?: PizzaToppingSumOrderByAggregateInput
  }

  export type PizzaToppingScalarWhereWithAggregatesInput = {
    AND?: PizzaToppingScalarWhereWithAggregatesInput | PizzaToppingScalarWhereWithAggregatesInput[]
    OR?: PizzaToppingScalarWhereWithAggregatesInput[]
    NOT?: PizzaToppingScalarWhereWithAggregatesInput | PizzaToppingScalarWhereWithAggregatesInput[]
    pizzaId?: IntWithAggregatesFilter<"PizzaTopping"> | number
    toppingId?: IntWithAggregatesFilter<"PizzaTopping"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    pizzaId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    restaurantId?: IntFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    customer?: XOR<UserRelationFilter, UserWhereInput>
    Pizza?: XOR<PizzaRelationFilter, PizzaWhereInput>
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    toppings?: OrderToppingListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
    customer?: UserOrderByWithRelationInput
    Pizza?: PizzaOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    toppings?: OrderToppingOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: IntFilter<"Order"> | number
    pizzaId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    restaurantId?: IntFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
    customer?: XOR<UserRelationFilter, UserWhereInput>
    Pizza?: XOR<PizzaRelationFilter, PizzaWhereInput>
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    toppings?: OrderToppingListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    customerId?: IntWithAggregatesFilter<"Order"> | number
    pizzaId?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    restaurantId?: IntWithAggregatesFilter<"Order"> | number
    quantity?: IntWithAggregatesFilter<"Order"> | number
  }

  export type ToppingWhereInput = {
    AND?: ToppingWhereInput | ToppingWhereInput[]
    OR?: ToppingWhereInput[]
    NOT?: ToppingWhereInput | ToppingWhereInput[]
    id?: IntFilter<"Topping"> | number
    name?: StringFilter<"Topping"> | string
    orders?: OrderToppingListRelationFilter
    pizzas?: PizzaToppingListRelationFilter
  }

  export type ToppingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    orders?: OrderToppingOrderByRelationAggregateInput
    pizzas?: PizzaToppingOrderByRelationAggregateInput
  }

  export type ToppingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ToppingWhereInput | ToppingWhereInput[]
    OR?: ToppingWhereInput[]
    NOT?: ToppingWhereInput | ToppingWhereInput[]
    name?: StringFilter<"Topping"> | string
    orders?: OrderToppingListRelationFilter
    pizzas?: PizzaToppingListRelationFilter
  }, "id">

  export type ToppingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ToppingCountOrderByAggregateInput
    _avg?: ToppingAvgOrderByAggregateInput
    _max?: ToppingMaxOrderByAggregateInput
    _min?: ToppingMinOrderByAggregateInput
    _sum?: ToppingSumOrderByAggregateInput
  }

  export type ToppingScalarWhereWithAggregatesInput = {
    AND?: ToppingScalarWhereWithAggregatesInput | ToppingScalarWhereWithAggregatesInput[]
    OR?: ToppingScalarWhereWithAggregatesInput[]
    NOT?: ToppingScalarWhereWithAggregatesInput | ToppingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Topping"> | number
    name?: StringWithAggregatesFilter<"Topping"> | string
  }

  export type OrderToppingWhereInput = {
    AND?: OrderToppingWhereInput | OrderToppingWhereInput[]
    OR?: OrderToppingWhereInput[]
    NOT?: OrderToppingWhereInput | OrderToppingWhereInput[]
    orderId?: IntFilter<"OrderTopping"> | number
    toppingId?: IntFilter<"OrderTopping"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    topping?: XOR<ToppingRelationFilter, ToppingWhereInput>
  }

  export type OrderToppingOrderByWithRelationInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
    order?: OrderOrderByWithRelationInput
    topping?: ToppingOrderByWithRelationInput
  }

  export type OrderToppingWhereUniqueInput = Prisma.AtLeast<{
    orderId_toppingId?: OrderToppingOrderIdToppingIdCompoundUniqueInput
    AND?: OrderToppingWhereInput | OrderToppingWhereInput[]
    OR?: OrderToppingWhereInput[]
    NOT?: OrderToppingWhereInput | OrderToppingWhereInput[]
    orderId?: IntFilter<"OrderTopping"> | number
    toppingId?: IntFilter<"OrderTopping"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    topping?: XOR<ToppingRelationFilter, ToppingWhereInput>
  }, "orderId_toppingId">

  export type OrderToppingOrderByWithAggregationInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
    _count?: OrderToppingCountOrderByAggregateInput
    _avg?: OrderToppingAvgOrderByAggregateInput
    _max?: OrderToppingMaxOrderByAggregateInput
    _min?: OrderToppingMinOrderByAggregateInput
    _sum?: OrderToppingSumOrderByAggregateInput
  }

  export type OrderToppingScalarWhereWithAggregatesInput = {
    AND?: OrderToppingScalarWhereWithAggregatesInput | OrderToppingScalarWhereWithAggregatesInput[]
    OR?: OrderToppingScalarWhereWithAggregatesInput[]
    NOT?: OrderToppingScalarWhereWithAggregatesInput | OrderToppingScalarWhereWithAggregatesInput[]
    orderId?: IntWithAggregatesFilter<"OrderTopping"> | number
    toppingId?: IntWithAggregatesFilter<"OrderTopping"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantCreateNestedManyWithoutSuperAdminInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantCreateNestedOneWithoutUserInput
    roles?: UserRoleCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    role?: RoleUncheckedCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUpdateManyWithoutSuperAdminNestedInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantUpdateOneWithoutUserNestedInput
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    role?: RoleUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    role?: RoleUncheckedUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserRoleCreateNestedManyWithoutRoleInput
    restaurant?: RestaurantCreateNestedOneWithoutRolesInput
    roles?: RoleCreateNestedManyWithoutParentRoleInput
    parentRole?: RoleCreateNestedOneWithoutRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    roles?: RoleUncheckedCreateNestedManyWithoutParentRoleInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    restaurant?: RestaurantUpdateOneWithoutRolesNestedInput
    roles?: RoleUpdateManyWithoutParentRoleNestedInput
    parentRole?: RoleUpdateOneWithoutRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    roles?: RoleUncheckedUpdateManyWithoutParentRoleNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionCreateInput = {
    action: string
    subject: string
    roles?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    action: string
    subject: string
    roles?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    roles?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    roles?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    action: string
    subject: string
  }

  export type PermissionUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateInput = {
    role: RoleCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: number
    roleId: number
  }

  export type UserRoleUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyInput = {
    userId: number
    roleId: number
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionCreateInput = {
    permission: PermissionCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutPermissionsInput
  }

  export type RolePermissionUncheckedCreateInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionUpdateInput = {
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionCreateManyInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionUpdateManyMutationInput = {

  }

  export type RolePermissionUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RestaurantCreateInput = {
    name: string
    imgUrl: string
    location: string
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaCreateNestedManyWithoutRestaurantInput
    superAdmin?: UserCreateNestedOneWithoutSuperAdminRestaurantsInput
    roles?: RoleCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaUncheckedCreateNestedManyWithoutRestaurantInput
    roles?: RoleUncheckedCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUpdateManyWithoutRestaurantNestedInput
    superAdmin?: UserUpdateOneWithoutSuperAdminRestaurantsNestedInput
    roles?: RoleUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUncheckedUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUncheckedUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
  }

  export type RestaurantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type PizzaCreateInput = {
    name: string
    imgurl: string
    price: number
    Order?: OrderCreateNestedManyWithoutPizzaInput
    restaurant: RestaurantCreateNestedOneWithoutPizzasInput
    toppings?: PizzaToppingCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUncheckedCreateInput = {
    id?: number
    name: string
    imgurl: string
    price: number
    restaurantId: number
    Order?: OrderUncheckedCreateNestedManyWithoutPizzaInput
    toppings?: PizzaToppingUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateManyWithoutPizzaNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutPizzasNestedInput
    toppings?: PizzaToppingUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutPizzaNestedInput
    toppings?: PizzaToppingUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaCreateManyInput = {
    id?: number
    name: string
    imgurl: string
    price: number
    restaurantId: number
  }

  export type PizzaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type PizzaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaToppingCreateInput = {
    pizza: PizzaCreateNestedOneWithoutToppingsInput
    topping: ToppingCreateNestedOneWithoutPizzasInput
  }

  export type PizzaToppingUncheckedCreateInput = {
    pizzaId: number
    toppingId: number
  }

  export type PizzaToppingUpdateInput = {
    pizza?: PizzaUpdateOneRequiredWithoutToppingsNestedInput
    topping?: ToppingUpdateOneRequiredWithoutPizzasNestedInput
  }

  export type PizzaToppingUncheckedUpdateInput = {
    pizzaId?: IntFieldUpdateOperationsInput | number
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaToppingCreateManyInput = {
    pizzaId: number
    toppingId: number
  }

  export type PizzaToppingUpdateManyMutationInput = {

  }

  export type PizzaToppingUncheckedUpdateManyInput = {
    pizzaId?: IntFieldUpdateOperationsInput | number
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
    customer: UserCreateNestedOneWithoutOrdersInput
    Pizza: PizzaCreateNestedOneWithoutOrderInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    toppings?: OrderToppingCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customerId: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
    toppings?: OrderToppingUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    customer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Pizza?: PizzaUpdateOneRequiredWithoutOrderNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    toppings?: OrderToppingUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    toppings?: OrderToppingUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    customerId: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
  }

  export type OrderUpdateManyMutationInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ToppingCreateInput = {
    name: string
    orders?: OrderToppingCreateNestedManyWithoutToppingInput
    pizzas?: PizzaToppingCreateNestedManyWithoutToppingInput
  }

  export type ToppingUncheckedCreateInput = {
    id?: number
    name: string
    orders?: OrderToppingUncheckedCreateNestedManyWithoutToppingInput
    pizzas?: PizzaToppingUncheckedCreateNestedManyWithoutToppingInput
  }

  export type ToppingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderToppingUpdateManyWithoutToppingNestedInput
    pizzas?: PizzaToppingUpdateManyWithoutToppingNestedInput
  }

  export type ToppingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderToppingUncheckedUpdateManyWithoutToppingNestedInput
    pizzas?: PizzaToppingUncheckedUpdateManyWithoutToppingNestedInput
  }

  export type ToppingCreateManyInput = {
    id?: number
    name: string
  }

  export type ToppingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ToppingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrderToppingCreateInput = {
    order: OrderCreateNestedOneWithoutToppingsInput
    topping: ToppingCreateNestedOneWithoutOrdersInput
  }

  export type OrderToppingUncheckedCreateInput = {
    orderId: number
    toppingId: number
  }

  export type OrderToppingUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutToppingsNestedInput
    topping?: ToppingUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderToppingUncheckedUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderToppingCreateManyInput = {
    orderId: number
    toppingId: number
  }

  export type OrderToppingUpdateManyMutationInput = {

  }

  export type OrderToppingUncheckedUpdateManyInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    toppingId?: IntFieldUpdateOperationsInput | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type RestaurantListRelationFilter = {
    every?: RestaurantWhereInput
    some?: RestaurantWhereInput
    none?: RestaurantWhereInput
  }

  export type RestaurantNullableRelationFilter = {
    is?: RestaurantWhereInput | null
    isNot?: RestaurantWhereInput | null
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
    location?: SortOrder
    phoneNumber?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RoleNullableRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurantId?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
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

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    subject?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    subject?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    subject?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type PermissionRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type PizzaListRelationFilter = {
    every?: PizzaWhereInput
    some?: PizzaWhereInput
    none?: PizzaWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PizzaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    superAdminId?: SortOrder
    imgUrl?: SortOrder
    location?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    id?: SortOrder
    superAdminId?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    superAdminId?: SortOrder
    imgUrl?: SortOrder
    location?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    superAdminId?: SortOrder
    imgUrl?: SortOrder
    location?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    id?: SortOrder
    superAdminId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RestaurantRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type PizzaToppingListRelationFilter = {
    every?: PizzaToppingWhereInput
    some?: PizzaToppingWhereInput
    none?: PizzaToppingWhereInput
  }

  export type PizzaToppingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PizzaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgurl?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type PizzaAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type PizzaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgurl?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type PizzaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imgurl?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type PizzaSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PizzaRelationFilter = {
    is?: PizzaWhereInput
    isNot?: PizzaWhereInput
  }

  export type ToppingRelationFilter = {
    is?: ToppingWhereInput
    isNot?: ToppingWhereInput
  }

  export type PizzaToppingPizzaIdToppingIdCompoundUniqueInput = {
    pizzaId: number
    toppingId: number
  }

  export type PizzaToppingCountOrderByAggregateInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
  }

  export type PizzaToppingAvgOrderByAggregateInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
  }

  export type PizzaToppingMaxOrderByAggregateInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
  }

  export type PizzaToppingMinOrderByAggregateInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
  }

  export type PizzaToppingSumOrderByAggregateInput = {
    pizzaId?: SortOrder
    toppingId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderToppingListRelationFilter = {
    every?: OrderToppingWhereInput
    some?: OrderToppingWhereInput
    none?: OrderToppingWhereInput
  }

  export type OrderToppingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    pizzaId?: SortOrder
    restaurantId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ToppingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ToppingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ToppingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ToppingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ToppingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderToppingOrderIdToppingIdCompoundUniqueInput = {
    orderId: number
    toppingId: number
  }

  export type OrderToppingCountOrderByAggregateInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
  }

  export type OrderToppingAvgOrderByAggregateInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
  }

  export type OrderToppingMaxOrderByAggregateInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
  }

  export type OrderToppingMinOrderByAggregateInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
  }

  export type OrderToppingSumOrderByAggregateInput = {
    orderId?: SortOrder
    toppingId?: SortOrder
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RestaurantCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<RestaurantCreateWithoutSuperAdminInput, RestaurantUncheckedCreateWithoutSuperAdminInput> | RestaurantCreateWithoutSuperAdminInput[] | RestaurantUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutSuperAdminInput | RestaurantCreateOrConnectWithoutSuperAdminInput[]
    createMany?: RestaurantCreateManySuperAdminInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutUserInput = {
    create?: XOR<RestaurantCreateWithoutUserInput, RestaurantUncheckedCreateWithoutUserInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutUserInput
    connect?: RestaurantWhereUniqueInput
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RestaurantCreateNestedManyWithoutUser_KitchenAdminInput = {
    create?: XOR<RestaurantCreateWithoutUser_KitchenAdminInput, RestaurantUncheckedCreateWithoutUser_KitchenAdminInput> | RestaurantCreateWithoutUser_KitchenAdminInput[] | RestaurantUncheckedCreateWithoutUser_KitchenAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutUser_KitchenAdminInput | RestaurantCreateOrConnectWithoutUser_KitchenAdminInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<RestaurantCreateWithoutSuperAdminInput, RestaurantUncheckedCreateWithoutSuperAdminInput> | RestaurantCreateWithoutSuperAdminInput[] | RestaurantUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutSuperAdminInput | RestaurantCreateOrConnectWithoutSuperAdminInput[]
    createMany?: RestaurantCreateManySuperAdminInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput = {
    create?: XOR<RestaurantCreateWithoutUser_KitchenAdminInput, RestaurantUncheckedCreateWithoutUser_KitchenAdminInput> | RestaurantCreateWithoutUser_KitchenAdminInput[] | RestaurantUncheckedCreateWithoutUser_KitchenAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutUser_KitchenAdminInput | RestaurantCreateOrConnectWithoutUser_KitchenAdminInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<RestaurantCreateWithoutSuperAdminInput, RestaurantUncheckedCreateWithoutSuperAdminInput> | RestaurantCreateWithoutSuperAdminInput[] | RestaurantUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutSuperAdminInput | RestaurantCreateOrConnectWithoutSuperAdminInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutSuperAdminInput | RestaurantUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: RestaurantCreateManySuperAdminInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutSuperAdminInput | RestaurantUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutSuperAdminInput | RestaurantUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantUpdateOneWithoutUserNestedInput = {
    create?: XOR<RestaurantCreateWithoutUserInput, RestaurantUncheckedCreateWithoutUserInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutUserInput
    upsert?: RestaurantUpsertWithoutUserInput
    disconnect?: RestaurantWhereInput | boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutUserInput, RestaurantUpdateWithoutUserInput>, RestaurantUncheckedUpdateWithoutUserInput>
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

  export type RoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUserInput | RoleUpsertWithWhereUniqueWithoutUserInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUserInput | RoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUserInput | RoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput = {
    create?: XOR<RestaurantCreateWithoutUser_KitchenAdminInput, RestaurantUncheckedCreateWithoutUser_KitchenAdminInput> | RestaurantCreateWithoutUser_KitchenAdminInput[] | RestaurantUncheckedCreateWithoutUser_KitchenAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutUser_KitchenAdminInput | RestaurantCreateOrConnectWithoutUser_KitchenAdminInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutUser_KitchenAdminInput | RestaurantUpsertWithWhereUniqueWithoutUser_KitchenAdminInput[]
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutUser_KitchenAdminInput | RestaurantUpdateWithWhereUniqueWithoutUser_KitchenAdminInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutUser_KitchenAdminInput | RestaurantUpdateManyWithWhereWithoutUser_KitchenAdminInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<RestaurantCreateWithoutSuperAdminInput, RestaurantUncheckedCreateWithoutSuperAdminInput> | RestaurantCreateWithoutSuperAdminInput[] | RestaurantUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutSuperAdminInput | RestaurantCreateOrConnectWithoutSuperAdminInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutSuperAdminInput | RestaurantUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: RestaurantCreateManySuperAdminInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutSuperAdminInput | RestaurantUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutSuperAdminInput | RestaurantUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
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

  export type RoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUserInput | RoleUpsertWithWhereUniqueWithoutUserInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUserInput | RoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUserInput | RoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput = {
    create?: XOR<RestaurantCreateWithoutUser_KitchenAdminInput, RestaurantUncheckedCreateWithoutUser_KitchenAdminInput> | RestaurantCreateWithoutUser_KitchenAdminInput[] | RestaurantUncheckedCreateWithoutUser_KitchenAdminInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutUser_KitchenAdminInput | RestaurantCreateOrConnectWithoutUser_KitchenAdminInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutUser_KitchenAdminInput | RestaurantUpsertWithWhereUniqueWithoutUser_KitchenAdminInput[]
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutUser_KitchenAdminInput | RestaurantUpdateWithWhereUniqueWithoutUser_KitchenAdminInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutUser_KitchenAdminInput | RestaurantUpdateManyWithWhereWithoutUser_KitchenAdminInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutRolesInput = {
    create?: XOR<RestaurantCreateWithoutRolesInput, RestaurantUncheckedCreateWithoutRolesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutRolesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RoleCreateNestedManyWithoutParentRoleInput = {
    create?: XOR<RoleCreateWithoutParentRoleInput, RoleUncheckedCreateWithoutParentRoleInput> | RoleCreateWithoutParentRoleInput[] | RoleUncheckedCreateWithoutParentRoleInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutParentRoleInput | RoleCreateOrConnectWithoutParentRoleInput[]
    createMany?: RoleCreateManyParentRoleInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutRolesInput = {
    create?: XOR<RoleCreateWithoutRolesInput, RoleUncheckedCreateWithoutRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutParentRoleInput = {
    create?: XOR<RoleCreateWithoutParentRoleInput, RoleUncheckedCreateWithoutParentRoleInput> | RoleCreateWithoutParentRoleInput[] | RoleUncheckedCreateWithoutParentRoleInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutParentRoleInput | RoleCreateOrConnectWithoutParentRoleInput[]
    createMany?: RoleCreateManyParentRoleInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
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

  export type RestaurantUpdateOneWithoutRolesNestedInput = {
    create?: XOR<RestaurantCreateWithoutRolesInput, RestaurantUncheckedCreateWithoutRolesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutRolesInput
    upsert?: RestaurantUpsertWithoutRolesInput
    disconnect?: RestaurantWhereInput | boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutRolesInput, RestaurantUpdateWithoutRolesInput>, RestaurantUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateManyWithoutParentRoleNestedInput = {
    create?: XOR<RoleCreateWithoutParentRoleInput, RoleUncheckedCreateWithoutParentRoleInput> | RoleCreateWithoutParentRoleInput[] | RoleUncheckedCreateWithoutParentRoleInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutParentRoleInput | RoleCreateOrConnectWithoutParentRoleInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutParentRoleInput | RoleUpsertWithWhereUniqueWithoutParentRoleInput[]
    createMany?: RoleCreateManyParentRoleInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutParentRoleInput | RoleUpdateWithWhereUniqueWithoutParentRoleInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutParentRoleInput | RoleUpdateManyWithWhereWithoutParentRoleInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateOneWithoutRolesNestedInput = {
    create?: XOR<RoleCreateWithoutRolesInput, RoleUncheckedCreateWithoutRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolesInput
    upsert?: RoleUpsertWithoutRolesInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolesInput, RoleUpdateWithoutRolesInput>, RoleUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
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

  export type RoleUncheckedUpdateManyWithoutParentRoleNestedInput = {
    create?: XOR<RoleCreateWithoutParentRoleInput, RoleUncheckedCreateWithoutParentRoleInput> | RoleCreateWithoutParentRoleInput[] | RoleUncheckedCreateWithoutParentRoleInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutParentRoleInput | RoleCreateOrConnectWithoutParentRoleInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutParentRoleInput | RoleUpsertWithWhereUniqueWithoutParentRoleInput[]
    createMany?: RoleCreateManyParentRoleInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutParentRoleInput | RoleUpdateWithWhereUniqueWithoutParentRoleInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutParentRoleInput | RoleUpdateManyWithWhereWithoutParentRoleInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    upsert?: PermissionUpsertWithoutRolesInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolesInput, PermissionUpdateWithoutRolesInput>, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    upsert?: RoleUpsertWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPermissionsInput, RoleUpdateWithoutPermissionsInput>, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PizzaCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<PizzaCreateWithoutRestaurantInput, PizzaUncheckedCreateWithoutRestaurantInput> | PizzaCreateWithoutRestaurantInput[] | PizzaUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutRestaurantInput | PizzaCreateOrConnectWithoutRestaurantInput[]
    createMany?: PizzaCreateManyRestaurantInputEnvelope
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSuperAdminRestaurantsInput = {
    create?: XOR<UserCreateWithoutSuperAdminRestaurantsInput, UserUncheckedCreateWithoutSuperAdminRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuperAdminRestaurantsInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RoleCreateWithoutRestaurantInput, RoleUncheckedCreateWithoutRestaurantInput> | RoleCreateWithoutRestaurantInput[] | RoleUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutRestaurantInput | RoleCreateOrConnectWithoutRestaurantInput[]
    createMany?: RoleCreateManyRestaurantInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRestaurant_KitchenAdminInput = {
    create?: XOR<UserCreateWithoutRestaurant_KitchenAdminInput, UserUncheckedCreateWithoutRestaurant_KitchenAdminInput> | UserCreateWithoutRestaurant_KitchenAdminInput[] | UserUncheckedCreateWithoutRestaurant_KitchenAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_KitchenAdminInput | UserCreateOrConnectWithoutRestaurant_KitchenAdminInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    create?: XOR<UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput> | UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[] | UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput | UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    createMany?: UserCreateManyRestaurant_User_restaurantIdToRestaurantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PizzaUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<PizzaCreateWithoutRestaurantInput, PizzaUncheckedCreateWithoutRestaurantInput> | PizzaCreateWithoutRestaurantInput[] | PizzaUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutRestaurantInput | PizzaCreateOrConnectWithoutRestaurantInput[]
    createMany?: PizzaCreateManyRestaurantInputEnvelope
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RoleCreateWithoutRestaurantInput, RoleUncheckedCreateWithoutRestaurantInput> | RoleCreateWithoutRestaurantInput[] | RoleUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutRestaurantInput | RoleCreateOrConnectWithoutRestaurantInput[]
    createMany?: RoleCreateManyRestaurantInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput = {
    create?: XOR<UserCreateWithoutRestaurant_KitchenAdminInput, UserUncheckedCreateWithoutRestaurant_KitchenAdminInput> | UserCreateWithoutRestaurant_KitchenAdminInput[] | UserUncheckedCreateWithoutRestaurant_KitchenAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_KitchenAdminInput | UserCreateOrConnectWithoutRestaurant_KitchenAdminInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    create?: XOR<UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput> | UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[] | UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput | UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    createMany?: UserCreateManyRestaurant_User_restaurantIdToRestaurantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PizzaUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<PizzaCreateWithoutRestaurantInput, PizzaUncheckedCreateWithoutRestaurantInput> | PizzaCreateWithoutRestaurantInput[] | PizzaUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutRestaurantInput | PizzaCreateOrConnectWithoutRestaurantInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutRestaurantInput | PizzaUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: PizzaCreateManyRestaurantInputEnvelope
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutRestaurantInput | PizzaUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutRestaurantInput | PizzaUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type UserUpdateOneWithoutSuperAdminRestaurantsNestedInput = {
    create?: XOR<UserCreateWithoutSuperAdminRestaurantsInput, UserUncheckedCreateWithoutSuperAdminRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSuperAdminRestaurantsInput
    upsert?: UserUpsertWithoutSuperAdminRestaurantsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSuperAdminRestaurantsInput, UserUpdateWithoutSuperAdminRestaurantsInput>, UserUncheckedUpdateWithoutSuperAdminRestaurantsInput>
  }

  export type RoleUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RoleCreateWithoutRestaurantInput, RoleUncheckedCreateWithoutRestaurantInput> | RoleCreateWithoutRestaurantInput[] | RoleUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutRestaurantInput | RoleCreateOrConnectWithoutRestaurantInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutRestaurantInput | RoleUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RoleCreateManyRestaurantInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutRestaurantInput | RoleUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutRestaurantInput | RoleUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput = {
    create?: XOR<UserCreateWithoutRestaurant_KitchenAdminInput, UserUncheckedCreateWithoutRestaurant_KitchenAdminInput> | UserCreateWithoutRestaurant_KitchenAdminInput[] | UserUncheckedCreateWithoutRestaurant_KitchenAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_KitchenAdminInput | UserCreateOrConnectWithoutRestaurant_KitchenAdminInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRestaurant_KitchenAdminInput | UserUpsertWithWhereUniqueWithoutRestaurant_KitchenAdminInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRestaurant_KitchenAdminInput | UserUpdateWithWhereUniqueWithoutRestaurant_KitchenAdminInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRestaurant_KitchenAdminInput | UserUpdateManyWithWhereWithoutRestaurant_KitchenAdminInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput = {
    create?: XOR<UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput> | UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[] | UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput | UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput | UserUpsertWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    createMany?: UserCreateManyRestaurant_User_restaurantIdToRestaurantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput | UserUpdateWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRestaurant_User_restaurantIdToRestaurantInput | UserUpdateManyWithWhereWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PizzaUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<PizzaCreateWithoutRestaurantInput, PizzaUncheckedCreateWithoutRestaurantInput> | PizzaCreateWithoutRestaurantInput[] | PizzaUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PizzaCreateOrConnectWithoutRestaurantInput | PizzaCreateOrConnectWithoutRestaurantInput[]
    upsert?: PizzaUpsertWithWhereUniqueWithoutRestaurantInput | PizzaUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: PizzaCreateManyRestaurantInputEnvelope
    set?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    disconnect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    delete?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    connect?: PizzaWhereUniqueInput | PizzaWhereUniqueInput[]
    update?: PizzaUpdateWithWhereUniqueWithoutRestaurantInput | PizzaUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: PizzaUpdateManyWithWhereWithoutRestaurantInput | PizzaUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RoleCreateWithoutRestaurantInput, RoleUncheckedCreateWithoutRestaurantInput> | RoleCreateWithoutRestaurantInput[] | RoleUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutRestaurantInput | RoleCreateOrConnectWithoutRestaurantInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutRestaurantInput | RoleUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RoleCreateManyRestaurantInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutRestaurantInput | RoleUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutRestaurantInput | RoleUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput = {
    create?: XOR<UserCreateWithoutRestaurant_KitchenAdminInput, UserUncheckedCreateWithoutRestaurant_KitchenAdminInput> | UserCreateWithoutRestaurant_KitchenAdminInput[] | UserUncheckedCreateWithoutRestaurant_KitchenAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_KitchenAdminInput | UserCreateOrConnectWithoutRestaurant_KitchenAdminInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRestaurant_KitchenAdminInput | UserUpsertWithWhereUniqueWithoutRestaurant_KitchenAdminInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRestaurant_KitchenAdminInput | UserUpdateWithWhereUniqueWithoutRestaurant_KitchenAdminInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRestaurant_KitchenAdminInput | UserUpdateManyWithWhereWithoutRestaurant_KitchenAdminInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput = {
    create?: XOR<UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput> | UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[] | UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput | UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput | UserUpsertWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    createMany?: UserCreateManyRestaurant_User_restaurantIdToRestaurantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput | UserUpdateWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRestaurant_User_restaurantIdToRestaurantInput | UserUpdateManyWithWhereWithoutRestaurant_User_restaurantIdToRestaurantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutPizzaInput = {
    create?: XOR<OrderCreateWithoutPizzaInput, OrderUncheckedCreateWithoutPizzaInput> | OrderCreateWithoutPizzaInput[] | OrderUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzaInput | OrderCreateOrConnectWithoutPizzaInput[]
    createMany?: OrderCreateManyPizzaInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutPizzasInput = {
    create?: XOR<RestaurantCreateWithoutPizzasInput, RestaurantUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutPizzasInput
    connect?: RestaurantWhereUniqueInput
  }

  export type PizzaToppingCreateNestedManyWithoutPizzaInput = {
    create?: XOR<PizzaToppingCreateWithoutPizzaInput, PizzaToppingUncheckedCreateWithoutPizzaInput> | PizzaToppingCreateWithoutPizzaInput[] | PizzaToppingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutPizzaInput | PizzaToppingCreateOrConnectWithoutPizzaInput[]
    createMany?: PizzaToppingCreateManyPizzaInputEnvelope
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPizzaInput = {
    create?: XOR<OrderCreateWithoutPizzaInput, OrderUncheckedCreateWithoutPizzaInput> | OrderCreateWithoutPizzaInput[] | OrderUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzaInput | OrderCreateOrConnectWithoutPizzaInput[]
    createMany?: OrderCreateManyPizzaInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PizzaToppingUncheckedCreateNestedManyWithoutPizzaInput = {
    create?: XOR<PizzaToppingCreateWithoutPizzaInput, PizzaToppingUncheckedCreateWithoutPizzaInput> | PizzaToppingCreateWithoutPizzaInput[] | PizzaToppingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutPizzaInput | PizzaToppingCreateOrConnectWithoutPizzaInput[]
    createMany?: PizzaToppingCreateManyPizzaInputEnvelope
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<OrderCreateWithoutPizzaInput, OrderUncheckedCreateWithoutPizzaInput> | OrderCreateWithoutPizzaInput[] | OrderUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzaInput | OrderCreateOrConnectWithoutPizzaInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPizzaInput | OrderUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: OrderCreateManyPizzaInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPizzaInput | OrderUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPizzaInput | OrderUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutPizzasNestedInput = {
    create?: XOR<RestaurantCreateWithoutPizzasInput, RestaurantUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutPizzasInput
    upsert?: RestaurantUpsertWithoutPizzasInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutPizzasInput, RestaurantUpdateWithoutPizzasInput>, RestaurantUncheckedUpdateWithoutPizzasInput>
  }

  export type PizzaToppingUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<PizzaToppingCreateWithoutPizzaInput, PizzaToppingUncheckedCreateWithoutPizzaInput> | PizzaToppingCreateWithoutPizzaInput[] | PizzaToppingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutPizzaInput | PizzaToppingCreateOrConnectWithoutPizzaInput[]
    upsert?: PizzaToppingUpsertWithWhereUniqueWithoutPizzaInput | PizzaToppingUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: PizzaToppingCreateManyPizzaInputEnvelope
    set?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    disconnect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    delete?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    update?: PizzaToppingUpdateWithWhereUniqueWithoutPizzaInput | PizzaToppingUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: PizzaToppingUpdateManyWithWhereWithoutPizzaInput | PizzaToppingUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: PizzaToppingScalarWhereInput | PizzaToppingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<OrderCreateWithoutPizzaInput, OrderUncheckedCreateWithoutPizzaInput> | OrderCreateWithoutPizzaInput[] | OrderUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPizzaInput | OrderCreateOrConnectWithoutPizzaInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPizzaInput | OrderUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: OrderCreateManyPizzaInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPizzaInput | OrderUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPizzaInput | OrderUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PizzaToppingUncheckedUpdateManyWithoutPizzaNestedInput = {
    create?: XOR<PizzaToppingCreateWithoutPizzaInput, PizzaToppingUncheckedCreateWithoutPizzaInput> | PizzaToppingCreateWithoutPizzaInput[] | PizzaToppingUncheckedCreateWithoutPizzaInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutPizzaInput | PizzaToppingCreateOrConnectWithoutPizzaInput[]
    upsert?: PizzaToppingUpsertWithWhereUniqueWithoutPizzaInput | PizzaToppingUpsertWithWhereUniqueWithoutPizzaInput[]
    createMany?: PizzaToppingCreateManyPizzaInputEnvelope
    set?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    disconnect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    delete?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    update?: PizzaToppingUpdateWithWhereUniqueWithoutPizzaInput | PizzaToppingUpdateWithWhereUniqueWithoutPizzaInput[]
    updateMany?: PizzaToppingUpdateManyWithWhereWithoutPizzaInput | PizzaToppingUpdateManyWithWhereWithoutPizzaInput[]
    deleteMany?: PizzaToppingScalarWhereInput | PizzaToppingScalarWhereInput[]
  }

  export type PizzaCreateNestedOneWithoutToppingsInput = {
    create?: XOR<PizzaCreateWithoutToppingsInput, PizzaUncheckedCreateWithoutToppingsInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutToppingsInput
    connect?: PizzaWhereUniqueInput
  }

  export type ToppingCreateNestedOneWithoutPizzasInput = {
    create?: XOR<ToppingCreateWithoutPizzasInput, ToppingUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: ToppingCreateOrConnectWithoutPizzasInput
    connect?: ToppingWhereUniqueInput
  }

  export type PizzaUpdateOneRequiredWithoutToppingsNestedInput = {
    create?: XOR<PizzaCreateWithoutToppingsInput, PizzaUncheckedCreateWithoutToppingsInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutToppingsInput
    upsert?: PizzaUpsertWithoutToppingsInput
    connect?: PizzaWhereUniqueInput
    update?: XOR<XOR<PizzaUpdateToOneWithWhereWithoutToppingsInput, PizzaUpdateWithoutToppingsInput>, PizzaUncheckedUpdateWithoutToppingsInput>
  }

  export type ToppingUpdateOneRequiredWithoutPizzasNestedInput = {
    create?: XOR<ToppingCreateWithoutPizzasInput, ToppingUncheckedCreateWithoutPizzasInput>
    connectOrCreate?: ToppingCreateOrConnectWithoutPizzasInput
    upsert?: ToppingUpsertWithoutPizzasInput
    connect?: ToppingWhereUniqueInput
    update?: XOR<XOR<ToppingUpdateToOneWithWhereWithoutPizzasInput, ToppingUpdateWithoutPizzasInput>, ToppingUncheckedUpdateWithoutPizzasInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PizzaCreateNestedOneWithoutOrderInput = {
    create?: XOR<PizzaCreateWithoutOrderInput, PizzaUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutOrderInput
    connect?: PizzaWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderToppingCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderToppingCreateWithoutOrderInput, OrderToppingUncheckedCreateWithoutOrderInput> | OrderToppingCreateWithoutOrderInput[] | OrderToppingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutOrderInput | OrderToppingCreateOrConnectWithoutOrderInput[]
    createMany?: OrderToppingCreateManyOrderInputEnvelope
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
  }

  export type OrderToppingUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderToppingCreateWithoutOrderInput, OrderToppingUncheckedCreateWithoutOrderInput> | OrderToppingCreateWithoutOrderInput[] | OrderToppingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutOrderInput | OrderToppingCreateOrConnectWithoutOrderInput[]
    createMany?: OrderToppingCreateManyOrderInputEnvelope
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PizzaUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<PizzaCreateWithoutOrderInput, PizzaUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PizzaCreateOrConnectWithoutOrderInput
    upsert?: PizzaUpsertWithoutOrderInput
    connect?: PizzaWhereUniqueInput
    update?: XOR<XOR<PizzaUpdateToOneWithWhereWithoutOrderInput, PizzaUpdateWithoutOrderInput>, PizzaUncheckedUpdateWithoutOrderInput>
  }

  export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    upsert?: RestaurantUpsertWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOrdersInput, RestaurantUpdateWithoutOrdersInput>, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderToppingUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderToppingCreateWithoutOrderInput, OrderToppingUncheckedCreateWithoutOrderInput> | OrderToppingCreateWithoutOrderInput[] | OrderToppingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutOrderInput | OrderToppingCreateOrConnectWithoutOrderInput[]
    upsert?: OrderToppingUpsertWithWhereUniqueWithoutOrderInput | OrderToppingUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderToppingCreateManyOrderInputEnvelope
    set?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    disconnect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    delete?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    update?: OrderToppingUpdateWithWhereUniqueWithoutOrderInput | OrderToppingUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderToppingUpdateManyWithWhereWithoutOrderInput | OrderToppingUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderToppingScalarWhereInput | OrderToppingScalarWhereInput[]
  }

  export type OrderToppingUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderToppingCreateWithoutOrderInput, OrderToppingUncheckedCreateWithoutOrderInput> | OrderToppingCreateWithoutOrderInput[] | OrderToppingUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutOrderInput | OrderToppingCreateOrConnectWithoutOrderInput[]
    upsert?: OrderToppingUpsertWithWhereUniqueWithoutOrderInput | OrderToppingUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderToppingCreateManyOrderInputEnvelope
    set?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    disconnect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    delete?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    update?: OrderToppingUpdateWithWhereUniqueWithoutOrderInput | OrderToppingUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderToppingUpdateManyWithWhereWithoutOrderInput | OrderToppingUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderToppingScalarWhereInput | OrderToppingScalarWhereInput[]
  }

  export type OrderToppingCreateNestedManyWithoutToppingInput = {
    create?: XOR<OrderToppingCreateWithoutToppingInput, OrderToppingUncheckedCreateWithoutToppingInput> | OrderToppingCreateWithoutToppingInput[] | OrderToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutToppingInput | OrderToppingCreateOrConnectWithoutToppingInput[]
    createMany?: OrderToppingCreateManyToppingInputEnvelope
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
  }

  export type PizzaToppingCreateNestedManyWithoutToppingInput = {
    create?: XOR<PizzaToppingCreateWithoutToppingInput, PizzaToppingUncheckedCreateWithoutToppingInput> | PizzaToppingCreateWithoutToppingInput[] | PizzaToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutToppingInput | PizzaToppingCreateOrConnectWithoutToppingInput[]
    createMany?: PizzaToppingCreateManyToppingInputEnvelope
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
  }

  export type OrderToppingUncheckedCreateNestedManyWithoutToppingInput = {
    create?: XOR<OrderToppingCreateWithoutToppingInput, OrderToppingUncheckedCreateWithoutToppingInput> | OrderToppingCreateWithoutToppingInput[] | OrderToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutToppingInput | OrderToppingCreateOrConnectWithoutToppingInput[]
    createMany?: OrderToppingCreateManyToppingInputEnvelope
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
  }

  export type PizzaToppingUncheckedCreateNestedManyWithoutToppingInput = {
    create?: XOR<PizzaToppingCreateWithoutToppingInput, PizzaToppingUncheckedCreateWithoutToppingInput> | PizzaToppingCreateWithoutToppingInput[] | PizzaToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutToppingInput | PizzaToppingCreateOrConnectWithoutToppingInput[]
    createMany?: PizzaToppingCreateManyToppingInputEnvelope
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
  }

  export type OrderToppingUpdateManyWithoutToppingNestedInput = {
    create?: XOR<OrderToppingCreateWithoutToppingInput, OrderToppingUncheckedCreateWithoutToppingInput> | OrderToppingCreateWithoutToppingInput[] | OrderToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutToppingInput | OrderToppingCreateOrConnectWithoutToppingInput[]
    upsert?: OrderToppingUpsertWithWhereUniqueWithoutToppingInput | OrderToppingUpsertWithWhereUniqueWithoutToppingInput[]
    createMany?: OrderToppingCreateManyToppingInputEnvelope
    set?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    disconnect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    delete?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    update?: OrderToppingUpdateWithWhereUniqueWithoutToppingInput | OrderToppingUpdateWithWhereUniqueWithoutToppingInput[]
    updateMany?: OrderToppingUpdateManyWithWhereWithoutToppingInput | OrderToppingUpdateManyWithWhereWithoutToppingInput[]
    deleteMany?: OrderToppingScalarWhereInput | OrderToppingScalarWhereInput[]
  }

  export type PizzaToppingUpdateManyWithoutToppingNestedInput = {
    create?: XOR<PizzaToppingCreateWithoutToppingInput, PizzaToppingUncheckedCreateWithoutToppingInput> | PizzaToppingCreateWithoutToppingInput[] | PizzaToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutToppingInput | PizzaToppingCreateOrConnectWithoutToppingInput[]
    upsert?: PizzaToppingUpsertWithWhereUniqueWithoutToppingInput | PizzaToppingUpsertWithWhereUniqueWithoutToppingInput[]
    createMany?: PizzaToppingCreateManyToppingInputEnvelope
    set?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    disconnect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    delete?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    update?: PizzaToppingUpdateWithWhereUniqueWithoutToppingInput | PizzaToppingUpdateWithWhereUniqueWithoutToppingInput[]
    updateMany?: PizzaToppingUpdateManyWithWhereWithoutToppingInput | PizzaToppingUpdateManyWithWhereWithoutToppingInput[]
    deleteMany?: PizzaToppingScalarWhereInput | PizzaToppingScalarWhereInput[]
  }

  export type OrderToppingUncheckedUpdateManyWithoutToppingNestedInput = {
    create?: XOR<OrderToppingCreateWithoutToppingInput, OrderToppingUncheckedCreateWithoutToppingInput> | OrderToppingCreateWithoutToppingInput[] | OrderToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: OrderToppingCreateOrConnectWithoutToppingInput | OrderToppingCreateOrConnectWithoutToppingInput[]
    upsert?: OrderToppingUpsertWithWhereUniqueWithoutToppingInput | OrderToppingUpsertWithWhereUniqueWithoutToppingInput[]
    createMany?: OrderToppingCreateManyToppingInputEnvelope
    set?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    disconnect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    delete?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    connect?: OrderToppingWhereUniqueInput | OrderToppingWhereUniqueInput[]
    update?: OrderToppingUpdateWithWhereUniqueWithoutToppingInput | OrderToppingUpdateWithWhereUniqueWithoutToppingInput[]
    updateMany?: OrderToppingUpdateManyWithWhereWithoutToppingInput | OrderToppingUpdateManyWithWhereWithoutToppingInput[]
    deleteMany?: OrderToppingScalarWhereInput | OrderToppingScalarWhereInput[]
  }

  export type PizzaToppingUncheckedUpdateManyWithoutToppingNestedInput = {
    create?: XOR<PizzaToppingCreateWithoutToppingInput, PizzaToppingUncheckedCreateWithoutToppingInput> | PizzaToppingCreateWithoutToppingInput[] | PizzaToppingUncheckedCreateWithoutToppingInput[]
    connectOrCreate?: PizzaToppingCreateOrConnectWithoutToppingInput | PizzaToppingCreateOrConnectWithoutToppingInput[]
    upsert?: PizzaToppingUpsertWithWhereUniqueWithoutToppingInput | PizzaToppingUpsertWithWhereUniqueWithoutToppingInput[]
    createMany?: PizzaToppingCreateManyToppingInputEnvelope
    set?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    disconnect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    delete?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    connect?: PizzaToppingWhereUniqueInput | PizzaToppingWhereUniqueInput[]
    update?: PizzaToppingUpdateWithWhereUniqueWithoutToppingInput | PizzaToppingUpdateWithWhereUniqueWithoutToppingInput[]
    updateMany?: PizzaToppingUpdateManyWithWhereWithoutToppingInput | PizzaToppingUpdateManyWithWhereWithoutToppingInput[]
    deleteMany?: PizzaToppingScalarWhereInput | PizzaToppingScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutToppingsInput = {
    create?: XOR<OrderCreateWithoutToppingsInput, OrderUncheckedCreateWithoutToppingsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutToppingsInput
    connect?: OrderWhereUniqueInput
  }

  export type ToppingCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ToppingCreateWithoutOrdersInput, ToppingUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ToppingCreateOrConnectWithoutOrdersInput
    connect?: ToppingWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutToppingsNestedInput = {
    create?: XOR<OrderCreateWithoutToppingsInput, OrderUncheckedCreateWithoutToppingsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutToppingsInput
    upsert?: OrderUpsertWithoutToppingsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutToppingsInput, OrderUpdateWithoutToppingsInput>, OrderUncheckedUpdateWithoutToppingsInput>
  }

  export type ToppingUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ToppingCreateWithoutOrdersInput, ToppingUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ToppingCreateOrConnectWithoutOrdersInput
    upsert?: ToppingUpsertWithoutOrdersInput
    connect?: ToppingWhereUniqueInput
    update?: XOR<XOR<ToppingUpdateToOneWithWhereWithoutOrdersInput, ToppingUpdateWithoutOrdersInput>, ToppingUncheckedUpdateWithoutOrdersInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderCreateWithoutCustomerInput = {
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
    Pizza: PizzaCreateNestedOneWithoutOrderInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    toppings?: OrderToppingCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
    toppings?: OrderToppingUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutSuperAdminInput = {
    name: string
    imgUrl: string
    location: string
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaCreateNestedManyWithoutRestaurantInput
    roles?: RoleCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutSuperAdminInput = {
    id?: number
    name: string
    imgUrl: string
    location: string
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaUncheckedCreateNestedManyWithoutRestaurantInput
    roles?: RoleUncheckedCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutSuperAdminInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutSuperAdminInput, RestaurantUncheckedCreateWithoutSuperAdminInput>
  }

  export type RestaurantCreateManySuperAdminInputEnvelope = {
    data: RestaurantCreateManySuperAdminInput | RestaurantCreateManySuperAdminInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutUserInput = {
    name: string
    imgUrl: string
    location: string
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaCreateNestedManyWithoutRestaurantInput
    superAdmin?: UserCreateNestedOneWithoutSuperAdminRestaurantsInput
    roles?: RoleCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserCreateNestedManyWithoutRestaurant_KitchenAdminInput
  }

  export type RestaurantUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaUncheckedCreateNestedManyWithoutRestaurantInput
    roles?: RoleUncheckedCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput
  }

  export type RestaurantCreateOrConnectWithoutUserInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutUserInput, RestaurantUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: number
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUserInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserRoleCreateNestedManyWithoutRoleInput
    restaurant?: RestaurantCreateNestedOneWithoutRolesInput
    roles?: RoleCreateNestedManyWithoutParentRoleInput
    parentRole?: RoleCreateNestedOneWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    roles?: RoleUncheckedCreateNestedManyWithoutParentRoleInput
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RestaurantCreateWithoutUser_KitchenAdminInput = {
    name: string
    imgUrl: string
    location: string
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaCreateNestedManyWithoutRestaurantInput
    superAdmin?: UserCreateNestedOneWithoutSuperAdminRestaurantsInput
    roles?: RoleCreateNestedManyWithoutRestaurantInput
    User?: UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutUser_KitchenAdminInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaUncheckedCreateNestedManyWithoutRestaurantInput
    roles?: RoleUncheckedCreateNestedManyWithoutRestaurantInput
    User?: UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutUser_KitchenAdminInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutUser_KitchenAdminInput, RestaurantUncheckedCreateWithoutUser_KitchenAdminInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    pizzaId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    restaurantId?: IntFilter<"Order"> | number
    quantity?: IntFilter<"Order"> | number
  }

  export type RestaurantUpsertWithWhereUniqueWithoutSuperAdminInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutSuperAdminInput, RestaurantUncheckedUpdateWithoutSuperAdminInput>
    create: XOR<RestaurantCreateWithoutSuperAdminInput, RestaurantUncheckedCreateWithoutSuperAdminInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutSuperAdminInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutSuperAdminInput, RestaurantUncheckedUpdateWithoutSuperAdminInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutSuperAdminInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutSuperAdminInput>
  }

  export type RestaurantScalarWhereInput = {
    AND?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    OR?: RestaurantScalarWhereInput[]
    NOT?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    name?: StringFilter<"Restaurant"> | string
    superAdminId?: IntNullableFilter<"Restaurant"> | number | null
    imgUrl?: StringFilter<"Restaurant"> | string
    location?: StringFilter<"Restaurant"> | string
  }

  export type RestaurantUpsertWithoutUserInput = {
    update: XOR<RestaurantUpdateWithoutUserInput, RestaurantUncheckedUpdateWithoutUserInput>
    create: XOR<RestaurantCreateWithoutUserInput, RestaurantUncheckedCreateWithoutUserInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutUserInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutUserInput, RestaurantUncheckedUpdateWithoutUserInput>
  }

  export type RestaurantUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUpdateManyWithoutRestaurantNestedInput
    superAdmin?: UserUpdateOneWithoutSuperAdminRestaurantsNestedInput
    roles?: RoleUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUncheckedUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUncheckedUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput
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
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
  }

  export type RoleUpsertWithWhereUniqueWithoutUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    restaurantId?: IntFilter<"Role"> | number
  }

  export type RestaurantUpsertWithWhereUniqueWithoutUser_KitchenAdminInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutUser_KitchenAdminInput, RestaurantUncheckedUpdateWithoutUser_KitchenAdminInput>
    create: XOR<RestaurantCreateWithoutUser_KitchenAdminInput, RestaurantUncheckedCreateWithoutUser_KitchenAdminInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutUser_KitchenAdminInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutUser_KitchenAdminInput, RestaurantUncheckedUpdateWithoutUser_KitchenAdminInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutUser_KitchenAdminInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminInput>
  }

  export type RolePermissionCreateWithoutRoleInput = {
    permission: PermissionCreateNestedOneWithoutRolesInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: number
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: number
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutRolesInput = {
    name: string
    imgUrl: string
    location: string
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaCreateNestedManyWithoutRestaurantInput
    superAdmin?: UserCreateNestedOneWithoutSuperAdminRestaurantsInput
    User_KitchenAdmin?: UserCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    pizzas?: PizzaUncheckedCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutRolesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutRolesInput, RestaurantUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutParentRoleInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserRoleCreateNestedManyWithoutRoleInput
    restaurant?: RestaurantCreateNestedOneWithoutRolesInput
    roles?: RoleCreateNestedManyWithoutParentRoleInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutParentRoleInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    roles?: RoleUncheckedCreateNestedManyWithoutParentRoleInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutParentRoleInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutParentRoleInput, RoleUncheckedCreateWithoutParentRoleInput>
  }

  export type RoleCreateManyParentRoleInputEnvelope = {
    data: RoleCreateManyParentRoleInput | RoleCreateManyParentRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutRolesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserRoleCreateNestedManyWithoutRoleInput
    restaurant?: RestaurantCreateNestedOneWithoutRolesInput
    parentRole?: RoleCreateNestedOneWithoutRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolesInput, RoleUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateWithoutRoleInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantCreateNestedManyWithoutSuperAdminInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantCreateNestedOneWithoutUserInput
    roles?: UserRoleCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    roleId?: IntFilter<"RolePermission"> | number
    permissionId?: IntFilter<"RolePermission"> | number
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

  export type RestaurantUpsertWithoutRolesInput = {
    update: XOR<RestaurantUpdateWithoutRolesInput, RestaurantUncheckedUpdateWithoutRolesInput>
    create: XOR<RestaurantCreateWithoutRolesInput, RestaurantUncheckedCreateWithoutRolesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutRolesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutRolesInput, RestaurantUncheckedUpdateWithoutRolesInput>
  }

  export type RestaurantUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUpdateManyWithoutRestaurantNestedInput
    superAdmin?: UserUpdateOneWithoutSuperAdminRestaurantsNestedInput
    User_KitchenAdmin?: UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUncheckedUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RoleUpsertWithWhereUniqueWithoutParentRoleInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutParentRoleInput, RoleUncheckedUpdateWithoutParentRoleInput>
    create: XOR<RoleCreateWithoutParentRoleInput, RoleUncheckedCreateWithoutParentRoleInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutParentRoleInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutParentRoleInput, RoleUncheckedUpdateWithoutParentRoleInput>
  }

  export type RoleUpdateManyWithWhereWithoutParentRoleInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutParentRoleInput>
  }

  export type RoleUpsertWithoutRolesInput = {
    update: XOR<RoleUpdateWithoutRolesInput, RoleUncheckedUpdateWithoutRolesInput>
    create: XOR<RoleCreateWithoutRolesInput, RoleUncheckedCreateWithoutRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolesInput, RoleUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    restaurant?: RestaurantUpdateOneWithoutRolesNestedInput
    parentRole?: RoleUpdateOneWithoutRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    restaurantId?: IntNullableFilter<"User"> | number | null
    location?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    role: RoleCreateNestedOneWithoutPermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: number
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    restaurant?: RestaurantCreateNestedOneWithoutRolesInput
    roles?: RoleCreateNestedManyWithoutParentRoleInput
    parentRole?: RoleCreateNestedOneWithoutRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    roles?: RoleUncheckedCreateNestedManyWithoutParentRoleInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutRolesInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantCreateNestedManyWithoutSuperAdminInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantCreateNestedOneWithoutUserInput
    role?: RoleCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput
    role?: RoleUncheckedCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    restaurant?: RestaurantUpdateOneWithoutRolesNestedInput
    roles?: RoleUpdateManyWithoutParentRoleNestedInput
    parentRole?: RoleUpdateOneWithoutRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    roles?: RoleUncheckedUpdateManyWithoutParentRoleNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUpdateManyWithoutSuperAdminNestedInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantUpdateOneWithoutUserNestedInput
    role?: RoleUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput
    role?: RoleUncheckedUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type PermissionCreateWithoutRolesInput = {
    action: string
    subject: string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    action: string
    subject: string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutPermissionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleCreateNestedManyWithoutRoleInput
    restaurant?: RestaurantCreateNestedOneWithoutRolesInput
    roles?: RoleCreateNestedManyWithoutParentRoleInput
    parentRole?: RoleCreateNestedOneWithoutRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    roles?: RoleUncheckedCreateNestedManyWithoutParentRoleInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type PermissionUpsertWithoutRolesInput = {
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateWithoutRolesInput = {
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUpsertWithoutPermissionsInput = {
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    restaurant?: RestaurantUpdateOneWithoutRolesNestedInput
    roles?: RoleUpdateManyWithoutParentRoleNestedInput
    parentRole?: RoleUpdateOneWithoutRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    roles?: RoleUncheckedUpdateManyWithoutParentRoleNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type OrderCreateWithoutRestaurantInput = {
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
    customer: UserCreateNestedOneWithoutOrdersInput
    Pizza: PizzaCreateNestedOneWithoutOrderInput
    toppings?: OrderToppingCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: number
    customerId: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
    toppings?: OrderToppingUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type PizzaCreateWithoutRestaurantInput = {
    name: string
    imgurl: string
    price: number
    Order?: OrderCreateNestedManyWithoutPizzaInput
    toppings?: PizzaToppingCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUncheckedCreateWithoutRestaurantInput = {
    id?: number
    name: string
    imgurl: string
    price: number
    Order?: OrderUncheckedCreateNestedManyWithoutPizzaInput
    toppings?: PizzaToppingUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaCreateOrConnectWithoutRestaurantInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutRestaurantInput, PizzaUncheckedCreateWithoutRestaurantInput>
  }

  export type PizzaCreateManyRestaurantInputEnvelope = {
    data: PizzaCreateManyRestaurantInput | PizzaCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSuperAdminRestaurantsInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantCreateNestedOneWithoutUserInput
    roles?: UserRoleCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUncheckedCreateWithoutSuperAdminRestaurantsInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    role?: RoleUncheckedCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserCreateOrConnectWithoutSuperAdminRestaurantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSuperAdminRestaurantsInput, UserUncheckedCreateWithoutSuperAdminRestaurantsInput>
  }

  export type RoleCreateWithoutRestaurantInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserRoleCreateNestedManyWithoutRoleInput
    roles?: RoleCreateNestedManyWithoutParentRoleInput
    parentRole?: RoleCreateNestedOneWithoutRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRestaurantInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    roles?: RoleUncheckedCreateNestedManyWithoutParentRoleInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRestaurantInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRestaurantInput, RoleUncheckedCreateWithoutRestaurantInput>
  }

  export type RoleCreateManyRestaurantInputEnvelope = {
    data: RoleCreateManyRestaurantInput | RoleCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRestaurant_KitchenAdminInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantCreateNestedManyWithoutSuperAdminInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantCreateNestedOneWithoutUserInput
    roles?: UserRoleCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRestaurant_KitchenAdminInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    role?: RoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRestaurant_KitchenAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestaurant_KitchenAdminInput, UserUncheckedCreateWithoutRestaurant_KitchenAdminInput>
  }

  export type UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantCreateNestedManyWithoutSuperAdminInput
    roles?: UserRoleCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    id?: number
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    superAdminRestaurants?: RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    role?: RoleUncheckedCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserCreateOrConnectWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput>
  }

  export type UserCreateManyRestaurant_User_restaurantIdToRestaurantInputEnvelope = {
    data: UserCreateManyRestaurant_User_restaurantIdToRestaurantInput | UserCreateManyRestaurant_User_restaurantIdToRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type PizzaUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: PizzaWhereUniqueInput
    update: XOR<PizzaUpdateWithoutRestaurantInput, PizzaUncheckedUpdateWithoutRestaurantInput>
    create: XOR<PizzaCreateWithoutRestaurantInput, PizzaUncheckedCreateWithoutRestaurantInput>
  }

  export type PizzaUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: PizzaWhereUniqueInput
    data: XOR<PizzaUpdateWithoutRestaurantInput, PizzaUncheckedUpdateWithoutRestaurantInput>
  }

  export type PizzaUpdateManyWithWhereWithoutRestaurantInput = {
    where: PizzaScalarWhereInput
    data: XOR<PizzaUpdateManyMutationInput, PizzaUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type PizzaScalarWhereInput = {
    AND?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
    OR?: PizzaScalarWhereInput[]
    NOT?: PizzaScalarWhereInput | PizzaScalarWhereInput[]
    id?: IntFilter<"Pizza"> | number
    name?: StringFilter<"Pizza"> | string
    imgurl?: StringFilter<"Pizza"> | string
    price?: FloatFilter<"Pizza"> | number
    restaurantId?: IntFilter<"Pizza"> | number
  }

  export type UserUpsertWithoutSuperAdminRestaurantsInput = {
    update: XOR<UserUpdateWithoutSuperAdminRestaurantsInput, UserUncheckedUpdateWithoutSuperAdminRestaurantsInput>
    create: XOR<UserCreateWithoutSuperAdminRestaurantsInput, UserUncheckedCreateWithoutSuperAdminRestaurantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSuperAdminRestaurantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSuperAdminRestaurantsInput, UserUncheckedUpdateWithoutSuperAdminRestaurantsInput>
  }

  export type UserUpdateWithoutSuperAdminRestaurantsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantUpdateOneWithoutUserNestedInput
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    role?: RoleUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutSuperAdminRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    role?: RoleUncheckedUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type RoleUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutRestaurantInput, RoleUncheckedUpdateWithoutRestaurantInput>
    create: XOR<RoleCreateWithoutRestaurantInput, RoleUncheckedCreateWithoutRestaurantInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutRestaurantInput, RoleUncheckedUpdateWithoutRestaurantInput>
  }

  export type RoleUpdateManyWithWhereWithoutRestaurantInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRestaurant_KitchenAdminInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRestaurant_KitchenAdminInput, UserUncheckedUpdateWithoutRestaurant_KitchenAdminInput>
    create: XOR<UserCreateWithoutRestaurant_KitchenAdminInput, UserUncheckedCreateWithoutRestaurant_KitchenAdminInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRestaurant_KitchenAdminInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRestaurant_KitchenAdminInput, UserUncheckedUpdateWithoutRestaurant_KitchenAdminInput>
  }

  export type UserUpdateManyWithWhereWithoutRestaurant_KitchenAdminInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedUpdateWithoutRestaurant_User_restaurantIdToRestaurantInput>
    create: XOR<UserCreateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedCreateWithoutRestaurant_User_restaurantIdToRestaurantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRestaurant_User_restaurantIdToRestaurantInput, UserUncheckedUpdateWithoutRestaurant_User_restaurantIdToRestaurantInput>
  }

  export type UserUpdateManyWithWhereWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantInput>
  }

  export type OrderCreateWithoutPizzaInput = {
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
    customer: UserCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    toppings?: OrderToppingCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPizzaInput = {
    id?: number
    customerId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
    toppings?: OrderToppingUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPizzaInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPizzaInput, OrderUncheckedCreateWithoutPizzaInput>
  }

  export type OrderCreateManyPizzaInputEnvelope = {
    data: OrderCreateManyPizzaInput | OrderCreateManyPizzaInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutPizzasInput = {
    name: string
    imgUrl: string
    location: string
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    superAdmin?: UserCreateNestedOneWithoutSuperAdminRestaurantsInput
    roles?: RoleCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutPizzasInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    roles?: RoleUncheckedCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutPizzasInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutPizzasInput, RestaurantUncheckedCreateWithoutPizzasInput>
  }

  export type PizzaToppingCreateWithoutPizzaInput = {
    topping: ToppingCreateNestedOneWithoutPizzasInput
  }

  export type PizzaToppingUncheckedCreateWithoutPizzaInput = {
    toppingId: number
  }

  export type PizzaToppingCreateOrConnectWithoutPizzaInput = {
    where: PizzaToppingWhereUniqueInput
    create: XOR<PizzaToppingCreateWithoutPizzaInput, PizzaToppingUncheckedCreateWithoutPizzaInput>
  }

  export type PizzaToppingCreateManyPizzaInputEnvelope = {
    data: PizzaToppingCreateManyPizzaInput | PizzaToppingCreateManyPizzaInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutPizzaInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPizzaInput, OrderUncheckedUpdateWithoutPizzaInput>
    create: XOR<OrderCreateWithoutPizzaInput, OrderUncheckedCreateWithoutPizzaInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPizzaInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPizzaInput, OrderUncheckedUpdateWithoutPizzaInput>
  }

  export type OrderUpdateManyWithWhereWithoutPizzaInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPizzaInput>
  }

  export type RestaurantUpsertWithoutPizzasInput = {
    update: XOR<RestaurantUpdateWithoutPizzasInput, RestaurantUncheckedUpdateWithoutPizzasInput>
    create: XOR<RestaurantCreateWithoutPizzasInput, RestaurantUncheckedCreateWithoutPizzasInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutPizzasInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutPizzasInput, RestaurantUncheckedUpdateWithoutPizzasInput>
  }

  export type RestaurantUpdateWithoutPizzasInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    superAdmin?: UserUpdateOneWithoutSuperAdminRestaurantsNestedInput
    roles?: RoleUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutPizzasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUncheckedUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type PizzaToppingUpsertWithWhereUniqueWithoutPizzaInput = {
    where: PizzaToppingWhereUniqueInput
    update: XOR<PizzaToppingUpdateWithoutPizzaInput, PizzaToppingUncheckedUpdateWithoutPizzaInput>
    create: XOR<PizzaToppingCreateWithoutPizzaInput, PizzaToppingUncheckedCreateWithoutPizzaInput>
  }

  export type PizzaToppingUpdateWithWhereUniqueWithoutPizzaInput = {
    where: PizzaToppingWhereUniqueInput
    data: XOR<PizzaToppingUpdateWithoutPizzaInput, PizzaToppingUncheckedUpdateWithoutPizzaInput>
  }

  export type PizzaToppingUpdateManyWithWhereWithoutPizzaInput = {
    where: PizzaToppingScalarWhereInput
    data: XOR<PizzaToppingUpdateManyMutationInput, PizzaToppingUncheckedUpdateManyWithoutPizzaInput>
  }

  export type PizzaToppingScalarWhereInput = {
    AND?: PizzaToppingScalarWhereInput | PizzaToppingScalarWhereInput[]
    OR?: PizzaToppingScalarWhereInput[]
    NOT?: PizzaToppingScalarWhereInput | PizzaToppingScalarWhereInput[]
    pizzaId?: IntFilter<"PizzaTopping"> | number
    toppingId?: IntFilter<"PizzaTopping"> | number
  }

  export type PizzaCreateWithoutToppingsInput = {
    name: string
    imgurl: string
    price: number
    Order?: OrderCreateNestedManyWithoutPizzaInput
    restaurant: RestaurantCreateNestedOneWithoutPizzasInput
  }

  export type PizzaUncheckedCreateWithoutToppingsInput = {
    id?: number
    name: string
    imgurl: string
    price: number
    restaurantId: number
    Order?: OrderUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaCreateOrConnectWithoutToppingsInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutToppingsInput, PizzaUncheckedCreateWithoutToppingsInput>
  }

  export type ToppingCreateWithoutPizzasInput = {
    name: string
    orders?: OrderToppingCreateNestedManyWithoutToppingInput
  }

  export type ToppingUncheckedCreateWithoutPizzasInput = {
    id?: number
    name: string
    orders?: OrderToppingUncheckedCreateNestedManyWithoutToppingInput
  }

  export type ToppingCreateOrConnectWithoutPizzasInput = {
    where: ToppingWhereUniqueInput
    create: XOR<ToppingCreateWithoutPizzasInput, ToppingUncheckedCreateWithoutPizzasInput>
  }

  export type PizzaUpsertWithoutToppingsInput = {
    update: XOR<PizzaUpdateWithoutToppingsInput, PizzaUncheckedUpdateWithoutToppingsInput>
    create: XOR<PizzaCreateWithoutToppingsInput, PizzaUncheckedCreateWithoutToppingsInput>
    where?: PizzaWhereInput
  }

  export type PizzaUpdateToOneWithWhereWithoutToppingsInput = {
    where?: PizzaWhereInput
    data: XOR<PizzaUpdateWithoutToppingsInput, PizzaUncheckedUpdateWithoutToppingsInput>
  }

  export type PizzaUpdateWithoutToppingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateManyWithoutPizzaNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutPizzasNestedInput
  }

  export type PizzaUncheckedUpdateWithoutToppingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type ToppingUpsertWithoutPizzasInput = {
    update: XOR<ToppingUpdateWithoutPizzasInput, ToppingUncheckedUpdateWithoutPizzasInput>
    create: XOR<ToppingCreateWithoutPizzasInput, ToppingUncheckedCreateWithoutPizzasInput>
    where?: ToppingWhereInput
  }

  export type ToppingUpdateToOneWithWhereWithoutPizzasInput = {
    where?: ToppingWhereInput
    data: XOR<ToppingUpdateWithoutPizzasInput, ToppingUncheckedUpdateWithoutPizzasInput>
  }

  export type ToppingUpdateWithoutPizzasInput = {
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderToppingUpdateManyWithoutToppingNestedInput
  }

  export type ToppingUncheckedUpdateWithoutPizzasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderToppingUncheckedUpdateManyWithoutToppingNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
    superAdminRestaurants?: RestaurantCreateNestedManyWithoutSuperAdminInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantCreateNestedOneWithoutUserInput
    roles?: UserRoleCreateNestedManyWithoutUserInput
    role?: RoleCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password: string
    restaurantId?: number | null
    location?: string | null
    phoneNumber: string
    name?: string | null
    superAdminRestaurants?: RestaurantUncheckedCreateNestedManyWithoutSuperAdminInput
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    role?: RoleUncheckedCreateNestedManyWithoutUserInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedCreateNestedManyWithoutUser_KitchenAdminInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PizzaCreateWithoutOrderInput = {
    name: string
    imgurl: string
    price: number
    restaurant: RestaurantCreateNestedOneWithoutPizzasInput
    toppings?: PizzaToppingCreateNestedManyWithoutPizzaInput
  }

  export type PizzaUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    imgurl: string
    price: number
    restaurantId: number
    toppings?: PizzaToppingUncheckedCreateNestedManyWithoutPizzaInput
  }

  export type PizzaCreateOrConnectWithoutOrderInput = {
    where: PizzaWhereUniqueInput
    create: XOR<PizzaCreateWithoutOrderInput, PizzaUncheckedCreateWithoutOrderInput>
  }

  export type RestaurantCreateWithoutOrdersInput = {
    name: string
    imgUrl: string
    location: string
    pizzas?: PizzaCreateNestedManyWithoutRestaurantInput
    superAdmin?: UserCreateNestedOneWithoutSuperAdminRestaurantsInput
    roles?: RoleCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    superAdminId?: number | null
    imgUrl: string
    location: string
    pizzas?: PizzaUncheckedCreateNestedManyWithoutRestaurantInput
    roles?: RoleUncheckedCreateNestedManyWithoutRestaurantInput
    User_KitchenAdmin?: UserUncheckedCreateNestedManyWithoutRestaurant_KitchenAdminInput
    User?: UserUncheckedCreateNestedManyWithoutRestaurant_User_restaurantIdToRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
  }

  export type OrderToppingCreateWithoutOrderInput = {
    topping: ToppingCreateNestedOneWithoutOrdersInput
  }

  export type OrderToppingUncheckedCreateWithoutOrderInput = {
    toppingId: number
  }

  export type OrderToppingCreateOrConnectWithoutOrderInput = {
    where: OrderToppingWhereUniqueInput
    create: XOR<OrderToppingCreateWithoutOrderInput, OrderToppingUncheckedCreateWithoutOrderInput>
  }

  export type OrderToppingCreateManyOrderInputEnvelope = {
    data: OrderToppingCreateManyOrderInput | OrderToppingCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminRestaurants?: RestaurantUpdateManyWithoutSuperAdminNestedInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantUpdateOneWithoutUserNestedInput
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    role?: RoleUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminRestaurants?: RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    role?: RoleUncheckedUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type PizzaUpsertWithoutOrderInput = {
    update: XOR<PizzaUpdateWithoutOrderInput, PizzaUncheckedUpdateWithoutOrderInput>
    create: XOR<PizzaCreateWithoutOrderInput, PizzaUncheckedCreateWithoutOrderInput>
    where?: PizzaWhereInput
  }

  export type PizzaUpdateToOneWithWhereWithoutOrderInput = {
    where?: PizzaWhereInput
    data: XOR<PizzaUpdateWithoutOrderInput, PizzaUncheckedUpdateWithoutOrderInput>
  }

  export type PizzaUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutPizzasNestedInput
    toppings?: PizzaToppingUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    toppings?: PizzaToppingUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type RestaurantUpsertWithoutOrdersInput = {
    update: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUpdateManyWithoutRestaurantNestedInput
    superAdmin?: UserUpdateOneWithoutSuperAdminRestaurantsNestedInput
    roles?: RoleUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaUncheckedUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUncheckedUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type OrderToppingUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderToppingWhereUniqueInput
    update: XOR<OrderToppingUpdateWithoutOrderInput, OrderToppingUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderToppingCreateWithoutOrderInput, OrderToppingUncheckedCreateWithoutOrderInput>
  }

  export type OrderToppingUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderToppingWhereUniqueInput
    data: XOR<OrderToppingUpdateWithoutOrderInput, OrderToppingUncheckedUpdateWithoutOrderInput>
  }

  export type OrderToppingUpdateManyWithWhereWithoutOrderInput = {
    where: OrderToppingScalarWhereInput
    data: XOR<OrderToppingUpdateManyMutationInput, OrderToppingUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderToppingScalarWhereInput = {
    AND?: OrderToppingScalarWhereInput | OrderToppingScalarWhereInput[]
    OR?: OrderToppingScalarWhereInput[]
    NOT?: OrderToppingScalarWhereInput | OrderToppingScalarWhereInput[]
    orderId?: IntFilter<"OrderTopping"> | number
    toppingId?: IntFilter<"OrderTopping"> | number
  }

  export type OrderToppingCreateWithoutToppingInput = {
    order: OrderCreateNestedOneWithoutToppingsInput
  }

  export type OrderToppingUncheckedCreateWithoutToppingInput = {
    orderId: number
  }

  export type OrderToppingCreateOrConnectWithoutToppingInput = {
    where: OrderToppingWhereUniqueInput
    create: XOR<OrderToppingCreateWithoutToppingInput, OrderToppingUncheckedCreateWithoutToppingInput>
  }

  export type OrderToppingCreateManyToppingInputEnvelope = {
    data: OrderToppingCreateManyToppingInput | OrderToppingCreateManyToppingInput[]
    skipDuplicates?: boolean
  }

  export type PizzaToppingCreateWithoutToppingInput = {
    pizza: PizzaCreateNestedOneWithoutToppingsInput
  }

  export type PizzaToppingUncheckedCreateWithoutToppingInput = {
    pizzaId: number
  }

  export type PizzaToppingCreateOrConnectWithoutToppingInput = {
    where: PizzaToppingWhereUniqueInput
    create: XOR<PizzaToppingCreateWithoutToppingInput, PizzaToppingUncheckedCreateWithoutToppingInput>
  }

  export type PizzaToppingCreateManyToppingInputEnvelope = {
    data: PizzaToppingCreateManyToppingInput | PizzaToppingCreateManyToppingInput[]
    skipDuplicates?: boolean
  }

  export type OrderToppingUpsertWithWhereUniqueWithoutToppingInput = {
    where: OrderToppingWhereUniqueInput
    update: XOR<OrderToppingUpdateWithoutToppingInput, OrderToppingUncheckedUpdateWithoutToppingInput>
    create: XOR<OrderToppingCreateWithoutToppingInput, OrderToppingUncheckedCreateWithoutToppingInput>
  }

  export type OrderToppingUpdateWithWhereUniqueWithoutToppingInput = {
    where: OrderToppingWhereUniqueInput
    data: XOR<OrderToppingUpdateWithoutToppingInput, OrderToppingUncheckedUpdateWithoutToppingInput>
  }

  export type OrderToppingUpdateManyWithWhereWithoutToppingInput = {
    where: OrderToppingScalarWhereInput
    data: XOR<OrderToppingUpdateManyMutationInput, OrderToppingUncheckedUpdateManyWithoutToppingInput>
  }

  export type PizzaToppingUpsertWithWhereUniqueWithoutToppingInput = {
    where: PizzaToppingWhereUniqueInput
    update: XOR<PizzaToppingUpdateWithoutToppingInput, PizzaToppingUncheckedUpdateWithoutToppingInput>
    create: XOR<PizzaToppingCreateWithoutToppingInput, PizzaToppingUncheckedCreateWithoutToppingInput>
  }

  export type PizzaToppingUpdateWithWhereUniqueWithoutToppingInput = {
    where: PizzaToppingWhereUniqueInput
    data: XOR<PizzaToppingUpdateWithoutToppingInput, PizzaToppingUncheckedUpdateWithoutToppingInput>
  }

  export type PizzaToppingUpdateManyWithWhereWithoutToppingInput = {
    where: PizzaToppingScalarWhereInput
    data: XOR<PizzaToppingUpdateManyMutationInput, PizzaToppingUncheckedUpdateManyWithoutToppingInput>
  }

  export type OrderCreateWithoutToppingsInput = {
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
    customer: UserCreateNestedOneWithoutOrdersInput
    Pizza: PizzaCreateNestedOneWithoutOrderInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutToppingsInput = {
    id?: number
    customerId: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
  }

  export type OrderCreateOrConnectWithoutToppingsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutToppingsInput, OrderUncheckedCreateWithoutToppingsInput>
  }

  export type ToppingCreateWithoutOrdersInput = {
    name: string
    pizzas?: PizzaToppingCreateNestedManyWithoutToppingInput
  }

  export type ToppingUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    pizzas?: PizzaToppingUncheckedCreateNestedManyWithoutToppingInput
  }

  export type ToppingCreateOrConnectWithoutOrdersInput = {
    where: ToppingWhereUniqueInput
    create: XOR<ToppingCreateWithoutOrdersInput, ToppingUncheckedCreateWithoutOrdersInput>
  }

  export type OrderUpsertWithoutToppingsInput = {
    update: XOR<OrderUpdateWithoutToppingsInput, OrderUncheckedUpdateWithoutToppingsInput>
    create: XOR<OrderCreateWithoutToppingsInput, OrderUncheckedCreateWithoutToppingsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutToppingsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutToppingsInput, OrderUncheckedUpdateWithoutToppingsInput>
  }

  export type OrderUpdateWithoutToppingsInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    customer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Pizza?: PizzaUpdateOneRequiredWithoutOrderNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutToppingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ToppingUpsertWithoutOrdersInput = {
    update: XOR<ToppingUpdateWithoutOrdersInput, ToppingUncheckedUpdateWithoutOrdersInput>
    create: XOR<ToppingCreateWithoutOrdersInput, ToppingUncheckedCreateWithoutOrdersInput>
    where?: ToppingWhereInput
  }

  export type ToppingUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ToppingWhereInput
    data: XOR<ToppingUpdateWithoutOrdersInput, ToppingUncheckedUpdateWithoutOrdersInput>
  }

  export type ToppingUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaToppingUpdateManyWithoutToppingNestedInput
  }

  export type ToppingUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pizzas?: PizzaToppingUncheckedUpdateManyWithoutToppingNestedInput
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
  }

  export type RestaurantCreateManySuperAdminInput = {
    id?: number
    name: string
    imgUrl: string
    location: string
  }

  export type UserRoleCreateManyUserInput = {
    roleId: number
  }

  export type OrderUpdateWithoutCustomerInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    Pizza?: PizzaUpdateOneRequiredWithoutOrderNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    toppings?: OrderToppingUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    toppings?: OrderToppingUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type RestaurantUpdateWithoutSuperAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutSuperAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUncheckedUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUncheckedUpdateManyWithoutRestaurantNestedInput
    User_KitchenAdmin?: UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminNestedInput
    User?: UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutSuperAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    restaurant?: RestaurantUpdateOneWithoutRolesNestedInput
    roles?: RoleUpdateManyWithoutParentRoleNestedInput
    parentRole?: RoleUpdateOneWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    roles?: RoleUncheckedUpdateManyWithoutParentRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type RestaurantUpdateWithoutUser_KitchenAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUpdateManyWithoutRestaurantNestedInput
    superAdmin?: UserUpdateOneWithoutSuperAdminRestaurantsNestedInput
    roles?: RoleUpdateManyWithoutRestaurantNestedInput
    User?: UserUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutUser_KitchenAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    pizzas?: PizzaUncheckedUpdateManyWithoutRestaurantNestedInput
    roles?: RoleUncheckedUpdateManyWithoutRestaurantNestedInput
    User?: UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    superAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    imgUrl?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionCreateManyRoleInput = {
    permissionId: number
  }

  export type UserRoleCreateManyRoleInput = {
    userId: number
  }

  export type RoleCreateManyParentRoleInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurantId: number
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleUpdateWithoutParentRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    restaurant?: RestaurantUpdateOneWithoutRolesNestedInput
    roles?: RoleUpdateManyWithoutParentRoleNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutParentRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    roles?: RoleUncheckedUpdateManyWithoutParentRoleNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutParentRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutRoleInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUpdateManyWithoutSuperAdminNestedInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantUpdateOneWithoutUserNestedInput
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionCreateManyPermissionInput = {
    roleId: number
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyRestaurantInput = {
    id?: number
    customerId: number
    pizzaId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    quantity: number
  }

  export type PizzaCreateManyRestaurantInput = {
    id?: number
    name: string
    imgurl: string
    price: number
  }

  export type RoleCreateManyRestaurantInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyRestaurant_User_restaurantIdToRestaurantInput = {
    id?: number
    email: string
    password: string
    location?: string | null
    phoneNumber: string
    name?: string | null
  }

  export type OrderUpdateWithoutRestaurantInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    customer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    Pizza?: PizzaUpdateOneRequiredWithoutOrderNestedInput
    toppings?: OrderToppingUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    toppings?: OrderToppingUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    pizzaId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUpdateManyWithoutPizzaNestedInput
    toppings?: PizzaToppingUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    Order?: OrderUncheckedUpdateManyWithoutPizzaNestedInput
    toppings?: PizzaToppingUncheckedUpdateManyWithoutPizzaNestedInput
  }

  export type PizzaUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgurl?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RoleUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    roles?: RoleUpdateManyWithoutParentRoleNestedInput
    parentRole?: RoleUpdateOneWithoutRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    roles?: RoleUncheckedUpdateManyWithoutParentRoleNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRestaurant_KitchenAdminInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUpdateManyWithoutSuperAdminNestedInput
    Restaurant_User_restaurantIdToRestaurant?: RestaurantUpdateOneWithoutUserNestedInput
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    role?: RoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRestaurant_KitchenAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    role?: RoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRestaurant_KitchenAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: NullableIntFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUpdateManyWithoutSuperAdminNestedInput
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    role?: RoleUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    superAdminRestaurants?: RestaurantUncheckedUpdateManyWithoutSuperAdminNestedInput
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    role?: RoleUncheckedUpdateManyWithoutUserNestedInput
    Restaurant_KitchenAdmin?: RestaurantUncheckedUpdateManyWithoutUser_KitchenAdminNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRestaurant_User_restaurantIdToRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateManyPizzaInput = {
    id?: number
    customerId: number
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    restaurantId: number
    quantity: number
  }

  export type PizzaToppingCreateManyPizzaInput = {
    toppingId: number
  }

  export type OrderUpdateWithoutPizzaInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    customer?: UserUpdateOneRequiredWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    toppings?: OrderToppingUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPizzaInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    toppings?: OrderToppingUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPizzaInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaToppingUpdateWithoutPizzaInput = {
    topping?: ToppingUpdateOneRequiredWithoutPizzasNestedInput
  }

  export type PizzaToppingUncheckedUpdateWithoutPizzaInput = {
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaToppingUncheckedUpdateManyWithoutPizzaInput = {
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderToppingCreateManyOrderInput = {
    toppingId: number
  }

  export type OrderToppingUpdateWithoutOrderInput = {
    topping?: ToppingUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderToppingUncheckedUpdateWithoutOrderInput = {
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderToppingUncheckedUpdateManyWithoutOrderInput = {
    toppingId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderToppingCreateManyToppingInput = {
    orderId: number
  }

  export type PizzaToppingCreateManyToppingInput = {
    pizzaId: number
  }

  export type OrderToppingUpdateWithoutToppingInput = {
    order?: OrderUpdateOneRequiredWithoutToppingsNestedInput
  }

  export type OrderToppingUncheckedUpdateWithoutToppingInput = {
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderToppingUncheckedUpdateManyWithoutToppingInput = {
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaToppingUpdateWithoutToppingInput = {
    pizza?: PizzaUpdateOneRequiredWithoutToppingsNestedInput
  }

  export type PizzaToppingUncheckedUpdateWithoutToppingInput = {
    pizzaId?: IntFieldUpdateOperationsInput | number
  }

  export type PizzaToppingUncheckedUpdateManyWithoutToppingInput = {
    pizzaId?: IntFieldUpdateOperationsInput | number
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
     * @deprecated Use PermissionCountOutputTypeDefaultArgs instead
     */
    export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantCountOutputTypeDefaultArgs instead
     */
    export type RestaurantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PizzaCountOutputTypeDefaultArgs instead
     */
    export type PizzaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PizzaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ToppingCountOutputTypeDefaultArgs instead
     */
    export type ToppingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ToppingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolePermissionDefaultArgs instead
     */
    export type RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolePermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantDefaultArgs instead
     */
    export type RestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PizzaDefaultArgs instead
     */
    export type PizzaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PizzaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PizzaToppingDefaultArgs instead
     */
    export type PizzaToppingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PizzaToppingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ToppingDefaultArgs instead
     */
    export type ToppingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ToppingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderToppingDefaultArgs instead
     */
    export type OrderToppingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderToppingDefaultArgs<ExtArgs>

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