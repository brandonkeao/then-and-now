#!/bin/sh
set -eu

task_types_file="$(mktemp -t then-and-now-db-types.XXXXXX)"
trap 'rm -f "$task_types_file"' EXIT

pnpm exec supabase gen types typescript --local > "$task_types_file"
pnpm exec prettier --write --parser typescript "$task_types_file"

if ! diff -u src/shared/supabase/database.types.ts "$task_types_file"; then
  echo "Database types are stale. Run pnpm db:types with Supabase running."
  exit 1
fi

echo "Database types match the local migration state."
