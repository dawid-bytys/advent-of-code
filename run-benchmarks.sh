#!/bin/bash

set -e

COMMANDS="$(pwd)/src/**/**/benchmark.ts"

for CMD in ${COMMANDS[*]}; do
  echo $CMD
  yarn ts-node $CMD &
done

wait