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