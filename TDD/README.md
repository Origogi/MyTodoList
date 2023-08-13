# TDD

## Unit test

- Test Runner : 테스트를 실행후 결과 생성
  - Mocha
- Assertion : 테스트 조건, 비교를 통한 테스트
  - Chai
  - expect.js
  - better-assert

- Test Runner + Assertion = `Jest`

## Secrete of Test Code 

- 한번 작성된 테스트 코드는 유지보수 되어야 한다.
- 내부 구현 사항은 테스트 x
- 재사용성 높이기
- 배포용 코드와 철저히 분리
- 테스트 코드를 통한 문서화

## 테스트 코드 구조

- before : 테스트 코드 실행 전 준비
  - beforeEach : 각 테스트 코드 실행 전 준비
  - beforeAll : 테스트 코드 전체 실행 전 준비
- after : 테스트 코드 실행 후 정리
  - afterEach : 각 테스트 코드 실행 후 정리
  - afterAll : 테스트 코드 전체 실행 후 정리

## 테스트 코드 작성 순서(Triple A)

1. 준비 (Arrange)
2. 실행 (Act)
3. 검증 (Assert)

## 좋은 테스트의 원칙 (FIRST)

1. Fast : 느린것에 대한 의존성 낮추기 (파일, 데이터베이스, 네트워크)
2. Isolated : 최소한의 유닛으로 검증하기 (독립적이, 집중적으로 유지)
3. Repeatable : 반복 가능한 테스트 (동일한 결과)
4. Self-Validating : 통과/실패 여부 명확 (Jest Assertion Library 사용)
5. Timely : 사용자에게 배포하기 이전에 작성

## 테스트의 범위 (Right - BICEP)

1. Boundary Conditions : 모든 코너 케이스에 대해서 테스트하기 (잘못된 포맷, null, undefined, 0, 빈 문자열, 최대값, 최소값)
2. Inverse Relationships : 반대로 동작하는 경우에 대해서 테스트하기 (덧셈 -> 뺄샘, 추가 -> 제거)
3. Cross-Check : 다른 수단을 이용해서 결과값이 맞는 지 확인 (A 알고리즘 === B 알고리즘)
4. Error conditions : 불행한 경로에 대해서 우아하게 처리하는 가? (네트워크, 메모리 부족)
5. Performance Characteristics : 성능에 대한 확인은 테스트를 통해 정확한 수치로 확인

## 테스트의 조건 (CORRECT)

1. Conformance : 특정 포맷을 준수 (전화번호, 이메일, 확장자)
2. Ordering : 순서 조건 확인하기
3. Range : 범위 조건 확인하기 (제한된 범위보다 작거나 큰 경우)
4. Reference : 외부 의존성 유무, 특정한 조건의 유무
5. Existence : 값이 존재하지 않을 때 어떻게 동작? (null, undefined, 0, 빈 문자열)
6. Cardinality : 0-1-N, 하나도 없을 때, 하나만 있을 때, 여러개 있을 때
7. Time : 상대, 절대, 동시의 일들 (순서가 맞지 않을 때, 지역 시간ㅑ)