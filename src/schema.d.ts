directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
  ) on FIELD_DEFINITION | OBJECT | INTERFACE
  input AuthorInput {
    displayName: String!
    avatar: ID
    blogs: [ID]
  }
  
  type Authors {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    displayName: String!
    avatar: UploadFile
    blogs(sort: String, limit: Int, start: Int, where: JSON): [Blog]
  }
  
  type AuthorsAggregator {
    count: Int
    totalCount: Int
  }
  
  type AuthorsConnection {
    values: [Authors]
    groupBy: AuthorsGroupBy
    aggregate: AuthorsAggregator
  }
  
  type AuthorsConnection_id {
    key: ID
    connection: AuthorsConnection
  }
  
  type AuthorsConnectionAvatar {
    key: ID
    connection: AuthorsConnection
  }
  
  type AuthorsConnectionCreatedAt {
    key: DateTime
    connection: AuthorsConnection
  }
  
  type AuthorsConnectionDisplayName {
    key: String
    connection: AuthorsConnection
  }
  
  type AuthorsConnectionId {
    key: ID
    connection: AuthorsConnection
  }
  
  type AuthorsConnectionUpdatedAt {
    key: DateTime
    connection: AuthorsConnection
  }
  
  type AuthorsGroupBy {
    id: [AuthorsConnectionId]
    _id: [AuthorsConnection_id]
    createdAt: [AuthorsConnectionCreatedAt]
    updatedAt: [AuthorsConnectionUpdatedAt]
    displayName: [AuthorsConnectionDisplayName]
    avatar: [AuthorsConnectionAvatar]
  }
  
  type Blog {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    description: String!
    content: String!
    slug: String
    author: Authors
    banner: UploadFile
    isPublished: Boolean!
    publishDate: Date
  }
  
  type BlogAggregator {
    count: Int
    totalCount: Int
  }
  
  type BlogConnection {
    values: [Blog]
    groupBy: BlogGroupBy
    aggregate: BlogAggregator
  }
  
  type BlogConnection_id {
    key: ID
    connection: BlogConnection
  }
  
  type BlogConnectionAuthor {
    key: ID
    connection: BlogConnection
  }
  
  type BlogConnectionBanner {
    key: ID
    connection: BlogConnection
  }
  
  type BlogConnectionContent {
    key: String
    connection: BlogConnection
  }
  
  type BlogConnectionCreatedAt {
    key: DateTime
    connection: BlogConnection
  }
  
  type BlogConnectionDescription {
    key: String
    connection: BlogConnection
  }
  
  type BlogConnectionId {
    key: ID
    connection: BlogConnection
  }
  
  type BlogConnectionIsPublished {
    key: Boolean
    connection: BlogConnection
  }
  
  type BlogConnectionPublishDate {
    key: ID
    connection: BlogConnection
  }
  
  type BlogConnectionSlug {
    key: String
    connection: BlogConnection
  }
  
  type BlogConnectionTitle {
    key: String
    connection: BlogConnection
  }
  
  type BlogConnectionUpdatedAt {
    key: DateTime
    connection: BlogConnection
  }
  
  type BlogGroupBy {
    id: [BlogConnectionId]
    _id: [BlogConnection_id]
    createdAt: [BlogConnectionCreatedAt]
    updatedAt: [BlogConnectionUpdatedAt]
    title: [BlogConnectionTitle]
    description: [BlogConnectionDescription]
    content: [BlogConnectionContent]
    slug: [BlogConnectionSlug]
    author: [BlogConnectionAuthor]
    banner: [BlogConnectionBanner]
    isPublished: [BlogConnectionIsPublished]
    publishDate: [BlogConnectionPublishDate]
  }
  
  input BlogInput {
    title: String!
    description: String!
    content: String!
    slug: String
    author: ID
    banner: ID
    isPublished: Boolean!
    publishDate: Date
  }
  
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }
  
  type Contact {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    email: String
    message: String
  }
  
  type ContactAggregator {
    count: Int
    totalCount: Int
  }
  
  type ContactConnection {
    values: [Contact]
    groupBy: ContactGroupBy
    aggregate: ContactAggregator
  }
  
  type ContactConnection_id {
    key: ID
    connection: ContactConnection
  }
  
  type ContactConnectionCreatedAt {
    key: DateTime
    connection: ContactConnection
  }
  
  type ContactConnectionEmail {
    key: String
    connection: ContactConnection
  }
  
  type ContactConnectionId {
    key: ID
    connection: ContactConnection
  }
  
  type ContactConnectionMessage {
    key: String
    connection: ContactConnection
  }
  
  type ContactConnectionName {
    key: String
    connection: ContactConnection
  }
  
  type ContactConnectionUpdatedAt {
    key: DateTime
    connection: ContactConnection
  }
  
  type ContactGroupBy {
    id: [ContactConnectionId]
    _id: [ContactConnection_id]
    createdAt: [ContactConnectionCreatedAt]
    updatedAt: [ContactConnectionUpdatedAt]
    name: [ContactConnectionName]
    email: [ContactConnectionEmail]
    message: [ContactConnectionMessage]
  }
  
  input ContactInput {
    name: String
    email: String
    message: String
  }
  
  input createAuthorInput {
    data: AuthorInput
  }
  
  type createAuthorPayload {
    author: Authors
  }
  
  input createBlogInput {
    data: BlogInput
  }
  
  type createBlogPayload {
    blog: Blog
  }
  
  input createContactInput {
    data: ContactInput
  }
  
  type createContactPayload {
    contact: Contact
  }
  
  input createResourceInput {
    data: ResourceInput
  }
  
  type createResourcePayload {
    resource: Resource
  }
  
  input createRoleInput {
    data: RoleInput
  }
  
  type createRolePayload {
    role: UsersPermissionsRole
  }
  
  input createUserInput {
    data: UserInput
  }
  
  type createUserPayload {
    user: UsersPermissionsUser
  }
  
  scalar Date
  
  scalar DateTime
  
  input deleteAuthorInput {
    where: InputID
  }
  
  type deleteAuthorPayload {
    author: Authors
  }
  
  input deleteBlogInput {
    where: InputID
  }
  
  type deleteBlogPayload {
    blog: Blog
  }
  
  input deleteContactInput {
    where: InputID
  }
  
  type deleteContactPayload {
    contact: Contact
  }
  
  input deleteResourceInput {
    where: InputID
  }
  
  type deleteResourcePayload {
    resource: Resource
  }
  
  input deleteRoleInput {
    where: InputID
  }
  
  type deleteRolePayload {
    role: UsersPermissionsRole
  }
  
  input deleteUserInput {
    where: InputID
  }
  
  type deleteUserPayload {
    user: UsersPermissionsUser
  }
  
  input editAuthorInput {
    displayName: String
    avatar: ID
    blogs: [ID]
  }
  
  input editBlogInput {
    title: String
    description: String
    content: String
    slug: String
    author: ID
    banner: ID
    isPublished: Boolean
    publishDate: Date
  }
  
  input editContactInput {
    name: String
    email: String
    message: String
  }
  
  input editFileInput {
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String
    ext: String
    mime: String
    size: Float
    url: String
    previewUrl: String
    provider: String
    provider_metadata: JSON
    related: [ID]
  }
  
  input editResourceInput {
    title: String
    description: String
    banner: String
    url: String
  }
  
  input editRoleInput {
    name: String
    description: String
    type: String
    permissions: [ID]
    users: [ID]
  }
  
  input editUserInput {
    username: String
    email: String
    provider: String
    password: String
    resetPasswordToken: String
    confirmed: Boolean
    blocked: Boolean
    role: ID
  }
  
  input FileInput {
    name: String!
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String!
    ext: String
    mime: String!
    size: Float!
    url: String!
    previewUrl: String
    provider: String!
    provider_metadata: JSON
    related: [ID]
  }
  
  type ForgotPassword {
    ok: Boolean
  }
  
  input InputID {
    id: ID!
  }
  
  scalar JSON
  
  scalar Long
  
  union Morph =
      UsersPermissionsMe
    | UsersPermissionsMeRole
    | UsersPermissionsLoginPayload
    | ForgotPassword
    | Authors
    | AuthorsConnection
    | AuthorsAggregator
    | AuthorsGroupBy
    | AuthorsConnectionId
    | AuthorsConnection_id
    | AuthorsConnectionCreatedAt
    | AuthorsConnectionUpdatedAt
    | AuthorsConnectionDisplayName
    | AuthorsConnectionAvatar
    | createAuthorPayload
    | updateAuthorPayload
    | deleteAuthorPayload
    | Blog
    | BlogConnection
    | BlogAggregator
    | BlogGroupBy
    | BlogConnectionId
    | BlogConnection_id
    | BlogConnectionCreatedAt
    | BlogConnectionUpdatedAt
    | BlogConnectionTitle
    | BlogConnectionDescription
    | BlogConnectionContent
    | BlogConnectionSlug
    | BlogConnectionAuthor
    | BlogConnectionBanner
    | BlogConnectionIsPublished
    | BlogConnectionPublishDate
    | createBlogPayload
    | updateBlogPayload
    | deleteBlogPayload
    | Contact
    | ContactConnection
    | ContactAggregator
    | ContactGroupBy
    | ContactConnectionId
    | ContactConnection_id
    | ContactConnectionCreatedAt
    | ContactConnectionUpdatedAt
    | ContactConnectionName
    | ContactConnectionEmail
    | ContactConnectionMessage
    | createContactPayload
    | updateContactPayload
    | deleteContactPayload
    | Resource
    | ResourceConnection
    | ResourceAggregator
    | ResourceGroupBy
    | ResourceConnectionId
    | ResourceConnection_id
    | ResourceConnectionCreatedAt
    | ResourceConnectionUpdatedAt
    | ResourceConnectionTitle
    | ResourceConnectionDescription
    | ResourceConnectionBanner
    | ResourceConnectionUrl
    | createResourcePayload
    | updateResourcePayload
    | deleteResourcePayload
    | UploadFile
    | UploadFileConnection
    | UploadFileAggregator
    | UploadFileAggregatorSum
    | UploadFileAggregatorAvg
    | UploadFileAggregatorMin
    | UploadFileAggregatorMax
    | UploadFileGroupBy
    | UploadFileConnectionId
    | UploadFileConnection_id
    | UploadFileConnectionCreatedAt
    | UploadFileConnectionUpdatedAt
    | UploadFileConnectionName
    | UploadFileConnectionAlternativeText
    | UploadFileConnectionCaption
    | UploadFileConnectionWidth
    | UploadFileConnectionHeight
    | UploadFileConnectionFormats
    | UploadFileConnectionHash
    | UploadFileConnectionExt
    | UploadFileConnectionMime
    | UploadFileConnectionSize
    | UploadFileConnectionUrl
    | UploadFileConnectionPreviewUrl
    | UploadFileConnectionProvider
    | UploadFileConnectionProvider_metadata
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsRoleConnection
    | UsersPermissionsRoleAggregator
    | UsersPermissionsRoleGroupBy
    | UsersPermissionsRoleConnectionId
    | UsersPermissionsRoleConnection_id
    | UsersPermissionsRoleConnectionCreatedAt
    | UsersPermissionsRoleConnectionUpdatedAt
    | UsersPermissionsRoleConnectionName
    | UsersPermissionsRoleConnectionDescription
    | UsersPermissionsRoleConnectionType
    | createRolePayload
    | updateRolePayload
    | deleteRolePayload
    | UsersPermissionsUser
    | UsersPermissionsUserConnection
    | UsersPermissionsUserAggregator
    | UsersPermissionsUserGroupBy
    | UsersPermissionsUserConnectionId
    | UsersPermissionsUserConnection_id
    | UsersPermissionsUserConnectionCreatedAt
    | UsersPermissionsUserConnectionUpdatedAt
    | UsersPermissionsUserConnectionUsername
    | UsersPermissionsUserConnectionEmail
    | UsersPermissionsUserConnectionProvider
    | UsersPermissionsUserConnectionConfirmed
    | UsersPermissionsUserConnectionBlocked
    | UsersPermissionsUserConnectionRole
    | createUserPayload
    | updateUserPayload
    | deleteUserPayload
  type Mutation {
    createAuthor(input: createAuthorInput): createAuthorPayload
    updateAuthor(input: updateAuthorInput): updateAuthorPayload
    deleteAuthor(input: deleteAuthorInput): deleteAuthorPayload
    createBlog(input: createBlogInput): createBlogPayload
    updateBlog(input: updateBlogInput): updateBlogPayload
    deleteBlog(input: deleteBlogInput): deleteBlogPayload
    createContact(input: createContactInput): createContactPayload
    updateContact(input: updateContactInput): updateContactPayload
    deleteContact(input: deleteContactInput): deleteContactPayload
    createResource(input: createResourceInput): createResourcePayload
    updateResource(input: updateResourceInput): updateResourcePayload
    deleteResource(input: deleteResourceInput): deleteResourcePayload
    createRole(input: createRoleInput): createRolePayload
    updateRole(input: updateRoleInput): updateRolePayload
    deleteRole(input: deleteRoleInput): deleteRolePayload
    createUser(input: createUserInput): createUserPayload
    updateUser(input: updateUserInput): updateUserPayload
    deleteUser(input: deleteUserInput): deleteUserPayload
    upload(
      refId: ID
      ref: String
      field: String
      source: String
      file: Upload!
    ): UploadFile!
    multipleUpload(
      refId: ID
      ref: String
      field: String
      source: String
      files: [Upload]!
    ): [UploadFile]!
    login(input: UsersPermissionsLoginInput!): UsersPermissionsLoginPayload!
    register(input: UserInput!): UsersPermissionsLoginPayload!
    forgotPassword(email: String!): ForgotPassword
    changePassword(
      password: String!
      passwordConfirmation: String!
      code: String!
    ): UsersPermissionsLoginPayload
    emailConfirmation(confirmation: String!): UsersPermissionsLoginPayload
  }
  
  type Query {
    author(id: ID!): Authors
    authors(sort: String, limit: Int, start: Int, where: JSON): [Authors]
    authorsConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): AuthorsConnection
    blog(id: ID!): Blog
    blogs(sort: String, limit: Int, start: Int, where: JSON): [Blog]
    blogsConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): BlogConnection
    contact(id: ID!): Contact
    contacts(sort: String, limit: Int, start: Int, where: JSON): [Contact]
    contactsConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): ContactConnection
    resource(id: ID!): Resource
    resources(sort: String, limit: Int, start: Int, where: JSON): [Resource]
    resourcesConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): ResourceConnection
    files(sort: String, limit: Int, start: Int, where: JSON): [UploadFile]
    filesConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UploadFileConnection
    role(id: ID!): UsersPermissionsRole
    roles(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): [UsersPermissionsRole]
    rolesConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UsersPermissionsRoleConnection
    user(id: ID!): UsersPermissionsUser
    users(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): [UsersPermissionsUser]
    usersConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UsersPermissionsUserConnection
    me: UsersPermissionsMe
  }
  
  type Resource {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    description: String
    banner: String
    url: String
  }
  
  type ResourceAggregator {
    count: Int
    totalCount: Int
  }
  
  type ResourceConnection {
    values: [Resource]
    groupBy: ResourceGroupBy
    aggregate: ResourceAggregator
  }
  
  type ResourceConnection_id {
    key: ID
    connection: ResourceConnection
  }
  
  type ResourceConnectionBanner {
    key: String
    connection: ResourceConnection
  }
  
  type ResourceConnectionCreatedAt {
    key: DateTime
    connection: ResourceConnection
  }
  
  type ResourceConnectionDescription {
    key: String
    connection: ResourceConnection
  }
  
  type ResourceConnectionId {
    key: ID
    connection: ResourceConnection
  }
  
  type ResourceConnectionTitle {
    key: String
    connection: ResourceConnection
  }
  
  type ResourceConnectionUpdatedAt {
    key: DateTime
    connection: ResourceConnection
  }
  
  type ResourceConnectionUrl {
    key: String
    connection: ResourceConnection
  }
  
  type ResourceGroupBy {
    id: [ResourceConnectionId]
    _id: [ResourceConnection_id]
    createdAt: [ResourceConnectionCreatedAt]
    updatedAt: [ResourceConnectionUpdatedAt]
    title: [ResourceConnectionTitle]
    description: [ResourceConnectionDescription]
    banner: [ResourceConnectionBanner]
    url: [ResourceConnectionUrl]
  }
  
  input ResourceInput {
    title: String
    description: String
    banner: String
    url: String
  }
  
  input RoleInput {
    name: String!
    description: String
    type: String
    permissions: [ID]
    users: [ID]
  }
  
  scalar Time
  
  input updateAuthorInput {
    where: InputID
    data: editAuthorInput
  }
  
  type updateAuthorPayload {
    author: Authors
  }
  
  input updateBlogInput {
    where: InputID
    data: editBlogInput
  }
  
  type updateBlogPayload {
    blog: Blog
  }
  
  input updateContactInput {
    where: InputID
    data: editContactInput
  }
  
  type updateContactPayload {
    contact: Contact
  }
  
  input updateResourceInput {
    where: InputID
    data: editResourceInput
  }
  
  type updateResourcePayload {
    resource: Resource
  }
  
  input updateRoleInput {
    where: InputID
    data: editRoleInput
  }
  
  type updateRolePayload {
    role: UsersPermissionsRole
  }
  
  input updateUserInput {
    where: InputID
    data: editUserInput
  }
  
  type updateUserPayload {
    user: UsersPermissionsUser
  }
  
  scalar Upload
  
  type UploadFile {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String!
    ext: String
    mime: String!
    size: Float!
    url: String!
    previewUrl: String
    provider: String!
    provider_metadata: JSON
    related(sort: String, limit: Int, start: Int, where: JSON): [Morph]
  }
  
  type UploadFileAggregator {
    count: Int
    totalCount: Int
    sum: UploadFileAggregatorSum
    avg: UploadFileAggregatorAvg
    min: UploadFileAggregatorMin
    max: UploadFileAggregatorMax
  }
  
  type UploadFileAggregatorAvg {
    width: Float
    height: Float
    size: Float
  }
  
  type UploadFileAggregatorMax {
    width: Float
    height: Float
    size: Float
  }
  
  type UploadFileAggregatorMin {
    width: Float
    height: Float
    size: Float
  }
  
  type UploadFileAggregatorSum {
    width: Float
    height: Float
    size: Float
  }
  
  type UploadFileConnection {
    values: [UploadFile]
    groupBy: UploadFileGroupBy
    aggregate: UploadFileAggregator
  }
  
  type UploadFileConnection_id {
    key: ID
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionAlternativeText {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionCaption {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionCreatedAt {
    key: DateTime
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionExt {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionFormats {
    key: JSON
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionHash {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionHeight {
    key: Int
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionId {
    key: ID
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionMime {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionName {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionPreviewUrl {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionProvider {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionProvider_metadata {
    key: JSON
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionSize {
    key: Float
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionUpdatedAt {
    key: DateTime
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionUrl {
    key: String
    connection: UploadFileConnection
  }
  
  type UploadFileConnectionWidth {
    key: Int
    connection: UploadFileConnection
  }
  
  type UploadFileGroupBy {
    id: [UploadFileConnectionId]
    _id: [UploadFileConnection_id]
    createdAt: [UploadFileConnectionCreatedAt]
    updatedAt: [UploadFileConnectionUpdatedAt]
    name: [UploadFileConnectionName]
    alternativeText: [UploadFileConnectionAlternativeText]
    caption: [UploadFileConnectionCaption]
    width: [UploadFileConnectionWidth]
    height: [UploadFileConnectionHeight]
    formats: [UploadFileConnectionFormats]
    hash: [UploadFileConnectionHash]
    ext: [UploadFileConnectionExt]
    mime: [UploadFileConnectionMime]
    size: [UploadFileConnectionSize]
    url: [UploadFileConnectionUrl]
    previewUrl: [UploadFileConnectionPreviewUrl]
    provider: [UploadFileConnectionProvider]
    provider_metadata: [UploadFileConnectionProvider_metadata]
  }
  
  input UserInput {
    username: String!
    email: String!
    provider: String
    password: String
    resetPasswordToken: String
    confirmed: Boolean
    blocked: Boolean
    role: ID
  }
  
  input UsersPermissionsLoginInput {
    identifier: String!
    password: String!
    provider: String = "local"
  }
  
  type UsersPermissionsLoginPayload {
    jwt: String!
    user: UsersPermissionsMe!
  }
  
  type UsersPermissionsMe {
    id: ID!
    username: String!
    email: String!
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsMeRole
  }
  
  type UsersPermissionsMeRole {
    id: ID!
    name: String!
    description: String
    type: String
  }
  
  type UsersPermissionsPermission {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    type: String!
    controller: String!
    action: String!
    enabled: Boolean!
    policy: String
    role: UsersPermissionsRole
  }
  
  type UsersPermissionsRole {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String
    type: String
    permissions(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): [UsersPermissionsPermission]
    users(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): [UsersPermissionsUser]
  }
  
  type UsersPermissionsRoleAggregator {
    count: Int
    totalCount: Int
  }
  
  type UsersPermissionsRoleConnection {
    values: [UsersPermissionsRole]
    groupBy: UsersPermissionsRoleGroupBy
    aggregate: UsersPermissionsRoleAggregator
  }
  
  type UsersPermissionsRoleConnection_id {
    key: ID
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleConnectionCreatedAt {
    key: DateTime
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleConnectionDescription {
    key: String
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleConnectionId {
    key: ID
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleConnectionName {
    key: String
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleConnectionType {
    key: String
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleConnectionUpdatedAt {
    key: DateTime
    connection: UsersPermissionsRoleConnection
  }
  
  type UsersPermissionsRoleGroupBy {
    id: [UsersPermissionsRoleConnectionId]
    _id: [UsersPermissionsRoleConnection_id]
    createdAt: [UsersPermissionsRoleConnectionCreatedAt]
    updatedAt: [UsersPermissionsRoleConnectionUpdatedAt]
    name: [UsersPermissionsRoleConnectionName]
    description: [UsersPermissionsRoleConnectionDescription]
    type: [UsersPermissionsRoleConnectionType]
  }
  
  type UsersPermissionsUser {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    username: String!
    email: String!
    provider: String
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsRole
  }
  
  type UsersPermissionsUserAggregator {
    count: Int
    totalCount: Int
  }
  
  type UsersPermissionsUserConnection {
    values: [UsersPermissionsUser]
    groupBy: UsersPermissionsUserGroupBy
    aggregate: UsersPermissionsUserAggregator
  }
  
  type UsersPermissionsUserConnection_id {
    key: ID
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionBlocked {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionConfirmed {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionCreatedAt {
    key: DateTime
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionEmail {
    key: String
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionId {
    key: ID
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionProvider {
    key: String
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionRole {
    key: ID
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionUpdatedAt {
    key: DateTime
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserConnectionUsername {
    key: String
    connection: UsersPermissionsUserConnection
  }
  
  type UsersPermissionsUserGroupBy {
    id: [UsersPermissionsUserConnectionId]
    _id: [UsersPermissionsUserConnection_id]
    createdAt: [UsersPermissionsUserConnectionCreatedAt]
    updatedAt: [UsersPermissionsUserConnectionUpdatedAt]
    username: [UsersPermissionsUserConnectionUsername]
    email: [UsersPermissionsUserConnectionEmail]
    provider: [UsersPermissionsUserConnectionProvider]
    confirmed: [UsersPermissionsUserConnectionConfirmed]
    blocked: [UsersPermissionsUserConnectionBlocked]
    role: [UsersPermissionsUserConnectionRole]
  }
  
  