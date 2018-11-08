ARG BASE_IMAGE
FROM ${BASE_IMAGE}
WORKDIR /performr-core
CMD ["cypress run --ci-build-id <id>"]