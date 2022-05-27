/*
 * —————————————————————————————————————————————————————————————————————————————
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * Project					— Koa API Template
 * Project Version	— 0.1.0
 * Description			— An API for easily bootstrapping new projects.
 * File Created			— 2022-02-25 @ 10:29:15-06:00
 * —————————————————————————————————————————————————————————————————————————————
 * Last Modified		— 2022-05-27 @ 17:49:39-05:00
 * Modified By			— Devin W. Leaman (4lch4) (hey@4lch4.email>)
 * —————————————————————————————————————————————————————————————————————————————
 * MIT License
 * 
 * Copyright (c) 2022 Devin W. Leaman (4lch4)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Printer from '@4lch4/koa-router-printer'
import Koa from 'koa'
import KBody from 'koa-body'
import Helmet from 'koa-helmet'
import { IAppConfig } from '../interfaces'
import { getRoutes } from '../routes'

export class Server {
  private config: IAppConfig
  private app: Koa

  constructor(config: IAppConfig) {
    this.app = new Koa()

    this.config = config
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(
        `${this.config.name}-v${this.config.version} has come online!`
      )
    })

    return this // For method chaining
  }

  addMiddleware() {
    this.app.use(KBody())
    this.app.use(Helmet())

    return this // For method chaining
  }

  addRoutes() {
    const routes = getRoutes()

    for (const route of routes) {
      this.app.use(route.routes())
      this.app.use(route.allowedMethods())
    }

    Printer(this.app, {
      displayHead: false,
      displayPrefix: true
    })

    return this // For method chaining
  }
}
