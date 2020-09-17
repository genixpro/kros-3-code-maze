#!/usr/bin/env bash

# shellcheck disable=SC1090
sed "s/__REVISION_ID__/$REVISION_ID/g" deployment.yaml > deployment_$REVISION_ID.yaml
kubectl apply -f deployment_$REVISION_ID.yaml

