# ExamTopics Free Test

ExamTopics 연습 문제 195개

## 1

Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?

- A. Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key in the metadata of each instance.
- B. Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance.
- C. Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the ג€compute.osAdminLoginג€ role to the Google group corresponding to this team.
- D. Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance.

### 정답 및 풀이

C

생성된 키는 전송하면 안된다

## 2

You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?

- A. 0.0.0.0/0
- B. 10.0.0.0/8
- C. 172.16.0.0/12
- D. 192.168.0.0/16

### 정답 및 풀이

B

이론적으로 A이나 A로 생성이 불가능하다. 따라서 다음 값인 B가 된다.

## 3

You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?

- A. Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.
- B. Select Cloud SQL (MySQL). Select the create failover replicas option.
- C. Select Cloud Spanner. Set up your instance with 2 nodes.
- D. Select Cloud Spanner. Set up your instance as multi-regional.

### 정답 및 풀이

A

Relational data 면 A 또는 B이다. 데이터 복구가 가능하며 최대한 비용율 효율화한다면 A가 정답이다.

- binary logging option : 특정 시점 복구 용도, 쓰기 성능 저하됨
- failover replicas : 마지막 상태만 백업하여 복구함

## 4

You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps.
You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?

- A. Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)
- B. Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10.
- C. Create a managed instance group. Set the Autohealing health check to healthy (HTTP)
- D. Create a managed instance group. Verify that the autoscaling setting is on.

### 정답 및 풀이

C

## 5

You are using multiple configurations for gcloud. You want to review the configured Kubernetes Engine cluster of an inactive configuration using the fewest possible steps. What should you do?

- A. Use gcloud config configurations describe to review the output.
- B. Use gcloud config configurations activate and gcloud config list to review the output.
- C. Use kubectl config get-contexts to review the output.
- D. Use kubectl config use-context and kubectl config view to review the output.

### 정답 및 풀이

D

GKE 설정을 다시 확인할 때 `use-context` 명령어를 사용한다.

## 6

Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?

- A. Multi-Regional Storage
- B. Regional Storage
- C. Nearline Storage
- D. Coldline Storage

### 정답 및 풀이

D

콜드라인이 가격이 싸고 백업에 용이하다(읽기/쓰기가 거의 일어나지 않는다)

## 7

Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?

- A. Contact cloud-billing@google.com with your bank account details and request a corporate billing account for your company.
- B. Create a ticket with Google Support and wait for their call to share your credit card details over the phone.
- C. In the Google Platform Console, go to the Resource Manage and move all projects to the root Organizarion.
- D. In the Google Cloud Platform Console, create a new billing account and set up a payment method.

### 정답 및 풀이

D

새로운 결제 계정을 생성하고 결제 방법을 추가한다.

## 8

You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?

- A. Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.
- B. Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server.
- C. Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server.
- D. Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address.

### 정답 및 풀이

A

기존의 어플리케이션 설정을 바꾸지 않을려면 기존 라이센스 서버 IP 주소를 계속 유지해야 한다.

## 9

You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?

- A. Manual Scaling with 3 instances.
- B. Basic Scaling with min_instances set to 3.
- C. Basic Scaling with max_instances set to 3.
- D. Automatic Scaling with min_idle_instances set to 3.

### 정답 및 풀이

D

리퀘스트에 따라 인스턴스가 결정을 하려면 오토매틱으로 해야 하며 인스턴스를 무조건 3개를 실행해야 하기 때문에 답은 D이다.

## 10

You have a development project with appropriate IAM roles defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?

- A. Use gcloud iam roles copy and specify the production project as the destination project.
- B. Use gcloud iam roles copy and specify your organization as the destination organization.
- C. In the Google Cloud Platform Console, use the 'create role from role' functionality.
- D. In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions.

### 정답 및 풀이

A

원하는 프로젝트의 IAM을 복사해서 타겟이 되는 프로젝트에 적용하면 된다.

## 11

You need a dynamic way of provisioning VMs on Compute Engine. The exact specifications will be in a dedicated configuration file. You want to follow Google's recommended practices. Which method should you use?

- A. Deployment Manager
- B. Cloud Composer
- C. Managed Instance Group
- D. Unmanaged Instance Group

### 정답 및 풀이

A

> Google Cloud Deployment Manager
> - Google Cloud 리소스 만들기 및 관리를 자동화하는 인프라 배포 서비스
> - 유연한 템플릿과 구성 파일을 작성하여 Cloud Storage, Compute Engine, Cloud SQL를 비롯해 서로 연동되도록 구성된 다양한 Google Cloud 서비스가 포함된 배포를 생성

## 12

You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?

- A. Use kubectl app deploy <dockerfilename>.
- B. Use gcloud app deploy <dockerfilename>.
- C. Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.
- D. Create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.

### 정답 및 풀이

GKE 로 올리기 위해서는 이미지가 있어야 한다 따라서 도커파일을 도커 이미지로 만들고 컨테이너 레지스트리에 등록 후 YAML 을 통해 등록한 이미지를 불러온다.

## 13

Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?

- A. Download and deploy the Jenkins Java WAR to App Engine Standard.
- B. Create a new Compute Engine instance and install Jenkins through the command line interface.
- C. Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image.
- D. Use GCP Marketplace to launch the Jenkins solution.

### 정답 및 풀이

젠킨스 처럼 많은 사람이 사용하는 어플리케이션 같은 경우 마켓플레이스에서 다운로드해서 바로 사용이 가능하다.

## 14

You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?

- A. gcloud deployment-manager deployments create --config <deployment-config-path>
- B. gcloud deployment-manager deployments update --config <deployment-config-path>
- C. gcloud deployment-manager resources create --config <deployment-config-path>
- D. gcloud deployment-manager resources update --config <deployment-config-path>

### 정답 및 풀이

B

문제에 답이 있다 `deployments` , `update` 가 핵심 키워드다

## 15 

You need to run an important query in BigQuery but expect it to return a lot of records. You want to find out how much it will cost to run the query. You are using on-demand pricing. What should you do?

- A. Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand.
- B. Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.
- C. Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using the Pricing Calculator.
- D. Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator.

### 정답 및 풀이

C

해당 쿼리에 대해서 Read 의 byte 량을 측정하고 계산기를 돌린다.

## 16

You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on underlying infrastructure CPU usage. Your organizational policies require you to use virtual machines directly. You need to ensure that the application scaling is operationally efficient and completed as quickly as possible. What should you do?

- A. Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application.
- B. Create an instance template, and use the template in a managed instance group with autoscaling configured.
- C. Create an instance template, and use the template in a managed instance group that scales up and down based on the time of day.
- D. Use a set of third-party tools to build automation around scaling the application up and down, based on Stackdriver CPU usage monitoring.

### 정답 및 풀이

A

오토 스케일링때문에 정답이 A 인것 처럼 보이나 VM을 직접 관리를 하니 A는 답이 아니다. 그래서 정답은 B이다.

## Reference

https://www.examtopics.com/exams/google/associate-cloud-engineer/view/