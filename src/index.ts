/*
 * —————————————————————————————————————————————————————————————————————————————
 * Author						— Devin W. Leaman (4lch4)
 * Company					— 4lch4 Industries, LLC.
 * —————————————————————————————————————————————————————————————————————————————
 * Project					— Koa API Template
 * Project Version	— 0.1.0
 * Description			— An API for easily bootstrapping new projects.
 * File Created			— 2022-05-27 @ 17:48:57-05:00
 * —————————————————————————————————————————————————————————————————————————————
 * Last Modified		— 2022-05-27 @ 17:49:29-05:00
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

import { getAppConfig, Server } from './lib'

try {
  const AppConfig = getAppConfig()

  if (AppConfig) {
    const server = new Server(AppConfig)

    server.addRoutes().addMiddleware().start()
  } else console.error('AppConfig is empty')
} catch (err) {
  console.error(err)
  process.exit(1)
}
