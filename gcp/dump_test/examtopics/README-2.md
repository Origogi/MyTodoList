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

## 81

You are operating a Google Kubernetes Engine (GKE) cluster for your company where different teams can run non-production workloads. Your Machine Learning
(ML) team needs access to Nvidia Tesla P100 GPUs to train their models. You want to minimize effort and cost. What should you do?

- A. Ask your ML team to add the ג€accelerator: gpuג€ annotation to their pod specification.
- B. Recreate all the nodes of the GKE cluster to enable GPUs on all of them.
- C. Create your own Kubernetes cluster on top of Compute Engine with nodes that have GPUs. Dedicate this cluster to your ML team.
- D. Add a new, GPU-enabled, node pool to the GKE cluster. Ask your ML team to add the cloud.google.com/gke -accelerator: nvidia-tesla-p100 nodeSelector to their pod specification.

### 정답 및 풀이

<details markdown="81">
<summary>보기</summary>

D

고성능 GPU 를 위한 노드를 처음부터 생성하기 보다는 노드 풀에 등록하여 필요할 때 사용하도록 한다.

</details>

## 82

Your VMs are running in a subnet that has a subnet mask of 255.255.255.240. The current subnet has no more free IP addresses and you require an additional
10 IP addresses for new VMs. The existing and new VMs should all be able to reach each other without additional routes. What should you do?

- A. Use gcloud to expand the IP range of the current subnet.
- B. Delete the subnet, and recreate it using a wider range of IP addresses.
- C. Create a new project. Use Shared VPC to share the current network with the new project.
- D. Create a new subnet with the same starting IP but a wider range to overwrite the current subnet.

### 정답 및 풀이

<details markdown="82">
<summary>보기</summary>

A

- 기존 서브넷 마스크를 수정하고 프리픽스 길이를 더 작은 숫자로 설정하여 기존 서브넷의 기본 IPv4 범위를 확장 가능
- 서브넷의 기본 IPv4 범위를 축소는 불가능

</details>

## 83

Your organization uses G Suite for communication and collaboration. All users in your organization have a G Suite account. You want to grant some G Suite users access to your Cloud Platform project. What should you do?

A. Enable Cloud Identity in the GCP Console for your domain.
B. Grant them the required IAM roles using their G Suite email address.
C. Create a CSV sheet with all users' email addresses. Use the gcloud command line tool to convert them into Google Cloud Platform accounts.
D. In the G Suite console, add the users to a special group called cloud-console-users@yourdomain.com. Rely on the default behavior of the Cloud Platform to grant users access if they are members of this group.

### 정답 및 풀이

<details markdown="82">
<summary>보기</summary>

B

G Suite 이메일 주소를 사용하여 필요한 IAM 역할을 부여

</details>

## 84

You have a Google Cloud Platform account with access to both production and development projects. You need to create an automated process to list all compute instances in development and production projects on a daily basis. What should you do?

- A. Create two configurations using gcloud config. Write a script that sets configurations as active, individually. For each configuration, use gcloud compute instances list to get a list of compute resources.
- B. Create two configurations using gsutil config. Write a script that sets configurations as active, individually. For each configuration, use gsutil compute instances list to get a list of compute resources.
- C. Go to Cloud Shell and export this information to Cloud Storage on a daily basis.
- D. Go to GCP Console and export this information to Cloud SQL on a daily basis.

### 정답 및 풀이

<details markdown="84">
<summary>보기</summary>

A

- gcloud : 컴퓨팅, 서비스 설정
- gsutil : 스토리지 설정

</details>

## 85

You have a large 5-TB AVRO file stored in a Cloud Storage bucket. Your analysts are proficient only in SQL and need access to the data stored in this file. You want to find a cost-effective way to complete their request as soon as possible. What should you do?

- A. Load data in Cloud Datastore and run a SQL query against it.
- B. Create a BigQuery table and load data in BigQuery. Run a SQL query on this table and drop this table after you complete your request.
- C. Create external tables in BigQuery that point to Cloud Storage buckets and run a SQL query on these external tables to complete your request.
- D. Create a Hadoop cluster and copy the AVRO file to NDFS by compressing it. Load the file in a hive table and provide access to your analysts so that they can run SQL queries.

