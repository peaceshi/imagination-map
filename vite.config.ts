/**
 * Licensed under the MIT License. See LICENSE in the project root for license information.
/*
 * LastEditors   peaceshi
 * LastEditTime  2020-11-09 18:59:30
 *
 * @author       peaceshi <peaceshi@outlook.com>
 * @description
 */
import * as reactPlugin from "vite-plugin-react";
import type { UserConfig } from "vite";
const config: UserConfig = {
  jsx: "react",
  plugins: [reactPlugin]
};

export default config;
