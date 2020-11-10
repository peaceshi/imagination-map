/**
 * Licensed under the MIT License. See LICENSE in the project root for license information.
/*
 * LastEditors   peaceshi
 * LastEditTime  2020-11-09 19:30:18
 *
 * @author       peaceshi <peaceshi@outlook.com>
 * @description
 */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable unicorn/prevent-abbreviations */
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface Process {
    env: ProcessEnvironment;
  }
  interface ProcessEnvironment {
    /**
     * By default, there are two modes in Vite:
     *
     * * `development` is used by vite and vite serve
     * * `production` is used by vite build
     *
     * You can overwrite the default mode used for a command by passing the --mode option flag.
     *
     */
    readonly NODE_ENV: "development" | "production";
  }
}

declare let process: NodeJS.Process;

declare module "*.gif" {
  const source: string;
  export default source;
}

declare module "*.jpg" {
  const source: string;
  export default source;
}

declare module "*.jpeg" {
  const source: string;
  export default source;
}

declare module "*.png" {
  const source: string;
  export default source;
}

declare module "*.webp" {
  const source: string;
  export default source;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

  const source: string;
  export default source;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
