# Dweets Spec

## APIs

### User's profile photo

https://pbs.twimg.com/profile_images/1377594486683955203/LWhdzk2f_400x400.jpg


### Auth

`User` Schema

```json
{
    "id": string,  // 사용자의 고유한 id
    "username": string, // 사용자 닉네임
    "password": string,
    "name": string,   // 사용자 이름
    "email" : string,
    "url": string, (optional) // 프로필 이미지
}
```

### `POST` /auth/signup

#### Request

```json
{
    "username": string,
    "password": string,
    "name": string,
    "email" : string,
    "url": string, (optional)
}
```

#### Response `201`

```json
{
    token,
    username
}
```

### `POST` /auth/login

#### Request

```json
{
    "username": string,
    "password": string
}
```

#### Response `200`

```json
{
    token,
    username
}
```

### `GET` /auth/me

#### Response `200`

```json
{
    token,
    username
}
```

### Tweet

```json
{
  "id" : string, // 트윗 아이디
  "url": string, // 유저 프로파일 이미지
  "name": string, // 사용자 이름
  "username" : string, // 사용자 닉네임
  "createdAt" : Date, // 생성 시간
  "text" : string, // 트윗 내용
}
```

### `GET` /posts

#### Response `200`

```json
{
  [
    tweet, tweet, tweet, ...
  ]
}
```

### `GET` /posts/:id

#### Response `200`

```json
{
     tweet
}

```

### `POST` /posts

#### Request

```json
{
  text,
  name,
  username,
  url
}
```
#### Response `201`

```json
{
  tweet
}
```

### `GET` /posts?username=:username

#### Response `200`

```json
{
  [
    tweet, tweet, tweet, ...
  ]
}
```

### `PUT` /posts/:id

```json
{
     text,
}
```

#### Response

```json
{
  tweet
}
```

### `DELETE` /posts/:id

#### Response `204`




