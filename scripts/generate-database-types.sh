#!/bin/sh
set -eu

task_types_directory="$(mktemp -d -t then-and-now-db-types.XXXXXX)"
task_types_file="$task_types_directory/database.types.ts"
trap 'rm -rf "$task_types_directory"' EXIT

pnpm exec supabase gen types typescript --local > "$task_types_file"
pnpm exec prettier --write --config ./prettier.config.mjs "$task_types_file"
cp "$task_types_file" src/shared/supabase/database.types.ts

echo "Updated src/shared/supabase/database.types.ts from the local migration state."