### 정답 및 풀이

<details markdown="85">
<summary>보기</summary>

C

대용량 데이터를 분석할 때 BigQuery를 사용한다. 이때 분석하고자 하는 데이터를 카피를 하는 것이 아니라 연결만 시켜도 분석이 가능하다.

</details>

## 86

You need to verify that a Google Cloud Platform service account was created at a particular time. What should you do?

- A. Filter the Activity log to view the Configuration category. Filter the Resource type to Service Account.
- B. Filter the Activity log to view the Configuration category. Filter the Resource type to Google Project.
- C. Filter the Activity log to view the Data Access category. Filter the Resource type to Service Account.
- D. Filter the Activity log to view the Data Access category. Filter the Resource type to Google Project.

### 정답 및 풀이

<details markdown="86">
<summary>보기</summary>

A

</details>

## 87

You deployed an LDAP server on Compute Engine that is reachable via TLS through port 636 using UDP. You want to make sure it is reachable by clients over that port. What should you do?

- A. Add the network tag allow-udp-636 to the VM instance running the LDAP server.
- B. Create a route called allow-udp-636 and set the next hop to be the VM instance running the LDAP server.
- C. Add a network tag of your choice to the instance. Create a firewall rule to allow ingress on UDP port 636 for that network tag.
- D. Add a network tag of your choice to the instance running the LDAP server. Create a firewall rule to allow egress on UDP port 636 for that network tag.

### 정답 및 풀이

<details markdown="87">
<summary>보기</summary>

C

</details>

## 88

You need to set a budget alert for use of Compute Engineer services on one of the three Google Cloud Platform projects that you manage. All three projects are linked to a single billing account. What should you do?

- A. Verify that you are the project billing administrator. Select the associated billing account and create a budget and alert for the appropriate project.
- B. Verify that you are the project billing administrator. Select the associated billing account and create a budget and a custom alert.
- C. Verify that you are the project administrator. Select the associated billing account and create a budget for the appropriate project.
- D. Verify that you are project administrator. Select the associated billing account and create a budget and a custom alert.

### 정답 및 풀이

<details markdown="87">
<summary>보기</summary>

A

</details>

## 89

You are migrating a production-critical on-premises application that requires 96 vCPUs to perform its task. You want to make sure the application runs in a similar environment on GCP. What should you do?

- A. When creating the VM, use machine type n1-standard-96.
- B. When creating the VM, use Intel Skylake as the CPU platform.
- C. Create the VM using Compute Engine default settings. Use gcloud to modify the running instance to have 96 vCPUs.
- D. Start the VM using Compute Engine default settings, and adjust as you go based on Rightsizing Recommendations.

### 정답 및 풀이

<details markdown="89">
<summary>보기</summary>

A

CPU는 중간에 변경할수 없다.

</details>

## 90

You want to configure a solution for archiving data in a Cloud Storage bucket. The solution must be cost-effective. Data with multiple versions should be archived after 30 days. Previous versions are accessed once a month for reporting. This archive data is also occasionally updated at month-end. What should you do?

- A. Add a bucket lifecycle rule that archives data with newer versions after 30 days to Coldline Storage.
- B. Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage.
- C. Add a bucket lifecycle rule that archives data from regional storage after 30 days to Coldline Storage.
- D. Add a bucket lifecycle rule that archives data from regional storage after 30 days to Nearline Storage.

### 정답 및 풀이

<details markdown="91">
<summary>보기</summary>

B

- 콜드라인 : 1년에 한 번 정도 접근할 때
- 니어라인 : 1달에 한 번 정도 접근할 때
</details>

## 91

Your company's infrastructure is on-premises, but all machines are running at maximum capacity. You want to burst to Google Cloud. The workloads on Google
Cloud must be able to directly communicate to the workloads on-premises using a private IP range. What should you do?

