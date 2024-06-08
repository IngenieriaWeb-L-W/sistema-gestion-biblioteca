
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  role_name: 'role_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserRoleScalarFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id'
};

exports.Prisma.LoanScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceScalarFieldEnum = {
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

exports.Prisma.ResourceDetailScalarFieldEnum = {
  id: 'id',
  pub_year: 'pub_year',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceInstanceScalarFieldEnum = {
  id: 'id',
  instance_name: 'instance_name',
  resource_id: 'resource_id',
  lang: 'lang',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceTypeScalarFieldEnum = {
  id: 'id',
  resource_type_name: 'resource_type_name',
  max_loan_days: 'max_loan_days',
  max_units_per_loan: 'max_units_per_loan'
};

exports.Prisma.PublisherScalarFieldEnum = {
  id: 'id',
  publisher_name: 'publisher_name',
  image_url: 'image_url',
  url: 'url',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  category_name: 'category_name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceCategoryScalarFieldEnum = {
  resource_id: 'resource_id',
  category_id: 'category_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.RoleEnum = exports.$Enums.RoleEnum = {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_SECRETARY: 'ROLE_SECRETARY',
  ROLE_USER: 'ROLE_USER'
};

exports.ResourceLang = exports.$Enums.ResourceLang = {
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

exports.ResourceInstanceStatus = exports.$Enums.ResourceInstanceStatus = {
  GOOD: 'GOOD',
  POOR: 'POOR',
  DAMAGED: 'DAMAGED',
  LOST: 'LOST',
  ARCHIVED: 'ARCHIVED'
};

exports.ResourceTypes = exports.$Enums.ResourceTypes = {
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

exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  UserRole: 'UserRole',
  Loan: 'Loan',
  Resource: 'Resource',
  ResourceDetail: 'ResourceDetail',
  ResourceInstance: 'ResourceInstance',
  ResourceType: 'ResourceType',
  Publisher: 'Publisher',
  Category: 'Category',
  ResourceCategory: 'ResourceCategory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
