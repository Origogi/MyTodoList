# Infra 용어 정리

## 온프레미스

기업의 서버를 원격 환경에서 운영하는 방식이 아닌, 자체적이로 보유한 전산실 서버에 직접 설치해 운영하는 방식
온프레미스는 클라우드 컴퓨팅 기술이 나오기 전까지 기엄 인프라 구축의 일반적인 방식이다. 

### 장점

기업의 비지니스 정보를 보안성 높게 관리할 수 있다는 것

### 단점

시스템을 구축하는데 있어서 많은 시간과 비용이 들어간다.

## JWT

- Json Web Token 의 약자로, 웹 표준으로 지정된 JSON 기반의 토큰이다.
- Header, Payload, Signature 세 부분으로 구성되어 있다.
  - Header : 토큰의 타입과 해시 알고리즘으로 구성되어 있다.
  - Payload : 토큰에 담을 정보가 들어있다.
  - Signature : 인코딩을 위한 정보가 포함, 토큰을 인코딩하고, 토큰이 변조되지 않았는지 확인하는데 사용된다.

### 장점

- 토큰 기반 인증 방식으로, 서버에서 세션을 관리할 필요가 없다.

### 단점

- 토큰이 클라이언트에 저장되어 있기 때문에, 토큰을 탈취당하면 토큰을 사용해 인증을 할 수 있다.

## bcrypt

- password hashing function
- 아이디와 패스워드를 안전하게 보관

## SQL

- 컬럼, 로우로 이루어진 테이블 형태의 데이터베이스
- 데이터베이스의 스키마를 미리 정의해야 한다.
- 각 행마다 데이터 타입 및 속성(Not Null, Auto Increase)을 정의한다.
- 테이블 간의 관계를 정의한다.

### Data Intergity

- 데이터의 정확성과 일관성을 유지하고 보증하는 것(스키마를 이용해서)

### Primary Key

- 테이블에서 각 행을 고유하게 식별할 수 있는 컬럼
- 검색 최적화

### Foreign Key

- 두 가지 다른 테이블의 관계를 지정
- 다른 테이블의 Primary Key 를 참조하는 컬럼

### SQL Query

- SELECT : 어떤 행을 가져올건 지
- FROM : 어떤 테이블에서 가져올건지
- WHERE : 어떤 조건을 만족하는지 (Predicate)

## NoSQL

- Object 자체를 저장하기 위한 DB
- 서로 관계가 없다. (Isolated), 따라서 분산해서 저장이 용이하다.
- GCP Bigtable, AWS DynamoDB, MongoDB, Redis 등이 있다.
- 스키마가 없다.
- 데이터 중복이 발생할수 있다.

### Type

- Key-Value
- Document
  - document : 데이터를 저장하는 단위
  - collection : document 의 집합
- Wide Column
- Graph
