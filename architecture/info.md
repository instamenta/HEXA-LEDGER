```
minikube start --namespace redpanda
```

```
kubectl taint node \
-l node-role.kubernetes.io/control-plane="" \
node-role.kubernetes.io/control-plane=:NoSchedule
```

```
helm repo add redpanda https://charts.redpanda.com
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager  --set installCRDs=true --namespace cert-manager  --create-namespace
```

```
kubectl -n redpanda port-forward svc/redpanda-console 8080:8080

```