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

현재 VM의 상태(환경 설정)를 스냅샷으로 저장하여 복제를 하거나 다른 환경에 마이그레이션이 가능하다.
또한 마켓플레이스에 출시하여 다른 사람이 이용하는 것도 가능하다.

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

Hadoop, Spark, Hive, Pig를 관리형으로 쉽고 빠르게 실행 가능하게 한다.

### Dataflow

### BigQuery

### Pub/Sub

### Datalab
