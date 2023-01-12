# 오답 정리

## 1. XYZ (특정 서비스) API Enable 하는 방법

- gcloud services enable xyz.googleapis.com
- gcloud services enable xyz

단 아래 서비스는 Default 로 Enable 되어 있음

- Compute Engine API
- Storage API

## 2. Cloud SDK 에서 초기화

- gcloud init

## 3. GKE pod 이 실행 중 에러가 발생한 경우

GKE 가 활성화된 node에 Pod 를 다시 시작시킨다.

## 4. Stack Driver

강화된 로깅을 위해서 Stack Driver Agent 를 설치해야한다. Compute Engine (GCE) 에 직접 설치해야 하며 App Engine (GAE), GKE 에는 기본적으로 설치가 되어 있다.

에러 로그를 참조할 때 `Stackdriver Error Reporting` 를 참조한다. `Stackdriver Error Logging` 과 햇갈리지 말자

## 5. GKE 에서 시크릿 생설 명령어

kubectl create secret generic --from-file=.env.staging

## 6. 동일한 프로젝트 내에서 버킷은 기본적으로 접근이 가능하다.

## 7. Service Account 는 엑세스 키를 여러 개(10개)를 생성할 수 있다.





