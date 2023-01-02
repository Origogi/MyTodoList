# ExamTopics Free Test (71-140)

ExamTopics 연습 문제 195개

## 71

You are using Container Registry to centrally store your company's container images in a separate project. In another project, you want to create a Google
Kubernetes Engine (GKE) cluster. You want to ensure that Kubernetes can download images from Container Registry. What should you do?

- A. In the project where the images are stored, grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes.
- B. When you create the GKE cluster, choose the Allow full access to all Cloud APIs option under 'Access scopes'.
- C. Create a service account, and give it access to Cloud Storage. Create a P12 key for this service account and use it as an imagePullSecrets in Kubernetes.
- D. Configure the ACLs on each image in Cloud Storage to give read-only access to the default Compute Engine service account.

### 정답 및 풀이

<details markdown="71">
<summary>보기</summary>

A

Containr Registry 에 저장된 이미지에 대해서 접근 권한을 부여할 때 IAM Role 를 사용한다.

</details>

## 72

You deployed a new application inside your Google Kubernetes Engine cluster using the YAML file specified below.

![](https://www.examtopics.com/assets/media/exam-media/04338/0003900001.png)

You check the status of the deployed pods and notice that one of them is still in PENDING status:

![](https://www.examtopics.com/assets/media/exam-media/04338/0003900002.png)

You want to find out why the pod is stuck in pending status. What should you do?

- A. Review details of the myapp-service Service object and check for error messages.
- B. Review details of the myapp-deployment Deployment object and check for error messages.
- C. Review details of myapp-deployment-58ddbbb995-lp86m Pod and check for warning messages.
- D. View logs of the container in myapp-deployment-58ddbbb995-lp86m pod and check for warning messages.

### 정답 및 풀이

<details markdown="72">
<summary>보기</summary>

C

C, D 둘중에 하나이며 컨테이너가 배포되지 않았기 때문에 로그를 볼수 없다. 그래서 정답은 C

</details>

## 73

You are setting up a Windows VM on Compute Engine and want to make sure you can log in to the VM via RDP. What should you do?

- A. After the VM has been created, use your Google Account credentials to log in into the VM.
- B. After the VM has been created, use gcloud compute reset-windows-password to retrieve the login credentials for the VM.
- C. When creating the VM, add metadata to the instance using 'windows-password' as the key and a password as the value.
- D. After the VM has been created, download the JSON private key for the default Compute Engine service account. Use the credentials in the JSON file to log in to the VM.

### 정답 및 풀이

<details markdown="73">
<summary>보기</summary>

B

VM 이 생성된 직후에는 계정 정보가 없기 때문에 reset-windows-password 를 통해 계정을 생성한다.

</details>

## 74

You want to configure an SSH connection to a single Compute Engine instance for users in the dev1 group. This instance is the only resource in this particular
Google Cloud Platform project that the dev1 users should be able to connect to. What should you do?

- A. Set metadata to enable-oslogin=true for the instance. Grant the dev1 group the compute.osLogin role. Direct them to use the Cloud Shell to ssh to that instance.
- B. Set metadata to enable-oslogin=true for the instance. Set the service account to no service account for that instance. Direct them to use the Cloud Shell to ssh to that instance.
- C. Enable block project wide keys for the instance. Generate an SSH key for each user in the dev1 group. Distribute the keys to dev1 users and direct them to use their third-party tools to connect.
- D. Enable block project wide keys for the instance. Generate an SSH key and associate the key with that instance. Distribute the key to dev1 users and direct them to use their third-party tools to connect.

### 정답 및 풀이

<details markdown="74">
<summary>보기</summary>

A

VM 의 ssh 로그인 권한을 그룹으로 지정할수 있다.

</details>

## 75

You need to produce a list of the enabled Google Cloud Platform APIs for a GCP project using the gcloud command line in the Cloud Shell. The project name is my-project. What should you do?

- A. Run gcloud projects list to get the project ID, and then run gcloud services list --project <project ID>.
- B. Run gcloud init to set the current project to my-project, and then run gcloud services list --available.
- C. Run gcloud info to view the account value, and then run gcloud services list --account <Account>.
- D. Run gcloud projects describe <project ID> to verify the project value, and then run gcloud services list --available.

### 정답 및 풀이

<details markdown="75">
<summary>보기</summary>

A

Cloud shell 은 전역적으로 리소스를 접근하기 때문에 프로젝트 ID 정보가 필요하다.

</details>

## 76

You are building a new version of an application hosted in an App Engine environment. You want to test the new version with 1% of users before you completely switch your application over to the new version. What should you do?

- A. Deploy a new version of your application in Google Kubernetes Engine instead of App Engine and then use GCP Console to split traffic.
- B. Deploy a new version of your application in a Compute Engine instance instead of App Engine and then use GCP Console to split traffic.
- C. Deploy a new version as a separate app in App Engine. Then configure App Engine using GCP Console to split traffic between the two apps.
- D. Deploy a new version of your application in App Engine. Then go to App Engine settings in GCP Console and split traffic between the current version and newly deployed versions accordingly.

### 정답 및 풀이

<details markdown="76">
<summary>보기</summary>

D

App Engine은 하나의 앱만 배포가 가능하다.

</details>

## 77

You need to provide a cost estimate for a Kubernetes cluster using the GCP pricing calculator for Kubernetes. Your workload requires high IOPs, and you will also be using disk snapshots. You start by entering the number of nodes, average hours, and average days. What should you do next?

- A. Fill in local SSD. Fill in persistent disk storage and snapshot storage.
- B. Fill in local SSD. Add estimated cost for cluster management.
- C. Select Add GPUs. Fill in persistent disk storage and snapshot storage.
- D. Select Add GPUs. Add estimated cost for cluster management.

### 정답 및 풀이

<details markdown="77">
<summary>보기</summary>

A

높은 IOPS 가 필요함으로 정답은 A

- IOPS : 초당 입/출력 작업

</details>

## 78

You are using Google Kubernetes Engine with autoscaling enabled to host a new application. You want to expose this new application to the public, using HTTPS on a public IP address. What should you do?

- A. Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer.
- B. Create a Kubernetes Service of type ClusterIP for your application. Configure the public DNS name of your application using the IP of this Service.
- C. Create a Kubernetes Service of type NodePort to expose the application on port 443 of each node of the Kubernetes cluster. Configure the public DNS name of your application with the IP of every node of the cluster to achieve load-balancing.
- D. Create a HAProxy pod in the cluster to load-balance the traffic to all the pods of the application. Forward the public traffic to HAProxy with an iptable rule. Configure the DNS name of your application using the public IP of the node HAProxy is running on.

### 정답 및 풀이

<details markdown="78">
<summary>보기</summary>

A

- B: cluster IP 는 internal IP이라서 public 노출 불가
- C: port 443 는 HTTPS 이지만 public DNS 가 load balancing 미제공
- D: HAProxy is HTTP only not HTTPS

</details>

## 79

You need to enable traffic between multiple groups of Compute Engine instances that are currently running two different GCP projects. Each group of Compute
Engine instances is running in its own VPC. What should you do?

- A. Verify that both projects are in a GCP Organization. Create a new VPC and add all instances.
- B. Verify that both projects are in a GCP Organization. Share the VPC from one project and request that the Compute Engine instances in the other project use this shared VPC.
- C. Verify that you are the Project Administrator of both projects. Create two new VPCs and add all instances.
- D. Verify that you are the Project Administrator of both projects. Create a new VPC and add all instances.

### 정답 및 풀이

<details markdown="79">
<summary>보기</summary>

B

서로 다른 프로젝트의 VM 이 통신을 하기 위해서는 하나의 프로젝트의 VPC를 shared 로 바꾸고 다른 프로젝트가 Shared VPC 를 이용한다.

Shared VPC 를 사용하기 위해서는 권한이 Organization 이 되어야 한다.

프로젝트가 단 두개일 경우 Peer to Peer 를 고려할 것

https://brunch.co.kr/@topasvga/1249

</details>

## 80

You want to add a new auditor to a Google Cloud Platform project. The auditor should be allowed to read, but not modify, all project items.
How should you configure the auditor's permissions?

- A. Create a custom role with view-only project permissions. Add the user's account to the custom role.
- B. Create a custom role with view-only service permissions. Add the user's account to the custom role.
- C. Select the built-in IAM project Viewer role. Add the user's account to this role.
- D. Select the built-in IAM service Viewer role. Add the user's account to this role.

### 정답 및 풀이

<details markdown="80">
<summary>보기</summary>

C

정답이 A 또는 C 인데.. 흠..🤔

</details>

## 링크

https://www.examtopics.com/exams/google/associate-cloud-engineer/view/