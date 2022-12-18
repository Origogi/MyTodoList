# Whizlabs Free Test

whizlabs 연습 문제 25개

## 1

### 문제

You are working on a project named whizlabs-ace, and want to list all the roles assigned to users in the project. Which of the following gcloud command would you use?

- A. gcloud iam list whizlabs-ace
- B. gcloud projects list whizlabs-ace
- C. gcloud projects get-iam-policy whizlabs-ace
- D. gcloud iam get-iam-policy whizlabs-ace

### 정답

C.

### 풀이

프로젝트의 각 유저에 대한 권한을 리스팅할 때 아래 명령어 사용

> gcloud projects get-iam-policy PROJECT_ID

## 2

While working on a project, an application administrator (A) has been given the responsibility of managing all resources. He wants to delegate the responsibility of managing the existing service accounts to another administrator (B). That administrator (B) will also be responsible to manage the other service accounts that will be created. Which of the following is the best way to delegate the privileges required to manage all the service accounts?

- A. Granting iam.serviceAccountUser to the administrator at the project levelright
- B. Granting iam.serviceProjectAccountUser to the administrator at the project level
- C. Granting iam.serviceAccountUser to the administrator at the service account level
- D. Granting iam.serviceProjectAccountUser to the administrator at the service account level

### 정답

A.

### 풀이

A가 프로젝트에 대한 모든 권한을 가지고 있고 B에게 지금 존재하는 서비스 권한과 앞으로 생성될 서비스 권한도 자동으로 부여해야 하기 때문에 정답은 A이다.

## 3

You’re working for a company as a Cloud engineer. You have a managed instance group for which the autoscaling is enabled if CPU utilization is 70%. Right now there are 4 instances available in this instance group. When you connect to one of the instances, you see that the CPU utilization is 75% and there is no new instance is started in the group. What could be the possible reason for not starting another instance here?

- A. It will take 60 seconds to launch a new instance
- B. Autoscaling is not active
- C. The average CPU usage of the instance group is less than 70%
- D. None of the above

### 정답

C

### 풀이

오토스케일 CPU 가용량은 하나의 인스턴스가 아닌 전체 인스턴스의 평균으로 판단을 한다. 그 외 옵션으로는

- StackDrivider의 메트릭
- HTTP 로드 밸런싱 체크

## 4

You are a Google Cloud Engineer and assigned to set up a project for the team of four members. You need to grant only general permissions for all the resources of the project. You decided to grant a primitive role to each person for different levels of access on the basis of their responsibilities in the project. What is not considered as a primitive role in the Google Cloud Platform console?

- A. Viewer
- B. Editor
- C. Owner
- D. Publisher

### 정답

D

### 풀이

GCP 의 Role은 `Viewer`, `Editor`, `Owner` 3 가지이다.

## 5

A VM instance is trying to read from a Cloud Storage bucket. IAM roles assigned to the VM service account allows the VM instance to read from the bucket. But the scopes assigned to the VM deny the reading bucket. What will happen when VM tries to read from the bucket?

- A. The application performing the read will drop the read operation
- B. The read will not execute as IAM roles and scopes both determine what operations will be performe
- C. The read will succeed because the most permissive permission is allowed
- D. The read operation will execute, but a message will be sent to the Stackdriver Logging

### 정답

B

### 풀이

VM 인스턴스가 스토리지 버킷에 Read 가 실패한 경우 권한 문제이다.

## 6

A cloud engineer has been assigned to work on a running project. He wants to know which VMs are running in the project. How could the cloud engineer get the information of the all VMs running in the project?

- A. Execute the command gcloud compute list
- B. Execute the command gcloud list instances
- C. Execute the command gcloud instances list
- D. Execute the command gcloud compute instances list

### 정답

D

### 풀이

현재 실행 중인 VM 의 리스트를 출력하는 명령어를 맞추는 것으로 GCP 명령어는 계층 적으로 구성 된다.

> gloud > compute > instances > list

## 7

A cloud engineer wants to create a VM named whiz-server-1 with four CPUs. Which of the following commands would he use to create the VM whiz-server-1?

- A. gcloud compute instances create --machine-type=n1-standard-4 whiz-server-1
- B. gcloud compute instances create --cpus=4 whiz-server-1
- C. gcloud compute instances create --machine-type=n1-standard-4 –instancename whiz-server-1wrong
- D. gcloud compute instances create --machine-type=n1-4-cpu whiz-server-1

### 정답

A

### 풀이

VM 인스턴스를 생성하는 명령어는 아래와 같다.

> gcloud compute instances create --machine-type=n1-standard-4 INSTACE_NAME

## 8

What is the gcloud command to create a cluster named ch09-cluster-10 with four nodes?

- A. gcloud container clusters create ch09-cluster-10 4wrong
- B. gcloud container clusters create ch09-cluster-10 --num-nodes=4
- C. gcloud clusters container create ch09-cluster-10 --num-nodes=4
- D. gcloud container beta clusters create ch09-cluster-10 --nodes-num=4


