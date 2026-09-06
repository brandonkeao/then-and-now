#!/bin/sh
set -eu

task_types_directory="$(mktemp -d -t then-and-now-db-types.XXXXXX)"
task_types_file="$task_types_directory/database.types.ts"
trap 'rm -rf "$task_types_directory"' EXIT

pnpm exec supabase gen types typescript --local > "$task_types_file"
pnpm exec prettier --write --config ./prettier.config.mjs "$task_types_file"

if ! diff -u src/shared/supabase/database.types.ts "$task_types_file"; then
  echo "Database types are stale. Run pnpm db:types with Supabase running."
  exit 1
fi

echo "Database types match the local migration state."
