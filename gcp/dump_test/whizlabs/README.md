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

## Reference

https://www.whizlabs.com/learn/course/google-cloud-certified-associate-cloud-engineer/ 