### 정답

B.

### 풀이

노드 4개를 가진 이름을 가진 클러스터를 생성하는 명령어를 맞추는 것이다.

클러스터를 생성하기 위해서는 컨테이터가 존재해야 하기 때문에 다음 명령어를 사용한다.

> gcloud container clusters create NAME --num-nodes=NODE_NUM

## 9

You have deployed a Django 1.5 Python application to App Engine. This version of Django requires Python 3. Due to some issues, App Engine is trying to run the application using Python 2. Which of the following file would you check and modify (if required) to ensure that Python 3 is used with the application?

- A. app.config
- B. services.yaml
- C. app.yaml
- D. cron.yaml

### 정답 

C.

### 풀이

App Engine 의 설정은 `app.yaml` 에 있다.

## 10

Which of the following command is used to create buckets in Cloud Storage?

A. gcloud storage buckets mb
B. gsutil storage buckets create
C. gsutil mb
D. gcloud mb

### 정답

C.

### 풀이

Cloud storage에 새로운 버킷을 생성하는 명령어를 찾는 것이다.

gsutil 은 클라우스 스토리지에 수행하는 명령어이며 mb 는 `Make Bucket` 이다.

## 11

Which of the following IP address would you specify to define a CIDR range that will apply to all the destination addresses?

- A. 0.0.0.0/0
- B. 172.16.0.0/12
- C. 192.168.0.0/16
- D. 10.0.0.0/8

### 정답

A.

### 풀이

