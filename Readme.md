> Platforms offers functions like -

- Users to ask questions
- Answer them
- Comment on answers
- Likes and follows
- Topic wise Tags

# DESIGN DOC

# API Endpoints

## User Actions

### POST/users

- Des: Registers a new user
- Body :
  - username: string (req)
  - email: string (req)
- Res : 201 - created
- Returns: User object with user details

### GET/users/[userId]

- Des: Retrives user profile info
- Res: 200 -OK
- Returns: User profile data

### PUT/users/[userId]

- Des: Updates user profile.
- Body:
  - username: string (Opt)
  - email: string (Opt)
  - bio: sting (Opt)
- Res: 200 -OK
- Returns: Updated user object

## Question Management

### POST/ques

- Des: Allows user to post ques
- Body:
  - userId
  - title
  - body
  - topicTags
- Res: 201 -Created
- Returns: Question object

### GET/ques/search

- Des: Search questions based on text and tags
- Query Params
  - text: string(Opt)
  - tag: string(Opt)
- Res: 200 -OK
- Return: Array of matched question objects

## Answer Management

### POST/que/{questionId}/ans

- Des: Post an answer to a question
- Body:
  - userId: ID(req)
  - text: string(req)
- Res: 201 - Created
- Returns: Answer object

### PUT/answers/{answerId}

- Des: Edit an existing answer
- Body:
  - text: string(req)
- Res: 200 - OK
- Returns: Updated answer object

## Comment Management

### POST/answers/{answerId}/comments

- Des: Comment on an answer
- Body:
  - userId: Id(req)
  - text: string(req)
- Res: 201 - Created
- Returns: Comment object

### POST/comments/{commentId}/comments

- Description: Comment an another comment
- Body:
  - userId: Id(req)
  - text: string(req)
- Res: 201 - Created
- Returns: Comment object

## Like Management

### POST/{type}/{id}/like

- Des: Like a ques, answer, or comment
- Path Params:
  - type: "question","answers","commnets"
  - id: ID
- Body:
  - userId: ID(req)
- Res: 201 - Created
- Returns: Success Message

## Follow Management

### POST/users/{userId}/follow/{targetUserId}

- Des: Follow another user.
- Path Params:
  - userId: ID (submitters ID, req)
    -targetUserId: ID(the user to be followed, req)
- Res: 201 -Created
- Returns: Success message

## Topic Management

### POST/topics

- Des: Create a new topic
- Body:
  - name: string(req)
- Response: 201 -Created
- Returns: Topic object

### GET/topics

- Des: Retrieve all topics
- Res: 200 -OK
- Returns: Array of topic objects

## DATA MODELS

## User

- id: ID
- username: string
- email: string
- bio: string(opt)

## Question

- id: ID
- title: string
- body: string
- topics: array of Topic IDs
- created_at: timestamp
- user_id: ID

### Answer

- id: ID
- question_id: ID
- text: string
- created_at: timestamp
- user_id: ID

### Comment

- id: ID
- parent_id: ID (ID of ans or another comment)
- text: string
- created_at: timestamp
- user_id: ID

### Topic

- id: ID
- name: string
