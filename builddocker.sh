#!/bin/sh

if [[ -z $1 ]] || [[ -z $2 ]]; then
  echo """
HOW TO RUN:

  ./builddocker.sh <service_name> <project> <path_to_package_json>

Example:

  ./builddocker.sh iam-service fhs-product .
  """
    
  exit 1
fi

service_name=$1
project=$2
path_to_package_json=$3
image_name="asia.gcr.io/${project}/${service_name}"

cd ${path_to_package_json}
docker build --build-arg service_name=${service_name} -t ${image_name}:0.1.0 .
docker push ${image_name}:0.1.0