해당 문제는 [CIDR](https://ko.wikipedia.org/wiki/CIDR) 할당 방식에 대해 이해하고 있어야 한다.

CIDR 의 범위는 모든 어드레스에 대해 허용해야 함으로 답은 A이다.

## 12

You have set a firewall rule that will permit inbound connections to a VM instance named whizserver-2. You want to apply this rule only if there is not another rule that would deny that traffic. What priority would you give to this rule?

- A. 1000
- B. 1
- C. 65535
- D. 0

###  답

C.

### 풀이

문제를 잘 이해하지 못하였다. Firewall Priority 관련된 값은 `65535` 이라고 기억할 것

## 13

You have created a subnet named subnetace1 with 16,382 addresses using 192.168.0.0. Later you realize that you won’t require too many addresses, and so you want to reduce addresses to 254. Which of the following command would you use?

A. gcloud compute networks subnets expand-ip-range subnetace1 --prefix-length=28
B. gcloud compute networks subnets expand-ip-range subnetace1 --size=248
C. gcloud compute networks subnets expand-ip-range subnetace1 --prefix-length=-12
D. There is no command in google cloud to reduce the number of available addresses in a subnet.

### 정답

D.

### 풀이

해당 서브넷의 갯수를 늘이는건 가능하나 줄이는 건 불가능하다.

## 14

You have recently joined a startup that is migrating its infrastructure from AWS to Google Cloud. A junior architect was assigned the task of migrating one of their web servers with Amazon Linux OS from AWS to GCP in a public subnet of custom VPC. He was able to migrate the instance successfully but is unable to get SSH access to the migrated instance. What are the possible steps to look for? (Multiple Answer)

- A. Check if he has attached the correct firewall rule with port udp:22 open to the instance.
- B. Ask if he has added the SSH key to the instance during the launching phase
- C. Google Cloud does not support Amazon Linux images because of market competition.
- D. Make sure the firewall is attached to the instance with TCP port 22 open

### 정답

B, D

### 풀이

VM 인스턴스가 ssh 에 접속관련 문제로

- SSH 키가 있어야 접속이 가능
- SSH TCP port 는 22이다.

## 15

You work for a retail company that has a busy online store. As you are approaching New Year, you find that your e-store is getting more and more traffic. You ensure that your web servers are behind a managed instance group. However, you notice that the web tier is frequently scaling, sometimes multiple times in an hour. You need to keep instance group from scaling up and down so rapidly. Which of the following options would help you to achieve this?

- A. Change the auto scaling metric to use multiple metrics instead of just one metric.
- B. Reduce the number of maximum instance count.
- C. Associate a health check with instance group.
- D. Increase the cool down period.

### 정답

D.

### 풀이

트래픽의 변화량이 폭이 커서 오토스케일이 너무 자주 발생해서 이를 어떻게 해결할지는 묻는 문제이다. (인스턴스 할당/해제 자체가 리소스가 많이드나봄...)

그래서 오토스케일의 쿨다운 시간을 늘려서 해결한다.

## 16

You have been asked to build backend using Clojure and host it on Google Cloud with full freedom of choosing OS, applications, libraries, etc. Which service will you prefer?

- A. Compute Engine
- B. App Engine Standard
- C. Cloud Function
- D. CloudRun

### 정답

A

### 풀이

실행되는 서비스의 운영체제, 라이브러리, 어플리케이션을 자유롭게 설정할수 있어야 함으로 A이다.

## 17

You have been hired as a contractor by one of the travel technology company who is planning to containerize their existing applications in such a way that they can perform a lift and shift very easily in future if they plan to move away from Google Cloud. Which service will best suit this case?

- A. Cloud Function
- B. App Engine Standard
- C. Kubernetes Engine
- D. CloudRun

### 정답

C

### 풀이

실행되는 서비스 자체를 컨테이너화해서 다른 환경에 이동이 자유롭게 하기 위해서는 쿠버네티스를 사용해야한다.

## 18

Which is the correct command to bind an IAM policy to a service account at an organization level?

- A. gcloud organizations add-iam-policy-binding org_id --member serviceAccount:whizlab@whizlabs-prj.iam.gserviceaccount.com --role roles/viewer
- B. gcloud projects add-iam-policy-binding whizlabs-prj --member serviceAccount:whizlabswhizlabs-prj.iam.gserviceaccount.com --role roles/viewer
- C. gcloud iam service-accounts keys create whizlabs-prj --iam-account whizlabs@whizlabs-prj.iam.gserviceaccount.com
- D. gcloud organizations add-iam-policy-binding --member serviceAccount:whizlab@whizlabs-prj.iam.gserviceaccount.com --role roles/viewer

### 정답 

A

### 풀이 

> gcloud organizations add-iam-policy-binding ORGANIZATION --member=PRINCIPAL --role=ROLE

## 19

You are heading the Cloud & DevOps department in a financial company and have been asked to create a custom role for one of your colleague who needs access to deploy an application to App Engine. Which permission will you use?

- A. App Engine Editor
- B. App Engine Admin
- C. App Engine Deployer
- D. App Engine Viewer

### 정답

C

### 풀이

App Engine 을 배포하기 위해서는 `App Engine Deployer` 권한이 필요하다.

## 20

You are about to start working on a micro-service deployment project using Google Kubernetes Engine service. The client needs everything on Google and want you to maintain both frontend and backend code on Google Cloud as well. Which service best suites this case?

- A. Cloud Storage
- B. Cloud Source Repository
- C. Google Container Registry
- D. GitHub

### 정답

B

### 풀이

GCP에서 소스 관리 도구는 `Cloud Source Repository` 이다.

## 21

You are working as a System Administrator and have been asked to make sure that all images are patched up to date and developers are not allowed to use old images that are not up to date as per PCI compliance. How would you achieve this?

- A. Drop a mail to all the developers regarding which image to use whenever you patch images.
- B. Mark image as deprecated to prevent users from using the old image.
- C. Mark image as obsolete to prevent users from using the old image.
- D. None of the above.

### 정답

B

### 풀이

오래된 VM 이미지를 사용하는 것을 막기 위해서는 해당 이미지를 obsolete 처리해야한다

## 22

You are building an architecture for one of your client with a requirement of streaming millions of requests with high availability and durability along with HIPAA compliance. Which managed service will you prefer?

- A. Cloud Function
- B. Cloud DataProc
- C. Cloud Pub/Sub
- D. RabbitMQ

### 정답

B

### 풀이

실시간 메시징 서비스의 처리를 위한 서비스는 `Cloud Pub/Sub` 이다.

## 23

You are planning to build a micro-service application with docker containers and want to host them on Google Cloud as stateless and serverless. Which service will help you serve the need?

- A. Cloud Function
- B. App Engine Standard
- C. App Engine Flexible
- D. CloudRun

### 정답 

D

### 풀이

컨테이너 기반 서버리스, stateless 서비스를 배포할 때에는 `CloudRun`  을 사용한다.

## 24

You have been asked to deploy a highly available Kubernetes cluster using Google Kubernetes Engine by your manager. While spinning up the cluster you realize you do not see option of creating master. What can be the reason?

A. GKE does not use master node to control child nodes.
B. You need to spin up a compute instance and set it up as master node.
C. Master node is created automatically by GKE.
D. None of the above.

### 정답

C

### 풀이

GKE 를 통해 클러스터를 구축하였을 때 마스터 노드를 직접 생성할수 없는 이유는 클러스터를 구축했을 때 마스터 노드는 자동으로 생성되며 또 다른 마스터 노드를 생성할수 없기 때문

## 25

You have been asked to automate the infrastructure deployment using Google Deployment Manager service. Which all formats do Deployment manager template supports?

- A. JSON
- B. Jinja2
- C. Powershell
- D. Python

### 정답

B, D

### 풀이

Google Deployment Manager 에서 템플릿을 작성할 때 사용되는 도구는 `JinJa2`, `Python` 이다.

## Reference

https://www.whizlabs.com/learn/course/google-cloud-certified-associate-cloud-engineer/ 