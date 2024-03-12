Docker login
hadia@hadia:~/myprojects/projectnode/nodejsrestapi$ docker images
REPOSITORY                                TAG       IMAGE ID       CREATED         SIZE
hadiaapp                                  latest    e9562e1eac72   2 hours ago     1.01GB
hadia/node_live_app                       latest    704df444a401   2 hours ago     1.01GB
registry.k8s.io/kube-apiserver            v1.28.3   537434729123   4 months ago    126MB
registry.k8s.io/kube-scheduler            v1.28.3   6d1b4fd1b182   4 months ago    60.1MB
registry.k8s.io/kube-controller-manager   v1.28.3   10baa1ca1706   4 months ago    122MB
registry.k8s.io/kube-proxy                v1.28.3   bfc896cf80fb   4 months ago    73.1MB
registry.k8s.io/etcd                      3.5.9-0   73deb9a3f702   10 months ago   294MB
registry.k8s.io/coredns/coredns           v1.10.1   ead0a4a53df8   13 months ago   53.6MB
registry.k8s.io/pause                     3.9       e6f181688397   17 months ago   744kB
gcr.io/k8s-minikube/storage-provisioner   v5        6e38f40d628d   2 years ago     31.5MB
hadia@hadia:~/myprojects/projectnode/nodejsrestapi$ docker tag e9562e1eac72 hadiadjadi/projectnodejs:latest
hadia@hadia:~/myprojects/projectnode/nodejsrestapi$ docker push hadiadjadi/projectnodejs:latest

hadia@hadia:~/myprojects/projectnode/nodejsrestapi/kubernetes/deployments$ kubectl apply -f node-db-deployment.yml
deployment.apps/node-db created
hadia@hadia:~/myprojects/projectnode/nodejsrestapi/kubernetes/deployments$ kubectl apply -f node-app-deployment.yml
deployment.apps/node-app created

adia@hadia:~/myprojects/projectnode/nodejsrestapi/kubernetes/deployments$ cd ..
hadia@hadia:~/myprojects/projectnode/nodejsrestapi/kubernetes$ cd services
hadia@hadia:~/myprojects/projectnode/nodejsrestapi/kubernetes/services$ kubectl apply -f node-db-service.yml
service/node-db created
hadia@hadia:~/myprojects/projectnode/nodejsrestapi/kubernetes/services$ kubectl apply -f node-app-service.yml
service/node-app created





ssh -i ~/.minikube/machines/minikube/id_rsa docker@172.17.0.2

 ssh -i ~/.minikube/machines/minikube/id_rsa docker@172.17.0.2
