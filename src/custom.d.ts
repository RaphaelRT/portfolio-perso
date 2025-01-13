declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    const content: string;
    export default content;
}