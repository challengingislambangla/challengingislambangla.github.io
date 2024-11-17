#!/bin/bash

current_dir="$(pwd)"/docs/browser
echo "current directory is $current_dir"
parent_dir="$(dirname "$current_dir")"
echo "parent directory is $parent_dir"
for file in "$current_dir"/*; do
  if [ -f "$file" ]; then
    mv "$file" "$parent_dir"
    echo "moved $file to root"
  fi
done