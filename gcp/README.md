# GCP 정리

![image](https://user-images.githubusercontent.com/35194820/194704057-52b3e511-7917-4555-a87d-ac97d8e38a12.png)

GCP 자격증 획득을 위해 자료 정리

## 0. GCP란?

Google Cloud Platform(GCP) 은 구글의 퍼블릭 클라우드 서비스

## 1. Clouding Computing 정의

![image](https://user-images.githubusercontent.com/35194820/194704013-e3f42611-ef2a-4026-a12e-80d0afb9101b.png)

- On-demand self-service : 간단한 인터페이스를 사용하여 필요한 처리, 성능, 스토리지 및 네트워크를 얻을수 있음
- Broad network access : 어디에서든 인터넷을 통해 리소스에 엑세스가 가능하다.
- Resource pooling : 리소스 제공업체 (클라우드 제공업체) 는 거대한 리소스 풀을 보유하고 있으며 이 풀의 리소스를 고객에게 할당한다.
- Rapid elasticty : 리소스가 탄력적이다. 리소스가 추가로 필요하면 신속하게 확보할 수 잇고 리소스가 적게 필요하면 축소할 수도 있다.
- Mesured service : 고객은 사용하거나 예약한 만큼만 비용을 지불하면 된다. 리소스 사용을 중단하면 지불도 중단된다.

### Clouding Computing Architecture

- IaaS (Infrastructure as a Service) : 컴퓨팅, 네트워킹, 스토리지 및 기타 인프라 자원을 빌려서 사용할수 있기 때문에 개발자는 자기 입맛대로 서비스를 구축할수 있다. 대표적인 서비스로는 Compute Engine이 있다.
- Paas (Platform as a Service) : 서비스 개발 시 필요로 하는 플랫폼을 제공한다. 개발자는 이러한 플랫폼을 이용하여 미들웨어나 프레임워크를 설치하지 않고도 보다 쉽게 서비스를 구축할 수있다. 대표적인 서비스로는 App Engine 이 있다.
- Saas (Service as as Service) : 클라우드 환경에서 운영되는 소프트웨어를 의미한다. 대표적인 서비스로 BigQuery, AutoML이 있다.

## 2. GCP 대표 서비스

- 컴퓨팅
- 스토리지
- 빅데이터
- 머신러닝

## 3. GCP 리전 및 영역

![image](https://user-images.githubusercontent.com/35194820/194705825-2ca5bb42-5795-4c80-9880-0fabc5688266.png)

- 리전 : 논리적 위치 (대륙 단위)
- 존 : 물리적 위치

GCP에서 가상 머신을 시작하면 가상 머신은 지정한 영역에서 실행된다. GCP 리소스를 위치시킬 리전을 직접 선택이 가능하며 한 리전 내의 모든 영역은 네트워크 연결이 빠르며 지연시간은 5밀리세컨드 미만이다.

## 4. GCP 리소스 계층 구조

모든 GCP 리소스는 프로젝트에 속한다. 프로젝트를 기반으로 API 관리, 결제등, Google Cloud 서비스를 활성화하고 사용하는 작업을 수행하게 된다.

필요에 따라 프로젝트는 폴더로 구성할 수 있으며 폴더에 다른 폴더를 포함할 수도 있다. 

![image](https://user-images.githubusercontent.com/35194820/194707733-c1a400d4-307f-4ff1-af7b-5983c0d3ed80.png)

예를 들어 조직에서 사용하는 모든 폴더와 프로젝트는 조직 노드 아래에 모을 수 있다.
프로젝트, 폴더, 조직 노드에는 모두 정책이 정의될수 있다.

### 프로젝트 식별자

![image](https://user-images.githubusercontent.com/35194820/194708168-92e5265d-bea9-4538-ad4d-62968734bc4a.png)

- 프로젝트 ID는 영구적이고 변경할 수 없는 식별자이며 GCP 전체에 고유한 값이다.
- 프로젝트 이름은 사용자의 편의를 위한 것으로 직접 할당할수 있다.

## 5. IAM (Identity and Access Management)

![image](https://user-images.githubusercontent.com/35194820/194708655-b82c9409-9838-43bc-b081-093bea1db997.png)

IAM은 구글 클라우드 서비스의 ID 및 엑세스 관리를 할 수 있도록 제공해주는 서비스로 누가(ID) 어떤 리소스(GCP Service)에 대한 어떤 엑세스 권한(Role) 을 갖는지 제어할 수 있게 한다.
IAM을 시용히면 관리자는 누가, 언제, 어떤 리소스에 접근하여 이용하는지에 대한 제어를 할 수 있어서 클라우드 리소스를 중앙에서 쉽게 관리할 수 있다.

권한을 역할로 그룹화하여 관리한다.

### 권한

IAM에서 권한은 `<service>`,`<resource>`, `<verb>` 형태로 나타난다.

<img width="885" alt="image" src="https://user-images.githubusercontent.com/35194820/194732896-fb06e6e0-30af-4151-ba62-26145371e473.png">


### IAM의 기본 역할

역할은 `Owner`, `Editor`, `Viewer` 3가지 타입이 존재한다.

- Viewer : 리소스를 Read 만 할수 있고 수정을 할수 없다.
- Editor : 리소스를 Read 뿐 만 아니라 수정도 가능하다.
- Owner : 리소스를  Read 뿐 만 아니라 수정도 가능하며 리소스에 대한 역할 및 권한을 관리할 수 있다.

### gcloud 명령어

![image](https://user-images.githubusercontent.com/35194820/211735421-de8940cd-d7b9-47d8-931b-ef4927b6537d.png)

## 6. GCP 접근 방식

<img width="950" alt="image" src="https://user-images.githubusercontent.com/35194820/194733019-872b6040-0df5-49ab-8ed1-0cb39ccecec7.png">

1. 웹브라우저
2. CLI
3. 모바일 어플리케이션
4. REST API

## 7. Compute Engine

### Compute Engine이란?

GCP 에서 제공하는 가상 머신(VM) 서비스로써 AWS 의 EC2 에 해당하는 서비스이다.
GCP에서 다양한 인스턴스 구성 및 이미지를 제공하며 임의로 인스턴스 시스템 구성을 설정할 수 있는 커스텀 머신 유형도 제공한다.

### 대표적인 옵션

- 스토리지 : HDD 또는 SSD, SSD는 VM 이 종료되면 데이터는 유실된다.
- OS : Linux or Windows server
- CPU 갯수
- 메모리 

### 스냅샷

- 현재 VM의 상태(환경 설정)를 스냅샷으로 저장하여 복제를 하거나 다른 환경에 마이그레이션이 가능하다.
또한 마켓플레이스에 출시하여 다른 사람이 이용하는 것도 가능하다.
- 스냅샷 스케쥴을 통해서 스냅샷을 백업이 가능하다.


### Preemptible Virtual Machine (PVM)

GCE 에서 제공하는 VM instance 의 한 종류로 AWS 의 spot instance와 매우 비슷한 성격을 가지고 있다.

일반 VM에 비해 80%까지 저렴하게 사용할 수 있는데, 가격이 싼 대신에 몇가지 제약사항이 있다.

- 24 시간 뒤에 자동으로 삭제된다. 
- 다른쪽에서 해당 리소스를 사용하게 될 경우 내 PVM이 자동 종료될 수도 있다. (Preemptible -선점가능한) 
- auto restart 불가능하고 live-migration 작업도 불가능하다

위와 같은 제약사항때문에 PVM은 테스트 작업이나 단시간에 실행되는 __batch process job__, __fault tolerant__ 한 application에 사용하기 적합하다.

### Managed Instance Group (관리형 인스턴스 그룹)

인스턴스 그룹은 단일 항목으로 관리할 수 있는 가상 머신 (VM) 인스턴스 모음이다. Compute Engine은 관리형 및 비관리형이라는 두 가지 VM 인스턴스 그룹을 제공한다.

- 관리형 인스턴스 그룹(MIG)을 사용하면 동일한 여러 VM에서 앱을 운영할 수 있다. __자동 확장__, __자동 복구__, __리전(멀티 영역) 배포__, __자동 업데이트__ 등의 자동화된 MIG 서비스를 활용하여 워크로드의 확장성 및 가용성을 높일 수 있다.
- 비관리형 인스턴스 그룹을 사용하면 직접 관리하는 여러 VM에서 부하 분산을 수행할 수 있다.

### Configurations

VM 을 생성할 때 필요한 리소스를 정의한 configuration 파일을 생성하고 activate [config file] 을 통해서 VM을 빠르게 생성이 가능하다.

## 8. VPC

VPC(Virtual Private cloud)는 GCP 리소스를 위한 관리형 네트워킹 기능을 제공한다.

VPC 네트워크는 GCP 내에서 가상화된다는 점을 제외하면 실제 네트워크와 거의 동일한 방식으로 제공한다.

VPC는 가상화된 여러 네트워크 인터페이스를 지원한다.

### VPC 네트워크 특징

- VPC 네트워크는 연결된 라우터와 방화벽 규칙을 포함한 전역 리소스이다.
- 내부 IP주소가 있는 인스턴스는 Google API 및 서비스와 통신할 수 있다.
- Cloud Load Balancing
- Cloud DNS
- Cloud CDN : 에지 캐쉬 시스템, CDN 을 통해 애플리케이션의 콘텐츠 전송 속도를 높일 수 있다.
- VPC를 통해 회사 내에 다른 프로젝트를 연결할수 있다. (피어 투 피어, 공유 VPC)

## 9. GCS (Google Cloud Storage)

GCP의 대표적인 객체 Repository이다. 이를 이용하면 데이터 양에 관계없이 언제, 어디서나 데이터를 저장하고 이를 가져올수 있다.
비슷한 서비스로는 AWS 의 S3가 있다.

데이터를 스토리지에 저장이 되면 고유키와 바인딩이 된다. 고유키는 URL 형식이 되는 데 이것은 웹 기술과 원할하게 상호작용한다는 것을 의미한다

### 버킷

데이터는 `버킷` 이라는 곳에 저장이 된다.

- 버킷안에 또 다른 버킷은 생성할수 없다.
- 버킷은 전연에서 고유해야 한다.
- 버킷 생성 시 전역에서 고유한 이름, 버킷과 컨텐츠가 저장되는 지리적 위치, Repository 등급을 지정한다.

### 객체

- 객체는 간단히 말하면 버킷에 저장되는 파일을 뜻한다.
- 객체는 크게 `객체 데이터` 와 `객체 메타 데이터` 2가지로 구성이 된다.
- 객체 메타 데이터는 키-밸류 형태고 구성이 된다.
- 객체는 변경이 불가한다. 변경을 하고 싶으면 삭제 후 다시 업로드하거나 덮어써야 한다.

### ACL

버킷 및 객체에 액세스 할 수 있는 수준을 정의하는 도구이다.
보통의 경우는 IAM 으로 충분하며 더 세밀한 제어를 위해서 ACL를 사용하는 것이다.

### Repository 등급

버킷을 생성할 때 저장할 데이터의 특징에 띠리 4개의 등급으로 나뉜다.

![image](https://user-images.githubusercontent.com/35194820/194873232-ba2a89b1-3e25-4826-b415-fe8a85f76d64.png)

- `Regional Storage` : 데이터를 특정한 GCP 리전에 저장할 수 있다. 중복성이 낮으며 가상 머신과 가까운 곳에 데이터를 저장한다면 컴퓨팅 능력이 향상된다.
- `Muliti-Regional Storage` : 데이터를 다양한 리전에 중복해서 저장할 수 있다. 자주 엑세스하는 데이터를 저장하는 데 적합하다. 예를 들어 웹사이트 컨텐츠, 게임 데이터
- `Nearline Storage` : 자주 액세스하지 않은 데이터를 저장하는 데 적합, 주로 한달에 한번정도 액세스할 때 적합
- `Coldline Storage` : 1년에 한번 꼴로 액세스할 때 주로 사용, 주로 데이터 백업용

### Cloud Storage Object Lifecycle Management 

스토리지의 데이터 저장/삭제를 자동으로 관리해주는 도구이다.
예를 들어 30일 이 후에 Regional Storage에서 Coldline Storage 으로 백업하고 1년 후에 Coldline Storage 의 데이터를 자동으로 삭제가 가능하다.

## 10. Google Cloud Bigtable

- 구글의 NoSQL 빅데이터 데이터베이스이다.
- 지연시간이 아주 짧은 대량의 데이터를 저장하는 데 적합하다.
- 사물인터넷, 사용자 분석, 금융데이터 분석을 포함하여 운영 및 분석 애플리케이션에 적합하다.

## 11. Cloud SQL & Cloud Spanner

### Cloud SQL

- GCP의 관계형 데이터베이스이다.
- MySQL 또는 PostgreSQL 데이터베이스 엔진을 사용한다.
- 자동 장애 조치를 통해 여려 영역 간에 데이터를 복제할 수 있도록 지원한다.
- 온디멘드 또는 예약된 백업을 통해 데이터 백업을 지원한다.

### Cloud Spanner

- GCP의 관계형 데이터베이스이다.
- 수평 확장성을 제공한다.
- 관계형 데이터베이스 이상이 필요하고 고성능 처리량을 위해 데이터베이스를 샤딩하며 트랜잭션 일관성, 글로벌 데이터 strong consistency가 필요하거나 데이터베이스를 통합하려는 경우 고려된다.
- 일반적인 사용 사례로는 금융 애플리케이션과 인벤토리 애플리케이션이 있다.

## 12. Cloud Datastore

- Bigtable 와 같이 NoSQL 기반이다.
- 소량의 데이터 읽기, 쓰기 에 적합하다.

## 13. 레포지토리 비교

![image](https://user-images.githubusercontent.com/35194820/195979746-90e1532d-5c3b-42c2-ac8c-4572ec0fee80.png)

## 14. Kubernetes

<img width="477" alt="image" src="https://user-images.githubusercontent.com/35194820/196013971-72b1bc27-e808-4cf1-9275-5dd7461f3540.png">

쿠버네티스는 Iaas 와 Pass 의 특성을 모두 가지고 있다.

### Container

<img width="427" alt="image" src="https://user-images.githubusercontent.com/35194820/196014504-d425fde3-8db2-474c-8c8c-288afb0833d9.png">

- 소프트웨어를 패키징을 하는 도구이다.
- 컨테이너의 목적은 PaaS 환경처럼 워크로드의 독립적인 확장성을 제공하고 IaaS 환경처럼 운영체제 및 하드웨어의 추상화 계층을 제공하는 것이다.
- 컨테이너 이미지의 가장 일반적인 형식은 오픈소스 도구인 `Docker` 에서 정의한 형식이다.

### Kubernetes

<img width="402" alt="image" src="https://user-images.githubusercontent.com/35194820/196014561-c545b6cb-ce9b-4f34-968c-bacea514126f.png">

- 애플리케이션을 더 효과적으로 관리하고 확장하기 위한 컨테이너용 오픈소스 조정자이다.
- 여러 호스트의 많은 컨테이너를 조정하고 확정하고 새 버전을 출시하고, 문제가 생기면 이전 버전으로 쉽게 롤백하는 작업도 쉽게 만들어 준다.

### Cluster & Node

<img width="332" alt="image" src="https://user-images.githubusercontent.com/35194820/196014924-a120d069-06fd-4531-8ed9-650156f2b781.png">

- 쿠버네티스는 `클러스터` 라는 노드의 집합에 컨테이너를 배포하는 머신(컴퓨팅 인스턴스) 그룹이다.
- `노드` 는 컴퓨팅 인스턴스를 의미한다.
- 클러스터를 얻기 위해 GCP에서는 `Kubernetes Engine` 을 제공한다. 

### Pod

![image](https://user-images.githubusercontent.com/35194820/196026249-bc51341d-431f-4968-9e4c-1554ed3cebe9.png)

- 쿠버네티스는 포드 단위로 컨테이너를 배포한다.
- 일반적으로 포드는 하나의 컨테이너만 있지만 상호 의존성이 높은 컨테이너가 여러 개 이쓰면 이들을 하나의 포드로 패키징한다.

### Node Pool

- 클러스터 내에서 같은 Configuration 을 사용하는 노드의 집합이다.
- 노드는 한개 또는 그 이상이 될 수 있다.

### DemonSet

__노드 전체__ 에 pod 을 띄울 때 사용한다.

<img width="629" alt="image" src="https://user-images.githubusercontent.com/35194820/210364179-9145c0de-6e02-496f-8476-01620e52965b.png">

### ReplicaSet

명시된 동일 Pod 의 갯수를 항상 유지시키 위해 사용된다.

### StalefulSet

Pod이 삭제하고 다시 시작했을 때 이전의 상태를 계속 유지하고 싶을 때 사용한다.

대표적인 UseCase는 다음과 같다.

- 안정적이고 고유한 네트워크 식별자가 필요한 경우
- 안정적이고 지속적인 스토리지를 사용해야 하는 경우
- 질서 정연한 포드의 배치와 확장을 원하는 경우
- 포드의 자동 롤링업데이트를 사용하기 원하는 경우

### Horizontal Pod Autoscaling

부하 증가에 대해 Pod 를 더 배치하는 것이다.

### Kubernetis Secret

Kubernetes Secrets를 사용하면 비밀번호, OAuth 토큰 및 SSH 키와 같은 민감한 정보를 저장하고 관리할 수 있음

### Autopliot

GKE Autopilot은 Google에서 노드, 확장, 보안, 기타 사전 구성된 설정을 포함한 클러스터 구성을 관리하는 GKE의 작동 모드입니다. Autopilot 클러스터는 대부분의 프로덕션 워크로드를 실행하고 Kubernetes 매니페스트에 따라 컴퓨팅 리소스를 프로비저닝하도록 최적화되어 있습니다. 간소화된 구성은 클러스터 및 워크로드 설정, 확장성, 보안에 대한 GKE 권장사항을 따릅니다.

## 15. App Engine

- 인프라에 대해 전혀 신경 쓰고 싶지 않고 코드에만 집중하고 싶을 때 사용한다.
- PaaS 기반
- 웹 애플리케이션이 필요로 하는 서비스를 기본으로 제공한다. (NoSQL DB, 인메모리 캐싱, 부하 분산, 등..)
- 워크로드가 매우 가변적이거나 예측할 수 없는 애플리케이션에 적합하다.

### 표준 환경

- 일부 서비스 사용에 대한 무료 일일 사용 할당량을 제공한다.
- 코드를 실행할 때 구글이 제공하는 런타임을 사용한다.
  - Java, Php, Python, Go
- 여러 제약 사항이 존재한다.
  - 로컬 파일을 Write 하지 못한다.
  - 타임아웃 60초로 제한한다.
  - 3rd party 소프트웨어를 사용하지 못한다. 
  - 보다 세말하게 확장할 수 있다.

### 가변 환경

- 컨테이너 기반으로 동작한다.
- 위에 언급된 제약 사항을 회피하고 싶을 때 사용한다.
- SSH 연결을 사용할수 있다.

## 16. Cloud Functions

- 서버나 런타임 바이너리에 대해 고려하지 않아도 된다.
- Node JS 를 기반으로 자바스크립트 코드를 실행한다.
- 100 ms 간격으로 실행 될 때 마다 비용을 지불한다.
- 동작 방식은 먼저 관심있는 이벤트를 등록하고 자바스크립트 함수와 연결한다. 그러면 이벤트가 발생할 때마다 함수가 응답한다.

## 17. Stack Driver

![image](https://user-images.githubusercontent.com/35194820/196422907-fc93bb26-99df-413e-b2b7-e6652d4317d3.png)

- 모니터링, 로깅 및 진단을 위한 GCP 도구이다.

## 18. Bigdata Platform

![image](https://user-images.githubusercontent.com/35194820/196430378-8f49ff13-5676-47e9-ba3b-3bc772530f0a.png)

### Dataproc

- Hadoop, Spark, Hive, Pig를 관리형으로 쉽고 빠르게 실행 가능하게 한다.
- 실행되는 클러스터를 스케일 업, 다운을 할수 있다.
- 데이터 세트의 크기를 알고 있거나 클러스터 크기를 직접 관리하려는 경우에 유용하다.

### Dataflow

- 데이터의 크기나 속도를 예츨할수 없을 때 유용하다.
- 통합 프로그래밍 모델이자 관리형 서비스로 광범위한 데이터 처리 패턴을 개발하고 실행할 수 있도록 해준다.
- 필요한 처리 리소스의 관리를 완전히 자동화한다.

### BigQuery

- 대규모 데이터 세트에 대해 임시 SQL 쿼리를 수행하려고 할 때 유용하다.
- 관리할 인프라가 없으며 사용한 만큼만 지불하면 된다.
- 구글 인프라와 마찬가지로 전역적이다.

### Pub/Sub

- 빌드 중인 독립 애플리케이션에서 메시지를 보내고 주고 받을수 있다.
- 간소하며 안정성과 확장성이 높은 스트림 분석을 지원한다.
- pub 은 publisher의 약자이며 sub 는 subscriber 의 약자이다.
- 메시지 송수신이 비동기 방식으로 동작한다.

### Datalab

- Jupiter notebook 처럼 Python 코드를 대화식으로 실행하고 결과를 볼 수 있다.
- Google 차트 또는 매트로프롯을 사용하여 데이터 시각화할 수 있다.

## 19. Transfer Appliance

On Premise 환경에서 GCP로 데이터를 안전하고 빠르게 전송할 때 사용하는 서비스

## 20. Storage Transfer Service 

서로 다른 GCP Storage 데이터를 옮길 때 사용한다.

## 22. Cloud Foundation Toolkit

온프레미즈에서 GCP 로 마이그레이션을 할 때 빠르고 쉽게 배포할수 있도록 해주는 권장사항 템플릿이다.
해당 템플릿은 테라폼이나 Deployment Manager 으로 변환이 가능하다.

### Terraform

테라폼은 하시코프에서 오픈소스로 개발중인 클라우드 인프라스트럭처 자동화를 지향하는 코드로서의 인프라스트럭처(Infrastructure as Code, IaC) 도구입니다. IaC는 코드로 인프라스트럭처를 관리한다는 개념으로 테라폼에서는 하시코프 설정 언어HCL, Hashicorp Configuration Language을 사용해 클라우드 리소스를 선언합니다

## 21. Cloud Deployment Manager

> Google Cloud 리소스의 생성 및 관리를 자동화하는 인프라 배포 서비스.

### 특징

- Repeatable deployment process : 동일한 결과를 내는 반복적인 배포가 가능하며 하나의 명령이나 클릭으로 전체 배포를 삭제할 수 있다.
- Declarative language
- Focus on the application : 각각의 리소스를 따로 배포하는 대신에, 어플리케이션이나 서비스를 구성하는 여러 리소스의 집합을 지정할 수 있다.

### 리소스의 종류

- Instances
- Instance templates and groups to VPC networks
- Firewall rules
- VPN tunnels
- Cloud routers, and Load balancers

### 구성

생성하려는 각 리소스와 해당 리소스 속성이 나열된 YAML 구문으로 작성된 파일이다

## 23. On Premise 와 GCP 연결 방법

- Cloud Interconnect
- VPN 을 만들고 VPC와 연결 : 이 방법이 저렴하다.

## 24. Cloud Interconnect

온프레미즈 환경과 GCP를 연결해주는 서비스이다. 종류는 Partner와 Dedicated 두 종류가 있다.

![image](https://user-images.githubusercontent.com/35194820/210913299-1d13750a-2dc9-46c4-9f62-07a8d61f2219.png)

## 25. IAP

외부에서 Cloud Resource 를 접근하기 위해서는 Cloud resource 는 public IP를 가져서 외부에 노출해야 하는데 DB 같이 public IP 를 가지지 않으면서 외부에서 접근하기 위해서는 IAP를 사용한다.

## 27. Load Balancer

- 유저 트래픽을 여러개의 인스턴스에 분산하는 것
- Single Point to multiple backend
- Health check 를 통해 Auto Scaling
- External 과 Internal 타입이 있다.

### HTTP(S) Load Balancer

- 지역별, 또는 컨텐트 베이스로 부하를 분산할수 있다.

![image](https://user-images.githubusercontent.com/35194820/212017324-22e0fb93-c1e7-4379-95c0-2ed532bbef2a.png)


## 26. 요약

### Comaparing compute options

![스크린샷 2022-10-19 오후 9 22 38](https://user-images.githubusercontent.com/35194820/196689870-70bb0280-5548-4868-b596-ce443a3bb08a.png)

