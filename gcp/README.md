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
