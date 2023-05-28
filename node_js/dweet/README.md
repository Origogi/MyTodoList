# Dweets Spec

## APIs

### User's profile photo

https://pbs.twimg.com/profile_images/1377594486683955203/LWhdzk2f_400x400.jpg
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




