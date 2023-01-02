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

오토 스케일링때문에 정답은 A 또는 B이며 VM을 직접 관리를 하니 A는 답이 아니다. 그래서 정답은 B이다.

## 17

You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?

- A. Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis.
- B. Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis.
- C. Export your transactions to a local file, and perform analysis with a desktop tool.
- D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.

### 정답 및 풀이

D

일단 bill 정보를 스토리지 버킷에 한번 옮겨서 작업하는게 비효율적이다. 그래서 A, B는 답이 아니다. 그리고 bill 정보를 로컬에 저장해서 다시 한번 분석 프로그램에 실행하는 것도 비효율이다. 그래서 C 도 아니다.

## 18

You need to set up a policy so that videos stored in a specific Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?

- A. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days (365 ג€" 90)
- B. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.
- C. Use gsutil rewrite and set the Delete action to 275 days (365-90).
- D. Use gsutil rewrite and set the Delete action to 365 days.

### 정답 및 풀이

B

일단 백업 및 삭제 동작은 자동으로 이뤄지기 때문에 A, B 이다.
그리고 데이터 생성 시점 기준으로 자동으로 90일 후에 콜드라인으로 백업, 그리고 1년 후에 삭제이기 때문에 정답은 B이다.

## 19

You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?

- A. When creating the VM via the web console, specify the service account under the 'Identity and API Access' section. Most Voted
- B. Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service- account.
- C. Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine- service-account.
- D. Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service- account.json.

### 정답 및 풀이

A

key 를 다운받거나 전송하는 거는 무조건 오답이다. 그래서 남은 것은 A이다.

## 20

You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?

- A. Install a RDP client on your desktop. Verify that a firewall rule for port 3389 exists.
- B. Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.
- C. Set a Windows password in the GCP Console. Verify that a firewall rule for port 22 exists. Click the RDP button in the GCP Console and supply the credentials to log in.
- D. Set a Windows username and password in the GCP Console. Verify that a firewall rule for port 3389 exists. Click the RDP button in the GCP Console, and supply the credentials to log in.

### 정답

A

SQL Server 2017 는 윈도우 기반이기에 GCP 콘솔보다는 RDP 로 확인하는 것을 권장한다.

## 21

You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a new
Compute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?

- A. Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.
- B. Create two configurations using gcloud config configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances.
- C. Activate two configurations using gcloud configurations activate [NAME]. Run gcloud config list to start the Compute Engine instances.
- D. Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances.

### 정답 및 풀이

A

## 22

You significantly changed a complex Deployment Manager template and want to confirm that the dependencies of all defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?

- A. Use granular logging statements within a Deployment Manager template authored in Python.
- B. Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console.
- C. Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures.
- D. Execute the Deployment Manager template using the ג€"-preview option in the same project, and observe the state of interdependent resources.

### 정답 및 풀이

D

Deployment Manager 같은 경우 `-preview` 옵션을 통해 미리 변경점에 대해서 체크할수 있다.

~~~
Preview an updated configuration
You can preview the update you want to make before committing any changes, with the Google Cloud CLI or the API. The Deployment Manager service previews the configuration by expanding the full configuration and creating "shell" resources.

Deployment Manager does not instantiate any actual resources when you preview a configuration, giving you the opportunity to see the deployment before committing to it.

gcloud
API
With the Google Cloud CLI, make an update request with the --preview parameter:


gcloud deployment-manager deployments update example-deployment \
--config configuration-file.yaml \
--preview
~~~

## 23

You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4?

![](https://www.examtopics.com/assets/media/exam-media/04338/0001200001.jpg)

- A. Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery
- B. Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery
- C. Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable
- D. Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery

### 정답 및 풀이

D

시계열 데이터(실시간) 를 수집하고 분석할 때 적합한 서비스를 찾는 문제이다.

- Pub/Sub : 빌드 중인 독립 애플리케이션에서 메시지를 보내고 주고 받을수 있다.
- Dataflow : 광범위한 데이터 처리 패턴을 개발하고 실행할 수 있도록 해준다. 데이터의 크기나 속도를 예츨할수 없을 때 유용하다.
- Big Table : 지연시간이 아주 짧은 대량의 데이터를 저장하는 데 적합하다. 사물인터넷, 사용자 분석, 금융데이터 분석을 포함하여 운영 및 분석 애플리케이션에 적합하다.
- Big Query : 대용량 데이터를 분석을 할 때 사용되는 도구이다.

## 24 

You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?

- A. Use gcloud to create the new project, and then deploy your application to the new project.
- B. Use gcloud to create the new project and to copy the deployed application to the new project.
- C. Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project.
- D. Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project.

## 정답 및 풀이 

A

- B : gcloud 에는 App engine을 카피하는 명령어가 없다
- C : Deployment Manager 는 App Engine을 카피하는 명령어는 없지만 App Engine에 필요한 설정을 저장하고 새로운 프로젝트에 배포하는 것은 가능하다.
- D : gcloud deploy를 할 때 프로젝트를 생성하는 것을 불가능하다.

## 25

You need to configure IAM access audit logging in BigQuery for external auditors. You want to follow Google-recommended practices. What should you do?
- A. Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.
- B. Add the auditors group to two new custom IAM roles.
- C. Add the auditor user accounts to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles.
- D. Add the auditor user accounts to two new custom IAM roles.

### 정답 및 풀이

A

외부 감시자 계정들의 권한을 한번에 관리하기 위해 그룹를 생성해서 권한을 부여한다.

## 26

You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You want to follow
Google-recommended practices. What should you do?

- A. Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/devstorage.write_only'.
- B. Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/cloud-platform'.
- C. Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket.
- D. Create a service account and add it to the IAM role 'storage.objectAdmin' for that bucket.

### 정답 및 풀이

C

버킷에 접근 권한은 IAM role 를 통해서 관리되어야 하며 Admin은 함부러 부여하면 안된다.

## 27

You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. You need to verify the addition of metadata labels and which files have been viewed from those buckets. What should you do?

- A. Using the GCP Console, filter the Activity log to view the information.
- B. Using the GCP Console, filter the Stackdriver log to view the information.
- C. View the bucket in the Storage section of the GCP Console.
- D. Create a trace in Stackdriver to view the information.

### 정답 및 풀이

A

이 문제는 일단 패스하자....

## 28

You are the project owner of a GCP project and want to delegate control to colleagues to manage buckets and files in Cloud Storage. You want to follow Google- recommended practices. Which IAM roles should you grant your colleagues?

- A. Project Editor
- B. Storage Admin
- C. Storage Object Admin
- D. Storage Object Creator

### 정답 및 풀이

B

- Storage Object Admin (roles/storage.objectAdmin): 객체 나열, 생성, 보기, 삭제 등 객체의 전체 제어 권한
- Storage Admin (roles/storage.admin) 객체와 버킷을 관리할 수 있는 전체 권한

## 29

You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account to which you can grant specific user-based access privileges. You want to use the most secure method that requires the fewest steps. What should you do?

- A. Create a signed URL with a four-hour expiration and share the URL with the company.
- B. Set object access to 'public' and use object lifecycle management to remove the object after four hours.
- C. Configure the storage bucket as a static website and furnish the object's URL to the company. Delete the object from the storage bucket after four hours.
- D. Create a new Cloud Storage bucket specifically for the external company to access. Copy the object to that bucket. Delete the bucket after four hours have passed.

### 정답 및 풀이

A

## 30

You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?

- A. Deploy the monitoring pod in a StatefulSet object.
- B. Deploy the monitoring pod in a DaemonSet object.
- C. Reference the monitoring pod in a Deployment object.
- D. Reference the monitoring pod in a cluster initializer at the GKE cluster creation time.

### 정답 및 풀이

B

데몬셋은 아래와 같은 기능을 수행한다.

- 모든 노드에서 클러스터 스토리지 데몬 실행
- 모든 노드에서 로그 수집 데몬 실행
- 모든 노드에서 노드 모니터링 데몬 실행

## 31

You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?

- A. Enable the Cloud Pub/Sub API in the API Library on the GCP Console.
- B. Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it.
- C. Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs used by the application being deployed.
- D. Grant the App Engine Default service account the role of Cloud Pub/Sub Admin. Have your application enable the API on the first connection to Cloud Pub/ Sub.

### 정답 및 풀이

A

## 32

You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same Stackdriver
Monitoring dashboard. What should you do?

- A. Use Shared VPC to connect all projects, and link Stackdriver to one of the projects.
- B. For each project, create a Stackdriver account. In each project, create a service account for that project and grant it the role of Stackdriver Account Editor in all other projects.
- C. Configure a single Stackdriver account, and link all projects to the same account.
- D. Configure a single Stackdriver account for one of the projects. In Stackdriver, create a Group and add the other project names as criteria for that Group.

### 정답 및 풀이

C

여러 프로젝트를 하나의 스택드라이버에서 모니터링을 하기 위해서는 하나의 스택드라이버 계정을 생성하고 연결하면 된다.

## 33

You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?

- A. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.
- B. Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1.
- C. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2.
- D. Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2.

### 정답 및 풀이

B

인스턴스를 무조건 하나를 실행하기 위해서는 minimum , maximum number 를 1 로 셋팅한다.

## 34 

You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?

- A. Run gcloud iam roles list. Review the output section.
- B. Run gcloud iam service-accounts list. Review the output section.
- C. Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.
- D. Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status.

### 정답 및 풀이

C

프로젝트에 모든 유저의 IAM role 를 조회할수 있는 방법을 찾는 것이다.

- A : 현재 자신의 role 만을 보여준다.
- B : 서비스 어카운트 정보를 보여준다. 여기서 유저와 서비스 계정은 다르다.
- D : 서비스에 대한 Role 만 보여준다.

## 35

You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?

- A. Verify that you are Project Billing Manager for the GCP project. Update the existing project to link it to the existing billing account.
- B. Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.
- C. Verify that you are Billing Administrator for the billing account. Create a new project and link the new project to the existing billing account.
- D. Verify that you are Billing Administrator for the billing account. Update the existing project to link it to the existing billing account.

### 해답 및 풀이

B

이런 문제는 항상 전체, 프로젝트 단위인지 잘 살펴보자

## 36

You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?

- A. Download the private key from the service account, and add it to each VMs custom metadata.
- B. Download the private key from the service account, and add the private key to each VM's SSH keys.
- C. Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.
- D. When creating the VMs, set the service account's API scope for Compute Engine to read/write.

### 정답 및 풀이

C

- Compute Storage Admin(roles/compute.storageAdmin) : Permissions to create, modify, and delete disks, images, and snapshots.

## 37

You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us- central region. Now you want the application to be served from the asia-northeast1 region. What should you do?

- A. Change the default region property setting in the existing GCP project to asia-northeast1.
- B. Change the region property setting in the existing App Engine application from us-central to asia-northeast1.
- C. Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region to serve your application.
- D. Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application.

### 정답 및 풀이

D

GCP 의 서비스 리전을 변경하는 것을 불가능하다 무조건 새로 만들어야 한다. App Engine 은 프로젝트 당 하나만 생성이 가능하므로 새로운 프로젝트에 생성해야한다.

## 38

You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?

- A. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role.
- B. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role.
- C. Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to the role.
- D. Run gcloud iam roles describe roles/spanner.viewer - -project my-project. Add the users to a new group. Add the group to the role.

### 정답 및 풀이

B

읽기/쓰기 권한이 필요하기에 A 또는 B 가 되며 권한은 그룹단위로 관리하는 것이 좋다.

## 39

You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?

- A. Enable the Node Auto-Repair feature for your GKE cluster.
- B. Enable the Node Auto-Upgrades feature for your GKE cluster.
- C. Select the latest available cluster version for your GKE cluster.
- D. Select ג€Container-Optimized OS (cos)ג€ as a node image for your GKE cluster.

### 정답 및 풀이

B

항상 최신의 GKE 를 유지하기 위해서는 자동 업데이트 기능을 활성화한다.

## 40

You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?

- A. Configure an HTTP(S) load balancer.
- B. Configure an internal TCP load balancer.
- C. Configure an external SSL proxy load balancer.
- D. Configure an external TCP proxy load balancer.

### 정답 및 풀이

A

HTTPS 기반 서비스를 위해서 HTTPS 로그밸런서가 필요하다.

## 41

You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?

- A. Use the GCP Console to transfer the file instead of gsutil.
- B. Enable parallel composite uploads using gsutil on the file transfer.
- C. Decrease the TCP window size on the machine initiating the transfer.
- D. Change the storage class of the bucket from Nearline to Multi-Regional.

### 정답 및 풀이

B

파일 전송을 빠르게 하기 위해 gsutil 을 이용하여 파일을 병렬로 전송가능

## 42

You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using the YAML file specified below:

![](https://www.examtopics.com/assets/media/exam-media/04338/0002100001.jpg)

- A. Store the database password inside the Docker image of the container, not in the YAML file.
- B. Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.
- C. Store the database password inside a ConfigMap object. Modify the YAML file to populate the DB_PASSWORD environment variable from the ConfigMap.
- D. Store the database password in a file inside a Kubernetes persistent volume, and use a persistent volume claim to mount the volume to the container.

### 정답 및 풀이

GKE 에서 시크릿 정보를 관리할 때에는 Secret Manager/Object에 저장한다.

## 43

You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The autoscaling policy is configured so that additional instances are added to the group if the CPU utilization of instances goes above 80%. VMs are added until the instance group reaches its maximum limit of five VMs or until CPU utilization of instances lowers to 80%. The initial delay for HTTP health checks against the instances is set to 30 seconds.
The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?

- A. Set the maximum number of instances to 1.
- B. Decrease the maximum number of instances to 3.
- C. Use a TCP health check instead of an HTTP health check.
- D. Increase the initial delay of the HTTP health check to 200 seconds.

### 정답 및 풀이 

D

필요 이상으로 인스턴스가 생성됨으로 인스턴스를 생성 할 때 딜레이를 줘서 실제로 추가 인스턴스가 필요한지를 체크한다.

## 44

You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?

- A. Select Google Kubernetes Engine. Use a single-node cluster with a small instance type.
- B. Select Google Kubernetes Engine. Use a three-node cluster with micro instance types.
- C. Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.
- D. Select Compute Engine. Use VM instance types that support micro bursting.
 
### 정답 및 풀이

C

배치 작업은 표준 타입의 선점형 VM이 적합하다

## 45

You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?

- A. Run gcloud app restore.
- B. On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert.
- C. On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.
- D. Deploy the original version as a separate application. Then go to App Engine settings and split traffic between applications so that the original version serves 100% of the requests.

### 정답 및 풀이

C

App Engine 같은 경우 이전 버전을 유지하고 있기 때문에 만약 새로운 버전을 리버트하고 싶다면 App Engine 의 트래픽을 이전 버전을 100% 할당하면 된다.

## 46

You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?

- A. Check the app.yaml file for your application and check project settings.
- B. Check the web-application.xml file for your application and check project settings.
- C. Go to Deployment Manager and review settings for deployment of applications.
- D. Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment.

### 정답 및 풀이

C

App Engine 은 Deployment Manager를 사용하지 않는다.

## 47

You want to configure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?

- A. Create an instance template for the instances. Set the 'Automatic Restart' to on. Set the 'On-host maintenance' to Migrate VM instance. Add the instance template to an instance group.
- B. Create an instance template for the instances. Set 'Automatic Restart' to off. Set 'On-host maintenance' to Terminate VM instances. Add the instance template to an instance group.
- C. Create an instance group for the instances. Set the 'Autohealing' health check to healthy (HTTP).
- D. Create an instance group for the instance. Verify that the 'Advanced creation options' setting for 'do not retry machine creation' is set to off.

## 정답 및 풀이

A

Auto healing 과 햇갈릴수 있으나 Auto healing은 인스턴스를 삭제하고 재 생성한다.

## 48

You host a static website on Cloud Storage. Recently, you began to include links to PDF files on this site. Currently, when users click on the links to these PDF files, their browsers prompt them to save the file onto their local system. Instead, you want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?

- A. Enable Cloud CDN on the website frontend.
- B. Enable 'Share publicly' on the PDF file objects.
- C. Set Content-Type metadata to application/pdf on the PDF file objects.
- D. Add a label to the storage bucket with a key of Content-Type and value of application/pdf.

### 정답 및 풀이

C

cloud storage 에 저장된 파일에 Content-type을 추가하여 파일을 웹브라우저에서 바로 실행이 가능하다.

## 49

You have a virtual machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?

- A. Rely on live migration to move the workload to a machine with more memory.
- B. Use gcloud to add metadata to the VM. Set the key to required-memory-size and the value to 8 GB.
- C. Stop the VM, change the machine type to n1-standard-8, and start the VM.
- D. Stop the VM, increase the memory to 8 GB, and start the VM.

### 정답 및 풀이

D

실행중인 VM의 메모리를 추가할 때는 VM을 stop하고 메모리를 추가해야 한다.

## 50

You have production and test workloads that you want to deploy on Compute Engine. Production VMs need to be in a different subnet than the test VMs. All the
VMs must be able to reach each other over Internal IP without creating additional routes. You need to set up VPC and the 2 subnets. Which configuration meets these requirements?

- A. Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.
- B. Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range.
- C. Create 2 custom VPCs, each with a single subnet. Create each subnet in a different region and with a different CIDR range.
- D. Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region and with the same CIDR range.

### 정답 및 풀이

A

서브넷을 두 개로 사용하기 위해서는 서브넷 리전과 CIDR range가 달라야 한다.

## 51

You need to create an autoscaling managed instance group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?

- A. Create a health check on port 443 and use that when creating the Managed Instance Group.
- B. Select Multi-Zone instead of Single-Zone when creating the Managed Instance Group.
- C. In the Instance Template, add the label 'health-check'.
- D. In the Instance Template, add a startup script that sends a heartbeat to the metadata server.

### 정답 및 풀이

A

HTTPS 의 포트번호는 443이며 해당 포트를 이용하여 서비스가 unhealthy한지 체크한다.

## 52

Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members.
You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?

- A. 1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery jobUser role to the group.
- B. 1. Create an IAM entry for each data scientist's user account. 2. Assign the BigQuery dataViewer user role to the group.
- C. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.
- D. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery dataViewer user role to the group.
 
### 정답 및 풀이

C

계정 관리는 그룹으로 관리하는게 좋다.

- BigQuery 작업 사용자 (roles/bigquery.jobUser) : 프로젝트 내에서 쿼리 등의 작업을 실행
- BigQuery 데이터 뷰어 (roles/bigquery.dataViewer): 테이블 또는 뷰에서 데이터와 메타데이터를 읽는 권한

## 53

Your company has a 3-tier solution running on Compute Engine. The configuration of the current infrastructure is shown below.

![](https://www.examtopics.com/assets/media/exam-media/04338/0002700001.png)

Each tier has a service account that is associated with all instances within it. You need to enable communication on TCP port 8080 between tiers as follows:
* Instances in tier #1 must communicate with tier #2.
* Instances in tier #2 must communicate with tier #3.
What should you do?

- A. 1. Create an ingress firewall rule with the following settings: ג€¢ Targets: all instances ג€¢ Source filter: IP ranges (with the range set to 10.0.2.0/24) ג€¢ Protocols: allow all 2. Create an ingress firewall rule with the following settings: ג€¢ Targets: all instances ג€¢ Source filter: IP ranges (with the range set to 10.0.1.0/24) ג€¢ Protocols: allow all
- B. 1. Create an ingress firewall rule with the following settings: ג€¢ Targets: all instances with tier #2 service account ג€¢ Source filter: all instances with tier #1 service account ג€¢ Protocols: allow TCP:8080 2. Create an ingress firewall rule with the following settings: ג€¢ Targets: all instances with tier #3 service account ג€¢ Source filter: all instances with tier #2 service account ג€¢ Protocols: allow TCP: 8080
- C. 1. Create an ingress firewall rule with the following settings: ג€¢ Targets: all instances with tier #2 service account ג€¢ Source filter: all instances with tier #1 service account ג€¢ Protocols: allow all 2. Create an ingress firewall rule with the following settings: ג€¢ Targets: all instances with tier #3 service account ג€¢ Source filter: all instances with tier #2 service account ג€¢ Protocols: allow all
- D. 1. Create an egress firewall rule with the following settings: ג€¢ Targets: all instances ג€¢ Source filter: IP ranges (with the range set to 10.0.2.0/24) ג€¢ Protocols: allow TCP: 8080 2. Create an egress firewall rule with the following settings: ג€¢ Targets: all instances ג€¢ Source filter: IP ranges (with the range set to 10.0.1.0/24) ג€¢ Protocols: allow TCP: 8080

### 정답 및 풀이

B

A -> B -> C 로 8080 포트만 이용해서 통신이 가능해야 함으로

- B는 A 의 IP:8080 허용
- C는 B 의 IP:8080 허용

## 54

You are given a project with a single Virtual Private Cloud (VPC) and a single subnetwork in the us-central1 region. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in the europe-west1 region. This new instance needs access to the application. You want to follow Google-recommended practices. What should you do?

- A. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.
- B. 1. Create a VPC and a subnetwork in europe-west1. 2. Expose the application with an internal load balancer. 3. Create the new instance in the new subnetwork and use the load balancer's address as the endpoint.
- C. 1. Create a subnetwork in the same VPC, in europe-west1. 2. Use Cloud VPN to connect the two subnetworks. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.
- D. 1. Create a VPC and a subnetwork in europe-west1. 2. Peer the 2 VPCs. 3. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint.

### 정답 및 풀이

C

1. 동일한 VPC에 europe-west1 subnetwork를 생성
2. 새 subnetwork에 새 인스턴스를 생성하고 첫 번째 인스턴스의 프라이빗 주소를 엔드포인트로 사용

## 55

Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs, which resulted in higher costs. You want to disable the logs quickly using the minimum number of steps. What should you do?

- A. 1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource.
- B. 1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE Cluster Operations resource.
- C. 1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Logging.
- D. 1. Go to the GKE console, and delete existing clusters. 2. Recreate a new cluster. 3. Clear the option to enable legacy Stackdriver Monitoring.

### 정답 및 풀이

- GKE container 에서 엄청난 로그가 발생했다고 문제에서 언급
- Stackdriver Logging의 로그 수집 창으로 이동하여 GKE 컨테이너 리소스에 대한 로그 소스를 사용 중지

## 56

You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?

- A. Deploy the new version in the same application and use the --migrate option.
- B. Deploy the new version in the same application and use the --splits option to give a weight of 99 to the current version and a weight of 1 to the new version.
- C. Create a new App Engine application in the same project. Deploy the new version in that application. Use the App Engine library to proxy 1% of the requests to the new version.
- D. Create a new App Engine application in the same project. Deploy the new version in that application. Configure your network load balancer to send 1% of the traffic to that new application.

### 정답 및 풀이

B 

앱 엔진을 딱 한개만 생성이 가능하다

## 57

You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?

- A. Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1.
- B. Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0.
- C. Create a new managed instance group with an updated instance template. Add the group to the backend service for the load balancer. When all instances in the new managed instance group are healthy, delete the old managed instance group.
- D. Create a new instance template with the new application version. Update the existing managed instance group with the new instance template. Delete the instances in the managed instance group to allow the managed instance group to recreate the instance using the new instance template.
 
### 정답 및 풀이

B

- maxSurge : 자동 업데이트 중에 targetSize 이상으로 만들 수 있는 최대 초과 개수
- maxUnavailable: 자동 업데이트 중에 언제든지 사용할 수 없는 최대 사용 불가 인스턴스 수
- maxSurge를 1로 설정하여 새 인스턴스를 만들수 있도록 설정
- 전역 용량이 그대로 유지되도록 해야 하므로 maxUnavailable을 0으로 설정해야 합니다.
- C는 더 비싸고 설정하기 더 어려우며

## 58

You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?

- A. Cloud SQL
- B. Cloud Spanner
- C. Cloud Firestore
- D. Cloud Datastore

### 정답 및 풀이

B

관계형 DB이면서 사이즈를 예측하지 못할 때 Cloud Spanner 가 좋다

## 59

You are the organization and billing administrator for your company. The engineering team has the Project Creator role on the organization. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to link a project to a billing account, but they should not be able to make any other changes to projects. What should you do?

- A. Assign the finance team only the Billing Account User role on the billing account.
- B. Assign the engineering team only the Billing Account User role on the billing account.
- C. Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.
- D. Assign the engineering team the Billing Account User role on the billing account and the Project Billing Manager role on the organization.

### 정답 및 풀이

C

## 60

You have an application running in Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The application exposes a TCP endpoint. There are several replicas of this application. You have a Compute Engine instance in the same region, but in another Virtual Private Cloud (VPC), called gce-network, that has no overlapping IP ranges with the first VPC. This instance needs to connect to the application on GKE. You want to minimize effort. What should you do?

- A. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Set the service's externalTrafficPolicy to Cluster. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created.
- B. 1. In GKE, create a Service of type NodePort that uses the application's Pods as backend. 2. Create a Compute Engine instance called proxy with 2 network interfaces, one in each VPC. 3. Use iptables on this instance to forward traffic from gce-network to the GKE nodes. 4. Configure the Compute Engine instance to use the address of proxy in gce-network as endpoint.
- C. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal 3. Peer the two VPCs together. 4. Configure the Compute Engine instance to use the address of the load balancer that has been created.
- D. 1. In GKE, create a Service of type LoadBalancer that uses the application's Pods as backend. 2. Add a Cloud Armor Security Policy to the load balancer that whitelists the internal IPs of the MIG's instances. 3. Configure the Compute Engine instance to use the address of the load balancer that has been created.

### 정답 및 풀이

C

- 문제에서 동일한 지역, 다른 VPC라고 했으므로 다른 VPC는 VPC 네트워크 피어링 필요
- VPC 네트워크 피어링을 통해 LoadBalancer 네트워크에 연결된 VPC 네트워크의 클라이언트는 서비스에 액세스할 수도 있습니다.

## 61

Your organization is a financial company that needs to store audit log files for 3 years. Your organization has hundreds of Google Cloud projects. You need to implement a cost-effective approach for log file retention. What should you do?

- A. Create an export to the sink that saves logs from Cloud Audit to BigQuery.
- B. Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket.
- C. Write a custom script that uses logging API to copy the logs from Stackdriver logs to BigQuery.
- D. Export these logs to Cloud Pub/Sub and write a Cloud Dataflow pipeline to store logs to Cloud SQL.

### 정답 및 풀이

B

데이터를 장시간 보관하면서 비용을 절감하기 위해서 Cold line storage 가 좋은 선택이다.

## 62

You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. This specific reverse proxy consumes almost no CPU. You want to have a 30-GB in-memory cache, and need an additional 2 GB of memory for the rest of the processes. You want to minimize cost. How should you run this reverse proxy?

- A. Create a Cloud Memorystore for Redis instance with 32-GB capacity.
- B. Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory.
- C. Package it in a container image, and run it on Kubernetes Engine, using n1-standard-32 instances as nodes.
- D. Run it on Compute Engine, choose the instance type n1-standard-1, and add an SSD persistent disk of 32 GB.

### 정답 및 풀이

A

메모리 목적이 캐쉬를 위한 것이기 때문에 A 이다.

- Memorystore for Redis : Redis 인메모리 데이터 저장소를 통해 완전 관리형 서비스를 제공하여 밀리초 이하로 데이터에 액세스할 수 있는 애플리케이션 캐시를 빌드합니다.
- Redis : Remote Dictionary Server의 약자로서, "키-값" 구조의 비정형 데이터를 저장하고 관리하기 위한 오픈 소스 기반의 비관계형 데이터베이스 관리 시스템이다.

## 63

You are hosting an application on bare-metal servers in your own data center. The application needs access to Cloud Storage. However, security policies prevent the servers hosting the application from having public IP addresses or access to the internet. You want to follow Google-recommended practices to provide the application with access to Cloud Storage. What should you do?

- A. 1. Use nslookup to get the IP address for storage.googleapis.com. 2. Negotiate with the security team to be able to give a public IP address to the servers. 3. Only allow egress traffic from those servers to the IP addresses for storage.googleapis.com.
- B. 1. Using Cloud VPN, create a VPN tunnel to a Virtual Private Cloud (VPC) in Google Cloud. 2. In this VPC, create a Compute Engine instance and install the Squid proxy server on this instance. 3. Configure your servers to use that instance as a proxy to access Cloud Storage.
- C. 1. Use Migrate for Compute Engine (formerly known as Velostrata) to migrate those servers to Compute Engine. 2. Create an internal load balancer (ILB) that uses storage.googleapis.com as backend. 3. Configure your new instances to use this ILB as proxy.
- D. 1. Using Cloud VPN or Interconnect, create a tunnel to a VPC in Google Cloud. 2. Use Cloud Router to create a custom route advertisement for 199.36.153.4/30. Announce that network to your on-premises network through the VPN tunnel. 3. In your on-premises network, configure your DNS server to resolve *.googleapis.com as a CNAME to restricted.googleapis.com.

### 정답 및 풀이

D

베어메탈 서버와 하이브리드로 백엔드를 구출할 때 Cloud Interconntect 를 사용한다.

## 64

You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. You want to follow Google-recommended practices. What should you do?

- A. 1. Create a Cloud Function that uses a Cloud Pub/Sub trigger on that topic. 2. Call your application on Cloud Run from the Cloud Function for every message.
- B. 1. Grant the Pub/Sub Subscriber role to the service account used by Cloud Run. 2. Create a Cloud Pub/Sub subscription for that topic. 3. Make your application pull messages from that subscription.
- C. 1. Create a service account. 2. Give the Cloud Run Invoker role to that service account for your Cloud Run application. 3. Create a Cloud Pub/Sub subscription that uses that service account and uses your Cloud Run application as the push endpoint.
- D. 1. Deploy your application on Cloud Run on GKE with the connectivity set to Internal. 2. Create a Cloud Pub/Sub subscription for that topic. 3. In the same Google Kubernetes Engine cluster as your application, deploy a container that takes the messages and sends them to your application.

### 정답 및 풀이

C

서비스 계정에 Cloud Run 을 실행 권한을 주고 서비스 계정에 대해 Pub/Sub 구독을 할수 있게 한다.

## Reference

## 65

You need to deploy an application, which is packaged in a container image, in a new project. The application exposes an HTTP endpoint and receives very few requests per day. You want to minimize costs. What should you do?

- A. Deploy the container on Cloud Run.
- B. Deploy the container on Cloud Run on GKE.
- C. Deploy the container on App Engine Flexible.
- D. Deploy the container on GKE with cluster autoscaling and horizontal pod autoscaling enabled.

### 정답 및 풀이

A

컨테이너 이미지를 잠깐 쓰면서 비용 절감 측면에서는 Cloud Run 이 좋다.

## 66

Your company has an existing GCP organization with hundreds of projects and a billing account. Your company recently acquired another company that also has hundreds of projects and its own billing account. You would like to consolidate all GCP costs of both GCP organizations onto a single invoice. You would like to consolidate all costs as of tomorrow. What should you do?

- A. Link the acquired company's projects to your company's billing account.
- B. Configure the acquired company's billing account and your company's billing account to export the billing data into the same BigQuery dataset.
- C. Migrate the acquired company's projects into your company's GCP organization. Link the migrated projects to your company's billing account.
- D. Create a new GCP organization and a new billing account. Migrate the acquired company's projects and your company's projects into the new GCP organization and link the projects to the new billing account.

### 정답 및 풀이

A 

다른 회사의 프로젝트를 기존 결제 계정에 연결하여 총 비용을 생성 가능

## 67

You built an application on Google Cloud that uses Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data.
You need a streamlined solution to grant the correct permissions to your support team, and you want to follow Google-recommended practices. What should you do?

- A. Add the support team group to the roles/monitoring.viewer role
- B. Add the support team group to the roles/spanner.databaseUser role.
- C. Add the support team group to the roles/spanner.databaseReader role.
- D. Add the support team group to the roles/stackdriver.accounts.viewer role.

### 정답 및 풀이

A

데이터에 아예 접근 할수 없으므로 B, C는 해당이 안된다. 최소한의 모니터링 권한만 필요함으로 답은 A이다.

## 68

For analysis purposes, you need to send all the logs from all of your Compute Engine instances to a BigQuery dataset called platform-logs. You have already installed the Cloud Logging agent on all the instances. You want to minimize cost. What should you do?

- A. 1. Give the BigQuery Data Editor role on the platform-logs dataset to the service accounts used by your instances. 2. Update your instances' metadata to add the following value: logs-destination: bq://platform-logs.
- B. 1. In Cloud Logging, create a logs export with a Cloud Pub/Sub topic called logs as a sink. 2. Create a Cloud Function that is triggered by messages in the logs topic. 3. Configure that Cloud Function to drop logs that are not from Compute Engine and to insert Compute Engine logs in the platform-logs dataset.
- C. 1. In Cloud Logging, create a filter to view only Compute Engine logs. 2. Click Create Export. 3. Choose BigQuery as Sink Service, and the platform-logs dataset as Sink Destination.
- D. 1. Create a Cloud Function that has the BigQuery User role on the platform-logs dataset. 2. Configure this Cloud Function to create a BigQuery Job that executes this query: INSERT INTO dataset.platform-logs (timestamp, log) SELECT timestamp, log FROM compute.logs WHERE timestamp > DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY) 3. Use Cloud Scheduler to trigger this Cloud Function once a day.

## 정답 및 풀이

<details markdown="68">
<summary>보기</summary>

C

Cloud Logging 을 추가 비용없이 Export 를 통해 Big Query와 연동 시키면 된다.

</details>

## 69

You are using Deployment Manager to create a Google Kubernetes Engine cluster. Using the same Deployment Manager deployment, you also want to create a
DaemonSet in the kube-system namespace of the cluster. You want a solution that uses the fewest possible services. What should you do?

- A. Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.
- B. Use the Deployment Manager Runtime Configurator to create a new Config resource that contains the DaemonSet definition.
- C. With Deployment Manager, create a Compute Engine instance with a startup script that uses kubectl to create the DaemonSet.
- D. In the cluster's definition in Deployment Manager, add a metadata that has kube-system as key and the DaemonSet manifest as value.

### 정답 및 풀이

<details markdown="69">
<summary>보기</summary>

A

동일한 Deployment Manager에 새로운 유형의 클러스터를 추가하기 위해서는 Type-Provider 를 사용한다.

</details>

## 70

You are building an application that will run in your data center. The application will use Google Cloud Platform (GCP) services like AutoML. You created a service account that has appropriate access to AutoML. You need to enable authentication to the APIs from your on-premises environment. What should you do?

- A. Use service account credentials in your on-premises application.
- B. Use gcloud to create a key file for the service account that has appropriate permissions.
- C. Set up direct interconnect between your data center and Google Cloud Platform to enable authentication for your on-premises applications.
- D. Go to the IAM & admin console, grant a user account permissions similar to the service account permissions, and use this user account for authentication from your data center.

### 정답 및 풀이

<details markdown="70">
<summary>보기</summary>

B

GCP 외부에서 GCP 서비스를 사용하기 위해서는 서비스 계정을 만들고 서비스 계정을 사용할수 있는 키를 생성하고 공유한다.

</details>

## 링크

https://www.examtopics.com/exams/google/associate-cloud-engineer/view/