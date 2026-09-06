#!/bin/sh
set -eu

task_types_file="$(mktemp -t then-and-now-db-types.XXXXXX)"
trap 'rm -f "$task_types_file"' EXIT

pnpm exec supabase gen types typescript --local > "$task_types_file"
pnpm exec prettier --write --parser typescript "$task_types_file"
cp "$task_types_file" src/shared/supabase/database.types.ts

echo "Updated src/shared/supabase/database.types.ts from the local migration state."
