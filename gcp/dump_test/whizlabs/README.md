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

## Reference

https://www.whizlabs.com/learn/course/google-cloud-certified-associate-cloud-engineer/ 