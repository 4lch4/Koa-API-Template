![Codacy grade](https://img.shields.io/codacy/grade/63435c2183e449558f955c6f5e80fd22?style=flat-square) [![CI/CD Pipeline](https://github.com/4lch4/Koa-API-Template/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/4lch4/Koa-API-Template/actions/workflows/main.yml) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/4lch4/Koa-API-Template?style=flat-square) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/4lch4/Koa-API-Template?style=flat-square)

# Koa API Template

This repository is my template/starter project for creating an API written in TypeScript and using the Koa.js framework.

## Dependencies

This table provides information regarding the dependencies used by the application. If the dependency is required for the app to work then the 3rd column is set to **Required**, whereas if the app can function without the dependency, it's set to **Optional**.

|        Package Name         | Description/Notes                                                                     | Required / Optional |        Scope        |
| :-------------------------: | ------------------------------------------------------------------------------------- | :-----------------: | :-----------------: |
|      `@4lch4/koa-oto`       | Simplifies sending response codes/content.                                            |      Required       |  **dependencies**   |
| `@4lch4/koa-router-printer` | Displays registered routes in a table.                                                |      Optional       |  **dependencies**   |
|       `@4lch4/logger`       | A simple logging utility.                                                             |      Optional       |  **dependencies**   |
|        `@koa/router`        | Router middleware for koa. Provides RESTful resource routing.                         |      Required       |  **dependencies**   |
|          `dotenv`           | Loads environment variables from a .env file.                                         |      Required       |  **dependencies**   |
|            `koa`            | Koa web app framework.                                                                |      Required       |  **dependencies**   |
|         `koa-body`          | A Koa body parser middleware. Supports multipart, urlencoded and JSON request bodies. |      Required       |  **dependencies**   |
|        `koa-helmet`         | Security header middleware collection for koa.                                        |      Optional       |  **dependencies**   |
|        `@types/koa`         | TypeScript definitions for Koa                                                        |      Required       | **devDependencies** |
|    `@types/koa__router`     | TypeScript definitions for @koa/router                                                |      Required       | **devDependencies** |
|        `@types/node`        | TypeScript definitions for Node.js                                                    |      Required       | **devDependencies** |
|         `prettier`          | Prettier is an opinionated code formatter                                             |      Optional       | **devDependencies** |
|          `ts-node`          | TypeScript execution environment and REPL for node.js, with source map support        |      Optional       | **devDependencies** |
|        `typescript`         | TypeScript is a language for application scale JavaScript development                 |      Optional       | **devDependencies** |

