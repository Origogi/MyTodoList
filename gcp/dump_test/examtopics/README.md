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

## Reference

https://www.examtopics.com/exams/google/associate-cloud-engineer/view/