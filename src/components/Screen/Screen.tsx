import React, { ForwardedRef, forwardRef } from "react";

export type ScreenProps = {
  calc: string;
};

const Screen = forwardRef(({ calc }: ScreenProps, ref: ForwardedRef<HTMLParagraphElement>) => (
  <section className="screen">
    <p ref={ref}>{calc ?? "0"}</p>
  </section>
));

export default Screen;