- A. In Google Cloud, configure the VPC as a host for Shared VPC.
- B. In Google Cloud, configure the VPC for VPC Network Peering.
- C. Create bastion hosts both in your on-premises environment and on Google Cloud. Configure both as proxy servers using their public IP addresses.
- D. Set up Cloud VPN between the infrastructure on-premises and Google Cloud.

### 정답 및 풀이

<details markdown="91">
<summary>보기</summary>

D

VPC 는 같은 GCP 서비스 끼리 통신이 가능하지만 GCP와 온프리미즈와 커뮤니케이션을 하기 위해서는 VPN 을 만들어야 한다.

</details>

## 92

You want to select and configure a solution for storing and archiving data on Google Cloud Platform. You need to support compliance objectives for data from one geographic location. This data is archived after 30 days and needs to be accessed annually. What should you do?

- A. Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.
- B. Select Multi-Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.
- C. Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Nearline Storage.
- D. Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage.

### 정답 및 풀이

<details markdown="92">
<summary>보기</summary>

D

저장소는 한 곳이고 데이터는 1년에 한 번씩 접근하기에 D이다.

</details>

## 93

Your company uses BigQuery for data warehousing. Over time, many different business units in your company have created 1000+ datasets across hundreds of projects. Your CIO wants you to examine all datasets to find tables that contain an employee_ssn column. You want to minimize effort in performing this task.
What should you do?

- A. Go to Data Catalog and search for employee_ssn in the search box.
- B. Write a shell script that uses the bq command line tool to loop through all the projects in your organization.
- C. Write a script that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find the employee_ssn column.
- D. Write a Cloud Dataflow job that loops through all the projects in your organization and runs a query on INFORMATION_SCHEMA.COLUMNS view to find employee_ssn column.

### 정답 및 풀이

<details markdown="93">
<summary>보기</summary>

A

BigQuery 내에서 특정 컬럼을 검색할 때 Data Catalog 를 사용한다.

</details>

## 94

You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status:

![](https://www.examtopics.com/assets/media/exam-media/04338/0004900001.jpg)

What is the most likely cause?

- A. The pending Pod's resource requests are too large to fit on a single node of the cluster.
- B. Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.
- C. The node pool is configured with a service account that does not have permission to pull the container image used by the pending Pod.
- D. The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node.

### 정답 및 풀이

<details markdown="93">
<summary>보기</summary>

B

Reasons for a Pod Status Pending:
Troubleshooting Reason #1: Not enough CPU
Troubleshooting Reason #2: Not enough memory
Troubleshooting Reason #3: Not enough CPU and memory

</details>

## 95

You want to find out when users were added to Cloud Spanner Identity Access Management (IAM) roles on your Google Cloud Platform (GCP) project. What should you do in the GCP Console?

- A. Open the Cloud Spanner console to review configurations.
B. Open the IAM & admin console to review IAM policies for Cloud Spanner roles.
C. Go to the Stackdriver Monitoring console and review information for Cloud Spanner.
D. Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles.

### 정답 및 풀이

<details markdown="95">
<summary>보기</summary>

D

문제에서 Cloud Spanner의 현재 권한이 있는 유저를 보여주는게 아니라 어떤 유저가 언제 권한을 획득하였는지를 찾는 것이다.

</details>

## 96

Your company implemented BigQuery as an enterprise data warehouse. Users from multiple business units run queries on this data warehouse. However, you notice that query costs for BigQuery are very high, and you need to control costs. Which two methods should you use? (Choose two.)

- A. Split the users from business units to multiple projects.
- B. Apply a user- or project-level custom query quota for BigQuery data warehouse.
- C. Create separate copies of your BigQuery data warehouse for each business unit.
- D. Split your BigQuery data warehouse into multiple data warehouses for each business unit.
- E. Change your BigQuery query model from on-demand to flat rate. Apply the appropriate number of slots to each Project.

### 정답 및 풀이

<details markdown="96">
<summary>보기</summary>

B, E

flat rate : 고정 요금

</details>

## 링크

https://www.examtopics.com/exams/google/associate-cloud-engineer/view/