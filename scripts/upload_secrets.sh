#!/bin/bash
#
# Upload entries to .secrets.env as wrangler env vars.
#
# Required CLI tools:
#  - npx: Install with `npm i -g npx`
#  - jq: Install with `sudo apt install jq`

pushd "${0%/*}" > /dev/null

readonly WRANGLER_ENV=$1
readonly SECRETS_FILE=../.secrets.env
readonly WRANGLER_CONFIG=../wrangler.toml

EXTRA_ARGS="--config ${WRANGLER_CONFIG}"
if [[ ! -z ${WRANGLER_ENV} ]]; then
    EXTRA_ARGS="${EXTRA_ARGS} --env ${WRANGLER_ENV}"
fi

# Delete all previous secrets.
npx wrangler secret list ${EXTRA_ARGS} | jq -r '.[] | .name' | while read line ; do
    yes | npx wrangler secret delete ${line} ${EXTRA_ARGS}
done

# Upload the new secrets.
grep -v '^#' ${SECRETS_FILE} | while read line ; do
    IFS='=' read -ra SECRET <<< "$line"

    npx wrangler secret put ${SECRET[0]} ${EXTRA_ARGS} <<EOM
${SECRET[1]}
EOM
done

popd > /dev/null
