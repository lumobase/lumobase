#!/usr/bin/env node

import { program } from "commander"
import { readFileSync } from "fs"

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url)).toString(),
)

program
  .name("lumobase")
  .description("Command line tool for Lumobase")
  .version(packageJson.version)

program
  .command("hello")
  .description("Say hello")
  .action(async () => {
    console.log("Hello!")
  })

program.parse()
